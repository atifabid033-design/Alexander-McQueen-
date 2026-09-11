/**
 * ALEXANDER MCQUEEN REDESIGN CONCEPT - PRODUCT DATABASE
 * High-resolution luxury product data & curated editorial imagery
 */

const PRODUCTS_DATA = [
  {
    id: "mq-001",
    name: "The Manta Sculptural Leather Tote",
    category: "Bags",
    gender: "Women",
    price: 2890,
    currency: "USD",
    color: "Warm Ivory",
    colorsAvailable: ["Warm Ivory", "Obsidian Black", "Deep Camel"],
    sizes: ["One Size"],
    description: "Architectural leather tote featuring hand-moulded curves inspired by the marine manta ray silhouette. Crafted from full-grain Italian calfskin with polished pale gold hardware.",
    details: [
      "Hand-moulded sculptural calfskin leather",
      "Signature pale gold-finish anatomical hardware",
      "Double structured top handles and detachable shoulder strap",
      "Suede-lined interior with zipped pocket and card slot",
      "Dimensions: 34 cm W x 26 cm H x 14 cm D",
      "Made in Italy"
    ],
    materials: "100% Calfskin Leather. Interior: 100% Kid Suede Lining.",
    care: "Clean with a soft, dry cloth. Keep away from direct heat, sunlight and humidity. Store in provided dust bag.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "CRAFTING THE MANTA SILHOUETTE",
      subtitle: "34 HOURS OF ARTISANAL HAND-FORMING",
      quote: "The Manta Tote represents a balance between biological fluid dynamics and rigorous British tailoring geometry.",
      hotspots: [
        { x: 30, y: 40, title: "Hand-moulded Leather Arc", text: "Moistened calfskin is shaped over custom wooden lasts for 48 hours to preserve memory curves." },
        { x: 70, y: 55, title: "Anatomical Pale Gold Clasp", text: "Precision cast brass dipped in 18k pale gold with subtle hand-polished satin contrast." },
        { x: 50, y: 80, title: "Saddle-Stitched Edge", text: "Waxed linen thread hand-stitched by senior master artisans in Florence." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Iconic Handbag"
  },
  {
    id: "mq-002",
    name: "Wishbone Asymmetric Leather Shoulder Bag",
    category: "Bags",
    gender: "Women",
    price: 2450,
    currency: "USD",
    color: "Soft Parchment",
    colorsAvailable: ["Soft Parchment", "Midnight Black", "Oxblood Red"],
    sizes: ["One Size"],
    description: "An asymmetric shoulder bag constructed with sharp geometric paneling and a custom wishbone metal handle. Designed for versatility with an adjustable crossbody leather strap.",
    details: [
      "Smooth calfskin with precise architectural panelling",
      "Cast wishbone top handle in brushed metallic finish",
      "Magnetic flap closure with dual interior compartments",
      "Nappa leather interior lining",
      "Dimensions: 28 cm W x 18 cm H x 8 cm D",
      "Made in Italy"
    ],
    materials: "100% Smooth Calfskin. Metallic Hardware: 100% Brass.",
    care: "Avoid contact with dark denim or abrasive surfaces. Store with internal tissue to maintain structure.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1594223274512-ad4802716944?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1594223274512-ad4802716944?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "THE WISHBONE STRUCTURAL FRAME",
      subtitle: "GEOMETRIC ASYMMETRY IN NAPPA",
      quote: "Every seam is bonded before top-stitching to achieve crisp knife-edge silhouette lines.",
      hotspots: [
        { x: 45, y: 35, title: "Sculpted Metal Wishbone", text: "Hand-finished organic handle crafted from lightweight zinc alloy." },
        { x: 60, y: 70, title: "Beveled Edge Painting", text: "Five coats of matte sealant applied by hand to seal raw leather edges." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "New Arrival"
  },
  {
    id: "mq-003",
    name: "Wishbone Tonal Leather Loafers",
    category: "Shoes",
    gender: "Women",
    price: 1190,
    currency: "USD",
    color: "Ivory Cream",
    colorsAvailable: ["Ivory Cream", "Black Matte"],
    sizes: ["IT 36", "IT 37", "IT 38", "IT 39", "IT 40", "IT 41"],
    description: "Refined leather loafers elevated by a subtle Wishbone metal bar across the strap. Engineered with a cushioned leather footbed and Blake-stitched leather sole.",
    details: [
      "Smooth cream calfskin leather",
      "Wishbone brass hardware insert",
      "Blake-stitched construction for durability and flexibility",
      "15mm heel height",
      "Made in Italy"
    ],
    materials: "100% Calf Leather Upper and Sole.",
    care: "Condition with neutral leather cream. Apply rubber sole guards for extended wear.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "LASTING & BLAKE STITCHING",
      subtitle: "TRADITIONAL SHOEMAKING EXCELLENCE",
      quote: "Built on a bespoke last to provide exceptional arch support with an elongated almond toe.",
      hotspots: [
        { x: 50, y: 50, title: "Blake Stitch Sole", text: "Internal seam stitching connecting insole directly to the leather outsole." }
      ]
    },
    featured: false,
    isNew: false,
    tag: "Footwear Classic"
  },
  {
    id: "mq-004",
    name: "Rosa Sculptural Leather Sandals",
    category: "Shoes",
    gender: "Women",
    price: 1350,
    currency: "USD",
    color: "Pearl White",
    colorsAvailable: ["Pearl White", "Obsidian Black"],
    sizes: ["IT 36", "IT 37", "IT 38", "IT 39", "IT 40"],
    description: "High-fashion heeled sandals featuring hand-pleated leather petals that encircle the ankle. Set upon a slim 90mm architectural heel.",
    details: [
      "Hand-shaped leather rose motif ankle strap",
      "Slender buckle ankle fastening",
      "90mm / 3.5 inches sculpted heel",
      "Leather outsole with metallic McQueen logo stamp",
      "Made in Italy"
    ],
    materials: "100% Nappa Leather upper and lining.",
    care: "Store in individual shoe dust bags to prevent delicate petal distortion.",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "PETAL PATTERN TECHNIQUE",
      subtitle: "FLORAL ANATOMY TRANSLATED INTO NAPPA",
      quote: "Each petal is laser-cut and hand-rolled by couture specialists in Milan.",
      hotspots: [
        { x: 55, y: 30, title: "Laser-Cut Petal Layering", text: "Graduated Nappa petals stitched in spiral formation for dimensional volume." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Runway Highlight"
  },
  {
    id: "mq-005",
    name: "Horn Heel Calfskin Ankle Boots",
    category: "Shoes",
    gender: "Women",
    price: 1790,
    currency: "USD",
    color: "Chalk White",
    colorsAvailable: ["Chalk White", "Deep Black"],
    sizes: ["IT 36", "IT 37", "IT 38", "IT 39", "IT 40"],
    description: "Pointed ankle boots defined by a sculpted horn-inspired metallic heel. Crafted from supple Italian calfskin with a side zip closure.",
    details: [
      "Pointed toe silhouette with sharp welt definition",
      "Cast metal horn heel (85mm)",
      "Concealed side zip with leather pull tab",
      "Smooth leather interior lining",
      "Made in Italy"
    ],
    materials: "100% Calfskin. Heel: 100% Galvanized Brass.",
    care: "Use specialized metallic cleaner for heel hardware. Polish leather gently.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "SCULPTED HORN HEEL METALLURGY",
      subtitle: "STRUCTURAL BALANCE & ARCHITECTURAL SUPPORT",
      quote: "Engineered with internal steel shanks to support weight evenly across the heel arch.",
      hotspots: [
        { x: 50, y: 75, title: "Structural Steel Core", text: "Provides strength despite the radical tapering horn profile." }
      ]
    },
    featured: false,
    isNew: true,
    tag: "Statement Boot"
  },
  {
    id: "mq-006",
    name: "Hourglass Double-Breasted Tailored Jacket",
    category: "Clothing",
    gender: "Women",
    price: 3690,
    currency: "USD",
    color: "Off-White Wool",
    colorsAvailable: ["Off-White Wool", "Charcoal Black"],
    sizes: ["IT 38", "IT 40", "IT 42", "IT 44", "IT 46"],
    description: "Savile Row-inspired double-breasted jacket sculpted with a dramatic hourglass waist and peaked lapels. Crafted from compact virgin wool gabardine.",
    details: [
      "Sharp padded shoulders and nipped waist structure",
      "Peak lapels with hand-stitched buttonhole detail",
      "Horn button front closure and four-button cuffs",
      "Flap hip pockets and welt chest pocket",
      "Full cupro silk lining",
      "Made in Italy"
    ],
    materials: "100% Virgin Wool Gabardine. Lining: 100% Cupro.",
    care: "Dry clean only by specialized luxury garment care providers.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "SAVILE ROW WAIST ARCHITECTURE",
      subtitle: "INTERNAL CANVAS CONSTRUCTION",
      quote: "Featuring full floating horsehair canvas that molds to the wearer's body over time.",
      hotspots: [
        { x: 50, y: 30, title: "Hand-Padded Chest Canvas", text: "Layered horsehair chest piece stitched with over 1,200 tiny pad stitches." },
        { x: 40, y: 60, title: "Hourglass Darting", text: "Precision darts designed to contour the ribcage cleanly." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Haute Tailoring"
  },
  {
    id: "mq-007",
    name: "Sculptural Corset Silk Evening Dress",
    category: "Clothing",
    gender: "Women",
    price: 4950,
    currency: "USD",
    color: "Ivory Silk",
    colorsAvailable: ["Ivory Silk", "Obsidian Black"],
    sizes: ["IT 38", "IT 40", "IT 42", "IT 44"],
    description: "Floor-length evening gown with an internal boned corset foundation and sweeping asymmetric silk crepe drape. High slit and trailing train.",
    details: [
      "Internal 12-bone corset architecture",
      "Asymmetric off-the-shoulder draped neckline",
      "Concealed back zip with hook-and-eye closure",
      "High leg slit with hand-rolled hem finish",
      "Made in France"
    ],
    materials: "100% Silk Crepe de Chine. Lining: 100% Silk Habotai.",
    care: "Dry clean only. Handle with cotton gloves when storing.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "INTERNAL CORSET FOUNDATION",
      subtitle: "HISTORICAL CORSET ARCHITECTURE REIMAGINED",
      quote: "Flexible steel boning encased in velvet ribbon for ultimate structure and comfort.",
      hotspots: [
        { x: 50, y: 45, title: "Velvet Encased Steel Boning", text: "Sourced from historic Parisian corset makers." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Couture Gown"
  },
  {
    id: "mq-008",
    name: "Men's Asymmetric Slash Tailored Suit Jacket",
    category: "Clothing",
    gender: "Men",
    price: 3490,
    currency: "USD",
    color: "Light Chalk Grey",
    colorsAvailable: ["Light Chalk Grey", "Deep Navy"],
    sizes: ["IT 46", "IT 48", "IT 50", "IT 52", "IT 54"],
    description: "Contemporary tailored single-breasted suit jacket featuring a subtle diagonal slash detail across the lapel. Cut from fine English wool mohair.",
    details: [
      "Single-breasted single horn button closure",
      "Diagonal chest slash with satin lining reveal",
      "Narrow notch lapel and welt pockets",
      "Twin back vents for ease of movement",
      "Made in Italy"
    ],
    materials: "84% Virgin Wool, 16% Mohair. Slash Accent: 100% Silk Satin.",
    care: "Dry clean only. Steam gently.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "ENGLISH MOHAIR & SATIN INTERSECT",
      subtitle: "PRECISION SLASH CRAFTSMANSHIP",
      quote: "The slash feature requires laser-guided cutting to avoid fraying the mohair weave.",
      hotspots: [
        { x: 45, y: 35, title: "Laser Cut Slash Edge", text: "Bound with silk grosgrain ribbon on the interior." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Men's Tailoring"
  },
  {
    id: "mq-009",
    name: "Men's Oversized Court Leather Sneakers",
    category: "Shoes",
    gender: "Men",
    price: 890,
    currency: "USD",
    color: "White / Off-White",
    colorsAvailable: ["White / Off-White", "White / Silver"],
    sizes: ["IT 40", "IT 41", "IT 42", "IT 43", "IT 44", "IT 45"],
    description: "The iconic oversized rubber sole sneaker constructed from smooth calfskin with a contrast ivory suede heel counter.",
    details: [
      "Smooth calfskin upper with micro-perforated air holes",
      "Signature 45mm chunky lightweight rubber sole",
      "Ivory suede heel tab with silver foil McQueen lettering",
      "Padded collar and tongue for elevated comfort",
      "Made in Italy"
    ],
    materials: "100% Calfskin Upper. Sole: 100% Lightweight Rubber.",
    care: "Clean with white sneaker wipe. Do not submerge in water.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "OVERSIZED SOLE MOULDING",
      subtitle: "ERGANOMIC LIGHTWEIGHT RUBBER DENSITY",
      quote: "Engineered using dual-density blown rubber for cushioning despite the platform volume.",
      hotspots: [
        { x: 50, y: 70, title: "Dual Density Mold", text: "Provides shock absorption while maintaining clean geometric profile." }
      ]
    },
    featured: false,
    isNew: false,
    tag: "Casual Luxury"
  },
  {
    id: "mq-010",
    name: "Organic Molten Gold Skull Cuff",
    category: "Jewellery",
    gender: "Women",
    price: 950,
    currency: "USD",
    color: "Champagne Gold",
    colorsAvailable: ["Champagne Gold", "Antique Silver"],
    sizes: ["S (15cm)", "M (17cm)", "L (19cm)"],
    description: "Rigid open brass cuff with a hand-sculpted molten metal texture terminating in stylized organic skull terminals.",
    details: [
      "18k pale gold plated solid brass",
      "Molten lava texture applied by hand lost-wax casting",
      "Discreet engraved logo inside the band",
      "Made in Italy"
    ],
    materials: "100% Hypoallergenic Brass with 18k Pale Gold Plating.",
    care: "Store in cloth pouch. Wipe with dry microfiber jewelry cloth.",
    image: "https://images.unsplash.com/photo-1611591475140-7982ec8c2084?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1611591475140-7982ec8c2084?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "LOST-WAX SCULPTING METHOD",
      subtitle: "HAND-CARVED WAX MOLDS",
      quote: "Each cuff possesses subtle organic variations owing to the artisanal lost-wax technique.",
      hotspots: [
        { x: 50, y: 50, title: "Lost Wax Cast Texture", text: "Organic erosion pattern inspired by raw geological formations." }
      ]
    },
    featured: true,
    isNew: true,
    tag: "Fine Accessory"
  },
  {
    id: "mq-011",
    name: "Men's Silk Jacquard Harness Shirt",
    category: "Clothing",
    gender: "Men",
    price: 1450,
    currency: "USD",
    color: "Ivory Silk",
    colorsAvailable: ["Ivory Silk", "Classic Black"],
    sizes: ["IT 46", "IT 48", "IT 50", "IT 52"],
    description: "Pure silk jacquard shirt defined by an integrated tonal harness detail draped across the shoulders and back.",
    details: [
      "Point collar with mother-of-pearl buttons",
      "Integrated silk harness shoulder straps",
      "Single-button barrel cuffs",
      "100% Italian silk jacquard with subtle damask pattern",
      "Made in Italy"
    ],
    materials: "100% Mulberry Silk Jacquard.",
    care: "Specialized dry clean. Do not tumble dry.",
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "INTEGRATED HARNESS ASSEMBLY",
      subtitle: "DRAPED SILK ENGINEERING",
      quote: "Adjustable silk harness straps woven directly into the shirt yoke seam.",
      hotspots: [
        { x: 45, y: 25, title: "Hand-Stitched Yoke Harness", text: "Seamless connection to chest panels without bulky seam lines." }
      ]
    },
    featured: false,
    isNew: true,
    tag: "Men's Luxury"
  },
  {
    id: "mq-012",
    name: "High-Waisted Cigarette Trousers",
    category: "Clothing",
    gender: "Women",
    price: 1290,
    currency: "USD",
    color: "Soft Cream",
    colorsAvailable: ["Soft Cream", "Black Wool"],
    sizes: ["IT 38", "IT 40", "IT 42", "IT 44"],
    description: "Impeccably tailored high-waisted trousers featuring a sharp central press crease and subtle ankle slit.",
    details: [
      "High-rise waist with concealed zip and bar closure",
      "Sharp front and back leg creases",
      "Side slant pockets and rear welt pocket",
      "Ankle slit detail",
      "Made in Italy"
    ],
    materials: "100% Wool Crepe. Lining: 100% Cupro.",
    care: "Dry clean only. Press with damp cloth.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=90"
    ],
    atelier: {
      title: "SHARP CREASE STEAM SHAPING",
      subtitle: "WOOL CREPE TENSION REGULATION",
      quote: "Steamed over contoured aluminum presses for crisp permanent creases.",
      hotspots: [
        { x: 50, y: 60, title: "Permanent Front Crease", text: "Inlaid subtle adhesive thread ensures crease stays sharp after dry cleaning." }
      ]
    },
    featured: false,
    isNew: false,
    tag: "Essential Tailoring"
  }
];

// Helper functions for data access
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
}

function getProductsByCategory(category) {
  if (!category || category === "All") return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.gender.toLowerCase() === category.toLowerCase());
}

function getFeaturedProducts() {
  return PRODUCTS_DATA.filter(p => p.featured);
}
