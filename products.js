const products = [
  {
    item_id: 0,
    item_name: "Sony Playstation PS5",
    genre: "Console",
    price: "₱30,680.00",
    image_card: "img/ps5_card.jpg",
    image_prod1: "img/ps5_prod1.jpg",
    image_prod2: "img/ps5_prod2.jpg",
    item_desc:
      "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and a all-new generation of incredible PlayStation® games.",
  },
  {
    item_id: 1,
    item_name: "Sony Playstation PS4",
    genre: "Console",
    price: "₱17,580.00",
    image_card: "img/ps4_card.jpg",
    image_prod1: "img/ps4_prod1.jpg",
    image_prod2: "img/ps4_prod2.jpg",
    item_desc:
      "The lighter and slimmer PlayStation4 system has a 1TB hard drive for all of the greatest games, TV, music and more. Incredible Games You've come to the right place.",
  },
  {
    item_id: 2,
    item_name: "Keychron K4 Pro",
    genre: "Keyboard",
    price: "₱5,895.00",
    image_card: "img/keychron_k4_card.jpg",
    image_prod1: "img/keychron_k4_prod1.jpg",
    image_prod2: "img/keychron_k4_prod2.jpg",
    item_desc:
      "An excellent solution for multitasking. You can connect the K4 Pro with up to 3 devices wirelessly via its stable Broadcom Bluetooth 5.1 for seamless multitasking across your laptop, phone, and tablet. Switch among them swiftly, and it's fully compatible with both Mac and Windows.",
  },
  {
    item_id: 3,
    item_name: "Logitech PRO X 2",
    genre: "Headset",
    price: "₱12,790.00",
    image_card: "img/logitech_card.jpg",
    image_prod1: "img/logitech_prod1.jpg",
    image_prod2: "img/logitech_prod2.jpg",
    item_desc:
      "Designed with pros. Engineered to win. PRO X 2 LIGHTSPEED headset features pro-grade sound, LIGHTSPEED wireless, and supreme comfort for the highest levels of competition. Hear every footstep, action, and pin pull with the immersive soundscape enabled by graphene drivers.",
  },
  {
    item_id: 3,
    item_name: "DualSense Wireless Controller for PlayStation 5",
    genre: "Controller",
    price: "₱4,290.00",
    image_card: "img/controller_ps5_card.jpg",
    image_prod1: "img/controller_ps5_prod1.jpg",
    image_prod2: "img/controller_ps5_prod2.jpg",
    item_desc:
      "Discover a deeper, highly immersive gaming experience* that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design.",
  },
  {
    item_id: 3,
    item_name: "PlayStation VR2",
    genre: "VR",
    price: "₱34,790.00",
    image_card: "img/ps_vr_card.jpg",
    image_prod1: "img/ps_vr_prod1.jpg",
    image_prod2: "img/ps_vr_prod2.jpg",
    item_desc:
      "PlayStation VR2 takes VR gaming to a whole new level, enabling a greater sense of presence and allowing players to escape into game worlds like never before. With the headset on and controllers in hand, players will feel a heightened range of sensations unlike any other.",
  },
  {
    item_id: 4,
    item_name: "Thrustmaster T248",
    genre: "Arcade",
    price: "₱20,995.00",
    image_card: "img/t248_card.jpg",
    image_prod1: "img/t248_prod1.jpg",
    image_prod2: "img/t248_prod2.jpg",
    item_desc:
      "T248 has been designed for all gamers looking for performance and immersion — including those keen to free themselves from their keyboard, mouse or gamepad, and users who want to take their racing to the next level after having started out with a wheel aimed at beginners. This brand-new racing wheel is officially licensed for PlayStation 5 and PlayStation 4, and is compatible with PC.",
  },
  {
    item_id: 5,
    item_name: "Razer Kitsune All-Button Optical Arcade",
    genre: "Arcade",
    price: "₱18,995.00",
    image_card: "img/all_button_card.jpg",
    image_prod1: "img/all_button_prod1.jpg",
    image_prod2: "img/all_button_prod2.jpg",
    item_desc:
      "Embrace a new fighting game meta with the Razer Kitsune—an all-button optical arcade controller that surpasses traditional fight sticks. With a precise quad movement button layout and lightning-fast optical switches, eliminate input errors from your game with the perfect competitive fighting companion for PS5™ and PC.",
  },
  {
    item_id: 6,
    item_name: "Hori Dual Charger for DualSense Wireless Controller",
    genre: "Controller",
    price: "₱1,195.00",
    image_card: "img/charger_card.jpg",
    image_prod1: "img/charger_prod1.jpg",
    image_prod2: "img/charger_prod2.jpg",
    item_desc:
      "Don't let dead batteries hold you back! Simultaneously charge two controllers with the Hori dual charger for dual sense wireless Controller. Easily charge controllers by simply placing them on the charger! Know the charging status of a Controller with a glance. Built-in LEDs indicate charging with red and a charge completed with green. The charger connects to the Console via USB. Compatible with dual sense wireless Controllers. ",
  },
  {
    item_id: 7,
    item_name: "Skull & Co Phantom Rack",
    genre: "Accessory",
    price: "₱795.00",
    image_card: "img/rack_card.jpg",
    image_prod1: "img/rack_prod1.jpg",
    image_prod2: "img/rack_prod2.jpg",
    item_desc:
      "Minimum presence, Maximum showcase - The Phantom Rack is made of transparent plastic which best displays your gaming equipment Modular Design - fits up to 6 Phantom Stands - create your own combination. (Phantom Stand purchased separately) Transparent thumb Screw - easy to assemble Designed for hardcore gamers wanting sleek table setup",
  },
  {
    item_id: 8,
    item_name: "Floating Grip Wall Mount for PlayStation",
    genre: "Accessory",
    price: "₱1,295.00",
    image_card: "img/wall_mount_card.jpg",
    image_prod1: "img/wall_mount_prod1.jpg",
    image_prod2: "img/wall_mount_prod2.jpg",
    item_desc:
      "DISPLAY YOUR CONSOLE ON THE WALL next to your TV or hide it behind your TV screen. Either way you get to save a lot of space on your counter and you can avoid having wires looking messy by placing them behind the TV.",
  },
  {
    item_id: 9,
    item_name: "Sony PlayStation 5 Access Controller",
    genre: "Controller",
    price: "₱5,090.00",
    image_card: "img/access_card.webp",
    image_prod1: "img/access_prod1.webp",
    image_prod2: "img/access_prod2.webp",
    item_desc:
      "Adaptable play styles Swappable button and stick caps Configure the Access controller's button layout to suit your range of mobility and switch between the included stick caps to find the shape and texture that works best for you.",
  },
  {
    item_id: 10,
    item_name: "DualShock4 Wireless Controller Cushion",
    genre: "Merchandise",
    price: "₱995.00",
    image_card: "img/cushion_card.webp",
    image_prod1: "img/cushion_prod1.webp",
    image_prod2: "img/cushion_prod2.webp",
    item_desc:
      "Official Licensed Product Material: 100% Polyester Size: approx. 624mm x 398mm x 200mm Made in Taiwan Pillowcase is not removable. Actual product may differ from photos.",
  },
];

module.exports = { products };
