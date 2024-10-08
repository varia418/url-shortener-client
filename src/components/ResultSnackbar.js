/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function ResultSnackbar({ url, onClose }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
        alert('Copied to clipboard!')
    }

    return (
        <div id="result-banner" className="flex flex-col sm:flex-row justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm w-full lg:max-w-xl mx-auto mt-2">
            <div className="flex flex-row items-start mb-3 me-4 md:items-center md:flex-row md:mb-0 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p className="flex items-center text-sm font-normal text-gray-500">{url}</p>
            </div>
            <div className="flex items-center flex-shrink-0 self-end">
                <button
                    onClick={copyToClipboard}
                    className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">Copy to Clipboard</button>
                <button onClick={onClose} type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ResultSnackbar