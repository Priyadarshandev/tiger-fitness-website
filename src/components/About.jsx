import React from 'react';
import { CheckCircle, ShieldCheck, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { name: 'Friendly Trainers', icon: <User /> },
    { name: 'Clean Environment', icon: <ShieldCheck /> },
    { name: 'Spacious Workout Area', icon: <Heart /> },
    { name: 'Budget-Friendly Pricing', icon: <CheckCircle /> },
  ];

  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl skew-y-3">
               <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover lg:grayscale brightness-75 lg:hover:grayscale-0 hover:scale-110 transition-all duration-700" alt="Gym" />
            </div>
            <div className="w-full h-80 rounded-2xl overflow-hidden mt-12 shadow-2xl -skew-y-3">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover lg:grayscale brightness-75 lg:hover:grayscale-0 hover:scale-110 transition-all duration-700" alt="Gym" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">About Tiger Fitness</h5>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">WE BUILD <span className="text-primary italic font-black">LEGENDS</span> IN PATNA</h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Tiger Fitness, we believe fitness should be accessible to everyone. Our state-of-the-art facility in Musallahpur Hat, Patna, brings together premium-grade equipment and expert guidance at prices that won't break the bank.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-charcoal border border-white/5 group hover:border-primary/30 transition-all">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold leading-tight group-hover:text-primary transition-colors">{feature.name}</h4>
                    <p className="text-xs text-gray-400">Top-tier Quality</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
               whileHover={{ x: 10 }}
               className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline cursor-pointer tracking-wider"
            >
              LEARN MORE ABOUT US &rarr;
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
