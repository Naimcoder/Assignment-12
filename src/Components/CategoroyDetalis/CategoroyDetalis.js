import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModel from '../BookingModel/BookingModel';
import CaragoryCard from '../CategoryCard/CaragoryCard';


const CategoroyDetalis = () => {
    const items= useLoaderData()
    const [booked,setBooke]=useState(null)
    return (
       <div>
         <div className='grid grid-cols-3 container mx-auto gap-7 mt-20'>
            {items.map(category=><CaragoryCard key={category._id} categorys={category}
            setBooke={setBooke}
            ></CaragoryCard>  )}
        </div>
        <BookingModel booked={booked}></BookingModel>
       </div>
    );
};

export default CategoroyDetalis;