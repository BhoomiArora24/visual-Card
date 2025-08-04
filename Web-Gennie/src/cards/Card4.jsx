import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CardBase from '../components/CardBase';

export default function Card1() {
  const config = {
    card: {
      width: '868px',
      height: '120px',
    },
    text: {
      color: 'text-white',
    },
    email: 'webgennie5@.com', // Replace with actual email
  };

  const ContactInfo = () => (
    <div className="flex flex-col gap-2 text-left">
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-white text-3xl" />
        <span className={`${config.text.color} text-3xl font-bold`}>
          {config.email}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className={`${config.text.color} text-xl font-bold`}>DM on:</span>
        <a href="https://x.com/WebGennie5">
        <FaTwitter className="text-white hover:text-blue-400 text-xl cursor-pointer" /></a>
        <a href="https://www.instagram.com/webgennie5/">
        <FaInstagram className="text-white hover:text-pink-500 text-xl cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/web-gennie-b5b709374/">
        <FaLinkedin className="text-white hover:text-blue-600 text-xl cursor-pointer" /></a>
      </div>
    </div>
  );

  const CardContent = () => (
    <div className="relative w-full h-full flex items-start justify-start ">
      <ContactInfo />
    </div>
  );

  return (
    <div className="p-4">
      <div className="shadow-lg rounded-lg">
        <CardBase width={config.card.width} height={config.card.height}>
          <CardContent />
        </CardBase>
      </div>
    </div>
  );
}
