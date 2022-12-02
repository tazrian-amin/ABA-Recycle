import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection';
import Banner from '../Banner/Banner';
import FeaturedPhones from '../FeaturedPhones/FeaturedPhones';
import SellingSection from '../SellingSection/SellingSection';

const Home = () => {

    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <FeaturedPhones></FeaturedPhones>
            <SellingSection></SellingSection>
        </div>
    );
};

export default Home;