import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
    const [errorMessage, setErrorMessage] = useState("Please enter a valid URL.");
    return (
        <main className="container mx-auto px-4 min-h-screen flex flex-col">
            <Header />
            <h1 className="mt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xl text-center">Create Short URLs</h1>
            <p className="mb-16 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">URL Shortener makes long links look cleaner and easier to share!</p>

            <div class="w-full max-w-lg m-auto">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input type="text" label="Destination URL" isRequired={true} />
                    <Input type="text" label="Custom URL (optional)" prefix="url-shortener.varia.id.vn/" />
                    <Input type="password" label="Password Protection (optional)" />
                    <Input type="date" label="Link Expiration (optional)" />
                    <Button label="Shorten URL" />
                    {errorMessage && <p class="mt-2 text-md text-red-500 font-medium">{errorMessage}</p>}
                </form>
            </div>

            <Footer />
        </main>
    );
}

export default App;
