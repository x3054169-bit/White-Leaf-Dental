import { 
  Stethoscope, 
  ShieldCheck, 
  Zap, 
  Leaf 
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning for a sparkling smile and optimal hygiene.",
    icon: Stethoscope,
  },
  {
    title: "Fillings & Restorations",
    desc: "Durable and natural-looking fillings to restore your teeth.",
    icon: ShieldCheck,
  },
  {
    title: "Tooth Extractions",
    desc: "Painless and safe extractions performed by expert professionals.",
    icon: Zap,
  },
  {
    title: "Orthodontic Treatments",
    desc: "Achieve a beautiful, aligned smile with our modern solutions.",
    icon: Leaf,
  }
];

export const STEPS = [
  { id: "01", title: "Schedule", desc: "Easy booking for your convenience." },
  { id: "02", title: "Assessment", desc: "Comprehensive oral health evaluation." },
  { id: "03", title: "Treatment", desc: "Tailored dental care solutions." }
];

export const REVIEWS = [
  {
    name: "Rahul Sharma",
    text: "Service is very good, treatment is proper and staff is cooperative. Painless RCT was a relief.",
  },
  {
    name: "Priya Verma",
    text: "Ambience was clean and doctors handled everything professionally. Best clinic in Saket area.",
  },
  {
    name: "Amit Jain",
    text: "Painless treatment and very satisfying results. The hygiene standards are top-notch.",
  }
];
