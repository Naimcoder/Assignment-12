import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModel from '../BookingModel/BookingModel';
import CaragoryCard from '../CategoryCard/CaragoryCard';


const CategoroyDetalis = () => {
    const [booked,setBooke]=useState(null)
    const items= useLoaderData()
    return (
       <div>
         <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-7 mt-20'>
            {items.map(category=><CaragoryCard key={category._id} categorys={category}
            setBooke={setBooke}
            ></CaragoryCard>)}
            {booked &&
             <BookingModel booked={booked}setBooke={setBooke}></BookingModel>
            }
        </div>
       
       </div>
    );
};

export default CategoroyDetalis;