const judgesQuestions = [
  {
    question:
      "After Joshua's death, which tribe did the LORD say should go up first to fight the Canaanites?",
    options: ["Judah", "Benjamin", "Ephraim", "Simeon"],
    answer: "Judah",
    reference: "Judges 1:1-2",
  },
  {
    question:
      "Which tribe did Judah invite to join its campaign against the Canaanites?",
    options: ["Simeon", "Benjamin", "Reuben", "Dan"],
    answer: "Simeon",
    reference: "Judges 1:3",
  },
  {
    question:
      "What was done to Adoni-Bezek after Judah and Simeon captured him?",
    options: [
      "His thumbs and big toes were cut off",
      "He was blinded",
      "He was imprisoned in Hebron",
      "He was executed immediately",
    ],
    answer: "His thumbs and big toes were cut off",
    reference: "Judges 1:6",
  },
  {
    question:
      "How many kings did Adoni-Bezek say had gathered scraps under his table with their thumbs and big toes cut off?",
    options: ["Seventy", "Thirty", "Twelve", "Forty"],
    answer: "Seventy",
    reference: "Judges 1:7",
  },
  {
    question:
      "What was the former name of Debir?",
    options: ["Kiriath Sepher", "Kiriath Arba", "Luz", "Zephath"],
    answer: "Kiriath Sepher",
    reference: "Judges 1:11",
  },
  {
    question:
      "Who captured Kiriath Sepher and thereby received Achsah as his wife?",
    options: [
      "Othniel son of Kenaz",
      "Ehud son of Gera",
      "Shamgar son of Anath",
      "Barak son of Abinoam",
    ],
    answer: "Othniel son of Kenaz",
    reference: "Judges 1:12-13",
  },
  {
    question:
      "What did Achsah receive from Caleb after asking him for an additional blessing?",
    options: [
      "The upper and lower springs",
      "A vineyard and olive grove",
      "Hebron and Debir",
      "A flock and a field",
    ],
    answer: "The upper and lower springs",
    reference: "Judges 1:14-15",
  },
  {
    question:
      "With which tribe did the descendants of Moses' father-in-law go up from the City of Palms?",
    options: ["Judah", "Simeon", "Benjamin", "Ephraim"],
    answer: "Judah",
    reference: "Judges 1:16",
  },
  {
    question:
      "What new name was given to Zephath after Judah and Simeon completely destroyed it?",
    options: ["Hormah", "Luz", "Bochim", "Ophrah"],
    answer: "Hormah",
    reference: "Judges 1:17",
  },
  {
    question:
      "Why was Judah unable to drive the inhabitants from the plains despite the LORD being with Judah?",
    options: [
      "They had iron chariots",
      "They had fortified towers",
      "They greatly outnumbered Judah",
      "They controlled the water sources",
    ],
    answer: "They had iron chariots",
    reference: "Judges 1:19",
  },
  {
    question:
      "Which inhabitants of Jerusalem did Benjamin fail to drive out?",
    options: ["The Jebusites", "The Hivites", "The Perizzites", "The Kenites"],
    answer: "The Jebusites",
    reference: "Judges 1:21",
  },
  {
    question:
      "What was Bethel formerly called?",
    options: ["Luz", "Hormah", "Bochim", "Kiriath Sepher"],
    answer: "Luz",
    reference: "Judges 1:23",
  },
  {
    question:
      "What reward did the spies from the house of Joseph give the man who showed them the entrance to Bethel?",
    options: [
      "They spared him and his entire family",
      "They gave him silver",
      "They gave him land in Ephraim",
      "They appointed him ruler of the city",
    ],
    answer: "They spared him and his entire family",
    reference: "Judges 1:24-25",
  },
  {
    question:
      "Where did the man spared at Bethel later build another city named Luz?",
    options: [
      "In the land of the Hittites",
      "In the land of the Amorites",
      "In Philistine territory",
      "In the land of Moab",
    ],
    answer: "In the land of the Hittites",
    reference: "Judges 1:26",
  },
  {
    question:
      "Which tribe was forced by the Amorites into the hill country and prevented from coming down into the plain?",
    options: ["Dan", "Asher", "Naphtali", "Benjamin"],
    answer: "Dan",
    reference: "Judges 1:34",
  },
  {
    question:
      "From where did the angel of the LORD come before confronting Israel at Bochim?",
    options: ["Gilgal", "Shiloh", "Bethel", "Jericho"],
    answer: "Gilgal",
    reference: "Judges 2:1",
  },
  {
    question:
      "What did the Israelites do at Bochim after the angel of the LORD rebuked them?",
    options: [
      "They wept aloud and offered sacrifices",
      "They fasted for seven days",
      "They destroyed every altar immediately",
      "They appointed a new judge",
    ],
    answer: "They wept aloud and offered sacrifices",
    reference: "Judges 2:4-5",
  },
  {
    question:
      "How old was Joshua when he died?",
    options: ["110 years", "120 years", "100 years", "105 years"],
    answer: "110 years",
    reference: "Judges 2:8",
  },
  {
    question:
      "Where was Joshua buried?",
    options: [
      "Timnath Heres in the hill country of Ephraim",
      "Shechem near Mount Ebal",
      "Shiloh",
      "Gilgal",
    ],
    answer: "Timnath Heres in the hill country of Ephraim",
    reference: "Judges 2:9",
  },
  {
    question:
      "What arose after Joshua's generation had been gathered to their ancestors?",
    options: [
      "Another generation that knew neither the LORD nor what He had done for Israel",
      "A generation that completely conquered Canaan",
      "A generation ruled by priests",
      "A generation that returned to Egypt",
    ],
    answer:
      "Another generation that knew neither the LORD nor what He had done for Israel",
    reference: "Judges 2:10",
  },
  {
    question:
      "Which deities are specifically associated with Israel's apostasy early in Judges?",
    options: [
      "The Baals and Ashtoreths",
      "Dagon and Molek",
      "Chemosh and Milcom",
      "Baal Peor and Dagon",
    ],
    answer: "The Baals and Ashtoreths",
    reference: "Judges 2:11-13",
  },
  {
    question:
      "Why did the LORD leave certain nations in Canaan instead of quickly driving them out?",
    options: [
      "To test whether Israel would keep the way of the LORD",
      "To permanently divide Canaan",
      "To supply Israel with forced labor",
      "To protect Israel from Egypt",
    ],
    answer: "To test whether Israel would keep the way of the LORD",
    reference: "Judges 2:20-23",
  },
  {
    question:
      "What additional purpose is given for leaving nations in the land at the beginning of Judges 3?",
    options: [
      "To teach warfare to generations of Israelites who had not experienced it",
      "To teach Israel foreign languages",
      "To provide wives for Israel",
      "To train Israel in agriculture",
    ],
    answer:
      "To teach warfare to generations of Israelites who had not experienced it",
    reference: "Judges 3:1-2",
  },
  {
    question:
      "Which groups are specifically listed among the nations left to test Israel?",
    options: [
      "Five rulers of the Philistines, all the Canaanites, Sidonians, and Hivites of Lebanon",
      "Moabites, Edomites, Ammonites, and Midianites",
      "Amalekites, Kenites, Jebusites, and Egyptians",
      "Philistines, Moabites, Midianites, and Edomites",
    ],
    answer:
      "Five rulers of the Philistines, all the Canaanites, Sidonians, and Hivites of Lebanon",
    reference: "Judges 3:3",
  },
  {
    question:
      "Who was the first judge named as Israel's deliverer in Judges?",
    options: [
      "Othniel son of Kenaz",
      "Ehud son of Gera",
      "Shamgar son of Anath",
      "Barak son of Abinoam",
    ],
    answer: "Othniel son of Kenaz",
    reference: "Judges 3:9",
  },
  {
    question:
      "Which king oppressed Israel before Othniel delivered them?",
    options: [
      "Cushan-Rishathaim king of Aram Naharaim",
      "Eglon king of Moab",
      "Jabin king of Canaan",
      "Zebah king of Midian",
    ],
    answer: "Cushan-Rishathaim king of Aram Naharaim",
    reference: "Judges 3:8-10",
  },
  {
    question:
      "How many years did Cushan-Rishathaim oppress Israel?",
    options: ["Eight years", "Eighteen years", "Twenty years", "Seven years"],
    answer: "Eight years",
    reference: "Judges 3:8",
  },
  {
    question:
      "How long did the land have peace after Othniel's victory?",
    options: ["Forty years", "Eighty years", "Twenty years", "Thirty years"],
    answer: "Forty years",
    reference: "Judges 3:11",
  },
  {
    question:
      "Which nations joined Eglon king of Moab in attacking Israel?",
    options: [
      "Ammon and Amalek",
      "Edom and Philistia",
      "Midian and Amalek",
      "Ammon and Midian",
    ],
    answer: "Ammon and Amalek",
    reference: "Judges 3:13",
  },
  {
    question:
      "For how many years did Israel serve Eglon king of Moab?",
    options: ["Eighteen years", "Eight years", "Twenty years", "Forty years"],
    answer: "Eighteen years",
    reference: "Judges 3:14",
  },
  {
    question:
      "What physical characteristic of Ehud was significant to his assassination plan?",
    options: [
      "He was left-handed",
      "He was unusually tall",
      "He was blind in one eye",
      "He was lame",
    ],
    answer: "He was left-handed",
    reference: "Judges 3:15",
  },
  {
    question:
      "From which tribe was Ehud?",
    options: ["Benjamin", "Judah", "Ephraim", "Dan"],
    answer: "Benjamin",
    reference: "Judges 3:15",
  },
  {
    question:
      "How long was the sword Ehud made for himself?",
    options: [
      "A cubit",
      "Two cubits",
      "Half a cubit",
      "Three cubits",
    ],
    answer: "A cubit",
    reference: "Judges 3:16",
  },
  {
    question:
      "Where did Ehud strap his sword?",
    options: [
      "To his right thigh under his clothing",
      "To his left thigh",
      "Across his back",
      "Inside his sandal",
    ],
    answer: "To his right thigh under his clothing",
    reference: "Judges 3:16",
  },
  {
    question:
      "How is Eglon king of Moab physically described?",
    options: [
      "A very fat man",
      "A very tall man",
      "An elderly man",
      "A one-eyed man",
    ],
    answer: "A very fat man",
    reference: "Judges 3:17",
  },
  {
    question:
      "Near what location did Ehud turn back after delivering Israel's tribute to Eglon?",
    options: [
      "The carved images near Gilgal",
      "The fords of the Jordan",
      "The palm tree of Deborah",
      "Mount Ephraim",
    ],
    answer: "The carved images near Gilgal",
    reference: "Judges 3:19",
  },
  {
    question:
      "What did Ehud tell Eglon in order to gain a private audience?",
    options: [
      "I have a message from God for you",
      "I have hidden tribute for you",
      "Israel has surrendered",
      "I know of a conspiracy against you",
    ],
    answer: "I have a message from God for you",
    reference: "Judges 3:20",
  },
  {
    question:
      "What happened to Ehud's sword after he thrust it into Eglon's belly?",
    options: [
      "The handle sank in after the blade and the fat closed over it",
      "The blade broke",
      "Ehud immediately pulled it out",
      "It fell through Eglon's clothing",
    ],
    answer: "The handle sank in after the blade and the fat closed over it",
    reference: "Judges 3:21-22",
  },
  {
    question:
      "Why did Eglon's servants delay opening the doors after Ehud escaped?",
    options: [
      "They thought Eglon was relieving himself in the cool room",
      "They thought he was sleeping",
      "They believed he was praying",
      "They had been ordered not to disturb him",
    ],
    answer: "They thought Eglon was relieving himself in the cool room",
    reference: "Judges 3:24",
  },
  {
    question:
      "Where did Ehud rally Israel after escaping from Eglon's palace?",
    options: [
      "The hill country of Ephraim",
      "Mount Tabor",
      "Gilgal",
      "Shiloh",
    ],
    answer: "The hill country of Ephraim",
    reference: "Judges 3:27",
  },
  {
    question:
      "Approximately how many Moabites were killed following Ehud's victory?",
    options: ["Ten thousand", "Twenty thousand", "Eight thousand", "Twelve thousand"],
    answer: "Ten thousand",
    reference: "Judges 3:29",
  },
  {
    question:
      "How long did the land have peace after Moab was subdued under Ehud?",
    options: ["Eighty years", "Forty years", "Twenty years", "Sixty years"],
    answer: "Eighty years",
    reference: "Judges 3:30",
  },
  {
    question:
      "With what weapon did Shamgar son of Anath kill six hundred Philistines?",
    options: [
      "An oxgoad",
      "A jawbone",
      "A spear",
      "A threshing sledge",
    ],
    answer: "An oxgoad",
    reference: "Judges 3:31",
  },
  {
    question:
      "Which Canaanite king oppressed Israel during the time of Deborah?",
    options: [
      "Jabin king of Canaan",
      "Eglon king of Moab",
      "Abimelek of Shechem",
      "Zebah king of Midian",
    ],
    answer: "Jabin king of Canaan",
    reference: "Judges 4:2",
  },
  {
    question:
      "From what city did Jabin reign?",
    options: ["Hazor", "Megiddo", "Taanach", "Kedesh"],
    answer: "Hazor",
    reference: "Judges 4:2",
  },
  {
    question:
      "Who commanded Jabin's army?",
    options: ["Sisera", "Barak", "Heber", "Abinoam"],
    answer: "Sisera",
    reference: "Judges 4:2",
  },
  {
    question:
      "Where did Sisera live?",
    options: [
      "Harosheth Haggoyim",
      "Kedesh in Naphtali",
      "Taanach",
      "Hazor",
    ],
    answer: "Harosheth Haggoyim",
    reference: "Judges 4:2",
  },
  {
    question:
      "How many iron chariots did Sisera command?",
    options: ["Nine hundred", "Six hundred", "Three hundred", "One thousand"],
    answer: "Nine hundred",
    reference: "Judges 4:3",
  },
  {
    question:
      "For how many years did Jabin cruelly oppress Israel?",
    options: ["Twenty years", "Eighteen years", "Forty years", "Seven years"],
    answer: "Twenty years",
    reference: "Judges 4:3",
  },
  {
    question:
      "Where did Deborah hold court?",
    options: [
      "Under the Palm of Deborah between Ramah and Bethel in the hill country of Ephraim",
      "At Shiloh beside the tabernacle",
      "At Kedesh in Naphtali",
      "On Mount Tabor",
    ],
    answer:
      "Under the Palm of Deborah between Ramah and Bethel in the hill country of Ephraim",
    reference: "Judges 4:5",
  },
  {
    question:
      "From which city did Deborah summon Barak son of Abinoam?",
    options: [
      "Kedesh in Naphtali",
      "Hazor",
      "Bethel",
      "Taanach",
    ],
    answer: "Kedesh in Naphtali",
    reference: "Judges 4:6",
  },
  {
    question:
      "How many men from Naphtali and Zebulun was Barak commanded to take to Mount Tabor?",
    options: ["Ten thousand", "Twelve thousand", "Twenty thousand", "Seven thousand"],
    answer: "Ten thousand",
    reference: "Judges 4:6",
  },
  {
    question:
      "To what river did God promise to draw Sisera and his army?",
    options: [
      "The Kishon River",
      "The Jordan River",
      "The Jabbok River",
      "The Arnon River",
    ],
    answer: "The Kishon River",
    reference: "Judges 4:7",
  },
  {
    question:
      "What consequence did Deborah announce because Barak insisted she accompany him?",
    options: [
      "The honor of defeating Sisera would go to a woman",
      "Barak would lose his inheritance",
      "Naphtali would not receive credit for the battle",
      "Barak would die before the battle ended",
    ],
    answer: "The honor of defeating Sisera would go to a woman",
    reference: "Judges 4:8-9",
  },
  {
    question:
      "From whom had Heber the Kenite separated?",
    options: [
      "The other Kenites, descendants of Hobab",
      "The tribe of Naphtali",
      "The people of Hazor",
      "The Midianites",
    ],
    answer: "The other Kenites, descendants of Hobab",
    reference: "Judges 4:11",
  },
  {
    question:
      "Near what place had Heber the Kenite pitched his tent?",
    options: [
      "The great tree in Zaanannim near Kedesh",
      "The Palm of Deborah",
      "Mount Tabor",
      "The Kishon River",
    ],
    answer: "The great tree in Zaanannim near Kedesh",
    reference: "Judges 4:11",
  },
  {
    question:
      "What did Jael initially give Sisera to drink when he asked for water?",
    options: ["Milk", "Wine", "Water", "Vinegar"],
    answer: "Milk",
    reference: "Judges 4:19",
  },
  {
    question:
      "What did Jael use to kill Sisera while he slept?",
    options: [
      "A tent peg and hammer",
      "A sword and shield",
      "An oxgoad",
      "A stone and sling",
    ],
    answer: "A tent peg and hammer",
    reference: "Judges 4:21",
  },
  {
    question:
      "According to Deborah and Barak's song, which village life had ceased until Deborah arose?",
    options: [
      "Village life in Israel",
      "Worship at Shiloh",
      "Trade in Canaan",
      "Farming in Naphtali",
    ],
    answer: "Village life in Israel",
    reference: "Judges 5:7",
  },
  {
    question:
      "According to Deborah's song, how many shields or spears were seen among forty thousand in Israel?",
    options: ["None", "Forty", "Four hundred", "Ten thousand"],
    answer: "None",
    reference: "Judges 5:8",
  },
  {
    question:
      "Which tribes are praised in Deborah's song for joining the battle?",
    options: [
      "Ephraim, Benjamin, Makir, Zebulun, Issachar, and Naphtali",
      "Judah, Simeon, Levi, Gad, Asher, and Dan",
      "Reuben, Gad, Dan, Asher, Judah, and Benjamin",
      "Judah, Ephraim, Manasseh, Dan, Gad, and Reuben",
    ],
    answer:
      "Ephraim, Benjamin, Makir, Zebulun, Issachar, and Naphtali",
    reference: "Judges 5:14-18",
  },
  {
    question:
      "Which tribe is criticized in Deborah's song for remaining among the sheepfolds?",
    options: ["Reuben", "Dan", "Asher", "Gad"],
    answer: "Reuben",
    reference: "Judges 5:15-16",
  },
  {
    question:
      "Which tribe is described as staying with the ships?",
    options: ["Dan", "Asher", "Reuben", "Zebulun"],
    answer: "Dan",
    reference: "Judges 5:17",
  },
  {
    question:
      "Which tribe is described as remaining on the coast and staying in its coves?",
    options: ["Asher", "Naphtali", "Dan", "Benjamin"],
    answer: "Asher",
    reference: "Judges 5:17",
  },
  {
    question:
      "Which place was cursed for failing to come to the LORD's aid?",
    options: ["Meroz", "Kedesh", "Hazor", "Taanach"],
    answer: "Meroz",
    reference: "Judges 5:23",
  },
  {
    question:
      "What food did Jael give Sisera according to Deborah's song?",
    options: [
      "Curdled milk in a nobleman's bowl",
      "Bread and wine",
      "Honey and milk",
      "Roasted grain and water",
    ],
    answer: "Curdled milk in a nobleman's bowl",
    reference: "Judges 5:25",
  },
  {
    question:
      "How long did the land have peace after the victory celebrated by Deborah and Barak?",
    options: ["Forty years", "Eighty years", "Twenty years", "Seven years"],
    answer: "Forty years",
    reference: "Judges 5:31",
  },
  {
    question:
      "For how many years did Midian oppress Israel before Gideon's deliverance?",
    options: ["Seven years", "Eight years", "Twenty years", "Forty years"],
    answer: "Seven years",
    reference: "Judges 6:1",
  },
  {
    question:
      "Where did Israelites make shelters to escape Midianite raids?",
    options: [
      "Mountain clefts, caves, and strongholds",
      "Only fortified cities",
      "Across the Jordan",
      "Inside Philistine territory",
    ],
    answer: "Mountain clefts, caves, and strongholds",
    reference: "Judges 6:2",
  },
  {
    question:
      "Which groups joined Midian in devastating Israel's crops?",
    options: [
      "Amalekites and other eastern peoples",
      "Moabites and Ammonites",
      "Philistines and Canaanites",
      "Edomites and Amalekites",
    ],
    answer: "Amalekites and other eastern peoples",
    reference: "Judges 6:3",
  },
  {
    question:
      "Where was Gideon threshing wheat when the angel of the LORD appeared?",
    options: [
      "In a winepress",
      "On a threshing floor",
      "Inside a cave",
      "Beside an olive press",
    ],
    answer: "In a winepress",
    reference: "Judges 6:11",
  },
  {
    question:
      "Why was Gideon threshing wheat in a winepress?",
    options: [
      "To hide it from the Midianites",
      "Because rain had flooded the threshing floor",
      "Because the wheat belonged to Joash",
      "Because an angel had instructed him to",
    ],
    answer: "To hide it from the Midianites",
    reference: "Judges 6:11",
  },
  {
    question:
      "To whom did the oak at Ophrah belong where the angel appeared to Gideon?",
    options: [
      "Joash the Abiezrite",
      "Abimelek",
      "Jether",
      "Jerub-Baal",
    ],
    answer: "Joash the Abiezrite",
    reference: "Judges 6:11",
  },
  {
    question:
      "How did Gideon describe his clan and his own position within his family?",
    options: [
      "His clan was the weakest in Manasseh and he was the least in his family",
      "His clan was strongest in Manasseh but he was the youngest",
      "His clan belonged to Ephraim and he was the poorest",
      "His clan was small in Benjamin and he was the oldest",
    ],
    answer:
      "His clan was the weakest in Manasseh and he was the least in his family",
    reference: "Judges 6:15",
  },
  {
    question:
      "What food did Gideon prepare for the angel of the LORD?",
    options: [
      "A young goat and unleavened bread made from an ephah of flour",
      "A lamb and twelve loaves",
      "A bull and barley cakes",
      "A goat and leavened bread",
    ],
    answer:
      "A young goat and unleavened bread made from an ephah of flour",
    reference: "Judges 6:19",
  },
  {
    question:
      "What happened when the angel touched Gideon's offering with the tip of his staff?",
    options: [
      "Fire flared from the rock and consumed the meat and bread",
      "The rock split in two",
      "Water flowed from the rock",
      "The offering disappeared in a cloud",
    ],
    answer: "Fire flared from the rock and consumed the meat and bread",
    reference: "Judges 6:21",
  },
  {
    question:
      "What name did Gideon give the altar he built after realizing he had seen the angel of the LORD?",
    options: [
      "The LORD Is Peace",
      "The LORD Is My Banner",
      "The LORD Provides",
      "The LORD Is There",
    ],
    answer: "The LORD Is Peace",
    reference: "Judges 6:24",
  },
  {
    question:
      "What two objects was Gideon commanded to destroy at his father's household?",
    options: [
      "The altar of Baal and the Asherah pole beside it",
      "A shrine of Dagon and a sacred stone",
      "An altar of Chemosh and an idol",
      "A bronze serpent and Asherah pole",
    ],
    answer: "The altar of Baal and the Asherah pole beside it",
    reference: "Judges 6:25",
  },
  {
    question:
      "How old was the second bull Gideon was commanded to use?",
    options: ["Seven years", "Three years", "One year", "Ten years"],
    answer: "Seven years",
    reference: "Judges 6:25",
  },
  {
    question:
      "Why did Gideon destroy Baal's altar at night rather than during the day?",
    options: [
      "He was afraid of his family and the townspeople",
      "God specifically commanded a nighttime sacrifice",
      "Midianite soldiers guarded it during the day",
      "The altar could only be destroyed after sunset",
    ],
    answer: "He was afraid of his family and the townspeople",
    reference: "Judges 6:27",
  },
  {
    question:
      "What new name was Gideon given after destroying Baal's altar?",
    options: ["Jerub-Baal", "Jerubbesheth", "Abiezer", "Jether"],
    answer: "Jerub-Baal",
    reference: "Judges 6:32",
  },
  {
    question:
      "What did Gideon first request regarding the fleece as a sign?",
    options: [
      "Dew on the fleece while the ground remained dry",
      "Dew on the ground while the fleece remained dry",
      "Fire on the fleece",
      "Rain only around the fleece",
    ],
    answer: "Dew on the fleece while the ground remained dry",
    reference: "Judges 6:37",
  },
  {
    question:
      "How much water did Gideon wring from the fleece after the first sign?",
    options: [
      "A bowlful",
      "An ephah",
      "A jarful",
      "A skinful",
    ],
    answer: "A bowlful",
    reference: "Judges 6:38",
  },
  {
    question:
      "What reversal did Gideon request for the second fleece sign?",
    options: [
      "The fleece dry and dew on all the ground",
      "The fleece wet and ground dry again",
      "Rain on the fleece and no dew",
      "The fleece burned while the ground remained wet",
    ],
    answer: "The fleece dry and dew on all the ground",
    reference: "Judges 6:39-40",
  },
  {
    question:
      "What other name for Gideon is used when his army camped by the spring of Harod?",
    options: ["Jerub-Baal", "Jerubbesheth", "Abimelek", "Abiezer"],
    answer: "Jerub-Baal",
    reference: "Judges 7:1",
  },
  {
    question:
      "How many men left Gideon's army because they were afraid?",
    options: ["Twenty-two thousand", "Ten thousand", "Thirty-two thousand", "Twelve thousand"],
    answer: "Twenty-two thousand",
    reference: "Judges 7:3",
  },
  {
    question:
      "How many men remained after the fearful soldiers departed?",
    options: ["Ten thousand", "Three hundred", "Twelve thousand", "Seven thousand"],
    answer: "Ten thousand",
    reference: "Judges 7:3",
  },
  {
    question:
      "How many men were finally selected for Gideon's army after the water test?",
    options: ["Three hundred", "Seven hundred", "One thousand", "Ten thousand"],
    answer: "Three hundred",
    reference: "Judges 7:6-7",
  },
  {
    question:
      "What dream did Gideon overhear in the Midianite camp?",
    options: [
      "A round loaf of barley bread tumbled into the camp and overturned a tent",
      "A sword fell from heaven",
      "A torch burned the Midianite camp",
      "A lion scattered the army",
    ],
    answer:
      "A round loaf of barley bread tumbled into the camp and overturned a tent",
    reference: "Judges 7:13",
  },
  {
    question:
      "How did the Midianite soldier interpret the barley-loaf dream?",
    options: [
      "As the sword of Gideon son of Joash, into whose hand God had given Midian",
      "As a famine coming upon Israel",
      "As the destruction of Gideon's army",
      "As a sign that Amalek would betray Midian",
    ],
    answer:
      "As the sword of Gideon son of Joash, into whose hand God had given Midian",
    reference: "Judges 7:14",
  },
  {
    question:
      "Into how many companies did Gideon divide his three hundred men?",
    options: ["Three", "Two", "Seven", "Twelve"],
    answer: "Three",
    reference: "Judges 7:16",
  },
  {
    question:
      "What three items or actions formed the unusual equipment and tactic of Gideon's three hundred men?",
    options: [
      "Trumpets, empty jars, and torches concealed inside the jars",
      "Swords, shields, and torches",
      "Trumpets, slings, and clay jars",
      "Spears, lamps, and horns",
    ],
    answer: "Trumpets, empty jars, and torches concealed inside the jars",
    reference: "Judges 7:16",
  },
  {
    question:
      "At what point in the night did Gideon attack the Midianite camp?",
    options: [
      "At the beginning of the middle watch, just after the guard had changed",
      "At midnight exactly",
      "Just before sunrise",
      "At the beginning of the first watch",
    ],
    answer:
      "At the beginning of the middle watch, just after the guard had changed",
    reference: "Judges 7:19",
  },
  {
    question:
      "What battle cry did Gideon's men shout?",
    options: [
      "A sword for the LORD and for Gideon!",
      "The LORD has defeated Midian!",
      "For Israel and Manasseh!",
      "The sword of Jerub-Baal!",
    ],
    answer: "A sword for the LORD and for Gideon!",
    reference: "Judges 7:20",
  },
  {
    question:
      "Which two Midianite leaders were captured and killed by the Ephraimites?",
    options: ["Oreb and Zeeb", "Zebah and Zalmunna", "Sihon and Og", "Jether and Abimelek"],
    answer: "Oreb and Zeeb",
    reference: "Judges 7:25",
  },
  {
    question:
      "Where were Oreb and Zeeb killed respectively?",
    options: [
      "Oreb at the rock of Oreb and Zeeb at the winepress of Zeeb",
      "Both at the Jordan",
      "Oreb at Succoth and Zeeb at Peniel",
      "Oreb at Ophrah and Zeeb at Shechem",
    ],
    answer: "Oreb at the rock of Oreb and Zeeb at the winepress of Zeeb",
    reference: "Judges 7:25",
  },
  {
    question:
      "What comparison did Gideon use to calm the angry Ephraimites?",
    options: [
      "The gleanings of Ephraim's grapes were better than the full grape harvest of Abiezer",
      "Ephraim's army was stronger than Manasseh's",
      "Ephraim was greater than all Israel",
      "The wine of Ephraim was sweeter than that of Manasseh",
    ],
    answer:
      "The gleanings of Ephraim's grapes were better than the full grape harvest of Abiezer",
    reference: "Judges 8:2",
  },
  {
    question:
      "Which two towns refused to provide bread to Gideon's exhausted troops?",
    options: [
      "Succoth and Peniel",
      "Shechem and Thebez",
      "Ophrah and Bethel",
      "Kedesh and Taanach",
    ],
    answer: "Succoth and Peniel",
    reference: "Judges 8:5-9",
  },
  {
    question:
      "Approximately how many men remained with Zebah and Zalmunna at Karkor?",
    options: ["Fifteen thousand", "Ten thousand", "Twenty thousand", "Twelve thousand"],
    answer: "Fifteen thousand",
    reference: "Judges 8:10",
  },
  {
    question:
      "How many sword-bearing men of the eastern peoples had already fallen before Gideon reached Zebah and Zalmunna?",
    options: ["One hundred twenty thousand", "Seventy thousand", "Forty thousand", "Eighty thousand"],
    answer: "One hundred twenty thousand",
    reference: "Judges 8:10",
  },
  {
    question:
      "How did Gideon obtain the names of Succoth's officials and elders?",
    options: [
      "He captured a young man of Succoth who wrote down their names",
      "He questioned the city gatekeeper",
      "A servant of Zebah gave him a list",
      "The elders surrendered their names voluntarily",
    ],
    answer: "He captured a young man of Succoth who wrote down their names",
    reference: "Judges 8:14",
  },
  {
    question:
      "How many officials and elders of Succoth were listed for Gideon?",
    options: ["Seventy-seven", "Seventy", "Seventy-two", "Eighty"],
    answer: "Seventy-seven",
    reference: "Judges 8:14",
  },
  {
    question:
      "What did Gideon use to punish the elders of Succoth?",
    options: [
      "Desert thorns and briers",
      "Whips and rods",
      "Stones and thorns",
      "Iron chains",
    ],
    answer: "Desert thorns and briers",
    reference: "Judges 8:16",
  },
  {
    question:
      "What did Gideon do to Peniel after returning from battle?",
    options: [
      "He pulled down its tower and killed the men of the town",
      "He burned the entire city",
      "He imposed forced labor",
      "He exiled its elders",
    ],
    answer: "He pulled down its tower and killed the men of the town",
    reference: "Judges 8:17",
  },
  {
    question:
      "What relationship did Gideon reveal between himself and the men Zebah and Zalmunna had killed at Tabor?",
    options: [
      "They were his brothers, the sons of his mother",
      "They were his sons",
      "They were his cousins",
      "They were his father's servants",
    ],
    answer: "They were his brothers, the sons of his mother",
    reference: "Judges 8:18-19",
  },
  {
    question:
      "Whom did Gideon first command to kill Zebah and Zalmunna?",
    options: ["Jether his firstborn son", "Abimelek his son", "Joash his father", "Purah his servant"],
    answer: "Jether his firstborn son",
    reference: "Judges 8:20",
  },
  {
    question:
      "Why did Jether not draw his sword against Zebah and Zalmunna?",
    options: [
      "He was only a boy and was afraid",
      "He refused to obey Gideon",
      "He had been wounded",
      "He had no sword",
    ],
    answer: "He was only a boy and was afraid",
    reference: "Judges 8:20",
  },
  {
    question:
      "What did Gideon take from the necks of Zebah and Zalmunna after killing them?",
    options: [
      "The ornaments from their camels' necks",
      "Their royal seals",
      "Their gold chains",
      "Their swords",
    ],
    answer: "The ornaments from their camels' necks",
    reference: "Judges 8:21",
  },
  {
    question:
      "How did Gideon respond when Israel asked him and his descendants to rule over them?",
    options: [
      "He said neither he nor his son would rule; the LORD would rule over them",
      "He accepted but refused hereditary succession",
      "He appointed Abimelek as successor",
      "He asked for seven days to decide",
    ],
    answer:
      "He said neither he nor his son would rule; the LORD would rule over them",
    reference: "Judges 8:22-23",
  },
  {
    question:
      "What did Gideon request from the plunder after refusing kingship?",
    options: [
      "An earring from each man's share",
      "A tenth of all silver",
      "The kings' crowns",
      "Every captured camel",
    ],
    answer: "An earring from each man's share",
    reference: "Judges 8:24",
  },
  {
    question:
      "What was the weight of the gold earrings collected for Gideon, excluding other ornaments and garments?",
    options: [
      "One thousand seven hundred shekels of gold",
      "Seven hundred shekels of gold",
      "One thousand shekels of gold",
      "Two thousand shekels of gold",
    ],
    answer: "One thousand seven hundred shekels of gold",
    reference: "Judges 8:26",
  },
  {
    question:
      "What did Gideon make from the collected gold, which later became a snare?",
    options: ["An ephod", "A crown", "A golden calf", "A breastpiece"],
    answer: "An ephod",
    reference: "Judges 8:27",
  },
  {
    question:
      "Where did Gideon place the ephod?",
    options: ["Ophrah", "Shechem", "Shiloh", "Bethel"],
    answer: "Ophrah",
    reference: "Judges 8:27",
  },
  {
    question:
      "How many sons did Gideon have by his own wives?",
    options: ["Seventy", "Thirty", "Forty", "Twelve"],
    answer: "Seventy",
    reference: "Judges 8:30",
  },
  {
    question:
      "What was the name of Gideon's son by his concubine in Shechem?",
    options: ["Abimelek", "Jether", "Joash", "Tola"],
    answer: "Abimelek",
    reference: "Judges 8:31",
  },
  {
    question:
      "Where was Gideon buried?",
    options: [
      "In the tomb of Joash his father at Ophrah of the Abiezrites",
      "At Shechem",
      "At Timnath Heres",
      "At Shiloh",
    ],
    answer: "In the tomb of Joash his father at Ophrah of the Abiezrites",
    reference: "Judges 8:32",
  },
  {
    question:
      "From what source did the citizens of Shechem give Abimelek money?",
    options: [
      "The temple of Baal-Berith",
      "The treasury of the LORD",
      "The house of Dagon",
      "The temple of Ashtoreth",
    ],
    answer: "The temple of Baal-Berith",
    reference: "Judges 9:4",
  },
  {
    question:
      "How many pieces of silver did Abimelek receive from the citizens of Shechem?",
    options: ["Seventy", "Thirty", "One hundred", "Fifty"],
    answer: "Seventy",
    reference: "Judges 9:4",
  },
  {
    question:
      "On what did Abimelek kill his brothers?",
    options: [
      "One stone",
      "An altar",
      "The city wall",
      "A threshing floor",
    ],
    answer: "One stone",
    reference: "Judges 9:5",
  },
  {
    question:
      "Which of Gideon's seventy sons escaped Abimelek's massacre?",
    options: ["Jotham", "Jether", "Tola", "Jair"],
    answer: "Jotham",
    reference: "Judges 9:5",
  },
  {
    question:
      "From what mountain did Jotham proclaim his parable to the citizens of Shechem?",
    options: ["Mount Gerizim", "Mount Ebal", "Mount Tabor", "Mount Ephraim"],
    answer: "Mount Gerizim",
    reference: "Judges 9:7",
  },
  {
    question:
      "In Jotham's parable, which three productive plants refused to become king before the thornbush accepted?",
    options: [
      "Olive tree, fig tree, and vine",
      "Cedar, olive tree, and vine",
      "Fig tree, pomegranate, and vine",
      "Olive tree, palm tree, and fig tree",
    ],
    answer: "Olive tree, fig tree, and vine",
    reference: "Judges 9:8-13",
  },
  {
    question:
      "How long had Abimelek governed Israel when God sent hostility between him and the citizens of Shechem?",
    options: ["Three years", "Seven years", "Two years", "Forty years"],
    answer: "Three years",
    reference: "Judges 9:22-23",
  },
  {
    question:
      "Who challenged Abimelek's authority while the people of Shechem were celebrating in their god's temple?",
    options: [
      "Gaal son of Ebed",
      "Zebul",
      "Jotham",
      "Tola",
    ],
    answer: "Gaal son of Ebed",
    reference: "Judges 9:26-29",
  },
  {
    question:
      "Who secretly warned Abimelek about Gaal's rebellion?",
    options: ["Zebul", "Jotham", "Ebed", "Tola"],
    answer: "Zebul",
    reference: "Judges 9:30-33",
  },
  {
    question:
      "What did Abimelek sow over the destroyed city of Shechem?",
    options: ["Salt", "Ashes", "Thorns", "Barley"],
    answer: "Salt",
    reference: "Judges 9:45",
  },
  {
    question:
      "Approximately how many men and women died when Abimelek burned the tower of Shechem?",
    options: ["About one thousand", "About five hundred", "About three thousand", "About seven hundred"],
    answer: "About one thousand",
    reference: "Judges 9:49",
  },
  {
    question:
      "At what city was Abimelek mortally wounded by a woman?",
    options: ["Thebez", "Shechem", "Arumah", "Ophrah"],
    answer: "Thebez",
    reference: "Judges 9:50-53",
  },
  {
    question:
      "What did the woman throw from the tower that fractured Abimelek's skull?",
    options: [
      "An upper millstone",
      "A large rock",
      "A grinding bowl",
      "A piece of the tower wall",
    ],
    answer: "An upper millstone",
    reference: "Judges 9:53",
  },
  {
    question:
      "Why did Abimelek command his armor-bearer to kill him?",
    options: [
      "So it would not be said that a woman killed him",
      "To avoid being captured by Israel",
      "Because God commanded it",
      "Because he feared torture",
    ],
    answer: "So it would not be said that a woman killed him",
    reference: "Judges 9:54",
  },
  {
    question:
      "Who arose to save Israel after Abimelek?",
    options: [
      "Tola son of Puah",
      "Jair the Gileadite",
      "Jephthah",
      "Ibzan",
    ],
    answer: "Tola son of Puah",
    reference: "Judges 10:1",
  },
  {
    question:
      "From which tribe was Tola?",
    options: ["Issachar", "Manasseh", "Ephraim", "Zebulun"],
    answer: "Issachar",
    reference: "Judges 10:1",
  },
  {
    question:
      "How long did Tola judge Israel?",
    options: ["Twenty-three years", "Twenty-two years", "Thirty years", "Seven years"],
    answer: "Twenty-three years",
    reference: "Judges 10:2",
  },
  {
    question:
      "How many sons did Jair the Gileadite have?",
    options: ["Thirty", "Seventy", "Forty", "Twelve"],
    answer: "Thirty",
    reference: "Judges 10:4",
  },
  {
    question:
      "What unusual detail is given about Jair's thirty sons?",
    options: [
      "They rode thirty donkeys and controlled thirty towns",
      "They ruled thirty tribes",
      "They each commanded one thousand soldiers",
      "They owned thirty vineyards",
    ],
    answer: "They rode thirty donkeys and controlled thirty towns",
    reference: "Judges 10:4",
  },
  {
    question:
      "What were Jair's thirty towns called?",
    options: ["Havvoth Jair", "Jair Gilead", "Ramoth Jair", "Towns of Tob"],
    answer: "Havvoth Jair",
    reference: "Judges 10:4",
  },
  {
    question:
      "For how many years did the Philistines and Ammonites shatter and crush Israel before Jephthah's deliverance?",
    options: ["Eighteen years", "Twenty years", "Seven years", "Forty years"],
    answer: "Eighteen years",
    reference: "Judges 10:8",
  },
  {
    question:
      "Which groups did Israel confess serving when the LORD rebuked them for repeated apostasy?",
    options: [
      "The Baals, Ashtoreths, gods of Aram, Sidon, Moab, Ammon, and the Philistines",
      "Only Baal and Ashtoreth",
      "The gods of Egypt, Edom, and Midian only",
      "Chemosh, Dagon, and Molek only",
    ],
    answer:
      "The Baals, Ashtoreths, gods of Aram, Sidon, Moab, Ammon, and the Philistines",
    reference: "Judges 10:6, 11-14",
  },
  {
    question:
      "Why had Jephthah been driven away from his father's household?",
    options: [
      "He was the son of a prostitute",
      "He had killed his brother",
      "He had joined the Ammonites",
      "He refused to inherit Gilead",
    ],
    answer: "He was the son of a prostitute",
    reference: "Judges 11:1-2",
  },
  {
    question:
      "To what land did Jephthah flee after his brothers drove him away?",
    options: ["Tob", "Moab", "Ammon", "Bashan"],
    answer: "Tob",
    reference: "Judges 11:3",
  },
  {
    question:
      "What kind of men gathered around Jephthah in Tob?",
    options: [
      "A group of adventurers",
      "Levites",
      "Dispossessed Amorites",
      "Gileadite elders",
    ],
    answer: "A group of adventurers",
    reference: "Judges 11:3",
  },
  {
    question:
      "What did the elders of Gilead promise Jephthah if he fought the Ammonites?",
    options: [
      "He would become head over all who lived in Gilead",
      "He would receive thirty cities",
      "He would become high priest",
      "He would receive half of Ammon",
    ],
    answer: "He would become head over all who lived in Gilead",
    reference: "Judges 11:8-11",
  },
  {
    question:
      "Which lands did Jephthah argue Israel had deliberately avoided taking during the wilderness journey?",
    options: [
      "Edom, Moab, and Ammon",
      "Canaan, Edom, and Midian",
      "Moab, Bashan, and Edom",
      "Philistia, Edom, and Moab",
    ],
    answer: "Edom, Moab, and Ammon",
    reference: "Judges 11:14-18",
  },
  {
    question:
      "From whom did Israel actually take the disputed territory east of the Jordan according to Jephthah?",
    options: [
      "Sihon king of the Amorites",
      "The king of Ammon",
      "Balak king of Moab",
      "Og king of Bashan alone",
    ],
    answer: "Sihon king of the Amorites",
    reference: "Judges 11:19-22",
  },
  {
    question:
      "Which Moabite king did Jephthah mention while arguing that Moab had never successfully disputed Israel's possession?",
    options: [
      "Balak son of Zippor",
      "Eglon",
      "Chemosh",
      "Sihon",
    ],
    answer: "Balak son of Zippor",
    reference: "Judges 11:25",
  },
  {
    question:
      "For how many years did Jephthah say Israel had occupied Heshbon, Aroer, and surrounding towns?",
    options: ["Three hundred years", "Two hundred years", "Forty years", "Four hundred years"],
    answer: "Three hundred years",
    reference: "Judges 11:26",
  },
  {
    question:
      "What vow did Jephthah make before fighting the Ammonites?",
    options: [
      "Whatever came out of the door of his house to meet him on his return would belong to the LORD and be offered as a burnt offering",
      "He would dedicate all captured livestock",
      "He would never cut his hair",
      "He would build an altar at Mizpah",
    ],
    answer:
      "Whatever came out of the door of his house to meet him on his return would belong to the LORD and be offered as a burnt offering",
    reference: "Judges 11:30-31",
  },
  {
    question:
      "How many Ammonite towns did Jephthah devastate in his victory?",
    options: ["Twenty", "Thirty", "Twelve", "Forty"],
    answer: "Twenty",
    reference: "Judges 11:33",
  },
  {
    question:
      "How is Jephthah's daughter described when she came out to meet him?",
    options: [
      "She was his only child; apart from her he had neither son nor daughter",
      "She was his eldest of seven children",
      "She was his only daughter but had brothers",
      "She was his youngest child",
    ],
    answer:
      "She was his only child; apart from her he had neither son nor daughter",
    reference: "Judges 11:34",
  },
  {
    question:
      "What did Jephthah's daughter request before he fulfilled his vow?",
    options: [
      "Two months to roam the hills and weep with her friends",
      "Forty days of fasting",
      "One year to remain unmarried",
      "Seven days at Shiloh",
    ],
    answer: "Two months to roam the hills and weep with her friends",
    reference: "Judges 11:37-38",
  },
  {
    question:
      "What annual custom arose among Israelite women after the account of Jephthah's daughter?",
    options: [
      "They went out for four days each year to commemorate her",
      "They fasted for seven days each year",
      "They offered sacrifices at Mizpah",
      "They remained silent for two days",
    ],
    answer: "They went out for four days each year to commemorate her",
    reference: "Judges 11:39-40",
  },
  {
    question:
      "What word was used to identify fleeing Ephraimites at the Jordan crossings?",
    options: ["Shibboleth", "Sibboleth", "Mizpah", "Gilead"],
    answer: "Shibboleth",
    reference: "Judges 12:5-6",
  },
  {
    question:
      "How did an Ephraimite's pronunciation expose him?",
    options: [
      "He pronounced Shibboleth as Sibboleth",
      "He pronounced Gilead as Gilad",
      "He could not pronounce Ephraim",
      "He pronounced Jordan incorrectly",
    ],
    answer: "He pronounced Shibboleth as Sibboleth",
    reference: "Judges 12:6",
  },
  {
    question:
      "How many Ephraimites fell in the conflict with Jephthah's Gileadites?",
    options: ["Forty-two thousand", "Forty thousand", "Twenty-two thousand", "Twelve thousand"],
    answer: "Forty-two thousand",
    reference: "Judges 12:6",
  },
  {
    question:
      "How long did Jephthah judge Israel?",
    options: ["Six years", "Seven years", "Ten years", "Twenty years"],
    answer: "Six years",
    reference: "Judges 12:7",
  },
  {
    question:
      "Which judge had thirty sons and thirty daughters and arranged marriages outside his clan for all of them?",
    options: ["Ibzan", "Elon", "Abdon", "Jair"],
    answer: "Ibzan",
    reference: "Judges 12:8-9",
  },
  {
    question:
      "Which judge was a Zebulunite and judged Israel ten years?",
    options: ["Elon", "Ibzan", "Abdon", "Tola"],
    answer: "Elon",
    reference: "Judges 12:11",
  },
  {
    question:
      "Which judge had forty sons and thirty grandsons who rode on seventy donkeys?",
    options: ["Abdon son of Hillel", "Jair", "Ibzan", "Tola"],
    answer: "Abdon son of Hillel",
    reference: "Judges 12:13-14",
  },
  {
    question:
      "For how many years did the LORD deliver Israel into Philistine hands before Samson's birth?",
    options: ["Forty years", "Twenty years", "Seven years", "Eighteen years"],
    answer: "Forty years",
    reference: "Judges 13:1",
  },
  {
    question:
      "From which clan and tribe was Manoah?",
    options: [
      "The Danite clan at Zorah",
      "The Judahite clan at Timnah",
      "The Ephraimite clan at Shiloh",
      "The Benjaminite clan at Gibeah",
    ],
    answer: "The Danite clan at Zorah",
    reference: "Judges 13:2",
  },
  {
    question:
      "What three restrictions did the angel give Manoah's wife concerning her promised son?",
    options: [
      "She was to drink no wine or fermented drink, eat nothing unclean, and no razor was to touch his head",
      "She was to eat no meat, drink no water, and cut no hair",
      "She was to fast weekly, avoid grapes, and offer no sacrifice",
      "She was to avoid oil, wine, and leavened bread",
    ],
    answer:
      "She was to drink no wine or fermented drink, eat nothing unclean, and no razor was to touch his head",
    reference: "Judges 13:4-5",
  },
  {
    question:
      "What role was Samson foretold to begin fulfilling?",
    options: [
      "He would begin to deliver Israel from the hands of the Philistines",
      "He would completely destroy the Philistines",
      "He would become king over Israel",
      "He would restore the tabernacle",
    ],
    answer:
      "He would begin to deliver Israel from the hands of the Philistines",
    reference: "Judges 13:5",
  },
  {
    question:
      "What did Manoah's wife initially not ask the man of God who appeared to her?",
    options: [
      "Where he came from, and he did not tell her his name",
      "Why Israel was oppressed",
      "When the child would be born",
      "Whether the child would be a judge",
    ],
    answer: "Where he came from, and he did not tell her his name",
    reference: "Judges 13:6",
  },
  {
    question:
      "How did the angel describe his name when Manoah asked for it?",
    options: [
      "Beyond understanding",
      "The LORD Is Peace",
      "Wonderful Counselor",
      "Hidden",
    ],
    answer: "Beyond understanding",
    reference: "Judges 13:17-18",
  },
  {
    question:
      "What happened to the angel of the LORD when Manoah offered the young goat?",
    options: [
      "He ascended in the flame from the altar",
      "He disappeared behind the altar",
      "He consumed the offering",
      "He entered Manoah's house",
    ],
    answer: "He ascended in the flame from the altar",
    reference: "Judges 13:19-20",
  },
  {
    question:
      "Between which two places did the Spirit of the LORD begin to stir Samson?",
    options: [
      "Zorah and Eshtaol",
      "Timnah and Gaza",
      "Ashkelon and Ekron",
      "Gibeah and Zorah",
    ],
    answer: "Zorah and Eshtaol",
    reference: "Judges 13:25",
  },
  {
    question:
      "Where did Samson first see the Philistine woman he wanted to marry?",
    options: ["Timnah", "Gaza", "Ashkelon", "Ekron"],
    answer: "Timnah",
    reference: "Judges 14:1-2",
  },
  {
    question:
      "What did Samson's parents not know about his desire to marry the Philistine woman?",
    options: [
      "It was from the LORD, who was seeking an occasion against the Philistines",
      "She had secretly converted",
      "Samson had already married her",
      "She was related to Manoah",
    ],
    answer:
      "It was from the LORD, who was seeking an occasion against the Philistines",
    reference: "Judges 14:4",
  },
  {
    question:
      "What animal attacked Samson near the vineyards of Timnah?",
    options: ["A young lion", "A bear", "A leopard", "A wild ox"],
    answer: "A young lion",
    reference: "Judges 14:5",
  },
  {
    question:
      "What later occupied the carcass of the lion Samson had killed?",
    options: [
      "A swarm of bees and honey",
      "Birds and a nest",
      "Wild dogs",
      "Locusts",
    ],
    answer: "A swarm of bees and honey",
    reference: "Judges 14:8",
  },
  {
    question:
      "How many companions were assigned to Samson during his wedding feast?",
    options: ["Thirty", "Forty", "Seven", "Twenty"],
    answer: "Thirty",
    reference: "Judges 14:11",
  },
  {
    question:
      "What reward did Samson promise if his companions solved his riddle?",
    options: [
      "Thirty linen garments and thirty sets of clothes",
      "Thirty shekels of silver",
      "Thirty sheep and thirty garments",
      "Seven garments and thirty silver pieces",
    ],
    answer: "Thirty linen garments and thirty sets of clothes",
    reference: "Judges 14:12",
  },
  {
    question:
      "How long were the Philistine companions given to solve Samson's riddle?",
    options: [
      "The seven days of the feast",
      "Three days",
      "Thirty days",
      "One day",
    ],
    answer: "The seven days of the feast",
    reference: "Judges 14:12",
  },
  {
    question:
      "What answer did the Philistines give to Samson's riddle?",
    options: [
      "What is sweeter than honey? What is stronger than a lion?",
      "What comes from the eater and gives life?",
      "What is stronger than death and sweeter than wine?",
      "What lives in the lion and feeds the strong?",
    ],
    answer: "What is sweeter than honey? What is stronger than a lion?",
    reference: "Judges 14:18",
  },
  {
    question:
      "How did Samson know the Philistines had obtained the answer through his wife?",
    options: [
      "He said they would not have solved it if they had not plowed with his heifer",
      "His wife confessed immediately",
      "One of the companions told him",
      "He overheard their conversation",
    ],
    answer:
      "He said they would not have solved it if they had not plowed with his heifer",
    reference: "Judges 14:18",
  },
  {
    question:
      "Where did Samson kill thirty men to obtain garments for those who solved his riddle?",
    options: ["Ashkelon", "Gaza", "Timnah", "Ekron"],
    answer: "Ashkelon",
    reference: "Judges 14:19",
  },
  {
    question:
      "To whom was Samson's wife given after he left in anger?",
    options: [
      "One of his companions who had attended him at the feast",
      "A Philistine ruler",
      "Her younger brother",
      "A man from Ashkelon",
    ],
    answer: "One of his companions who had attended him at the feast",
    reference: "Judges 14:20",
  },
  {
    question:
      "What did Samson bring when he later returned to visit his wife?",
    options: ["A young goat", "A lamb", "Thirty garments", "A jar of honey"],
    answer: "A young goat",
    reference: "Judges 15:1",
  },
  {
    question:
      "Whom did Samson's father-in-law offer him instead of his former wife?",
    options: [
      "Her younger sister",
      "Her older sister",
      "His niece",
      "A woman from Ashkelon",
    ],
    answer: "Her younger sister",
    reference: "Judges 15:2",
  },
  {
    question:
      "How many foxes or jackals did Samson catch to destroy Philistine crops?",
    options: ["Three hundred", "One hundred", "Five hundred", "Thirty"],
    answer: "Three hundred",
    reference: "Judges 15:4",
  },
  {
    question:
      "What did Samson fasten between pairs of the animals' tails?",
    options: ["Torches", "Knives", "Ropes", "Branches"],
    answer: "Torches",
    reference: "Judges 15:4",
  },
  {
    question:
      "What agricultural property did Samson burn with the animals and torches?",
    options: [
      "Standing grain, stacked grain, vineyards, and olive groves",
      "Only wheat fields",
      "Vineyards and fig orchards only",
      "Threshing floors and barns",
    ],
    answer: "Standing grain, stacked grain, vineyards, and olive groves",
    reference: "Judges 15:5",
  },
  {
    question:
      "How did the Philistines retaliate after learning why Samson had burned their crops?",
    options: [
      "They burned Samson's wife and her father to death",
      "They imprisoned Samson's father-in-law",
      "They destroyed Timnah",
      "They killed Manoah",
    ],
    answer: "They burned Samson's wife and her father to death",
    reference: "Judges 15:6",
  },
  {
    question:
      "Where did Samson stay after striking the Philistines ruthlessly?",
    options: [
      "In a cave in the rock of Etam",
      "At Zorah",
      "In the Valley of Sorek",
      "At Lehi",
    ],
    answer: "In a cave in the rock of Etam",
    reference: "Judges 15:8",
  },
  {
    question:
      "How many men of Judah went to the rock of Etam to bind Samson?",
    options: ["Three thousand", "One thousand", "Thirty", "Ten thousand"],
    answer: "Three thousand",
    reference: "Judges 15:11",
  },
  {
    question:
      "With what was Samson bound before being handed to the Philistines?",
    options: [
      "Two new ropes",
      "Bronze shackles",
      "Seven fresh bowstrings",
      "New cords",
    ],
    answer: "Two new ropes",
    reference: "Judges 15:13",
  },
  {
    question:
      "What weapon did Samson use to kill one thousand Philistines at Lehi?",
    options: [
      "A fresh jawbone of a donkey",
      "An oxgoad",
      "A Philistine sword",
      "A stone",
    ],
    answer: "A fresh jawbone of a donkey",
    reference: "Judges 15:15",
  },
  {
    question:
      "What name did Samson give the place where he threw away the donkey's jawbone?",
    options: ["Ramath Lehi", "En Hakkore", "Etam", "Mahanaim"],
    answer: "Ramath Lehi",
    reference: "Judges 15:17",
  },
  {
    question:
      "What name was given to the spring God opened for Samson at Lehi?",
    options: ["En Hakkore", "Ramath Lehi", "Beer Lahai Roi", "En Gedi"],
    answer: "En Hakkore",
    reference: "Judges 15:19",
  },
  {
    question:
      "How long did Samson lead Israel during the days of the Philistines?",
    options: ["Twenty years", "Forty years", "Seven years", "Thirty years"],
    answer: "Twenty years",
    reference: "Judges 15:20",
  },
  {
    question:
      "What did Samson carry away from Gaza after his enemies planned to kill him at dawn?",
    options: [
      "The doors of the city gate, the two posts, and the bar",
      "The city gates only",
      "A Philistine watchtower",
      "The gate's bronze locks",
    ],
    answer: "The doors of the city gate, the two posts, and the bar",
    reference: "Judges 16:3",
  },
  {
    question:
      "Where did Samson carry Gaza's gate?",
    options: [
      "To the top of the hill facing Hebron",
      "To Zorah",
      "To the rock of Etam",
      "To the Valley of Sorek",
    ],
    answer: "To the top of the hill facing Hebron",
    reference: "Judges 16:3",
  },
  {
    question:
      "Where did Delilah live?",
    options: [
      "The Valley of Sorek",
      "Gaza",
      "Timnah",
      "Ashkelon",
    ],
    answer: "The Valley of Sorek",
    reference: "Judges 16:4",
  },
  {
    question:
      "How much silver did each Philistine ruler promise Delilah for discovering the secret of Samson's strength?",
    options: [
      "Eleven hundred shekels",
      "One thousand shekels",
      "Seven hundred shekels",
      "Five hundred shekels",
    ],
    answer: "Eleven hundred shekels",
    reference: "Judges 16:5",
  },
  {
    question:
      "What was Samson's first false explanation for how he could be subdued?",
    options: [
      "Bind him with seven fresh bowstrings that had not been dried",
      "Bind him with new ropes",
      "Weave his hair into a loom",
      "Cut off one lock of hair",
    ],
    answer: "Bind him with seven fresh bowstrings that had not been dried",
    reference: "Judges 16:7",
  },
  {
    question:
      "What was Samson's second false explanation for the loss of his strength?",
    options: [
      "Bind him securely with new ropes that had never been used",
      "Tie him with seven bowstrings",
      "Shave his head",
      "Fasten his hands with bronze",
    ],
    answer: "Bind him securely with new ropes that had never been used",
    reference: "Judges 16:11",
  },
  {
    question:
      "What was Samson's third false explanation to Delilah?",
    options: [
      "Weave the seven braids of his head into the fabric on a loom and tighten it with a pin",
      "Cut three locks of his hair",
      "Tie his hair to seven ropes",
      "Cover his hair with a Philistine garment",
    ],
    answer:
      "Weave the seven braids of his head into the fabric on a loom and tighten it with a pin",
    reference: "Judges 16:13-14",
  },
  {
    question:
      "What did Samson finally reveal as the true reason no razor had touched his head?",
    options: [
      "He had been a Nazirite dedicated to God from his mother's womb",
      "His father had made a personal vow",
      "His hair contained a magical blessing",
      "He was forbidden to cut it until becoming king",
    ],
    answer: "He had been a Nazirite dedicated to God from his mother's womb",
    reference: "Judges 16:17",
  },
  {
    question:
      "What did the Philistines do to Samson after capturing him?",
    options: [
      "Gouged out his eyes, bound him with bronze shackles, and made him grind grain in prison",
      "Cut off his hands and imprisoned him",
      "Bound him to a pillar immediately",
      "Exiled him to Gaza",
    ],
    answer:
      "Gouged out his eyes, bound him with bronze shackles, and made him grind grain in prison",
    reference: "Judges 16:21",
  },
  {
    question:
      "What began happening to Samson while he was imprisoned?",
    options: [
      "The hair on his head began to grow again",
      "His eyesight returned",
      "His chains weakened",
      "His enemies began releasing him",
    ],
    answer: "The hair on his head began to grow again",
    reference: "Judges 16:22",
  },
  {
    question:
      "To which god did the Philistine rulers offer a great sacrifice after capturing Samson?",
    options: ["Dagon", "Baal", "Ashtoreth", "Molek"],
    answer: "Dagon",
    reference: "Judges 16:23",
  },
  {
    question:
      "Approximately how many men and women were on the roof of the Philistine temple while Samson entertained them?",
    options: ["Three thousand", "One thousand", "Five thousand", "Seven hundred"],
    answer: "Three thousand",
    reference: "Judges 16:27",
  },
  {
    question:
      "What final request did Samson make to God before bringing down the temple?",
    options: [
      "Strength one more time so he could take revenge for his two eyes",
      "Restoration of his eyesight",
      "Deliverance from Gaza",
      "Forgiveness for marrying Philistine women",
    ],
    answer:
      "Strength one more time so he could take revenge for his two eyes",
    reference: "Judges 16:28",
  },
  {
    question:
      "What is said about the number Samson killed at his death compared with during his life?",
    options: [
      "He killed more when he died than while he lived",
      "He killed exactly the same number",
      "He killed fewer at his death",
      "No comparison is given",
    ],
    answer: "He killed more when he died than while he lived",
    reference: "Judges 16:30",
  },
  {
    question:
      "Where was Samson buried?",
    options: [
      "Between Zorah and Eshtaol in the tomb of Manoah his father",
      "At Gaza",
      "At Timnah",
      "At Lehi",
    ],
    answer: "Between Zorah and Eshtaol in the tomb of Manoah his father",
    reference: "Judges 16:31",
  },
  {
    question:
      "How much silver had been stolen from Micah's mother before he confessed taking it?",
    options: [
      "Eleven hundred shekels",
      "Two hundred shekels",
      "Seventy shekels",
      "One thousand shekels",
    ],
    answer: "Eleven hundred shekels",
    reference: "Judges 17:2",
  },
  {
    question:
      "How much of the returned silver did Micah's mother give to a silversmith?",
    options: [
      "Two hundred shekels",
      "Eleven hundred shekels",
      "Fifty shekels",
      "Five hundred shekels",
    ],
    answer: "Two hundred shekels",
    reference: "Judges 17:4",
  },
  {
    question:
      "What religious objects did Micah possess in his shrine?",
    options: [
      "An ephod, household gods, and carved and cast images",
      "The ark and an altar",
      "A bronze serpent and ephod",
      "Only a carved image",
    ],
    answer: "An ephod, household gods, and carved and cast images",
    reference: "Judges 17:4-5",
  },
  {
    question:
      "Whom did Micah initially install as his priest?",
    options: [
      "One of his sons",
      "A Levite from Bethlehem",
      "A descendant of Aaron",
      "His father",
    ],
    answer: "One of his sons",
    reference: "Judges 17:5",
  },
  {
    question:
      "From what town did the young Levite who later became Micah's priest come?",
    options: [
      "Bethlehem in Judah",
      "Shiloh",
      "Gibeah",
      "Hebron",
    ],
    answer: "Bethlehem in Judah",
    reference: "Judges 17:7",
  },
  {
    question:
      "What annual payment did Micah promise the Levite in addition to clothing and food?",
    options: [
      "Ten shekels of silver",
      "Twenty shekels of silver",
      "One hundred shekels",
      "Five shekels of gold",
    ],
    answer: "Ten shekels of silver",
    reference: "Judges 17:10",
  },
  {
    question:
      "Why did Micah believe the LORD would prosper him after hiring the Levite?",
    options: [
      "Because he now had a Levite as his priest",
      "Because he returned his mother's silver",
      "Because he destroyed his idols",
      "Because he built an altar at Shiloh",
    ],
    answer: "Because he now had a Levite as his priest",
    reference: "Judges 17:13",
  },
  {
    question:
      "Why did the tribe of Dan send five warriors to explore the land?",
    options: [
      "They had not yet come into an inheritance of their own",
      "They wanted to conquer Judah",
      "They had been expelled by Ephraim",
      "They were searching for the ark",
    ],
    answer: "They had not yet come into an inheritance of their own",
    reference: "Judges 18:1-2",
  },
  {
    question:
      "From which two Danite towns were the five spies sent?",
    options: [
      "Zorah and Eshtaol",
      "Dan and Laish",
      "Timnah and Zorah",
      "Gibeah and Eshtaol",
    ],
    answer: "Zorah and Eshtaol",
    reference: "Judges 18:2",
  },
  {
    question:
      "How did the five Danite spies recognize the young Levite at Micah's house?",
    options: [
      "By his voice",
      "By his clothing",
      "By his ephod",
      "By his family name",
    ],
    answer: "By his voice",
    reference: "Judges 18:3",
  },
  {
    question:
      "How did the spies describe the people of Laish?",
    options: [
      "Living safely and unsuspectingly, prosperous and lacking nothing",
      "Heavily fortified and warlike",
      "Poor and dependent on Sidon",
      "Nomadic and scattered",
    ],
    answer: "Living safely and unsuspectingly, prosperous and lacking nothing",
    reference: "Judges 18:7, 10",
  },
  {
    question:
      "How many armed Danites set out from Zorah and Eshtaol to conquer Laish?",
    options: ["Six hundred", "Three hundred", "One thousand", "Forty thousand"],
    answer: "Six hundred",
    reference: "Judges 18:11",
  },
  {
    question:
      "What name was given to the Danite camp west of Kiriath Jearim?",
    options: ["Mahaneh Dan", "Ramath Lehi", "Havvoth Jair", "Mizpah Dan"],
    answer: "Mahaneh Dan",
    reference: "Judges 18:12",
  },
  {
    question:
      "What argument persuaded Micah's Levite to leave with the Danites?",
    options: [
      "It was better to be priest to a tribe and clan than to one man's household",
      "They promised him one hundred shekels",
      "They promised to make him high priest at Shiloh",
      "They revealed that Micah's shrine would be destroyed",
    ],
    answer:
      "It was better to be priest to a tribe and clan than to one man's household",
    reference: "Judges 18:19-20",
  },
  {
    question:
      "What did the Danites do to Laish?",
    options: [
      "They struck it with the sword, burned it, rebuilt it, and named it Dan",
      "They made a treaty with it",
      "They subjected it to forced labor",
      "They renamed it Mahaneh Dan without destroying it",
    ],
    answer:
      "They struck it with the sword, burned it, rebuilt it, and named it Dan",
    reference: "Judges 18:27-29",
  },
  {
    question:
      "After whom did the Danites name their conquered city?",
    options: [
      "Dan, their ancestor and son of Israel",
      "Their military commander",
      "The Levite priest",
      "Samson",
    ],
    answer: "Dan, their ancestor and son of Israel",
    reference: "Judges 18:29",
  },
  {
    question:
      "Who is identified as the priest serving the Danites after they established the carved image?",
    options: [
      "Jonathan son of Gershom, son of Moses",
      "Phinehas son of Eleazar",
      "Jonathan son of Saul",
      "Gershom son of Levi",
    ],
    answer: "Jonathan son of Gershom, son of Moses",
    reference: "Judges 18:30",
  },
  {
    question:
      "How long did the Danites keep Micah's carved image?",
    options: [
      "As long as the house of God was at Shiloh",
      "Until Samson became judge",
      "Forty years",
      "Until Joshua died",
    ],
    answer: "As long as the house of God was at Shiloh",
    reference: "Judges 18:31",
  },
  {
    question:
      "From what region was the Levite whose concubine became central to the crisis in Judges 19?",
    options: [
      "A remote part of the hill country of Ephraim",
      "Bethlehem in Judah",
      "Gibeah in Benjamin",
      "Shiloh",
    ],
    answer: "A remote part of the hill country of Ephraim",
    reference: "Judges 19:1",
  },
  {
    question:
      "Where was the Levite's concubine originally from?",
    options: [
      "Bethlehem in Judah",
      "Gibeah",
      "Jebus",
      "Ramah",
    ],
    answer: "Bethlehem in Judah",
    reference: "Judges 19:1",
  },
  {
    question:
      "How long did the concubine remain at her father's house before the Levite went to persuade her to return?",
    options: ["Four months", "Three months", "Seven months", "One year"],
    answer: "Four months",
    reference: "Judges 19:2",
  },
  {
    question:
      "Why did the Levite refuse his servant's suggestion to spend the night in Jebus?",
    options: [
      "He would not enter a city of foreigners who were not Israelites",
      "The city gates were closed",
      "He feared the Jebusite army",
      "He had been warned against Jerusalem",
    ],
    answer:
      "He would not enter a city of foreigners who were not Israelites",
    reference: "Judges 19:11-12",
  },
  {
    question:
      "Which two Israelite towns did the Levite suggest reaching instead of Jebus?",
    options: [
      "Gibeah or Ramah",
      "Bethel or Shiloh",
      "Mizpah or Bethel",
      "Geba or Jericho",
    ],
    answer: "Gibeah or Ramah",
    reference: "Judges 19:13",
  },
  {
    question:
      "Who eventually offered hospitality to the Levite in Gibeah?",
    options: [
      "An old man from the hill country of Ephraim who was living in Gibeah",
      "A Benjaminite elder",
      "A Levite priest",
      "The city ruler",
    ],
    answer:
      "An old man from the hill country of Ephraim who was living in Gibeah",
    reference: "Judges 19:16-21",
  },
  {
    question:
      "What did the Levite do with his concubine's body after returning home?",
    options: [
      "Cut it into twelve pieces and sent them throughout Israel",
      "Buried it at Bethlehem",
      "Took it to Shiloh",
      "Burned it outside his house",
    ],
    answer: "Cut it into twelve pieces and sent them throughout Israel",
    reference: "Judges 19:29",
  },
  {
    question:
      "From what northern and southern limits did Israel assemble after receiving the pieces?",
    options: [
      "From Dan to Beersheba, including Gilead",
      "From Naphtali to Hebron",
      "From Shiloh to Beersheba",
      "From Dan to Jerusalem",
    ],
    answer: "From Dan to Beersheba, including Gilead",
    reference: "Judges 20:1",
  },
  {
    question:
      "Where did the assembly gather before the LORD concerning the crime at Gibeah?",
    options: ["Mizpah", "Shiloh", "Bethel", "Gilgal"],
    answer: "Mizpah",
    reference: "Judges 20:1",
  },
  {
    question:
      "How many sword-bearing Israelite soldiers assembled against Benjamin?",
    options: [
      "Four hundred thousand",
      "Forty thousand",
      "Six hundred thousand",
      "Three hundred thousand",
    ],
    answer: "Four hundred thousand",
    reference: "Judges 20:2",
  },
  {
    question:
      "How many sword-bearing men did Benjamin muster from its cities?",
    options: [
      "Twenty-six thousand, besides seven hundred from Gibeah",
      "Twenty-five thousand total",
      "Forty thousand",
      "Twelve thousand",
    ],
    answer: "Twenty-six thousand, besides seven hundred from Gibeah",
    reference: "Judges 20:15",
  },
  {
    question:
      "What exceptional skill characterized seven hundred selected Benjaminite warriors?",
    options: [
      "They were left-handed and could sling a stone at a hair without missing",
      "They could shoot arrows while riding",
      "They could fight equally with either hand",
      "They could throw spears farther than other Israelites",
    ],
    answer:
      "They were left-handed and could sling a stone at a hair without missing",
    reference: "Judges 20:16",
  },
  {
    question:
      "Which tribe did God tell Israel should go first against Benjamin?",
    options: ["Judah", "Ephraim", "Reuben", "Levi"],
    answer: "Judah",
    reference: "Judges 20:18",
  },
  {
    question:
      "How many Israelites did Benjamin kill on the first day of battle?",
    options: ["Twenty-two thousand", "Eighteen thousand", "Forty thousand", "Twenty-five thousand"],
    answer: "Twenty-two thousand",
    reference: "Judges 20:21",
  },
  {
    question:
      "How many Israelites did Benjamin kill on the second day?",
    options: ["Eighteen thousand", "Twenty-two thousand", "Ten thousand", "Twenty-five thousand"],
    answer: "Eighteen thousand",
    reference: "Judges 20:25",
  },
  {
    question:
      "Who was ministering before the ark when Israel sought the LORD during the war with Benjamin?",
    options: [
      "Phinehas son of Eleazar, son of Aaron",
      "Jonathan son of Gershom",
      "A descendant of Eli",
      "An unnamed high priest",
    ],
    answer: "Phinehas son of Eleazar, son of Aaron",
    reference: "Judges 20:27-28",
  },
  {
    question:
      "What military tactic finally enabled Israel to defeat Benjamin at Gibeah?",
    options: [
      "They set an ambush around Gibeah",
      "They attacked only at night",
      "They starved the city",
      "They used iron chariots",
    ],
    answer: "They set an ambush around Gibeah",
    reference: "Judges 20:29-37",
  },
  {
    question:
      "What signal showed Israel's main force that the ambush had taken Gibeah?",
    options: [
      "A great cloud of smoke rising from the city",
      "A trumpet blast",
      "A pillar of fire",
      "A messenger carrying a torch",
    ],
    answer: "A great cloud of smoke rising from the city",
    reference: "Judges 20:38-40",
  },
  {
    question:
      "How many Benjaminites fled to the rock of Rimmon and remained there?",
    options: ["Six hundred", "Seven hundred", "Four hundred", "One thousand"],
    answer: "Six hundred",
    reference: "Judges 20:47",
  },
  {
    question:
      "How long did the surviving Benjaminites remain at the rock of Rimmon?",
    options: ["Four months", "Two months", "Seven days", "Six months"],
    answer: "Four months",
    reference: "Judges 20:47",
  },
  {
    question:
      "What oath had the Israelites sworn at Mizpah concerning Benjamin?",
    options: [
      "None of them would give his daughter in marriage to a Benjaminite",
      "They would never allow Benjamin to return",
      "They would destroy every Benjaminite city permanently",
      "They would never fight alongside Benjamin again",
    ],
    answer:
      "None of them would give his daughter in marriage to a Benjaminite",
    reference: "Judges 21:1",
  },
  {
    question:
      "Which Israelite town had sent no one to the assembly before the LORD at Mizpah?",
    options: [
      "Jabesh Gilead",
      "Shiloh",
      "Bethel",
      "Ramoth Gilead",
    ],
    answer: "Jabesh Gilead",
    reference: "Judges 21:8-9",
  },
  {
    question:
      "How many warriors were sent against Jabesh Gilead?",
    options: ["Twelve thousand", "Ten thousand", "Forty thousand", "Six hundred"],
    answer: "Twelve thousand",
    reference: "Judges 21:10",
  },
  {
    question:
      "How many young women from Jabesh Gilead who had never slept with a man were spared?",
    options: ["Four hundred", "Six hundred", "Two hundred", "Seven hundred"],
    answer: "Four hundred",
    reference: "Judges 21:12",
  },
  {
    question:
      "Where were the four hundred women of Jabesh Gilead taken?",
    options: [
      "The camp at Shiloh in Canaan",
      "The rock of Rimmon",
      "Mizpah",
      "Bethel",
    ],
    answer: "The camp at Shiloh in Canaan",
    reference: "Judges 21:12",
  },
  {
    question:
      "After the women from Jabesh Gilead were distributed, how many Benjaminite men still lacked wives?",
    options: ["Two hundred", "Four hundred", "Six hundred", "One hundred"],
    answer: "Two hundred",
    reference: "Judges 21:14-16",
  },
  {
    question:
      "What annual event at Shiloh provided the plan for the remaining Benjaminites to obtain wives?",
    options: [
      "A festival of the LORD during which young women came out to dance",
      "The Day of Atonement",
      "A military gathering",
      "A harvest census",
    ],
    answer:
      "A festival of the LORD during which young women came out to dance",
    reference: "Judges 21:19-21",
  },
  {
    question:
      "Where were the Benjaminites told to hide while waiting for the young women of Shiloh?",
    options: [
      "In the vineyards",
      "In caves",
      "Behind the city walls",
      "At the rock of Rimmon",
    ],
    answer: "In the vineyards",
    reference: "Judges 21:21",
  },
  {
    question:
      "How is Shiloh's location described in the instructions concerning the festival?",
    options: [
      "North of Bethel, east of the road from Bethel to Shechem, and south of Lebonah",
      "South of Bethel and west of Shechem",
      "North of Shechem near Mount Ebal",
      "East of the Jordan opposite Jericho",
    ],
    answer:
      "North of Bethel, east of the road from Bethel to Shechem, and south of Lebonah",
    reference: "Judges 21:19",
  },
  {
    question:
      "What repeated statement at the end of Judges summarizes Israel's social and moral condition?",
    options: [
      "In those days Israel had no king; everyone did what was right in his own eyes",
      "Israel had no prophet, and the word of the LORD was rare",
      "Israel served the LORD all the days of the judges",
      "Every tribe remained within its inheritance",
    ],
    answer:
      "In those days Israel had no king; everyone did what was right in his own eyes",
    reference: "Judges 21:25",
  },
];

export default judgesQuestions;