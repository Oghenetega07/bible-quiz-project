const ecclesiastesQuestions = [
  {
    question:
      "How does the Teacher identify himself at the opening of the book?",
    options: [
      "Son of David, king in Jerusalem",
      "Son of Solomon, king over Judah",
      "Son of David, priest in Jerusalem",
      "Son of Jesse, ruler in Israel",
    ],
    answer: "Son of David, king in Jerusalem",
    reference: "Ecclesiastes 1:1",
  },
  {
    question:
      "What expression does the Teacher use to describe the ultimate emptiness of human endeavors?",
    options: [
      "Utterly meaningless; everything is meaningless",
      "All things pass away",
      "Nothing under heaven remains",
      "Human labor ends in sorrow",
    ],
    answer: "Utterly meaningless; everything is meaningless",
    reference: "Ecclesiastes 1:2",
  },
  {
    question:
      "What question immediately follows the Teacher's declaration about meaninglessness?",
    options: [
      "What do people gain from all their labor under the sun?",
      "Who can understand the works of God?",
      "Why do the righteous suffer?",
      "What remains after a person dies?",
    ],
    answer: "What do people gain from all their labor under the sun?",
    reference: "Ecclesiastes 1:3",
  },
  {
    question:
      "What remains forever while generations come and go?",
    options: [
      "The earth",
      "Wisdom",
      "The heavens",
      "Human memory",
    ],
    answer: "The earth",
    reference: "Ecclesiastes 1:4",
  },
  {
    question:
      "What does the sun do after setting?",
    options: [
      "Hurries back to the place where it rises",
      "Rests beneath the earth",
      "Returns by another path",
      "Waits until its appointed time",
    ],
    answer: "Hurries back to the place where it rises",
    reference: "Ecclesiastes 1:5",
  },
  {
    question:
      "What directional pattern is attributed to the wind?",
    options: [
      "It blows south, turns north, and circles continually",
      "It blows east and returns west",
      "It rises from the sea and ends in the desert",
      "It moves north and south only once each day",
    ],
    answer: "It blows south, turns north, and circles continually",
    reference: "Ecclesiastes 1:6",
  },
  {
    question:
      "What paradox is observed concerning streams and the sea?",
    options: [
      "All streams flow into the sea, yet the sea is never full",
      "Streams dry up, yet the sea increases",
      "The sea feeds streams without losing water",
      "Streams return directly to their sources",
    ],
    answer: "All streams flow into the sea, yet the sea is never full",
    reference: "Ecclesiastes 1:7",
  },
  {
    question:
      "Which two human senses are specifically described as never being satisfied?",
    options: [
      "The eye with seeing and the ear with hearing",
      "The mouth with eating and the eye with seeing",
      "The ear with hearing and the mouth with speaking",
      "The hand with touching and the eye with seeing",
    ],
    answer: "The eye with seeing and the ear with hearing",
    reference: "Ecclesiastes 1:8",
  },
  {
    question:
      "What principle does the Teacher state concerning what has already happened and what will happen?",
    options: [
      "What has been will be again, and what has been done will be done again",
      "Everything changes from one generation to another",
      "The future always improves upon the past",
      "Nothing that has happened can happen again",
    ],
    answer:
      "What has been will be again, and what has been done will be done again",
    reference: "Ecclesiastes 1:9",
  },
  {
    question:
      "What does the Teacher say about claims that something is genuinely new?",
    options: [
      "It already existed long ago before our time",
      "Only God can create something new",
      "New things appear only once in a generation",
      "Such claims are always made by fools",
    ],
    answer: "It already existed long ago before our time",
    reference: "Ecclesiastes 1:10",
  },
  {
    question:
      "What happens to the memory of former generations?",
    options: [
      "They are not remembered, and later generations will likewise be forgotten",
      "They are preserved by the wise",
      "Their works are remembered forever",
      "Only kings are remembered",
    ],
    answer:
      "They are not remembered, and later generations will likewise be forgotten",
    reference: "Ecclesiastes 1:11",
  },
  {
    question:
      "What task did the Teacher set his mind to undertake concerning everything done under heaven?",
    options: [
      "To study and explore it by wisdom",
      "To judge whether it was righteous",
      "To record it for later generations",
      "To discover its beginning",
    ],
    answer: "To study and explore it by wisdom",
    reference: "Ecclesiastes 1:13",
  },
  {
    question:
      "What does the Teacher call the burden God has laid on the human race?",
    options: [
      "A heavy burden with which people are occupied",
      "The pursuit of wealth",
      "The fear of death",
      "The struggle between wisdom and folly",
    ],
    answer: "A heavy burden with which people are occupied",
    reference: "Ecclesiastes 1:13",
  },
  {
    question:
      "What two images summarize the Teacher's observation of everything done under the sun?",
    options: [
      "Meaningless and a chasing after the wind",
      "Dust and ashes",
      "Smoke and shadows",
      "A passing cloud and fading flower",
    ],
    answer: "Meaningless and a chasing after the wind",
    reference: "Ecclesiastes 1:14",
  },
  {
    question:
      "What two impossibilities illustrate the limitations the Teacher observed?",
    options: [
      "What is crooked cannot be straightened, and what is lacking cannot be counted",
      "What is broken cannot be repaired, and what is lost cannot be found",
      "What is hidden cannot be known, and what is dead cannot return",
      "What is foolish cannot become wise, and what is poor cannot become rich",
    ],
    answer:
      "What is crooked cannot be straightened, and what is lacking cannot be counted",
    reference: "Ecclesiastes 1:15",
  },
  {
    question:
      "What did the Teacher claim concerning his wisdom compared with those who ruled Jerusalem before him?",
    options: [
      "He had increased in wisdom more than anyone who ruled Jerusalem before him",
      "He possessed the same wisdom as David",
      "He was wiser than every king on earth",
      "He had learned wisdom from previous kings",
    ],
    answer:
      "He had increased in wisdom more than anyone who ruled Jerusalem before him",
    reference: "Ecclesiastes 1:16",
  },
  {
    question:
      "Besides wisdom, what contrasting subjects did the Teacher apply himself to understand?",
    options: [
      "Madness and folly",
      "Justice and wickedness",
      "Pleasure and sorrow",
      "Life and death",
    ],
    answer: "Madness and folly",
    reference: "Ecclesiastes 1:17",
  },
  {
    question:
      "What increases alongside much wisdom and greater knowledge?",
    options: [
      "Sorrow and grief",
      "Responsibility and labor",
      "Pride and temptation",
      "Fear and uncertainty",
    ],
    answer: "Sorrow and grief",
    reference: "Ecclesiastes 1:18",
  },
  {
    question:
      "What did the Teacher decide to test himself with after his investigation of wisdom?",
    options: [
      "Pleasure",
      "Wealth",
      "Power",
      "Hard labor",
    ],
    answer: "Pleasure",
    reference: "Ecclesiastes 2:1",
  },
  {
    question:
      "What judgments does the Teacher make respectively about laughter and pleasure?",
    options: [
      "Laughter is madness, and pleasure accomplishes nothing",
      "Laughter is foolishness, and pleasure causes sorrow",
      "Laughter is temporary, and pleasure is deceptive",
      "Laughter is good, but pleasure is meaningless",
    ],
    answer: "Laughter is madness, and pleasure accomplishes nothing",
    reference: "Ecclesiastes 2:2",
  },
  {
    question:
      "While exploring the effects of wine, what did the Teacher say continued to guide him?",
    options: [
      "Wisdom",
      "Conscience",
      "The law",
      "Experience",
    ],
    answer: "Wisdom",
    reference: "Ecclesiastes 2:3",
  },
  {
    question:
      "Which major building and agricultural projects does the Teacher list among his accomplishments?",
    options: [
      "Houses, vineyards, gardens, parks, and fruit trees",
      "Palaces, temples, roads, and vineyards",
      "Cities, towers, fields, and forests",
      "Houses, walls, wells, and grain fields",
    ],
    answer: "Houses, vineyards, gardens, parks, and fruit trees",
    reference: "Ecclesiastes 2:4-5",
  },
  {
    question:
      "For what purpose did the Teacher construct reservoirs?",
    options: [
      "To water groves of flourishing trees",
      "To provide drinking water for Jerusalem",
      "To irrigate vineyards only",
      "To supply his livestock",
    ],
    answer: "To water groves of flourishing trees",
    reference: "Ecclesiastes 2:6",
  },
  {
    question:
      "What does the Teacher say about the number of his herds and flocks?",
    options: [
      "He owned more than anyone in Jerusalem before him",
      "They numbered twelve thousand",
      "They exceeded those of every king in Israel",
      "He eventually sold them all",
    ],
    answer: "He owned more than anyone in Jerusalem before him",
    reference: "Ecclesiastes 2:7",
  },
  {
    question:
      "From whom did the Teacher gather treasures of silver and gold?",
    options: [
      "Kings and provinces",
      "Merchants and foreign nations",
      "Tribute-paying servants",
      "The rulers of Judah",
    ],
    answer: "Kings and provinces",
    reference: "Ecclesiastes 2:8",
  },
  {
    question:
      "What forms of entertainment does the Teacher specifically mention acquiring?",
    options: [
      "Male and female singers",
      "Musicians and dancers",
      "Harpists and flute players",
      "Actors and singers",
    ],
    answer: "Male and female singers",
    reference: "Ecclesiastes 2:8",
  },
  {
    question:
      "What remained with the Teacher despite his increasing greatness?",
    options: [
      "His wisdom",
      "His humility",
      "His fear of God",
      "His sorrow",
    ],
    answer: "His wisdom",
    reference: "Ecclesiastes 2:9",
  },
  {
    question:
      "What did the Teacher refuse his eyes during his experiment with pleasure?",
    options: [
      "Nothing they desired",
      "The sight of evil",
      "Luxury from foreign lands",
      "Anything belonging to another",
    ],
    answer: "Nothing they desired",
    reference: "Ecclesiastes 2:10",
  },
  {
    question:
      "What immediate reward did the Teacher identify from all his labor?",
    options: [
      "His heart took delight in his work",
      "He became famous",
      "His possessions increased",
      "He gained greater wisdom",
    ],
    answer: "His heart took delight in his work",
    reference: "Ecclesiastes 2:10",
  },
  {
    question:
      "After surveying all his achievements and labor, what did the Teacher conclude?",
    options: [
      "Everything was meaningless, a chasing after the wind, with nothing gained under the sun",
      "Wisdom alone made his labor worthwhile",
      "His achievements would preserve his name",
      "His wealth had been worth the effort",
    ],
    answer:
      "Everything was meaningless, a chasing after the wind, with nothing gained under the sun",
    reference: "Ecclesiastes 2:11",
  },
  {
    question:
      "What advantage does wisdom have over folly according to the Teacher's comparison?",
    options: [
      "As light has advantage over darkness",
      "As gold has advantage over silver",
      "As life has advantage over death",
      "As strength has advantage over weakness",
    ],
    answer: "As light has advantage over darkness",
    reference: "Ecclesiastes 2:13",
  },
  {
    question:
      "What physical imagery distinguishes the wise person from the fool?",
    options: [
      "The wise have eyes in their heads, while fools walk in darkness",
      "The wise walk upright, while fools stumble",
      "The wise see far away, while fools are blind",
      "The wise follow light, while fools hide from it",
    ],
    answer:
      "The wise have eyes in their heads, while fools walk in darkness",
    reference: "Ecclesiastes 2:14",
  },
  {
    question:
      "What common destiny caused the Teacher to question the ultimate advantage of wisdom?",
    options: [
      "The same fate overtakes both the wise person and the fool",
      "Both eventually lose their wealth",
      "Both are forgotten by their children",
      "Both experience suffering",
    ],
    answer: "The same fate overtakes both the wise person and the fool",
    reference: "Ecclesiastes 2:14-15",
  },
  {
    question:
      "Why does the Teacher say neither the wise nor the fool will be remembered forever?",
    options: [
      "In days to come both will be forgotten",
      "Their writings will be destroyed",
      "Their descendants will forget them",
      "Future kings will replace their achievements",
    ],
    answer: "In days to come both will be forgotten",
    reference: "Ecclesiastes 2:16",
  },
  {
    question:
      "Why did the Teacher come to hate life?",
    options: [
      "Because the work done under the sun was grievous to him and seemed meaningless",
      "Because wisdom increased his suffering",
      "Because his possessions caused conflict",
      "Because death came to everyone",
    ],
    answer:
      "Because the work done under the sun was grievous to him and seemed meaningless",
    reference: "Ecclesiastes 2:17",
  },
  {
    question:
      "Why did the Teacher hate all the things for which he had labored under the sun?",
    options: [
      "He had to leave them to the person who came after him",
      "They could be destroyed by war",
      "They required constant maintenance",
      "They prevented him from resting",
    ],
    answer: "He had to leave them to the person who came after him",
    reference: "Ecclesiastes 2:18",
  },
  {
    question:
      "What uncertainty troubled the Teacher concerning the person who would inherit his labor?",
    options: [
      "Whether the successor would be wise or foolish",
      "Whether the successor would be his son",
      "Whether the successor would preserve Jerusalem",
      "Whether the successor would fear God",
    ],
    answer: "Whether the successor would be wise or foolish",
    reference: "Ecclesiastes 2:19",
  },
  {
    question:
      "What particularly troubling situation does the Teacher describe concerning inheritance?",
    options: [
      "A person may labor with wisdom, knowledge, and skill only to leave everything to someone who did not work for it",
      "A wise person's children may become poor",
      "Foreigners may inherit a person's property",
      "A king may confiscate a worker's possessions",
    ],
    answer:
      "A person may labor with wisdom, knowledge, and skill only to leave everything to someone who did not work for it",
    reference: "Ecclesiastes 2:21",
  },
  {
    question:
      "What does the Teacher say happens to a worker's mind even at night?",
    options: [
      "It does not rest",
      "It dreams about wealth",
      "It plans the next day's work",
      "It remembers past mistakes",
    ],
    answer: "It does not rest",
    reference: "Ecclesiastes 2:23",
  },
  {
    question:
      "What simple enjoyment does the Teacher identify as coming from the hand of God?",
    options: [
      "Eating, drinking, and finding satisfaction in one's own toil",
      "Accumulating possessions",
      "Living without labor",
      "Receiving an inheritance",
    ],
    answer: "Eating, drinking, and finding satisfaction in one's own toil",
    reference: "Ecclesiastes 2:24",
  },
  {
    question:
      "What does God give to the person who pleases Him?",
    options: [
      "Wisdom, knowledge, and happiness",
      "Riches, honor, and long life",
      "Power, wisdom, and peace",
      "Children, wealth, and health",
    ],
    answer: "Wisdom, knowledge, and happiness",
    reference: "Ecclesiastes 2:26",
  },
  {
    question:
      "What task is given to the sinner in contrast with the person who pleases God?",
    options: [
      "Gathering and storing wealth to hand it over to one who pleases God",
      "Working without ever enjoying food",
      "Serving the wise",
      "Building possessions for future generations",
    ],
    answer:
      "Gathering and storing wealth to hand it over to one who pleases God",
    reference: "Ecclesiastes 2:26",
  },
  {
    question:
      "What general principle introduces the poem about life's changing circumstances?",
    options: [
      "There is a time for everything and a season for every activity under heaven",
      "Everything happens by chance",
      "Every generation repeats the same events",
      "Human beings determine the proper time for everything",
    ],
    answer:
      "There is a time for everything and a season for every activity under heaven",
    reference: "Ecclesiastes 3:1",
  },
  {
    question:
      "Which pair immediately follows the time to be born and the time to die?",
    options: [
      "A time to plant and a time to uproot",
      "A time to kill and a time to heal",
      "A time to weep and a time to laugh",
      "A time to build and a time to tear down",
    ],
    answer: "A time to plant and a time to uproot",
    reference: "Ecclesiastes 3:2",
  },
  {
    question:
      "Which action is paired with healing in the poem about appointed times?",
    options: [
      "Killing",
      "Weeping",
      "Breaking down",
      "Mourning",
    ],
    answer: "Killing",
    reference: "Ecclesiastes 3:3",
  },
  {
    question:
      "Which activity is paired with dancing?",
    options: [
      "Mourning",
      "Laughing",
      "Embracing",
      "Rejoicing",
    ],
    answer: "Mourning",
    reference: "Ecclesiastes 3:4",
  },
  {
    question:
      "What action is paired with gathering stones?",
    options: [
      "Scattering stones",
      "Building walls",
      "Planting fields",
      "Removing stones",
    ],
    answer: "Scattering stones",
    reference: "Ecclesiastes 3:5",
  },
  {
    question:
      "What action is paired with refraining from embracing?",
    options: [
      "Embracing",
      "Searching",
      "Mourning",
      "Keeping",
    ],
    answer: "Embracing",
    reference: "Ecclesiastes 3:5",
  },
  {
    question:
      "Which pair concerning possessions appears in the sequence of appointed times?",
    options: [
      "A time to keep and a time to throw away",
      "A time to buy and a time to sell",
      "A time to gain and a time to lose",
      "A time to store and a time to distribute",
    ],
    answer: "A time to keep and a time to throw away",
    reference: "Ecclesiastes 3:6",
  },
  {
    question:
      "What activity is paired with sewing?",
    options: [
      "Tearing",
      "Weaving",
      "Keeping",
      "Mending",
    ],
    answer: "Tearing",
    reference: "Ecclesiastes 3:7",
  },
  {
    question:
      "What activity is paired with speaking?",
    options: [
      "Being silent",
      "Listening",
      "Thinking",
      "Teaching",
    ],
    answer: "Being silent",
    reference: "Ecclesiastes 3:7",
  },
  {
    question:
      "What final pair concludes the poem about appointed times?",
    options: [
      "A time for war and a time for peace",
      "A time to love and a time to hate",
      "A time to speak and a time to remain silent",
      "A time to mourn and a time to dance",
    ],
    answer: "A time for war and a time for peace",
    reference: "Ecclesiastes 3:8",
  },
  {
    question:
      "What has God made beautiful in its time?",
    options: [
      "Everything",
      "Wisdom",
      "Creation",
      "Human labor",
    ],
    answer: "Everything",
    reference: "Ecclesiastes 3:11",
  },
  {
    question:
      "What has God set in the human heart even though people cannot fathom His work from beginning to end?",
    options: [
      "Eternity",
      "Wisdom",
      "Desire",
      "Knowledge",
    ],
    answer: "Eternity",
    reference: "Ecclesiastes 3:11",
  },
  {
    question:
      "What does the Teacher say is God's gift regarding ordinary human life?",
    options: [
      "To eat, drink, and find satisfaction in one's labor",
      "To understand every mystery",
      "To accumulate wealth",
      "To avoid suffering",
    ],
    answer: "To eat, drink, and find satisfaction in one's labor",
    reference: "Ecclesiastes 3:13",
  },
  {
    question:
      "Why does the Teacher say God's works endure forever without addition or subtraction?",
    options: [
      "God does it so people will fear Him",
      "God wants creation never to change",
      "Human beings cannot alter divine plans",
      "God wants people to stop working",
    ],
    answer: "God does it so people will fear Him",
    reference: "Ecclesiastes 3:14",
  },
  {
    question:
      "What disturbing substitution does the Teacher observe in the place of judgment and justice?",
    options: [
      "Wickedness",
      "Ignorance",
      "Oppression",
      "Corruption",
    ],
    answer: "Wickedness",
    reference: "Ecclesiastes 3:16",
  },
  {
    question:
      "What does the Teacher say God will eventually do to both righteous and wicked?",
    options: [
      "Bring them into judgment",
      "Cause them to prosper",
      "Make their deeds known",
      "Separate them during life",
    ],
    answer: "Bring them into judgment",
    reference: "Ecclesiastes 3:17",
  },
  {
    question:
      "What does the Teacher say God tests humans to show them concerning themselves?",
    options: [
      "That they are like animals",
      "That they lack wisdom",
      "That they cannot control death",
      "That they depend on creation",
    ],
    answer: "That they are like animals",
    reference: "Ecclesiastes 3:18",
  },
  {
    question:
      "What common fate do humans and animals share in the Teacher's observation?",
    options: [
      "As one dies, so dies the other, and both have the same breath",
      "Both return immediately to God",
      "Both are forgotten",
      "Both labor for food",
    ],
    answer:
      "As one dies, so dies the other, and both have the same breath",
    reference: "Ecclesiastes 3:19",
  },
  {
    question:
      "Where do humans and animals alike go according to the Teacher's description?",
    options: [
      "To the same place, coming from dust and returning to dust",
      "To separate appointed places",
      "Into the earth but by different paths",
      "Into forgetfulness",
    ],
    answer:
      "To the same place, coming from dust and returning to dust",
    reference: "Ecclesiastes 3:20",
  },
  {
    question:
      "What question does the Teacher raise about the spirits of humans and animals?",
    options: [
      "Who knows whether the human spirit rises upward and the animal spirit goes down into the earth?",
      "Whether animals possess spirits",
      "Whether human spirits remember earthly life",
      "Whether both spirits return to God",
    ],
    answer:
      "Who knows whether the human spirit rises upward and the animal spirit goes down into the earth?",
    reference: "Ecclesiastes 3:21",
  },
  {
    question:
      "What does the Teacher say is a person's proper portion in relation to work?",
    options: [
      "To enjoy their work",
      "To leave it to their children",
      "To use it to gain honor",
      "To work only when necessary",
    ],
    answer: "To enjoy their work",
    reference: "Ecclesiastes 3:22",
  },
  {
    question:
      "What did the Teacher observe accompanying the tears of the oppressed?",
    options: [
      "They had no comforter, while power was on the side of their oppressors",
      "Their families had abandoned them",
      "Their rulers ignored them",
      "Their wealth had been taken",
    ],
    answer:
      "They had no comforter, while power was on the side of their oppressors",
    reference: "Ecclesiastes 4:1",
  },
  {
    question:
      "Whom did the Teacher consider happier than both the living and the dead?",
    options: [
      "The one who has never been born and has not seen the evil done under the sun",
      "The righteous person",
      "The poor person",
      "The wise person",
    ],
    answer:
      "The one who has never been born and has not seen the evil done under the sun",
    reference: "Ecclesiastes 4:2-3",
  },
  {
    question:
      "What motivation does the Teacher identify behind much human toil and achievement?",
    options: [
      "Envy of one person toward another",
      "Fear of poverty",
      "Desire for honor",
      "Love of wealth",
    ],
    answer: "Envy of one person toward another",
    reference: "Ecclesiastes 4:4",
  },
  {
    question:
      "What does the fool do with his hands while ruining himself?",
    options: [
      "Folds them",
      "Raises them",
      "Hides them",
      "Works them excessively",
    ],
    answer: "Folds them",
    reference: "Ecclesiastes 4:5",
  },
  {
    question:
      "What is better than two handfuls accompanied by toil and chasing after the wind?",
    options: [
      "One handful with tranquility",
      "One handful with wisdom",
      "A little wealth with friends",
      "One meal with peace",
    ],
    answer: "One handful with tranquility",
    reference: "Ecclesiastes 4:6",
  },
  {
    question:
      "What is unusual about the solitary worker whose endless labor the Teacher describes?",
    options: [
      "He has neither son nor brother",
      "He has no wife",
      "He has no servants",
      "He has no inheritance",
    ],
    answer: "He has neither son nor brother",
    reference: "Ecclesiastes 4:8",
  },
  {
    question:
      "What question does the solitary worker fail to ask himself?",
    options: [
      "For whom am I toiling and depriving myself of enjoyment?",
      "Who will inherit my wealth?",
      "Why has God given me this work?",
      "When will I have enough?",
    ],
    answer:
      "For whom am I toiling and depriving myself of enjoyment?",
    reference: "Ecclesiastes 4:8",
  },
  {
    question:
      "Why are two said to be better than one?",
    options: [
      "They have a good return for their labor",
      "They can become wealthy faster",
      "They can defeat every enemy",
      "They can share possessions equally",
    ],
    answer: "They have a good return for their labor",
    reference: "Ecclesiastes 4:9",
  },
  {
    question:
      "What practical advantage of companionship is given concerning falling?",
    options: [
      "One can help the other up",
      "One can prevent the other from falling",
      "One can call for help",
      "One can carry the other's burden",
    ],
    answer: "One can help the other up",
    reference: "Ecclesiastes 4:10",
  },
  {
    question:
      "What second practical advantage of companionship concerns cold?",
    options: [
      "Two lying together can keep warm",
      "Two can build a fire",
      "Two can share clothing",
      "Two can find shelter",
    ],
    answer: "Two lying together can keep warm",
    reference: "Ecclesiastes 4:11",
  },
  {
    question:
      "What image concludes the Teacher's observations about the strength of companionship?",
    options: [
      "A cord of three strands is not quickly broken",
      "Three sticks cannot be snapped",
      "A triple wall cannot be breached",
      "Three ropes can pull any burden",
    ],
    answer: "A cord of three strands is not quickly broken",
    reference: "Ecclesiastes 4:12",
  },
  {
    question:
      "Who is considered better than an old but foolish king?",
    options: [
      "A poor but wise youth",
      "A wealthy young prince",
      "A wise servant",
      "A poor elder",
    ],
    answer: "A poor but wise youth",
    reference: "Ecclesiastes 4:13",
  },
  {
    question:
      "What fault characterizes the old foolish king?",
    options: [
      "He no longer knows how to heed a warning",
      "He refuses to listen to priests",
      "He oppresses the poor",
      "He trusts in wealth",
    ],
    answer: "He no longer knows how to heed a warning",
    reference: "Ecclesiastes 4:13",
  },
  {
    question:
      "From what circumstances can the wise youth rise to kingship?",
    options: [
      "He may have come from prison or been born in poverty within the kingdom",
      "He may have served as a soldier",
      "He may have been adopted by the king",
      "He may have been a foreign slave",
    ],
    answer:
      "He may have come from prison or been born in poverty within the kingdom",
    reference: "Ecclesiastes 4:14",
  },
  {
    question:
      "What eventually happens to enthusiasm for the young successor?",
    options: [
      "Later generations are not pleased with him",
      "He is overthrown immediately",
      "The old king regains support",
      "His subjects forget his wisdom",
    ],
    answer: "Later generations are not pleased with him",
    reference: "Ecclesiastes 4:16",
  },
  {
    question:
      "What should a person guard when going to the house of God?",
    options: [
      "Their steps",
      "Their tongue",
      "Their thoughts",
      "Their offering",
    ],
    answer: "Their steps",
    reference: "Ecclesiastes 5:1",
  },
  {
    question:
      "What is better than offering the sacrifice of fools?",
    options: [
      "Drawing near to listen",
      "Giving a larger offering",
      "Remaining silent",
      "Fasting",
    ],
    answer: "Drawing near to listen",
    reference: "Ecclesiastes 5:1",
  },
  {
    question:
      "Why should words before God be few?",
    options: [
      "God is in heaven and humans are on earth",
      "God already knows every thought",
      "Many words reveal foolishness",
      "Prayer should always be brief",
    ],
    answer: "God is in heaven and humans are on earth",
    reference: "Ecclesiastes 5:2",
  },
  {
    question:
      "What two things arise respectively from many cares and many words?",
    options: [
      "A dream from many cares and a fool's speech from many words",
      "Fear from many cares and sin from many words",
      "Sleeplessness from many cares and lies from many words",
      "Wisdom from many cares and foolishness from many words",
    ],
    answer:
      "A dream from many cares and a fool's speech from many words",
    reference: "Ecclesiastes 5:3",
  },
  {
    question:
      "What should a person do after making a vow to God?",
    options: [
      "Fulfill it without delay",
      "Wait for confirmation",
      "Tell a priest",
      "Offer a sacrifice first",
    ],
    answer: "Fulfill it without delay",
    reference: "Ecclesiastes 5:4",
  },
  {
    question:
      "What is better than making a vow and failing to fulfill it?",
    options: [
      "Not making a vow",
      "Making a smaller vow",
      "Asking forgiveness",
      "Delaying the vow",
    ],
    answer: "Not making a vow",
    reference: "Ecclesiastes 5:5",
  },
  {
    question:
      "What excuse is a person warned not to make to God's messenger after a careless vow?",
    options: [
      "My vow was a mistake",
      "I forgot my promise",
      "I lacked the money",
      "I did not understand",
    ],
    answer: "My vow was a mistake",
    reference: "Ecclesiastes 5:6",
  },
  {
    question:
      "What should a person do instead of being consumed by many dreams and many words?",
    options: [
      "Fear God",
      "Remain silent",
      "Seek wisdom",
      "Work diligently",
    ],
    answer: "Fear God",
    reference: "Ecclesiastes 5:7",
  },
  {
    question:
      "Why should oppression and denial of justice in a province not be surprising?",
    options: [
      "One official is watched by a higher one, and still higher officials watch them",
      "All governments eventually become corrupt",
      "Kings cannot know everything",
      "The poor have always been oppressed",
    ],
    answer:
      "One official is watched by a higher one, and still higher officials watch them",
    reference: "Ecclesiastes 5:8",
  },
  {
    question:
      "What does the person who loves money never have?",
    options: [
      "Enough money",
      "Peace",
      "Wisdom",
      "Friends",
    ],
    answer: "Enough money",
    reference: "Ecclesiastes 5:10",
  },
  {
    question:
      "What happens as goods increase?",
    options: [
      "Those who consume them also increase",
      "Responsibility decreases",
      "Their value increases",
      "The owner's satisfaction increases",
    ],
    answer: "Those who consume them also increase",
    reference: "Ecclesiastes 5:11",
  },
  {
    question:
      "What advantage does the owner of abundant goods ultimately have according to the Teacher?",
    options: [
      "Merely looking at them",
      "Leaving them as inheritance",
      "Receiving honor",
      "Employing many servants",
    ],
    answer: "Merely looking at them",
    reference: "Ecclesiastes 5:11",
  },
  {
    question:
      "Whose sleep is described as sweet whether he eats little or much?",
    options: [
      "The laborer",
      "The poor man",
      "The wise man",
      "The farmer",
    ],
    answer: "The laborer",
    reference: "Ecclesiastes 5:12",
  },
  {
    question:
      "What prevents the rich person from sleeping?",
    options: [
      "Abundance",
      "Fear of thieves",
      "Business concerns",
      "Overeating",
    ],
    answer: "Abundance",
    reference: "Ecclesiastes 5:12",
  },
  {
    question:
      "What grievous evil involving wealth does the Teacher describe?",
    options: [
      "Wealth hoarded to the harm of its owner",
      "Wealth inherited by fools",
      "Wealth gained through oppression",
      "Wealth stolen by rulers",
    ],
    answer: "Wealth hoarded to the harm of its owner",
    reference: "Ecclesiastes 5:13",
  },
  {
    question:
      "What can happen to hoarded wealth through misfortune?",
    options: [
      "It can be lost, leaving nothing for one's children",
      "It can be confiscated by the king",
      "It can cause family conflict",
      "It can be destroyed by fire",
    ],
    answer: "It can be lost, leaving nothing for one's children",
    reference: "Ecclesiastes 5:14",
  },
  {
    question:
      "What can a person take from earthly labor at death?",
    options: [
      "Nothing in their hands",
      "Only their reputation",
      "Only wisdom",
      "Their good deeds",
    ],
    answer: "Nothing in their hands",
    reference: "Ecclesiastes 5:15",
  },
  {
    question:
      "What does the Teacher describe as good and appropriate during the few days God gives a person?",
    options: [
      "Eating, drinking, and finding satisfaction in labor",
      "Accumulating enough wealth for descendants",
      "Avoiding difficult work",
      "Seeking wisdom above all else",
    ],
    answer: "Eating, drinking, and finding satisfaction in labor",
    reference: "Ecclesiastes 5:18",
  },
  {
    question:
      "What ability must God give along with wealth and possessions for them to become a gift?",
    options: [
      "The ability to enjoy them and accept one's lot",
      "The wisdom to preserve them",
      "The ability to give them away",
      "The strength to increase them",
    ],
    answer: "The ability to enjoy them and accept one's lot",
    reference: "Ecclesiastes 5:19",
  },
  {
    question:
      "Why does the person enabled by God to enjoy life seldom reflect gloomily on the days of life?",
    options: [
      "God keeps that person occupied with gladness of heart",
      "The person has no troubles",
      "Wealth removes anxiety",
      "The person forgets the past",
    ],
    answer: "God keeps that person occupied with gladness of heart",
    reference: "Ecclesiastes 5:20",
  },
  {
    question:
      "What misfortune does the Teacher describe concerning a person given wealth, possessions, and honor?",
    options: [
      "God may not enable the person to enjoy them, and a stranger enjoys them instead",
      "The person's children may steal them",
      "The king may confiscate them",
      "The person may lose them through war",
    ],
    answer:
      "God may not enable the person to enjoy them, and a stranger enjoys them instead",
    reference: "Ecclesiastes 6:1-2",
  },
  {
    question:
      "Even if a man fathers a hundred children and lives many years, what can make his condition tragic?",
    options: [
      "He does not enjoy his prosperity and does not receive a proper burial",
      "His children reject him",
      "He loses his wealth before death",
      "He never becomes wise",
    ],
    answer:
      "He does not enjoy his prosperity and does not receive a proper burial",
    reference: "Ecclesiastes 6:3",
  },
  {
    question:
      "Who does the Teacher say is better off than the person who has many children and years but no enjoyment?",
    options: [
      "A stillborn child",
      "A poor wise man",
      "A childless man",
      "A servant",
    ],
    answer: "A stillborn child",
    reference: "Ecclesiastes 6:3",
  },
  {
    question:
      "How does the Teacher describe the arrival and departure of the stillborn child?",
    options: [
      "It comes without meaning, departs in darkness, and its name is shrouded in darkness",
      "It comes silently and returns to dust",
      "It comes without knowledge and departs without sorrow",
      "It arrives briefly and is immediately forgotten",
    ],
    answer:
      "It comes without meaning, departs in darkness, and its name is shrouded in darkness",
    reference: "Ecclesiastes 6:4",
  },
  {
    question:
      "What has the stillborn child never seen or known?",
    options: [
      "The sun",
      "Its parents",
      "Good and evil",
      "Labor",
    ],
    answer: "The sun",
    reference: "Ecclesiastes 6:5",
  },
  {
    question:
      "Even if a person lives two thousand years without enjoying prosperity, what common destination remains?",
    options: [
      "Everyone goes to the same place",
      "Everyone returns to Jerusalem",
      "Everyone enters judgment",
      "Everyone is forgotten",
    ],
    answer: "Everyone goes to the same place",
    reference: "Ecclesiastes 6:6",
  },
  {
    question:
      "For what does all human labor ultimately serve according to the Teacher?",
    options: [
      "The mouth, yet the appetite is never satisfied",
      "The family",
      "The future",
      "The accumulation of possessions",
    ],
    answer: "The mouth, yet the appetite is never satisfied",
    reference: "Ecclesiastes 6:7",
  },
  {
    question:
      "What is better than the wandering of appetite?",
    options: [
      "What the eyes see",
      "Wisdom",
      "Contentment with little",
      "Hard work",
    ],
    answer: "What the eyes see",
    reference: "Ecclesiastes 6:9",
  },
  {
    question:
      "What does the Teacher say has already been named?",
    options: [
      "Whatever exists",
      "Every person",
      "Every human desire",
      "Every future event",
    ],
    answer: "Whatever exists",
    reference: "Ecclesiastes 6:10",
  },
  {
    question:
      "What limitation is stated about a human being's ability to contend?",
    options: [
      "A person cannot contend with one who is stronger",
      "A person cannot contend with death",
      "A poor person cannot contend with a king",
      "A fool cannot contend with wisdom",
    ],
    answer: "A person cannot contend with one who is stronger",
    reference: "Ecclesiastes 6:10",
  },
  {
    question:
      "What effect do more words have according to the Teacher?",
    options: [
      "They increase meaninglessness without benefiting anyone",
      "They increase wisdom",
      "They reveal the heart",
      "They produce conflict",
    ],
    answer: "They increase meaninglessness without benefiting anyone",
    reference: "Ecclesiastes 6:11",
  },
  {
    question:
      "How are a person's few days of meaningless life compared?",
    options: [
      "A shadow",
      "A breath",
      "A flower",
      "Smoke",
    ],
    answer: "A shadow",
    reference: "Ecclesiastes 6:12",
  },
  {
    question:
      "What two things does the Teacher say humans do not know concerning life?",
    options: [
      "What is good for them during life and what will happen after they are gone",
      "When they will die and who will inherit their possessions",
      "Why they suffer and when prosperity will come",
      "How God judges and where the dead go",
    ],
    answer:
      "What is good for them during life and what will happen after they are gone",
    reference: "Ecclesiastes 6:12",
  },
  {
    question:
      "What is said to be better than fine perfume?",
    options: [
      "A good name",
      "Wisdom",
      "A good reputation before kings",
      "The fear of God",
    ],
    answer: "A good name",
    reference: "Ecclesiastes 7:1",
  },
  {
    question:
      "What day is said to be better than the day of birth?",
    options: [
      "The day of death",
      "The day of marriage",
      "The day wisdom is gained",
      "The day of prosperity",
    ],
    answer: "The day of death",
    reference: "Ecclesiastes 7:1",
  },
  {
    question:
      "Why is going to a house of mourning considered better than going to a house of feasting?",
    options: [
      "Death is everyone's destiny, and the living should take it to heart",
      "Mourning produces wisdom automatically",
      "Feasting leads to foolishness",
      "The dead teach more than the living",
    ],
    answer:
      "Death is everyone's destiny, and the living should take it to heart",
    reference: "Ecclesiastes 7:2",
  },
  {
    question:
      "Why is frustration or sorrow considered better than laughter?",
    options: [
      "A sad face may be good for the heart",
      "Laughter always produces folly",
      "Sorrow makes a person righteous",
      "Frustration produces wealth",
    ],
    answer: "A sad face may be good for the heart",
    reference: "Ecclesiastes 7:3",
  },
  {
    question:
      "Where is the heart of the wise contrasted with the heart of fools?",
    options: [
      "The wise heart is in the house of mourning, while the fool's heart is in the house of pleasure",
      "The wise heart is in the temple, while the fool's is in the marketplace",
      "The wise heart is with the poor, while the fool's is with the rich",
      "The wise heart is in solitude, while the fool's is at a feast",
    ],
    answer:
      "The wise heart is in the house of mourning, while the fool's heart is in the house of pleasure",
    reference: "Ecclesiastes 7:4",
  },
  {
    question:
      "What is better than listening to the song of fools?",
    options: [
      "Listening to the rebuke of the wise",
      "Remaining silent",
      "Listening to mourning",
      "Receiving instruction from a king",
    ],
    answer: "Listening to the rebuke of the wise",
    reference: "Ecclesiastes 7:5",
  },
  {
    question:
      "To what is the laughter of fools compared?",
    options: [
      "The crackling of thorns under a pot",
      "The sound of empty jars",
      "The barking of dogs",
      "Wind through dry grass",
    ],
    answer: "The crackling of thorns under a pot",
    reference: "Ecclesiastes 7:6",
  },
  {
    question:
      "What can extortion do to a wise person?",
    options: [
      "Turn the wise into a fool",
      "Make the wise poor",
      "Cause the wise to become angry",
      "Destroy the wise person's reputation",
    ],
    answer: "Turn the wise into a fool",
    reference: "Ecclesiastes 7:7",
  },
  {
    question:
      "What can a bribe corrupt?",
    options: [
      "The heart",
      "Justice",
      "The mind",
      "A ruler",
    ],
    answer: "The heart",
    reference: "Ecclesiastes 7:7",
  },
  {
    question:
      "What is better than the beginning of a matter?",
    options: [
      "Its end",
      "Its planning",
      "Its purpose",
      "Its result only if successful",
    ],
    answer: "Its end",
    reference: "Ecclesiastes 7:8",
  },
  {
    question:
      "What character quality is better than pride?",
    options: [
      "Patience",
      "Humility",
      "Wisdom",
      "Gentleness",
    ],
    answer: "Patience",
    reference: "Ecclesiastes 7:8",
  },
  {
    question:
      "Where does anger lodge according to the Teacher?",
    options: [
      "In the lap of fools",
      "In the heart of kings",
      "In the mouth of the wicked",
      "In the mind of the proud",
    ],
    answer: "In the lap of fools",
    reference: "Ecclesiastes 7:9",
  },
  {
    question:
      "Why does the Teacher discourage asking why former days were better?",
    options: [
      "Such a question does not come from wisdom",
      "The former days were actually worse",
      "No one remembers the past correctly",
      "God forbids comparison with the past",
    ],
    answer: "Such a question does not come from wisdom",
    reference: "Ecclesiastes 7:10",
  },
  {
    question:
      "What advantage does wisdom share with money?",
    options: [
      "Both provide protection",
      "Both produce happiness",
      "Both give honor",
      "Both can be inherited",
    ],
    answer: "Both provide protection",
    reference: "Ecclesiastes 7:12",
  },
  {
    question:
      "What advantage does knowledge have beyond the protection offered by money?",
    options: [
      "Wisdom preserves the life of the one who possesses it",
      "Knowledge produces wealth",
      "Wisdom guarantees long life",
      "Knowledge prevents suffering",
    ],
    answer: "Wisdom preserves the life of the one who possesses it",
    reference: "Ecclesiastes 7:12",
  },
  {
    question:
      "What question is asked concerning what God has made crooked?",
    options: [
      "Who can straighten what He has made crooked?",
      "Why did God make it crooked?",
      "Can wisdom understand it?",
      "Will God eventually straighten it?",
    ],
    answer: "Who can straighten what He has made crooked?",
    reference: "Ecclesiastes 7:13",
  },
  {
    question:
      "What should a person do respectively in good times and bad times?",
    options: [
      "Be happy in good times and consider God's work in bad times",
      "Give thanks in good times and remain silent in bad times",
      "Work in good times and rest in bad times",
      "Enjoy wealth in good times and seek wisdom in bad times",
    ],
    answer:
      "Be happy in good times and consider God's work in bad times",
    reference: "Ecclesiastes 7:14",
  },
  {
    question:
      "Why has God made both good times and bad times?",
    options: [
      "So no one can discover anything about the future",
      "To test whether humans fear Him",
      "To reward the wise and punish fools",
      "To make people appreciate prosperity",
    ],
    answer: "So no one can discover anything about the future",
    reference: "Ecclesiastes 7:14",
  },
  {
    question:
      "What disturbing reversal had the Teacher observed during his meaningless life?",
    options: [
      "A righteous person perishing despite righteousness and a wicked person living long despite wickedness",
      "The poor becoming rich while the wealthy became poor",
      "Fools ruling over wise people",
      "Children dying while old people lived",
    ],
    answer:
      "A righteous person perishing despite righteousness and a wicked person living long despite wickedness",
    reference: "Ecclesiastes 7:15",
  },
  {
    question:
      "What two extremes does the Teacher warn against?",
    options: [
      "Being overly righteous or overly wise, and being overly wicked or foolish",
      "Being too wealthy or too poor",
      "Working too hard or being too lazy",
      "Speaking too much or remaining completely silent",
    ],
    answer:
      "Being overly righteous or overly wise, and being overly wicked or foolish",
    reference: "Ecclesiastes 7:16-17",
  },
  {
    question:
      "Who is said to avoid the dangerous extremes described by the Teacher?",
    options: [
      "Whoever fears God",
      "Whoever possesses wisdom",
      "Whoever obeys the king",
      "Whoever lives moderately",
    ],
    answer: "Whoever fears God",
    reference: "Ecclesiastes 7:18",
  },
  {
    question:
      "Wisdom makes one wise person more powerful than how many rulers in a city?",
    options: [
      "Ten",
      "Seven",
      "Twelve",
      "One hundred",
    ],
    answer: "Ten",
    reference: "Ecclesiastes 7:19",
  },
  {
    question:
      "What universal moral observation does the Teacher make about righteous people?",
    options: [
      "There is no righteous person on earth who always does good and never sins",
      "The righteous sometimes suffer more than the wicked",
      "No righteous person understands God's purposes",
      "All righteous people eventually become foolish",
    ],
    answer:
      "There is no righteous person on earth who always does good and never sins",
    reference: "Ecclesiastes 7:20",
  },
  {
    question:
      "Why should a person not pay attention to every word people say?",
    options: [
      "They may hear their own servant cursing them",
      "Most speech is meaningless",
      "People often exaggerate",
      "Listening encourages gossip",
    ],
    answer: "They may hear their own servant cursing them",
    reference: "Ecclesiastes 7:21",
  },
  {
    question:
      "What personal memory should restrain someone from reacting to others' curses?",
    options: [
      "They know in their heart that they themselves have often cursed others",
      "They have previously been forgiven",
      "They may have misunderstood the speaker",
      "They have also spoken foolishly",
    ],
    answer:
      "They know in their heart that they themselves have often cursed others",
    reference: "Ecclesiastes 7:22",
  },
  {
    question:
      "What did the Teacher say about wisdom when he determined to become wise?",
    options: [
      "It was far beyond him",
      "It immediately came to him",
      "It required wealth",
      "It could only be found in Jerusalem",
    ],
    answer: "It was far beyond him",
    reference: "Ecclesiastes 7:23",
  },
  {
    question:
      "How does the Teacher describe what exists in relation to human discovery?",
    options: [
      "Whatever exists is far off and profoundly deep",
      "Everything is hidden by God",
      "Creation is too large to understand",
      "Only the future is unknowable",
    ],
    answer: "Whatever exists is far off and profoundly deep",
    reference: "Ecclesiastes 7:24",
  },
  {
    question:
      "What did the Teacher turn his mind toward studying and understanding?",
    options: [
      "Wisdom, the scheme of things, wickedness as folly, and foolishness as madness",
      "The law, history, and prophecy",
      "Human government and wealth",
      "Pleasure, labor, and death",
    ],
    answer:
      "Wisdom, the scheme of things, wickedness as folly, and foolishness as madness",
    reference: "Ecclesiastes 7:25",
  },
  {
    question:
      "What does the Teacher describe as more bitter than death?",
    options: [
      "A woman whose heart is snares and nets and whose hands are chains",
      "Poverty",
      "Foolishness",
      "A life without wisdom",
    ],
    answer:
      "A woman whose heart is snares and nets and whose hands are chains",
    reference: "Ecclesiastes 7:26",
  },
  {
    question:
      "Who escapes the woman described as a snare?",
    options: [
      "The person who pleases God",
      "The wise man",
      "The married man",
      "The righteous king",
    ],
    answer: "The person who pleases God",
    reference: "Ecclesiastes 7:26",
  },
  {
    question:
      "What numerical observation does the Teacher report from his search among people?",
    options: [
      "He found one upright man among a thousand but not one upright woman among them",
      "He found ten wise men among a thousand",
      "He found one righteous person in Jerusalem",
      "He found seven wise women among a thousand",
    ],
    answer:
      "He found one upright man among a thousand but not one upright woman among them",
    reference: "Ecclesiastes 7:28",
  },
  {
    question:
      "What final conclusion does the Teacher give concerning humanity's original condition and later schemes?",
    options: [
      "God created mankind upright, but humans have gone in search of many schemes",
      "God created humanity wise, but people chose folly",
      "God created humanity innocent, but rulers corrupted them",
      "God created people equal, but wealth divided them",
    ],
    answer:
      "God created mankind upright, but humans have gone in search of many schemes",
    reference: "Ecclesiastes 7:29",
  },
  {
    question:
      "What effect does wisdom have on a person's face?",
    options: [
      "It brightens the face and changes its hard appearance",
      "It makes the face youthful",
      "It gives the face confidence",
      "It hides sorrow",
    ],
    answer: "It brightens the face and changes its hard appearance",
    reference: "Ecclesiastes 8:1",
  },
  {
    question:
      "Why does the Teacher advise obeying the king's command?",
    options: [
      "Because of the oath made before God",
      "Because kings possess absolute authority",
      "Because rebellion always leads to death",
      "Because rulers represent wisdom",
    ],
    answer: "Because of the oath made before God",
    reference: "Ecclesiastes 8:2",
  },
  {
    question:
      "What should a person not do when standing before a king?",
    options: [
      "Be in a hurry to leave the king's presence or stand up for a bad cause",
      "Speak before being addressed",
      "Question the king's wisdom",
      "Bring a complaint against an official",
    ],
    answer:
      "Be in a hurry to leave the king's presence or stand up for a bad cause",
    reference: "Ecclesiastes 8:3",
  },
  {
    question:
      "Why does the Teacher say no one can question a king by asking what he is doing?",
    options: [
      "The king's word is supreme",
      "The king was appointed by God",
      "The king knows the law",
      "The king controls the army",
    ],
    answer: "The king's word is supreme",
    reference: "Ecclesiastes 8:4",
  },
  {
    question:
      "What does a wise heart know concerning every matter?",
    options: [
      "The proper time and procedure",
      "Its final outcome",
      "God's hidden purpose",
      "Whether it is good or evil",
    ],
    answer: "The proper time and procedure",
    reference: "Ecclesiastes 8:5-6",
  },
  {
    question:
      "Why does misery weigh heavily upon a person despite there being a proper time and procedure?",
    options: [
      "No one knows what is coming or can tell when it will happen",
      "People refuse wise counsel",
      "The wicked control judgment",
      "Death may come unexpectedly",
    ],
    answer:
      "No one knows what is coming or can tell when it will happen",
    reference: "Ecclesiastes 8:6-7",
  },
  {
    question:
      "What four limitations does the Teacher mention concerning human control?",
    options: [
      "No one controls the wind, the day of death, release from war, or escape through wickedness",
      "No one controls rain, wealth, sickness, or death",
      "No one controls kings, armies, time, or judgment",
      "No one controls birth, death, wisdom, or wealth",
    ],
    answer:
      "No one controls the wind, the day of death, release from war, or escape through wickedness",
    reference: "Ecclesiastes 8:8",
  },
  {
    question:
      "What troubling sight involving wicked people and the holy place does the Teacher describe?",
    options: [
      "Wicked people were buried after coming and going from the holy place and were praised in the city",
      "Wicked people controlled the holy place",
      "Wicked people were denied burial",
      "Wicked people offered sacrifices publicly",
    ],
    answer:
      "Wicked people were buried after coming and going from the holy place and were praised in the city",
    reference: "Ecclesiastes 8:10",
  },
  {
    question:
      "What happens when the sentence for a crime is not quickly carried out?",
    options: [
      "People's hearts become filled with schemes to do wrong",
      "Judges lose authority",
      "Criminals become more violent",
      "The righteous become discouraged",
    ],
    answer:
      "People's hearts become filled with schemes to do wrong",
    reference: "Ecclesiastes 8:11",
  },
  {
    question:
      "Despite a wicked person committing many crimes and living long, with whom does the Teacher say things will ultimately go better?",
    options: [
      "Those who fear God",
      "The wise",
      "The poor",
      "Those who obey rulers",
    ],
    answer: "Those who fear God",
    reference: "Ecclesiastes 8:12",
  },
  {
    question:
      "What injustice does the Teacher call another meaningless thing occurring on earth?",
    options: [
      "The righteous sometimes receive what the wicked deserve, and the wicked what the righteous deserve",
      "The poor serve foolish rulers",
      "Wise people die young",
      "Foreigners inherit wealth",
    ],
    answer:
      "The righteous sometimes receive what the wicked deserve, and the wicked what the righteous deserve",
    reference: "Ecclesiastes 8:14",
  },
  {
    question:
      "What does the Teacher commend because it accompanies people in their labor during the life God gives them?",
    options: [
      "Enjoyment of eating, drinking, and gladness",
      "Wisdom",
      "Rest",
      "Wealth",
    ],
    answer: "Enjoyment of eating, drinking, and gladness",
    reference: "Ecclesiastes 8:15",
  },
  {
    question:
      "What extreme human activity does the Teacher mention while trying to understand God's work?",
    options: [
      "People may see no sleep day or night",
      "People may fast for many days",
      "People may travel throughout the earth",
      "People may study until old age",
    ],
    answer: "People may see no sleep day or night",
    reference: "Ecclesiastes 8:16",
  },
  {
    question:
      "What conclusion does the Teacher reach about discovering everything God does under the sun?",
    options: [
      "No one can comprehend it fully, however hard they search or however much the wise claim to know",
      "Only prophets can understand it",
      "The wise can eventually understand it",
      "It becomes clear at the end of life",
    ],
    answer:
      "No one can comprehend it fully, however hard they search or however much the wise claim to know",
    reference: "Ecclesiastes 8:17",
  },
  {
    question:
      "In whose hands are the righteous, the wise, and what they do?",
    options: [
      "God's hands",
      "The king's hands",
      "Their own hands",
      "The hands of fate",
    ],
    answer: "God's hands",
    reference: "Ecclesiastes 9:1",
  },
  {
    question:
      "What uncertainty does the Teacher state concerning love and hate?",
    options: [
      "No one knows whether love or hate awaits them",
      "People cannot distinguish love from hate",
      "Both love and hate disappear at death",
      "Only God understands why people love or hate",
    ],
    answer: "No one knows whether love or hate awaits them",
    reference: "Ecclesiastes 9:1",
  },
  {
    question:
      "What common destiny is listed for righteous and wicked, good and bad, clean and unclean?",
    options: [
      "The same destiny overtakes all",
      "All are judged in the same manner",
      "All are forgotten immediately",
      "All lose their possessions",
    ],
    answer: "The same destiny overtakes all",
    reference: "Ecclesiastes 9:2",
  },
  {
    question:
      "What does the Teacher say fills human hearts during life before people join the dead?",
    options: [
      "Evil and madness",
      "Fear and uncertainty",
      "Desire and envy",
      "Pride and greed",
    ],
    answer: "Evil and madness",
    reference: "Ecclesiastes 9:3",
  },
  {
    question:
      "What animal comparison illustrates the advantage of being alive?",
    options: [
      "A live dog is better than a dead lion",
      "A living sheep is better than a dead ox",
      "A live bird is better than a dead eagle",
      "A living donkey is better than a dead horse",
    ],
    answer: "A live dog is better than a dead lion",
    reference: "Ecclesiastes 9:4",
  },
  {
    question:
      "What do the living know that the dead do not?",
    options: [
      "The living know they will die",
      "The living know God's purposes",
      "The living know their reward",
      "The living know the future",
    ],
    answer: "The living know they will die",
    reference: "Ecclesiastes 9:5",
  },
  {
    question:
      "What does the Teacher say the dead know?",
    options: [
      "Nothing",
      "Only their past",
      "That they are dead",
      "The judgment awaiting them",
    ],
    answer: "Nothing",
    reference: "Ecclesiastes 9:5",
  },
  {
    question:
      "What three emotions or drives of the dead are said to have vanished?",
    options: [
      "Love, hate, and jealousy",
      "Hope, fear, and desire",
      "Joy, sorrow, and anger",
      "Pride, greed, and envy",
    ],
    answer: "Love, hate, and jealousy",
    reference: "Ecclesiastes 9:6",
  },
  {
    question:
      "What does the Teacher tell a person to do with food and wine?",
    options: [
      "Eat food with gladness and drink wine with a joyful heart",
      "Use them moderately",
      "Share them with the poor",
      "Enjoy them only on feast days",
    ],
    answer: "Eat food with gladness and drink wine with a joyful heart",
    reference: "Ecclesiastes 9:7",
  },
  {
    question:
      "What two aspects of personal appearance are recommended for life's enjoyment?",
    options: [
      "Always be clothed in white and keep the head anointed with oil",
      "Wear fine linen and perfume",
      "Keep garments clean and hair trimmed",
      "Wear bright clothing and sandals",
    ],
    answer:
      "Always be clothed in white and keep the head anointed with oil",
    reference: "Ecclesiastes 9:8",
  },
  {
    question:
      "With whom does the Teacher instruct a man to enjoy life during his fleeting days?",
    options: [
      "The wife whom he loves",
      "His children",
      "His friends",
      "His household",
    ],
    answer: "The wife whom he loves",
    reference: "Ecclesiastes 9:9",
  },
  {
    question:
      "How should a person perform whatever work their hand finds to do?",
    options: [
      "With all their might",
      "With wisdom",
      "Without complaint",
      "For the benefit of others",
    ],
    answer: "With all their might",
    reference: "Ecclesiastes 9:10",
  },
  {
    question:
      "What activities are absent in the realm of the dead to which everyone is going?",
    options: [
      "Working, planning, knowledge, and wisdom",
      "Eating, drinking, and speaking",
      "Memory, emotion, and worship",
      "Labor, rest, and judgment",
    ],
    answer: "Working, planning, knowledge, and wisdom",
    reference: "Ecclesiastes 9:10",
  },
  {
    question:
      "What five expected outcomes does the Teacher say do not necessarily belong to those seemingly best qualified?",
    options: [
      "The race to the swift, battle to the strong, food to the wise, wealth to the brilliant, and favor to the learned",
      "Victory to warriors, riches to kings, wisdom to elders, food to workers, and honor to priests",
      "Success to the diligent, wealth to the wise, honor to the strong, food to the poor, and favor to rulers",
      "Long life to the righteous, wealth to workers, victory to armies, knowledge to teachers, and honor to kings",
    ],
    answer:
      "The race to the swift, battle to the strong, food to the wise, wealth to the brilliant, and favor to the learned",
    reference: "Ecclesiastes 9:11",
  },
  {
    question:
      "What two factors overtake everyone despite natural ability?",
    options: [
      "Time and chance",
      "Death and judgment",
      "Misfortune and sickness",
      "Wisdom and folly",
    ],
    answer: "Time and chance",
    reference: "Ecclesiastes 9:11",
  },
  {
    question:
      "To what creatures are people compared when suddenly trapped by evil times?",
    options: [
      "Fish caught in a cruel net and birds caught in a snare",
      "Sheep caught by wolves and birds in cages",
      "Deer caught in pits and fish on hooks",
      "Birds struck by arrows and fish in nets",
    ],
    answer:
      "Fish caught in a cruel net and birds caught in a snare",
    reference: "Ecclesiastes 9:12",
  },
  {
    question:
      "What situation impressed the Teacher as an example of wisdom?",
    options: [
      "A poor wise man saved a small city besieged by a powerful king",
      "A wise king defeated a larger army",
      "A poor man became king",
      "A wise servant exposed a conspiracy",
    ],
    answer:
      "A poor wise man saved a small city besieged by a powerful king",
    reference: "Ecclesiastes 9:13-15",
  },
  {
    question:
      "What had the powerful king built against the small city?",
    options: [
      "Huge siegeworks",
      "A wall",
      "Watchtowers",
      "Military camps",
    ],
    answer: "Huge siegeworks",
    reference: "Ecclesiastes 9:14",
  },
  {
    question:
      "What happened to the poor wise man after he saved the city?",
    options: [
      "Nobody remembered him",
      "He became ruler",
      "He was rewarded with wealth",
      "He left the city",
    ],
    answer: "Nobody remembered him",
    reference: "Ecclesiastes 9:15",
  },
  {
    question:
      "What does the Teacher say is better than strength even though the poor person's wisdom may be despised?",
    options: [
      "Wisdom",
      "Patience",
      "Knowledge",
      "Peace",
    ],
    answer: "Wisdom",
    reference: "Ecclesiastes 9:16",
  },
  {
    question:
      "What is better than the shouting of a ruler among fools?",
    options: [
      "Quiet words of the wise",
      "Silence",
      "The voice of a king",
      "The rebuke of a friend",
    ],
    answer: "Quiet words of the wise",
    reference: "Ecclesiastes 9:17",
  },
  {
    question:
      "What is said to be better than weapons of war?",
    options: [
      "Wisdom",
      "Peace",
      "Counsel",
      "Patience",
    ],
    answer: "Wisdom",
    reference: "Ecclesiastes 9:18",
  },
  {
    question:
      "What can one sinner destroy?",
    options: [
      "Much good",
      "An entire city",
      "A kingdom",
      "The work of the wise",
    ],
    answer: "Much good",
    reference: "Ecclesiastes 9:18",
  },
  {
    question:
      "What small thing can cause perfume to give off a bad smell?",
    options: [
      "Dead flies",
      "A little smoke",
      "Dust",
      "Spoiled oil",
    ],
    answer: "Dead flies",
    reference: "Ecclesiastes 10:1",
  },
  {
    question:
      "What can outweigh wisdom and honor just as dead flies spoil perfume?",
    options: [
      "A little folly",
      "A little anger",
      "A little pride",
      "A little laziness",
    ],
    answer: "A little folly",
    reference: "Ecclesiastes 10:1",
  },
  {
    question:
      "In what contrasting directions do the hearts of the wise and fools incline?",
    options: [
      "The wise heart inclines to the right and the fool's to the left",
      "The wise heart looks upward and the fool's downward",
      "The wise heart goes forward and the fool's backward",
      "The wise heart seeks light and the fool's darkness",
    ],
    answer:
      "The wise heart inclines to the right and the fool's to the left",
    reference: "Ecclesiastes 10:2",
  },
  {
    question:
      "How does a fool reveal folly even while simply walking along the road?",
    options: [
      "The fool lacks sense and shows everyone how foolish he is",
      "The fool walks carelessly",
      "The fool talks continuously",
      "The fool chooses the wrong road",
    ],
    answer:
      "The fool lacks sense and shows everyone how foolish he is",
    reference: "Ecclesiastes 10:3",
  },
  {
    question:
      "What should a person do if a ruler's anger rises against them?",
    options: [
      "Do not leave your post, because calmness can lay great offenses to rest",
      "Leave immediately",
      "Answer the ruler boldly",
      "Remain completely silent",
    ],
    answer:
      "Do not leave your post, because calmness can lay great offenses to rest",
    reference: "Ecclesiastes 10:4",
  },
  {
    question:
      "What governmental error does the Teacher describe as proceeding from a ruler?",
    options: [
      "Fools are placed in high positions while the rich occupy low ones",
      "Foreigners are appointed as judges",
      "Young people rule over elders",
      "Servants are given military authority",
    ],
    answer:
      "Fools are placed in high positions while the rich occupy low ones",
    reference: "Ecclesiastes 10:5-6",
  },
  {
    question:
      "What social reversal does the Teacher see involving servants and princes?",
    options: [
      "Servants riding on horseback while princes walk like servants",
      "Servants ruling cities while princes become poor",
      "Servants eating at royal tables while princes go hungry",
      "Servants wearing royal robes while princes wear rags",
    ],
    answer:
      "Servants riding on horseback while princes walk like servants",
    reference: "Ecclesiastes 10:7",
  },
  {
    question:
      "What danger faces someone who digs a pit?",
    options: [
      "They may fall into it",
      "They may uncover a serpent",
      "The pit may collapse",
      "Someone else may claim it",
    ],
    answer: "They may fall into it",
    reference: "Ecclesiastes 10:8",
  },
  {
    question:
      "What danger faces someone who breaks through a wall?",
    options: [
      "A snake may bite them",
      "The wall may collapse",
      "They may be arrested",
      "They may injure another person",
    ],
    answer: "A snake may bite them",
    reference: "Ecclesiastes 10:8",
  },
  {
    question:
      "What danger is associated with quarrying stones?",
    options: [
      "Being injured by them",
      "Falling into a pit",
      "Being bitten by a snake",
      "Breaking one's tools",
    ],
    answer: "Being injured by them",
    reference: "Ecclesiastes 10:9",
  },
  {
    question:
      "What danger is associated with splitting logs?",
    options: [
      "Being endangered by them",
      "Breaking the axe",
      "Being struck by falling stones",
      "Starting a fire",
    ],
    answer: "Being endangered by them",
    reference: "Ecclesiastes 10:9",
  },
  {
    question:
      "What should be done when an iron axe is dull and its edge is unsharpened?",
    options: [
      "More strength is required, but skill or wisdom brings success",
      "The axe should be discarded",
      "The worker should stop",
      "A heavier axe should be used",
    ],
    answer:
      "More strength is required, but skill or wisdom brings success",
    reference: "Ecclesiastes 10:10",
  },
  {
    question:
      "When is a snake charmer said to gain no advantage?",
    options: [
      "When the snake bites before it is charmed",
      "When the snake escapes",
      "When the crowd refuses to pay",
      "When the snake is poisonous",
    ],
    answer: "When the snake bites before it is charmed",
    reference: "Ecclesiastes 10:11",
  },
  {
    question:
      "What do the words from a wise person's mouth bring, in contrast with a fool's lips?",
    options: [
      "Favor, while a fool's lips consume him",
      "Knowledge, while a fool's lips bring shame",
      "Peace, while a fool's lips create conflict",
      "Honor, while a fool's lips cause poverty",
    ],
    answer: "Favor, while a fool's lips consume him",
    reference: "Ecclesiastes 10:12",
  },
  {
    question:
      "How does the Teacher describe the progression of a fool's speech?",
    options: [
      "It begins with foolishness and ends in wicked madness",
      "It begins with pride and ends in destruction",
      "It begins with ignorance and ends in lies",
      "It begins with boasting and ends in anger",
    ],
    answer: "It begins with foolishness and ends in wicked madness",
    reference: "Ecclesiastes 10:13",
  },
  {
    question:
      "What does a fool do despite no one knowing what is coming?",
    options: [
      "Multiplies words",
      "Makes many plans",
      "Predicts the future",
      "Boasts about tomorrow",
    ],
    answer: "Multiplies words",
    reference: "Ecclesiastes 10:14",
  },
  {
    question:
      "What humorous example illustrates how exhausting a fool's labor becomes?",
    options: [
      "The fool does not even know the way to town",
      "The fool cannot find his own house",
      "The fool works until nightfall",
      "The fool cannot sharpen an axe",
    ],
    answer: "The fool does not even know the way to town",
    reference: "Ecclesiastes 10:15",
  },
  {
    question:
      "When does the Teacher pronounce woe upon a land concerning its king and princes?",
    options: [
      "When the king was a servant and the princes feast in the morning",
      "When the king is young and the princes are wealthy",
      "When the king is foolish and the princes are foreigners",
      "When the king is old and the princes are lazy",
    ],
    answer:
      "When the king was a servant and the princes feast in the morning",
    reference: "Ecclesiastes 10:16",
  },
  {
    question:
      "When is a land called blessed regarding its ruler and princes?",
    options: [
      "When its king is of noble birth and princes eat at the proper time for strength rather than drunkenness",
      "When its king is wise and princes fast",
      "When its king is wealthy and princes work",
      "When its king is old and princes obey him",
    ],
    answer:
      "When its king is of noble birth and princes eat at the proper time for strength rather than drunkenness",
    reference: "Ecclesiastes 10:17",
  },
  {
    question:
      "What happens to a roof because of laziness and idle hands?",
    options: [
      "The rafters sag and the house leaks",
      "The roof collapses immediately",
      "Thorns cover it",
      "Birds nest in it",
    ],
    answer: "The rafters sag and the house leaks",
    reference: "Ecclesiastes 10:18",
  },
  {
    question:
      "What three observations are made concerning feasting, wine, and money?",
    options: [
      "A feast is made for laughter, wine makes life merry, and money answers everything",
      "Food gives strength, wine gives joy, and money gives power",
      "A feast brings friendship, wine brings pleasure, and money brings honor",
      "Food sustains life, wine cheers the heart, and money solves poverty",
    ],
    answer:
      "A feast is made for laughter, wine makes life merry, and money answers everything",
    reference: "Ecclesiastes 10:19",
  },
  {
    question:
      "Why should a person avoid cursing a king even in their thoughts or a rich person in their bedroom?",
    options: [
      "A bird in the sky may carry the words and a winged creature may report them",
      "God hears every secret thought",
      "Servants may overhear them",
      "The king's spies are everywhere",
    ],
    answer:
      "A bird in the sky may carry the words and a winged creature may report them",
    reference: "Ecclesiastes 10:20",
  },
  {
    question:
      "What does the Teacher advise doing with bread upon the waters?",
    options: [
      "Cast it upon the waters because after many days it may return",
      "Give it to the poor",
      "Store it against famine",
      "Do not waste it",
    ],
    answer:
      "Cast it upon the waters because after many days it may return",
    reference: "Ecclesiastes 11:1",
  },
  {
    question:
      "To how many portions does the Teacher advise dividing investments or resources because future disaster is unknown?",
    options: [
      "Seven, or even eight",
      "Ten, or even twelve",
      "Three, or even four",
      "Five, or even six",
    ],
    answer: "Seven, or even eight",
    reference: "Ecclesiastes 11:2",
  },
  {
    question:
      "What happens when clouds are full of water?",
    options: [
      "They pour rain on the earth",
      "They move toward the sea",
      "They produce thunder",
      "They darken the sky",
    ],
    answer: "They pour rain on the earth",
    reference: "Ecclesiastes 11:3",
  },
  {
    question:
      "What happens to a tree whether it falls south or north?",
    options: [
      "It remains where it falls",
      "It is eventually cut up",
      "It returns to the earth",
      "It blocks the traveler's path",
    ],
    answer: "It remains where it falls",
    reference: "Ecclesiastes 11:3",
  },
  {
    question:
      "What happens to someone who continually watches the wind?",
    options: [
      "They will not sow",
      "They will miss the rain",
      "They will lose the harvest",
      "They will become afraid",
    ],
    answer: "They will not sow",
    reference: "Ecclesiastes 11:4",
  },
  {
    question:
      "What happens to someone who continually looks at the clouds?",
    options: [
      "They will not reap",
      "They will not travel",
      "They will expect a storm",
      "They will not plant",
    ],
    answer: "They will not reap",
    reference: "Ecclesiastes 11:4",
  },
  {
    question:
      "What two mysteries are compared with humanity's inability to understand God's work?",
    options: [
      "The path of the wind and how a body is formed in the womb",
      "The movement of stars and the origin of rain",
      "The depths of the sea and the growth of plants",
      "The flight of birds and the birth of animals",
    ],
    answer:
      "The path of the wind and how a body is formed in the womb",
    reference: "Ecclesiastes 11:5",
  },
  {
    question:
      "What agricultural practice is recommended because a person does not know which effort will succeed?",
    options: [
      "Sow seed in the morning and do not let the hands be idle in the evening",
      "Plant only after rain",
      "Sow several fields at once",
      "Harvest both morning and evening",
    ],
    answer:
      "Sow seed in the morning and do not let the hands be idle in the evening",
    reference: "Ecclesiastes 11:6",
  },
  {
    question:
      "How does the Teacher describe light and seeing the sun?",
    options: [
      "Light is sweet, and it is pleasant for the eyes to see the sun",
      "Light is wisdom, and the sun gives joy",
      "Light is good, but the sun is temporary",
      "Light gives life, and the sun gives strength",
    ],
    answer:
      "Light is sweet, and it is pleasant for the eyes to see the sun",
    reference: "Ecclesiastes 11:7",
  },
  {
    question:
      "What should someone who lives many years remember even while enjoying them?",
    options: [
      "The days of darkness will be many",
      "Old age will come quickly",
      "Death may come suddenly",
      "Youth will be forgotten",
    ],
    answer: "The days of darkness will be many",
    reference: "Ecclesiastes 11:8",
  },
  {
    question:
      "What warning accompanies the Teacher's encouragement for young people to enjoy youth?",
    options: [
      "God will bring them into judgment for all these things",
      "Youth quickly disappears",
      "Pleasure can become addictive",
      "They must obey their parents",
    ],
    answer: "God will bring them into judgment for all these things",
    reference: "Ecclesiastes 11:9",
  },
  {
    question:
      "What two things should a young person remove or cast off?",
    options: [
      "Anxiety from the heart and troubles from the body",
      "Pride and foolishness",
      "Anger and envy",
      "Fear and laziness",
    ],
    answer: "Anxiety from the heart and troubles from the body",
    reference: "Ecclesiastes 11:10",
  },
  {
    question:
      "When should a person remember the Creator?",
    options: [
      "In the days of youth, before difficult days come",
      "In old age",
      "At the beginning of each day",
      "Before making major decisions",
    ],
    answer: "In the days of youth, before difficult days come",
    reference: "Ecclesiastes 12:1",
  },
  {
    question:
      "What celestial lights are described as darkening in the imagery of approaching old age?",
    options: [
      "The sun, light, moon, and stars",
      "The sun and moon only",
      "The stars and moon",
      "The sun and morning star",
    ],
    answer: "The sun, light, moon, and stars",
    reference: "Ecclesiastes 12:2",
  },
  {
    question:
      "What weather image follows the darkening of the heavenly lights?",
    options: [
      "The clouds return after the rain",
      "A storm rises from the sea",
      "The wind grows stronger",
      "Rain falls without stopping",
    ],
    answer: "The clouds return after the rain",
    reference: "Ecclesiastes 12:2",
  },
  {
    question:
      "What happens to the keepers of the house in the Teacher's imagery of aging?",
    options: [
      "They tremble",
      "They fall asleep",
      "They become blind",
      "They leave the house",
    ],
    answer: "They tremble",
    reference: "Ecclesiastes 12:3",
  },
  {
    question:
      "What happens to the strong men in the imagery of old age?",
    options: [
      "They stoop",
      "They become weak in battle",
      "They stop working",
      "They lose their sight",
    ],
    answer: "They stoop",
    reference: "Ecclesiastes 12:3",
  },
  {
    question:
      "Why do the grinders cease in the imagery of aging?",
    options: [
      "Because they are few",
      "Because they are tired",
      "Because the mill is broken",
      "Because there is no grain",
    ],
    answer: "Because they are few",
    reference: "Ecclesiastes 12:3",
  },
  {
    question:
      "What happens to those looking through the windows?",
    options: [
      "They grow dim",
      "They close the windows",
      "They become afraid",
      "They stop watching",
    ],
    answer: "They grow dim",
    reference: "Ecclesiastes 12:3",
  },
  {
    question:
      "What happens to the doors toward the street as the sound of grinding fades?",
    options: [
      "They are closed",
      "They are broken",
      "They are opened at dawn",
      "They are guarded",
    ],
    answer: "They are closed",
    reference: "Ecclesiastes 12:4",
  },
  {
    question:
      "What small sound causes the aging person to rise?",
    options: [
      "The sound of birds",
      "The sound of rain",
      "The sound of grinding",
      "The sound of footsteps",
    ],
    answer: "The sound of birds",
    reference: "Ecclesiastes 12:4",
  },
  {
    question:
      "What happens to songs in the imagery of old age?",
    options: [
      "Their sounds grow faint",
      "They become unpleasant",
      "They are forgotten",
      "They cease completely",
    ],
    answer: "Their sounds grow faint",
    reference: "Ecclesiastes 12:4",
  },
  {
    question:
      "What two fears accompany old age in the Teacher's description?",
    options: [
      "Fear of heights and dangers in the streets",
      "Fear of death and sickness",
      "Fear of darkness and strangers",
      "Fear of falling and loneliness",
    ],
    answer: "Fear of heights and dangers in the streets",
    reference: "Ecclesiastes 12:5",
  },
  {
    question:
      "Which tree is said to blossom in the imagery of old age?",
    options: [
      "The almond tree",
      "The fig tree",
      "The olive tree",
      "The cedar",
    ],
    answer: "The almond tree",
    reference: "Ecclesiastes 12:5",
  },
  {
    question:
      "Which creature is said to drag itself along in the imagery of aging?",
    options: [
      "The grasshopper",
      "The ant",
      "The lizard",
      "The locust",
    ],
    answer: "The grasshopper",
    reference: "Ecclesiastes 12:5",
  },
  {
    question:
      "What happens to desire as old age advances?",
    options: [
      "It is no longer stirred",
      "It increases",
      "It turns toward wisdom",
      "It becomes sinful",
    ],
    answer: "It is no longer stirred",
    reference: "Ecclesiastes 12:5",
  },
  {
    question:
      "Where is a person said to be going when mourners move about the streets?",
    options: [
      "To the eternal home",
      "To the grave",
      "To the fathers",
      "To judgment",
    ],
    answer: "To the eternal home",
    reference: "Ecclesiastes 12:5",
  },
  {
    question:
      "Which four images are used to describe life's final breaking before death?",
    options: [
      "The silver cord, golden bowl, pitcher at the spring, and wheel at the well",
      "The golden chain, silver cup, jar at the river, and wheel at the gate",
      "The silver thread, golden lamp, vessel at the fountain, and millstone",
      "The cord, bowl, lamp, and broken cistern",
    ],
    answer:
      "The silver cord, golden bowl, pitcher at the spring, and wheel at the well",
    reference: "Ecclesiastes 12:6",
  },
  {
    question:
      "Where does the dust return at death?",
    options: [
      "To the ground from which it came",
      "To the grave",
      "To the earth beneath the city",
      "To the place appointed by God",
    ],
    answer: "To the ground from which it came",
    reference: "Ecclesiastes 12:7",
  },
  {
    question:
      "Where does the spirit return at death?",
    options: [
      "To God who gave it",
      "To heaven",
      "To the realm of the dead",
      "To its resting place",
    ],
    answer: "To God who gave it",
    reference: "Ecclesiastes 12:7",
  },
  {
    question:
      "Besides being wise, what did the Teacher continue to do for the people?",
    options: [
      "Impart knowledge to them",
      "Judge their disputes",
      "Write laws for them",
      "Teach them songs",
    ],
    answer: "Impart knowledge to them",
    reference: "Ecclesiastes 12:9",
  },
  {
    question:
      "What three activities did the Teacher undertake in preparing many proverbs?",
    options: [
      "He pondered, searched out, and set in order many proverbs",
      "He collected, memorized, and explained proverbs",
      "He studied, copied, and taught proverbs",
      "He listened, recorded, and arranged proverbs",
    ],
    answer:
      "He pondered, searched out, and set in order many proverbs",
    reference: "Ecclesiastes 12:9",
  },
  {
    question:
      "What two qualities did the Teacher seek in the words he wrote?",
    options: [
      "Pleasing words and words of truth written uprightly",
      "Short sayings and memorable expressions",
      "Wise words and poetic beauty",
      "Clear words and hidden meanings",
    ],
    answer: "Pleasing words and words of truth written uprightly",
    reference: "Ecclesiastes 12:10",
  },
  {
    question:
      "To what are the words of the wise compared?",
    options: [
      "Goads",
      "Swords",
      "Arrows",
      "Lamps",
    ],
    answer: "Goads",
    reference: "Ecclesiastes 12:11",
  },
  {
    question:
      "To what are collected sayings compared?",
    options: [
      "Firmly embedded nails",
      "Stones in a foundation",
      "Arrows in a quiver",
      "Seeds in a field",
    ],
    answer: "Firmly embedded nails",
    reference: "Ecclesiastes 12:11",
  },
  {
    question:
      "From whom are the words of the wise and collected sayings said to be given?",
    options: [
      "One Shepherd",
      "God's servants",
      "The Teacher",
      "Ancient sages",
    ],
    answer: "One Shepherd",
    reference: "Ecclesiastes 12:11",
  },
  {
    question:
      "What warning is given concerning the production of books?",
    options: [
      "Of making many books there is no end",
      "Books can replace wisdom",
      "Many books confuse the mind",
      "Only wise people should write books",
    ],
    answer: "Of making many books there is no end",
    reference: "Ecclesiastes 12:12",
  },
  {
    question:
      "What effect does much study have according to the Teacher's warning?",
    options: [
      "It wearies the body",
      "It increases sorrow",
      "It produces pride",
      "It weakens memory",
    ],
    answer: "It wearies the body",
    reference: "Ecclesiastes 12:12",
  },
  {
    question:
      "What final two-part duty is given as the conclusion of the entire matter?",
    options: [
      "Fear God and keep His commandments",
      "Seek wisdom and avoid folly",
      "Enjoy life and remember the Creator",
      "Work diligently and prepare for death",
    ],
    answer: "Fear God and keep His commandments",
    reference: "Ecclesiastes 12:13",
  },
  {
    question:
      "Why does the Teacher say people should fear God and keep His commandments?",
    options: [
      "This is the duty of all mankind",
      "This guarantees a long life",
      "This produces wisdom",
      "This prevents meaningless labor",
    ],
    answer: "This is the duty of all mankind",
    reference: "Ecclesiastes 12:13",
  },
  {
    question:
      "What will God bring into judgment according to the book's final statement?",
    options: [
      "Every deed, including every hidden thing",
      "Every spoken word",
      "Only wicked deeds",
      "Every person's wealth and labor",
    ],
    answer: "Every deed, including every hidden thing",
    reference: "Ecclesiastes 12:14",
  },
  {
    question:
      "What two moral categories are specifically included in the final judgment of hidden things?",
    options: [
      "Good and evil",
      "Wise and foolish",
      "Righteous and unjust",
      "Faithful and unfaithful",
    ],
    answer: "Good and evil",
    reference: "Ecclesiastes 12:14",
  },
];

export default ecclesiastesQuestions;