import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Pin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 sm:gap-20">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black text-primary tracking-tighter italic uppercase italic mb-6 italic">TIGER <span className="text-white font-black italic">FITNESS</span></h2>
            <p className="text-gray-400 font-black uppercase italic tracking-tight leading-relaxed italic italic">
              Empowering Patna to get fit since 2018. Top-rated gym with modern equipment and expert trainers. Join the tribe of tigers today.
            </p>
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="bg-charcoal text-white p-4 rounded-2xl hover:bg-primary hover:text-black transition-all transform hover:scale-110 shadow-2xl">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase italic tracking-widest text-lg mb-8 italic">Quick Links</h4>
            <div className="flex flex-col gap-5">
              {['Home', 'About', 'Services', 'Pricing', 'Gallery', 'Contact'].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 font-black uppercase italic tracking-widest hover:text-primary transition-colors cursor-pointer text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase italic tracking-widest text-lg mb-8 italic">Opening Hours</h4>
            <div className="space-y-6">
              <div>
                <p className="text-primary font-black uppercase italic tracking-widest text-xs mb-1 italic">Morning</p>
                <p className="text-white font-black uppercase italic tracking-tighter text-xl italic italic">5:30 AM – 11:00 AM</p>
              </div>
              <div>
                <p className="text-primary font-black uppercase italic tracking-widest text-xs mb-1 italic">Evening</p>
                <p className="text-white font-black uppercase italic tracking-tighter text-xl italic italic">4:00 PM – 9:00 PM</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-4 font-black uppercase italic text-xs text-gray-400 italic italic">Open 7 Days a week</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black italic uppercase italic tracking-widest text-lg mb-8 italic">Contact</h4>
            <div className="flex flex-col gap-6">
              <a href="tel:06202730517" className="flex items-start gap-4 group">
                <Phone className="text-primary mt-1 group-hover:scale-125 transition-transform" />
                <p className="text-gray-400 font-black uppercase italic tracking-tighter group-hover:text-white transition-colors">06202730517</p>
              </a>
              <div className="flex items-start gap-4">
                <Pin className="text-primary mt-1" />
                <p className="text-gray-400 font-black uppercase italic tracking-tighter leading-tight italic italic">Musallahpur Hat, <br /> Patna, Bihar 800004</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center text-xs text-gray-500 font-black uppercase italic tracking-[0.2em] italic italic">
          &copy; 2026 TIGER FITNESS PATNA. ALL RIGHTS RESERVED. <br /> 
          DESIGNED & DEVELOPED BY <a href="https://priyadarshan-dev-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PRIYADARSHAN</a>
        </div>
      </div>
      
      {/* Absolute decorative element */}
       <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary blur-[160px] opacity-10"></div>
    </footer>
  );
};

export default Footer;
