import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Discuss Your Project</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have an idea but not sure where to start? Our team is here to help you navigate the technical landscape and build something amazing.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">hello@deomic.tech</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-bold text-slate-900">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Visit Us</p>
                  <p className="text-lg font-bold text-slate-900">Innovation Hub, Silicon Valley, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Project Description</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
