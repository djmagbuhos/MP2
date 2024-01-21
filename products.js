const products = [
  {
    item_id: 0,
    item_name: "Sony Playstation PS5",
    genre: "console",
    price: "30680.00",
    image_card: "img/products/ps5_card.jpg",
    image_prod1: "img/products/ps5_prod1.jpg",
    image_prod2: "img/products/ps5_prod2.jpg",
    item_desc:
      "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and a all-new generation of incredible PlayStation® games.",
  },
  {
    item_id: 1,
    item_name: "Sony Playstation PS4",
    genre: "console",
    price: "17580.00",
    image_card: "img/products/ps4_card.jpg",
    image_prod1: "img/products/ps4_prod1.jpg",
    image_prod2: "img/products/ps4_prod2.jpg",
    item_desc:
      "The lighter and slimmer PlayStation4 system has a 1TB hard drive for all of the greatest games, TV, music and more. Incredible Games You've come to the right place.",
  },
  {
    item_id: 2,
    item_name: "Keychron K4 Pro",
    genre: "keyboard",
    price: "5895.00",
    image_card: "img/products/keychron_k4_card.jpg",
    image_prod1: "img/products/keychron_k4_prod1.jpg",
    image_prod2: "img/products/keychron_k4_prod2.jpg",
    item_desc:
      "An excellent solution for multitasking. You can connect the K4 Pro with up to 3 devices wirelessly via its stable Broadcom Bluetooth 5.1 for seamless multitasking across your laptop, phone, and tablet. Switch among them swiftly, and it's fully compatible with both Mac and Windows.",
  },
  {
    item_id: 3,
    item_name: "Logitech PRO X 2",
    genre: "headset",
    price: "12790.00",
    image_card: "img/products/logitech_card.jpg",
    image_prod1: "img/products/logitech_prod1.jpg",
    image_prod2: "img/products/logitech_prod2.jpg",
    item_desc:
      "Designed with pros. Engineered to win. PRO X 2 LIGHTSPEED headset features pro-grade sound, LIGHTSPEED wireless, and supreme comfort for the highest levels of competition. Hear every footstep, action, and pin pull with the immersive soundscape enabled by graphene drivers.",
  },
  {
    item_id: 4,
    item_name: "DualSense Wireless Controller for PlayStation 5",
    genre: "controller",
    price: "4290.00",
    image_card: "img/products/controller_ps5_card.jpg",
    image_prod1: "img/products/controller_ps5_prod1.jpg",
    image_prod2: "img/products/controller_ps5_prod2.jpg",
    item_desc:
      "Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design.",
  },
  {
    item_id: 5,
    item_name: "PlayStation VR2",
    genre: "console",
    price: "34790.00",
    image_card: "img/products/ps_vr_card.jpg",
    image_prod1: "img/products/ps_vr_prod1.jpg",
    image_prod2: "img/products/ps_vr_prod2.jpg",
    item_desc:
      "PlayStation VR2 takes VR gaming to a whole new level, enabling a greater sense of presence and allowing players to escape into game worlds like never before. With the headset on and controllers in hand, players will feel a heightened range of sensations unlike any other.",
  },
  {
    item_id: 6,
    item_name: "Thrustmaster T248",
    genre: "arcade",
    price: "20995.00",
    image_card: "img/products/t248_card.jpg",
    image_prod1: "img/products/t248_prod1.jpg",
    image_prod2: "img/products/t248_prod2.jpg",
    item_desc:
      "T248 has been designed for all gamers looking for performance and immersion — including those keen to free themselves from their keyboard, mouse or gamepad, and users who want to take their racing to the next level after having started out with a wheel aimed at beginners. This brand-new racing wheel is officially licensed for PlayStation 5 and PlayStation 4, and is compatible with PC.",
  },
  {
    item_id: 7,
    item_name: "Razer Kitsune All-Button Optical Arcade",
    genre: "arcade",
    price: "18995.00",
    image_card: "img/products/all_button_card.jpg",
    image_prod1: "img/products/all_button_prod1.jpg",
    image_prod2: "img/products/all_button_prod2.jpg",
    item_desc:
      "Embrace a new fighting game meta with the Razer Kitsune—an all-button optical arcade controller that surpasses traditional fight sticks. With a precise quad movement button layout and lightning-fast optical switches, eliminate input errors from your game with the perfect competitive fighting companion for PS5™ and PC.",
  },
  {
    item_id: 8,
    item_name: "Hori Dual Charger for DualSense Wireless Controller",
    genre: "controller",
    price: "1195.00",
    image_card: "img/products/charger_card.jpg",
    image_prod1: "img/products/charger_prod1.jpg",
    image_prod2: "img/products/charger_prod2.jpeg",
    item_desc:
      "Don't let dead batteries hold you back! Simultaneously charge two controllers with the Hori dual charger for dual sense wireless Controller. Easily charge controllers by simply placing them on the charger! Know the charging status of a Controller with a glance. Built-in LEDs indicate charging with red and a charge completed with green. The charger connects to the Console via USB. Compatible with dual sense wireless Controllers. ",
  },
  {
    item_id: 9,
    item_name: "Skull & Co Phantom Rack",
    genre: "accessory",
    price: "795.00",
    image_card: "img/products/rack_card.jpg",
    image_prod1: "img/products/rack_prod1.jpg",
    image_prod2: "img/products/rack_prod2.jpg",
    item_desc:
      "Minimum presence, Maximum showcase - The Phantom Rack is made of transparent plastic which best displays your gaming equipment Modular Design - fits up to 6 Phantom Stands - create your own combination. (Phantom Stand purchased separately) Transparent thumb Screw - easy to assemble Designed for hardcore gamers wanting sleek table setup",
  },
  {
    item_id: 10,
    item_name: "Floating Grip Wall Mount for PlayStation",
    genre: "accessory",
    price: "1295.00",
    image_card: "img/products/wall_mount_card.jpg",
    image_prod1: "img/products/wall_mount_prod1.jpg",
    image_prod2: "img/products/wall_mount_prod2.jpg",
    item_desc:
      "DISPLAY YOUR CONSOLE ON THE WALL next to your TV or hide it behind your TV screen. Either way you get to save a lot of space on your counter and you can avoid having wires looking messy by placing them behind the TV.",
  },
  {
    item_id: 11,
    item_name: "Sony PlayStation 5 Access Controller",
    genre: "controller",
    price: "5090.00",
    image_card: "img/products/access_card.webp",
    image_prod1: "img/products/access_prod1.webp",
    image_prod2: "img/products/access_prod2.webp",
    item_desc:
      "Adaptable play styles Swappable button and stick caps Configure the Access controller's button layout to suit your range of mobility and switch between the included stick caps to find the shape and texture that works best for you.",
  },
  {
    item_id: 12,
    item_name: "DualShock4 Wireless Controller Cushion",
    genre: "merchandise",
    price: "995.00",
    image_card: "img/products/cushion_card.jpg",
    image_prod1: "img/products/cushion_prod1.jpg",
    image_prod2: "img/products/cushion_prod2.jpg",
    item_desc:
      "Official Licensed Product Material: 100% Polyester Size: approx. 624mm x 398mm x 200mm Made in Taiwan Pillowcase is not removable. Actual product may differ from photos.",
  },
  {
    item_id: 13,
    item_name: "SteelSeries Arena 7 Illuminated 2.1",
    genre: "speakers",
    price: "17000.00",
    image_card: "img/products/speakers_card.jpg",
    image_prod1: "img/products/speakers_prod1.jpg",
    image_prod2: "img/products/speakers_prod2.jpg",
    item_desc:
      "Robust and precise soundscape with a two-way speaker design, featuring organic fiber woofers and silk dome tweeters Illuminated speakers with 16.8 million RGB colors that react to the onscreen action and music Deep, powerful bass emitted from a 6.5 subwoofer for impactful audio Easily connect to PC, PlayStation, and Mac and more with USB, Bluetooth, optical, or 3.5mm Aux, and wired headset.",
  },
  {
    item_id: 14,
    item_name: "Hori Tactical Assault Commander TAC Mechanical Keypad",
    genre: "keyboard",
    price: "4995.00",
    image_card: "img/products/keypad_card.jpg",
    image_prod1: "img/products/keypad_prod1.jpg",
    image_prod2: "img/products/keypad_prod2.jpg",
    item_desc:
      "The Tactical Assault Commander (TAC) Mechanical Keypad for PlayStation®5, PlayStation®4, and PC will take your game to a whole new level! Designed to give you a PC-style gameplay experience on PlayStation®5 and PlayStation®4 for titles with native keyboard & mouse compatibility. (Please see compatible software list.",
  },
  {
    item_id: 15,
    item_name: "Hori Wired Gaming Neckset",
    genre: "headset",
    price: "5995.00",
    image_card: "img/products/neckset_card.jpg",
    image_prod1: "img/products/neckset_prod1.jpg",
    image_prod2: "img/products/neckset_prod2.jpg",
    item_desc:
      "HORI introduces a revolutionary gaming audio solution- the 3D Surround Gaming Neckset Designed for PlayStation 5. The 3D Surround Gaming Neckset Designed for PlayStation 5 is a wearable neck set that comfortably rests on the shoulders during gameplay.",
  },
  {
    item_id: 16,
    item_name: "Paladone Spiderman Icon Light",
    genre: "merchandise",
    price: "1095.00",
    image_card: "img/products/paladone_card.jpg",
    image_prod1: "img/products/paladone_prod1.jpg",
    image_prod2: "img/products/paladone_prod2.jpg",
    item_desc:
      "Get your hands on this fun Spider-Man Icon Light and have your favourite superhero by your bedside at all times to keep you safe and sound. he Spider-Man Icon light is a great gift for comic book fans and lovers of the Marvel Avengers films alike.",
  },
];

module.exports = { products };
