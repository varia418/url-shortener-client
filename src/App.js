import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';
import FeatureCard from './components/FeatureCard';
import ResultSnackbar from './components/ResultSnackbar';
import { useLocation } from 'react-router-dom'

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
    const [errorMessage, setErrorMessage] = useState("Please enter a valid URL.");
    const location = useLocation();

    if (location.pathname.length > 1) {
        const shortCode = location.pathname.substring(1)
        console.log(shortCode);
    }

    return (
        <main className="container mx-auto px-4 min-h-screen flex flex-col">
            <Header />

            <h1 className="mt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl text-center">Create Short URLs</h1>
            <p className="mb-16 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">URL Shortener makes long links look cleaner and easier to share!</p>

            <div class="w-full max-w-lg m-auto">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input type="text" label="Destination URL" placeholder="Enter your long URL" isRequired={true} />
                    <Input type="text" label="Custom URL (optional)" prefix="url-shortener.varia.id.vn/" placeholder="Enter your custom short code" />
                    <Input type="password" label="Password Protection (optional)" placeholder="Enter password" />
                    <Input type="date" label="Link Expiration (optional)" />
                    <Button label="Shorten URL" />
                    {errorMessage && <p class="mt-2 text-md text-red-500 font-medium">{errorMessage}</p>}
                </form>
            </div>

            <ResultSnackbar url="https://url-shortener.varia.id.vn/3je7h4z2" />

            <div class="w-fit mx-auto grid sm:grid-cols-2 gap-8 mt-20">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div>

            <Footer />
        </main>
    );
}

export default App;
