import React from 'react';
import { FaTools, FaEnvelope } from 'react-icons/fa'; // Example icons

const Feedback = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <FaTools className="text-4xl mb-4 text-gray-500" />
            <h1 className="text-center font-bold text-2xl mb-2">
                Feedback Feature Under Development
            </h1>
            <p className="text-center text-gray-600 mb-4">
                We're working hard to bring you this feature. Please check back later.
            </p>
            {/* <p className="text-center text-gray-600 flex items-center">
                <FaEnvelope className="mr-2" />
                Contact us at support@example.com for inquiries.
            </p> */}
        </div>
    );
};

export default Feedback;