import React from 'react'

function FeatureCard({ title, description, icon }) {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col items-center">
            <img src={icon} alt={title} className="w-16 h-16 mb-2" />
            <h3 className='text-3xl font-bold mb-2'>{title}</h3>
            <p class="text-left text-lg mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    )
}

export default FeatureCard