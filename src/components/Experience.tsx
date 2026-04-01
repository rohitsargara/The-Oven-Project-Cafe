import { motion } from "motion/react";
import { Laptop, Heart, Users, GlassWater } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: <Laptop size={32} />,
      title: "Work + Chill",
      desc: "Find your focus with our fast Wi-Fi, ample plug points, and bottomless coffee.",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: <Heart size={32} />,
      title: "Perfect for Dates",
      desc: "Soft lighting, intimate seating, and desserts meant to be shared.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: <Users size={32} />,
      title: "Friends Hangout",
      desc: "Spacious tables and a menu that caters to everyone's cravings.",
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: <GlassWater size={32} />,
      title: "Small Gatherings",
      desc: "Celebrate birthdays and milestones in our dedicated cozy corners.",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-dark-brown mb-6"
          >
            More Than Just Food
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brown/80 max-w-2xl mx-auto"
          >
            We've created spaces tailored to your mood. Whatever brings you
            here, we have the perfect spot waiting for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl aspect-[16/9] flex items-end"
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/40 to-transparent" />

              <div className="relative z-10 p-8 w-full">
                <div className="text-terracotta mb-4 bg-cream/10 w-fit p-3 rounded-2xl backdrop-blur-sm border border-cream/20">
                  {exp.icon}
                </div>
                <h3 className="text-2xl font-serif text-cream mb-2">
                  {exp.title}
                </h3>
                <p className="text-cream/80 text-sm max-w-md">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
