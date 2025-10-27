import { motion } from 'motion/react';
import { Car, Lightbulb } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-yellow-400 mb-8">Overview</h2>
          
          <div className="space-y-6">
            {[
              "Lights turn ON when motion is detected and fade OFF after area is clear.",
              "Uses ESP32 + PIR sensor + LEDs for automation.",
              "Energy-efficient, scalable, and suitable for smart cities."
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg border border-yellow-400/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-200">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Animated car and lights */}
        <motion.div
          className="relative h-80"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Road */}
          <div className="absolute bottom-0 w-full h-24 bg-gray-700 rounded-lg">
            <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-yellow-500 opacity-40" />
          </div>

          {/* Street lights */}
          {[0, 1, 2].map((index) => (
            <div key={index} className="absolute" style={{ left: `${index * 35 + 15}%`, bottom: '96px' }}>
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-16 bg-gray-600 rounded" />
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    filter: [
                      'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                      'drop-shadow(0 0 15px rgba(250, 204, 21, 0.8))',
                      'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                    ],
                  }}
                  transition={{
                    delay: index * 0.8 + 2,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Lightbulb size={16} className="text-yellow-400" fill="currentColor" />
                </motion.div>
                {/* Light beam */}
                <motion.div
                  className="absolute top-16 w-24 h-24 bg-yellow-400 opacity-0 rounded-full blur-xl"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    delay: index * 0.8 + 2,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </div>
            </div>
          ))}

          {/* Animated car */}
          <motion.div
            className="absolute bottom-12 flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg"
            initial={{ left: '-20%' }}
            animate={{ left: '110%' }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 1,
            }}
          >
            <Car size={24} className="text-white" />
            <div className="w-8 h-1 bg-yellow-300 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
