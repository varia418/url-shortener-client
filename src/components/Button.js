import React from 'react'

function Button({ label }) {
    return (
        <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>{label}</button>
    )
}

export default Button