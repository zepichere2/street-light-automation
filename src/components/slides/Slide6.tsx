import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, AlertTriangle, Sun, Wifi } from 'lucide-react';
import { Button } from '../ui/button';

export default function Slide6() {
  const [mode, setMode] = useState<'normal' | 'emergency'>('normal');

  const enhancements = [
    { icon: Smartphone, text: 'Mobile app control for manual ON/OFF.', emoji: '📱' },
    { icon: AlertTriangle, text: 'Emergency red-light mode via app.', emoji: '🚨' },
    { icon: Sun, text: 'Light sensor for auto brightness control.', emoji: '🌦️' },
    { icon: Wifi, text: 'IoT integration for smart city networks.', emoji: '🌐' },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated network lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              top: `${(i + 1) * 12}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
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
          Enhancements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Enhancement list */}
          <div className="space-y-4">
            {enhancements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <Icon size={24} className="text-yellow-400" />
                  <p className="text-gray-200">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive phone dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-72 h-[550px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-20" />
              
              {/* Screen content */}
              <div className="relative h-full bg-gradient-to-b from-gray-800 to-gray-900 p-6 pt-10 overflow-y-auto">
                <motion.h3
                  className="text-white text-center mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Street Light Control
                </motion.h3>

                {/* Mode selector */}
                <div className="flex gap-2 mb-8">
                  <Button
                    onClick={() => setMode('normal')}
                    className={`flex-1 ${
                      mode === 'normal'
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Normal
                  </Button>
                  <Button
                    onClick={() => setMode('emergency')}
                    className={`flex-1 ${
                      mode === 'emergency'
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Emergency
                  </Button>
                </div>

                {/* Street visualization in phone */}
                <div className="relative h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg overflow-hidden mb-6">
                  <AnimatePresence mode="wait">
                    {mode === 'normal' ? (
                      <motion.div
                        key="normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        {/* Normal mode - Yellow lights */}
                        <div className="absolute bottom-0 w-full h-20 bg-gray-600">
                          <div className="absolute top-1/2 w-full h-px border-t-2 border-dashed border-yellow-500 opacity-30" />
                        </div>
                        <div className="absolute bottom-20 left-0 right-0 flex justify-around px-4">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex flex-col items-center"
                              animate={{
                                filter: [
                                  'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                                  'drop-shadow(0 0 10px rgba(250, 204, 21, 0.8))',
                                  'drop-shadow(0 0 0px rgba(250, 204, 21, 0))',
                                ],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            >
                              <div className="w-2 h-8 bg-gray-500 rounded-sm" />
                              <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="emergency"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-red-900/20"
                      >
                        {/* Emergency mode - Red lights */}
                        <div className="absolute bottom-0 w-full h-20 bg-gray-600">
                          <div className="absolute top-1/2 w-full h-px border-t-2 border-dashed border-red-500 opacity-30" />
                        </div>
                        <div className="absolute bottom-20 left-0 right-0 flex justify-around px-4">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex flex-col items-center"
                              animate={{
                                filter: [
                                  'drop-shadow(0 0 5px rgba(239, 68, 68, 1))',
                                  'drop-shadow(0 0 15px rgba(239, 68, 68, 1))',
                                  'drop-shadow(0 0 5px rgba(239, 68, 68, 1))',
                                ],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            >
                              <div className="w-2 h-8 bg-gray-500 rounded-sm" />
                              <div className="w-4 h-4 bg-red-500 rounded-full" />
                            </motion.div>
                          ))}
                        </div>
                        <div className="absolute top-2 right-2 flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full">
                          <AlertTriangle size={14} className="text-white" />
                          <span className="text-white text-xs">ALERT</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Status cards */}
                <div className="space-y-3">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Status</span>
                      <span className={`text-sm ${mode === 'emergency' ? 'text-red-400' : 'text-green-400'}`}>
                        {mode === 'emergency' ? 'Emergency Mode' : 'Active'}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Lights</span>
                      <span className="text-yellow-400 text-sm">4/6 Active</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Energy Saved</span>
                      <span className="text-green-400 text-sm">47%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl -z-10"
              animate={{
                background: mode === 'emergency'
                  ? 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-center text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tap Normal/Emergency to see mode change
        </motion.p>
      </div>
    </div>
  );
}
