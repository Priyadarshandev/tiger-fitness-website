import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    { 
      label: 'Call Us', 
      val: '06202730517', 
      icon: <Phone />, 
      href: 'tel:06202730517' 
    },
    { 
      label: 'WhatsApp', 
      val: 'Direct Chat', 
      icon: <MessageCircle />, 
      href: 'https://wa.me/916202730517?text=Hi%20Tiger%20Fitness,%20I%20want%20to%20join!' 
    },
    { 
      label: 'Location', 
      val: 'Musallahpur Hat, Patna, Bihar', 
      icon: <MapPin />, 
      href: 'https://maps.google.com/?q=Tiger+Fitness+Musallahpur+Hat+Patna' 
    },
    { 
      label: 'Hours', 
      val: '5:30 AM – 9 PM (Daily)', 
      icon: <Clock />, 
      href: '#' 
    },
  ];

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 italic italic">Get In Touch</h5>
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight italic uppercase italic leading-tight">THE GRIND <span className="text-primary italic font-black underline uppercase">STARTS HERE</span></h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed font-black uppercase tracking-tight italic italic">
              Your dream physique is just one call away. Join Patna’s strongest community today. 
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <a 
                  key={i} 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group hover:translate-x-4 transition-transform duration-300"
                >
                  <div className="bg-primary/20 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-xl group-hover:shadow-primary/30">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-primary font-black uppercase tracking-widest mb-1 italic italic">{info.label}</p>
                    <p className="text-xl font-black text-white uppercase italic tracking-tighter">{info.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 p-8 bg-charcoal border border-white/5 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                  <Phone size={80} className="text-white" />
               </div>
               <h4 className="text-white font-black italic uppercase tracking-tighter text-2xl mb-4 italic">NEED A QUICK CALL?</h4>
               <p className="text-gray-400 mb-6 font-black uppercase tracking-tighter italic">Tap below to call us immediately for plans and discounts.</p>
               <a href="tel:06202730517" className="inline-block bg-primary text-black px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all">CALL NOW</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[48px] overflow-hidden border-8 border-charcoal shadow-2xl"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.861072441!2d85.11867185000001!3d25.6126765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59b343e867ef%3A0xe549b3a0e633d790!2sTiger+Fitness!5e0!3m2!1sen!2sin!4v1711036000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tiger Fitness Location"
            ></iframe>
            
            {/* Address Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-dark/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
              <h4 className="text-primary font-black italic uppercase italic tracking-tighter mb-2 italic">Visit Us Today</h4>
              <p className="text-white font-black italic uppercase italic tracking-tight italic italic">Musallahpur Hat, Patna, Bihar, 800004</p>
              <div className="mt-4 w-12 h-1 bg-primary rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
