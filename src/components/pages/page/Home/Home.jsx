import React from 'react';
import HeroArea from './HeroArea';
import IntroductionArea from './IntroductionArea';

const Home = () => {
    return (
        <div>
            <div className='bg-blue-900 text-white'>
                <HeroArea></HeroArea>
            </div>
            <div>
                <IntroductionArea></IntroductionArea>
            </div>
        </div>
    );
};

export default Home;