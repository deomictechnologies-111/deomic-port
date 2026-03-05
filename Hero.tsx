import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import GeneratedImage from './GeneratedImage';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Advanced Software Innovation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Innovation in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Software Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Deomic Technologies helps startups and businesses build powerful digital products with innovative solutions and world-class engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              View Portfolio
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            scale: { duration: 0.8, delay: 0.4 },
            y: { 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video md:aspect-[21/9]">
             <GeneratedImage 
                prompt="Modern software dashboard with data visualizations and clean UI" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover opacity-80"
                aspectRatio="16:9"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="space-y-2">
                    <div className="h-1 w-24 bg-brand-500 rounded-full" />
                    <p className="text-white font-display text-xl font-semibold">Scalable Architecture</p>
                    <p className="text-slate-300 text-sm">Built for high performance and growth.</p>
                </div>
             </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full" />
                </div>
                <div>
                    <p className="text-xs text-slate-500 font-medium">Uptime</p>
                    <p className="text-sm font-bold text-slate-900">99.9% Reliable</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
