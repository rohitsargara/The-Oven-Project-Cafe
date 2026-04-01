import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Visit Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-serif text-dark-brown mb-10"
            >
              Drop By & Say Hi
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-terracotta shrink-0 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-dark-brown mb-1">
                    Location
                  </h4>
                  <p className="text-brown/80 leading-relaxed">
                    Near Sukhadia Circle,
                    <br />
                    Udaipur, Rajasthan 313001
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-terracotta shrink-0 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-dark-brown mb-1">
                    Call Us
                  </h4>
                  <p className="text-brown/80 leading-relaxed">
                    +91 7568453340
                    <br />
                    <span className="text-sm text-brown/60">
                      For reservations & orders
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-terracotta shrink-0 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-dark-brown mb-1">
                    Hours
                  </h4>
                  <p className="text-brown/80 leading-relaxed">
                    Monday - Sunday
                    <br />
                    11:00 AM – 10:30 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border-4 border-cream"
          >
            {/* Using a static map image or iframe. Iframe is better for real maps, but we'll use a stylized placeholder image for aesthetic purposes, or an actual iframe if preferred. Let's use an iframe for realism. */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14513.62645607064!2d73.6821!3d24.6015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sSukhadia%20Circle%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.3) contrast(1.1) opacity(0.9)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
