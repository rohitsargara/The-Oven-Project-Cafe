import { motion } from "motion/react";
import { useState } from "react";

const categories = [
  "All",
  "Pizza",
  "Pasta",
  "Sandwiches",
  "Burgers",
  "Chinese",
  "Beverages",
  "Desserts",
];

const menuItems = [
  {
    id: 1,
    name: "Tandoori Paneer Pizza",
    category: "Pizza",
    desc: "Spicy paneer, onions, capsicum, mozzarella",
    price: "₹299",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    highlight: true,
  },
  {
    id: 2,
    name: "Alfredo Pasta",
    category: "Pasta",
    desc: "Creamy white sauce, mushrooms, parmesan",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop",
    highlight: true,
  },
  {
    id: 3,
    name: "Brownie Ice Cream",
    category: "Desserts",
    desc: "Warm walnut brownie with vanilla scoop",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop",
    highlight: true,
  },
  {
    id: 4,
    name: "Classic Veg Burger",
    category: "Burgers",
    desc: "Crispy patty, fresh lettuce, house mayo",
    price: "₹149",
    img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Grilled Cheese Sandwich",
    category: "Sandwiches",
    desc: "Three cheese blend, toasted sourdough",
    price: "₹179",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Hakka Noodles",
    category: "Chinese",
    desc: "Wok-tossed noodles with fresh veggies",
    price: "₹189",
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Iced Caramel Macchiato",
    category: "Beverages",
    desc: "Espresso, milk, vanilla, caramel drizzle",
    price: "₹159",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Pizza",
    desc: "Fresh basil, mozzarella, tomato sauce",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop",
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-brown mb-6"
          >
            Taste the Magic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brown/80 max-w-2xl mx-auto"
          >
            From comforting classics to our signature creations, every dish is
            prepared with love and the finest ingredients.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-dark-brown text-cream shadow-md"
                  : "bg-cream text-brown hover:bg-sand"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredMenu.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {item.highlight && (
                  <div className="absolute top-4 right-4 bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-dark-brown font-semibold">
                    {item.name}
                  </h3>
                  <span className="text-terracotta font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-brown/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
