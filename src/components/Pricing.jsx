import React from 'react';
import { Check, Star, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: 'Contact for price',
      features: ['Weight Training', 'Cardio Training', 'Locker Facility', 'Expert Guidance'],
      popular: false,
      color: 'bg-charcoal',
      icon: <Check />,
    },
    {
      title: 'Monthly Plan',
      price: 'Monthly',
      features: ['All Gym Access', 'Strength & Cardio', 'Personal Trainer', 'Nutrition Tips'],
      popular: true,
      color: 'bg-primary',
      icon: <Star />,
    },
    {
      title: 'Master Plan',
      price: 'Quarterly',
      features: ['Quarterly (3 Months)', 'All Gym Access', 'Personal Training', 'Free Consultations'],
      popular: false,
      color: 'bg-charcoal',
      icon: <ShieldCheck />,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic">Limited Time Offer</h5>
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight italic uppercase leading-none">THE BEST VALUE <br /> <span className="text-primary underline font-black italic">IN PATNA</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className={`relative overflow-hidden p-10 rounded-[48px] border-2 transition-all group ${
                plan.popular ? 'border-primary bg-primary text-black' : 'border-white/10 bg-charcoal text-white hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-primary group-hover:scale-110 transition-transform ${plan.popular ? 'bg-black' : 'bg-primary/20'}`}>
                {plan.icon}
              </div>

              <h3 className={`text-4xl font-black italic uppercase mb-2 tracking-tight ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.title}</h3>
              <p className={`text-2xl font-black italic mb-8 uppercase italic underline ${plan.popular ? 'text-black' : 'text-primary'}`}>{plan.price}</p>
              
              <ul className="mb-12 space-y-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-4 font-black uppercase tracking-tight text-sm leading-tight ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="contact" 
                smooth={true} 
                duration={500}
                className={`block w-full py-6 rounded-3xl font-black uppercase italic tracking-widest text-lg transition-all transform hover:scale-105 cursor-pointer shadow-xl ${
                  plan.popular ? 'bg-black text-white hover:bg-zinc-800 shadow-black/20' : 'bg-primary text-black hover:bg-yellow-400 shadow-primary/20 hover:shadow-primary/40'
                }`}
              >
                Start Today
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
