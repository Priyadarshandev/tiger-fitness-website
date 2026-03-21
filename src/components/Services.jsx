import React from 'react';
import { Dumbbell, Activity, UserPlus, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import weightImg from '../assets/weight-training.png';
import cardioImg from '../assets/cardio-training.png';

const Services = () => {
  const services = [
    {
      title: 'Weight Training',
      icon: <Dumbbell size={32} />,
      desc: 'Build raw power and sculpted muscle with our high-end weight machines and free weights.',
      img: weightImg,
    },
    {
      title: 'Cardio Training',
      icon: <Activity size={32} />,
      desc: 'Improve heart health and burn calories with our top-tier treadmills, cycles, and cross-trainers.',
      img: cardioImg,
    },
    {
      title: 'Personal Training',
      icon: <UserPlus size={32} />,
      desc: 'Get personalized workout plans and 1-on-1 guidance from our certified fitness experts of Patna.',
      img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Ladies Batch',
      icon: <Users size={32} />,
      desc: 'Special morning sessions exclusive for women with specialized training and comfortable environment.',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic">Our Expertise</h5>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">PREMIUM SERVICES BUILT <br /> <span className="text-primary uppercase italic">FOR RESULTS</span></h2>
          <div className="w-20 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark rounded-3xl overflow-hidden shadow-2xl group border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={service.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 lg:grayscale brightness-75 lg:group-hover:grayscale-0 group-hover:brightness-100" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-primary group-hover:scale-125 transition-transform">{service.icon}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight uppercase italic">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
