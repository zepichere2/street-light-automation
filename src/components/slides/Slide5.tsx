import { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Lightbulb } from 'lucide-react';
import { Slider } from '../ui/slider';

export default function Slide5() {
  const [carPosition, setCarPosition] = useState([0]);

  // Calculate which lights should be on based on car position
  const getLightOpacity = (lightIndex: number) => {
    const pos = carPosition[0];
    const lightPositions = [15, 30, 45, 60, 75, 90];
    const lightPos = lightPositions[lightIndex];
    const distance = Math.abs(pos - lightPos);
    
    if (distance < 15) {
      return 1 - (distance / 15) * 0.7; // Gradually fade based on distance
    }
    return 0.2;
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <motion.h2
          className="text-yellow-400 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Model Demonstration
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left: Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              "Shows two PIRs and six LEDs simulating a road segment.",
              "Car enters → PIR1 triggers LEDs 1–3 to fade ON quickly.",
              "Car exits → LEDs fade OFF as PIR2 triggers LEDs 4–6.",
              "Ensures continuous illumination along moving vehicle."
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-200 text-sm">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Interactive 3D street demonstration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 3D Street View */}
            <div className="relative h-80 bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl overflow-hidden border border-gray-600 perspective-1000">
              {/* Road with perspective */}
              <div className="absolute bottom-0 left-0 right-0 h-40">
                <div 
                  className="absolute bottom-0 w-full bg-gray-600"
                  style={{
                    height: '100%',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {/* Road markings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1 h-full border-l-4 border-dashed border-yellow-500 opacity-40" />
                </div>
              </div>

              {/* Street lights with perspective */}
              <div className="absolute bottom-40 left-0 right-0">
                {Array.from({ length: 6 }).map((_, index) => {
                  const position = 15 + index * 15; // positions from 15% to 90%
                  const opacity = getLightOpacity(index);
                  const scale = 0.6 + (index * 0.08); // Perspective scaling
                  const bottom = 10 + index * 8; // Vertical positioning for perspective

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-500"
                      style={{
                        left: `${position}%`,
                        bottom: `${bottom}px`,
                        transform: `scale(${scale})`,
                      }}
                    >
                      {/* Light pole */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="relative"
                          animate={{
                            filter: `drop-shadow(0 0 ${opacity * 20}px rgba(250, 204, 21, ${opacity}))`,
                          }}
                        >
                          <Lightbulb 
                            size={20} 
                            className="text-yellow-400" 
                            fill={opacity > 0.5 ? 'currentColor' : 'none'}
                            style={{ opacity: 0.3 + opacity * 0.7 }}
                          />
                        </motion.div>
                        <div className="w-1 h-12 bg-gray-600 rounded" />
                        
                        {/* Light cone */}
                        <motion.div
                          className="absolute top-5 w-32 h-32 bg-yellow-400 rounded-full blur-2xl pointer-events-none"
                          style={{
                            opacity: opacity * 0.15,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Car */}
              <motion.div
                className="absolute bottom-20 flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-lg shadow-lg z-20"
                style={{
                  left: `${carPosition[0]}%`,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <Car size={20} className="text-white" />
                {/* Headlights */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-1 bg-yellow-200 rounded-full blur-sm" />
              </motion.div>

              {/* PIR sensors indicators */}
              <div className="absolute bottom-32 left-[20%] bg-green-500/20 border border-green-400 px-2 py-1 rounded text-xs text-green-400">
                PIR1
              </div>
              <div className="absolute bottom-32 right-[15%] bg-green-500/20 border border-green-400 px-2 py-1 rounded text-xs text-green-400">
                PIR2
              </div>
            </div>

            {/* Interactive Slider */}
            <div className="mt-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-4 text-center">
                Move the car along the road
              </p>
              <Slider
                value={carPosition}
                onValueChange={setCarPosition}
                max={95}
                min={5}
                step={1}
                className="cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Start</span>
                <span>End</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
