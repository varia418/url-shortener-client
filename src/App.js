import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import FeatureCard from './components/FeatureCard';
import ResultSnackbar from './components/ResultSnackbar';
import PasswordModal from './components/PasswordModal';
import PopupModal from './components/PopupModal';
import { useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState } from 'react';
import LoadingIndicator from './components/LoadingIndicator';

const today = new Date();
today.setHours(0, 0, 0, 0);
const schema = yup
    .object({
        destination: yup.string().transform(v => /^https?:\/\//.exec(v) ? v : `https://${v}`).url("Invalid URL").required("Destination URL is required"),
        customShortCode: yup.string().max(255, "Custom URL cannot be longer than 255 characters").nullable(),
        password: yup.string().nullable(),
        expirationDate: yup.date().nullable().transform(v => (v instanceof Date && !isNaN(v) ? v.setHours(23, 59, 59) && v : null)).min(today, "Date cannot be in the past"),
    })
    .required()

let didInit = false;

function App() {
    const features = [
        {
            title: 'Free To Use',
            description: 'Use our link shortener for free, without any limitations!',
            icon: "icons/no-money.png"
        },
        {
            title: 'Custom Short Code',
            description: 'Create custom short codes for your links, making them even easier to remember!',
            icon: "icons/pencil-crayon.png"
        },
        {
            title: 'Password Protection',
            description: 'Add an extra layer of security to your links by protecting them with a password!',
            icon: "icons/lock-variant.png"
        },
        {
            title: 'Link Expiration',
            description: 'Choose when your links should expire, so you can control who can access them and when!',
            icon: "icons/calendar.png"
        }
    ];
    const location = useLocation();
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [passwordModalOpen, setPasswordModalOpen] = useState(false);
    const [popupModalOpen, setPopupModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const shortCode = location.pathname.substring(1);

    const onSubmit = async (data) => {
        setLoading(true);

        if (data.expirationDate) {
            data.expirationDate = data.expirationDate.getTime();
        }

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/shorten-url`, { method: "post", body: JSON.stringify(data) });
        const body = await res.json();

        if (res.status === 201) {
            setShortenedUrl(`${window.location.origin}/${body.shortCode}`)
        }
        else {
            setError(body.field, { type: 'custom', message: body.message });
        }

        setLoading(false);
    }

    const redirectToDestination = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get-destination`, { method: "post", body: JSON.stringify({ shortCode }) });

        if (res.status === 200) {
            const body = await res.json();
            window.location.replace(body.destination);
        }
        else if (res.status === 401) {
            setPasswordModalOpen(true);
        }
        else {
            setPopupModalOpen(true);
        }
    }

    useEffect(() => {
        if (!didInit) {
            didInit = true;
            // only runs once per app load
            if (shortCode) {
                redirectToDestination();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="container mx-auto px-4 min-h-screen flex flex-col">
            <Header />

            <h1 className="mt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl text-center">Create Short URLs</h1>
            <p className="mb-16 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">URL Shortener makes long links look cleaner and easier to share!</p>

            <div className="w-full max-w-lg m-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input type="text" name="destination" label="Destination URL" placeholder="Enter your long URL" isRequired={true} register={register} />
                    {errors.destination && <p className="mt-2 text-md text-red-500 font-medium">{errors.destination.message}</p>}
                    <Input type="text" name="customShortCode" label="Custom URL (optional)" prefix="url-shortener.varia.id.vn/" placeholder="Enter your custom short code" register={register} />
                    {errors.customShortCode && <p className="mt-2 text-md text-red-500 font-medium">{errors.customShortCode.message}</p>}
                    <Input type="password" name="password" label="Password Protection (optional)" placeholder="Enter password" register={register} />
                    <Input type="date" name="expirationDate" label="Link Expiration (optional)" register={register} />
                    {errors.expirationDate && <p className="mt-2 text-md text-red-500 font-medium">{errors.expirationDate.message}</p>}
                    <Button label="Shorten URL" />
                </form>
            </div>

            {shortenedUrl && <ResultSnackbar url={shortenedUrl} onClose={() => setShortenedUrl("")} />}

            <div className="w-fit mx-auto grid sm:grid-cols-2 gap-8 mt-20">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div>

            <Footer />

            {passwordModalOpen && <PasswordModal shortCode={shortCode} onClose={() => { setPasswordModalOpen(false); window.location.href = "/"; }} />}
            {popupModalOpen && <PopupModal onClose={() => { setPopupModalOpen(false); window.location.href = "/"; }} />}

            {loading && <LoadingIndicator />}
        </main>
    );
}

export default App;
