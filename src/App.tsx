import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  MessageCircle,
  Leaf,
  ArrowUp,
  Heart,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { NAV_LINKS, SERVICES, STEPS, REVIEWS } from "@/src/constants";

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

// --- Components ---

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      role="navigation"
      aria-label="Main Navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group" aria-label="White Leaf Dental Home">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Leaf size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none text-[#2C3E3E]">White Leaf</span>
            <span className="text-[10px] uppercase tracking-widest text-[#2C3E3E]/70 font-medium">Dental Clinic</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#2C3E3E]/80 hover:text-[#2C3E3E] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#2C3E3E] after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:09425186741"
            className="bg-[#5F8A8A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3D5A5A] transition-all shadow-md"
            aria-label="Call White Leaf Dental"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#2C3E3E] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#A8BCBC]/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden shadow-2xl md:hidden"
          >
            <div className="p-8 flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-[#2C3E3E] hover:text-[#5F8A8A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:09425186741"
                className="btn-primary mt-4"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

const Hero = memo(() => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-sage min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold text-[#2C3E3E] leading-[1.1] mb-6 md:mb-8">
            Your Bright <br className="hidden md:block" />
            Smile Awaits
          </h1>
          
          <p className="text-lg md:text-xl text-[#2C3E3E]/70 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience painless, hygienic, and modern dental treatments at White Leaf Dental. 
            Indore's most trusted clinic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto text-center">Book Appointment</a>
            <a href="#services" className="btn-secondary w-full sm:w-auto text-center">Our Services</a>
          </div>

          <div className="mt-12 md:mt-16 flex items-center justify-center lg:justify-start gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-[#2C3E3E]">10k+</span>
              <span className="text-[10px] text-[#2C3E3E]/50 uppercase tracking-widest font-semibold">Patients</span>
            </div>
            <div className="w-px h-10 md:h-12 bg-[#2C3E3E]/10" />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-[#2C3E3E]">15+</span>
              <span className="text-[10px] text-[#2C3E3E]/50 uppercase tracking-widest font-semibold">Years Exp.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative z-10 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5] max-w-[400px] mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop" 
              alt="Professional Dentist at White Leaf Clinic" 
              className="w-full h-full object-cover grayscale-[10%] brightness-105"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
});

const Services = memo(() => {
  return (
    <section id="services" className="section-padding bg-sage">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E] mb-4 md:mb-6">
            Comprehensive Care
          </h3>
          <p className="text-[#2C3E3E]/60 text-base md:text-lg">
            Tailored dental services using the latest technology and gentle techniques.
          </p>
        </div>
        <div className="hidden md:block w-32 h-32 md:w-48 md:h-48 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl border-4 border-white/20 rotate-3">
          <img 
            src="https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=687&auto=format&fit=crop" 
            alt="Healthy Smile" 
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            className="glass-card p-6 md:p-8 rounded-[30px] md:rounded-[40px] flex items-center justify-between group hover:bg-white/50 transition-all cursor-pointer"
          >
            <div className="max-w-[75%]">
              <h4 className="text-lg md:text-xl font-bold text-[#2C3E3E] mb-1 md:mb-2 uppercase tracking-wide">{service.title}</h4>
              <p className="text-xs md:text-sm text-[#2C3E3E]/60 leading-relaxed line-clamp-2 md:line-clamp-none">{service.desc}</p>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-[#5F8A8A]/10 flex items-center justify-center text-[#5F8A8A] border border-[#5F8A8A]/20 group-hover:scale-110 transition-transform">
              <service.icon size={20} className="md:w-6 md:h-6" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

const About = memo(() => {
  return (
    <section id="about" className="section-padding bg-sage">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          {...fadeInUp}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white/10 aspect-square max-w-[400px] mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop" 
              alt="Dentist consulting with a patient at White Leaf Dental" 
              className="w-full h-full object-cover" 
              loading="lazy"
              referrerPolicy="no-referrer" 
            />
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="order-1 lg:order-2 text-center lg:text-left">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E] mb-6 md:mb-8">
            Painless Dentistry <br className="hidden md:block" />
            in Indore
          </h3>
          <p className="text-base md:text-lg text-[#2C3E3E] mb-6 md:mb-8 leading-relaxed font-medium">
            At White Leaf Dental, we are dedicated to providing top-quality dental care with a personal touch.
          </p>
          <p className="text-sm md:text-base text-[#2C3E3E]/60 mb-8 md:mb-10 leading-relaxed">
            Our experienced team of professionals is committed to your oral health, offering a wide range of services in a warm and welcoming environment.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3">
              <Heart size={18} className="text-[#5F8A8A]" />
              <span className="text-xs font-bold text-[#2C3E3E] uppercase tracking-wider">Painless</span>
            </div>
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#5F8A8A]" />
              <span className="text-xs font-bold text-[#2C3E3E] uppercase tracking-wider">Hygienic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const Process = memo(() => {
  return (
    <section className="section-padding bg-sage">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E] mb-4 md:mb-6">How It Works</h3>
        <p className="text-[#2C3E3E]/60 text-base md:text-lg">Your journey to a perfect smile in three simple steps.</p>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.id}
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            <span className="text-6xl md:text-8xl font-display font-bold text-[#2C3E3E]/5 mb-2 md:mb-4 select-none">{step.id}</span>
            <h4 className="text-xl md:text-2xl font-bold text-[#2C3E3E] mb-2">{step.title}</h4>
            <p className="text-sm md:text-base text-[#2C3E3E]/50 max-w-[200px] md:max-w-[250px]">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

const Gallery = memo(() => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop",
      alt: "Modern Dental Tools"
    },
    {
      url: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop",
      alt: "Happy Patient"
    },
    {
      url: "https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=729&auto=format&fit=crop",
      alt: "Dental Treatment"
    }
  ];

  return (
    <section className="section-padding bg-sage overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 text-center">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E] mb-4 md:mb-6">
          Experience the Difference
        </h3>
        <p className="text-[#2C3E3E]/60 text-base md:text-lg max-w-2xl mx-auto">
          Take a look at our modern facility and happy smiles.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className={cn(
              "rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl aspect-[4/5] border-4 md:border-8 border-white/10",
              idx === 1 ? "md:-translate-y-8" : "md:translate-y-8"
            )}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

const Testimonials = memo(() => {
  return (
    <section id="reviews" className="section-padding bg-sage">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E]">
          Patient Stories
        </h3>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {REVIEWS.map((review) => (
          <motion.div
            key={review.name}
            variants={fadeInUp}
            className="glass-card p-8 md:p-10 rounded-[30px] md:rounded-[40px] text-center flex flex-col items-center"
          >
            <div className="flex justify-center gap-1 mb-4 md:mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-[#5F8A8A] text-[#5F8A8A] md:w-4 md:h-4" />
              ))}
            </div>
            <p className="text-base md:text-lg text-[#2C3E3E]/80 italic mb-6 md:mb-8 leading-relaxed flex-grow">"{review.text}"</p>
            <p className="font-bold text-[#2C3E3E] uppercase tracking-widest text-[10px] md:text-xs">{review.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

const Contact = memo(() => {
  return (
    <section id="contact" className="section-padding bg-sage">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20">
        <motion.div {...fadeInUp} className="text-center lg:text-left">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#2C3E3E] mb-8 md:mb-12">
            Get in Touch
          </h3>
          
          <div className="space-y-6 md:space-y-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5F8A8A]/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#5F8A8A] flex-shrink-0 border border-[#5F8A8A]/20">
                <MapPin size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="font-bold text-lg md:text-xl text-[#2C3E3E] mb-1">Our Location</h4>
                <p className="text-sm md:text-base text-[#2C3E3E]/60 leading-relaxed">
                  Navjeevan Tower, Near Saket Square, <br />
                  Old Palasia, Indore, MP 452018
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5F8A8A]/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#5F8A8A] flex-shrink-0 border border-[#5F8A8A]/20">
                <Phone size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="font-bold text-lg md:text-xl text-[#2C3E3E] mb-1">Phone Number</h4>
                <a href="tel:09425186741" className="text-base md:text-lg text-[#2C3E3E]/70 hover:text-[#5F8A8A] transition-colors">094251 86741</a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5F8A8A]/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#5F8A8A] flex-shrink-0 border border-[#5F8A8A]/20">
                <Clock size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="font-bold text-lg md:text-xl text-[#2C3E3E] mb-1">Working Hours</h4>
                <p className="text-sm md:text-base text-[#2C3E3E]/60">Mon – Sat: 11:00 AM – 6:00 PM</p>
                <p className="text-sm md:text-base text-[#2C3E3E]/60">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 md:border-[10px] border-white/10 h-[300px] md:h-[500px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.252886759556!2d75.8755624!3d22.7258914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303edea13355d%3A0x56953f45da506863!2sWhite%20Leaf%20Dental%20%7C%20Best%20Dental%20Clinic%20In%20Indore!5e0!3m2!1sen!2sin!4v1775646127901!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            title="White Leaf Dental Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
});

const Footer = memo(() => {
  return (
    <footer className="bg-sage pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#5F8A8A] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#5F8A8A]/20">
                <Leaf size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-[#2C3E3E]">White Leaf</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2C3E3E]/50 font-bold">Dental Clinic</span>
              </div>
            </div>
            <p className="text-[#2C3E3E]/60 max-w-sm leading-relaxed mb-8">
              Indore's premier dental clinic providing painless, hygienic, and professional treatments for a healthier, brighter smile.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:09425186741" 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[#2C3E3E] hover:bg-[#5F8A8A] hover:text-white transition-all"
                aria-label="Call Us"
              >
                <Phone size={18} />
              </a>
              <a 
                href="https://wa.me/919425186741?text=Hi%20White%20Leaf%20Dental%2C%20I'd%20like%20to%20book%20an%20appointment." 
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[#2C3E3E] hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp Us"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#2C3E3E] mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#2C3E3E]/60 hover:text-[#5F8A8A] transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[#2C3E3E] mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-[#2C3E3E]/60 leading-relaxed">
                <MapPin size={18} className="text-[#5F8A8A] flex-shrink-0" />
                Navjeevan Tower, Near Saket Square, Old Palasia, Indore, MP 452018
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2C3E3E]/60">
                <Phone size={18} className="text-[#5F8A8A] flex-shrink-0" />
                094251 86741
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2C3E3E]/60">
                <Clock size={18} className="text-[#5F8A8A] flex-shrink-0" />
                Mon – Sat: 11am – 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2C3E3E]/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#2C3E3E]/40 text-xs font-medium">
            © {new Date().getFullYear()} White Leaf Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-[#2C3E3E]/30 uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-[#5F8A8A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#5F8A8A] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

const StickyCTA = memo(() => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="glass-card rounded-[28px] p-2 flex gap-2 shadow-2xl border-white/40">
        <a 
          href="tel:09425186741" 
          className="flex-1 bg-[#2C3E3E] text-white py-3.5 rounded-[20px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform text-sm"
        >
          <Phone size={18} />
          Call
        </a>
        <a 
          href="https://wa.me/919425186741?text=Hi%20White%20Leaf%20Dental%2C%20I'd%20like%20to%20book%20an%20appointment." 
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-[20px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
});

const FloatingWhatsApp = memo(() => {
  return (
    <a 
      href="https://wa.me/919425186741?text=Hi%20White%20Leaf%20Dental%2C%20I'd%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
    >
      <MessageCircle size={32} />
    </a>
  );
});

const ScrollToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-10 left-10 z-40 w-12 h-12 bg-[#5F8A8A]/20 backdrop-blur-md border border-[#5F8A8A]/30 text-[#5F8A8A] rounded-full flex items-center justify-center shadow-xl hover:bg-[#5F8A8A]/40 transition-all hidden md:flex"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

// --- Main App ---

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-sage selection:bg-white/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
