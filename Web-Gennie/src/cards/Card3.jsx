import React from 'react';
import CardBase from '../components/CardBase';

export default function Card1() {
  // Configuration object for easy customization
  const config = {
    card: {
      width: '300px',
      height: '120px',
    },
    text: {
      title: 'Web magic, ',
      subtitle: 'made simple.',
      titleStyles: 'text-4xl font-extrabold',
      subtitleStyles: 'text-2xl font-medium',
      color: 'text-white',
    },
  };

  // Text component
  const TextBlock = () => (
    <div >
      <div className="items-start justify-center">
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
    <div className="relative w-full h-full  items-center justify-center">
      <div className="items-center">
        <TextBlock />
      </div>
    </div>
  );

  return (
    <div className="ml-38 justify-center items-center p-4">
      <div className="shadow-lg rounded-lg">
        <CardBase width={config.card.width} height={config.card.height}>
          <CardContent />
        </CardBase>
      </div>
    </div>
  );
}
