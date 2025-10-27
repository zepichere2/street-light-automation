import { motion } from 'motion/react';
import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide8() {
  const conclusions = [
    "An efficient, sustainable lighting system using motion detection.",
    "Combines automation, safety, and IoT for smart infrastructure.",
    "Reliable, energy-saving, and ready for real-world use."
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated sunrise gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-orange-900/0 via-orange-500/0 to-yellow-400/0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.5] }}
        transition={{ duration: 4, delay: 2 }}
      />

      {/* Stars fading out */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              delay: 1 + Math.random(),
            }}
          />
        ))}
      </div>

      {/* Sun rising */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-yellow-400 via-orange-400 to-transparent rounded-full blur-3xl"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 100, opacity: 0.6 }}
        transition={{ duration: 4, delay: 2 }}
      />

      {/* Road at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="absolute top-1/2 left-0 w-full h-1 border-t-4 border-dashed border-yellow-500 opacity-20" />
      </div>

      {/* Street lights fading off */}
      <div className="absolute bottom-32 left-0 w-full flex justify-around px-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3] }}
            transition={{ delay: 2 + index * 0.2, duration: 1.5 }}
          >
            <div className="w-2 h-24 bg-gray-600 rounded" />
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 15px rgba(250, 204, 21, 0.8))',
                  'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                ],
                opacity: [1, 0],
              }}
              transition={{ delay: 2 + index * 0.2, duration: 1.5 }}
            >
              <Lightbulb className="text-yellow-400" size={20} fill="currentColor" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          className="text-yellow-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Conclusion
        </motion.h2>

        <div className="space-y-6 mb-12">
          {conclusions.map((text, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg border border-yellow-400/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-400 flex-shrink-0" size={28} />
              </motion.div>
              <p className="text-gray-200 text-left">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Key highlights grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '⚡', label: 'Efficient' },
            { icon: '🌱', label: 'Sustainable' },
            { icon: '🔒', label: 'Reliable' },
            { icon: '🚀', label: 'Scalable' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Thank you message */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 border-2 border-yellow-400 rounded-2xl p-8">
            <motion.h3
              className="text-white mb-4"
              animate={{
                textShadow: [
                  '0 0 10px rgba(250, 204, 21, 0.5)',
                  '0 0 20px rgba(250, 204, 21, 0.8)',
                  '0 0 10px rgba(250, 204, 21, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Thank You
            </motion.h3>
            <p className="text-yellow-400">Team 216-B</p>
            <p className="text-gray-400 mt-2 text-sm">
              DHRUV RAJ • RISHAV KUMAR • PRUTHVI RAJ PAWAR • DINESH KUMAR
            </p>
          </div>

          {/* Sparkle effects */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${i % 2 === 0 ? -10 : 110}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2 + i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Ambient light rays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-1/2 w-1 h-full bg-gradient-to-t from-yellow-400/20 to-transparent origin-bottom"
              style={{
                transform: `rotate(${-30 + i * 12}deg)`,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 0.5, 0], scaleY: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 3 + i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
