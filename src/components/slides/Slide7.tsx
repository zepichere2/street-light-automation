import { motion } from 'motion/react';
import { Lightbulb, Globe, Car, Building2 } from 'lucide-react';

export default function Slide7() {
  const benefits = [
    { emoji: '💡', icon: Lightbulb, text: 'Saves energy — lights ON only when needed.', color: 'text-yellow-400', savings: 65 },
    { emoji: '🌍', icon: Globe, text: 'Eco-friendly and cost-effective.', color: 'text-green-400', savings: 45 },
    { emoji: '🚗', icon: Car, text: 'Enhances road visibility and safety.', color: 'text-blue-400', savings: 80 },
    { emoji: '🏙️', icon: Building2, text: 'Scalable for city-wide automation.', color: 'text-purple-400', savings: 55 },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated circuit lines background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 10}%`}
              y1="0"
              x2={`${i * 10}%`}
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-yellow-400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <motion.h2
          className="text-yellow-400 text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Benefits
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 group cursor-pointer">
                    <span className="text-3xl">{benefit.emoji}</span>
                    <Icon size={28} className={`${benefit.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-gray-200 flex-1">{benefit.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Infographic comparison */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-white text-center mb-8">Energy Consumption Comparison</h3>
              
              {/* Chart */}
              <div className="space-y-6">
                {/* Normal System */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Traditional System</span>
                    <span className="text-red-400">100%</span>
                  </div>
                  <div className="relative h-12 bg-gray-700 rounded-lg overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 to-red-400"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white z-10">Always ON</span>
                    </div>
                  </div>
                </div>

                {/* Automated System */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Automated System</span>
                    <span className="text-green-400">35%</span>
                  </div>
                  <div className="relative h-12 bg-gray-700 rounded-lg overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-600 to-green-400"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '35%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white z-10">Motion-Based</span>
                    </div>
                  </div>
                </div>

                {/* Savings indicator */}
                <motion.div
                  className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-400 rounded-lg p-4 mt-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-green-400 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      65%
                    </motion.div>
                    <p className="text-gray-300 text-sm">Energy Saved</p>
                  </div>
                </motion.div>
              </div>

              {/* Additional metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: 'CO₂ Reduced', value: '2.4T', color: 'text-green-400' },
                  { label: 'Cost Saved', value: '$1.2K', color: 'text-yellow-400' },
                  { label: 'Lifespan', value: '+40%', color: 'text-blue-400' },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-gray-900/50 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${metric.color} mb-1`}>{metric.value}</div>
                    <p className="text-gray-500 text-xs">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
