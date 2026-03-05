import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import GeneratedImage from './GeneratedImage';

const projects = [
  {
    title: 'Fleet Management System',
    description: 'Real-time tracking and logistics optimization platform for transport companies.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    image: 'https://picsum.photos/seed/fleet/600/400',
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable multi-vendor marketplace with integrated payment gateways.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    image: 'https://picsum.photos/seed/shop/600/400',
  },
  {
    title: 'NGO Donation Website',
    description: 'Transparent donation tracking and campaign management for global NGOs.',
    tech: ['Vue.js', 'Firebase', 'Cloud Functions'],
    image: 'https://picsum.photos/seed/ngo/600/400',
  },
  {
    title: 'CRM Dashboard',
    description: 'Advanced customer relationship management tool with automated reporting.',
    tech: ['React', 'D3.js', 'Express', 'Redis'],
    image: 'https://picsum.photos/seed/crm/600/400',
  },
  {
    title: 'SaaS Booking Platform',
    description: 'Appointment scheduling and resource management for service providers.',
    tech: ['TypeScript', 'GraphQL', 'AWS Lambda'],
    image: 'https://picsum.photos/seed/booking/600/400',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Our Latest Projects</h3>
          <p className="text-lg text-slate-600">
            Take a look at some of the successful digital products we've built for our clients across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                scale: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <GeneratedImage 
                  prompt={`Professional screenshot of ${project.title} software interface`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  aspectRatio="4:3"
                />
                <div className="absolute inset-0 bg-brand-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                        <ExternalLink className="text-brand-600 w-6 h-6" />
                    </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
