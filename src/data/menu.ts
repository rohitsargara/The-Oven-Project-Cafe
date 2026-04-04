export type MenuItem = {
  id: string;
  name: string;
  desc?: string;
  price: string;
  category: string;
  mainCategory: 'Food' | 'Beverages';
  isVeg?: boolean;
  highlight?: boolean;
};

export const menuData: MenuItem[] = [
  // FOOD - SNACKS
  { id: 'f1', name: 'Chowpatty Bhel', desc: 'Puffed rice combined with variety of salad vegetables, namkeens and chutneys.', price: '₹149', category: 'Snacks', mainCategory: 'Food' },
  { id: 'f2', name: 'Corn Bhel', desc: 'Sweet corn combined with variety of salad vegetables, namkeens and chutneys. (Served hot)', price: '₹175', category: 'Snacks', mainCategory: 'Food' },
  { id: 'f3', name: 'Masala Veg Maggi', desc: 'Maggi with extra masala and veggies.', price: '₹175', category: 'Snacks', mainCategory: 'Food' },
  { id: 'f4', name: 'Cheese Masala Maggi', desc: 'Maggi with cheese, extra masala and veggies.', price: '₹199', category: 'Snacks', mainCategory: 'Food' },
  { id: 'f5', name: 'Beetroot Bites', desc: 'Crispy patties made with grated beetroot, potatoes, broken peanuts and herbs.', price: '₹219', category: 'Snacks', mainCategory: 'Food' },

  // FOOD - LEBANESE BITES
  { id: 'f6', name: 'Hummus with Pita', desc: 'House hummus served with fresh pita bread (2 pcs).', price: '₹239', category: 'Lebanese Bites', mainCategory: 'Food', highlight: true },
  { id: 'f7', name: 'Falafel (6 Pcs.)', desc: 'Crispy patties made with ground chickpeas, onion, garlic and herbs.', price: '₹269', category: 'Lebanese Bites', mainCategory: 'Food' },
  { id: 'f8', name: 'Lebanese Mezze Platter', desc: 'An assortment of 6 falafels, house hummus, 1 pita and salad.', price: '₹375', category: 'Lebanese Bites', mainCategory: 'Food', highlight: true },

  // FOOD - SANDWICH
  { id: 'f9', name: 'Bombay Sandwich', desc: 'The OG Indian sandwich with green chutney, cheese, ketchup, onions, tomatoes and cucumbers.', price: '₹219', category: 'Sandwich', mainCategory: 'Food' },
  { id: 'f10', name: 'Cheese Corn Capsicum', desc: 'Cheese, corn and capsicum come together with thousand island sauce.', price: '₹259', category: 'Sandwich', mainCategory: 'Food', highlight: true },
  { id: 'f11', name: 'Veggie Overload', desc: 'Exotic veggies sauteed in arrabbiata sauce, topped with mozzarella.', price: '₹259', category: 'Sandwich', mainCategory: 'Food' },
  { id: 'f12', name: 'Veg Cheese Sandwich', desc: 'Vegetables mixed with cheese and thousand island sauce and grilled.', price: '₹259', category: 'Sandwich', mainCategory: 'Food' },

  // FOOD - FOCACCIA SANDWICH
  { id: 'f13', name: 'Veggie Overload Focaccia', desc: 'Exotic veggies sauteed in arrabbiata sauce, topped with mozzarella.', price: '₹349', category: 'Focaccia Sandwich', mainCategory: 'Food' },
  { id: 'f14', name: 'Tandoori Paneer Focaccia', desc: 'Tangy spiced paneer cubes, lipsmacking tandoori sauce, vegetables and cheese.', price: '₹359', category: 'Focaccia Sandwich', mainCategory: 'Food', highlight: true },
  { id: 'f15', name: 'Mushroom Pesto Focaccia', desc: 'Sauteed & seasoned mushrooms with mozzarella cheese and house pesto.', price: '₹369', category: 'Focaccia Sandwich', mainCategory: 'Food', highlight: true },

  // FOOD - BURGERS
  { id: 'f16', name: 'Aloo Patty Burger', desc: 'Good old Indian aloo tikki burger with a crunchy aloo patty, onion, tomato, mayonnaise and cheese.', price: '₹149', category: 'Burgers', mainCategory: 'Food' },
  { id: 'f17', name: 'Veggie Patty Burger', desc: 'Mixed vegetable patty with thousand island sauce, cheese and vegetables.', price: '₹179', category: 'Burgers', mainCategory: 'Food' },
  { id: 'f18', name: 'Beetroot Patty Burger', desc: 'Crispy beetroot tikki with cheese, thousand island sauce, green chutney and vegetables.', price: '₹199', category: 'Burgers', mainCategory: 'Food' },
  { id: 'f19', name: 'Kurkura Paneer Burger', desc: 'Crispy crumb coated & spiced paneer patty with mint chutney, chilly garlic sauce, cheese and vegetables.', price: '₹219', category: 'Burgers', mainCategory: 'Food', highlight: true },
  { id: 'f20', name: 'Tandoori Kurkura Paneer', desc: 'Crispy crumb coated & spiced paneer patty with tangy tandoori mayo, cheese and vegetables.', price: '₹229', category: 'Burgers', mainCategory: 'Food' },
  { id: 'f21', name: 'Cheese Burst Burger', desc: 'Cheese burst patty made with cheddar, mozzarella and processed cheese.', price: '₹239', category: 'Burgers', mainCategory: 'Food', highlight: true },
  { id: 'f22', name: 'Cheese Overload Burger', desc: 'Cheese burst patty, aloo patty, chilly garlic sauce, mayonnaise and vegetables.', price: '₹269', category: 'Burgers', mainCategory: 'Food' },

  // FOOD - PASTA
  { id: 'f23', name: 'Tandoori Sauce Pasta', desc: 'Pasta goes desi in this fusion avatar with a tandoori spiced sauce and vegetables.', price: '₹299', category: 'Pasta', mainCategory: 'Food', highlight: true },
  { id: 'f24', name: 'Pink Sauce Pasta', desc: 'Pasta cooked in a combination of creamy cheesy alfredo sauce and arrabbiata sauce.', price: '₹319', category: 'Pasta', mainCategory: 'Food', highlight: true },
  { id: 'f25', name: 'Arrabbiata Red Sauce', desc: 'Pasta cooked in house arrabbiata sauce with exotic vegetables.', price: '₹319', category: 'Pasta', mainCategory: 'Food' },
  { id: 'f26', name: 'Alfredo White Sauce', desc: 'Pasta cooked in house creamy cheesy alfredo sauce with exotic vegetables.', price: '₹319', category: 'Pasta', mainCategory: 'Food', highlight: true },
  { id: 'f27', name: 'Creamy Al-Funghi', desc: 'Pasta cooked in creamy cheesy sauce with mushrooms, olives and sundried tomatoes.', price: '₹339', category: 'Pasta', mainCategory: 'Food', highlight: true },
  { id: 'f28', name: 'Aglio Olio-E-Peperoncino', desc: 'Spaghetti tossed in garlic, olive oil and chilli flakes.', price: '₹339', category: 'Pasta', mainCategory: 'Food' },
  { id: 'f29', name: 'Creamy Pesto Pasta', desc: 'Pasta cooked in a house creamy basil pesto sauce with exotic vegetables.', price: '₹349', category: 'Pasta', mainCategory: 'Food', highlight: true },
  { id: 'f30', name: 'Pasta Genovese', desc: 'Signature spaghetti pasta prepared in house pesto with mushrooms, broccoli, olives, sundried tomatoes.', price: '₹349', category: 'Pasta', mainCategory: 'Food' },

  // FOOD - PIZZA
  { id: 'f31', name: 'Veggie Fresh Pizza', desc: 'Onion, tomato, capsicum and mozzarella on top of our house pizza sauce.', price: '₹249', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f32', name: 'Veggie Supreme Pizza', desc: 'Corns, olives and jalapenos coupled with onion, tomato, capsicum and mozzarella.', price: '₹269', category: 'Pizza', mainCategory: 'Food', highlight: true },
  { id: 'f33', name: 'Classic Margherita', desc: 'Loads of mozzarella and our special house pizza sauce topped with basil.', price: '₹279', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f34', name: 'Tandoori Veggie Pizza', desc: 'Mushrooms, olives, corn, tomato, onion, capsicum and mozzarella with a lipsmacking tandoori sauce.', price: '₹289', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f35', name: 'Exotic Veggie Pizza', desc: 'Zucchini, mushrooms, olives, corn, jalapenos and mozzarella with our house pizza sauce.', price: '₹289', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f36', name: 'Tandoori Paneer Pizza', desc: 'Spiced paneer cubes come together with tandoori sauce, mozzarella and garden vegetables.', price: '₹309', category: 'Pizza', mainCategory: 'Food', highlight: true },
  { id: 'f37', name: 'Paneer Makhani Pizza', desc: 'Italian meets Indian in this desi avatar of pizza with a creamy makhani sauce.', price: '₹309', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f38', name: 'Pizza Italiano', desc: 'House made pizza sauce covered with generous amounts of mozzarella and topped with sundried tomatoes and fresh house pesto.', price: '₹319', category: 'Pizza', mainCategory: 'Food', highlight: true },
  { id: 'f39', name: 'Gourmet Feast Pizza', desc: 'Broccoli, mushrooms, bell peppers, olives, sundried tomatoes and mozzarella.', price: '₹329', category: 'Pizza', mainCategory: 'Food' },
  { id: 'f40', name: '5-Cheese Maestro', desc: 'Mozzarella, parmesan, processed cheese, cream cheese and yellow cheddar cheese come together.', price: '₹329', category: 'Pizza', mainCategory: 'Food', highlight: true },
  { id: 'f41', name: 'Pizza Pesto', desc: 'Our special house pesto under a layer of mozzarella and topped with bell peppers, broccoli, mushrooms and olives.', price: '₹339', category: 'Pizza', mainCategory: 'Food' },

  // FOOD - GARLIC BREADS
  { id: 'f42', name: 'Cheese Garlic Bread', desc: 'Garlic bread topped with mozzarella cheese and seasoned with mixed herbs.', price: '₹179', category: 'Garlic Breads', mainCategory: 'Food' },
  { id: 'f43', name: 'Cheese Chilli Garlic Bread', desc: 'Garlic bread topped with mozzarella cheese and green chillies.', price: '₹189', category: 'Garlic Breads', mainCategory: 'Food' },
  { id: 'f44', name: 'Supreme Garlic Bread', desc: 'Garlic bread topped with mozzarella cheese, corn, olives, capsicum, onion and seasoned with mixed herbs.', price: '₹199', category: 'Garlic Breads', mainCategory: 'Food', highlight: true },
  { id: 'f45', name: 'Pull Apart Garlic Bread', desc: 'Bread loaded with mozzarella cheese, garlic bits and mixed herbs in your favorite cheesy pull apart form.', price: '₹229', category: 'Garlic Breads', mainCategory: 'Food' },
  { id: 'f46', name: 'Paneer Garlic Bread', desc: 'Garlic bread with spicy paneer pieces topped with mozzarella.', price: '₹239', category: 'Garlic Breads', mainCategory: 'Food', highlight: true },
  { id: 'f47', name: 'Exotic Pesto Bread', desc: 'Garlic bread with pesto, exotic veggies and mozzarella.', price: '₹249', category: 'Garlic Breads', mainCategory: 'Food' },

  // FOOD - CHINESE
  { id: 'f48', name: 'Hakka Noodles', desc: 'Noodles tossed with crispy vegetables and mildly seasoned with sauces.', price: '₹239', category: 'Chinese', mainCategory: 'Food' },
  { id: 'f49', name: 'Chilly Garlic Noodles', desc: 'Noodles tossed with garlic bits along with crispy vegetables and spicy sauce.', price: '₹249', category: 'Chinese', mainCategory: 'Food', highlight: true },
  { id: 'f50', name: 'Manchurian Noodles', desc: 'Noodles, manchurian balls and crispy vegetables tossed in medium spice chinese preparation.', price: '₹279', category: 'Chinese', mainCategory: 'Food' },
  { id: 'f51', name: 'Manchurian', desc: 'Crispy fried cabbage and carrot balls tossed in a medium spice chinese preparation.', price: '₹279', category: 'Chinese', mainCategory: 'Food' },
  { id: 'f52', name: 'Chilly Potato', desc: 'Crispy fried potato fingers and vegetables tossed in a spicy sauce.', price: '₹289', category: 'Chinese', mainCategory: 'Food', highlight: true },
  { id: 'f53', name: 'Honey Chilly Potato', desc: 'Crispy fried potato fingers and vegetables tossed in sweet and spicy sauce.', price: '₹289', category: 'Chinese', mainCategory: 'Food' },
  { id: 'f54', name: 'Paneer Chilly', desc: 'Coated fried cottage cheese cubes tossed in a medium spice chinese preparation.', price: '₹319', category: 'Chinese', mainCategory: 'Food', highlight: true },

  // FOOD - WHOLEWHEAT WRAPS
  { id: 'f55', name: 'Hari Chutney Aloo Wrap', desc: 'Comforting Indian style wholewheat tortilla with crispy aloo, onions, hari chutney, sauces and cheese.', price: '₹199', category: 'Wraps', mainCategory: 'Food', highlight: true },
  { id: 'f56', name: 'Beetroot Wrap', desc: 'Wholewheat tortilla packed with beetroot cutlets, chopped vegetables, sauces and cheese.', price: '₹229', category: 'Wraps', mainCategory: 'Food' },
  { id: 'f57', name: 'Cheesy Peri Paneer Wrap', desc: 'Wholewheat tortilla filled with crispy paneer patty, chopped vegetables and lipsmacking cheesy peri peri sauce.', price: '₹259', category: 'Wraps', mainCategory: 'Food' },
  { id: 'f58', name: 'Tandoori Paneer Wrap', desc: 'Wholewheat tortilla loaded with our signature tandoori paneer filling, veggies and sauces.', price: '₹259', category: 'Wraps', mainCategory: 'Food', highlight: true },
  { id: 'f59', name: 'Cheesy Bites Wrap', desc: 'Wholewheat tortilla filled with cheesy nuggets, veggies, sauces and cheese.', price: '₹259', category: 'Wraps', mainCategory: 'Food', highlight: true },
  { id: 'f60', name: 'Falafel Wrap', desc: 'Wholewheat tortilla filled with falafels, fresh veggies, hummus, tangy chilli sauce and cheese.', price: '₹299', category: 'Wraps', mainCategory: 'Food' },

  // FOOD - FRIES
  { id: 'f61', name: 'Salted Fries', desc: 'Classic french fries sprinkled with salt.', price: '₹159', category: 'Fries', mainCategory: 'Food' },
  { id: 'f62', name: 'Peri Peri Fries', desc: 'Fries seasoned with special peri-peri spice mix.', price: '₹189', category: 'Fries', mainCategory: 'Food', highlight: true },
  { id: 'f63', name: 'Moroccan Fries', desc: 'Fries seasoned with house sweet and sour spice mix.', price: '₹189', category: 'Fries', mainCategory: 'Food' },
  { id: 'f64', name: 'Cheesy Jalapeno Fries', desc: 'Fries seasoned with peri peri spice mix and drizzled with cheese jalapeno sauce.', price: '₹229', category: 'Fries', mainCategory: 'Food' },
  { id: 'f65', name: 'Loaded Fries', desc: 'Crispy fries loaded with cheese, sauces and vegetables.', price: '₹249', category: 'Fries', mainCategory: 'Food', highlight: true },

  // FOOD - OPEN TOAST
  { id: 'f66', name: 'Cheese Chilli Toast', desc: 'The all time classic toast with cheese and green chillies.', price: '₹189', category: 'Open Toast', mainCategory: 'Food' },
  { id: 'f67', name: 'Cheese Corn Toast', desc: 'Soul soothing toast with cheese and corn.', price: '₹199', category: 'Open Toast', mainCategory: 'Food' },
  { id: 'f68', name: 'Broccoli Mushroom Toast', desc: 'Herb sauteed mushrooms and broccoli on a pesto toast, topped with mozzarella.', price: '₹229', category: 'Open Toast', mainCategory: 'Food', highlight: true },
  { id: 'f69', name: 'Teekha Paneer Toast', desc: 'Spicy paneer cubes and cheese on tandoori sauce.', price: '₹239', category: 'Open Toast', mainCategory: 'Food' },

  // FOOD - DESSERT
  { id: 'f70', name: 'Fudgy Brownie', desc: 'Our signature brownie with 100% real couverture chocolate.', price: '₹149', category: 'Dessert', mainCategory: 'Food', highlight: true },
  { id: 'f71', name: 'Nutella Brownie', desc: 'Our signature brownie with a generous amount of nutella, best of both worlds.', price: '₹179', category: 'Dessert', mainCategory: 'Food' },
  { id: 'f72', name: 'Brownie with Ice Cream', desc: 'Our signature brownie with chocolate sauce with vanilla icecream.', price: '₹179', category: 'Dessert', mainCategory: 'Food' },
  { id: 'f73', name: 'Sizzling Brownie', desc: 'Brownie with ice cream and lots of chocolate sauce served on a sizzler plate.', price: '₹229', category: 'Dessert', mainCategory: 'Food', highlight: true },
  { id: 'f74', name: 'Tiramisu', desc: 'Layered Italian dessert with coffee soaked biscuits and creamy layers of mascarpone cheese.', price: '₹179', category: 'Dessert', mainCategory: 'Food', highlight: true },
  { id: 'f75', name: 'Strawberry/Blueberry Cheesecake', desc: 'Our freshly prepared house special creamy cheesecakes.', price: '₹169', category: 'Dessert', mainCategory: 'Food' },
  { id: 'f76', name: 'Nutella Cheesecake', desc: 'Our freshly prepared house special creamy cheesecakes.', price: '₹189', category: 'Dessert', mainCategory: 'Food' },
  { id: 'f77', name: 'Biscoff Cheesecake', desc: 'Our freshly prepared house special creamy cheesecakes.', price: '₹199', category: 'Dessert', mainCategory: 'Food', highlight: true },

  // BEVERAGES - HOT COFFEE
  { id: 'b1', name: 'Espresso', desc: 'Bold 30ml freshly brewed coffee concentrate.', price: '₹99', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b2', name: 'Americano', desc: '30ml espresso shot with 200ml hot water.', price: '₹109', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b3', name: 'Macchiato', desc: '30ml espresso shot topped with milk foam.', price: '₹139', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b4', name: 'Cappuccino', desc: '30ml espresso shot topped with steamed milk and thick layer of foam.', price: '₹179', category: 'Hot Coffee', mainCategory: 'Beverages', highlight: true },
  { id: 'b5', name: 'Latte', desc: '30ml espresso shot topped with steamed milk and thin layer of foam.', price: '₹179', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b6', name: 'Vietnamese Latte', desc: '30ml espresso shot, 30ml condensed milk topped with steamed milk and thin layer of foam.', price: '₹199', category: 'Hot Coffee', mainCategory: 'Beverages', highlight: true },
  { id: 'b7', name: 'Cafe Mocha', desc: '30ml espresso shot mixed with dark chocolate, topped with steamed milk and foam.', price: '₹199', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b8', name: 'Cafe Medici', desc: '30ml espresso shot mixed with dark chocolate and cinnamon, topped with steamed milk and foam.', price: '₹209', category: 'Hot Coffee', mainCategory: 'Beverages' },
  { id: 'b9', name: 'Nutellachino', desc: '30ml espresso shot mixed with nutella, topped with steamed milk and thick layer of foam.', price: '₹219', category: 'Hot Coffee', mainCategory: 'Beverages', highlight: true },

  // BEVERAGES - HOT BEVERAGES
  { id: 'b10', name: 'Masala Tea', desc: 'Indian style milk tea with masala and ginger.', price: '₹95', category: 'Hot Beverages', mainCategory: 'Beverages' },
  { id: 'b11', name: 'Elaichi Masala Tea', desc: 'Indian style milk tea with masala and elaichi.', price: '₹109', category: 'Hot Beverages', mainCategory: 'Beverages' },
  { id: 'b12', name: 'Lemon Tea', desc: 'Zesty black tea made with fresh lemon.', price: '₹109', category: 'Hot Beverages', mainCategory: 'Beverages' },
  { id: 'b13', name: 'Lemon Ginger Tea', desc: 'Refreshing black tea made with fresh lemon and ginger.', price: '₹119', category: 'Hot Beverages', mainCategory: 'Beverages' },
  { id: 'b14', name: 'Green Tea', desc: 'Antioxidant rich tea made with green tea leaves.', price: '₹119', category: 'Hot Beverages', mainCategory: 'Beverages' },
  { id: 'b15', name: 'Hot Chocolate', desc: 'Made with real chocolate and cinnamon, all things winter in a cup.', price: '₹179', category: 'Hot Beverages', mainCategory: 'Beverages', highlight: true },
  { id: 'b16', name: 'Nutella Hot Chocolate', desc: 'Made with real chocolate and nutella to give you an unforgettable cup.', price: '₹219', category: 'Hot Beverages', mainCategory: 'Beverages', highlight: true },

  // BEVERAGES - SPECIALITY TEAS
  { id: 'b17', name: 'Jasmine White Tea', desc: 'White tea buds entangled with the flavours of sweet jasmine.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b18', name: 'Chamomile White Tea', desc: 'The most calming cup of your day loaded with the goodness of chamomile.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b19', name: 'Lavender White Tea', desc: 'A captivating combination of white tea buds with a rush of lavender.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b20', name: 'Lemon Eucalyptus White Tea', desc: 'Unwind with the goodness of eucalyptus and freshness of lemon.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b21', name: 'Moroccan Mint White Tea', desc: 'Soothe your mind with this mix of moroccan mint and white tea buds.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b22', name: 'Rose Oolong', desc: 'Delicate oolong tea with a hint of sweet rose.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },
  { id: 'b23', name: 'Oolong Tea', desc: 'Our special oolong tea sourced from Himalayas.', price: '₹175', category: 'Speciality Teas', mainCategory: 'Beverages' },

  // BEVERAGES - ICED COFFEE
  { id: 'b24', name: 'Espresso on the Rocks', desc: 'Bold 30ml freshly brewed coffee concentrate served on ice.', price: '₹109', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b25', name: 'Iced Americano', desc: '30ml espresso shot poured over ice and cold water.', price: '₹119', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b26', name: 'Affogato', desc: '30ml espresso shot served over vanilla ice cream.', price: '₹139', category: 'Iced Coffee', mainCategory: 'Beverages', highlight: true },
  { id: 'b27', name: 'Iced Cappuccino', desc: '30ml espresso shot topped with ice, steamed milk and thick layer of foam.', price: '₹199', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b28', name: 'Iced Latte', desc: '30ml espresso shot topped with ice, steamed milk and thin layer of foam.', price: '₹199', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b29', name: 'Iced Tonicano', desc: '30ml espresso shot poured over ice and tonic.', price: '₹199', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b30', name: 'Shakerato', desc: '30ml espresso shot and ice, served shaken and not stirred.', price: '₹199', category: 'Iced Coffee', mainCategory: 'Beverages' },
  { id: 'b31', name: 'Iced Vietnamese Latte', desc: '30ml espresso shot and condensed milk topped with ice, steamed milk and thin layer of foam.', price: '₹219', category: 'Iced Coffee', mainCategory: 'Beverages', highlight: true },
  { id: 'b32', name: 'Iced Cafe Mocha', desc: '30ml espresso shot mixed with dark chocolate, topped with ice, steamed milk and foam.', price: '₹219', category: 'Iced Coffee', mainCategory: 'Beverages' },

  // BEVERAGES - FRAPPE
  { id: 'b33', name: 'Cold Coffee', desc: 'Classic drink made with coffee, milk, ice cream and ice.', price: '₹169', category: 'Frappe', mainCategory: 'Beverages', highlight: true },
  { id: 'b34', name: 'Caramel Frappe', desc: 'Caramel syrup, coffee, milk, ice-cream and ice.', price: '₹199', category: 'Frappe', mainCategory: 'Beverages' },
  { id: 'b35', name: 'Hazelnut Frappe', desc: 'Hazelnut syrup, coffee, milk, ice-cream and ice.', price: '₹199', category: 'Frappe', mainCategory: 'Beverages' },
  { id: 'b36', name: 'Irish Frappe', desc: 'Non alcoholic irish syrup, coffee, milk, ice-cream and ice.', price: '₹199', category: 'Frappe', mainCategory: 'Beverages' },
  { id: 'b37', name: 'Chocolate Frappe', desc: 'Chocolate, coffee, milk, ice-cream and ice.', price: '₹199', category: 'Frappe', mainCategory: 'Beverages' },
  { id: 'b38', name: 'Brownie Frappe', desc: 'Brownie, coffee, milk, ice-cream and ice.', price: '₹209', category: 'Frappe', mainCategory: 'Beverages', highlight: true },
  { id: 'b39', name: 'Oreo Frappe', desc: 'Oreos, coffee, milk, ice-cream and ice.', price: '₹209', category: 'Frappe', mainCategory: 'Beverages' },
  { id: 'b40', name: 'Nutella Frappe', desc: 'Nutella, coffee, milk, ice-cream and ice.', price: '₹229', category: 'Frappe', mainCategory: 'Beverages', highlight: true },

  // BEVERAGES - MOCKTAILS
  { id: 'b41', name: 'Garden Fizz', desc: 'Sweetness of strawberry and tangyness of kiwi together.', price: '₹199', category: 'Mocktails', mainCategory: 'Beverages' },
  { id: 'b42', name: 'Sunset Spark', desc: 'Refreshing mocktail made with peach and blueberry syrups.', price: '₹199', category: 'Mocktails', mainCategory: 'Beverages' },
  { id: 'b43', name: 'Green Oasis', desc: 'Citrusy green apple with a splash of raspberry.', price: '₹199', category: 'Mocktails', mainCategory: 'Beverages' },
  { id: 'b44', name: 'Vibrant Twist', desc: 'Soothing blue lagoon with a hint of tangy kiwi.', price: '₹199', category: 'Mocktails', mainCategory: 'Beverages' },
  { id: 'b45', name: 'Citrus Harmony', desc: 'Zesty orange blended with spark of ginger.', price: '₹199', category: 'Mocktails', mainCategory: 'Beverages' },

  // BEVERAGES - ICED TEA
  { id: 'b46', name: 'Lemon Iced Tea', desc: 'Freshly brewed tea served with lemon syrup and ice.', price: '₹159', category: 'Iced Tea', mainCategory: 'Beverages' },
  { id: 'b47', name: 'Peach Iced Tea', desc: 'Freshly brewed tea served with peach syrup and ice.', price: '₹189', category: 'Iced Tea', mainCategory: 'Beverages', highlight: true },
  { id: 'b48', name: 'Grapefruit Iced Tea', desc: 'Freshly brewed tea served with grapefruit syrup and ice.', price: '₹189', category: 'Iced Tea', mainCategory: 'Beverages' },
  { id: 'b49', name: 'Green Apple Iced Tea', desc: 'Freshly brewed tea served with green apple syrup and ice.', price: '₹189', category: 'Iced Tea', mainCategory: 'Beverages' },
  { id: 'b50', name: 'Cranberry Iced Tea', desc: 'Freshly brewed tea served with cranberry syrup and ice.', price: '₹189', category: 'Iced Tea', mainCategory: 'Beverages' },
  { id: 'b51', name: 'Cherry Iced Tea', desc: 'Freshly brewed tea served with cherry syrup and ice.', price: '₹189', category: 'Iced Tea', mainCategory: 'Beverages' },

  // BEVERAGES - MOJITO
  { id: 'b52', name: 'Mint Mojito', desc: 'Lemon, fresh mint and mint syrup topped with soda, the classic way.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b53', name: 'Blackcurrant Mojito', desc: 'Fresh lemon, blackcurrant syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b54', name: 'Guava Mojito', desc: 'Fresh lemon, guava syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b55', name: 'Orange Mojito', desc: 'Fresh lemon, orange syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b56', name: 'Kala Khatta Mojito', desc: 'Fresh lemon, kala khatta syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b57', name: 'Kaccha Aam Mojito', desc: 'Fresh lemon, kaccha aam syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b58', name: 'Mango Mojito', desc: 'Fresh lemon, mango syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },
  { id: 'b59', name: 'Lemon Masala Mojito', desc: 'Fresh lemon, masala syrup and fresh mint topped with soda.', price: '₹159', category: 'Mojito', mainCategory: 'Beverages' },

  // BEVERAGES - SELTZER
  { id: 'b60', name: 'Grapefruit Seltzer', desc: 'Citrusy soda made with grapefruit syrup.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },
  { id: 'b61', name: 'Raspberry Seltzer', desc: 'Berrylicious soda flavoured with raspberry syrup topped with ice.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },
  { id: 'b62', name: 'Elderflower Seltzer', desc: 'Soak in the floral fun with the new elderflower flavoured soda.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },
  { id: 'b63', name: 'Kiwi Seltzer', desc: 'Refreshing kiwi flavoured soda topped with ice.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },
  { id: 'b64', name: 'Cranberry Seltzer', desc: 'Punchy cranberry flavoured soda topped with ice.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },
  { id: 'b65', name: 'Green Apple Seltzer', desc: 'Tangy green apple flavoured soda topped with ice.', price: '₹179', category: 'Seltzer', mainCategory: 'Beverages' },

  // BEVERAGES - MILKSHAKE
  { id: 'b66', name: 'Vanilla Milkshake', desc: 'Made with milk, ice cream, vanilla syrup and ice.', price: '₹199', category: 'Milkshake', mainCategory: 'Beverages' },
  { id: 'b67', name: 'Mango Milkshake', desc: 'Made with milk, ice cream, mango syrup and ice.', price: '₹229', category: 'Milkshake', mainCategory: 'Beverages' },
  { id: 'b68', name: 'Kiwi Milkshake', desc: 'Made with milk, ice cream, kiwi syrup and ice.', price: '₹229', category: 'Milkshake', mainCategory: 'Beverages' },
  { id: 'b69', name: 'Strawberry Milkshake', desc: 'Made with milk, ice cream, strawberry syrup and ice.', price: '₹229', category: 'Milkshake', mainCategory: 'Beverages' },
  { id: 'b70', name: 'Butterscotch Milkshake', desc: 'Made with milk, ice cream, butterscotch syrup and ice.', price: '₹229', category: 'Milkshake', mainCategory: 'Beverages' },
  { id: 'b71', name: 'Oreo Milkshake', desc: 'Made with milk, ice cream, oreos and ice.', price: '₹229', category: 'Milkshake', mainCategory: 'Beverages', highlight: true },
  { id: 'b72', name: 'Brownie Milkshake', desc: 'Made with milk, ice cream, brownie, cocoa powder and ice.', price: '₹249', category: 'Milkshake', mainCategory: 'Beverages', highlight: true },
  { id: 'b73', name: 'Nutella Milkshake', desc: 'Made with milk, ice cream, nutella and ice.', price: '₹269', category: 'Milkshake', mainCategory: 'Beverages', highlight: true },

  // BEVERAGES - BUBBLE LEMONADE
  { id: 'b74', name: 'Lemon Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in blueberry soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
  { id: 'b75', name: 'Litchi Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in lemon soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
  { id: 'b76', name: 'Kiwi Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in litchi soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
  { id: 'b77', name: 'Strawberry Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in strawberry soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
  { id: 'b78', name: 'Blueberry Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in kiwi soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages', highlight: true },
  { id: 'b79', name: 'Green Apple Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in green apple soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
  { id: 'b80', name: 'Mango Passion Bubble Lemonade', desc: 'Tasty and refreshing popping bubbles in mango soda.', price: '₹199', category: 'Bubble Lemonade', mainCategory: 'Beverages' },
];
