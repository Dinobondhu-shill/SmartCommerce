

export const products = [
    {
      id: "1",
      name: "Eclipse Zenith Strapback",
      sku: "ECL-ZNT-001",
      description:
        "Crafted with precision and style, this cap offers a sleek, structured silhouette, ensuring both style and comfort. Its adjustable strap back closure guarantees a perfect fit for all-day wear. Made with premium materials, this cap is designed to withstand daily use while maintaining its shape and color vibrancy.",
      shortDescription:
        "Crafted with precision and style, this cap offers a sleek, structured silhouette, ensuring both style and comfort. Its adjustable strap back closure guarantees a perfect fit for all-day wear.",
      status: "published",
      featured: true,
  
      regularPrice: 626,
      hasDiscount: true,
      discountType: "percentage",
      discountValue: 20,
      discountedPrice: 499,
      costPrice: 350,
      taxStatus: "taxable",
      taxClass: "standard",
  
      manageStock: true,
      stockQuantity: 45,
      allowBackorders: "no",
      lowStockThreshold: 10,
  
      category: "accessories",
      tags: ["cap", "headwear", "fashion", "casual"],
      brand: "Eclipse",
      vendor: "Eclipse Official Store",
  
      attributes: [
        {
          name: "Color",
          values: [
            { id: "black", value: "black", hex: "#000000", class: "bg-black" },
            { id: "turquoise", value: "turquoise", hex: "#40E0D0", class: "bg-[#40E0D0]" },
            { id: "orange", value: "orange", hex: "#FFA500", class: "bg-orange-400" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Size",
          values: [
            { id: "xs", value: "xs" },
            { id: "s", value: "s" },
            { id: "m", value: "m" },
            { id: "l", value: "l" },
            { id: "xl", value: "xl" },
            { id: "xxl", value: "xxl" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Material",
          values: [{ id: "polyester", value: "98% polyester, 2% elastane" }],
          visible: true,
          variation: false,
        },
      ],
      hasVariations: false,
      variations: [],
  
      weight: "0.2",
      dimensions: {
        length: "25",
        width: "20",
        height: "15",
      },
      shippingClass: "standard",
  
      metaTitle: "Eclipse Zenith Strapback Cap | Premium Headwear",
      metaDescription:
        "Elevate your style with the Eclipse Zenith Strapback. Premium quality, adjustable fit, and sleek design for everyday wear.",
      metaKeywords: "strapback, cap, headwear, eclipse, fashion accessory",
  
      purchaseNote:
        "Thank you for purchasing the Eclipse Zenith Strapback. For care instructions, hand wash with cold water and air dry.",
      menuOrder: "0",
      enableReviews: true,
  
      relatedProducts: ["2", "5", "8"],
      upsells: ["3"],
      crossSells: ["4", "7"],
  
      images: [
        "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
        "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
        "https://i.ibb.co.com/h2BqX5r/camera.jpg",
        "https://i.ibb.co.com/CBG11pM/speaker.jpg",
      ],
    },
    {
      id: "2",
      name: "Quantum Pro Wireless Headphones",
      sku: "QNT-PRO-002",
      description:
        "Experience unparalleled sound quality with the Quantum Pro Wireless Headphones. Featuring active noise cancellation, 40-hour battery life, and premium memory foam ear cushions for extended comfort. The built-in microphone array ensures crystal clear calls even in noisy environments.",
      shortDescription: "Premium wireless headphones with active noise cancellation and 40-hour battery life.",
      status: "published",
      featured: true,
  
      regularPrice: 299,
      hasDiscount: false,
      discountType: "percentage",
      discountValue: 0,
      discountedPrice: 299,
      costPrice: 180,
      taxStatus: "taxable",
      taxClass: "standard",
  
      manageStock: true,
      stockQuantity: 78,
      allowBackorders: "no",
      lowStockThreshold: 15,
  
      category: "electronics",
      tags: ["headphones", "wireless", "audio", "noise-cancellation"],
      brand: "Quantum",
      vendor: "TechGadgets Inc.",
  
      attributes: [
        {
          name: "Color",
          values: [
            { id: "black", value: "black", hex: "#000000", class: "bg-black" },
            { id: "white", value: "white", hex: "#FFFFFF", class: "bg-white border border-gray-200" },
            { id: "navy", value: "navy", hex: "#000080", class: "bg-blue-900" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Connectivity",
          values: [{ id: "bluetooth", value: "Bluetooth 5.2" }],
          visible: true,
          variation: false,
        },
        {
          name: "Battery Life",
          values: [{ id: "40hr", value: "40 hours" }],
          visible: true,
          variation: false,
        },
      ],
      hasVariations: false,
      variations: [],
  
      weight: "0.35",
      dimensions: {
        length: "18",
        width: "15",
        height: "8",
      },
      shippingClass: "standard",
  
      metaTitle: "Quantum Pro Wireless Headphones | Premium Audio Experience",
      metaDescription:
        "Experience superior sound quality with Quantum Pro Wireless Headphones featuring active noise cancellation and 40-hour battery life.",
      metaKeywords: "wireless headphones, noise cancellation, premium audio, quantum pro",
  
      purchaseNote:
        "Thank you for purchasing Quantum Pro Headphones. Register your product online for an extended warranty.",
      menuOrder: "0",
      enableReviews: true,
  
      relatedProducts: ["3", "6", "9"],
      upsells: ["5"],
      crossSells: ["1", "7"],
  
      images: [
        "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
        "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
        "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      ],
    },
    {
      id: "3",
      name: "Lumina Pro DSLR Camera",
      sku: "LMN-PRO-003",
      description:
        "Capture stunning photos and videos with the Lumina Pro DSLR Camera. This professional-grade camera features a 32MP full-frame sensor, 4K video recording at 60fps, and advanced autofocus system with eye tracking. The weather-sealed body ensures you can shoot in any conditions.",
      shortDescription: "Professional DSLR camera with 32MP full-frame sensor and 4K video recording capabilities.",
      status: "published",
      featured: false,
  
      regularPrice: 1299,
      hasDiscount: true,
      discountType: "fixed",
      discountValue: 200,
      discountedPrice: 1099,
      costPrice: 850,
      taxStatus: "taxable",
      taxClass: "standard",
  
      manageStock: true,
      stockQuantity: 12,
      allowBackorders: "notify",
      lowStockThreshold: 5,
  
      category: "electronics",
      tags: ["camera", "photography", "dslr", "4k", "professional"],
      brand: "Lumina",
      vendor: "PhotoPro Equipment",
  
      attributes: [
        {
          name: "Sensor",
          values: [{ id: "full-frame", value: "32MP Full-Frame" }],
          visible: true,
          variation: false,
        },
        {
          name: "Video",
          values: [{ id: "4k60", value: "4K 60fps" }],
          visible: true,
          variation: false,
        },
        {
          name: "Storage",
          values: [
            { id: "sd", value: "SD Card" },
            { id: "cf", value: "CF Express" },
          ],
          visible: true,
          variation: false,
        },
      ],
      hasVariations: false,
      variations: [],
  
      weight: "1.2",
      dimensions: {
        length: "15",
        width: "12",
        height: "8",
      },
      shippingClass: "premium",
  
      metaTitle: "Lumina Pro DSLR Camera | Professional Photography Equipment",
      metaDescription:
        "Elevate your photography with the Lumina Pro DSLR featuring a 32MP full-frame sensor, 4K video, and professional-grade features.",
      metaKeywords: "dslr camera, professional camera, 4k video, photography equipment",
  
      purchaseNote:
        "Thank you for purchasing the Lumina Pro DSLR. Register your product for a free online photography course.",
      menuOrder: "0",
      enableReviews: true,
  
      relatedProducts: ["6", "9", "12"],
      upsells: ["4", "15"],
      crossSells: ["2", "8"],
  
      images: [
        "https://i.ibb.co.com/h2BqX5r/camera.jpg",
        "https://i.ibb.co.com/CBG11pM/speaker.jpg",
        "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
      ],
    },
    {
      id: "4",
      name: "SonicWave Bluetooth Speaker",
      sku: "SNW-SPK-004",
      description:
        "Fill any room with immersive sound using the SonicWave Bluetooth Speaker. With dual passive radiators, this compact speaker delivers deep bass and crystal clear highs. The waterproof design (IPX7 rated) makes it perfect for outdoor adventures, while the 24-hour battery life ensures the music never stops.",
      shortDescription: "Portable waterproof Bluetooth speaker with powerful sound and 24-hour battery life.",
      status: "published",
      featured: true,
  
      regularPrice: 149,
      hasDiscount: true,
      discountType: "percentage",
      discountValue: 15,
      discountedPrice: 126.65,
      costPrice: 80,
      taxStatus: "taxable",
      taxClass: "standard",
  
      manageStock: true,
      stockQuantity: 65,
      allowBackorders: "no",
      lowStockThreshold: 10,
  
      category: "electronics",
      tags: ["speaker", "bluetooth", "waterproof", "portable", "audio"],
      brand: "SonicWave",
      vendor: "AudioTech Solutions",
  
      attributes: [
        {
          name: "Color",
          values: [
            { id: "black", value: "black", hex: "#000000", class: "bg-black" },
            { id: "blue", value: "blue", hex: "#0000FF", class: "bg-blue-600" },
            { id: "red", value: "red", hex: "#FF0000", class: "bg-red-600" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Waterproof Rating",
          values: [{ id: "ipx7", value: "IPX7" }],
          visible: true,
          variation: false,
        },
        {
          name: "Battery Life",
          values: [{ id: "24hr", value: "24 hours" }],
          visible: true,
          variation: false,
        },
      ],
      hasVariations: false,
      variations: [],
  
      weight: "0.8",
      dimensions: {
        length: "20",
        width: "8",
        height: "8",
      },
      shippingClass: "standard",
  
      metaTitle: "SonicWave Bluetooth Speaker | Waterproof Portable Audio",
      metaDescription:
        "Experience powerful sound anywhere with the waterproof SonicWave Bluetooth Speaker featuring 24-hour battery life and deep bass.",
      metaKeywords: "bluetooth speaker, waterproof speaker, portable audio, sonicwave",
  
      purchaseNote:
        "Thank you for purchasing the SonicWave Speaker. Download our app for equalizer settings and firmware updates.",
      menuOrder: "0",
      enableReviews: true,
  
      relatedProducts: ["2", "7", "10"],
      upsells: ["6"],
      crossSells: ["3", "9"],
  
      images: [
        "https://i.ibb.co.com/CBG11pM/speaker.jpg",
        "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
        "https://i.ibb.co.com/h2BqX5r/camera.jpg",
      ],
    },
    {
      id: "5",
      name: "Vertex Smartwatch Series 5",
      sku: "VTX-SW5-005",
      description:
        "Stay connected and track your fitness with the Vertex Smartwatch Series 5. This advanced wearable features heart rate monitoring, sleep tracking, and GPS. With a vibrant AMOLED display and 7-day battery life, it's the perfect companion for an active lifestyle. Water-resistant up to 50 meters and compatible with both iOS and Android.",
      shortDescription: "Advanced smartwatch with fitness tracking, heart rate monitoring, and 7-day battery life.",
      status: "published",
      featured: true,
  
      regularPrice: 249,
      hasDiscount: false,
      discountType: "percentage",
      discountValue: 0,
      discountedPrice: 249,
      costPrice: 140,
      taxStatus: "taxable",
      taxClass: "standard",
  
      manageStock: true,
      stockQuantity: 32,
      allowBackorders: "no",
      lowStockThreshold: 8,
  
      category: "wearables",
      tags: ["smartwatch", "fitness", "wearable", "health", "tech"],
      brand: "Vertex",
      vendor: "Vertex Technologies",
  
      attributes: [
        {
          name: "Color",
          values: [
            { id: "black", value: "black", hex: "#000000", class: "bg-black" },
            { id: "silver", value: "silver", hex: "#C0C0C0", class: "bg-gray-300" },
            { id: "rose-gold", value: "rose gold", hex: "#B76E79", class: "bg-pink-300" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Band Material",
          values: [
            { id: "silicone", value: "silicone" },
            { id: "leather", value: "leather" },
            { id: "metal", value: "metal" },
          ],
          visible: true,
          variation: true,
        },
        {
          name: "Display",
          values: [{ id: "amoled", value: '1.4" AMOLED' }],
          visible: true,
          variation: false,
        },
        {
          name: "Water Resistance",
          values: [{ id: "50m", value: "50 meters" }],
          visible: true,
          variation: false,
        },
      ],
      hasVariations: true,
      variations: [],
  
      weight: "0.05",
      dimensions: {
        length: "4.5",
        width: "3.8",
        height: "1.2",
      },
      shippingClass: "small",
  
      metaTitle: "Vertex Smartwatch Series 5 | Advanced Fitness & Health Tracking",
      metaDescription:
        "Track your fitness and stay connected with the Vertex Smartwatch Series 5 featuring heart rate monitoring, GPS, and 7-day battery life.",
      metaKeywords: "smartwatch, fitness tracker, health monitor, wearable tech",
  
      purchaseNote: "Thank you for purchasing the Vertex Smartwatch. Download our companion app to access all features.",
      menuOrder: "0",
      enableReviews: true,
  
      relatedProducts: ["1", "8", "11"],
      upsells: ["2"],
      crossSells: ["4", "10"],
  
      images: [
        "https://i.ibb.co.com/dGb1pww/smar-watch.jpg",
        "https://i.ibb.co.com/CBG11pM/speaker.jpg",
        "https://i.ibb.co.com/MGvVR6g/headphone.jpg",
      ],
    },

  ]
  
  