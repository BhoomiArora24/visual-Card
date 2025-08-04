import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CardSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex gap-4 justify-center mt-10">
      <motion.div
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        animate={{ width: hovered === 'right' ? 400 : 600 }}
        transition={{ duration: 0.4, type: 'tween' }}
        className="bg-blue-300 h-[200px] rounded-xl"
      />

      <motion.div
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        animate={{ width: hovered === 'left' ? 400 : 600 }}
        transition={{ duration: 0.4, type: 'tween' }}
        className="bg-green-300 h-[200px] rounded-xl"
      />
    </div>
  );
}
