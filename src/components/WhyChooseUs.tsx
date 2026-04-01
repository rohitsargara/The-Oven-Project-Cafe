import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "Cozy & peaceful environment",
    "Extensive global menu",
    "Pure veg + vegan options available",
    "Affordable premium experience",
    "Friendly & prompt service",
    "Perfectly curated playlists",
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-dark-brown rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rust/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-cream mb-6 leading-tight"
              >
                Why Udaipur Loves <br />
                <span className="text-terracotta italic">The Oven Project</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-cream/80 text-lg mb-8"
              >
                We don't just serve food; we serve experiences. Every detail,
                from our lighting to our plating, is designed to make you smile.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 text-cream/90"
                  >
                    <CheckCircle2
                      className="text-terracotta shrink-0"
                      size={20}
                    />
                    <span className="font-medium">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 w-full"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border-4 border-cream/10">
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                  alt="Cafe details"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
