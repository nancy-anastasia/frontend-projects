const products = [
  {
    name: "EchoBeat Wireless Earbuds",
    imageUrl:
      "https://images.unsplash.com/photo-1598371611276-1bc503a270a4?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "EchoBeat Wireless Earbuds deliver high-fidelity audio with deep bass and crystal-clear treble. The ergonomic design ensures a comfortable fit for extended listening sessions. Featuring advanced noise-cancellation technology, these earbuds are perfect for commuting, working out, or relaxing at home. With a battery life of up to 20 hours and a sleek, compact charging case, EchoBeat is your ultimate companion for on-the-go music enjoyment.",
    price: 79.99,
    countInStock: 120,
  },
  {
    name: "TimeWave Smart Watch",
    imageUrl:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stay connected and track your fitness goals with the TimeWave Smart Watch. Featuring a vibrant touch display, this smartwatch offers notifications for calls, texts, and apps. It also includes a heart rate monitor, GPS tracking, and multiple sports modes to help you stay on top of your health and fitness. Water-resistant and with a battery life of up to 10 days, the TimeWave Smart Watch is designed to keep up with your active lifestyle.",
    price: 149.99,
    countInStock: 0,
  },
  {
    name: "SonicBlast Bluetooth Speaker",
    imageUrl:
      "https://images.unsplash.com/photo-1598034989845-48532781987e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience powerful, immersive sound with the SonicBlast Bluetooth Speaker. Its compact design belies its impressive audio performance, with deep bass and crisp highs. The speaker is water-resistant, making it perfect for outdoor adventures, pool parties, or beach trips. With a 24-hour battery life and a wireless range of up to 100 feet, the SonicBlast is built to deliver music wherever you go.",
    price: 59.99,
    countInStock: 200,
  },
  {
    name: "UrbanPack Laptop Backpack",
    imageUrl:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The UrbanPack Laptop Backpack is designed for the modern professional. Made from durable, water-resistant materials, it features a spacious main compartment with a padded laptop sleeve that fits up to 15.6-inch laptops. Additional pockets provide organized storage for accessories, documents, and personal items. Ergonomically designed shoulder straps and a breathable back panel ensure comfort during long commutes or travels.",
    price: 89.99,
    countInStock: 150,
  },
  {
    name: "FitPulse Fitness Tracker",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Keep track of your daily activity and health metrics with the FitPulse Fitness Tracker. It monitors your steps, calories burned, sleep quality, and heart rate, providing comprehensive insights into your fitness journey. The sleek, lightweight design makes it comfortable to wear all day, while the user-friendly app syncs seamlessly with your smartphone for real-time data analysis. With a battery life of up to 7 days, FitPulse helps you stay motivated and achieve your wellness goals.",
    price: 49.99,
    countInStock: 300,
  },
  {
    name: "HyperGlide Gaming Mouse",
    imageUrl:
      "https://images.unsplash.com/photo-1632160872021-7e65d76ad849?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elevate your gaming experience with the HyperGlide Gaming Mouse. Featuring a high-precision optical sensor with up to 16,000 DPI, customizable RGB lighting, and programmable buttons, this mouse offers superior performance and personalization. Its ergonomic design ensures comfort during extended gaming sessions, and the durable build quality is designed to withstand intense gameplay.",
    price: 59.99,
    countInStock: 85,
  },
  {
    name: "BrewMaster Coffee Maker",
    imageUrl:
      "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Start your day with a perfect cup of coffee using the BrewMaster Coffee Maker. This versatile machine offers multiple brewing options, including single-serve and full pot, and features a programmable timer for your convenience. The built-in grinder ensures fresh grounds every time, and the sleek stainless steel design adds a touch of elegance to any kitchen.",
    price: 129.99,
    countInStock: 60,
  },
  {
    name: "ZenFlex Yoga Mat",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667250748777-a4421462ca71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Enhance your yoga practice with the ZenFlex Yoga Mat. Made from eco-friendly, non-toxic materials, this mat provides excellent cushioning and support for your joints. The non-slip surface ensures stability during various poses, while the lightweight and portable design makes it easy to carry to your yoga studio or use at home. Available in multiple colors and patterns.",
    price: 39.99,
    countInStock: 220,
  },
  {
    name: "SnapShot Digital Camera",
    imageUrl:
      "https://images.unsplash.com/photo-1484204561501-66a004fa8cac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Capture stunning photos and videos with the SnapShot Digital Camera. Featuring a 24.1-megapixel sensor, 4K video recording, and a wide range of manual controls, this camera is perfect for both beginners and advanced photographers. The compact and lightweight design makes it easy to take on your adventures, while the built-in Wi-Fi allows for quick and easy sharing of your favorite moments.",
    price: 499.99,
    countInStock: 45,
  },
  {
    name: "QuickBoil Electric Kettle",
    imageUrl:
      "https://images.unsplash.com/photo-1643114786355-ff9e52736eab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Boil water quickly and efficiently with the QuickBoil Electric Kettle. This sleek, stainless steel kettle features a 1.7-liter capacity, automatic shut-off, and boil-dry protection for safety. The 360-degree swivel base and cordless design make it easy to use and pour, while the built-in filter ensures clean and clear water for your tea, coffee, or instant meals.",
    price: 49.99,
    countInStock: 130,
  },
  {
    name: "ChargeUp Portable Power Bank",
    imageUrl:
      "https://images.unsplash.com/photo-1706275787561-09d1a5f7b277?q=80&w=2637&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stay powered up on the go with the ChargeUp Portable Power Bank. With a massive 20,000mAh capacity, this power bank can charge your smartphone multiple times, as well as tablets and other USB devices. It features dual USB ports for simultaneous charging and a sleek, lightweight design that fits easily in your bag or pocket. The built-in LED display shows the remaining battery life, ensuring you never run out of power unexpectedly.",
    price: 39.99,
    countInStock: 180,
  },
  {
    name: "Noise-Cancelling Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1706290047883-64294c7e11c3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in your music with the SilentWave Noise-Cancelling Headphones. These over-ear headphones feature advanced active noise cancellation technology that blocks out background noise, allowing you to focus on your audio. The plush ear cushions and adjustable headband provide long-lasting comfort, while the 30-hour battery life ensures you can enjoy uninterrupted listening. With crisp, clear sound and deep bass, SilentWave delivers a premium audio experience.",
    price: 199.99,
    countInStock: 95,
  },
];

module.exports = products;
