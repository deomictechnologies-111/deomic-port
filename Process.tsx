import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description: 'We dive deep into your business goals and user needs to define clear objectives.',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Creating wireframes, prototypes, and a technical roadmap for your product.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our expert developers bring the designs to life using clean, efficient code.',
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Rigorous QA testing to ensure your software is bug-free and performs perfectly.',
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Launching your product to the world with a smooth and secure rollout.',
  },
  {
    number: '06',
    title: 'Support',
    description: 'Ongoing maintenance and updates to keep your software running at its best.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Our Process</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">How We Bring Your Ideas to Life</h3>
          <p className="text-lg text-slate-600">
            A streamlined, transparent development process designed to deliver high-quality results efficiently.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-brand-100 mb-6 font-display">{step.number}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
