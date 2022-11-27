import React, { useEffect, useState } from 'react';
import AdvertiesedCard from '../AdvertiesedCard/AdvertiesedCard';

const Advertise = () => {
    const [adveritise,setAdvertise]=useState([])
    useEffect(()=>{
     fetch('http://localhost:8000/advertise')
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        setAdvertise(data)
     })
    },[])
  console.log(adveritise)
    return (
    <>
    <h3 className='mt-8 text-5xl font-semibold py-5 text-center'>Advertiesed</h3>
    <span className='h-10 w-10 bg-orange-600 '></span>
    {adveritise.length > 0 &&
        <div className='grid my-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto'>
        {
            adveritise.map(adveritise=><AdvertiesedCard key={adveritise._id} adveritise={adveritise}></AdvertiesedCard>)
        }
    </div>
    }
    </>
    );
};

export default Advertise;