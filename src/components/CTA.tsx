import { motion } from "motion/react";
import { ArrowRight, Calendar, ShoppingBag } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-terracotta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-multiply">
        <img
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop"
          alt="Coffee beans texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-cream mb-6"
        >
          Ready to Experience <br className="hidden md:block" /> the Vibe?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cream/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join the 1000+ customers who have made us their favorite spot in
          Udaipur. Try our best-selling dishes today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-cream text-dark-brown px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            Reserve a Table
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-transparent border-2 border-cream text-cream px-8 py-4 rounded-full font-bold hover:bg-cream/10 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Order Online
          </a>
        </motion.div>
      </div>
    </section>
  );
}
