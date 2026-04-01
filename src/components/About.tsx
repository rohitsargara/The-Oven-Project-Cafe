import { motion } from "motion/react";
import { Coffee, Users, Wifi, Heart } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Heart size={24} />,
      title: "Cozy Seating",
      desc: "Plush sofas & warm corners",
    },
    {
      icon: <Users size={24} />,
      title: "Friendly Staff",
      desc: "Always welcoming with a smile",
    },
    {
      icon: <Coffee size={24} />,
      title: "Relaxing Vibe",
      desc: "Soft music & aesthetic decor",
    },
    {
      icon: <Wifi size={24} />,
      title: "Work Friendly",
      desc: "Fast Wi-Fi & plug points",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
                alt="Coffee pouring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-3xl overflow-hidden border-8 border-cream shadow-xl z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop"
                alt="Cafe interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-beige rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-dark-brown mb-6 leading-tight"
            >
              More than a café — <br />
              <span className="italic text-brown">it’s a vibe.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brown/80 text-lg mb-10 leading-relaxed"
            >
              Born out of a love for great food and aesthetic spaces, The Oven
              Project is designed to be your second home. Whether you're
              catching up with old friends, diving deep into work, or simply
              enjoying a quiet moment with a perfect cup of coffee, we've
              crafted every corner to make you feel right at home.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-terracotta">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-dark-brown mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brown/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
