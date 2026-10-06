export const CATEGORIES = [
  { id: 'all', name: 'All Departments' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'computers', name: 'Computers & Accessories' },
  { id: 'gaming', name: 'PC & Video Games' },
  { id: 'home', name: 'Home & Kitchen' },
  { id: 'fashion', name: 'Clothing & Fashion' },
  { id: 'beauty', name: 'Beauty & Personal Care' },
  { id: 'books', name: 'Books & Kindle' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Prime Big Deal Days are Here",
    subtitle: "Up to 50% off top tech, smart home & premium electronics",
    cta: "Shop the deals",
    categoryFilter: "electronics",
    badge: "Limited Time Event",
    bgGradient: "linear-gradient(135deg, #131921 0%, #1e3a5f 40%, #007185 100%)",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Level Up Your Battlestation",
    subtitle: "High refresh-rate gaming monitors, graphics cards & mechanical gear",
    cta: "Explore gaming",
    categoryFilter: "gaming",
    badge: "Gamers Choice",
    bgGradient: "linear-gradient(135deg, #0d1117 0%, #301934 50%, #581845 100%)",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Elevate Your Living Space",
    subtitle: "Modern kitchen appliances, robotic cleaners and artisan cookware",
    cta: "Upgrade your home",
    categoryFilter: "home",
    badge: "Trending in Home",
    bgGradient: "linear-gradient(135deg, #1b2838 0%, #2c4a3e 50%, #1d3557 100%)",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Fall & Winter Essentials",
    subtitle: "Discover statement outerwear, luxury timepieces and footwear",
    cta: "Shop new arrivals",
    categoryFilter: "fashion",
    badge: "Editor's Pick",
    bgGradient: "linear-gradient(135deg, #2b1d0c 0%, #633f17 50%, #8b5a2b 100%)",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto NC Optimizer",
    brand: "Sony",
    category: "electronics",
    price: 348.00,
    originalPrice: 399.99,
    discountPercent: 13,
    rating: 4.7,
    reviewsCount: 14820,
    prime: true,
    inStock: true,
    stockCount: 18,
    badge: "Amazon's Choice",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The Sony WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality.",
    specs: [
      "Industry-leading noise cancellation optimized to your wearing conditions",
      "Magnificent Sound, engineered to perfection with Integrated Processor V1",
      "Crystal clear hands-free calling with 4 beamforming microphones",
      "Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)",
      "Ultra-comfortable, lightweight design with soft fit leather"
    ]
  },
  {
    id: 'prod-2',
    title: "Apple MacBook Pro 16\" (M3 Pro chip with 12-core CPU, 18-core GPU, 18GB Memory, 512GB SSD) - Space Black",
    brand: "Apple",
    category: "computers",
    price: 2249.00,
    originalPrice: 2499.00,
    discountPercent: 10,
    rating: 4.9,
    reviewsCount: 3840,
    prime: true,
    inStock: true,
    stockCount: 7,
    badge: "Best Seller",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    description: "With the M3 Pro chip, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it's plugged in or not, with even longer battery life.",
    specs: [
      "Apple M3 Pro chip with 12-core CPU and 18-core GPU",
      "Stunning 16.2-inch Liquid Retina XDR display with Extreme Dynamic Range",
      "Up to 22 hours of battery life with all-day endurance",
      "1080p FaceTime HD camera, studio-quality three-mic array, six-speaker sound system",
      "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port"
    ]
  },
  {
    id: 'prod-3',
    title: "Samsung Odyssey G9 49-Inch Curved Gaming Monitor, 240Hz, 1000R, Dual QHD, G-Sync & FreeSync Premium Pro",
    brand: "Samsung",
    category: "gaming",
    price: 899.99,
    originalPrice: 1299.99,
    discountPercent: 31,
    rating: 4.6,
    reviewsCount: 5210,
    prime: true,
    inStock: true,
    stockCount: 12,
    badge: "Limited time deal",
    deliveryTime: "Thursday, Oct 8",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Immerse yourself in panoramic gameplay with the Samsung Odyssey G9. The 1000R curved screen matches the contours of the human eye for maximum realism and reduced eye strain.",
    specs: [
      "49-inch Dual QHD resolution (5120 x 1440) replaces two side-by-side monitors",
      "Rapid 240Hz refresh rate and lightning 1ms response time",
      "NVIDIA G-Sync and AMD FreeSync Premium Pro compatible",
      "QLED technology creates deeper blacks and brilliant colors with HDR1000",
      "Infinity Core lighting design with customizable RGB glow"
    ]
  },
  {
    id: 'prod-4',
    title: "Breville Barista Touch Espresso Machine with Built-in Grinder & Touchscreen Display - Stainless Steel",
    brand: "Breville",
    category: "home",
    price: 799.95,
    originalPrice: 999.95,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 9140,
    prime: true,
    inStock: true,
    stockCount: 22,
    badge: "Amazon's Choice",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Third wave specialty coffee at home with automated touchscreen. Easily swipe and select espresso, latte, flat white, or cappuccino with microfoam milk texturing.",
    specs: [
      "Automated touchscreen menu pre-programmed with café favorite coffees",
      "ThermoJet heating system reaches optimum extraction temperature in 3 seconds",
      "Integrated conical burr grinder with dose control (up to 22g)",
      "Auto steam wand delivers barista microfoam milk texturing for latte art",
      "Digital temperature control (PID) delivers water at precisely the right temperature"
    ]
  },
  {
    id: 'prod-5',
    title: "Kindle Paperwhite Signature Edition (32 GB) – 6.8\" display, Wireless charging, Auto-adjusting front light",
    brand: "Amazon",
    category: "books",
    price: 139.99,
    originalPrice: 189.99,
    discountPercent: 26,
    rating: 4.8,
    reviewsCount: 31200,
    prime: true,
    inStock: true,
    stockCount: 45,
    badge: "Best Seller",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Get everything in the Kindle Paperwhite, plus wireless charging, auto-adjusting front light, and 32 GB storage. Purpose-built for reading with a flush-front design and 300 ppi glare-free display.",
    specs: [
      "6.8\" glare-free 300 ppi display that reads like real paper even in bright sunlight",
      "Up to 10 weeks of battery life on a single USB-C charge",
      "Adjustable warm light and auto-adjusting sensor for night or day reading",
      "Waterproof (IPX8) tested to withstand accidental immersion in water",
      "Store thousands of titles with 32 GB internal storage"
    ]
  },
  {
    id: 'prod-6',
    title: "Fossil Men's Grant Stainless Steel Chronograph Quartz Watch with Roman Numerals and Blue Leather Strap",
    brand: "Fossil",
    category: "fashion",
    price: 84.50,
    originalPrice: 140.00,
    discountPercent: 40,
    rating: 4.5,
    reviewsCount: 6820,
    prime: true,
    inStock: true,
    stockCount: 30,
    badge: "Limited time deal",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Inspired by vintage clocks, the Grant collection has a timeless appeal. Roman numeral markers and artistic cutaways create modern balance and handsome sophistication.",
    specs: [
      "Case size: 44mm; Band size: 22mm; Quartz movement with 3-hand analog display",
      "Hardened mineral crystal lens resists scratches",
      "Genuine navy blue leather band with buckle closure; interchangeable with all 22mm bands",
      "Water resistant to 50m (165ft): suitable for short periods of recreational swimming",
      "Chronograph functionality with sub-dials for 24-hr time, minutes, and seconds"
    ]
  },
  {
    id: 'prod-7',
    title: "Logitech MX Master 3S Wireless Performance Mouse, 8K DPI Sensor, Quiet Clicks, USB-C, Bluetooth",
    brand: "Logitech",
    category: "computers",
    price: 99.99,
    originalPrice: 119.99,
    discountPercent: 17,
    rating: 4.7,
    reviewsCount: 18450,
    prime: true,
    inStock: true,
    stockCount: 50,
    badge: "Amazon's Choice",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An icon remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
    specs: [
      "Any-surface tracking - now 8K DPI: Works on glass and high-res monitors",
      "Quiet Clicks feel satisfying with 90% less click noise",
      "MagSpeed electromagnetic scrolling is 90% faster and 87% more precise",
      "Ergonomic silhouette crafted to support your palm and fingers naturally",
      "Cross-computer control across Windows and macOS with Flow"
    ]
  },
  {
    id: 'prod-8',
    title: "Dyson V15 Detect Cordless Vacuum Cleaner with Laser Dust Illumination and Piezo Particle Sensor",
    brand: "Dyson",
    category: "home",
    price: 649.99,
    originalPrice: 749.99,
    discountPercent: 13,
    rating: 4.6,
    reviewsCount: 7430,
    prime: true,
    inStock: true,
    stockCount: 9,
    badge: "Amazon's Choice",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Dyson's most intelligent, powerful cordless vacuum. A precisely-angled laser reveals invisible dust on hard floors. Piezo sensor continuously measures dust particle count.",
    specs: [
      "Laser Slim Fluffy cleaner head reveals microscopic dust you can't normally see",
      "LCD screen shows scientific proof of a deep clean in real time",
      "Engineered for whole-home, deep cleaning with up to 60 minutes of run time",
      "High Torque cleaner head with anti-tangle comb automatically clears hair",
      "Advanced whole-machine filtration traps 99.99% of fine particles down to 0.3 microns"
    ]
  },
  {
    id: 'prod-9',
    title: "Keychron Q1 Pro Wireless Custom Mechanical Keyboard with QMK/VIA, CNC Aluminum, RGB Hot-Swappable",
    brand: "Keychron",
    category: "gaming",
    price: 199.00,
    originalPrice: 219.00,
    discountPercent: 9,
    rating: 4.8,
    reviewsCount: 2310,
    prime: true,
    inStock: true,
    stockCount: 15,
    badge: "Best Seller",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The Keychron Q1 Pro is a groundbreaking all-metal wireless custom mechanical keyboard. QMK/VIA support allows users to remap any key and create macro commands with ease.",
    specs: [
      "Full CNC 6063 aluminum body polished and anodized through 24 manufacturing stages",
      "Reliable Broadcom Bluetooth 5.1 seamlessly connects up to 3 devices",
      "Double-gasket design provides a crisp, flexible typing sound and tactile bounce",
      "Hot-swappable sockets compatible with almost all 3-pin and 5-pin MX mechanical switches",
      "South-facing RGB backlights designed to illuminate brighter from the typist's angle"
    ]
  },
  {
    id: 'prod-10',
    title: "Ray-Ban Classic Wayfarer Polarized Sunglasses with 100% UV Protection - Matte Black",
    brand: "Ray-Ban",
    category: "fashion",
    price: 155.00,
    originalPrice: 210.00,
    discountPercent: 26,
    rating: 4.7,
    reviewsCount: 11500,
    prime: true,
    inStock: true,
    stockCount: 28,
    badge: "Amazon's Choice",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ray-Ban Original Wayfarer Classics are the most recognizable style in the history of sunglasses. First designed in 1952, Wayfarers gained popularity among celebrities and artists worldwide.",
    specs: [
      "100% UV Protection: Ray-Ban polarized lenses eliminate 99% of glare",
      "Durable acetate frame designed for long-lasting lightweight comfort",
      "Lens width: 50mm; Bridge: 22mm; Arm length: 150mm",
      "Includes protective case and microfiber cleaning cloth",
      "Made in Italy with authentic Ray-Ban craftsmanship"
    ]
  },
  {
    id: 'prod-11',
    title: "Philips Sonicare DiamondClean 9000 Smart Electric Toothbrush with Bluetooth & Charging Glass",
    brand: "Philips",
    category: "beauty",
    price: 179.96,
    originalPrice: 219.99,
    discountPercent: 18,
    rating: 4.6,
    reviewsCount: 8900,
    prime: true,
    inStock: true,
    stockCount: 20,
    badge: "Best Seller",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1559650656-5d1d4277d462?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559650656-5d1d4277d462?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Removes up to 10x more plaque for a deep clean. Sonicare's smart pressure sensor pulses gently when you brush too hard, protecting your gums.",
    specs: [
      "Up to 10x more plaque removal vs manual toothbrush",
      "4 brushing modes: Clean, White+, Gum Health, and Deep Clean+",
      "3 intensities for personalized brushing experience",
      "Smart sensors provide real-time feedback via Bluetooth connected app",
      "Includes sleek charging glass and premium USB travel case"
    ]
  },
  {
    id: 'prod-12',
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear - Hardcover",
    brand: "Penguin Random House",
    category: "books",
    price: 13.79,
    originalPrice: 27.00,
    discountPercent: 49,
    rating: 4.9,
    reviewsCount: 114500,
    prime: true,
    inStock: true,
    stockCount: 150,
    badge: "#1 Best Seller in Self-Help",
    deliveryTime: "Tomorrow, Oct 7",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    ],
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that teach you exactly how to form good habits and break bad ones.",
    specs: [
      "Over 15 million copies sold worldwide",
      "New York Times #1 Bestseller for over 200 consecutive weeks",
      "Hardcover edition with premium gold foil stamping and ribbon bookmark",
      "Includes downloadable habit cheat sheets and companion audio guide access",
      "Publisher: Avery (October 16, 2018), 320 pages"
    ]
  }
];

export const FOUR_GRID_SECTIONS = [
  {
    id: 'grid-1',
    title: "Gaming accessories",
    linkText: "See more gaming gear",
    category: "gaming",
    items: [
      { name: "Headsets", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
      { name: "Keyboards", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80" },
      { name: "Mice", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80" },
      { name: "Monitors", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 'grid-2',
    title: "Refresh your home & kitchen",
    linkText: "Shop home deals",
    category: "home",
    items: [
      { name: "Espresso & Coffee", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" },
      { name: "Robot Vacuums", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=300&q=80" },
      { name: "Cookware sets", img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=300&q=80" },
      { name: "Kitchen gadgets", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 'grid-3',
    title: "Top picks in electronics",
    linkText: "Explore electronics",
    category: "electronics",
    items: [
      { name: "Premium Audio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
      { name: "Smart Devices", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80" },
      { name: "Laptops & Mac", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80" },
      { name: "Accessories", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 'grid-4',
    title: "Trending style & fashion",
    linkText: "Shop fashion essentials",
    category: "fashion",
    items: [
      { name: "Luxury Watches", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=300&q=80" },
      { name: "Designer Eyewear", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80" },
      { name: "Men's Apparel", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=300&q=80" },
      { name: "Footwear & Boots", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];
