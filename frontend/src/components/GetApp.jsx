import React from 'react';
import appStore from '../assets/apple.svg';
import playStore from '../assets/android.svg';
import phones from '../assets/phones.png';

const GetApp = () => {
  return (
    <section className='w-full flexCenter flex-col bg-primary py-12 sm:py-24' id='app'>
      <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between gap-12 px-6 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl'>
        <div className='flex flex-col items-start justify-center flex-1 gap-4'>
          <h2 className='text-3xl lg:text-5xl font-bold text-secondary'>Get Our App Now</h2>
          <h4 className='uppercase text-lg text-secondary'>Available on iOS and Android</h4>
          <p className='text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur amet sint ipsum soluta, architecto earum.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <button className='flex items-center gap-3 btn-dark rounded-full px-6 py-3'>
              <img src={appStore} alt="App Store" />
              App Store
            </button>
            <button className='flex items-center gap-3 btn-dark rounded-full px-6 py-3'>
              <img src={playStore} alt="Play Store" />
              Play Store
            </button>
          </div>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src={phones} alt="phonesImg" className='w-auto h-auto max-h-[400px] lg:max-h-[500px]' />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
