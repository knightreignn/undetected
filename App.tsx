
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  HelpCircle, 
  Wrench, 
  Signal, 
  Users,
  CheckCircle2,
  Settings,
  Instagram,
  Youtube,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  Mail,
  Lock,
  User,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Truck,
  Star
} from 'lucide-react';
import { NAVIGATION_LINKS, DMA_SECTIONS } from './constants';
import { Product, ProductStatus } from './types';

const DISCORD_LINK = "https://discord.gg/pvJG3Ww9xe";

interface CartItem extends Product {
  quantity: number;
}

const REVIEW_IMAGES = [
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000a649859f518e47269f8846c4&ts=490100&p=fs&cid=1&sig=c53b216447849e7591e1f13b6324e93da4c93540e165ea73d76bf&v=0",
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000213d2899479e0f63e6e89791&ts=490100&p=fs&cid=1&sig=137452d1137021175653b65905f9604&ts=490100&p=fs&cid=1&sig=60ba1c47d5e0bb1c8ce1b5eda49fa8864141c2c9e165daff2f67e65ea73d76bf&v=0",
  "https://chatgpt.com/backend-api/estuary/content?id=file_00000000a649859f518e47269f8846c4&ts=490100&p=fs&cid=1&sig=c53b216447849e7591e1f13b6324e93da4c93540e165ea73d76bf&v=0",
  "https://chatgpt.com/backend-api/estuary/content?id=file_000000008544c06283b0f209594f7943&ts=490100&p=fs&cid=1&sig=7ef70be5213b2899479e0f63e6e89791&ts=490100&p=fs&cid=1&sig=137452d1137021175653b65905f9604&ts=490100&p=fs&cid=1&sig=60ba1c47d5e0bb1c8ce1b5eda49fa8864141c2c9e165daff2f67e65ea73d76bf&v=0"
];

const NATURAL_REVIEWS = [
  { user: "zagon", date: "23/03/2025", text: "+Rep. I liked it so much that I decided to buy my second kit. lol. Everything was perfect. This time I bought it with the Apex and Valorant firmware. The best firmware. Now I can build another DMA pc. Thanks for showing me this world of DMA Sanzgaa.", initials: "ZG" },
  { user: "Jacob", date: "31/03/2025", text: "+rep @sanzgaa I want to take a moment to say that his dedication to making sure your products are working is very appreciated. He even gave me new firmware when the original provided had an issue. All products delivered in 3-5 days. Trust me he is your guy 110% recommend.", initials: "JB" },
  { user: "L3gend007YT", date: "26/03/2025", text: "Thank you guys so much for the delivery just got in a week and thanks again for helping me setup everything at same day. I will recommend to everyone buy dma bundle and best Fw and support is available for you 24/7. ✌️", initials: "LG" },
  { user: "PicassoTheWolf", date: "05/05/2025", text: "Big shoutout to the support team! Especially @Support | TheGoat. Over the last 3 days, they've been incredibly helpful and patient as I worked through a series of issues. Consistency—sticking with me through each step, responding quickly. Definitely a great experience!", initials: "PT" },
  { user: "vortex_rx", date: "12/04/2025", text: "was skeptical at first but everything came perfectly packaged. setup was a bit of a headache on my side cuz of my bios settings but the tech support hopped on a call and fixed it in 10 mins. absolutely nuts speeds on the 75t card.", initials: "VR" },
  { user: "kryptic_king", date: "18/04/2025", text: "fuser is actually insane. zero delay and looks clean af. definitely worth the extra cash if u want that true dual pc feel. thanks ducks", initials: "KK" },
  { user: "silent_assassin", date: "20/04/2025", text: "Best DMA hardware on the market rn. Firmware is super stable and support is top notch. Just ordered a kmbox net to replace my old b+ pro, shipping was super fast to EU.", initials: "SA" },
  { user: "dma_newbie", date: "22/04/2025", text: "had no clue what i was doing lol but these guys walked me through the whole thing. the baller bundle is sick. if u have the money just get it and dont look back.", initials: "DN" },
  { user: "ghost_recon", date: "25/04/2025", text: "fast shipping to canada, took only 4 days. everything works as advertised. sanzgaa is the goat for real.", initials: "GR" },
  { user: "pro_gamer99", date: "27/04/2025", text: "tried other sellers before but Ducks is on another level. The build quality of the fuser is way better than the generic ones u find online. firmware hasn't missed a beat in 2 months.", initials: "PG" },
  { user: "shadow_step", date: "29/04/2025", text: "kmbox net is way better than the old serial ones. setup was instant. ducks-services always delivers. +rep", initials: "SS" },
  { user: "toxic_waste", date: "01/05/2025", text: "finally a provider that doesn't just vanish after u pay. had a firmware issue after a game update and they had a fix ready for me next day. legends.", initials: "TW" }
];

const ProductCard: React.FC<{ product: Product; index: number; onAddToCart: (p: Product) => void; onViewProduct: (p: Product) => void }> = ({ product, index, onAddToCart, onViewProduct }) => {
  return (
    <div 
      className="group bg-[#1a1c22] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer animate-in fade-in slide-in-from-bottom-4" 
      style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'both' }}
      onClick={() => onViewProduct(product)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.status && (
          <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider ${
            product.status === ProductStatus.UNDETECTED ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
            product.status === ProductStatus.UPDATING ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 
            'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {product.status === ProductStatus.UNDETECTED ? <CheckCircle2 size={12} /> : <Settings size={12} />}
            {product.status}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-100 mb-3 line-clamp-2 leading-tight min-h-[3rem]">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-gray-500 text-xs font-medium">FROM</span>
            <span className="text-xl font-bold text-blue-400">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through decoration-red-500/50">{product.originalPrice}</span>
            )}
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg shadow-blue-600/10"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductView: React.FC<{ product: Product; onBack: () => void; onAddToCart: (p: Product) => void }> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Store
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="aspect-[16/10] bg-[#1a1c22] rounded-2xl border border-gray-800 overflow-hidden relative shadow-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.status && (
              <div className="absolute top-6 left-6 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg backdrop-blur-md text-xs font-bold uppercase">
                {product.status}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-manrope font-extrabold text-white mb-4 leading-tight">{product.name}</h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-yellow-500">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-current" />)}
              <span className="text-gray-400 text-sm ml-1">4.9/5 (128 Reviews)</span>
            </div>
            <div className="h-4 w-px bg-gray-800"></div>
            <span className="text-green-500 text-sm font-bold flex items-center gap-1.5">
              <Zap size={14} /> Instant Delivery
            </span>
          </div>

          <div className="bg-[#1a1c22] border border-gray-800 rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-blue-400">{product.price}</span>
              {product.originalPrice && <span className="text-xl text-gray-500 line-through decoration-red-500/50">{product.originalPrice}</span>}
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              Experience the pinnacle of hardware excellence. This premium DMA solution offers direct memory access with undetectable signatures and lightning-fast transfer speeds. Every unit is pre-flashed with secure firmware and includes a lifetime warranty on hardware components.
            </p>

            <button 
              onClick={() => onAddToCart(product)}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingCart size={22} />
              Add to Shopping Cart
            </button>
            <p className="text-center text-xs text-gray-500">Checkout completes via our Discord ticket system</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#111318] border border-gray-800 rounded-xl flex items-center gap-3">
              <ShieldCheck className="text-blue-500" size={24} />
              <div>
                <p className="text-white text-sm font-bold">1:1 Firmware</p>
                <p className="text-gray-500 text-xs">Included for free</p>
              </div>
            </div>
            <div className="p-4 bg-[#111318] border border-gray-800 rounded-xl flex items-center gap-3">
              <Truck className="text-purple-500" size={24} />
              <div>
                <p className="text-white text-sm font-bold">Fast Shipping</p>
                <p className="text-gray-500 text-xs">Ships worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-16">
        <h3 className="text-2xl font-bold text-white mb-8">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest">Performance</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">FPGA Model</span>
                <span className="text-gray-200">Xilinx® Artix-7</span>
              </li>
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">Transfer Speed</span>
                <span className="text-gray-200">285 MB/s Burst</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-purple-400 font-bold text-sm uppercase tracking-widest">Connectivity</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">Interface</span>
                <span className="text-gray-200">PCI Express x1</span>
              </li>
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">External Port</span>
                <span className="text-gray-200">USB-C High Speed</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest">Compatibility</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">Operating System</span>
                <span className="text-gray-200">Windows 10/11</span>
              </li>
              <li className="flex justify-between text-sm py-2 border-b border-gray-800/50">
                <span className="text-gray-500">Requirements</span>
                <span className="text-gray-200">2nd PC Required</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionRenderer: React.FC<{ section: any; onAddToCart: (p: Product) => void; onViewProduct: (p: Product) => void }> = ({ section, onAddToCart, onViewProduct }) => {
  return (
    <section className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-manrope font-black text-white uppercase tracking-tight italic drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          {section.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {section.products.map((product: Product, index: number) => (
          <ProductCard key={product.id} product={product} index={index} onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
        ))}
      </div>
    </section>
  );
};

const ReviewSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-24 border-t border-gray-900 overflow-hidden bg-[#0a0c10] animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl lg:text-7xl font-manrope font-black tracking-tighter text-white uppercase italic drop-shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          CUSTOMERS REVIEWS
        </h2>
        <div className="flex items-center justify-center gap-1.5 mt-6 text-blue-500">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          <span className="ml-3 text-gray-400 font-bold tracking-widest text-sm uppercase">Excellent 4.9/5</span>
        </div>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 px-4 lg:px-12 space-y-6 max-w-[2000px] mx-auto">
        {NATURAL_REVIEWS.map((review, i) => (
          <div key={i} className="break-inside-avoid bg-[#111318] border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-600/20">
                  {review.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-bold flex items-center gap-1.5">
                    {review.user} <ShieldCheck size={14} className="text-blue-500" />
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Verified Buyer</div>
                </div>
              </div>
              <div className="text-[10px] text-gray-600 font-mono">{review.date}</div>
            </div>
            
            {i < REVIEW_IMAGES.length && (
              <div className="rounded-xl overflow-hidden mb-5 border border-gray-800/50">
                <img 
                  src={REVIEW_IMAGES[i]} 
                  alt="Customer proof" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
                />
              </div>
            )}

            <div className="space-y-3">
              <div className="flex gap-1 text-yellow-500/80">
                {[1,2,3,4,5].map(j => <Star key={j} size={12} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-medium">
                "{review.text}"
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800/50 flex items-center gap-2">
              <span className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter bg-blue-500/10 px-2 py-0.5 rounded">Setup Assistance Used</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 text-white rounded-xl font-bold border border-blue-500/30 transition-all inline-flex items-center gap-3 shadow-xl group">
          View 200+ Discord Vouchers <Star size={18} className="group-hover:rotate-[144deg] transition-transform duration-500" />
        </a>
      </div>
    </section>
  );
};

const AuthModal: React.FC<{ isOpen: boolean; mode: 'signin' | 'signup'; onClose: () => void }> = ({ isOpen, mode, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />
      <div className="relative bg-[#111318] border border-gray-800 w-full max-w-md p-8 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white font-manrope">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="text" placeholder="Full Name" className="w-full bg-[#1a1c22] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input type="email" placeholder="Email Address" className="w-full bg-[#1a1c22] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input type="password" placeholder="Password" className="w-full bg-[#1a1c22] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-95">
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'signin' | 'signup' }>({ open: false, mode: 'signin' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top whenever selectedProduct changes to a new product
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedProduct?.id]); // Use ID to ensure it triggers only on change

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProduct(null);
  };

  const scrollToReviews = () => {
    const reviews = document.getElementById('reviews-section');
    if (reviews) {
      reviews.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const redirectToDiscord = () => {
    window.open(DISCORD_LINK, '_blank');
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#0c0e12] selection:bg-blue-600 selection:text-white ${(isCartOpen || authModal.open) ? 'overflow-hidden' : ''}`}>
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0c0e12]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <button onClick={scrollToTop} className="flex-shrink-0 flex items-center group">
                <span className="text-2xl font-manrope font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-300 pr-2">
                  UNDETECTED
                </span>
              </button>
              <div className="hidden lg:flex items-center bg-gray-900/50 px-4 py-1.5 rounded-full border border-gray-800 text-xs font-medium text-gray-400 gap-3">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Users size={14} />
                  <span className="text-white">64</span>
                  <span>Online</span>
                </div>
                <div className="h-3 w-px bg-gray-700"></div>
                <div className="flex items-center gap-1.5 text-green-400">
                  <Signal size={14} />
                  <span>Live Status</span>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {NAVIGATION_LINKS.map(link => (
                <button 
                  key={link.name} 
                  onClick={link.name === 'Store' ? scrollToTop : link.name === 'Reviews' ? scrollToReviews : undefined}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden xl:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input type="text" placeholder="Search hardware..." className="bg-gray-900 border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors w-64" />
              </div>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg text-gray-400 hover:text-white transition-all active:scale-95"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#0c0e12] animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </button>

              <button 
                onClick={() => setAuthModal({ open: true, mode: 'signin' })}
                className="hidden sm:block px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => setAuthModal({ open: true, mode: 'signup' })}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Sign Up
              </button>
              <button className="lg:hidden p-2 text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={authModal.open} mode={authModal.mode} onClose={() => setAuthModal({ ...authModal, open: false })} />

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0c0e12] border-l border-gray-800 z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-[#1a1c22]/50">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-blue-500" />
              <h2 className="text-xl font-bold text-white">Your Cart</h2>
              <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded-full">{cartCount} items</span>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <ShoppingCart size={64} className="text-gray-600 mb-2" />
                <p className="text-gray-400 text-lg">Your cart is currently empty.</p>
                <button onClick={() => setIsCartOpen(false)} className="text-blue-400 font-bold hover:underline">Start Shopping</button>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-[#1a1c22] rounded-xl border border-gray-800 group transition-all hover:border-gray-700 animate-in slide-in-from-right-8 duration-300">
                  <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-semibold text-gray-100 line-clamp-2">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-gray-900 rounded-lg border border-gray-800 px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white p-0.5"><Minus size={14} /></button>
                        <span className="text-sm font-bold text-white min-w-[1.5rem] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white p-0.5"><Plus size={14} /></button>
                      </div>
                      <span className="text-blue-400 font-bold">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-800 bg-[#1a1c22]/50 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white text-xl font-bold pt-2 border-t border-gray-800">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={redirectToDiscord}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </aside>

      <main className="container mx-auto px-4 lg:px-8 py-12">
        {!selectedProduct ? (
          <>
            <section className="relative pt-12 pb-24 overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none">
                <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
                <div className="absolute top-[100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full"></div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
                    <Signal size={12} />
                    Industry Leading Performance
                  </div>
                  <h1 className="text-5xl lg:text-8xl font-manrope font-extrabold text-white mb-8 leading-tight">
                    Undetected <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">DMA Excellence</span>
                  </h1>
                  <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                    Unlock the full potential of your hardware. We provide top-tier DMA cards, customized firmware, and premium aiming devices with personalized setup support.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button onClick={redirectToDiscord} className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 group active:scale-95">
                      <HelpCircle size={22} className="group-hover:rotate-12 transition-transform" />
                      What is DMA?
                      <ChevronRight size={20} />
                    </button>
                    <button onClick={redirectToDiscord} className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-2 border border-gray-700 transition-all active:scale-95">
                      <Wrench size={22} />
                      Setup Guides
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="p-3 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/40">
                  <ShoppingBag className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Seamless Setup Guarantee</h4>
                  <p className="text-gray-300">Every DMA purchase includes step-by-step personalized installation support.</p>
                </div>
              </div>
              <button 
                onClick={redirectToDiscord}
                className="whitespace-nowrap px-6 py-2.5 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg active:scale-95"
              >
                Join Discord
              </button>
            </div>

            {DMA_SECTIONS.map((section, idx) => (
              <SectionRenderer key={idx} section={section} onAddToCart={addToCart} onViewProduct={setSelectedProduct} />
            ))}

            <ReviewSection />
          </>
        ) : (
          <ProductView 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
            onAddToCart={addToCart} 
          />
        )}
      </main>

      <footer className="bg-[#0a0c10] border-t border-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-manrope font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pr-2">UNDETECTED</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                Undetected provides top-tier modifications for AAA titles, with over 75,000 successful orders. Backed by 24/7 support and instant delivery. As a leading DMA hardware supplier, we provide cutting-edge solutions to take your gaming experience to the next level.
              </p>
              <div className="flex gap-4">
                <a href={DISCORD_LINK} target="_blank" className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white transition-all active:scale-95"><Instagram size={20} /></a>
                <a href={DISCORD_LINK} target="_blank" className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white transition-all active:scale-95"><Youtube size={20} /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4">
                <li><button onClick={redirectToDiscord} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Customer Support</button></li>
                <li><button onClick={redirectToDiscord} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</button></li>
                <li><button onClick={redirectToDiscord} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Refund Policy</button></li>
                <li><button onClick={redirectToDiscord} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Shipping Policy</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-6">Contact</h5>
              <p className="text-sm text-gray-400 mb-4">For all other inquiries, contact:</p>
              <a href="mailto:admin@ducks-services.com" className="text-blue-400 font-bold hover:underline">admin@ducks-services.com</a>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
            <p>© 2024 Undetected. All rights reserved. Industry Leading DMA Hardware Provider.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5"><Signal size={12} /> Server Status: Online</span>
              <span className="flex items-center gap-1.5"><Users size={12} /> Active Users: 1,402</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
