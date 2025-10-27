import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function Slide1() {
  const streetLights = Array.from({ length: 6 });

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
      {/* Animated stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Road at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dashed border-yellow-500 opacity-30" />
      </div>

      {/* Animated street lights */}
      <div className="absolute bottom-32 left-0 w-full flex justify-around px-8">
        {streetLights.map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
          >
            {/* Light pole */}
            <div className="w-2 h-24 bg-gray-600 rounded" />
            {/* Light bulb */}
            <motion.div
              className="relative"
              animate={{
                filter: [
                  'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                  'drop-shadow(0 0 20px rgba(250, 204, 21, 0.8))',
                  'drop-shadow(0 0 15px rgba(250, 204, 21, 0.6))',
                ],
              }}
              transition={{
                delay: 1.5 + index * 0.2,
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Lightbulb className="text-yellow-400" size={20} fill="currentColor" />
            </motion.div>
            {/* Light glow */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-yellow-400 opacity-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.1, 0.05], scale: [0, 2, 2.5] }}
              transition={{
                delay: 1.5 + index * 0.2,
                duration: 1.5,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-yellow-400 mb-4 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Street Light Automation
        </motion.h1>
        
        <motion.h2
          className="text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Smart Lighting for Safer Roads
        </motion.h2>

        <motion.div
          className="text-gray-300 mb-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="px-4">DHRUV RAJ, RISHAV KUMAR, PRUTHVI RAJ PAWAR, DINESH KUMAR</p>
          <p className="text-yellow-400 mt-2">Class 216-B</p>
        </motion.div>

        <motion.div
          className="inline-block px-4 md:px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg mx-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-yellow-400 italic text-sm md:text-base">
            "Saving Energy with Intelligent Motion Detection"
          </p>
        </motion.div>
      </div>

      {/* Ambient glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-yellow-400/5 via-transparent to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
