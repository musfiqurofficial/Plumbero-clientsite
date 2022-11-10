import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import HeroArea from './HeroArea';
import HomePageService from './HomePageService';
import IntroductionArea from './IntroductionArea';
import Sponsers from './Sponsers';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className='bg-blue-900 text-white'>
                <HeroArea></HeroArea>
            </div>
            <div>
                <IntroductionArea></IntroductionArea>
            </div>
            <div>
                <HomePageService></HomePageService>
            </div>
            <div>
                <Sponsers></Sponsers>
            </div>
        </div>
    );
};

export default Home;