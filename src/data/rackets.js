export const RACKETS = [
  {
    id: 'ace_hearts',
    card: 'Ace of Hearts',
    title: 'NARCO-DISTRIBUTION',
    description: 'Chem-elixirs and narco-distillations flow like rivers through the shadows of Necromunda.',
    linkedRackets: ['Out-Hive Smuggling Routes', 'Ghast Prospecting'],
    racketBoons: {
      income: 'The gang earns D6x10 credits when they collect Income.',
      special: 'Whilst it controls this Racket, the gang treats Chem-synth, Medicae Kit, Stimm-slug Stash, and any weapon with the Gas or Toxin trait as Common.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'two_hearts',
    card: 'Two of Hearts',
    title: 'OUT-HIVE SMUGGLING ROUTES',
    description: 'Everything that passes in and out of the hive is checked, authorised and stamped by official process... except when it is not!',
    linkedRackets: ['Ghast Prospecting', 'The Cold Trade'],
    racketBoons: {
      income: 'The gang earns D6x10 credits when they collect Income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang earns 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'three_hearts',
    card: 'Three of Hearts',
    title: 'GHAST PROSPECTING',
    description: 'Ghast is the single most precious substance on Necromunda, the secret source of Lord Helmawr\'s wealth.',
    linkedRackets: ['Out-Hive Smuggling Routes', 'Caravan Route Control'],
    racketBoons: {
      equipment: 'Whilst it controls this Racket, three fighters in the gang gain a dose of Ghast each battle for free.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang earns 4D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'four_hearts',
    card: 'Four of Hearts',
    title: 'THE COLD TRADE',
    description: 'The Cold Trade is the traffic in forbidden devices, bought from off-world. Some surface in the depths of the underhive, and command a grand price to those who value them.',
    linkedRackets: ['Out-Hive Smuggling Routes', 'Spire Patronage'],
    racketBoons: {
      equipment: 'Whilst it controls this Racket, one member of the gang may have a single item from the Xenos Weapons section of the Black Market for free.',
      special: 'Whilst it controls this Racket, the gang treats items from the Xenos Weapons section of the Black Market as Common.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'five_hearts',
    card: 'Five of Hearts',
    title: 'LIFE COIN EXCHANGE',
    description: 'Anyone can be killed if you are willing to pay the coin.',
    linkedRackets: ['Whisper Brokers', 'Corpse Guild Bond'],
    racketBoons: {
      recruit: 'Whilst it controls this Racket, the gang may recruit two Hive Scum or one Bounty Hunter Hired Gun for free, including their equipment, prior to every battle.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains D6x10 credits when they collect Income.',
      special: 'If the gang also controls both of the Linked Rackets, all of its members gain the Fearsome skill.'
    }
  },
  {
    id: 'six_hearts',
    card: 'Six of Hearts',
    title: 'XENOS BEAST TRAFFICKING',
    description: 'From spire menageries to underhive fighting pits, alien creatures are always in demand.',
    linkedRackets: ['Out-Hive Smuggling Routes', 'Blood Pits'],
    racketBoons: {
      equipment: 'Whilst it controls this Racket, the gang Leader may be equipped with either a Grapplehawk or a Gyrinx Cat from the Black Market free of charge.',
      income: 'Whilst it controls this Racket, the gang treats Grapplehawks and Gyrinx Cats from the Black Market as Common.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains D6x10 credits when they collect Income.',
      special: 'If the gang also controls both of the Linked Rackets, the gang earns 2D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'seven_hearts',
    card: 'Seven of Hearts',
    title: 'WHISPER BROKERS',
    description: 'More valuable than jewels and more elusive than clean water, knowledge is true power.',
    linkedRackets: ['Life Coin Exchange', 'Peddlers of Forbidden Lore'],
    racketBoons: {
      special: 'Whilst it controls this racket, the gang may choose an additional D3 Tactics cards in the pre-battle sequence.'
    },
    enhancedBoons: {
      special1: 'If the gang also controls one of the Linked Rackets, when challenged, the gang may choose the Racket that will be at stake in the battle, even though it would normally be chosen by the challenger.',
      special2: 'If the gang also controls both of the Linked Rackets, when challenged for a Racket the gang controls, make an Intelligence check for the gang Leader. If the check is passed, the player of the gang may choose to play the Ambush scenario instead of rolling. They are automatically the attacker.'
    }
  },
  {
    id: 'eight_hearts',
    card: 'Eight of Hearts',
    title: 'CORPSE GUILD BOND',
    description: 'The Corpse Guild is always looking for agents to help them secure more merchandise for the flesh grinders.',
    linkedRackets: [],
    racketBoons: {
      special1: 'Whilst it controls this Racket, the gang can control no other Guild Bond Racket.',
      recruit: 'Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Corpse Guild and may always add a Corpse Harvesting Party to a crew during any pre-battle sequence. Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any pre-battle sequence, including their equipment.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by 1 for every other Racket the gang controls.'
    }
  },
  {
    id: 'nine_hearts',
    card: 'Nine of Hearts',
    title: 'SLAVE GUILD BOND',
    description: 'A good pit fighter can fetch a high price in the underhive and it falls to the agents of the Slave Guild to seek out potential sources.',
    linkedRackets: [],
    racketBoons: {
      special1: 'Whilst it controls this Racket, the gang can control no other Guild Bond Racket.',
      recruit: 'Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Slave Guild and may always add a Slaver Entourage to a crew during any pre-battle sequence. Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any pre-battle sequence, including their equipment.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by +1 for every other Racket the gang controls.'
    }
  },
  {
    id: 'ten_hearts',
    card: 'Ten of Hearts',
    title: 'PROMETHIUM GUILD BOND',
    description: 'Those in service to the Promethium Guild can expect a warm reception should they fail to execute their duty.',
    linkedRackets: [],
    racketBoons: {
      special1: 'Whilst it controls this Racket, the gang can control no other Guild Bond Racket.',
      recruit: 'Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Promethium Guild and may always add a Pyromantic Conclave to a crew during any pre-battle sequence. Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any pre-battle sequence, including their equipment.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by +1 for every other Racket the gang controls.'
    }
  },
  {
    id: 'jack_hearts',
    card: 'Jack of Hearts',
    title: 'GUILD OF COIN BOND',
    description: 'Middlemen and merchants fill the underhive, and the Guild of Coin relies upon its agents to make sure these miscreants pay their dues.',
    linkedRackets: [],
    racketBoons: {
      special1: 'Whilst it controls this Racket, the gang can control no other Guild Bond Racket.',
      recruit: 'Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Guild of Coin and may always add Toll Collectors to a crew during any pre-battle sequence. Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any pre-battle sequence, including their equipment.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by +1 for every other Racket the gang controls.'
    }
  },
  {
    id: 'queen_hearts',
    card: 'Queen of Hearts',
    title: 'WATER GUILD BOND',
    description: 'Water is life on Necromunda and it is the responsibility of the Water Guild and their agents to protect it, or extract it from those who would presume to cross them.',
    linkedRackets: [],
    racketBoons: {
      special1: 'Whilst it controls this Racket, the gang can control no other Guild Bond Racket.',
      recruit: 'Whilst it controls this Racket, and if the gang is Law Abiding, it forms an automatic alliance with the Water Guild and may always add a Nautican Syphoning Delegation to a crew during any pre-battle sequence. Alternatively, or if this Racket is controlled by an Outlaw gang, the gang may recruit one Bounty Hunter and up to two Hive Scum for free during any pre-battle sequence, including their equipment.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income. The result of the roll is increased by +1 for every other Racket the gang controls.'
    }
  },
  {
    id: 'king_hearts',
    card: 'King of Hearts',
    title: 'ARCHAEOTECH AUCTIONING',
    description: 'Archaeotech is the buried treasure of past ages of Necromunda, and those who buy and sell it can reap fortunes - or lose everything.',
    linkedRackets: ['Proxies of the Omnissiah', 'The Cold Trade'],
    racketBoons: {
      equipment: 'Whilst it controls this Racket, one member of the gang may have a single item from the Imperial Weapons section of the Black Market for free.',
      income: 'Whilst it controls this Racket, the gang gains 2D6x10 credits when they collect Income. If a double is rolled, they gain nothing.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income. However, if a double is rolled, they gain nothing.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 4D6x10 credits when they collect Income. However, if a double is rolled, they gain nothing.'
    }
  },
  // CLUBS
  {
    id: 'ace_clubs',
    card: 'Ace of Clubs',
    title: 'WITCH SEEKING',
    description: 'Psykers are kept in check not only by the agents of the Imperium, but by hired mercenaries who hunt the hive for those who bear the sign of the witch.',
    linkedRackets: ['Redemptionist Backers', 'Slave Guild Bond'],
    racketBoons: {
      special1: 'This Racket may only be controlled by a Law Abiding gang. If it is claimed by an Outlaw gang, it is converted into a Wyrd Trade Racket.',
      special2: 'Whilst it controls this Racket, all fighters in the gang may add the Shock trait to one of their weapons that has the Melee trait for free.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang doubles the bounty it receives for any fighter that is a Psyker, even if that fighter has become a Psyker temporarily due to the effects of Ghast.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang Leader may make an Intelligence check before claiming a bounty. If the check is passed, they identify the captive as a witch and receive double the bounty for them.'
    }
  },
  {
    id: 'two_clubs',
    card: 'Two of Clubs',
    title: 'REDEMPTIONIST BACKERS',
    description: 'The Cult of the Redemption is not a forgiving creed and its most fanatical supporters often funnel money and equipment to those who are going to pursue its goals.',
    linkedRackets: ['Promethium Guild Bond', 'Witch Seeking'],
    racketBoons: {
      special1: 'Helot Cult, Genestealer Cult and Corpse Grinder Cult gangs may never claim this Racket. If they gain control of it, it becomes dormant until claimed by a different type of gang.',
      special2: 'Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks for any weapon that has the Blaze trait.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'three_clubs',
    card: 'Three of Clubs',
    title: 'PROXIES OF THE OMNISSIAH',
    description: 'The Tech-Priests of the Machine God watch the industrial enclaves of Necromunda with a careful eye - not only does its hives produce many sacred machines, but secrets of lost technological lore lie buried in their depths.',
    linkedRackets: ['Archaeotech Auctioning', 'Promethium Guild Bond'],
    racketBoons: {
      special: 'Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks. Additionally, the gang treats all Bionics as Common.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains D6x10 credits when they collect Income.',
      special: 'If the gang also controls both of the Linked Rackets, all fighters in the gang may add either the Shock trait or the Seismic trait to one of their weapons for free. New weapons purchased later may also be given this Trait. These weapons also gain the Unstable trait. If the gang loses control of this Racket, the weapons that gained these additional Traits lose them.'
    }
  },
  {
    id: 'four_clubs',
    card: 'Four of Clubs',
    title: 'GAMBLING EMPIRE',
    description: 'Fortunes are won and lost on the spin of a wheel or the turning of a card but, no matter who loses and who gains, the house always wins...',
    linkedRackets: ['Blood Pits', 'Whisper Brokers'],
    racketBoons: {
      special: 'The player of the gang that controls this Racket chooses a suit of cards and then draws a card from a shuffled deck of playing cards. If they draw a card from the suit they chose, they earn income equal to the value of the card (Jack 11, Queen 12, King 13) x 10 credits. If they draw a card from a suit of the same colour, they earn income equal to the value of the card x 5 credits. If it is any other suit, they gain no income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang player may nominate a single enemy fighter (but not a Leader or Champion) at the start of the battle. The gang has called in the fighter debts. The nominated fighter misses the battle.'
    }
  },
  {
    id: 'five_clubs',
    card: 'Five of Clubs',
    title: 'BLOOD PITS',
    description: 'The fighting arenas of Necromunda are stained red with the blood of those who fought there and sing with the roars of the crowd.',
    linkedRackets: ['Slave Guild Bond', 'Xenos Beast Trafficking'],
    racketBoons: {
      recruit: 'Whilst it controls this Racket, the gang may recruit up to two Hive Scum Hired Guns for free, including their equipment, prior to every battle.'
    },
    enhancedBoons: {
      special: 'If the gang also controls one of the Linked Rackets, as a post-battle action a Leader or Champion may fight in the pits. Make a Weapon Skill check with a -1 modifier for them. If the check is passed, they permanently gain one random Combat or Brawn skill. If the check is failed, nothing happens. If however the check is failed on the roll of a 1, the fighter suffers one roll on the Lasting Injury table.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'six_clubs',
    card: 'Six of Clubs',
    title: 'SPIRE PATRONAGE',
    description: 'Hive nobility often take a fancy to a gang from the lower hive, showering them with gifts, and rewarding them like prize pets.',
    linkedRackets: ['Proxies of the Omnissiah', 'Blood Pits'],
    racketBoons: {
      income: 'Whilst it controls this Racket, the gang gains 2D6x10 credits when they collect Income if they won their battle.'
    },
    enhancedBoons: {
      equipment: 'If the gang also controls one of the Linked Rackets, all of the gang Leader and Champions may each have one of the following Extravagant Goods for free: Gold-plated Gun, Exotic Furs, Opulent Jewellery, Uphive Raiments.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang Leader gains a Caryatid Exotic Beast for free. This Caryatid will not leave its master if the gang loses Reputation, but will leave if the gang loses control of this Racket.'
    }
  },
  {
    id: 'seven_clubs',
    card: 'Seven of Clubs',
    title: 'BULLET CUTTING',
    description: 'Bullets, guns and blades are the eternal trade of Necromunda - everyone needs a gun or a blade.',
    linkedRackets: ['Proxies of the Omnissiah', 'Blood Pits'],
    racketBoons: {
      special: 'Whilst it controls this Racket, all fighters in the gang may re-roll any failed Ammo checks.',
      equipment: 'Whilst it controls this Racket, the gang treats all items from either the Trading Post or the Black Market with a Rarity of 9 or below as Common.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'eight_clubs',
    card: 'Eight of Clubs',
    title: 'SETTLEMENT PROTECTION',
    description: 'Settlements in the underhive vanish all the time. Those who want to survive pay gangs a handsome price to keep others away and their hard-won lives free of the misfortune that comes to those who refuse to pay.',
    linkedRackets: ['Guild Bond (any)', 'Bullet Cutting'],
    racketBoons: {
      recruit: 'Whilst it controls this Racket, the gang gains one Hanger-on of the controlling player choice for free.',
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'nine_clubs',
    card: 'Nine of Clubs',
    title: 'CARAVAN ROUTE CONTROL',
    description: 'The safe ways through the hive are few and well-worn; control them and you control the flow of slaves and credits.',
    linkedRackets: ['Guild of Coin Bond', 'The Cold Trade'],
    racketBoons: {
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'ten_clubs',
    card: 'Ten of Clubs',
    title: 'WYRD TRADE',
    description: 'Unsanctioned psykers are very dangerous but also incredibly useful. They can break minds, discover secrets and kill with a thought. Harbouring such creatures is dangerous, but also a mark of great power.',
    linkedRackets: ['Peddlers of Forbidden Lore', 'Whisper Brokers'],
    racketBoons: {
      equipment: 'Whilst it controls this Racket, the gang treats Ghast as a Common item.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'jack_clubs',
    card: 'Jack of Clubs',
    title: 'PRODUCTION SKIMMING',
    description: 'One of the simplest ways to make a profit in the hive is to skim a little off everything that is made in the forges, stills, labs and mines.',
    linkedRackets: ['Caravan Route Control', 'Guild Bond (any)'],
    racketBoons: {
      income: 'Whilst it controls this Racket, the gang gains D6x10 credits when they collect Income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang gains 3D6x10 credits when they collect Income.'
    }
  },
  {
    id: 'queen_clubs',
    card: 'Queen of Clubs',
    title: 'THE RESURRECTION GAME',
    description: 'The line between life and death is thinner than many think. A little alchemy, a few words, a drop of blood, some technology from the deeps, and those who have fallen can rise again. For a price!',
    linkedRackets: ['Corpse Guild Bond', 'Peddlers of Forbidden Lore'],
    racketBoons: {
      special: 'Whilst it controls this Racket, the gang may ignore one Critical Injury or Memorable Death result on the Lasting Injury table per battle. When these results are rolled, the fighter simply goes Into Recovery.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      special: 'Whilst this gang controls both of the linked Rackets, any gang in the campaign may pay this gang to return a dead fighter from the grave. This costs the original value of the fighter (including equipment) +100 credits. Roll 2D6. On a roll of 7-12 the fighter is resurrected and gains the Fearsome skill. On a roll of 3-6 the fighter is resurrected but suffers a permanent loss of 1 Toughness and gains the Fearsome skill if they do not have it already. On a roll of 2, the resurrection fails.'
    }
  },
  {
    id: 'king_clubs',
    card: 'King of Clubs',
    title: 'PEDDLERS OF FORBIDDEN LORE',
    description: 'There are those who know how to see the future in a pool of water, and speak words that lure the shadows to walk beside them.',
    linkedRackets: ['Wyrd Trade', 'The Resurrection Game'],
    racketBoons: {
      special: 'Whilst the gang controls this Racket, the controlling player may re-roll the dice when determining Priority.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang gains 2D6x10 credits when they collect Income.',
      special: 'Whilst this gang controls both of the linked Rackets, its Leader and all Champions gain a 4+ saving throw that cannot be modified by a weapon Armour Piercing value.'
    }
  }
];
