import { motion } from 'motion/react';
import { DollarSign, Zap, Rocket, Users, Layers } from 'lucide-react';
import GeneratedImage from './GeneratedImage';

const reasons = [
  {
    title: 'Value-Driven Pricing',
    description: 'Premium software development services at competitive rates tailored for startups.',
    icon: DollarSign,
  },
  {
    title: 'Modern Tech Stack',
    description: 'We use the latest technologies like React, Node.js, and Cloud Native tools.',
    icon: Layers,
  },
  {
    title: 'Fast Project Delivery',
    description: 'Our agile process ensures your product is ready for the market in record time.',
    icon: Zap,
  },
  {
    title: 'Startup-Friendly',
    description: 'We understand the unique challenges of startups and provide flexible solutions.',
    icon: Rocket,
  },
  {
    title: 'Scalable Architecture',
    description: 'Build for today, prepare for tomorrow with our future-proof system designs.',
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The Partner You Need for <span className="text-brand-400">Digital Growth</span>
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We don't just write code; we build solutions that drive business value. Our commitment to quality and innovation makes us the preferred choice for forward-thinking companies.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors">
                    <reason.icon className="text-brand-400 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{reason.title}</h4>
                    <p className="text-slate-400">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <GeneratedImage 
                prompt="Abstract digital technology visualization with purple glow" 
                alt="Tech Visual" 
                className="w-full h-full object-cover opacity-60"
                aspectRatio="3:4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl">
                <p className="text-4xl font-bold text-brand-600">98%</p>
                <p className="text-sm font-semibold text-slate-500">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
