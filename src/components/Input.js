import React from 'react'

function Input({ type, label, isRequired = false, prefix = '' }) {
    return (
        <div class="mb-6">
            <label for="large-input" class="block mb-2 text-md font-medium text-gray-900">{label}</label>
            <div class="flex flex-col gap-2 sm:items-center sm:flex-row">
                {prefix && <span className='text-nowrap'>{prefix}</span>}
                <input type={type} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' required={isRequired}></input>
            </div>
        </div>
    )
}

export default Input