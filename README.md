# Amazon Clone (React + Vite) - E-commerce

A feature-rich, high-fidelity e-commerce clone of Amazon built with React, modular Vanilla CSS, and modern interactive state management.

---

## 🚀 Key Features

### 1. Amazon Navigation & Header
- **Authentic Amazon Navbar**: Amazon brand logo with signature smile curve, "Deliver to" location selector with modal to update city & postal code (including presets for Seattle, Mumbai, Delhi, Bengaluru).
- **Dual Currency Support (USD $ & INR ₹)**:
  - Header & Footer currency switchers allowing one-click toggle between **US Dollar ($ USD)** and **Indian Rupee (₹ INR)** with live exchange rates (`1 USD ≈ ₹83.50`).
  - Indian Rupee localized formatting (`en-IN` style like `₹29,058` and `₹1,87,790`).
  - Tailored payment options in INR (Amazon Pay UPI, NetBanking, Amazon Pay ICICI Credit Card, Cash on Delivery) and 18% GST calculation.
  - Indian Amazon Prime free delivery threshold (₹499) and delivery speed options.
- **Search & Auto-filter Bar**: Category picker dropdown, responsive input, clear button, and category-tailored search.
- **Header Actions**: Language & Currency indicator, "Hello Alex, Account & Lists", "Returns & Orders", and dynamic Cart counter badge.
- **Sub-Navigation & Side Drawer**: Full slide-out navigation menu ("All"), department quick links, and Prime deals callout.

### 2. Homepage & Product Discovery
- **Hero Slider Carousel**: High-contrast promotional slides with auto-play, navigation controls, and gradient overlay.
- **4-Quadrant Highlight Cards**: Authentic Amazon multi-item cards layered over the hero section (Gaming accessories, Home & Kitchen, Top Picks in Electronics, Trending Fashion).
- **Comprehensive Catalog**: 12+ meticulously curated items across Electronics, Computers, Gaming, Home, Fashion, Books, and Beauty.
- **Interactive Filtering Sidebar**:
  - Filter by Category / Department
  - Amazon Prime eligible toggle
  - Customer review thresholds (4.5★ & 4.0★ and up)
  - Interactive price range slider
  - Grid View and List View switcher
  - Multi-criteria sorting (Featured, Price: Low to High, Price: High to Low, Avg. Customer Rating)

### 3. Rich Product Detail Experience
- **Interactive Product Modal**:
  - Multi-image gallery with real-time thumbnail switching & image zoom
  - Star ratings breakdown and review counts
  - Deal badges and savings calculation
  - Detailed feature specifications bullet points
  - **Amazon Buy Box**: Real-time stock counter, quantity selector, estimated delivery date countdown, "Add to Cart", and one-click "Buy Now".

### 4. Cart & Full Simulated Checkout Flow
- **Slide-Over Cart Drawer**:
  - Free Prime shipping dynamic meter with threshold progress bar
  - Quantity adjustments (`+` / `-`) and item removal
  - Subtotal and item counts
- **Multi-Step Amazon Checkout**:
  - Step 1: Shipping address selection (Seattle default or custom address)
  - Step 2: Payment method (Amazon Prime Rewards Visa, Amazon Pay Balance, COD)
  - Step 3: Delivery speed (FREE Prime Two-Day vs Next-Day Priority $4.99)
  - Step 4: Order review, tax calculation, and order placement
- **Order Confirmation**:
  - Order # assignment (e.g. `114-xxxxxxx-xxxxxxx`)
  - Simulated 4-stage tracking timeline (Ordered -> Shipped -> Out for Delivery -> Delivered)
- **"Your Orders" Dashboard**:
  - Order history tracking, status badges, and instant "Buy it again" re-ordering.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Development Server
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

### Production Build
```bash
npm run build
```

>>>>>>> 2071791 (feat: complete Amazon clone with USD/INR currency support, interactive cart, and checkout flow)
