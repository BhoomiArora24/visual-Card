import React, { useState } from 'react';
import Twitter from '../assets/TwitterM.png';
import Instagram from '../assets/insta.png';
import LinkedIn from '../assets/linkedIn.png';
import CardBase from '../Components/CardBase';
import CardSection from '../Components/CardSection'
import bgImage from '../assets/bg7.jpeg'


  const socialData = [
  {
    name: "LinkedIn",
    username: "webgennie5",
    followers: "25k",
    link: "https://www.linkedin.com/in/web-gennie-b5b709374/",
    eth: "Business",
    image: LinkedIn, // Replace with your styled image
    colorFrom: "from-blue-500",
    colorTo: "to-indigo-600",
  },
  {
    name: "Instagram",
    username: "@webgennie5",
    followers: "40k",
    link: "https://www.instagram.com/webgennie5/",
    eth: "Creativity",
    image: Instagram,
    colorFrom: "from-pink-500",
    colorTo: "to-purple-600",
  },
  {
    name: "Twitter",
    username: "@webgennie5",
    followers: "30k",
    link: "https://x.com/WebGennie5",
    eth: "Tech Vibes",
    image: Twitter,
    colorFrom: "from-sky-500",
    colorTo: "to-cyan-600",
    height: 40,
  },
];

export default function SocialCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4  ">
      {socialData.map((social, idx) => (
        <a
  key={idx}
  href={social.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`rounded-3xl overflow-hidden transform transition hover:scale-105 bg-gradient-to-br ${social.colorFrom} ${social.colorTo} shadow-lg
  ${social.name === "Instagram" ? "w-[330px] h-[400px]" : "w-72 h-auto"}
    ${social.name === "Twitter" ? "w-[550px] h-[400px]" : "w-72 h-auto"}`}
>
  <img
    src={social.image}
    alt={social.name}
    className={`object-cover ${social.name === "Twitter" ? "h-[320px]" : "h-64"}
    ${social.name === "Instagram" ? "h-[320px]" : "h-64"}
    ${social.name === "LinkedIn" ? "h-[320px]" : "h-64"} 
    w-full`}
  />
  <div className="relative h-full">
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
        zIndex: 0,
      }}
    />
    <div className="relative z-10 flex justify-between items-center px-4 py-3 text-white">
      <div>
        <p className="font-bold text-lg">{social.name}</p>
        <p className="text-sm opacity-80">by {social.username}</p>
      </div>
      <div className="text-right">
        <p className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full text-black">
          {social.eth}
        </p>
        <p className="mt-1 text-sm">💜 {social.followers}</p>
      </div>
    </div>
  </div>
</a>


      ))}
    </div>
  );
}
