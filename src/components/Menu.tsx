import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { menuData } from '../data/menu';

export function Menu() {
  const [mainCategory, setMainCategory] = useState<'Food' | 'Beverages'>('Food');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('All');

  // Get unique subcategories for the selected main category
  const subCategories = useMemo(() => {
    const cats = menuData
      .filter(item => item.mainCategory === mainCategory)
      .map(item => item.category);
    return ['All', ...Array.from(new Set(cats))];
  }, [mainCategory]);

  // Reset subcategory when main category changes
  const handleMainCategoryChange = (category: 'Food' | 'Beverages') => {
    setMainCategory(category);
    setActiveSubCategory('All');
  };

  const filteredMenu = useMemo(() => {
    return menuData.filter(item => {
      if (item.mainCategory !== mainCategory) return false;
      if (activeSubCategory !== 'All' && item.category !== activeSubCategory) return false;
      return true;
    });
  }, [mainCategory, activeSubCategory]);

  return (
    <section id="menu" className="py-24 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
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
        </div>

        {/* Main Category Toggle (Food vs Beverages) */}
        <div className="flex justify-center mb-10">
          <div className="bg-cream p-1.5 rounded-full inline-flex shadow-sm border border-sand">
            <button
              onClick={() => handleMainCategoryChange('Food')}
              className={`px-8 py-3 rounded-full text-lg font-serif transition-all duration-300 ${
                mainCategory === 'Food' 
                  ? 'bg-dark-brown text-cream shadow-md' 
                  : 'text-brown hover:text-dark-brown'
              }`}
            >
              Food Menu
            </button>
            <button
              onClick={() => handleMainCategoryChange('Beverages')}
              className={`px-8 py-3 rounded-full text-lg font-serif transition-all duration-300 ${
                mainCategory === 'Beverages' 
                  ? 'bg-dark-brown text-cream shadow-md' 
                  : 'text-brown hover:text-dark-brown'
              }`}
            >
              Beverages
            </button>
          </div>
        </div>

        {/* Sub Categories */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {subCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveSubCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSubCategory === cat 
                  ? 'bg-terracotta text-white shadow-md' 
                  : 'bg-cream text-brown hover:bg-sand border border-transparent hover:border-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-sand/30 flex flex-col relative"
              >
                {item.highlight && (
                  <div className="absolute -top-3 -right-3 bg-terracotta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Bestseller
                  </div>
                )}
                <div className="flex justify-between items-start mb-2 gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-dark-brown font-semibold leading-tight">{item.name}</h3>
                    <span className="inline-block mt-1 text-xs font-bold text-brown/60 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <span className="text-terracotta font-bold whitespace-nowrap text-lg">{item.price}</span>
                </div>
                {item.desc && (
                  <p className="text-sm text-brown/80 leading-relaxed mt-3 pt-3 border-t border-sand/30">{item.desc}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
