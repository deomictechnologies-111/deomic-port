import { motion } from 'motion/react';
import { Globe, Smartphone, Palette, Database, Cloud, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with modern frameworks.',
    icon: Globe,
    color: 'bg-blue-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that users love.',
    icon: Smartphone,
    color: 'bg-indigo-500',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design that combines aesthetics with seamless functionality.',
    icon: Palette,
    color: 'bg-purple-500',
  },
  {
    title: 'SaaS Product Development',
    description: 'End-to-end development of scalable software-as-a-service platforms.',
    icon: Database,
    color: 'bg-emerald-500',
  },
  {
    title: 'Cloud & Backend Solutions',
    description: 'Robust server-side architecture and cloud infrastructure management.',
    icon: Cloud,
    color: 'bg-sky-500',
  },
  {
    title: 'AI & Automation Solutions',
    description: 'Intelligent automation and AI integration to streamline your business processes.',
    icon: Cpu,
    color: 'bg-rose-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Software Solutions</h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of services tailored to meet the unique needs of startups and established enterprises alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
