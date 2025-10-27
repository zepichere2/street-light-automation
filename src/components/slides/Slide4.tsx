import { useState } from 'react';
import { motion } from 'motion/react';
import { Radio, Cpu, Zap, Lightbulb, Clock } from 'lucide-react';

export default function Slide4() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { number: '1️⃣', text: 'PIR detects motion.', icon: Radio, color: 'text-green-400', pathColor: 'stroke-green-400' },
    { number: '2️⃣', text: 'ESP32 processes signal.', icon: Cpu, color: 'text-blue-400', pathColor: 'stroke-blue-400' },
    { number: '3️⃣', text: 'MOSFETs switch LEDs.', icon: Zap, color: 'text-purple-400', pathColor: 'stroke-purple-400' },
    { number: '4️⃣', text: 'LEDs fade ON smoothly.', icon: Lightbulb, color: 'text-yellow-400', pathColor: 'stroke-yellow-400' },
    { number: '5️⃣', text: 'Lights fade OFF after delay.', icon: Clock, color: 'text-red-400', pathColor: 'stroke-red-400' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-yellow-400 text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Workflow
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          How the System Works
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Steps list */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    hoveredStep === index
                      ? 'bg-gray-700 border-yellow-400 scale-105'
                      : 'bg-gray-800 border-gray-700'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{step.number}</span>
                    <Icon size={24} className={step.color} />
                    <p className="text-gray-200">{step.text}</p>
                  </div>
                  
                  {hoveredStep === index && (
                    <motion.div
                      className="absolute inset-0 border-2 border-yellow-400 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layoutId="highlight"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Circuit visualization */}
          <motion.div
            className="relative h-96 bg-gray-800/50 rounded-xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-full" viewBox="0 0 300 400">
              {/* PIR Sensor */}
              <motion.g
                animate={{
                  filter: hoveredStep === 0 ? 'drop-shadow(0 0 10px rgb(74, 222, 128))' : 'none',
                }}
              >
                <circle cx="50" cy="50" r="20" fill="#1f2937" stroke="#4ade80" strokeWidth="2" />
                <text x="50" y="55" textAnchor="middle" fill="#4ade80" fontSize="12">PIR</text>
              </motion.g>

              {/* ESP32 */}
              <motion.g
                animate={{
                  filter: hoveredStep === 1 ? 'drop-shadow(0 0 10px rgb(96, 165, 250))' : 'none',
                }}
              >
                <rect x="110" y="150" width="80" height="60" rx="5" fill="#1f2937" stroke="#60a5fa" strokeWidth="2" />
                <text x="150" y="185" textAnchor="middle" fill="#60a5fa" fontSize="14">ESP32</text>
              </motion.g>

              {/* MOSFET */}
              <motion.g
                animate={{
                  filter: hoveredStep === 2 ? 'drop-shadow(0 0 10px rgb(192, 132, 252))' : 'none',
                }}
              >
                <polygon points="150,270 130,290 170,290" fill="#1f2937" stroke="#c084fc" strokeWidth="2" />
                <text x="150" y="305" textAnchor="middle" fill="#c084fc" fontSize="10">MOSFET</text>
              </motion.g>

              {/* LED */}
              <motion.g
                animate={{
                  filter: hoveredStep === 3 || hoveredStep === 4 ? 'drop-shadow(0 0 15px rgb(250, 204, 21))' : 'none',
                  opacity: hoveredStep === 4 ? 0.5 : 1,
                }}
              >
                <circle cx="150" cy="350" r="15" fill="#1f2937" stroke="#facc15" strokeWidth="2" />
                <motion.circle
                  cx="150"
                  cy="350"
                  r="8"
                  fill="#facc15"
                  animate={{
                    opacity: hoveredStep === 3 ? [0, 1] : hoveredStep === 4 ? [1, 0] : 0.3,
                  }}
                  transition={{ duration: 1, repeat: hoveredStep === 3 || hoveredStep === 4 ? Infinity : 0 }}
                />
              </motion.g>

              {/* Connection paths */}
              <motion.path
                d="M 50 70 L 50 180 L 110 180"
                fill="none"
                strokeWidth="3"
                className={hoveredStep === 0 ? 'stroke-green-400' : 'stroke-gray-600'}
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: hoveredStep === 0 ? [0, -10] : 0,
                }}
                transition={{ duration: 1, repeat: hoveredStep === 0 ? Infinity : 0 }}
              />
              
              <motion.path
                d="M 150 210 L 150 270"
                fill="none"
                strokeWidth="3"
                className={hoveredStep === 1 ? 'stroke-blue-400' : 'stroke-gray-600'}
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: hoveredStep === 1 ? [0, -10] : 0,
                }}
                transition={{ duration: 1, repeat: hoveredStep === 1 ? Infinity : 0 }}
              />
              
              <motion.path
                d="M 150 295 L 150 335"
                fill="none"
                strokeWidth="3"
                className={hoveredStep === 2 ? 'stroke-purple-400' : 'stroke-gray-600'}
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: hoveredStep === 2 ? [0, -10] : 0,
                }}
                transition={{ duration: 1, repeat: hoveredStep === 2 ? Infinity : 0 }}
              />

              {/* Signal flow indicators */}
              {hoveredStep !== null && (
                <>
                  {hoveredStep >= 0 && (
                    <circle r="4" fill="#facc15">
                      <animateMotion dur="1s" repeatCount="indefinite" path="M 50 70 L 50 180 L 110 180" />
                    </circle>
                  )}
                  {hoveredStep >= 1 && (
                    <circle r="4" fill="#facc15">
                      <animateMotion dur="1s" repeatCount="indefinite" path="M 150 210 L 150 270" />
                    </circle>
                  )}
                  {hoveredStep >= 2 && (
                    <circle r="4" fill="#facc15">
                      <animateMotion dur="1s" repeatCount="indefinite" path="M 150 295 L 150 335" />
                    </circle>
                  )}
                </>
              )}
            </svg>

            <p className="text-gray-400 text-sm text-center mt-4">
              Hover on each step to highlight circuit path
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
