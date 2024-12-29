import React from 'react';

const MenuItem = ({item}) => {
    const {price,recipe,name,image,category}=item || {}
    return (
        <div className='flex gap-5 mb-10'>
            <img className='w-[100px] rounded-r-full rounded-b-full  ' src={image} alt="" />
            <div>
                <h3 className='uppercase text-2xl font-thin'>{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400 '>${price}</p>
        </div>
    );
};

export default MenuItem;