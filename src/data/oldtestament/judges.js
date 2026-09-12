const judgesQuestions = [
  {
    question:
      "Which tribe was chosen first to go up against the Canaanites after Joshua's death?",
    options: [
      "Judah",
      "Benjamin",
      "Ephraim",
      "Simeon",
    ],
    answer: "Judah",
    reference: "Judges 1:1-2",
  },
  {
    question:
      "Which tribe did Judah ask to join them in battle?",
    options: [
      "Simeon",
      "Benjamin",
      "Reuben",
      "Dan",
    ],
    answer: "Simeon",
    reference: "Judges 1:3",
  },
  {
    question:
      "What did the Israelites do to Adoni-Bezek after capturing him?",
    options: [
      "Cut off his thumbs and big toes",
      "Blinded him",
      "Imprisoned him",
      "Sent him into exile",
    ],
    answer: "Cut off his thumbs and big toes",
    reference: "Judges 1:6",
  },
  {
    question:
      "What did Adoni-Bezek say had happened to seventy kings under his table?",
    options: [
      "They gathered scraps with their thumbs and big toes cut off",
      "They served him as cupbearers",
      "They were chained together",
      "They were forced to build his palace",
    ],
    answer:
      "They gathered scraps with their thumbs and big toes cut off",
    reference: "Judges 1:7",
  },
  {
    question:
      "Who captured Kiriath Sepher and received Achsah as a wife?",
    options: [
      "Othniel",
      "Ehud",
      "Shamgar",
      "Barak",
    ],
    answer: "Othniel",
    reference: "Judges 1:12-13",
  },
  {
    question:
      "What did Achsah ask Caleb to give her in addition to land?",
    options: [
      "Springs of water",
      "A flock of sheep",
      "A vineyard",
      "A city wall",
    ],
    answer: "Springs of water",
    reference: "Judges 1:14-15",
  },
  {
    question:
      "Which people did Benjamin fail to drive out of Jerusalem?",
    options: [
      "The Jebusites",
      "The Amorites",
      "The Philistines",
      "The Moabites",
    ],
    answer: "The Jebusites",
    reference: "Judges 1:21",
  },
  {
    question:
      "What did the house of Joseph promise the man who showed them the entrance to Bethel?",
    options: [
      "Mercy for him and his family",
      "A share of the city",
      "Gold and silver",
      "A position as judge",
    ],
    answer: "Mercy for him and his family",
    reference: "Judges 1:24-25",
  },
  {
    question:
      "What name did the man from Bethel give the city he later built?",
    options: [
      "Luz",
      "Bethel",
      "Aijalon",
      "Harosheth",
    ],
    answer: "Luz",
    reference: "Judges 1:26",
  },
  {
    question:
      "Why could Judah not drive out the inhabitants of the plain?",
    options: [
      "They had iron chariots",
      "They had fortified walls",
      "Judah had too few soldiers",
      "The Israelites refused to fight",
    ],
    answer: "They had iron chariots",
    reference: "Judges 1:19",
  },
  {
    question:
      "What did the angel of the Lord say Israel had failed to do with the inhabitants of the land?",
    options: [
      "Break down their altars",
      "Teach them the law",
      "Collect tribute from them",
      "Make peace with them",
    ],
    answer: "Break down their altars",
    reference: "Judges 2:2",
  },
  {
    question:
      "What was the place called where Israel wept after hearing the angel's rebuke?",
    options: [
      "Bochim",
      "Gilgal",
      "Mizpah",
      "Shiloh",
    ],
    answer: "Bochim",
    reference: "Judges 2:5",
  },
  {
    question:
      "What happened after the generation that knew Joshua died?",
    options: [
      "Another generation arose that did not know the Lord",
      "Israel became a kingdom",
      "The tribes united permanently",
      "The Philistines left the land",
    ],
    answer: "Another generation arose that did not know the Lord",
    reference: "Judges 2:10",
  },
  {
    question:
      "Which gods did Israel begin serving after abandoning the Lord?",
    options: [
      "The Baals and Ashtoreths",
      "Molek and Dagon only",
      "Ra and Osiris",
      "Chemosh and Milcom only",
    ],
    answer: "The Baals and Ashtoreths",
    reference: "Judges 2:11-13",
  },
  {
    question:
      "Why did God raise up judges for Israel?",
    options: [
      "To save them from those who plundered them",
      "To collect taxes",
      "To build cities",
      "To divide the land again",
    ],
    answer: "To save them from those who plundered them",
    reference: "Judges 2:16",
  },
  {
    question:
      "What usually happened after a judge died?",
    options: [
      "The people returned to worse corruption",
      "The tribes remained faithful",
      "A king immediately replaced the judge",
      "The enemies disappeared",
    ],
    answer: "The people returned to worse corruption",
    reference: "Judges 2:19",
  },
  {
    question:
      "Why did God leave some nations in the land?",
    options: [
      "To test Israel and teach warfare",
      "To reward them",
      "To protect the borders",
      "To provide trade partners only",
    ],
    answer: "To test Israel and teach warfare",
    reference: "Judges 2:20-23; 3:1-2",
  },
  {
    question:
      "Who was the first judge raised up to deliver Israel?",
    options: [
      "Othniel",
      "Ehud",
      "Shamgar",
      "Deborah",
    ],
    answer: "Othniel",
    reference: "Judges 3:9",
  },
  {
    question:
      "From which king did Othniel deliver Israel?",
    options: [
      "Cushan-Rishathaim",
      "Eglon",
      "Jabin",
      "Sisera",
    ],
    answer: "Cushan-Rishathaim",
    reference: "Judges 3:8-10",
  },
  {
    question:
      "How long did the land have rest after Othniel's victory?",
    options: [
      "Forty years",
      "Eighty years",
      "Twenty years",
      "Ten years",
    ],
    answer: "Forty years",
    reference: "Judges 3:11",
  },
  {
    question:
      "Which judge was left-handed?",
    options: [
      "Ehud",
      "Othniel",
      "Shamgar",
      "Gideon",
    ],
    answer: "Ehud",
    reference: "Judges 3:15",
  },
  {
    question:
      "Which Moabite king oppressed Israel in Ehud's time?",
    options: [
      "Eglon",
      "Balak",
      "Chemosh",
      "Og",
    ],
    answer: "Eglon",
    reference: "Judges 3:12-14",
  },
  {
    question:
      "What kind of weapon did Ehud make for himself?",
    options: [
      "A double-edged sword about a cubit long",
      "A bronze spear",
      "A sling",
      "An iron dagger without an edge",
    ],
    answer: "A double-edged sword about a cubit long",
    reference: "Judges 3:16",
  },
  {
    question:
      "Where did Ehud hide his sword?",
    options: [
      "On his right thigh under his clothing",
      "On his left thigh",
      "Inside his sandal",
      "Under his cloak at the shoulder",
    ],
    answer: "On his right thigh under his clothing",
    reference: "Judges 3:16",
  },
  {
    question:
      "What did Ehud say he had for King Eglon before attacking him?",
    options: [
      "A message from God",
      "A gift from Israel",
      "A warning from Moab",
      "A secret from Joshua",
    ],
    answer: "A message from God",
    reference: "Judges 3:20",
  },
  {
    question:
      "What happened to Ehud's sword after he stabbed Eglon?",
    options: [
      "The hilt went in after the blade",
      "It broke in half",
      "It fell to the floor",
      "Eglon pulled it out",
    ],
    answer: "The hilt went in after the blade",
    reference: "Judges 3:22",
  },
  {
    question:
      "How many Moabites were killed after Ehud rallied Israel?",
    options: [
      "About ten thousand",
      "About one thousand",
      "About twenty thousand",
      "About forty thousand",
    ],
    answer: "About ten thousand",
    reference: "Judges 3:29",
  },
  {
    question:
      "How long did the land have rest after Ehud's victory?",
    options: [
      "Eighty years",
      "Forty years",
      "Twenty years",
      "Seven years",
    ],
    answer: "Eighty years",
    reference: "Judges 3:30",
  },
  {
    question:
      "What weapon did Shamgar use to kill six hundred Philistines?",
    options: [
      "An oxgoad",
      "A sword",
      "A jawbone",
      "A spear",
    ],
    answer: "An oxgoad",
    reference: "Judges 3:31",
  },
  {
    question:
      "Who was judging Israel while sitting under a palm tree?",
    options: [
      "Deborah",
      "Jael",
      "Miriam",
      "Delilah",
    ],
    answer: "Deborah",
    reference: "Judges 4:4-5",
  },
  {
    question:
      "Who was the commander of King Jabin's army?",
    options: [
      "Sisera",
      "Barak",
      "Abinoam",
      "Heber",
    ],
    answer: "Sisera",
    reference: "Judges 4:2",
  },
  {
    question:
      "How many iron chariots did Sisera have?",
    options: [
      "Nine hundred",
      "Six hundred",
      "Three hundred",
      "One thousand",
    ],
    answer: "Nine hundred",
    reference: "Judges 4:3",
  },
  {
    question:
      "Whom did Deborah summon to lead Israel's army?",
    options: [
      "Barak",
      "Gideon",
      "Jephthah",
      "Shamgar",
    ],
    answer: "Barak",
    reference: "Judges 4:6",
  },
  {
    question:
      "What condition did Barak give before agreeing to go into battle?",
    options: [
      "Deborah had to go with him",
      "He needed more chariots",
      "He wanted a sign",
      "He wanted Gideon to join",
    ],
    answer: "Deborah had to go with him",
    reference: "Judges 4:8",
  },
  {
    question:
      "What consequence did Deborah say would result from Barak's condition?",
    options: [
      "The honor would go to a woman",
      "Barak would lose the battle",
      "Israel would be exiled",
      "Sisera would escape permanently",
    ],
    answer: "The honor would go to a woman",
    reference: "Judges 4:9",
  },
  {
    question:
      "How many men did Barak take with him from Zebulun and Naphtali?",
    options: [
      "Ten thousand",
      "Five thousand",
      "Twenty thousand",
      "Thirty thousand",
    ],
    answer: "Ten thousand",
    reference: "Judges 4:10",
  },
  {
    question:
      "Where did Sisera flee after his army was defeated?",
    options: [
      "The tent of Jael",
      "Hazor",
      "Jerusalem",
      "Mount Tabor",
    ],
    answer: "The tent of Jael",
    reference: "Judges 4:17",
  },
  {
    question:
      "What did Jael give Sisera to drink?",
    options: [
      "Milk",
      "Water",
      "Wine",
      "Honey",
    ],
    answer: "Milk",
    reference: "Judges 4:19",
  },
  {
    question:
      "How did Jael kill Sisera?",
    options: [
      "She drove a tent peg through his temple",
      "She stabbed him with a sword",
      "She poisoned his drink",
      "She struck him with a stone",
    ],
    answer: "She drove a tent peg through his temple",
    reference: "Judges 4:21",
  },
  {
    question:
      "What natural event is described as helping Israel in Deborah's song?",
    options: [
      "The stars fought from heaven",
      "The Jordan dried up",
      "Fire fell from the sky",
      "The sun stood still",
    ],
    answer: "The stars fought from heaven",
    reference: "Judges 5:20",
  },
  {
    question:
      "Which river swept away Israel's enemies in Deborah's song?",
    options: [
      "The Kishon",
      "The Jordan",
      "The Jabbok",
      "The Arnon",
    ],
    answer: "The Kishon",
    reference: "Judges 5:21",
  },
  {
    question:
      "How is Jael described in Deborah's song?",
    options: [
      "Most blessed among women",
      "Queen of Israel",
      "Prophetess of Naphtali",
      "Mother of the tribes",
    ],
    answer: "Most blessed among women",
    reference: "Judges 5:24",
  },
  {
    question:
      "How long did the land have peace after the victory of Deborah and Barak?",
    options: [
      "Forty years",
      "Eighty years",
      "Twenty years",
      "Seven years",
    ],
    answer: "Forty years",
    reference: "Judges 5:31",
  },
  {
    question:
      "How many years did Midian oppress Israel before Gideon was called?",
    options: [
      "Seven years",
      "Forty years",
      "Twenty years",
      "Eight years",
    ],
    answer: "Seven years",
    reference: "Judges 6:1",
  },
  {
    question:
      "Where was Gideon threshing wheat when the angel appeared to him?",
    options: [
      "In a winepress",
      "On a threshing floor",
      "Inside a cave",
      "Near a river",
    ],
    answer: "In a winepress",
    reference: "Judges 6:11",
  },
  {
    question:
      "What title did the angel use when addressing Gideon?",
    options: [
      "Mighty warrior",
      "Prince of Israel",
      "Man of wisdom",
      "Faithful servant",
    ],
    answer: "Mighty warrior",
    reference: "Judges 6:12",
  },
  {
    question:
      "From which tribe was Gideon?",
    options: [
      "Manasseh",
      "Judah",
      "Benjamin",
      "Naphtali",
    ],
    answer: "Manasseh",
    reference: "Judges 6:15",
  },
  {
    question:
      "How did Gideon describe his clan and himself?",
    options: [
      "His clan was the weakest and he was the least in his family",
      "His clan was powerful and he was its leader",
      "His family was priestly",
      "He was the oldest son",
    ],
    answer:
      "His clan was the weakest and he was the least in his family",
    reference: "Judges 6:15",
  },
  {
    question:
      "What happened to Gideon's offering when the angel touched it with the tip of his staff?",
    options: [
      "Fire rose from the rock and consumed it",
      "Water covered it",
      "It turned to gold",
      "It disappeared",
    ],
    answer: "Fire rose from the rock and consumed it",
    reference: "Judges 6:21",
  },
  {
    question:
      "What name did Gideon give the altar he built after seeing the angel?",
    options: [
      "The Lord Is Peace",
      "The Lord Provides",
      "The Lord Is My Banner",
      "The Lord Is Righteous",
    ],
    answer: "The Lord Is Peace",
    reference: "Judges 6:24",
  },
  {
    question:
      "What did God command Gideon to destroy at his father's house?",
    options: [
      "The altar of Baal and the Asherah pole",
      "The family house",
      "A Philistine idol",
      "A city gate",
    ],
    answer: "The altar of Baal and the Asherah pole",
    reference: "Judges 6:25-26",
  },
  {
    question:
      "Why did Gideon destroy the altar at night?",
    options: [
      "He was afraid of his family and the townspeople",
      "God commanded him to do it only at night",
      "The Midianites were nearby",
      "He needed darkness to see the fire",
    ],
    answer: "He was afraid of his family and the townspeople",
    reference: "Judges 6:27",
  },
  {
    question:
      "What name was Gideon given after destroying Baal's altar?",
    options: [
      "Jerub-Baal",
      "Jerub-Midian",
      "Abimelech",
      "Joash",
    ],
    answer: "Jerub-Baal",
    reference: "Judges 6:32",
  },
  {
    question:
      "What sign involving fleece did Gideon first request?",
    options: [
      "Dew on the fleece while the ground stayed dry",
      "Dry fleece and wet ground",
      "Fire on the fleece",
      "The fleece turning white",
    ],
    answer: "Dew on the fleece while the ground stayed dry",
    reference: "Judges 6:37-38",
  },
  {
    question:
      "What reverse sign did Gideon ask for the next night?",
    options: [
      "The fleece dry while the ground was covered with dew",
      "The fleece wet again",
      "The fleece disappearing",
      "The ground turning to dust",
    ],
    answer: "The fleece dry while the ground was covered with dew",
    reference: "Judges 6:39-40",
  },
  {
    question:
      "Why did God reduce Gideon's army?",
    options: [
      "So Israel could not boast that their own strength saved them",
      "There was not enough food",
      "The army was too slow",
      "The Midianites requested fewer soldiers",
    ],
    answer:
      "So Israel could not boast that their own strength saved them",
    reference: "Judges 7:2",
  },
  {
    question:
      "How many men initially left Gideon's army because they were afraid?",
    options: [
      "Twenty-two thousand",
      "Ten thousand",
      "Thirty-two thousand",
      "Seven thousand",
    ],
    answer: "Twenty-two thousand",
    reference: "Judges 7:3",
  },
  {
    question:
      "How many men finally remained with Gideon?",
    options: [
      "Three hundred",
      "One thousand",
      "Ten thousand",
      "Seven hundred",
    ],
    answer: "Three hundred",
    reference: "Judges 7:7",
  },
  {
    question:
      "How were the three hundred men distinguished at the water?",
    options: [
      "They lapped water with their hands to their mouths",
      "They knelt fully to drink",
      "They refused to drink",
      "They drank only from jars",
    ],
    answer: "They lapped water with their hands to their mouths",
    reference: "Judges 7:5-7",
  },
  {
    question:
      "What dream did Gideon overhear in the Midianite camp?",
    options: [
      "A loaf of barley bread overturned a tent",
      "A sword fell from heaven",
      "A lion destroyed the camp",
      "A river flooded the tents",
    ],
    answer: "A loaf of barley bread overturned a tent",
    reference: "Judges 7:13",
  },
  {
    question:
      "How did the Midianite soldier interpret the barley loaf dream?",
    options: [
      "It represented Gideon's sword and Midian's defeat",
      "It predicted a famine",
      "It represented Israel's weakness",
      "It meant the camp should move",
    ],
    answer: "It represented Gideon's sword and Midian's defeat",
    reference: "Judges 7:14",
  },
  {
    question:
      "What three items did Gideon's men carry into battle?",
    options: [
      "Trumpets, jars, and torches",
      "Swords, shields, and spears",
      "Bows, arrows, and lamps",
      "Trumpets, stones, and ropes",
    ],
    answer: "Trumpets, jars, and torches",
    reference: "Judges 7:16",
  },
  {
    question:
      "What battle cry did Gideon's men shout?",
    options: [
      "A sword for the Lord and for Gideon",
      "For Israel and Manasseh",
      "Victory belongs to Joshua",
      "The Lord has given us Midian",
    ],
    answer: "A sword for the Lord and for Gideon",
    reference: "Judges 7:20",
  },
  {
    question:
      "What happened inside the Midianite camp when Gideon's men sounded their trumpets?",
    options: [
      "The Lord caused the men to turn their swords against one another",
      "The camp surrendered",
      "The tents caught fire",
      "The soldiers fell asleep",
    ],
    answer:
      "The Lord caused the men to turn their swords against one another",
    reference: "Judges 7:22",
  },
  {
    question:
      "Which two Midianite leaders were captured and killed by the Ephraimites?",
    options: [
      "Oreb and Zeeb",
      "Zebah and Zalmunna",
      "Sihon and Og",
      "Jabin and Sisera",
    ],
    answer: "Oreb and Zeeb",
    reference: "Judges 7:25",
  },
  {
    question:
      "Which two Midianite kings did Gideon pursue?",
    options: [
      "Zebah and Zalmunna",
      "Oreb and Zeeb",
      "Jabin and Sisera",
      "Eglon and Balak",
    ],
    answer: "Zebah and Zalmunna",
    reference: "Judges 8:5-12",
  },
  {
    question:
      "Why did the men of Succoth refuse to give Gideon's army bread?",
    options: [
      "They doubted Gideon had captured Zebah and Zalmunna",
      "They supported Israel's enemies",
      "They had no food",
      "They were afraid of Ephraim",
    ],
    answer:
      "They doubted Gideon had captured Zebah and Zalmunna",
    reference: "Judges 8:6",
  },
  {
    question:
      "What punishment did Gideon give the leaders of Succoth?",
    options: [
      "He disciplined them with desert thorns and briers",
      "He imprisoned them",
      "He burned their houses",
      "He exiled them",
    ],
    answer: "He disciplined them with desert thorns and briers",
    reference: "Judges 8:16",
  },
  {
    question:
      "What did Gideon do to the tower of Penuel?",
    options: [
      "He tore it down",
      "He rebuilt it",
      "He used it as a palace",
      "He gave it to Ephraim",
    ],
    answer: "He tore it down",
    reference: "Judges 8:17",
  },
  {
    question:
      "What position did the Israelites offer Gideon after his victory?",
    options: [
      "Ruler over them and their descendants",
      "High priest",
      "Commander of Judah only",
      "Governor of Shechem",
    ],
    answer: "Ruler over them and their descendants",
    reference: "Judges 8:22",
  },
  {
    question:
      "How did Gideon answer Israel's request that he rule over them?",
    options: [
      "The Lord will rule over you",
      "I will rule for forty years",
      "My son will rule after me",
      "Let Ephraim choose a king",
    ],
    answer: "The Lord will rule over you",
    reference: "Judges 8:23",
  },
  {
    question:
      "What did Gideon request from the plunder taken from the Midianites?",
    options: [
      "A gold earring from each man's share",
      "One sword from every soldier",
      "Half the livestock",
      "Silver bracelets only",
    ],
    answer: "A gold earring from each man's share",
    reference: "Judges 8:24",
  },
  {
    question:
      "What did Gideon make from the collected gold?",
    options: [
      "An ephod",
      "A crown",
      "An altar",
      "A breastplate",
    ],
    answer: "An ephod",
    reference: "Judges 8:27",
  },
  {
    question:
      "What problem resulted from Gideon's ephod?",
    options: [
      "Israel prostituted themselves by worshiping it",
      "It was stolen by Midian",
      "It caused war with Ephraim",
      "It was destroyed by Gideon's sons",
    ],
    answer: "Israel prostituted themselves by worshiping it",
    reference: "Judges 8:27",
  },
  {
    question:
      "How many sons did Gideon have by his own wives?",
    options: [
      "Seventy",
      "Twelve",
      "Thirty",
      "Forty",
    ],
    answer: "Seventy",
    reference: "Judges 8:30",
  },
  {
    question:
      "What was the name of Gideon's son by his concubine in Shechem?",
    options: [
      "Abimelech",
      "Jotham",
      "Tola",
      "Jair",
    ],
    answer: "Abimelech",
    reference: "Judges 8:31",
  },
  {
    question:
      "What did Abimelech do to his seventy brothers?",
    options: [
      "Killed them on one stone",
      "Exiled them",
      "Made them governors",
      "Sold them into slavery",
    ],
    answer: "Killed them on one stone",
    reference: "Judges 9:5",
  },
  {
    question:
      "Which of Gideon's sons escaped Abimelech's massacre?",
    options: [
      "Jotham",
      "Tola",
      "Jair",
      "Ibzan",
    ],
    answer: "Jotham",
    reference: "Judges 9:5",
  },
  {
    question:
      "From which mountain did Jotham shout his parable to the people of Shechem?",
    options: [
      "Mount Gerizim",
      "Mount Ebal",
      "Mount Tabor",
      "Mount Carmel",
    ],
    answer: "Mount Gerizim",
    reference: "Judges 9:7",
  },
  {
    question:
      "Which plant finally agreed to rule over the trees in Jotham's parable?",
    options: [
      "The thornbush",
      "The olive tree",
      "The fig tree",
      "The vine",
    ],
    answer: "The thornbush",
    reference: "Judges 9:14-15",
  },
  {
    question:
      "How long did Abimelech rule over Israel?",
    options: [
      "Three years",
      "Seven years",
      "Forty years",
      "Twenty years",
    ],
    answer: "Three years",
    reference: "Judges 9:22",
  },
  {
    question:
      "How was Abimelech mortally wounded?",
    options: [
      "A woman dropped an upper millstone on his head",
      "He was struck by an arrow",
      "He fell from a tower",
      "His armor bearer stabbed him",
    ],
    answer: "A woman dropped an upper millstone on his head",
    reference: "Judges 9:53",
  },
  {
    question:
      "Why did Abimelech ask his armor bearer to kill him?",
    options: [
      "So people would not say a woman killed him",
      "He feared capture",
      "He wanted to avoid pain",
      "He was ashamed of losing the city",
    ],
    answer: "So people would not say a woman killed him",
    reference: "Judges 9:54",
  },
  {
    question:
      "Who judged Israel after Abimelech?",
    options: [
      "Tola",
      "Jair",
      "Jephthah",
      "Ibzan",
    ],
    answer: "Tola",
    reference: "Judges 10:1",
  },
  {
    question:
      "How many sons did Jair have?",
    options: [
      "Thirty",
      "Seventy",
      "Twelve",
      "Forty",
    ],
    answer: "Thirty",
    reference: "Judges 10:4",
  },
  {
    question:
      "What did Jair's thirty sons ride?",
    options: [
      "Thirty donkeys",
      "Thirty horses",
      "Thirty camels",
      "Thirty chariots",
    ],
    answer: "Thirty donkeys",
    reference: "Judges 10:4",
  },
  {
    question:
      "Which peoples oppressed Israel when they again turned to foreign gods?",
    options: [
      "Philistines and Ammonites",
      "Moabites and Edomites",
      "Midianites and Amalekites",
      "Egyptians and Assyrians",
    ],
    answer: "Philistines and Ammonites",
    reference: "Judges 10:7",
  },
  {
    question:
      "How many years did the Ammonites oppress Israel east of the Jordan?",
    options: [
      "Eighteen years",
      "Seven years",
      "Forty years",
      "Twenty years",
    ],
    answer: "Eighteen years",
    reference: "Judges 10:8",
  },
  {
    question:
      "What did Israel do after God rebuked them for repeatedly turning to other gods?",
    options: [
      "They removed the foreign gods and served the Lord",
      "They appointed a king",
      "They fled to Egypt",
      "They attacked Ammon immediately",
    ],
    answer: "They removed the foreign gods and served the Lord",
    reference: "Judges 10:15-16",
  },
  {
    question:
      "What was Jephthah's background?",
    options: [
      "He was the son of a prostitute",
      "He was a priest's son",
      "He was a king's son",
      "He was a Levite",
    ],
    answer: "He was the son of a prostitute",
    reference: "Judges 11:1",
  },
  {
    question:
      "Why was Jephthah driven away from his family?",
    options: [
      "His brothers did not want him to share their inheritance",
      "He refused to fight",
      "He worshiped foreign gods",
      "He stole from his father",
    ],
    answer:
      "His brothers did not want him to share their inheritance",
    reference: "Judges 11:2",
  },
  {
    question:
      "Where did Jephthah live after being driven away?",
    options: [
      "The land of Tob",
      "Gilead",
      "Moab",
      "Shechem",
    ],
    answer: "The land of Tob",
    reference: "Judges 11:3",
  },
  {
    question:
      "Why did the elders of Gilead later ask Jephthah to return?",
    options: [
      "To lead them against the Ammonites",
      "To judge a land dispute",
      "To become a priest",
      "To make peace with Moab",
    ],
    answer: "To lead them against the Ammonites",
    reference: "Judges 11:5-6",
  },
  {
    question:
      "What claim did the king of Ammon make against Israel?",
    options: [
      "Israel had taken his land when coming from Egypt",
      "Israel had destroyed his temple",
      "Israel had stolen his livestock",
      "Israel had refused to pay tribute",
    ],
    answer: "Israel had taken his land when coming from Egypt",
    reference: "Judges 11:13",
  },
  {
    question:
      "What did Jephthah argue about the land east of the Jordan?",
    options: [
      "Israel had taken it from the Amorites, not from Ammon",
      "Moses had purchased it",
      "The Ammonites had freely given it",
      "It had belonged to Judah",
    ],
    answer:
      "Israel had taken it from the Amorites, not from Ammon",
    reference: "Judges 11:14-23",
  },
  {
    question:
      "What vow did Jephthah make before fighting the Ammonites?",
    options: [
      "Whatever came out of his house to meet him would belong to the Lord",
      "He would build a temple",
      "He would never marry",
      "He would give half his wealth",
    ],
    answer:
      "Whatever came out of his house to meet him would belong to the Lord",
    reference: "Judges 11:30-31",
  },
  {
    question:
      "Who came out of Jephthah's house to meet him after his victory?",
    options: [
      "His daughter",
      "His wife",
      "His servant",
      "His brother",
    ],
    answer: "His daughter",
    reference: "Judges 11:34",
  },
  {
    question:
      "What was unusual about Jephthah's daughter?",
    options: [
      "She was his only child",
      "She was a prophetess",
      "She was already married",
      "She was adopted",
    ],
    answer: "She was his only child",
    reference: "Judges 11:34",
  },
  {
    question:
      "How long did Jephthah's daughter ask to go into the mountains with her friends?",
    options: [
      "Two months",
      "Forty days",
      "Seven days",
      "One year",
    ],
    answer: "Two months",
    reference: "Judges 11:37-38",
  },
  {
    question:
      "What word did the Gileadites use to identify fleeing Ephraimites?",
    options: [
      "Shibboleth",
      "Sabbath",
      "Shechem",
      "Shalom",
    ],
    answer: "Shibboleth",
    reference: "Judges 12:5-6",
  },
  {
    question:
      "Why did the Ephraimites fail the pronunciation test?",
    options: [
      "They pronounced the word as Sibboleth",
      "They could not speak Hebrew",
      "They refused to answer",
      "They used a Moabite word",
    ],
    answer: "They pronounced the word as Sibboleth",
    reference: "Judges 12:6",
  },
  {
    question:
      "How many Ephraimites were killed during the conflict with Jephthah?",
    options: [
      "Forty-two thousand",
      "Twenty-two thousand",
      "Ten thousand",
      "Thirty thousand",
    ],
    answer: "Forty-two thousand",
    reference: "Judges 12:6",
  },
  {
    question:
      "How many sons and daughters did Ibzan have?",
    options: [
      "Thirty sons and thirty daughters",
      "Seventy sons and no daughters",
      "Twelve sons and twelve daughters",
      "Forty sons and thirty daughters",
    ],
    answer: "Thirty sons and thirty daughters",
    reference: "Judges 12:9",
  },
  {
    question:
      "How many sons and grandsons did Abdon have?",
    options: [
      "Forty sons and thirty grandsons",
      "Thirty sons and forty grandsons",
      "Seventy sons",
      "Twenty sons and twenty grandsons",
    ],
    answer: "Forty sons and thirty grandsons",
    reference: "Judges 12:14",
  },
  {
    question:
      "What did Abdon's sons and grandsons ride?",
    options: [
      "Seventy donkeys",
      "Seventy horses",
      "Seventy camels",
      "Seventy chariots",
    ],
    answer: "Seventy donkeys",
    reference: "Judges 12:14",
  },
  {
    question:
      "How long did the Philistines oppress Israel before Samson's birth?",
    options: [
      "Forty years",
      "Twenty years",
      "Seven years",
      "Eighty years",
    ],
    answer: "Forty years",
    reference: "Judges 13:1",
  },
  {
    question:
      "What was the name of Samson's father?",
    options: [
      "Manoah",
      "Micah",
      "Joash",
      "Elon",
    ],
    answer: "Manoah",
    reference: "Judges 13:2",
  },
  {
    question:
      "From which tribe was Samson's family?",
    options: [
      "Dan",
      "Judah",
      "Benjamin",
      "Ephraim",
    ],
    answer: "Dan",
    reference: "Judges 13:2",
  },
  {
    question:
      "What restriction was placed on Samson's hair from birth?",
    options: [
      "No razor was to touch his head",
      "It had to be cut every year",
      "It had to be covered",
      "Only a priest could cut it",
    ],
    answer: "No razor was to touch his head",
    reference: "Judges 13:5",
  },
  {
    question:
      "What was Samson appointed to be from the womb?",
    options: [
      "A Nazirite to God",
      "A priest",
      "A prophet",
      "A king",
    ],
    answer: "A Nazirite to God",
    reference: "Judges 13:5",
  },
  {
    question:
      "What did the angel say Samson would begin to do?",
    options: [
      "Deliver Israel from the Philistines",
      "Unite all twelve tribes",
      "Destroy Moab",
      "Build a temple",
    ],
    answer: "Deliver Israel from the Philistines",
    reference: "Judges 13:5",
  },
  {
    question:
      "What happened when Manoah offered a sacrifice?",
    options: [
      "The angel ascended in the flame",
      "The altar split",
      "The sacrifice disappeared",
      "A storm began",
    ],
    answer: "The angel ascended in the flame",
    reference: "Judges 13:19-20",
  },
  {
    question:
      "Where did Samson first see the Philistine woman he wanted to marry?",
    options: [
      "Timnah",
      "Gaza",
      "Ashkelon",
      "Ekron",
    ],
    answer: "Timnah",
    reference: "Judges 14:1-2",
  },
  {
    question:
      "What animal attacked Samson on the way to Timnah?",
    options: [
      "A young lion",
      "A bear",
      "A wolf",
      "A leopard",
    ],
    answer: "A young lion",
    reference: "Judges 14:5",
  },
  {
    question:
      "What did Samson later find inside the lion's carcass?",
    options: [
      "A swarm of bees and honey",
      "A bird's nest",
      "Gold",
      "A scroll",
    ],
    answer: "A swarm of bees and honey",
    reference: "Judges 14:8",
  },
  {
    question:
      "What riddle did Samson base on his experience with the lion?",
    options: [
      "Out of the eater came something to eat, and out of the strong came something sweet",
      "The weak defeated the strong",
      "Honey came from the desert",
      "A lion became a servant",
    ],
    answer:
      "Out of the eater came something to eat, and out of the strong came something sweet",
    reference: "Judges 14:14",
  },
  {
    question:
      "How long did Samson give the wedding guests to solve his riddle?",
    options: [
      "Seven days",
      "Three days",
      "Forty days",
      "Ten days",
    ],
    answer: "Seven days",
    reference: "Judges 14:12",
  },
  {
    question:
      "What reward did Samson promise if the riddle was solved?",
    options: [
      "Thirty linen garments and thirty sets of clothes",
      "Thirty pieces of silver",
      "Thirty sheep",
      "Thirty gold rings",
    ],
    answer: "Thirty linen garments and thirty sets of clothes",
    reference: "Judges 14:12",
  },
  {
    question:
      "How did the wedding guests discover the answer to Samson's riddle?",
    options: [
      "They pressured his wife to get it from him",
      "They guessed it",
      "A servant told them",
      "Samson revealed it publicly",
    ],
    answer: "They pressured his wife to get it from him",
    reference: "Judges 14:15-17",
  },
  {
    question:
      "Where did Samson kill thirty men to pay the riddle debt?",
    options: [
      "Ashkelon",
      "Gaza",
      "Timnah",
      "Ekron",
    ],
    answer: "Ashkelon",
    reference: "Judges 14:19",
  },
  {
    question:
      "What did Samson discover when he returned to visit his wife?",
    options: [
      "She had been given to his companion",
      "She had died",
      "She had returned to her father permanently",
      "She had married a priest",
    ],
    answer: "She had been given to his companion",
    reference: "Judges 15:1-2",
  },
  {
    question:
      "How many foxes did Samson catch?",
    options: [
      "Three hundred",
      "One hundred",
      "Six hundred",
      "Thirty",
    ],
    answer: "Three hundred",
    reference: "Judges 15:4",
  },
  {
    question:
      "What did Samson attach between pairs of foxes?",
    options: [
      "Torches",
      "Ropes",
      "Bells",
      "Knives",
    ],
    answer: "Torches",
    reference: "Judges 15:4",
  },
  {
    question:
      "What did Samson burn using the foxes?",
    options: [
      "Philistine grain, vineyards, and olive groves",
      "The city gates",
      "The Philistine palace",
      "The temple of Dagon",
    ],
    answer: "Philistine grain, vineyards, and olive groves",
    reference: "Judges 15:5",
  },
  {
    question:
      "What did the Philistines do to Samson's wife and her father?",
    options: [
      "Burned them to death",
      "Exiled them",
      "Imprisoned them",
      "Sold them",
    ],
    answer: "Burned them to death",
    reference: "Judges 15:6",
  },
  {
    question:
      "How many men of Judah came to bind Samson?",
    options: [
      "Three thousand",
      "One thousand",
      "Six hundred",
      "Ten thousand",
    ],
    answer: "Three thousand",
    reference: "Judges 15:11",
  },
  {
    question:
      "What weapon did Samson use to kill a thousand Philistines?",
    options: [
      "A fresh donkey jawbone",
      "A sword",
      "An oxgoad",
      "A spear",
    ],
    answer: "A fresh donkey jawbone",
    reference: "Judges 15:15",
  },
  {
    question:
      "What happened when Samson became extremely thirsty after the battle?",
    options: [
      "God opened a hollow place and water came out",
      "He found a well",
      "Rain began to fall",
      "The Philistines gave him water",
    ],
    answer: "God opened a hollow place and water came out",
    reference: "Judges 15:18-19",
  },
  {
    question:
      "How long did Samson judge Israel?",
    options: [
      "Twenty years",
      "Forty years",
      "Seven years",
      "Eighty years",
    ],
    answer: "Twenty years",
    reference: "Judges 15:20",
  },
  {
    question:
      "What did Samson carry away from Gaza during the night?",
    options: [
      "The city gate, its posts, and bar",
      "The temple doors",
      "A Philistine chariot",
      "The city altar",
    ],
    answer: "The city gate, its posts, and bar",
    reference: "Judges 16:3",
  },
  {
    question:
      "Where did Samson carry the gates of Gaza?",
    options: [
      "To the top of a hill facing Hebron",
      "To Jerusalem",
      "To Timnah",
      "To the Jordan River",
    ],
    answer: "To the top of a hill facing Hebron",
    reference: "Judges 16:3",
  },
  {
    question:
      "What was the name of the woman Samson loved in the Valley of Sorek?",
    options: [
      "Delilah",
      "Jael",
      "Deborah",
      "Achsah",
    ],
    answer: "Delilah",
    reference: "Judges 16:4",
  },
  {
    question:
      "How much silver did each Philistine ruler promise Delilah?",
    options: [
      "Eleven hundred pieces of silver",
      "Thirty pieces of silver",
      "Five hundred pieces of silver",
      "One thousand pieces of silver",
    ],
    answer: "Eleven hundred pieces of silver",
    reference: "Judges 16:5",
  },
  {
    question:
      "What was Samson's first false explanation for how he could be weakened?",
    options: [
      "Bind him with seven fresh bowstrings",
      "Cut his hair",
      "Bind him with new ropes",
      "Weave his hair into a loom",
    ],
    answer: "Bind him with seven fresh bowstrings",
    reference: "Judges 16:7",
  },
  {
    question:
      "What was Samson's second false explanation?",
    options: [
      "Bind him securely with new ropes",
      "Use seven bowstrings",
      "Cut his hair",
      "Shave his beard",
    ],
    answer: "Bind him securely with new ropes",
    reference: "Judges 16:11",
  },
  {
    question:
      "What was Samson's third false explanation?",
    options: [
      "Weave seven braids of his hair into a loom",
      "Bind his hands with chains",
      "Cut seven locks of hair",
      "Place him in a bronze prison",
    ],
    answer: "Weave seven braids of his hair into a loom",
    reference: "Judges 16:13",
  },
  {
    question:
      "What was the true source connected to Samson's Nazirite strength?",
    options: [
      "His uncut hair represented his dedication to God",
      "A magical sword",
      "A special garment",
      "A secret drink",
    ],
    answer: "His uncut hair represented his dedication to God",
    reference: "Judges 16:17",
  },
  {
    question:
      "What did the Philistines do to Samson after capturing him?",
    options: [
      "Gouged out his eyes",
      "Cut off his hands",
      "Exiled him",
      "Branded him",
    ],
    answer: "Gouged out his eyes",
    reference: "Judges 16:21",
  },
  {
    question:
      "What work was Samson forced to do in prison?",
    options: [
      "Grind grain",
      "Build walls",
      "Carry water",
      "Forge weapons",
    ],
    answer: "Grind grain",
    reference: "Judges 16:21",
  },
  {
    question:
      "What began happening to Samson while he was imprisoned?",
    options: [
      "His hair began to grow again",
      "His sight returned",
      "His chains broke",
      "He became ill",
    ],
    answer: "His hair began to grow again",
    reference: "Judges 16:22",
  },
  {
    question:
      "Which god were the Philistines celebrating when Samson was brought out?",
    options: [
      "Dagon",
      "Baal",
      "Chemosh",
      "Molek",
    ],
    answer: "Dagon",
    reference: "Judges 16:23",
  },
  {
    question:
      "About how many people were on the roof of the temple when Samson died?",
    options: [
      "Three thousand",
      "One thousand",
      "Five thousand",
      "Ten thousand",
    ],
    answer: "Three thousand",
    reference: "Judges 16:27",
  },
  {
    question:
      "What final request did Samson make to God?",
    options: [
      "Strength one more time",
      "His eyesight back permanently",
      "Freedom from prison",
      "A sword",
    ],
    answer: "Strength one more time",
    reference: "Judges 16:28",
  },
  {
    question:
      "How did Samson destroy the Philistine temple?",
    options: [
      "He pushed apart the central supporting pillars",
      "He set it on fire",
      "He broke the doors",
      "He caused an earthquake",
    ],
    answer: "He pushed apart the central supporting pillars",
    reference: "Judges 16:29-30",
  },
  {
    question:
      "What is said about the number of people Samson killed at his death?",
    options: [
      "He killed more at his death than during his life",
      "He killed exactly one thousand",
      "He killed fewer than before",
      "No number is implied",
    ],
    answer: "He killed more at his death than during his life",
    reference: "Judges 16:30",
  },
  {
    question:
      "How much silver had Micah stolen from his mother?",
    options: [
      "Eleven hundred pieces of silver",
      "Two hundred pieces of silver",
      "Thirty pieces of silver",
      "One thousand pieces of silver",
    ],
    answer: "Eleven hundred pieces of silver",
    reference: "Judges 17:2",
  },
  {
    question:
      "How much silver did Micah's mother give to a silversmith?",
    options: [
      "Two hundred pieces",
      "Eleven hundred pieces",
      "Thirty pieces",
      "Five hundred pieces",
    ],
    answer: "Two hundred pieces",
    reference: "Judges 17:4",
  },
  {
    question:
      "What did the silversmith make for Micah's household?",
    options: [
      "A carved image and a cast idol",
      "A bronze altar",
      "A golden calf",
      "A silver ark",
    ],
    answer: "A carved image and a cast idol",
    reference: "Judges 17:4",
  },
  {
    question:
      "Whom did Micah first appoint as his priest?",
    options: [
      "One of his sons",
      "A Levite",
      "A priest from Shiloh",
      "A Benjaminite",
    ],
    answer: "One of his sons",
    reference: "Judges 17:5",
  },
  {
    question:
      "What repeated statement describes the moral condition of Israel in the later chapters of Judges?",
    options: [
      "Everyone did what was right in his own eyes",
      "Everyone obeyed the law",
      "The judges ruled faithfully",
      "The tribes had one king",
    ],
    answer: "Everyone did what was right in his own eyes",
    reference: "Judges 17:6; 21:25",
  },
  {
    question:
      "From which town did the Levite who became Micah's priest come?",
    options: [
      "Bethlehem in Judah",
      "Shiloh",
      "Hebron",
      "Gibeah",
    ],
    answer: "Bethlehem in Judah",
    reference: "Judges 17:7",
  },
  {
    question:
      "What annual payment did Micah promise the Levite?",
    options: [
      "Ten pieces of silver, clothing, and food",
      "Thirty pieces of silver",
      "One hundred pieces of silver",
      "A field and livestock",
    ],
    answer: "Ten pieces of silver, clothing, and food",
    reference: "Judges 17:10",
  },
  {
    question:
      "Which tribe was still looking for an inheritance in the later part of Judges?",
    options: [
      "Dan",
      "Judah",
      "Benjamin",
      "Ephraim",
    ],
    answer: "Dan",
    reference: "Judges 18:1",
  },
  {
    question:
      "How many Danite men were sent to spy out the land?",
    options: [
      "Five",
      "Twelve",
      "Three",
      "Ten",
    ],
    answer: "Five",
    reference: "Judges 18:2",
  },
  {
    question:
      "What peaceful city did the Danite spies find?",
    options: [
      "Laish",
      "Shechem",
      "Gibeah",
      "Timnah",
    ],
    answer: "Laish",
    reference: "Judges 18:7",
  },
  {
    question:
      "How many armed Danites later marched toward Laish?",
    options: [
      "Six hundred",
      "Three hundred",
      "One thousand",
      "Ten thousand",
    ],
    answer: "Six hundred",
    reference: "Judges 18:11",
  },
  {
    question:
      "What did the Danites take from Micah's house?",
    options: [
      "His idols, ephod, household gods, and priest",
      "His livestock only",
      "His silver only",
      "His house and land",
    ],
    answer: "His idols, ephod, household gods, and priest",
    reference: "Judges 18:17-20",
  },
  {
    question:
      "What did the Danites rename Laish after capturing it?",
    options: [
      "Dan",
      "Bethel",
      "Shiloh",
      "Gilead",
    ],
    answer: "Dan",
    reference: "Judges 18:29",
  },
  {
    question:
      "Where was the Levite's concubine from?",
    options: [
      "Bethlehem in Judah",
      "Gibeah",
      "Shiloh",
      "Dan",
    ],
    answer: "Bethlehem in Judah",
    reference: "Judges 19:1-2",
  },
  {
    question:
      "In which Benjaminite city did the Levite and his concubine stay overnight?",
    options: [
      "Gibeah",
      "Mizpah",
      "Ramah",
      "Bethel",
    ],
    answer: "Gibeah",
    reference: "Judges 19:14-15",
  },
  {
    question:
      "Who finally offered hospitality to the Levite in Gibeah?",
    options: [
      "An old man from the hill country of Ephraim",
      "A Benjaminite priest",
      "The city elder",
      "A merchant",
    ],
    answer: "An old man from the hill country of Ephraim",
    reference: "Judges 19:16-21",
  },
  {
    question:
      "What happened to the Levite's concubine during the night?",
    options: [
      "She was abused by the men of the city and died",
      "She escaped",
      "She was taken captive",
      "She was rescued by soldiers",
    ],
    answer: "She was abused by the men of the city and died",
    reference: "Judges 19:25-28",
  },
  {
    question:
      "What did the Levite do with his concubine's body?",
    options: [
      "Cut it into twelve pieces and sent them throughout Israel",
      "Buried it in Bethlehem",
      "Took it to the priests",
      "Burned it outside Gibeah",
    ],
    answer:
      "Cut it into twelve pieces and sent them throughout Israel",
    reference: "Judges 19:29",
  },
  {
    question:
      "Where did the Israelites gather to discuss the crime in Gibeah?",
    options: [
      "Mizpah",
      "Shiloh",
      "Bethel",
      "Shechem",
    ],
    answer: "Mizpah",
    reference: "Judges 20:1",
  },
  {
    question:
      "How many sword-bearing men from Israel gathered against Benjamin?",
    options: [
      "Four hundred thousand",
      "Forty thousand",
      "Six hundred thousand",
      "One hundred thousand",
    ],
    answer: "Four hundred thousand",
    reference: "Judges 20:2",
  },
  {
    question:
      "How many fighting men did Benjamin muster from its cities?",
    options: [
      "Twenty-six thousand plus seven hundred from Gibeah",
      "Ten thousand",
      "Forty thousand",
      "Thirty thousand",
    ],
    answer:
      "Twenty-six thousand plus seven hundred from Gibeah",
    reference: "Judges 20:15",
  },
  {
    question:
      "What special skill did seven hundred left-handed Benjaminites have?",
    options: [
      "They could sling a stone at a hair and not miss",
      "They could shoot two arrows at once",
      "They could fight with both hands equally",
      "They could throw spears farther than anyone",
    ],
    answer: "They could sling a stone at a hair and not miss",
    reference: "Judges 20:16",
  },
  {
    question:
      "Which tribe did God tell Israel to send first against Benjamin?",
    options: [
      "Judah",
      "Ephraim",
      "Simeon",
      "Dan",
    ],
    answer: "Judah",
    reference: "Judges 20:18",
  },
  {
    question:
      "How many Israelites did Benjamin kill on the first day of battle?",
    options: [
      "Twenty-two thousand",
      "Eighteen thousand",
      "Twenty-five thousand",
      "Ten thousand",
    ],
    answer: "Twenty-two thousand",
    reference: "Judges 20:21",
  },
  {
    question:
      "How many Israelites did Benjamin kill on the second day?",
    options: [
      "Eighteen thousand",
      "Twenty-two thousand",
      "Ten thousand",
      "Twenty-five thousand",
    ],
    answer: "Eighteen thousand",
    reference: "Judges 20:25",
  },
  {
    question:
      "Who was serving before the ark when Israel sought the Lord during the war with Benjamin?",
    options: [
      "Phinehas son of Eleazar",
      "Eli",
      "Samuel",
      "Jonathan",
    ],
    answer: "Phinehas son of Eleazar",
    reference: "Judges 20:27-28",
  },
  {
    question:
      "What strategy helped Israel finally defeat Benjamin?",
    options: [
      "They set an ambush around Gibeah",
      "They attacked only at night",
      "They crossed the Jordan",
      "They used chariots",
    ],
    answer: "They set an ambush around Gibeah",
    reference: "Judges 20:29-37",
  },
  {
    question:
      "How many Benjaminites fled to the rock of Rimmon after the defeat?",
    options: [
      "Six hundred",
      "Three hundred",
      "One thousand",
      "Seven hundred",
    ],
    answer: "Six hundred",
    reference: "Judges 20:47",
  },
  {
    question:
      "What oath had Israel made concerning their daughters?",
    options: [
      "They would not give them in marriage to Benjamin",
      "They would only marry within Judah",
      "They would not marry foreigners",
      "They would not marry Levites",
    ],
    answer: "They would not give them in marriage to Benjamin",
    reference: "Judges 21:1",
  },
  {
    question:
      "Which city had failed to join the assembly against Benjamin?",
    options: [
      "Jabesh Gilead",
      "Shechem",
      "Hebron",
      "Jericho",
    ],
    answer: "Jabesh Gilead",
    reference: "Judges 21:8-9",
  },
  {
    question:
      "How many young women from Jabesh Gilead were spared for the Benjaminites?",
    options: [
      "Four hundred",
      "Six hundred",
      "Two hundred",
      "Seven hundred",
    ],
    answer: "Four hundred",
    reference: "Judges 21:12",
  },
  {
    question:
      "Where were the remaining Benjaminites told to find wives during a festival?",
    options: [
      "Shiloh",
      "Bethel",
      "Jerusalem",
      "Gibeah",
    ],
    answer: "Shiloh",
    reference: "Judges 21:19-21",
  },
  {
    question:
      "What were the Benjaminites told to do when the young women came out to dance?",
    options: [
      "Take wives from among them",
      "Ask their fathers directly",
      "Wait for the elders",
      "Offer silver for marriage",
    ],
    answer: "Take wives from among them",
    reference: "Judges 21:21",
  },
  {
    question:
      "What final statement closes the book of Judges?",
    options: [
      "There was no king in Israel; everyone did what was right in his own eyes",
      "Israel had peace throughout the land",
      "A judge ruled over all twelve tribes",
      "The Philistines were completely defeated",
    ],
    answer:
      "There was no king in Israel; everyone did what was right in his own eyes",
    reference: "Judges 21:25",
  },
];

export default judgesQuestions;