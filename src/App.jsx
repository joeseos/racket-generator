import React, { useState, useEffect } from 'react';
import { Shuffle, Users, Download, RotateCcw, Info, Share2, Copy } from 'lucide-react';

const RACKETS = [
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
    description: 'Everything that passes in and out of the hive is checked, authorised and stamped by official process… except when it isn\'t!',
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
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.',
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
      income1: 'If the gang also controls one of the Linked Rackets, the gang earns D6x10 credits when they collect Income.',
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
    description: 'Those in service to the Promethium Guild can expect a \'warm\' reception should they fail to execute their duty.',
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
    description: 'Archaeotech is the buried treasure of past ages of Necromunda, and those who buy and sell it can reap fortunes – or lose everything.',
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
    description: 'The Tech-Priests of the Machine God watch the industrial enclaves of Necromunda with a careful eye – not only does its hives produce many sacred machines, but secrets of lost technological lore lie buried in their depths.',
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
    description: 'Fortunes are won and lost on the spin of a wheel or the turning of a card but, no matter who loses and who gains, the house always wins…',
    linkedRackets: ['Blood Pits', 'Whisper Brokers'],
    racketBoons: {
      special: 'The player of the gang that controls this Racket chooses a suit of cards and then draws a card from a shuffled deck of playing cards. If they draw a card from the suit they chose, they earn income equal to the value of the card (Jack 11, Queen 12, King 13) x 10 credits. If they draw a card from a suit of the same colour, they earn income equal to the value of the card x 5 credits. If it is any other suit, they gain no income.'
    },
    enhancedBoons: {
      income1: 'If the gang also controls one of the Linked Rackets, the gang\'s player may nominate a single enemy fighter (but not a Leader or Champion) at the start of the battle. The gang has called in the fighter\'s debts. The nominated fighter misses the battle.'
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
      equipment: 'If the gang also controls one of the Linked Rackets, all of the gang\'s Leader and Champions may each have one of the following Extravagant Goods for free: Gold-plated Gun, Exotic Furs, Opulent Jewellery, Uphive Raiments.',
      income2: 'If the gang also controls both of the Linked Rackets, the gang\'s Leader gains a Caryatid Exotic Beast for free. This Caryatid will not leave its master if the gang loses Reputation, but will leave if the gang loses control of this Racket.'
    }
  },
  {
    id: 'seven_clubs',
    card: 'Seven of Clubs',
    title: 'BULLET CUTTING',
    description: 'Bullets, guns and blades are the eternal trade of Necromunda – everyone needs a gun or a blade.',
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
      recruit: 'Whilst it controls this Racket, the gang gains one Hanger-on of the controlling player\'s choice for free.',
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
      special: 'Whilst this gang controls both of the linked Rackets, any gang in the campaign may pay this gang to return a dead fighter from the grave. This costs the original value of the fighter (including equipment) +100 credits. Roll 2D6. On a roll of 7-12 the fighter is resurrected and gains the Fearsome skill. On a roll of 3-6 the fighter is resurrected but suffers a permanent loss of 1 Toughness and gains the Fearsome skill if they don\'t have it already. On a roll of 2, the resurrection fails.'
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
      special: 'Whilst this gang controls both of the linked Rackets, its Leader and all Champions gain a 4+ saving throw that cannot be modified by a weapon\'s Armour Piercing value.'
    }
  }
];

const NecromundaRacketApp = () => {
  const [numPlayers, setNumPlayers] = useState('');
  const [racketsPerPlayer, setRacketsPerPlayer] = useState('2');
  const [playerNames, setPlayerNames] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedRacket, setSelectedRacket] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // Load assignments from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    
    if (encodedData) {
      try {
        const decodedData = JSON.parse(atob(encodedData));
        setAssignments(decodedData.assignments || []);
        setNumPlayers(decodedData.numPlayers?.toString() || '');
        setRacketsPerPlayer(decodedData.racketsPerPlayer?.toString() || '2');
        setPlayerNames(decodedData.playerNames || []);
        
        // Generate share URL for loaded data
        const baseUrl = window.location.href.split('?')[0];
        const newShareUrl = `${baseUrl}?data=${encodedData}`;
        setShareUrl(newShareUrl);
      } catch (error) {
        console.error('Failed to load shared results:', error);
      }
    }
  }, []);

  const handleNumPlayersChange = (value) => {
    setNumPlayers(value);
    const count = parseInt(value) || 0;
    
    // Initialize player names array - keep existing names if they exist, add empty strings for new slots
    const newNames = Array(count).fill('').map((_, i) => 
      playerNames[i] !== undefined ? playerNames[i] : ''
    );
    setPlayerNames(newNames);
  };

  const updatePlayerName = (index, name) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = name.trim();
    setPlayerNames(updatedNames);
  };

  const validateInputs = () => {
    const playerCount = parseInt(numPlayers);
    const racketsCount = parseInt(racketsPerPlayer);
    
    if (!playerCount || playerCount < 1) {
      return { isValid: false, error: 'Please enter a valid number of players' };
    }
    
    if (!racketsCount || racketsCount < 1) {
      return { isValid: false, error: 'Please enter a valid number of rackets per player' };
    }

    // Check for empty player names if names are being used
    if (showNameInput || playerNames.some(name => name !== '')) {
      const emptyNames = playerNames.some((name, index) => 
        index < playerCount && (!name || name.trim() === '')
      );
      if (emptyNames) {
        return { isValid: false, error: 'All player names must be filled in or use default names' };
      }
    }
    
    return { isValid: true, error: null };
  };

  const getEffectivePlayerNames = () => {
    return playerNames.map((name, index) => 
      name && name.trim() !== '' ? name.trim() : `Player ${index + 1}`
    );
  };

  const assignRackets = () => {
    const validation = validateInputs();
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    const playerCount = parseInt(numPlayers);
    const racketsCount = parseInt(racketsPerPlayer);
    const effectiveNames = getEffectivePlayerNames();
    
    // Create pool with refreshing logic
    let availableRackets = [...RACKETS];
    const newAssignments = [];

    for (let i = 0; i < playerCount; i++) {
      const playerRackets = [];
      
      // Assign specified number of rackets per player
      for (let j = 0; j < racketsCount; j++) {
        // Refresh pool if empty
        if (availableRackets.length === 0) {
          availableRackets = [...RACKETS];
        }
        
        const randomIndex = Math.floor(Math.random() * availableRackets.length);
        const selectedRacket = availableRackets.splice(randomIndex, 1)[0];
        playerRackets.push(selectedRacket);
      }
      
      newAssignments.push({
        player: i + 1,
        name: effectiveNames[i],
        rackets: playerRackets
      });
    }

    setAssignments(newAssignments);
    setShowNameInput(false);
    
    // Generate shareable URL
    generateShareUrl(newAssignments, playerCount, racketsCount, effectiveNames);
  };

  const generateShareUrl = (assignments, playerCount, racketsCount, effectiveNames) => {
    try {
      const shareData = {
        assignments: assignments,
        numPlayers: playerCount,
        racketsPerPlayer: racketsCount,
        playerNames: effectiveNames,
        timestamp: new Date().toISOString()
      };
      
      const encodedData = btoa(JSON.stringify(shareData));
      // Fix for Netlify deployment - use window.location.href instead of constructing URL
      const baseUrl = window.location.href.split('?')[0];
      const newShareUrl = `${baseUrl}?data=${encodedData}`;
      
      console.log('Generated share URL:', newShareUrl);
      setShareUrl(newShareUrl);
      
      // Update browser URL without page reload
      if (window.history && window.history.pushState) {
        window.history.pushState({}, '', newShareUrl);
      }
    } catch (error) {
      console.error('Failed to generate share URL:', error);
      alert('Failed to generate share URL. Please try again.');
    }
  };

  const copyShareUrl = async () => {
    if (!shareUrl) {
      alert('No share URL available. Please assign rackets first.');
      return;
    }
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        alert('✅ Share URL copied to clipboard!');
      } else {
        // Fallback for older browsers or non-HTTPS
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          alert('✅ Share URL copied to clipboard!');
        } else {
          throw new Error('Copy command failed');
        }
      }
    } catch (error) {
      console.error('Failed to copy URL:', error);
      // Show the URL in a prompt as last resort
      prompt('Copy this share URL manually:', shareUrl);
    }
  };

  const resetAssignments = () => {
    setAssignments([]);
    setNumPlayers('');
    setRacketsPerPlayer('2');
    setPlayerNames([]);
    setSelectedRacket(null);
    setShowNameInput(false);
    setShareUrl('');
    
    // Clear URL parameters
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const exportResults = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      numPlayers: assignments.length,
      racketsPerPlayer: parseInt(racketsPerPlayer),
      totalRacketsAssigned: assignments.reduce((total, player) => total + player.rackets.length, 0),
      poolRefreshes: Math.floor(assignments.reduce((total, player) => total + player.rackets.length, 0) / 26),
      shareUrl: shareUrl,
      assignments: assignments
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `necromunda-rackets-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getSuitColor = (card) => {
    return card.includes('Hearts') ? 'text-red-600' : 'text-gray-800';
  };

  const getSuitIcon = (card) => {
    return card.includes('Hearts') ? '♥' : '♣';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            Necromunda Racket Generator
          </h1>
          <p className="text-gray-300 text-lg">Randomly distribute rackets among your players</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label htmlFor="players" className="block text-sm font-medium text-gray-300 mb-2">
                <Users className="inline w-4 h-4 mr-1" />
                Number of Players
              </label>
              <input
                id="players"
                type="number"
                min="1"
                value={numPlayers}
                onChange={(e) => handleNumPlayersChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter number of players"
              />
            </div>
            
            <div>
              <label htmlFor="rackets" className="block text-sm font-medium text-gray-300 mb-2">
                <Shuffle className="inline w-4 h-4 mr-1" />
                Rackets per Player
              </label>
              <input
                id="rackets"
                type="number"
                min="1"
                value={racketsPerPlayer}
                onChange={(e) => setRacketsPerPlayer(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Rackets per player"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={() => setShowNameInput(!showNameInput)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                disabled={!numPlayers}
              >
                {showNameInput ? 'Hide Names' : 'Set Names'}
              </button>
            </div>
            
            <div className="btn-group">
              <button
                onClick={assignRackets}
                className={`px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center gap-2 ${
                  validateInputs().isValid 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' 
                    : 'bg-gray-500 cursor-not-allowed text-gray-300'
                }`}
                disabled={!validateInputs().isValid}
                title={!validateInputs().isValid ? validateInputs().error : 'Assign rackets to players'}
              >
                <Shuffle className="w-4 h-4" />
                Assign Rackets
              </button>
              {assignments.length > 0 && (
                <>
                  <button
                    onClick={resetAssignments}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                  <button
                    onClick={copyShareUrl}
                    className={`px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2 shadow-lg ${
                      shareUrl 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                    disabled={!shareUrl}
                    title={shareUrl ? "Copy shareable URL to clipboard" : "Share URL not ready"}
                  >
                    <Share2 className="w-4 h-4" />
                    Share {shareUrl && '✓'}
                  </button>
                  <button
                    onClick={exportResults}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Player Names Input */}
          {showNameInput && numPlayers && (
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-white">Player Names</h3>
                <button
                  onClick={() => {
                    const defaultNames = Array(parseInt(numPlayers)).fill('').map((_, i) => `Player ${i + 1}`);
                    setPlayerNames(defaultNames);
                  }}
                  className="text-sm px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-200 transition-colors"
                >
                  Use Defaults
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {Array(parseInt(numPlayers)).fill(0).map((_, index) => {
                  const isEmpty = !playerNames[index] || playerNames[index].trim() === '';
                  const hasError = showNameInput && isEmpty;
                  
                  return (
                    <div key={index}>
                      <label className="block text-sm text-gray-300 mb-1">
                        Player {index + 1}
                        {hasError && <span className="text-red-400 ml-1">*</span>}
                      </label>
                      <input
                        type="text"
                        value={playerNames[index] || ''}
                        onChange={(e) => updatePlayerName(index, e.target.value)}
                        className={`w-full px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 transition-colors ${
                          hasError 
                            ? 'bg-red-900 bg-opacity-30 border border-red-500 focus:ring-red-500' 
                            : 'bg-gray-700 border border-gray-600 focus:ring-blue-500'
                        }`}
                        placeholder={`Player ${index + 1}`}
                      />
                      {hasError && (
                        <p className="text-xs text-red-400 mt-1">Name is required</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-400 mt-3">
                💡 Leave empty to use default names, or fill in custom names for all players
              </p>
            </div>
          )}
          
          {/* Validation Error Display */}
          {!validateInputs().isValid && (showNameInput || numPlayers) && (
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="bg-red-900 bg-opacity-30 border border-red-600 rounded-lg p-3">
                <div className="flex items-center gap-2 text-red-400">
                  <span className="text-sm">⚠️</span>
                  <span className="text-sm font-medium">{validateInputs().error}</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Info Display */}
          {numPlayers && racketsPerPlayer && (
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {(() => {
                  const totalNeeded = parseInt(numPlayers || 0) * parseInt(racketsPerPlayer || 0);
                  const poolRefreshes = Math.floor(totalNeeded / 26);
                  const usedInCurrentPool = totalNeeded % 26;
                  const remaining = usedInCurrentPool === 0 && totalNeeded > 0 ? 0 : 26 - usedInCurrentPool;
                  
                  return (
                    <>
                      <span>Total Rackets Needed: <span className="text-yellow-400">{totalNeeded}</span></span>
                      <span>Pool Refreshes: <span className="text-green-400">{poolRefreshes}</span> times</span>
                      <span>Remaining: <span className="text-blue-400">{remaining}</span> rackets</span>
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Share URL Section */}
        {shareUrl && (
          <div className="bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-medium text-blue-300">Shareable Results</h3>
            </div>
            <p className="text-sm text-blue-200 mb-3">Share this URL with your players so they can view the racket assignments:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-blue-800 bg-opacity-50 border border-blue-600 rounded-md text-blue-100 text-sm"
              />
              <button
                onClick={copyShareUrl}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>
        )}

        {/* Assignments Results */}
        {assignments.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {assignments.map((assignment) => (
              <div key={assignment.player} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {assignment.name}
                  </h3>
                  <div className="text-sm text-gray-400">
                    {assignment.rackets.length} racket{assignment.rackets.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="space-y-3">
                  {assignment.rackets.map((racket, idx) => (
                    <div 
                      key={`${racket.id}-${idx}`} 
                      className="bg-gray-700 rounded-lg p-4 border-l-4 border-red-500 hover:bg-gray-600 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedRacket(racket);
                        setShowDetails(true);
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${getSuitColor(racket.card)} mb-1`}>
                            {getSuitIcon(racket.card)} {racket.card}
                          </div>
                          <h4 className="font-bold text-white text-sm mb-2">{racket.title}</h4>
                          <p className="text-xs text-gray-300 line-clamp-2">{racket.description}</p>
                        </div>
                        <Info className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Racket Details Modal */}
        {showDetails && selectedRacket && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className={`text-lg font-medium ${getSuitColor(selectedRacket.card)} mb-2`}>
                      {getSuitIcon(selectedRacket.card)} {selectedRacket.card}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{selectedRacket.title}</h2>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 italic">{selectedRacket.description}</p>
                  
                  {selectedRacket.linkedRackets.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">Linked Rackets</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {selectedRacket.linkedRackets.map((linked, idx) => (
                          <li key={idx}>{linked}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Racket Boons</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedRacket.racketBoons).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium text-yellow-300 capitalize">{key.replace(/\d+/, '')}: </span>
                          <span className="text-gray-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedRacket.enhancedBoons && Object.keys(selectedRacket.enhancedBoons).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Enhanced Boons</h3>
                      <div className="space-y-3">
                        {Object.entries(selectedRacket.enhancedBoons).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-medium text-yellow-300 capitalize">{key.replace(/\d+/, '')}: </span>
                            <span className="text-gray-300">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Click on any racket card to view detailed information • Share results with your players • Export for future reference</p>
          <p className="mt-2">
            Total Rackets: {RACKETS.length} | 
            {assignments.length > 0 ? 
              ` Assigned: ${assignments.reduce((total, player) => total + player.rackets.length, 0)} rackets to ${assignments.length} players` :
              ' Ready to assign rackets'
            }
          </p>
          {assignments.length > 0 && (
            <p className="mt-1 text-xs">
              Pool was refreshed {Math.floor(assignments.reduce((total, player) => total + player.rackets.length, 0) / 26)} times during assignment
              {shareUrl && ' • Results are shareable via URL'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NecromundaRacketApp;
