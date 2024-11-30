import { ArrowRight, Brain, Bot, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

export default function Hero() {
  return (
    <div id="home" className="relative bg-black min-h-screen flex items-center overflow-hidden">
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Pioneering{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-cyan-500 inline-block"
              >
                AI Innovation
              </motion.span>{' '}
              with 01CREW
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Empowering businesses with cutting-edge Generative AI, RAG systems, and IoT solutions at Kristu Jayanti College Incubation Center.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-600 flex items-center gap-2"
            >
              Start Your AI Journey <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500/10"
            >
              Explore Solutions
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              {
                icon: <Brain className="h-8 w-8 text-cyan-500 mb-4" />,
                title: "Generative AI",
                description: "Advanced GENAI solutions for content and workflow automation"
              },
              {
                icon: <Bot className="h-8 w-8 text-cyan-500 mb-4" />,
                title: "RAG Systems",
                description: "Intelligent information processing and knowledge management"
              },
              {
                icon: <Cpu className="h-8 w-8 text-cyan-500 mb-4" />,
                title: "IoT Solutions",
                description: "Smart integrations for healthcare and automation"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}