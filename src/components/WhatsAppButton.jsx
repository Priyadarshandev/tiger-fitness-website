import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/916202730517?text=Hi%20Tiger%20Fitness,%20I%20am%20interested%20in%20the%20gym%20membership. Please provide me more details."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 group uppercase tracking-widest font-black"
    >
      <MessageCircle size={32} fill="white" className="group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        WHATSAPP US
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
