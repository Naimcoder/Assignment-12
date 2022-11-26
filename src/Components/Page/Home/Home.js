import React from 'react';
import Barnding from '../../Barnding/Barnding';
import BarndName from '../../CaregoryBrand/BarndName';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Barnding></Barnding>
           <BarndName></BarndName>
           <Items></Items>
        </div>
    );
};

export default Home;