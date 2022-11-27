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