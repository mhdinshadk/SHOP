import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className='w-full bg-tertiary py-8'>
      <div className='max-w-[1440px] mx-auto flexCenter flex-col gap-y-4'>
        <h4 className='text-white'>Follow us on Social Media</h4>
        <SocialIcons />
        <hr className='h-[1px] w-2/3 my-3' />
        <div className='text-white'>Copyright &copy; Shopsy | All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
