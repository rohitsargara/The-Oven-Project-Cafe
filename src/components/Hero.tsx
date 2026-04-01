import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-brown/40 z-10" />{" "}
        {/* Overlay */}
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Cozy Cafe Interior"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-cream/90 uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium"
        >
          The Oven Project Café – Udaipur
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-cream font-serif leading-tight mb-6"
        >
          Where Good Food <br className="hidden md:block" />
          <span className="italic text-terracotta">Meets Cozy Vibes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-light"
        >
          Udaipur’s Favorite Spot for Coffee, Conversations & Comfort Food.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto bg-terracotta text-white px-8 py-4 rounded-full font-medium hover:bg-rust transition-colors flex items-center justify-center gap-2 group"
          >
            View Menu
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-8 py-4 rounded-full font-medium hover:bg-cream hover:text-dark-brown transition-colors flex items-center justify-center"
          >
            Visit Us Today
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-cream/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-cream"
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
