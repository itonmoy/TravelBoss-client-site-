import React from 'react';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Packages></Packages>
            <Review></Review>
        </div>
    );
};

export default Home;