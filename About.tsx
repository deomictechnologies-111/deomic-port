import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import GeneratedImage from './GeneratedImage';

const focusAreas = [
  { title: 'Innovation', description: 'Cutting-edge solutions that keep you ahead of the curve.' },
  { title: 'Scalability', description: 'Systems designed to grow seamlessly with your business.' },
  { title: 'Advanced Development', description: 'Premium quality software built for high performance.' },
  { title: 'Fast Delivery', description: 'Agile methodologies ensuring quick time-to-market.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering Businesses Through <span className="text-brand-600">Digital Excellence</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Deomic Technologies is a software development company focused on delivering high-quality digital solutions. We bridge the gap between complex technology and business goals, making advanced software accessible to everyone.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{area.title}</h4>
                    <p className="text-sm text-slate-500">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <GeneratedImage 
                prompt="Diverse team of software engineers working together in a modern office" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                aspectRatio="1:1"
              />
            </div>
            {/* Experience Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-5xl font-bold text-brand-600 mb-1">100+</p>
              <p className="text-slate-500 font-medium">Projects Delivered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
