import React from 'react';
import { Award, DollarSign, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '4.8⭐ Rated Gym in Patna',
      icon: <Award className="w-12 h-12" />,
      text: 'Highly rated by 360+ members for atmosphere and trainers.',
    },
    {
      title: 'Affordable Fees',
      icon: <DollarSign className="w-12 h-12" />,
      text: 'Premium fitness experience at budget-friendly prices.',
    },
    {
      title: 'Certified Trainers',
      icon: <Users className="w-12 h-12" />,
      text: 'Expert guidance from professionals who care about your results.',
    },
    {
      title: 'Clean Equipment',
      icon: <ShieldCheck className="w-12 h-12" />,
      text: 'Well-maintained, specialized machines and free weights.',
    },
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic">Commitment to Excellence</h5>
           <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight leading-tight">WHY TIGER <span className="text-primary uppercase italic font-black underline">FITNESS</span>?</h2>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-6">
           {reasons.map((reason, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.15 }}
               className="p-8 group hover:bg-charcoal border border-transparent hover:border-primary/20 rounded-3xl transition-all"
             >
               <div className="text-primary flex justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                 {reason.icon}
               </div>
               <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">{reason.title}</h3>
               <p className="text-gray-400 font-medium leading-relaxed">{reason.text}</p>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
