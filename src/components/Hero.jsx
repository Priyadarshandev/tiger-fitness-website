import React from 'react';
import { Link } from 'react-scroll';
import { Phone, Star, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:grayscale shadow-inner brightness-[0.3]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-primary/20 text-primary px-4 py-2 rounded-full mb-6 font-bold text-sm tracking-widest uppercase">
              <Star size={16} fill="currentColor" /> Patna's Most Affordable Gym
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              TRANSFORM YOUR <br />
              <span className="text-primary italic">BODY & MIND</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
              Tiger Fitness (टाइगर फिटनेस) is your ultimate destination for fitness excellence. 
              Join Patna's top-rated gym with expert trainers & budget-friendly fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className="bg-primary text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transform hover:scale-105 cursor-pointer uppercase tracking-wider"
              >
                Join Now
              </Link>
              <a 
                href="tel:06202730517"
                className="bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3 uppercase tracking-wider transform hover:scale-105"
              >
                <Phone size={24} /> Call Now
              </a>
            </div>

            {/* Floating Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
              {[
                { label: 'Rating', val: '4.8⭐', icon: <Star /> },
                { label: 'Reviews', val: '363+', icon: <Users /> },
                { label: 'Affordable', val: 'Plans', icon: <TrendingUp /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <div className="text-primary mb-1 flex justify-center md:justify-start">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.val}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* This side can contain a logo or a character image if needed, or left empty for visual balance on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-end relative"
          >
            <div className="relative w-80 h-[500px] border-8 border-primary rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.3)]">
               <img 
                 src={heroBg} 
                 className="absolute inset-0 w-full h-full object-cover scale-150 grayscale-0 brightness-110" 
                 alt="Gym" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-black text-xl leading-tight">THE LION IS HUNGRY</p>
                <p className="text-primary font-bold text-sm tracking-widest uppercase">Tiger Fitness Patna</p>
              </div>
            </div>
            
            {/* Absolute element behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
