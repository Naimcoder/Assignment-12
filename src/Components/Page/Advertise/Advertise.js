
import { useQuery } from '@tanstack/react-query';
import AdvertiesedCard from '../AdvertiesedCard/AdvertiesedCard';

const Advertise = () => {

const{data:adveritise=[]}=useQuery({
    queryKey:['advertise'],
    queryFn:()=>fetch('https://assignment-server-12-tawny.vercel.app/advertise')
    .then(res=>res.json())
})
    

    return (
    <>
    <h3 className='mt-8 text-5xl font-semibold py-5 text-center'>Advertiesed</h3>
    <span className='h-10 w-10 bg-orange-600 '></span>
    {adveritise.length > 0 &&
        <div className='grid my-20 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto'>
        {
            adveritise.map(adveritis=><AdvertiesedCard key={adveritis._id} adveritise={adveritis}></AdvertiesedCard>)
        }
    </div>
    }
    </>
    );
};

export default Advertise;