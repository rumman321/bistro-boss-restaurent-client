import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-8'>
            <p className='text-orange-400'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-2 font-bold'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;