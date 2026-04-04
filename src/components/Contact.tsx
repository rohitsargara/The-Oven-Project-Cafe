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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 flex flex-col gap-4"
          >
            <div className="w-full h-[350px] lg:h-full rounded-3xl overflow-hidden shadow-lg border-4 border-cream relative">
              <iframe
                src="https://maps.google.com/maps?q=The+Oven+Project+Cafe,+Udaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
            </div>
            <a
              href="https://maps.app.goo.gl/97o2Z1XBsL8Z5Yqk7"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-brown text-cream px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-terracotta hover:shadow-xl transition-all flex items-center justify-center gap-3 w-full"
            >
              <MapPin size={20} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
