import React, { useState } from 'react';

const TrackingNumber = () => {
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle submission logic here
        // console.log('Tracking number:', trackingNumber);

        // Clear the input field after submission
        setTrackingNumber("");
    };

    return (
        <div className="rounded-lg p-6 shadow-lg pt-56">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Track Your Shipment</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md">
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-lg text-gray-800 placeholder-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter tracking number"
                    />
                    <button type="submit" className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Track</button>
                </div>
            </form>
            <p className="mt-4 section-text mb-24 text-gray-600">Enter your tracking number above to track the status of your shipment.</p>
        </div>
    );
};

export default TrackingNumber;
