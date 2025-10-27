import { motion } from 'motion/react';
import { Cpu, Radio, Lightbulb, Zap, CircuitBoard, Battery } from 'lucide-react';

export default function Slide3() {
  const components = [
    { name: 'ESP32 microcontroller', icon: Cpu, color: 'text-blue-400' },
    { name: '1 PIR motion sensor', icon: Radio, color: 'text-green-400' },
    { name: '4 White LEDs', icon: Lightbulb, color: 'text-yellow-400' },
    { name: '4 IRFZ44N MOSFETs', icon: Zap, color: 'text-purple-400' },
    { name: 'Resistors (220Ω & 10kΩ)', icon: CircuitBoard, color: 'text-orange-400' },
    { name: 'Breadboard, wires, 12V power supply', icon: Battery, color: 'text-red-400' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L40 10 L40 40 L70 40" stroke="currentColor" fill="none" strokeWidth="2" className="text-yellow-400" />
            <circle cx="10" cy="10" r="3" fill="currentColor" className="text-yellow-400" />
            <circle cx="40" cy="40" r="3" fill="currentColor" className="text-yellow-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-yellow-400 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Components Used
        </motion.h2>

        {/* Central ESP32 hub */}
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 border-2 border-blue-400 rounded-xl flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <Cpu size={40} className="text-blue-400 mx-auto mb-2" />
              <span className="text-blue-400">ESP32</span>
            </div>
          </motion.div>

          {/* Component cards in a circle */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-48">
            {components.map((component, index) => {
              const Icon = component.icon;
              const angle = (index / components.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Connection line to ESP32 */}
                  <motion.svg
                    className="absolute left-1/2 top-1/2 w-full h-full pointer-events-none hidden md:block"
                    style={{ zIndex: -1 }}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: index * 0.15 + 1, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${-x / 4}px)`}
                      y2={`calc(50% + ${-y / 4}px)`}
                      stroke="currentColor"
                      strokeWidth="2"
                      className={component.color}
                      opacity="0.3"
                      strokeDasharray="5,5"
                    />
                  </motion.svg>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Icon size={32} className={`${component.color} mb-3`} />
                    <p className="text-gray-200 text-sm">{component.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated circuit connections */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5 + 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
