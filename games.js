const games = [
  {
    item_id: 0,
    item_name: "God of War",
    platform: "PS4",
    genre: "action",
    price: "1199.99",
    image_card: "img/games/god_of_war_card.webp",
    image_main: "img/games/god_of_war_main.webp",
    item_desc:
      "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. This staggering reimagining of God of War combines all the hallmarks of the iconic series brutal combat, epic boss fights, and breathtaking scale and fuses them with a powerful and moving narrative that re-establishes Kratos' world. ",
  },
  {
    item_id: 1,
    item_name: "Grand Theft Auto V",
    platform: "PS5",
    genre: "action",
    price: "399.99",
    image_card: "img/games/gta_v_card.webp",
    image_main: "img/games/gta_v_main.webp",
    item_desc:
      "Experience blockbuster hits Grand Theft Auto V and GTA Online - now upgraded for PlayStation 5 with stunning visuals, faster loading, adaptive triggers, haptic feedback, Tempest 3D audio and more, plus exclusive content for GTA Online players.",
  },
  {
    item_id: 2,
    item_name: "EA Sports FC 24",
    platform: "PS4, PS5",
    genre: "sports",
    price: "4299.99",
    image_card: "img/games/fc_24_card.webp",
    image_main: "img/games/fc_24_main.webp",
    item_desc:
      "EA SPORTS FC™ 24 marks the beginning of the future of football. Built on innovation and authenticity, feel closer to the game in the most true-to-football experience yet with the best players from the biggest clubs, leagues and competitions around the globe. With more than 19,000 fully licensed players, 700 teams and 30 leagues including the UEFA Men's and Women's Champions League, EA SPORTS FC 24 brings unrivalled authenticity to the pitch.",
  },
  {
    item_id: 3,
    item_name: "Baldur's Gate 3",
    platform: "PS5",
    genre: "role-Playing",
    price: "4199.99",
    image_card: "img/games/baldur_3_card.webp",
    image_main: "img/games/baldur_3_main.webp",
    item_desc:
      "Gather your party and embark on an epic campaign in this next-generation Dungeons & Dragons RPG from the makers of Divinity: Original Sin II. Join forces with a cast of complex characters as you loot, battle and romance your way through the Forgotten Realms and beyond. Roll for initiative and leverage both advantage and disadvantage with fluid, tactical combat. The fate of the Forgotten Realms is in your hands.",
  },
  {
    item_id: 4,
    item_name: "Marvel's Spider-Man 2",
    platform: "PS5",
    genre: "action",
    price: "4399.99",
    image_card: "img/games/spiderman_2_card.webp",
    image_main: "img/games/spiderman_2_main.webp",
    item_desc:
      "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise for PS5. Swing, jump and utilize the new Web Wings to travel across Marvel's New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
  },
  {
    item_id: 5,
    item_name: "The Last of Us Part I",
    platform: "PS5",
    genre: "action",
    price: "4399.99",
    image_card: "img/games/TLOU_1_card.webp",
    image_main: "img/games/TLOU_1_main.webp",
    item_desc:
      "In a ravaged civilisation, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey. Includes the complete The Last of Us single-player story and celebrated prequel chapter, Left Behind, which explores the events that changed the lives of Ellie and her best friend Riley forever.",
  },
  {
    item_id: 6,
    item_name: "Cyberpunk 2077",
    platform: "PS5",
    genre: "role-playing",
    price: "3499.99",
    image_card: "img/games/cyberpunk_card.webp",
    image_main: "img/games/cyberpunk_main.webp",
    item_desc:
      "Cyberpunk 2077 is an open-world action-adventure from the creators of The Witcher 3: Wild Hunt, CD Projekt Red. Set in Night City, a megalopolis obsessed with power, glamour and body modification, you play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. Upgraded with next-gen in mind and featuring free additional content, customise your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
  },
  {
    item_id: 7,
    item_name: "Red Dead Redemption 2",
    platform: "PS4",
    genre: "adventure",
    price: "5299.99",
    image_card: "img/games/red_dead_2_card.jpg",
    image_main: "img/games/red_dead_2_main.webp",
    item_desc:
      "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
  },
  {
    item_id: 8,
    item_name: "Sekiro: Shadows Die Twice",
    platform: "PS4",
    genre: "adventure",
    price: "3499.99",
    image_card: "img/games/sekiro_card.jpg",
    image_main: "img/games/sekiro_main.webp",
    item_desc:
      "In Sekiro: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.",
  },
  {
    item_id: 9,
    item_name: "Fallout 4",
    platform: "PS4",
    genre: "role-playing",
    price: "1299.99",
    image_card: "img/games/fallout_4_card.webp",
    image_main: "img/games/fallout_4_main2.jpg",
    item_desc:
      "Bethesda Game Studios, the award-winning creators of Fallout 3 and Skyrim, welcomes you to the world of Fallout 4 . Winner of more than 50 Game of the Year awards, including top honors at the 2016 D.I.C.E. Awards. Fallout 4 is the studio's most ambitious game ever and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
  },
  {
    item_id: 10,
    item_name: "Ghost of Tsushima",
    platform: "PS4, PS5",
    genre: "role-playing",
    price: "2299.99",
    image_card: "img/games/tsushima_card.jpg",
    image_main: "img/games/tsushima_main.webp",
    item_desc:
      "Uncover the hidden wonders of Tsushima in this open-world action adventure from Sucker Punch Productions and PlayStation Studios, available for PS5 and PS4. Forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies and explore a new story on Iki Island.",
  },
  {
    item_id: 11,
    item_name: "DOOM Eternal",
    platform: "PS4, PS5",
    genre: "shooter",
    price: "1299.99",
    image_card: "img/games/doom_eternal_card.webp",
    image_main: "img/games/doom_eternal_main.jpg",
    item_desc:
      "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you. Experience the ultimate combination of speed and power in DOOM Eternal - the next leap in push-forward, first-person combat.",
  },
  {
    item_id: 12,
    item_name: "Minecraft",
    platform: "PS4",
    genre: "adventure",
    price: "1799.99",
    image_card: "img/games/minecraft_card.webp",
    image_main: "img/games/minecraft_main.webp",
    item_desc:
      "In Minecraft, your adventure starts with your imagination. Build anything you can imagine with unlimited resources in Creative mode, or go on grand expeditions in Survival, journeying across mysterious lands and into the depths of your own infinite worlds. Will you hide from monsters or craft tools, armour and weapons to fight back? No need to go alone!",
  },
  {
    item_id: 13,
    item_name: "STAR WARS Jedi: Survivor",
    platform: "PS5",
    genre: "action",
    price: "5699.99",
    image_card: "img/games/jedi_survivor_card.webp",
    image_main: "img/games/jedi_survivor_main.webp",
    item_desc:
      "STAR WARS Jedi: Survivor™ picks up five years after the events of STAR WARS Jedi: Fallen Order™. Cal must stay one step ahead of the Empire's constant pursuit as he continues to feel the weight of being one of the last remaining Jedi in the galaxy. Developed by the veteran team at Respawn Entertainment, Jedi: Survivor will expand upon iconic STAR WARS stories, worlds, and characters, and thrilling combat first experienced in Jedi: Fallen Order.",
  },
  {
    item_id: 14,
    item_name: "Hades",
    platform: "PS4, PS5",
    genre: "action",
    price: "1499.99",
    image_card: "img/games/hades_card.webp",
    image_main: "img/games/hades_main.webp",
    item_desc:
      "Wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unravelling more of the story with each unique escape attempt. Hades combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre.",
  },
  {
    item_id: 15,
    item_name: "NieR:Replicant",
    platform: "PS4",
    genre: "role-playing",
    price: "899.99",
    image_card: "img/games/nier_card.webp",
    image_main: "img/games/nier_main.webp",
    item_desc:
      "The story sets in a world where humanity has been driven from the Earth by mechanical beings from another world in a distant future. Players will take on the role of 2B who belongs to the new unit of android infantry known as YoRHa in a final effort to take back the planet. This is not your ordinary entertainment. It is a fresh take on the action role-playing game with a smooth 60fps open world that gracefully blends with a captivating story.",
  },
  {
    item_id: 16,
    item_name: "Devil May Cry 5",
    platform: "PS5",
    genre: "action",
    price: "1799.99",
    image_card: "img/games/dmc_5_card.jpg",
    image_main: "img/games/dmc_5_main.jpg",
    item_desc:
      "A brand new entry in the legendary action series, Devil May Cry 5 brings together its signature blend of high-octane action and otherworldly original characters with the latest Capcom gaming technology to deliver a graphically groundbreaking action-adventure masterpiece.",
  },
  {
    item_id: 17,
    item_name: "Gran Turismo 7",
    platform: "PS4, PS5",
    genre: "racing",
    price: "2999.99",
    image_card: "img/games/gran_turismo_card.webp",
    image_main: "img/games/gran_turismo_main.webp",
    item_desc:
      "Whether you're a competitive or casual racer, collector, tuner, livery designer or photographer find your line with a staggering collection of game modes including fan-favourites like GT Campaign, Arcade and Driving School. With the reintroduction of the legendary GT Simulation Mode, buy, tune and race your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode.",
  },
  {
    item_id: 18,
    item_name: "NBA 2K24",
    platform: "PS5",
    genre: "sports",
    price: "3499.99",
    image_card: "img/games/nba_2k24_card.webp",
    image_main: "img/games/nba_2k24_main.webp",
    item_desc:
      "Play as your favourite NBA and WNBA teams in NBA 2K24, with fully up-to-date rosters and legendary historic teams. Grab your squad and enjoy pure, authentic hoops action across a variety of modes, including limitless personalised MyPLAYER options in MyCAREER. Collect an impressive array of legends and build your perfect line-up in MyTEAM and more, including new MAMBA MOMENTS™ challenges.",
  },
  {
    item_id: 19,
    item_name: "Hogwarts Legacy",
    platform: "PS4, PS5",
    genre: "adventure",
    price: "3499.99",
    image_card: "img/games/hogwarts_card.webp",
    image_main: "img/games/hogwarts_main.webp",
    item_desc:
      "Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be. Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Discover the feeling of living at Hogwarts as you make allies, battle Dark Wizards and ultimately decide the fate of the wizarding world.",
  },
  {
    item_id: 20,
    item_name: "Call of Duty: Modern Warfare II",
    platform: "PS4, PS5",
    genre: "action",
    price: "4099.99",
    image_card: "img/games/cod_mwII_card.jpg",
    image_main: "img/games/cod_mwII_main.webp",
    item_desc:
      "Leverage new weapons, vehicles, and cutting-edge equipment to take on enemies. Gear up and take the fight offshore to siege enemies underwater, breach a highly fortified enemy base, infil along the canals and liberate much-needed allies at a black site hidden within the mountains. Infinity Ward presents heart-pounding next-gen, state-of-the-art gameplay. Fight alongside friends in a truly immersive experience with stunningly realistic sound, lighting, and graphics that produce the most advanced Call of Duty in history.",
  },
  {
    item_id: 21,
    item_name: "Alan Wake 2",
    platform: "PS5",
    genre: "horror",
    price: "3499.99",
    image_card: "img/games/alan_wake_2_card.webp",
    image_main: "img/games/alan_wake_2_main.jpg",
    item_desc:
      "Saga Anderson is a gifted FBI agent called to the small Pacific Northwest town of Bright Falls to investigate a series of ritualistic murders. Alan Wake is a writer who has spent years trapped in the Dark Place, a terrifying alternate reality that can be reshaped by his words. Although they have never met, the two are connected across separate realities, their actions able to change their respective worlds. When the events depicted in a horror story cause Bright Falls to become engulfed in a corrupting, supernatural darkness, both Anderson and Wake must use the power of light to survive and to protect the ones they love. In a reality-bending world of victims and monsters, can they become the heroes of this story?",
  },
  {
    item_id: 22,
    item_name: "NHL 24",
    platform: "PS4, PS5",
    genre: "sports",
    price: "4099.99",
    image_card: "img/games/nhl_24_card.webp",
    image_main: "img/games/nhl_24_main.webp",
    item_desc:
      "Feel the intensity of hockey, as EA Sports NHL 24 brings you closer to authentic on-ice action with a wealth of new game features and upgraded modes. Build your NHL 24 Ultimate Team and recreate moments from classic matches and recent highlights in HUT Moments, and explore the expanded World of Chel, which offers cross-play, a redesigned EASHL and much more.",
  },
  {
    item_id: 23,
    item_name: "Street Fighter 6",
    platform: "PS4, PS5",
    genre: "fighting",
    price: "3499.99",
    image_card: "img/games/sf_6_card.jpg",
    image_main: "img/games/sf_6_main.webp",
    item_desc:
      "Street Fighter 6 is the next evolution of the Street Fighter series, and features innovative new gameplay features, plus enhanced visuals for every aspect of the game. Powered by Capcom's proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes - Fighting Ground, World Tour and Battle Hub.",
  },
  {
    item_id: 24,
    item_name: "UFC 5",
    platform: "PS5",
    genre: "fighting",
    price: "2899.99",
    image_card: "img/games/ufc_5_card.webp",
    image_main: "img/games/ufc_5_main.webp",
    item_desc:
      "What makes an MMA fight? It's the stakes, technique, drama and pure reality of the moment. UFC 5 captures that in more authentic detail than ever before, from next-generation graphics upgrades that give gameplay animations new life, damage systems that marry the brutality and strategy of the fight game, gameplay updates that make the action feel even more fluid and realistic and much more.",
  },
  {
    item_id: 25,
    item_name: "Tekken 8",
    platform: "PS5",
    genre: "fighting",
    price: "4099.99",
    image_card: "img/games/tekken_8_card.webp",
    image_main: "img/games/tekken_8_main.webp",
    item_desc:
      "Ground-breaking new features, breathtakingly detailed character models and dramatic environments make this one of the most visually stunning and immersive titles in the genre yet. Tekken 8 picks up after the gruesome battle that ended in Heihachi Mishima's defeat in Tekken 7, focusing on a new rivalry, pitting father against son as Jin Kazama stands in defiance against Kazuya Mishima in a city-shattering face-to-face showdown.",
  },
  {
    item_id: 26,
    item_name: "Bloodborne",
    platform: "PS4",
    genre: "role-playing",
    price: "1299.99",
    image_card: "img/games/bloodborne_card.jpg",
    image_main: "img/games/bloodborne_main.jpg",
    item_desc:
      "Hunt your nightmares, lone traveler. A cursed town. A deadly mystery that swallows everything it touches. Face your fears as you enter the decaying city of Yharnam, a forsaken place ravaged by a terrible, all-consuming illness. Scour its darkest shadows, fight for your life with blades and guns and discover secrets that will make your blood run cold but just might save your skin...",
  },
  {
    item_id: 27,
    item_name: "Stray",
    platform: "PS4, PS5",
    genre: "adventure",
    price: "1799.99",
    image_card: "img/games/stray_card.webp",
    image_main: "img/games/stray_main.webp",
    item_desc:
      "Stray is a third-person cat adventure game set amidst the detailed neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. See the world through the eyes of a stray and interact with the environment in playful ways. Stray is developed by BlueTwelve Studio, a small team from south of France mostly made of cats and a handful of humans.",
  },
  {
    item_id: 28,
    item_name: "It Takes Two",
    platform: "PS4, PS5",
    genre: "shooter",
    price: "1799.99",
    image_card: "img/games/it_takes_2_card.webp",
    image_main: "img/games/it_takes_2_main.webp",
    item_desc:
      "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass*1 and work together across a huge variety of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship.",
  },
  {
    item_id: 29,
    item_name: "VALKYRIE ELYSIUM",
    platform: "PS4, PS5",
    genre: "role-playing",
    price: "3499.99",
    image_card: "img/games/valkyrie_card.webp",
    image_main: "img/games/valkyrie_main.webp",
    item_desc:
      "Valkyrie Elysium is the latest title in the 'Valkyrie' series that depicts the 'death of humankind' and 'the existence of gods' with a unique worldview based on Norse mythology. As the first action-RPG of the series, Valkyrie Elysium retains the familiar special attacks and combo system while taking it to the next level with a new three-dimensional, fast paced battle system.",
  },
  {
    item_id: 30,
    item_name: "OlliOlli World",
    platform: "PS4, PS5",
    genre: "arcade",
    price: "1799.99",
    image_card: "img/games/olli_olli_card.webp",
    image_main: "img/games/olli_olli_main.webp",
    item_desc:
      "OlliOlli World is a bold new skateboarding action-platformer that's bursting with personality. Traverse a delightful and weird world as you take on missions, challenges and make new friends along the way. Experience the accessibility, depth and player freedom as you dive into the signature flow state gameplay of OlliOlli World.",
  },
  {
    item_id: 31,
    item_name: "Blood & Truth",
    platform: "PS4",
    genre: "vr",
    price: "1599.99",
    image_card: "img/games/blood_truth_card.jpg",
    image_main: "img/games/blood_truth_main.webp",
    item_desc:
      "Enter London's lethal melting pot of high-end glamour and gritty underworld crime. Fight for your family's lives. Put on your PlayStation VR headset and become elite Special Forces soldier Ryan Marks in a hard-hitting shooter with all the explosive action and drama of a Hollywood blockbuster inspired by PlayStation VR Worlds' massively popular The London Heist experience.",
  },
  {
    item_id: 32,
    item_name: "Astro Bot Rescue Mission",
    platform: "PS4",
    genre: "vr",
    price: "999.99",
    image_card: "img/games/astro_bot_card.webp",
    image_main: "img/games/astro_bot_main.webp",
    item_desc:
      "Get a whole new perspective on platform games, thanks to PlayStation VR, in this daring rescue operation. Take control of Astro in a massive adventure to rescue his crew, where the PS VR headset puts you right in the thick of the action. Judge every jump with accuracy and be curious there are lots of secrets to discover in your daring quest. Don't forget to lean your body to peer around corners and create paths for your little robotic buddy to climb.",
  },
  {
    item_id: 33,
    item_name: "Avatar: Frontiers of Pandora",
    platform: "PS5",
    genre: "adventure",
    price: "4199.99",
    image_card: "img/games/avatar_card.webp",
    image_main: "img/games/avatar_main.webp",
    item_desc:
      "Avatar: Frontiers of Pandora™ is a first-person, action-adventure game set in the open world of the never-before-seen Western Frontier of Pandora. Abducted by the human militaristic corporation known as the RDA, you, a Navi, were trained and moulded to serve their purpose. Fifteen years later, you are free, but find yourself a stranger in your birthplace. Reconnect with your lost heritage, discover what it truly means to be Na'vi, and join other clans to protect Pandora from the RDA.",
  },
  {
    item_id: 34,
    item_name: "Dead Island 2",
    platform: "PS4, PS5",
    genre: "action",
    price: "3499.99",
    image_card: "img/games/dead_island_2_card.webp",
    image_main: "img/games/dead_island_2_main.webp",
    item_desc:
      "Welcome to HELL-A. The City of Angels has been transformed into a hellish sprawl, its populace now mutated into disgusting zombies with an insatiable appetite for humans. In this extensive, visceral RPG experience you'll journey to iconic LA locations, taking on quests, meeting eccentric survivors and enjoying a joyously pulpy narrative along the way.",
  },
];

module.exports = { games };
