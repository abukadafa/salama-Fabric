/**
 * SALAMA Fabrics & Bedding - Product Catalog
 * Curated high-resolution luxury photography & specifications
 * Currency: Nigerian Naira (₦)
 * WhatsApp Contact: +234 814 770 9019
 */

const PRODUCTS = [
  {
    id: "bed-001",
    name: "1000TC Royal Egyptian Cotton Duvet Set",
    category: "bedding",
    categoryName: "Luxury Bedding",
    price: 45000,
    oldPrice: 52000,
    badge: "BEST SELLER",
    rating: 5.0,
    reviewsCount: 48,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    description: "Woven from 100% certified long-staple Egyptian cotton with an exquisite 1000 thread count sateen weave. Exceptionally silky, breathable, and designed to soften with every wash.",
    specs: {
      material: "100% Long-Staple Egyptian Cotton",
      weave: "Lustrous Sateen Weave",
      threadCount: "1000 TC",
      included: "1 Duvet Cover, 1 Fitted Sheet, 2 Oxford Pillowcases",
      care: "Machine wash cold on gentle cycle; tumble dry low"
    },
    sizes: ["Queen (6x6 ft)", "King (6x7 ft)", "Super King (7x7 ft)"],
    colors: [
      { name: "Ivory Pearl", hex: "#F7F5EC" },
      { name: "Royal Navy", hex: "#071D40" },
      { name: "Champagne Gold", hex: "#D4AF37" }
    ],
    inStock: true
  },
  {
    id: "bed-002",
    name: "Pure Mulberry Silk Satin Sheet Set",
    category: "bedding",
    categoryName: "Luxury Bedding",
    price: 68000,
    oldPrice: 75000,
    badge: "PREMIUM",
    rating: 5.0,
    reviewsCount: 32,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85",
    description: "Indulge in pure natural luxury with our 22-momme Grade 6A Mulberry Silk set. Hypoallergenic, friction-reducing for hair and skin, and featuring temperature-regulating properties for peaceful sleep.",
    specs: {
      material: "100% Grade 6A Mulberry Silk",
      mommeWeight: "22 Momme",
      included: "1 Flat Sheet, 1 Fitted Sheet, 2 Envelope Pillowcases",
      care: "Hand wash or gentle silk cycle with pH-neutral detergent"
    },
    sizes: ["King (6x7 ft)", "Queen (6x6 ft)"],
    colors: [
      { name: "Champagne Cream", hex: "#E8DEC8" },
      { name: "Midnight Navy", hex: "#09172B" },
      { name: "Blush Rose", hex: "#D9AAB0" }
    ],
    inStock: true
  },
  {
    id: "bed-003",
    name: "Crisp Washed European Linen Bedding Set",
    category: "bedding",
    categoryName: "Luxury Bedding",
    price: 42000,
    oldPrice: 48000,
    badge: "SALE",
    rating: 4.8,
    reviewsCount: 26,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    description: "Crafted from natural European flax, stonewashed for lived-in softness from day one. Naturally thermoregulating and antibacterial, ideal for warm tropical nights.",
    specs: {
      material: "100% Certified European Flax Linen",
      finish: "Pre-washed vintage stone finish",
      included: "1 Linen Duvet Cover, 2 Pillow Shams",
      care: "Machine wash warm; air dry or tumble dry low"
    },
    sizes: ["Queen (6x6 ft)", "King (6x7 ft)"],
    colors: [
      { name: "Oatmeal Natural", hex: "#D6C7B2" },
      { name: "Terracotta Sand", hex: "#C68263" },
      { name: "Olive Mist", hex: "#8A947A" }
    ],
    inStock: true
  },
  {
    id: "bed-004",
    name: "Luxury Goose Down Alternative Pillow Pair",
    category: "bedding",
    categoryName: "Luxury Bedding",
    price: 18500,
    oldPrice: 22000,
    badge: "POPULAR",
    rating: 4.9,
    reviewsCount: 59,
    image: "https://images.unsplash.com/photo-1584100936750-13ee27e85295?auto=format&fit=crop&w=900&q=85",
    description: "Plush hotel-grade micro-cluster fill enveloped in a 400TC Egyptian cotton shell. Provides cloud-like neck support without flattening or triggering allergies.",
    specs: {
      material: "400TC 100% Cotton Jacquard Casing",
      fill: "Hypoallergenic Micro-Cluster Poly Fiber",
      included: "Set of 2 Pillows (Standard/King size)",
      firmness: "Medium-Plush Support"
    },
    sizes: ["Standard (20x26 in)", "King (20x36 in)"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    inStock: true
  },
  {
    id: "fab-001",
    name: "Royal Damask Brocade Fabric (per metre)",
    category: "fabrics",
    categoryName: "Premium Fabrics",
    price: 8500,
    oldPrice: 10000,
    badge: "NEW",
    rating: 4.9,
    reviewsCount: 34,
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=85",
    description: "Intricately woven damask brocade featuring raised metallic gold and navy floral motifs. Heavy drape, durable, and ideal for bespoke upholstery, luxury cushions, and formal garments.",
    specs: {
      material: "Silk Blend with Lurex Metallic Thread",
      width: "58 inches (147 cm)",
      weight: "320 gsm (Heavyweight)",
      unit: "Sold per running metre",
      suitability: "Upholstery, Heavy Drapes, Cushions, Bespoke Fashion"
    },
    sizes: ["1 Metre", "3 Metres Bundle", "5 Metres Roll"],
    colors: [
      { name: "Gold on Deep Navy", hex: "#071D40" },
      { name: "Gold on Champagne Ivory", hex: "#E9DCBF" },
      { name: "Emerald & Gold", hex: "#16382C" }
    ],
    inStock: true
  },
  {
    id: "fab-002",
    name: "Textured Heavy Jacquard Fabric (per metre)",
    category: "fabrics",
    categoryName: "Premium Fabrics",
    price: 6500,
    oldPrice: null,
    badge: null,
    rating: 4.8,
    reviewsCount: 22,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85",
    description: "Richly tactile woven jacquard with a subtle geometric embossed relief. High abrasion resistance makes it perfect for sofas, headboards, and statement accent pieces.",
    specs: {
      material: "Polyester-Cotton Jacquard Blend",
      width: "55 inches (140 cm)",
      weight: "360 gsm",
      unit: "Sold per running metre",
      durability: "35,000 Martindale rubs"
    },
    sizes: ["1 Metre", "3 Metres Bundle", "5 Metres Roll"],
    colors: [
      { name: "Warm Sand", hex: "#C5B396" },
      { name: "Charcoal Slate", hex: "#2B2E35" },
      { name: "Muted Ochre", hex: "#B88E3E" }
    ],
    inStock: true
  },
  {
    id: "fab-003",
    name: "Architectural Heavyweight Upholstery Velvet",
    category: "fabrics",
    categoryName: "Premium Fabrics",
    price: 9200,
    oldPrice: 11000,
    badge: "POPULAR",
    rating: 5.0,
    reviewsCount: 51,
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=85",
    description: "Deep plush pile velvet with a soft matte luster. Water-repellent, stain-resistant, and luxurious to the touch for chairs, bed frames, and luxury drapery.",
    specs: {
      material: "Premium High-Density Poly-Velvet",
      width: "56 inches (142 cm)",
      weight: "420 gsm",
      finish: "Water-repellent protective coating",
      unit: "Sold per running metre"
    },
    sizes: ["1 Metre", "3 Metres Bundle", "5 Metres Roll"],
    colors: [
      { name: "Salama Sapphire Navy", hex: "#081E3F" },
      { name: "Antique Gold", hex: "#BA8C2A" },
      { name: "Forest Emerald", hex: "#1C3B2B" },
      { name: "Burgundy Wine", hex: "#4A121A" }
    ],
    inStock: true
  },
  {
    id: "curt-001",
    name: "Custom Blackout Velvet Curtain Pair",
    category: "curtains",
    categoryName: "Curtains",
    price: 32000,
    oldPrice: 38000,
    badge: "SALE",
    rating: 4.9,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85",
    description: "Custom-tailored heavyweight blackout velvet curtains with thermal insulating lining. Blocks 99% of sunlight and heat, ensuring absolute privacy and energy efficiency.",
    specs: {
      material: "Triple-Weave Blackout Velvet",
      lining: "Thermal acoustic blackout backing",
      heading: "Eyelet Grommet or Pinch Pleat (Selectable)",
      included: "Pair of 2 panels with matching tiebacks"
    },
    sizes: ["Drop 240cm x Width 140cm", "Drop 270cm x Width 200cm", "Custom Length"],
    colors: [
      { name: "Midnight Navy", hex: "#071D40" },
      { name: "Soft Ivory Cream", hex: "#ECE4D3" },
      { name: "Smoky Charcoal", hex: "#2D313A" }
    ],
    inStock: true
  },
  {
    id: "curt-002",
    name: "Tailored Sheer Linen Window Dressing",
    category: "curtains",
    categoryName: "Curtains",
    price: 24000,
    oldPrice: null,
    badge: "NEW",
    rating: 4.8,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef8?auto=format&fit=crop&w=900&q=85",
    description: "Light, airy semi-sheer linen drapes that filter natural sunlight into a gentle, warm glow while preserving daytime privacy. Beautiful fluid movement and slub texture.",
    specs: {
      material: "Fine Slub Linen & Cotton Blend",
      transparency: "Semi-sheer light filtering",
      heading: "Rod pocket + Hidden back tabs",
      included: "Pair of 2 flowing panels"
    },
    sizes: ["Drop 240cm x Width 140cm", "Drop 270cm x Width 180cm"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Warm Natural Flax", hex: "#DFD5C2" }
    ],
    inStock: true
  },
  {
    id: "curt-003",
    name: "Embroidered Metallic Gold Jacquard Curtains",
    category: "curtains",
    categoryName: "Curtains",
    price: 48000,
    oldPrice: 55000,
    badge: "LUXURY",
    rating: 5.0,
    reviewsCount: 28,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=85",
    description: "Fit for a palace: ornate damask pattern woven with shimmering gold metallic thread over an indigo blue canvas. Fully lined with satin for maximum volume and majestic drape.",
    specs: {
      material: "Jacquard Silk Brocade with Metallic Lurex",
      lining: "100% Cotton Satin Lining",
      heading: "Handcrafted Triple Pinch Pleat",
      included: "2 Panels with handcrafted brass-accent tiebacks"
    },
    sizes: ["Drop 260cm x Width 160cm", "Drop 300cm x Width 220cm"],
    colors: [
      { name: "Royal Navy & Gold", hex: "#071D40" },
      { name: "Ivory & Champagne", hex: "#E7DCBF" }
    ],
    inStock: true
  },
  {
    id: "acc-001",
    name: "Silk-Feel Embroidered Throw Pillow Set (2pcs)",
    category: "accessories",
    categoryName: "Home Accessories",
    price: 15000,
    oldPrice: 18000,
    badge: "BEST SELLER",
    rating: 4.9,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=900&q=85",
    description: "Set of 2 luxury accent cushion covers adorned with geometric gold piped embroidery and discreet hidden zippers. Filled with plush bounce-back inserts.",
    specs: {
      material: "Satin Silk Blend with Gold Piping",
      dimensions: "18 x 18 inches (45 x 45 cm)",
      included: "2 Covers + 2 High-Loft Hollowfibre Inserts",
      closure: "Concealed invisible zip"
    },
    sizes: ["18x18 inches", "20x20 inches"],
    colors: [
      { name: "Navy & Gold Border", hex: "#071D40" },
      { name: "Cream & Bronze", hex: "#E8DFC5" },
      { name: "Emerald & Gold", hex: "#16382C" }
    ],
    inStock: true
  },
  {
    id: "acc-002",
    name: "Hand-Quilted Velvet Bed Runner & Cushion Trio",
    category: "accessories",
    categoryName: "Home Accessories",
    price: 26000,
    oldPrice: 30000,
    badge: "SET",
    rating: 4.9,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=85",
    description: "Transform your master bedroom into a 5-star presidential suite. Includes one generous quilted plush velvet bed runner and two matching bolster/throw cushions.",
    specs: {
      material: "Quilted Microvelvet with Gold Foil Accent",
      runnerSize: "240 x 50 cm (fits Queen/King)",
      cushionSizes: "2x 40 x 40 cm",
      finish: "Diamond stitched quilting"
    },
    sizes: ["Queen/King Set (240x50cm)", "Super King Set (260x50cm)"],
    colors: [
      { name: "Midnight Navy", hex: "#071D40" },
      { name: "Rich Gold Ochre", hex: "#B58A22" },
      { name: "Dusty Rose Pink", hex: "#C7959E" }
    ],
    inStock: true
  }
];

function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG");
}
