import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic">Experience the Energy</h5>
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight italic uppercase italic">INSIDE THE <span className="text-primary">TIGER CAGE</span></h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-dark lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
            >
              <img 
                src={img} 
                className="w-full object-cover rounded-3xl" 
                alt="Gym Interior" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-black uppercase text-xl italic tracking-tighter drop-shadow-lg">Tiger Fitness Patna</p>
                <div className="w-12 h-1.5 bg-primary rounded-full mt-1 line-clamp-1"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
