const numbersQuestions = [
  {
    question:
      "From what age were the Israelite men counted for military service in the census?",
    options: [
      "Eighteen years old and above",
      "Twenty years old and above",
      "Twenty-five years old and above",
      "Thirty years old and above",
    ],
    answer: "Twenty years old and above",
    reference: "Numbers 1:3",
  },
  {
    question:
      "Which tribe was not counted with the other tribes in the military census?",
    options: [
      "Judah",
      "Levi",
      "Benjamin",
      "Simeon",
    ],
    answer: "Levi",
    reference: "Numbers 1:47-49",
  },
  {
    question:
      "What special responsibility was given to the Levites concerning the tabernacle?",
    options: [
      "To guard and carry it",
      "To lead Israel's army",
      "To distribute the land",
      "To judge disputes among the tribes",
    ],
    answer: "To guard and carry it",
    reference: "Numbers 1:50-53",
  },
  {
    question:
      "Which tribe camped directly east of the tabernacle as the leading tribe of that side?",
    options: [
      "Judah",
      "Reuben",
      "Dan",
      "Ephraim",
    ],
    answer: "Judah",
    reference: "Numbers 2:3",
  },
  {
    question:
      "Which tribe led the camp on the south side of the tabernacle?",
    options: [
      "Reuben",
      "Judah",
      "Dan",
      "Ephraim",
    ],
    answer: "Reuben",
    reference: "Numbers 2:10",
  },
  {
    question:
      "Which tribe led the camp on the west side of the tabernacle?",
    options: [
      "Ephraim",
      "Benjamin",
      "Dan",
      "Judah",
    ],
    answer: "Ephraim",
    reference: "Numbers 2:18",
  },
  {
    question:
      "Which tribe led the camp on the north side of the tabernacle?",
    options: [
      "Asher",
      "Dan",
      "Naphtali",
      "Gad",
    ],
    answer: "Dan",
    reference: "Numbers 2:25",
  },
  {
    question:
      "Who were the four sons of Aaron named in Numbers?",
    options: [
      "Nadab, Abihu, Eleazar, and Ithamar",
      "Eleazar, Phinehas, Gershon, and Merari",
      "Nadab, Eleazar, Korah, and Ithamar",
      "Abihu, Phinehas, Kohath, and Gershon",
    ],
    answer: "Nadab, Abihu, Eleazar, and Ithamar",
    reference: "Numbers 3:2",
  },
  {
    question:
      "Why did Nadab and Abihu die?",
    options: [
      "They rebelled against Moses",
      "They offered unauthorized fire",
      "They refused to serve as priests",
      "They entered the camp of Moab",
    ],
    answer: "They offered unauthorized fire",
    reference: "Numbers 3:4",
  },
  {
    question:
      "What did God claim for Himself in place of every firstborn Israelite?",
    options: [
      "The Levites",
      "The priests only",
      "The tribe of Judah",
      "The elders",
    ],
    answer: "The Levites",
    reference: "Numbers 3:12",
  },
  {
    question:
      "Which Levitical clan was responsible for the most holy objects of the sanctuary?",
    options: [
      "Gershonites",
      "Merarites",
      "Kohathites",
      "Aaronites",
    ],
    answer: "Kohathites",
    reference: "Numbers 4:4",
  },
  {
    question:
      "Who had to cover the sacred objects before the Kohathites could carry them?",
    options: [
      "Moses and Joshua",
      "Aaron and his sons",
      "The tribal leaders",
      "The Gershonites",
    ],
    answer: "Aaron and his sons",
    reference: "Numbers 4:5-15",
  },
  {
    question:
      "What would happen if the Kohathites touched the holy things directly?",
    options: [
      "They would become priests",
      "They would die",
      "They would be sent outside the camp",
      "They would be unclean for seven days",
    ],
    answer: "They would die",
    reference: "Numbers 4:15",
  },
  {
    question:
      "What was to happen to people with certain skin diseases or bodily discharges?",
    options: [
      "They were to remain near the tabernacle",
      "They were to be sent outside the camp",
      "They were to join the Levites",
      "They were to fast for seven days",
    ],
    answer: "They were to be sent outside the camp",
    reference: "Numbers 5:2-4",
  },
  {
    question:
      "When someone wronged another person, what was added to the full restitution?",
    options: [
      "One tenth",
      "One fifth",
      "One quarter",
      "One half",
    ],
    answer: "One fifth",
    reference: "Numbers 5:7",
  },
  {
    question:
      "What was the purpose of the bitter water in the jealousy test?",
    options: [
      "To test whether a wife had been unfaithful",
      "To cleanse a priest",
      "To dedicate a Nazirite",
      "To test a tribal leader",
    ],
    answer: "To test whether a wife had been unfaithful",
    reference: "Numbers 5:11-31",
  },
  {
    question:
      "What was a Nazirite forbidden to consume during the period of the vow?",
    options: [
      "Products from the grapevine",
      "Bread",
      "Milk",
      "Olive oil",
    ],
    answer: "Products from the grapevine",
    reference: "Numbers 6:3-4",
  },
  {
    question:
      "What was a Nazirite forbidden to do to his hair during the vow?",
    options: [
      "Wash it",
      "Cut it",
      "Cover it",
      "Anoint it",
    ],
    answer: "Cut it",
    reference: "Numbers 6:5",
  },
  {
    question:
      "What contact would make a Nazirite ceremonially defiled?",
    options: [
      "Touching a dead body",
      "Touching a foreigner",
      "Entering a vineyard",
      "Eating unleavened bread",
    ],
    answer: "Touching a dead body",
    reference: "Numbers 6:6-7",
  },
  {
    question:
      "Which blessing begins with the words, 'The Lord bless you and keep you'?",
    options: [
      "The priestly blessing",
      "The tribal blessing",
      "The Nazirite blessing",
      "The census blessing",
    ],
    answer: "The priestly blessing",
    reference: "Numbers 6:24-26",
  },
  {
    question:
      "How many leaders brought offerings at the dedication of the altar?",
    options: [
      "Ten",
      "Twelve",
      "Seventy",
      "Twenty-four",
    ],
    answer: "Twelve",
    reference: "Numbers 7:2-3",
  },
  {
    question:
      "How many covered carts were brought by the tribal leaders for the Levites?",
    options: [
      "Four",
      "Six",
      "Twelve",
      "Twenty-four",
    ],
    answer: "Six",
    reference: "Numbers 7:3",
  },
  {
    question:
      "Why were no carts given to the Kohathites?",
    options: [
      "They had fewer duties",
      "They had to carry the holy things on their shoulders",
      "They refused the carts",
      "They traveled separately",
    ],
    answer: "They had to carry the holy things on their shoulders",
    reference: "Numbers 7:9",
  },
  {
    question:
      "Where was the lampstand positioned so its lamps gave light in front of it?",
    options: [
      "Inside the courtyard",
      "Opposite the lampstand itself",
      "Behind the ark",
      "Outside the tent",
    ],
    answer: "Opposite the lampstand itself",
    reference: "Numbers 8:2",
  },
  {
    question:
      "What were the Levites presented as before the Lord?",
    options: [
      "A wave offering",
      "A burnt offering",
      "A guilt offering",
      "A drink offering",
    ],
    answer: "A wave offering",
    reference: "Numbers 8:11",
  },
  {
    question:
      "At what age did Levites begin their service at the tent of meeting?",
    options: [
      "Twenty",
      "Twenty-five",
      "Thirty",
      "Forty",
    ],
    answer: "Twenty-five",
    reference: "Numbers 8:24",
  },
  {
    question:
      "At what age did Levites retire from regular service?",
    options: [
      "Forty",
      "Forty-five",
      "Fifty",
      "Sixty",
    ],
    answer: "Fifty",
    reference: "Numbers 8:25",
  },
  {
    question:
      "Who was allowed to celebrate the Passover one month later than usual?",
    options: [
      "Those who were ceremonially unclean or away on a journey",
      "Only priests",
      "Only Levites",
      "Only foreigners",
    ],
    answer: "Those who were ceremonially unclean or away on a journey",
    reference: "Numbers 9:10-11",
  },
  {
    question:
      "What appeared over the tabernacle by day?",
    options: [
      "A cloud",
      "Fire",
      "A rainbow",
      "Smoke only",
    ],
    answer: "A cloud",
    reference: "Numbers 9:15-16",
  },
  {
    question:
      "What appeared over the tabernacle by night?",
    options: [
      "A pillar of fire",
      "A star",
      "A moonbeam",
      "A lamp",
    ],
    answer: "A pillar of fire",
    reference: "Numbers 9:16",
  },
  {
    question:
      "What determined when the Israelites set out on their journeys?",
    options: [
      "The movement of the cloud",
      "The decision of the tribal leaders",
      "The sounding of drums",
      "The rising of the sun",
    ],
    answer: "The movement of the cloud",
    reference: "Numbers 9:17-23",
  },
  {
    question:
      "How many silver trumpets did God command Moses to make?",
    options: [
      "One",
      "Two",
      "Seven",
      "Twelve",
    ],
    answer: "Two",
    reference: "Numbers 10:2",
  },
  {
    question:
      "What was one purpose of the silver trumpets?",
    options: [
      "To summon the community and signal movement",
      "To announce sacrifices only",
      "To mark the beginning of every month only",
      "To call the Levites to eat",
    ],
    answer: "To summon the community and signal movement",
    reference: "Numbers 10:2",
  },
  {
    question:
      "Which tribe set out first when Israel began moving from Sinai?",
    options: [
      "Judah",
      "Reuben",
      "Dan",
      "Ephraim",
    ],
    answer: "Judah",
    reference: "Numbers 10:14",
  },
  {
    question:
      "What complaint caused the fire of the Lord to burn among the people at Taberah?",
    options: [
      "They complained about their hardships",
      "They refused to leave Egypt",
      "They worshiped another god",
      "They attacked Moses",
    ],
    answer: "They complained about their hardships",
    reference: "Numbers 11:1-3",
  },
  {
    question:
      "What food did the people crave after becoming tired of manna?",
    options: [
      "Meat",
      "Fish only",
      "Bread",
      "Fruit",
    ],
    answer: "Meat",
    reference: "Numbers 11:4",
  },
  {
    question:
      "How was manna described in appearance?",
    options: [
      "Like coriander seed",
      "Like barley",
      "Like olives",
      "Like grapes",
    ],
    answer: "Like coriander seed",
    reference: "Numbers 11:7",
  },
  {
    question:
      "How many elders did God tell Moses to gather to help carry the burden of the people?",
    options: [
      "Twelve",
      "Forty",
      "Seventy",
      "One hundred",
    ],
    answer: "Seventy",
    reference: "Numbers 11:16",
  },
  {
    question:
      "What happened when the Spirit rested on the seventy elders?",
    options: [
      "They prophesied",
      "They became priests",
      "They fell asleep",
      "They left the camp",
    ],
    answer: "They prophesied",
    reference: "Numbers 11:25",
  },
  {
    question:
      "Which two men prophesied in the camp even though they had not gone out to the tent?",
    options: [
      "Eldad and Medad",
      "Dathan and Abiram",
      "Joshua and Caleb",
      "Korah and On",
    ],
    answer: "Eldad and Medad",
    reference: "Numbers 11:26",
  },
  {
    question:
      "What birds did God send in great numbers to provide meat?",
    options: [
      "Quail",
      "Doves",
      "Pigeons",
      "Ravens",
    ],
    answer: "Quail",
    reference: "Numbers 11:31",
  },
  {
    question:
      "What happened to many people while the meat was still between their teeth?",
    options: [
      "A severe plague struck them",
      "They fell asleep",
      "They became unable to speak",
      "They were sent outside the camp",
    ],
    answer: "A severe plague struck them",
    reference: "Numbers 11:33",
  },
  {
    question:
      "Why did Miriam and Aaron speak against Moses?",
    options: [
      "Because of the Cushite woman he had married",
      "Because he refused to enter Canaan",
      "Because he appointed Joshua",
      "Because he counted the tribes",
    ],
    answer: "Because of the Cushite woman he had married",
    reference: "Numbers 12:1",
  },
  {
    question:
      "How was Moses described in relation to humility?",
    options: [
      "More humble than anyone else on earth",
      "More powerful than every king",
      "More patient than Aaron",
      "More knowledgeable than the elders",
    ],
    answer: "More humble than anyone else on earth",
    reference: "Numbers 12:3",
  },
  {
    question:
      "What happened to Miriam after God confronted her and Aaron?",
    options: [
      "She became leprous",
      "She became blind",
      "She was exiled permanently",
      "She lost her voice",
    ],
    answer: "She became leprous",
    reference: "Numbers 12:10",
  },
  {
    question:
      "How long was Miriam kept outside the camp?",
    options: [
      "Three days",
      "Seven days",
      "Fourteen days",
      "Thirty days",
    ],
    answer: "Seven days",
    reference: "Numbers 12:14-15",
  },
  {
    question:
      "How many men were sent to explore the land of Canaan?",
    options: [
      "Ten",
      "Twelve",
      "Forty",
      "Seventy",
    ],
    answer: "Twelve",
    reference: "Numbers 13:1-16",
  },
  {
    question:
      "What new name did Moses give Hoshea son of Nun?",
    options: [
      "Joshua",
      "Caleb",
      "Gershom",
      "Eleazar",
    ],
    answer: "Joshua",
    reference: "Numbers 13:16",
  },
  {
    question:
      "How long did the spies explore Canaan?",
    options: [
      "Seven days",
      "Twenty days",
      "Forty days",
      "Seventy days",
    ],
    answer: "Forty days",
    reference: "Numbers 13:25",
  },
  {
    question:
      "What large fruit did the spies carry back on a pole between two men?",
    options: [
      "A cluster of grapes",
      "A bunch of figs",
      "Pomegranates",
      "Dates",
    ],
    answer: "A cluster of grapes",
    reference: "Numbers 13:23",
  },
  {
    question:
      "Which two spies encouraged Israel to trust God and enter the land?",
    options: [
      "Joshua and Caleb",
      "Moses and Aaron",
      "Korah and Dathan",
      "Eldad and Medad",
    ],
    answer: "Joshua and Caleb",
    reference: "Numbers 14:6-9",
  },
  {
    question:
      "What did the people threaten to do after hearing the negative report of the spies?",
    options: [
      "Choose another leader and return to Egypt",
      "Attack the Levites",
      "Destroy the tabernacle",
      "Cross the Jordan immediately",
    ],
    answer: "Choose another leader and return to Egypt",
    reference: "Numbers 14:4",
  },
  {
    question:
      "What punishment was given to the generation that refused to enter Canaan?",
    options: [
      "They would wander forty years and die in the wilderness",
      "They would return to Egypt",
      "They would serve the Canaanites",
      "They would remain at Sinai",
    ],
    answer: "They would wander forty years and die in the wilderness",
    reference: "Numbers 14:29-35",
  },
  {
    question:
      "Why was the wilderness wandering set at forty years?",
    options: [
      "One year for each day the spies explored the land",
      "One year for each tribe",
      "One year for each generation",
      "One year for each plague in Egypt",
    ],
    answer: "One year for each day the spies explored the land",
    reference: "Numbers 14:34",
  },
  {
    question:
      "Which two adult spies were exempted from the judgment that fell on the rebellious generation?",
    options: [
      "Joshua and Caleb",
      "Eldad and Medad",
      "Moses and Aaron",
      "Eleazar and Ithamar",
    ],
    answer: "Joshua and Caleb",
    reference: "Numbers 14:30",
  },
  {
    question:
      "What happened to the ten spies who spread the bad report?",
    options: [
      "They died by a plague",
      "They were imprisoned",
      "They were sent back to Egypt",
      "They became servants",
    ],
    answer: "They died by a plague",
    reference: "Numbers 14:36-37",
  },
  {
    question:
      "What happened when some Israelites tried to enter Canaan after God had told them not to go?",
    options: [
      "They were defeated by the Amalekites and Canaanites",
      "They captured the land",
      "They became lost",
      "They crossed the Jordan successfully",
    ],
    answer: "They were defeated by the Amalekites and Canaanites",
    reference: "Numbers 14:40-45",
  },
  {
    question:
      "What color cord was attached to the tassels on the garments of the Israelites?",
    options: [
      "Blue",
      "Purple",
      "Red",
      "White",
    ],
    answer: "Blue",
    reference: "Numbers 15:38",
  },
  {
    question:
      "What was the purpose of the tassels on Israelite garments?",
    options: [
      "To remind them of God's commands",
      "To identify tribal rank",
      "To show wealth",
      "To distinguish priests from Levites",
    ],
    answer: "To remind them of God's commands",
    reference: "Numbers 15:39-40",
  },
  {
    question:
      "What did Korah, Dathan, and Abiram challenge about Moses and Aaron?",
    options: [
      "Their leadership and special authority",
      "Their knowledge of Egypt",
      "Their military ability",
      "Their ability to count the tribes",
    ],
    answer: "Their leadership and special authority",
    reference: "Numbers 16:1-3",
  },
  {
    question:
      "How many community leaders joined Korah's rebellion?",
    options: [
      "Fifty",
      "One hundred",
      "Two hundred fifty",
      "Five hundred",
    ],
    answer: "Two hundred fifty",
    reference: "Numbers 16:2",
  },
  {
    question:
      "What unusual event happened to Dathan and Abiram and their households?",
    options: [
      "The earth opened and swallowed them",
      "Fire consumed them",
      "They became leprous",
      "They were exiled to Egypt",
    ],
    answer: "The earth opened and swallowed them",
    reference: "Numbers 16:31-33",
  },
  {
    question:
      "What happened to the two hundred fifty men who offered incense in Korah's rebellion?",
    options: [
      "Fire from the Lord consumed them",
      "They were swallowed by the earth",
      "They became blind",
      "They were pardoned",
    ],
    answer: "Fire from the Lord consumed them",
    reference: "Numbers 16:35",
  },
  {
    question:
      "What was done with the censers of the men who died in Korah's rebellion?",
    options: [
      "They were hammered into a covering for the altar",
      "They were buried",
      "They were melted into trumpets",
      "They were thrown outside the camp",
    ],
    answer: "They were hammered into a covering for the altar",
    reference: "Numbers 16:38-40",
  },
  {
    question:
      "What stopped the plague that broke out after the people complained about the deaths in Korah's rebellion?",
    options: [
      "Aaron stood between the living and the dead with incense",
      "Moses struck the ground",
      "Joshua sounded the trumpets",
      "The Levites offered a bull",
    ],
    answer: "Aaron stood between the living and the dead with incense",
    reference: "Numbers 16:46-48",
  },
  {
    question:
      "How many tribal staffs were placed before the Lord to settle the question of priestly authority?",
    options: [
      "Ten",
      "Twelve",
      "Thirteen",
      "Twenty-four",
    ],
    answer: "Twelve",
    reference: "Numbers 17:2-6",
  },
  {
    question:
      "What happened to Aaron's staff overnight?",
    options: [
      "It budded, blossomed, and produced almonds",
      "It turned into a serpent",
      "It caught fire",
      "It split in two",
    ],
    answer: "It budded, blossomed, and produced almonds",
    reference: "Numbers 17:8",
  },
  {
    question:
      "Why was Aaron's staff kept before the ark?",
    options: [
      "As a sign against the rebels",
      "As a weapon",
      "As a symbol of tribal inheritance",
      "As part of the lampstand",
    ],
    answer: "As a sign against the rebels",
    reference: "Numbers 17:10",
  },
  {
    question:
      "What portion of Israel's tithes was given to the Levites?",
    options: [
      "One tenth",
      "One fifth",
      "One quarter",
      "One half",
    ],
    answer: "One tenth",
    reference: "Numbers 18:21",
  },
  {
    question:
      "What portion of the tithe received by the Levites was itself given to the Lord?",
    options: [
      "One tenth",
      "One fifth",
      "One half",
      "All of it",
    ],
    answer: "One tenth",
    reference: "Numbers 18:26",
  },
  {
    question:
      "What animal was used to prepare the water of cleansing from impurity caused by death?",
    options: [
      "A red heifer",
      "A white lamb",
      "A black goat",
      "A young bull",
    ],
    answer: "A red heifer",
    reference: "Numbers 19:2",
  },
  {
    question:
      "What was done with the red heifer?",
    options: [
      "It was burned outside the camp",
      "It was sacrificed on the altar",
      "It was released into the wilderness",
      "It was eaten by the priests",
    ],
    answer: "It was burned outside the camp",
    reference: "Numbers 19:3-5",
  },
  {
    question:
      "How long was someone unclean after touching a dead human body?",
    options: [
      "Three days",
      "Seven days",
      "Fourteen days",
      "Thirty days",
    ],
    answer: "Seven days",
    reference: "Numbers 19:11",
  },
  {
    question:
      "Where did Miriam die?",
    options: [
      "Kadesh",
      "Sinai",
      "Moab",
      "Jericho",
    ],
    answer: "Kadesh",
    reference: "Numbers 20:1",
  },
  {
    question:
      "What did God tell Moses to do to bring water from the rock?",
    options: [
      "Speak to the rock",
      "Strike the rock once",
      "Pour oil on the rock",
      "Build an altar beside the rock",
    ],
    answer: "Speak to the rock",
    reference: "Numbers 20:8",
  },
  {
    question:
      "What did Moses actually do at the rock?",
    options: [
      "He struck it twice",
      "He spoke to it once",
      "He struck it once",
      "He ignored it",
    ],
    answer: "He struck it twice",
    reference: "Numbers 20:11",
  },
  {
    question:
      "What consequence did Moses and Aaron receive for their failure at Meribah?",
    options: [
      "They would not bring the assembly into the promised land",
      "They were removed immediately from leadership",
      "They were sent back to Egypt",
      "They lost the tabernacle",
    ],
    answer: "They would not bring the assembly into the promised land",
    reference: "Numbers 20:12",
  },
  {
    question:
      "Which nation refused Israel permission to pass through its territory?",
    options: [
      "Edom",
      "Moab",
      "Ammon",
      "Philistia",
    ],
    answer: "Edom",
    reference: "Numbers 20:14-21",
  },
  {
    question:
      "Where did Aaron die?",
    options: [
      "Mount Hor",
      "Mount Sinai",
      "Mount Nebo",
      "Mount Carmel",
    ],
    answer: "Mount Hor",
    reference: "Numbers 20:22-29",
  },
  {
    question:
      "Who became high priest after Aaron died?",
    options: [
      "Eleazar",
      "Ithamar",
      "Phinehas",
      "Joshua",
    ],
    answer: "Eleazar",
    reference: "Numbers 20:25-28",
  },
  {
    question:
      "Why did God send venomous snakes among the Israelites?",
    options: [
      "They spoke against God and Moses",
      "They worshiped Baal",
      "They attacked Edom",
      "They refused to offer sacrifices",
    ],
    answer: "They spoke against God and Moses",
    reference: "Numbers 21:5-6",
  },
  {
    question:
      "What did Moses make so that people bitten by snakes could live?",
    options: [
      "A bronze snake",
      "A golden calf",
      "A silver serpent",
      "A wooden staff",
    ],
    answer: "A bronze snake",
    reference: "Numbers 21:8-9",
  },
  {
    question:
      "What happened when someone bitten by a snake looked at the bronze snake?",
    options: [
      "The person lived",
      "The person became a priest",
      "The snake bite disappeared immediately",
      "The person had to leave the camp",
    ],
    answer: "The person lived",
    reference: "Numbers 21:9",
  },
  {
    question:
      "Which Amorite king refused Israel passage and was defeated?",
    options: [
      "Sihon",
      "Og",
      "Balak",
      "Agag",
    ],
    answer: "Sihon",
    reference: "Numbers 21:21-24",
  },
  {
    question:
      "Which king of Bashan came out to fight Israel and was defeated?",
    options: [
      "Og",
      "Sihon",
      "Balak",
      "Balaam",
    ],
    answer: "Og",
    reference: "Numbers 21:33-35",
  },
  {
    question:
      "Who was king of Moab when he became afraid of Israel?",
    options: [
      "Balak",
      "Balaam",
      "Sihon",
      "Og",
    ],
    answer: "Balak",
    reference: "Numbers 22:2-4",
  },
  {
    question:
      "Whom did Balak summon to curse Israel?",
    options: [
      "Balaam",
      "Korah",
      "Eldad",
      "Phinehas",
    ],
    answer: "Balaam",
    reference: "Numbers 22:5-6",
  },
  {
    question:
      "What did Balaam's donkey see that Balaam initially could not see?",
    options: [
      "The angel of the Lord",
      "A lion",
      "A burning bush",
      "A Moabite army",
    ],
    answer: "The angel of the Lord",
    reference: "Numbers 22:23",
  },
  {
    question:
      "How many times did Balaam strike his donkey before it spoke?",
    options: [
      "Once",
      "Twice",
      "Three times",
      "Seven times",
    ],
    answer: "Three times",
    reference: "Numbers 22:28",
  },
  {
    question:
      "What extraordinary thing happened to Balaam's donkey?",
    options: [
      "It spoke",
      "It died",
      "It became blind",
      "It ran back to Moab",
    ],
    answer: "It spoke",
    reference: "Numbers 22:28-30",
  },
  {
    question:
      "What did Balaam repeatedly say he could only speak?",
    options: [
      "What God put in his mouth",
      "What Balak paid him to say",
      "What the elders requested",
      "What he saw in dreams",
    ],
    answer: "What God put in his mouth",
    reference: "Numbers 22:38",
  },
  {
    question:
      "What did Balaam pronounce over Israel instead of a curse?",
    options: [
      "Blessings",
      "Silence",
      "Judgment only",
      "A military warning",
    ],
    answer: "Blessings",
    reference: "Numbers 23-24",
  },
  {
    question:
      "In Balaam's oracle, what was said to come out of Jacob?",
    options: [
      "A star",
      "A river",
      "A fire",
      "A cloud",
    ],
    answer: "A star",
    reference: "Numbers 24:17",
  },
  {
    question:
      "What sin did many Israelites commit at Peor?",
    options: [
      "They joined in sexual immorality and worship of Baal",
      "They refused circumcision",
      "They returned to Egypt",
      "They attacked Moses",
    ],
    answer: "They joined in sexual immorality and worship of Baal",
    reference: "Numbers 25:1-3",
  },
  {
    question:
      "Who stopped the plague at Peor by killing an Israelite man and a Midianite woman?",
    options: [
      "Phinehas",
      "Eleazar",
      "Joshua",
      "Caleb",
    ],
    answer: "Phinehas",
    reference: "Numbers 25:7-8",
  },
  {
    question:
      "How many people died in the plague connected with Baal of Peor?",
    options: [
      "Twelve thousand",
      "Twenty-four thousand",
      "Forty thousand",
      "Seventy thousand",
    ],
    answer: "Twenty-four thousand",
    reference: "Numbers 25:9",
  },
  {
    question:
      "What covenant did God give Phinehas because of his zeal?",
    options: [
      "A covenant of peace",
      "A covenant of land",
      "A covenant of kingship",
      "A covenant of wealth",
    ],
    answer: "A covenant of peace",
    reference: "Numbers 25:12-13",
  },
  {
    question:
      "Who were the only two men from the earlier census still alive among those counted before entering Canaan?",
    options: [
      "Joshua and Caleb",
      "Moses and Aaron",
      "Eleazar and Phinehas",
      "Eldad and Medad",
    ],
    answer: "Joshua and Caleb",
    reference: "Numbers 26:63-65",
  },
  {
    question:
      "Which family challenged the inheritance rules because their father had no sons?",
    options: [
      "The daughters of Zelophehad",
      "The daughters of Korah",
      "The daughters of Aaron",
      "The daughters of Caleb",
    ],
    answer: "The daughters of Zelophehad",
    reference: "Numbers 27:1-4",
  },
  {
    question:
      "How many daughters did Zelophehad have?",
    options: [
      "Three",
      "Four",
      "Five",
      "Seven",
    ],
    answer: "Five",
    reference: "Numbers 27:1",
  },
  {
    question:
      "What ruling did God give concerning Zelophehad's daughters?",
    options: [
      "They were to receive their father's inheritance",
      "They were to receive no land",
      "They were to become Levites",
      "They had to give the land to their uncles",
    ],
    answer: "They were to receive their father's inheritance",
    reference: "Numbers 27:7",
  },
  {
    question:
      "Whom did God appoint to succeed Moses?",
    options: [
      "Joshua",
      "Caleb",
      "Eleazar",
      "Phinehas",
    ],
    answer: "Joshua",
    reference: "Numbers 27:18-23",
  },
  {
    question:
      "Before whom was Joshua presented when he was commissioned?",
    options: [
      "Eleazar the priest and the whole assembly",
      "Aaron and Miriam",
      "The elders of Moab",
      "Only the tribe of Ephraim",
    ],
    answer: "Eleazar the priest and the whole assembly",
    reference: "Numbers 27:19-22",
  },
  {
    question:
      "How many lambs were to be offered every day as the regular burnt offering?",
    options: [
      "One",
      "Two",
      "Seven",
      "Twelve",
    ],
    answer: "Two",
    reference: "Numbers 28:3-4",
  },
  {
    question:
      "When were the two daily lambs offered?",
    options: [
      "One in the morning and one at twilight",
      "Both in the morning",
      "Both at twilight",
      "One at noon and one at midnight",
    ],
    answer: "One in the morning and one at twilight",
    reference: "Numbers 28:4",
  },
  {
    question:
      "How many additional lambs were offered as burnt offerings on the Sabbath?",
    options: [
      "Two",
      "Four",
      "Seven",
      "Twelve",
    ],
    answer: "Two",
    reference: "Numbers 28:9",
  },
  {
    question:
      "What special offering was made at the beginning of each month?",
    options: [
      "A burnt offering",
      "A guilt offering only",
      "A peace offering only",
      "A grain offering only",
    ],
    answer: "A burnt offering",
    reference: "Numbers 28:11",
  },
  {
    question:
      "What feast began on the fifteenth day of the first month?",
    options: [
      "The Festival of Unleavened Bread",
      "The Festival of Trumpets",
      "The Day of Atonement",
      "The Festival of Shelters",
    ],
    answer: "The Festival of Unleavened Bread",
    reference: "Numbers 28:17",
  },
  {
    question:
      "On what day of the seventh month was the sacred assembly marked by trumpet blasts?",
    options: [
      "The first day",
      "The seventh day",
      "The tenth day",
      "The fifteenth day",
    ],
    answer: "The first day",
    reference: "Numbers 29:1",
  },
  {
    question:
      "On what day of the seventh month was the Day of Atonement observed?",
    options: [
      "The first day",
      "The tenth day",
      "The fifteenth day",
      "The twenty-first day",
    ],
    answer: "The tenth day",
    reference: "Numbers 29:7",
  },
  {
    question:
      "What major festival began on the fifteenth day of the seventh month?",
    options: [
      "The Festival of Shelters",
      "Passover",
      "The Festival of Weeks",
      "The Day of Atonement",
    ],
    answer: "The Festival of Shelters",
    reference: "Numbers 29:12",
  },
  {
    question:
      "What general rule was given about vows made by a man to the Lord?",
    options: [
      "He must not break his word",
      "He could cancel it after seven days",
      "A priest had to approve it",
      "His family could cancel it",
    ],
    answer: "He must not break his word",
    reference: "Numbers 30:2",
  },
  {
    question:
      "Who could cancel a young unmarried woman's vow when she still lived in her father's house?",
    options: [
      "Her father",
      "Her brother",
      "A priest",
      "A tribal leader",
    ],
    answer: "Her father",
    reference: "Numbers 30:3-5",
  },
  {
    question:
      "Who could cancel certain vows made by a married woman?",
    options: [
      "Her husband",
      "Her father",
      "Her oldest son",
      "The high priest",
    ],
    answer: "Her husband",
    reference: "Numbers 30:6-8",
  },
  {
    question:
      "Against which people did Israel wage war in vengeance for what happened at Peor?",
    options: [
      "The Midianites",
      "The Edomites",
      "The Amorites",
      "The Philistines",
    ],
    answer: "The Midianites",
    reference: "Numbers 31:1-3",
  },
  {
    question:
      "How many men from each tribe were sent to fight Midian?",
    options: [
      "One hundred",
      "Five hundred",
      "One thousand",
      "Ten thousand",
    ],
    answer: "One thousand",
    reference: "Numbers 31:4-5",
  },
  {
    question:
      "Which prophet was killed in the war against Midian?",
    options: [
      "Balaam",
      "Moses",
      "Eleazar",
      "Joshua",
    ],
    answer: "Balaam",
    reference: "Numbers 31:8",
  },
  {
    question:
      "Which tribes asked to settle east of the Jordan because they had large herds?",
    options: [
      "Reuben and Gad",
      "Judah and Simeon",
      "Ephraim and Manasseh",
      "Dan and Asher",
    ],
    answer: "Reuben and Gad",
    reference: "Numbers 32:1-5",
  },
  {
    question:
      "Which half-tribe was also given territory east of the Jordan?",
    options: [
      "Half the tribe of Manasseh",
      "Half the tribe of Ephraim",
      "Half the tribe of Benjamin",
      "Half the tribe of Dan",
    ],
    answer: "Half the tribe of Manasseh",
    reference: "Numbers 32:33",
  },
  {
    question:
      "What condition did Moses place on the tribes wanting land east of the Jordan?",
    options: [
      "Their fighting men had to cross over and help conquer Canaan",
      "They had to give up their livestock",
      "They had to become Levites",
      "They had to pay double tribute",
    ],
    answer: "Their fighting men had to cross over and help conquer Canaan",
    reference: "Numbers 32:20-22",
  },
  {
    question:
      "What did Moses warn would happen if those tribes failed to keep their promise?",
    options: [
      "Their sin would find them out",
      "They would return to Egypt",
      "They would lose all their livestock immediately",
      "They would be excluded from Israel",
    ],
    answer: "Their sin would find them out",
    reference: "Numbers 32:23",
  },
  {
    question:
      "From where did the Israelites begin their journey out of Egypt according to the travel record?",
    options: [
      "Rameses",
      "Goshen",
      "Succoth",
      "Pi Hahiroth",
    ],
    answer: "Rameses",
    reference: "Numbers 33:3",
  },
  {
    question:
      "On what day did the Israelites leave Egypt?",
    options: [
      "The day after Passover",
      "The day before Passover",
      "Seven days after Passover",
      "The first day of the year",
    ],
    answer: "The day after Passover",
    reference: "Numbers 33:3",
  },
  {
    question:
      "What were the Israelites commanded to destroy when they entered Canaan?",
    options: [
      "The idols and high places of the inhabitants",
      "All houses",
      "All vineyards",
      "All wells",
    ],
    answer: "The idols and high places of the inhabitants",
    reference: "Numbers 33:52",
  },
  {
    question:
      "What warning was given if Israel failed to drive out the inhabitants of Canaan?",
    options: [
      "They would become barbs in their eyes and thorns in their sides",
      "They would be forced back into Egypt",
      "The tabernacle would be destroyed",
      "Their tribes would disappear",
    ],
    answer: "They would become barbs in their eyes and thorns in their sides",
    reference: "Numbers 33:55",
  },
  {
    question:
      "What body of water formed part of the western boundary of the promised land?",
    options: [
      "The Mediterranean Sea",
      "The Red Sea",
      "The Dead Sea only",
      "The Sea of Galilee",
    ],
    answer: "The Mediterranean Sea",
    reference: "Numbers 34:6",
  },
  {
    question:
      "Who was appointed to help divide the land among the tribes?",
    options: [
      "Eleazar the priest and Joshua",
      "Moses and Aaron",
      "Caleb and Phinehas",
      "The seventy elders only",
    ],
    answer: "Eleazar the priest and Joshua",
    reference: "Numbers 34:17",
  },
  {
    question:
      "How many towns were the Israelites commanded to give to the Levites?",
    options: [
      "Twelve",
      "Twenty-four",
      "Forty-eight",
      "Seventy",
    ],
    answer: "Forty-eight",
    reference: "Numbers 35:7",
  },
  {
    question:
      "How many of the Levite towns were designated as cities of refuge?",
    options: [
      "Three",
      "Six",
      "Twelve",
      "Forty-eight",
    ],
    answer: "Six",
    reference: "Numbers 35:6",
  },
  {
    question:
      "What was the purpose of the cities of refuge?",
    options: [
      "To protect someone who killed another unintentionally",
      "To house priests only",
      "To store military weapons",
      "To shelter foreigners",
    ],
    answer: "To protect someone who killed another unintentionally",
    reference: "Numbers 35:11-12",
  },
  {
    question:
      "Until what event was an accidental killer required to remain in the city of refuge?",
    options: [
      "The death of the high priest",
      "The next Jubilee",
      "The death of the tribal leader",
      "Seven years had passed",
    ],
    answer: "The death of the high priest",
    reference: "Numbers 35:25",
  },
  {
    question:
      "How many witnesses were required before someone could be put to death for murder?",
    options: [
      "At least two",
      "One",
      "Three exactly",
      "Seven",
    ],
    answer: "At least two",
    reference: "Numbers 35:30",
  },
  {
    question:
      "Why were the daughters of Zelophehad told to marry within their own tribal clan?",
    options: [
      "So their inheritance would remain within the tribe",
      "So they could become priestly families",
      "So they could avoid leaving Canaan",
      "So their husbands could become judges",
    ],
    answer: "So their inheritance would remain within the tribe",
    reference: "Numbers 36:6-9",
  },
  {
    question:
      "Did the daughters of Zelophehad obey the instruction concerning marriage?",
    options: [
      "Yes, they married within the clans of Manasseh",
      "No, they married outside Israel",
      "Only two of them obeyed",
      "They remained unmarried",
    ],
    answer: "Yes, they married within the clans of Manasseh",
    reference: "Numbers 36:10-12",
  },
];

export default numbersQuestions;