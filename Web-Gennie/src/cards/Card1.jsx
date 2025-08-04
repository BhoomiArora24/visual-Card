import React, { useState } from 'react';
import CardBase from '../components/CardBase';
import wgLogo from '../assets/wg-nobg.png';

export default function Card1() {
  const [isHovered, setIsHovered] = useState(false);

  // Configuration object for easy customization
  const config = {
  card: {
    width: '1200px',
    height: '150px',
  },
  logo: {
    size: 'w-28 h-28',
    imageSize: 'w-24 h-24',
    hoverTransform: '-translate-x-2', // small subtle move
    backgroundColor: 'bg-white',
  },
  text: {
    title: 'WebGennie',
    subtitle: '✨ Magic ✨',
    titleStyles: 'text-4xl font-extrabold',
    subtitleStyles: 'text-2xl font-medium',
    color: 'text-white',
  },
  animations: {
    duration: 'duration-700',
    easing: 'ease-in-out',
  },
};


  // Animation classes helper
  const getAnimationClasses = (baseClasses, condition) => {
    return `${baseClasses} transition-all ${config.animations.duration} ${config.animations.easing} ${condition}`;
  };

  // Logo component
  const LogoCircle = () => (
    <div
      className={getAnimationClasses(
        `${config.logo.size} rounded-full ${config.logo.backgroundColor} flex items-center justify-center shadow cursor-pointer overflow-hidden`,
        isHovered ? config.logo.hoverTransform : ''
      )}
    >
      <img
        className={`${config.logo.imageSize} object-contain`}
        src={wgLogo}
        alt="WebGennie Logo"
      />
    </div>
  );

  // Text component
  const AnimatedText = () => (
    <div
      className={getAnimationClasses(
        'ml-2 overflow-hidden',
        isHovered ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'
      )}
    >
      <div className="flex flex-col items-start justify-center">
        <p className={`${config.text.titleStyles} ${config.text.color} whitespace-nowrap`}>
          {config.text.title}
        </p>
        <p className={`${config.text.subtitleStyles} ${config.text.color} whitespace-nowrap opacity-90`}>
          {config.text.subtitle}
        </p>
      </div>
    </div>
  );

  // Main content area
  const CardContent = () => (
    <div
      className={getAnimationClasses(
        'relative w-full h-full flex items-center justify-center',
        ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <LogoCircle />
        <AnimatedText />
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center p-4">
  <div className="shadow-lg rounded-lg">
    <CardBase width={config.card.width} height={config.card.height}>
      <CardContent />
    </CardBase>
  </div>
</div>
  );
}