import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
    {
      text: "The pizzas are incredibly authentic. Loved the aesthetic!",
      author: "Vikram K.",
    },
    {
      text: "A hidden gem. The staff is so friendly and the desserts are divine.",
      author: "Neha R.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Rating Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 md:w-1/3 shrink-0"
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

          {/* Reviews Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 relative w-full"
          >
            <div className="relative h-[220px] sm:h-[200px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cream p-8 rounded-2xl shadow-sm border border-sand/50 flex flex-col justify-center"
                >
                  <div className="flex text-terracotta mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-dark-brown font-serif text-xl italic mb-6 leading-snug">
                    "{reviews[currentIndex].text}"
                  </p>
                  <p className="text-sm font-bold text-brown uppercase tracking-wider">
                    — {reviews[currentIndex].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-cream border border-sand flex items-center justify-center text-brown hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentIndex ? "bg-terracotta w-6" : "bg-sand hover:bg-brown/50"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-cream border border-sand flex items-center justify-center text-brown hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
