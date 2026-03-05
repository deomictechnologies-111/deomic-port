import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    content: 'Deomic Technologies transformed our vision into a reality. Their team is professional, responsive, and delivered a high-quality product within our budget.',
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, GlobalLogistics',
    content: 'The fleet management system they built for us has significantly improved our efficiency. Their technical expertise is truly impressive.',
    image: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, EcoFriendly',
    content: 'Working with Deomic was a breeze. They understood our requirements perfectly and provided innovative solutions we hadn\'t even considered.',
    image: 'https://i.pravatar.cc/150?u=emily',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">What Our Clients Say</h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here's what business leaders have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-100 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
