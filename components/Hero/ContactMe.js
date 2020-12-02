import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

const ContactMe = () => {
  return (
    <div className="mx-6 px-8 relative border border-orange rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6">
      <h3 className="absolute bg-orange text-white py-2 px-6 top-0 -mt-6 text-2xl font-bold uppercase">Contact me</h3>
      <p className="text-center md:text-left">
        <FaLinkedin className="text-5xl md:text-6xl inline-block mr-3 md:mr-6"/>
        <FaGithub className="text-5xl md:text-6xl inline-block mr-3 md:mr-6"/>
        <FaYoutube className="text-5xl md:text-6xl inline-block mr-3 md:mr-6"/>
        <FiLink className="text-5xl md:text-6xl inline-block"/>
        <br />
        <span className="inline-block mt-2">or drop a line: <a href="mailto:avatar_silva@test.com">avatar_silva@test.com</a></span>
      </p>
    </div>
  )
}

export default ContactMe;