import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Very clean gym and friendly trainers. They guide you every step of the way, which is great for beginners like me.",
    author: "Rohan Kumar",
    rating: "4.8/5",
  },
  {
    text: "Best gym at cheapest price in Musallahpur Hat. The equipment is top-notch and the results are real if you are consistent.",
    author: "Priya Sharma",
    rating: "5.0/5",
  },
  {
    text: "Great equipment and spacious workout area. Never feels too crowded, and the atmosphere is always motivating.",
    author: "Amit Mehra",
    rating: "4.7/5",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <section className="py-24 bg-charcoal text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic italic">Member Stories</h5>
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight italic uppercase">WHAT OUR <span className="text-primary">TIGERS</span> SAY</h2>

        <div className="relative bg-dark border border-white/5 rounded-[40px] p-12 md:p-20 shadow-2xl">
          <Quote className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-16 text-primary opacity-20" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <p className="text-2xl md:text-3xl italic font-black text-white leading-tight mb-12 tracking-tight">
                "{testimonials[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full text-primary mb-4">
                  <User size={32} />
                </div>
                <h4 className="text-xl font-black text-white uppercase italic tracking-wider">{testimonials[index].author}</h4>
                <div className="text-primary font-bold">{testimonials[index].rating} ⭐ Rating</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 flex justify-center gap-6">
            <button 
              onClick={prev} 
              className="p-4 border border-white/10 hover:border-primary hover:text-primary rounded-full transition-all hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={next} 
              className="p-4 bg-primary text-black rounded-full transition-all hover:scale-110 active:scale-90 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
