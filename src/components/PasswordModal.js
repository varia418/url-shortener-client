/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form';

function PasswordModal({ shortCode, onClose }) {
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get-destination`, { method: "post", body: JSON.stringify({ shortCode, password: data.password }) });
        const body = await res.json();
        if (res.status === 200) {
            window.location.replace(body.destination);
        } else {
            setError('password', { type: 'custom', message: body.message });
        }
    }

    return (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-brightness-50">
            <div className="relative top-1/4 p-4 w-full max-w-md max-h-full mx-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Password Protection
                        </h3>
                        <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-sm text-gray-500">This URL is protected with a password. Please enter your password to continue.</p>
                            <Input type="password" name="password" label="Password" placeholder="Enter password" register={register} />
                            {errors.password && <p className="text-md text-red-500 font-medium">{errors.password.message}</p>}
                            <button type="submit" className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordModal