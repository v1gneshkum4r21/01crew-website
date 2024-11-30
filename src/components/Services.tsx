import { Brain, Bot, Cpu, Smartphone, Workflow, MessageSquareCode } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-cyan-500" />,
      title: "Generative AI",
      description: "State-of-the-art GENAI solutions for content generation, creative tasks, and automated workflows."
    },
    {
      icon: <Bot className="h-12 w-12 text-cyan-500" />,
      title: "RAG Systems",
      description: "Advanced Retrieval-Augmented Generation systems for intelligent information processing and knowledge management."
    },
    {
      icon: <Cpu className="h-12 w-12 text-cyan-500" />,
      title: "IoT Solutions",
      description: "Smart IoT integrations for healthcare, logistics, and home automation with real-time monitoring."
    },
    {
      icon: <Workflow className="h-12 w-12 text-cyan-500" />,
      title: "AI Automation",
      description: "Custom AI-driven systems to streamline operations and enhance business efficiency."
    },
    {
      icon: <MessageSquareCode className="h-12 w-12 text-cyan-500" />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for enhanced customer engagement and support."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-cyan-500" />,
      title: "Custom AI Development",
      description: "Tailored AI models for diagnostics, predictive analytics, and personalized business solutions."
    }
  ];

  return (
    <section id="services" className="bg-gray-900 py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Empowering businesses with cutting-edge AI and IoT solutions that drive innovation and growth
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}