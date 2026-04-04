import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { menuData } from '../data/menu';

// Helper to get a random image based on category if we don't have specific ones
const getCategoryImage = (category: string) => {
  const images: Record<string, string> = {
    'Snacks': 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop',
    'Lebanese Bites': 'https://images.unsplash.com/photo-1593010932917-2157fd692e96?q=80&w=1974&auto=format&fit=crop',
    'Sandwich': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop',
    'Focaccia Sandwich': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop',
    'Burgers': 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop',
    'Pasta': 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop',
    'Pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    'Garlic Breads': 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070&auto=format&fit=crop',
    'Chinese': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop',
    'Wraps': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop',
    'Fries': 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=2070&auto=format&fit=crop',
    'Open Toast': 'https://images.unsplash.com/photo-1484723091791-009f52f48f2e?q=80&w=2059&auto=format&fit=crop',
    'Dessert': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop',
    'Hot Coffee': 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop',
    'Hot Beverages': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2021&auto=format&fit=crop',
    'Speciality Teas': 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=2070&auto=format&fit=crop',
    'Iced Coffee': 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop',
    'Frappe': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop',
    'Mocktails': 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1986&auto=format&fit=crop',
    'Iced Tea': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop',
    'Mojito': 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965&auto=format&fit=crop',
    'Seltzer': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop',
    'Milkshake': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop',
    'Bubble Lemonade': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop',
  };
  return images[category] || 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop';
};

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
                className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-sand/30 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img 
                    src={getCategoryImage(item.category)} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  {item.highlight && (
                    <div className="absolute top-3 right-3 bg-terracotta text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Bestseller
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-cream/90 backdrop-blur-sm text-dark-brown text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-serif text-lg text-dark-brown font-semibold leading-tight">{item.name}</h3>
                    <span className="text-terracotta font-bold whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.desc && (
                    <p className="text-sm text-brown/70 leading-relaxed mt-auto pt-2">{item.desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
