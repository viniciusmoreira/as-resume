import React from 'react';
import ContactMe from './ContactMe';

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:pt-16 leading-none">
      <div className="pt-16 md:pt-32">
        <div className="pl-16">
          <h1 className="text-3xl md:text-4xl uppercase">Hi, i'm Avatar Silva</h1>
          <h2 className="text-3xl md:text-4xl font-bold md:text-5xl uppercase">Fullstack Developer</h2>
        </div>
        <ContactMe /> 
      </div>
      <div>
        <img className="-mb-4 md:-mb-6 px-3 md:px-0" src='/images/avatar.png' />
      </div>
    </div>
  )
}

export default Hero;