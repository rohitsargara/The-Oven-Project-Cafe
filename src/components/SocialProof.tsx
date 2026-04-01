import { motion } from "motion/react";
import { Star } from "lucide-react";

export function SocialProof() {
  const reviews = [
    {
      text: "Peaceful and cozy ambiance, perfect for a weekend evening.",
      author: "Priya S.",
    },
    {
      text: "Amazing food & great vibe. The Alfredo pasta is a must-try!",
      author: "Rahul M.",
    },
    {
      text: "Perfect place for friends & work. Best coffee in Udaipur.",
      author: "Anjali D.",
    },
  ];

  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Rating Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 md:w-1/3"
          >
            <div className="text-center">
              <div className="text-5xl font-serif text-dark-brown mb-2">
                4.9
              </div>
              <div className="flex text-terracotta mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm text-brown font-medium">
                Google Reviews
              </div>
            </div>
            <div className="w-px h-16 bg-brown/20 hidden md:block"></div>
            <div>
              <div className="text-3xl font-serif text-dark-brown mb-1">
                1800+
              </div>
              <div className="text-sm text-brown font-medium">
                Happy Customers
                <br />
                Served with Love
              </div>
            </div>
          </motion.div>

          {/* Reviews Carousel (Simplified as a grid for now, or auto-scrolling) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 flex overflow-x-auto no-scrollbar gap-6 pb-4 snap-x"
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-[320px] bg-cream p-6 rounded-2xl shadow-sm snap-center border border-sand/50"
              >
                <div className="flex text-terracotta mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-dark-brown font-serif text-lg italic mb-4 leading-snug">
                  "{review.text}"
                </p>
                <p className="text-sm font-medium text-brown uppercase tracking-wider">
                  — {review.author}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
