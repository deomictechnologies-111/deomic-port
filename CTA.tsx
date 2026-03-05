import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-brand-600 px-8 py-16 md:px-16 md:py-20 text-center text-white"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="text-lg md:text-xl text-brand-100 mb-10 leading-relaxed">
              Join dozens of successful startups and businesses that have scaled their digital presence with Deomic Technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-white text-brand-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
