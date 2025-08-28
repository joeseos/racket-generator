export const INTRIGUES = [
  // DIAMONDS - OUTLAW
  {
    id: 'ace_diamonds',
    card: 'Ace of Diamonds',
    title: 'WRECK THE PLACE',
    description: 'Tear things down! Break what works and leave the rest in ruin.',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '+1 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Vandalise (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang can claim this Intrigue.\n\nIf your opponent\'s deployment zone does not follow the standard rules for deployment, you may discard this Intrigue and draw another.'
  },
  {
    id: 'two_diamonds',
    card: 'Two of Diamonds',
    title: 'SEED THE REBELLION',
    description: 'Rise up! Rise up against the overlords!',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '+1 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Graffiti (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang has claimed this Intrigue. If this action is performed four times, your gang can claim this Intrigue and is rewarded with +2 Reputation, rather than the usual +1.\n\nIf your opponent\'s deployment zone does not follow the standard rules for deployment, you may discard this Intrigue and draw another.'
  },
  {
    id: 'three_diamonds',
    card: 'Three of Diamonds',
    title: 'BURN IT DOWN!',
    description: 'Set a fire and leave nothing but ashes!',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+2 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Start Fire (Basic) action. Place a Blaze token in base-to-base contact with the fighter. From the start of the next round, any fighter that moves within 3" of the Blaze token takes an automatic Strength 3, AP -, Damage 1 hit. If this action is performed twice, your gang can claim this Intrigue. If this action is performed four times, your gang can claim this Intrigue and is rewarded with +3 Reputation, rather than the usual +2.'
  },
  {
    id: 'four_diamonds',
    card: 'Four of Diamonds',
    title: 'BLOW IT UP!',
    description: 'There is no greater symbol of rebellion than structures that have stood for millennia reduced to ruins.',
    category: 'Outlaw',
    alignmentTest: '3D6',
    reward: '+4 Reputation',
    criteria: 'Choose a fighter on your crew to be the bomb carrier. This fighter can perform the Plant Bomb (Double) action. If the bomb carrier completes this action once whilst within 6" of the centre of the battlefield then the bomb has been planted. At the end of the battle, the bomb explodes and your gang can claim this Intrigue. Any fighters within 6" of the centre of the battlefield at the end of the battle are taken Out of Action. Should the bomb carrier be taken Out of Action before planting the bomb, the model is replaced by a frag trap booby trap.'
  },
  {
    id: 'five_diamonds',
    card: 'Five of Diamonds',
    title: 'MAKE THEM BLEED!',
    description: 'If you can make someone bleed, you show they are weak.',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+4 Reputation, opponent loses -2 Reputation',
    criteria: 'If, at the end of the battle, your gang has taken the enemy gang\'s Leader and all of their Champions that took part in this battle Out of Action, your gang can claim this Intrigue.'
  },
  {
    id: 'six_diamonds',
    card: 'Six of Diamonds',
    title: 'CLEAR THE SMUGGLING ROUTES',
    description: 'A smuggling cartel wants a clear passage to move its goods through an area, and needs a gang to make a path.',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '200 credits',
    criteria: 'If, at the end of the battle, no enemy fighters are within their own deployment zone, your gang can claim this Intrigue.'
  },
  {
    id: 'seven_diamonds',
    card: 'Seven of Diamonds',
    title: 'COLLECT A DEBT',
    description: 'Someone owes someone powerful a pile of credits, and it\'s time for them to pay up!',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '100 credits',
    criteria: 'When one of your fighters is Engaged with an enemy fighter, instead of performing a Fight (Basic) action, they may perform the Shakedown (Double) action. If this action is performed once, your gang can claim this Intrigue.'
  },
  {
    id: 'eight_diamonds',
    card: 'Eight of Diamonds',
    title: 'REVEAL THE IMPOSTER',
    description: 'One of your gang members has been replaced by an imposter passing whispers to the law keepers. They need to be uncovered.',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'At the start of the third round of the battle, after rolling for Priority but before Readying fighters, one randomly determined fighter from your crew (not a Leader or Champion) is revealed as an imposter and counts as part of the opponent\'s gang for the remainder of the battle. If one of your fighters manages to take the imposter Out of Action after they have been revealed, your gang can claim this Intrigue. If the imposter is taken Out of Action, no Lasting Injury roll is made for the fighter replaced, as they never really took part in the battle.'
  },
  {
    id: 'nine_diamonds',
    card: 'Nine of Diamonds',
    title: 'STAND ALONE',
    description: 'If you can stand covered in the blood of your enemies, you can show everyone who is top of the pile.',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+3 Reputation, and the chosen fighter gains the Fearsome skill',
    criteria: 'Choose one friendly Leader or Champion that is taking part in the battle. For the remainder of the battle, they cannot make group activations. However, if the chosen fighter takes three enemy fighters Out of Action by the end of the battle, and has not been taken Out of Action themselves, your gang can claim this Intrigue.'
  },
  {
    id: 'ten_diamonds',
    card: 'Ten of Diamonds',
    title: 'HIT THE STIMMS',
    description: 'Your gang has been offered the use of some black market alchemy that is decidedly not on the rolls of those approved by the Guilders!',
    category: 'Outlaw',
    alignmentTest: '3D6',
    reward: 'For the remainder of this battle, your fighters ignore the effects of Flesh Wounds and may immediately discard any Flesh Wounds suffered.',
    criteria: 'By simply announcing your gang will use this Intrigue during the Ready Fighters step of any Priority phase, your gang can claim this Intrigue.'
  },
  {
    id: 'jack_diamonds',
    card: 'Jack of Diamonds',
    title: 'RESURRECT THE DEAD',
    description: 'There are ways and means of bringing even the dead back to life. Some are thought to be mere stories: the Shunned Guild, the Priest of the Spider Kin, the Elixirs of the Pale Abyss. But one thing underlies these rumours – all of them are true!',
    category: 'Outlaw',
    alignmentTest: '4D6',
    reward: 'During step 6 of the post-battle sequence, you may choose a single fighter from your gang who has died over the course of this campaign and return them to your roster with any equipment they originally had. Their Toughness is reduced by -1, but they gain the Fearsome skill if they did not have it already.',
    criteria: 'By simply announcing that your gang has completed this Intrigue during the Wrap-up step of the post-battle sequence, your gang can claim this Intrigue.'
  },
  {
    id: 'queen_diamonds',
    card: 'Queen of Diamonds',
    title: 'RUN WITH THE GHASTS',
    description: 'You have found an undeclared deposit of unrefined Ghast. Now seems the perfect time to use it!',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: 'Choose three members of your crew. They are immediately treated as having taken a dose of Ghast. Additionally, D6+1 doses of Ghast are added to the gang\'s Stash during step 2 of the post-battle sequence.',
    criteria: 'By simply announcing your gang will use this Intrigue during the Ready Fighters step of any Priority phase, your gang can claim this Intrigue.'
  },
  {
    id: 'king_diamonds',
    card: 'King of Diamonds',
    title: 'CORRUPT THE MACHINE',
    description: 'A mysterious stranger has hired you to plant some scrap code in the local cogitator network.',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'Choose three terrain features and/or door consoles at least 6" from your deployment zone and at least 8" from each other. Any Standing and Active fighter from your gang that is within 1" of one of the chosen features may perform the Hacking (Double) action. Make an Intelligence check for the fighter. If the check is passed, they have successfully planted the code. If the code is planted three times, your gang can claim this Intrigue.'
  },

  // SPADES - LAW ABIDING
  {
    id: 'ace_spades',
    card: 'Ace of Spades',
    title: 'STITCH THEM UP!',
    description: 'There\'s money to be made from making the innocent look guilty.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '100 credits',
    criteria: 'If one of your Standing fighters is within 1" of a Seriously Injured enemy fighter, instead of performing a Coup De Grace (Simple) action, they may perform the Plant Evidence (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang can claim this Intrigue.'
  },
  {
    id: 'two_spades',
    card: 'Two of Spades',
    title: 'THE PRICE OF PEACE',
    description: 'Sometimes the clink of credits is louder than the sound of gunfire…',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+4 Reputation',
    criteria: 'During the Ready Fighters step of any Priority phase, offer your opponent a bribe of 250 credits – this comes from a \'concerned citizen\' eager to keep the peace and does not reduce your gang\'s Wealth or Income. If your opponent accepts, they immediately forfeit the battle to your gang and your gang claims this Intrigue.'
  },
  {
    id: 'three_spades',
    card: 'Three of Spades',
    title: 'MINIMUM FORCE',
    description: 'The minimum force required is the maximum force you can bring to bear.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+2 Reputation',
    criteria: 'To claim this Intrigue, your gang must take three enemy fighters Out of Action in close combat, using a weapon with the Melee trait.'
  },
  {
    id: 'four_spades',
    card: 'Four of Spades',
    title: 'HOLD THE LINE',
    description: 'Order is maintained by standing unwavering in the face of anarchy and ruin.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+2 Reputation OR claim a single unclaimed Racket',
    criteria: 'Nominate a terrain feature at least 12" from your deployment zone. If, at the end of the battle, there are no enemy fighters within 6" of that terrain feature, your gang can claim this Intrigue.'
  },
  {
    id: 'five_spades',
    card: 'Five of Spades',
    title: 'SHOW OF FORCE',
    description: 'If you break those who oppose you, soon no one will dare to oppose you.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+4 Reputation',
    criteria: 'To claim this Intrigue, your gang must take at least six enemy fighters Out of Action either with shooting or in close combat.'
  },
  {
    id: 'six_spades',
    card: 'Six of Spades',
    title: 'KEEP THE TRADE FLOWING',
    description: 'Trade is the life blood of the hive, the nourisher of order. It must flow or all will be lost to anarchy.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'If, at the end of the battle, at least four of your fighters are Standing and Active or Standing and Engaged within your enemy\'s deployment zone, your gang can claim this Intrigue.'
  },
  {
    id: 'seven_spades',
    card: 'Seven of Spades',
    title: 'CUT OFF THE HEAD',
    description: 'Those who watch and judge need you to shadow one of the souls they have marked for retribution.',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+1 Reputation per enemy Champion taken Out of Action, +2 Reputation for an enemy Leader taken Out of Action.',
    criteria: 'If, at the end of the battle, you have taken your enemy\'s Leader or any of their Champions Out of Action, announce you are claiming this Intrigue and receive the rewards as described above.'
  },
  {
    id: 'eight_spades',
    card: 'Eight of Spades',
    title: 'WATCH FROM THE SHADOWS',
    description: 'If you cut off the head of the snake then the body will die.',
    category: 'Law Abiding',
    alignmentTest: '3D6',
    reward: '50 credits, and a single fighter that took part in the battle gains a Cunning skill of your choice.',
    criteria: 'During the Ready Fighters step of any Priority phase, randomly choose a fighter from your opponent\'s crew. For the remainder of this battle, any of your fighters within 12" of the chosen enemy fighter may perform the Shadow (Double) action. A Shadowing fighter can do nothing else this turn, but if the enemy fighter moves, the Shadowing fighter is also moved to remain within 12" of them – unless stopped by impassable terrain or enemy fighters. If at the end of the battle, you have a fighter Shadowing an enemy fighter, your gang can claim this Intrigue.'
  },
  {
    id: 'nine_spades',
    card: 'Nine of Spades',
    title: 'BREAK THEIR WILL',
    description: 'If justice cannot triumph through sanctioned means, it will triumph by paying for the heads of dead criminals.',
    category: 'Law Abiding',
    alignmentTest: '4D6',
    reward: '+4 Reputation, opponent loses -2 Reputation',
    criteria: 'You can only claim this Intrigue if the enemy is an Outlaw gang. If it is not, you may discard this Intrigue and draw another. If, at the end of the battle, your gang has taken the enemy gang\'s Leader and all of their Champions that took part in this battle Out of Action, your gang can claim this Intrigue.'
  },
  {
    id: 'ten_spades',
    card: 'Ten of Spades',
    title: 'MARK THE IMPURE',
    description: 'Evidence must be gathered for the prosecution of a suspected recidivist.',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+2 Reputation',
    criteria: 'When one of your fighters activates within 6" of your opponent\'s Leader, they may perform the Pict Capture (Double) action. If a model that has performed this action begins a later activation within 1" of an edge of the battlefield, you can remove them from play as they make off with the evidence required – this does not count as the fighter going Out of Action. When the battle ends, your gang can claim this Intrigue.'
  },
  {
    id: 'jack_spades',
    card: 'Jack of Spades',
    title: 'CARRY A GUILD BOND',
    description: 'The Guilders need the deeds and bonds of their protected trade carried through a dangerous part of the hive.',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+2 Reputation',
    criteria: 'Choose one fighter from your crew to be the courier. If, at the end of any round, the courier is in the enemy\'s deployment zone, you can remove them from the battlefield (they do not count as going Out of Action) and your gang can claim this Intrigue.'
  },
  {
    id: 'queen_spades',
    card: 'Queen of Spades',
    title: 'BRING THEM IN DEAD OR ALIVE',
    description: 'The Merchant Guild offers cold, hard creds for bounties fulfilled – and doesn\'t care overly much how gangs go about collecting them, as long as they do.',
    category: 'Law Abiding',
    alignmentTest: '4D6',
    reward: '50 credits per enemy fighter taken Out of Action',
    criteria: 'You can only claim this Intrigue if the enemy is an Outlaw gang. If it is not, you may discard this Intrigue and draw another. During the Wrap-up step, claim this Intrigue for each enemy fighter taken Out of Action.'
  },
  {
    id: 'king_spades',
    card: 'King of Spades',
    title: 'RETRIEVE THE INFORMER',
    description: 'One of the enemy\'s gang is an Enforcer infiltrator who needs escorting to safety.',
    category: 'Law Abiding',
    alignmentTest: '3D6',
    reward: '150 credits',
    criteria: 'One randomly determined fighter from your opponent\'s crew (not a Leader or Champion) is revealed as an imposter and counts as part of your gang for the remainder of the battle. If the imposter is Standing and Active within your deployment zone when the battle ends, your gang can claim this Intrigue. If the imposter is taken Out of Action, no Lasting Injury roll is made for the fighter who was replaced by the imposter – they never really took part in the battle.'
  }
];
