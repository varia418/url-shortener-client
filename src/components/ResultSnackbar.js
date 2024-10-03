/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function ResultSnackbar({ url }) {
    return (
        <div class="flex flex-col sm:flex-row justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm w-full lg:max-w-xl mx-auto mt-2">
            <div class="flex flex-row items-start mb-3 me-4 md:items-center md:flex-row md:mb-0 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p class="flex items-center text-sm font-normal text-gray-500">{url}</p>
            </div>
            <div class="flex items-center flex-shrink-0 self-end">
                <a href="#" class="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">Copy to Clipboard</a>
                <button data-dismiss-target="#marketing-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ResultSnackbar