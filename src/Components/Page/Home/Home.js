import React from 'react';
import BarndName from '../../CaregoryBrand/BarndName';
import Items from '../../Items/Items';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BarndName></BarndName>
           <Items></Items>
        </div>
    );
};

export default Home;