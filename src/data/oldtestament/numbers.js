const numbersQuestions = [
  {
    question:
      "On what date did the LORD command Moses to take the first census of Israel in the wilderness of Sinai?",
    options: [
      "The first day of the second month in the second year after leaving Egypt",
      "The first day of the first month in the second year",
      "The twentieth day of the second month in the second year",
      "The tenth day of the seventh month in the second year",
    ],
    answer:
      "The first day of the second month in the second year after leaving Egypt",
    reference: "Numbers 1:1",
  },
  {
    question:
      "From what age were Israelite males counted for military service in the first census?",
    options: [
      "Twenty years old and upward",
      "Thirty years old and upward",
      "Eighteen years old and upward",
      "Twenty-five years old and upward",
    ],
    answer: "Twenty years old and upward",
    reference: "Numbers 1:3",
  },
  {
    question:
      "Which tribe had the largest number of fighting men in the first census?",
    options: [
      "Judah",
      "Dan",
      "Reuben",
      "Ephraim",
    ],
    answer: "Judah",
    reference: "Numbers 1:27",
  },
  {
    question:
      "How many men from the tribe of Judah were counted in the first census?",
    options: [
      "74,600",
      "62,700",
      "59,300",
      "54,400",
    ],
    answer: "74,600",
    reference: "Numbers 1:27",
  },
  {
    question:
      "What was the total number of men counted in Israel's first military census?",
    options: [
      "603,550",
      "601,730",
      "600,000",
      "605,550",
    ],
    answer: "603,550",
    reference: "Numbers 1:46",
  },
  {
    question:
      "Which tribe was not included in the ordinary military census?",
    options: [
      "Levi",
      "Benjamin",
      "Simeon",
      "Naphtali",
    ],
    answer: "Levi",
    reference: "Numbers 1:47-49",
  },
  {
    question:
      "What specific responsibility was given to the Levites regarding the tabernacle?",
    options: [
      "They were responsible for the tabernacle, its furnishings, transport, setup, and encampment around it",
      "They alone offered all animal sacrifices",
      "They guarded only the ark",
      "They served as Israel's military commanders",
    ],
    answer:
      "They were responsible for the tabernacle, its furnishings, transport, setup, and encampment around it",
    reference: "Numbers 1:50-53",
  },
  {
    question:
      "Which three tribes camped together on the east side of the tabernacle under Judah's standard?",
    options: [
      "Judah, Issachar, and Zebulun",
      "Judah, Simeon, and Benjamin",
      "Reuben, Simeon, and Gad",
      "Judah, Ephraim, and Manasseh",
    ],
    answer: "Judah, Issachar, and Zebulun",
    reference: "Numbers 2:3-8",
  },
  {
    question:
      "Which tribes camped on the south side under Reuben's standard?",
    options: [
      "Reuben, Simeon, and Gad",
      "Reuben, Judah, and Gad",
      "Simeon, Gad, and Benjamin",
      "Reuben, Ephraim, and Manasseh",
    ],
    answer: "Reuben, Simeon, and Gad",
    reference: "Numbers 2:10-16",
  },
  {
    question:
      "Which three tribes camped on the west side under Ephraim's standard?",
    options: [
      "Ephraim, Manasseh, and Benjamin",
      "Ephraim, Dan, and Asher",
      "Manasseh, Benjamin, and Gad",
      "Ephraim, Issachar, and Zebulun",
    ],
    answer: "Ephraim, Manasseh, and Benjamin",
    reference: "Numbers 2:18-24",
  },
  {
    question:
      "Which three tribes camped on the north side under Dan's standard?",
    options: [
      "Dan, Asher, and Naphtali",
      "Dan, Gad, and Naphtali",
      "Asher, Naphtali, and Benjamin",
      "Dan, Simeon, and Asher",
    ],
    answer: "Dan, Asher, and Naphtali",
    reference: "Numbers 2:25-31",
  },
  {
    question:
      "Which sons of Aaron died before the LORD because they offered unauthorized fire?",
    options: [
      "Nadab and Abihu",
      "Eleazar and Ithamar",
      "Nadab and Eleazar",
      "Abihu and Ithamar",
    ],
    answer: "Nadab and Abihu",
    reference: "Numbers 3:4",
  },
  {
    question:
      "Which three clans descended from Levi?",
    options: [
      "Gershon, Kohath, and Merari",
      "Kohath, Amram, and Izhar",
      "Gershon, Merari, and Aaron",
      "Levi, Kohath, and Gershon",
    ],
    answer: "Gershon, Kohath, and Merari",
    reference: "Numbers 3:17",
  },
  {
    question:
      "Which Levitical clan was responsible for the ark, table, lampstand, altars, sacred utensils, and curtain?",
    options: [
      "The Kohathites",
      "The Gershonites",
      "The Merarites",
      "The Aaronites",
    ],
    answer: "The Kohathites",
    reference: "Numbers 3:31",
  },
  {
    question:
      "Which Levitical clan was responsible for the frames, crossbars, posts, bases, and related equipment of the tabernacle?",
    options: [
      "The Merarites",
      "The Kohathites",
      "The Gershonites",
      "The sons of Aaron",
    ],
    answer: "The Merarites",
    reference: "Numbers 3:36-37",
  },
  {
    question:
      "How many firstborn Israelite males one month old and upward were counted?",
    options: [
      "22,273",
      "22,000",
      "23,000",
      "24,000",
    ],
    answer: "22,273",
    reference: "Numbers 3:43",
  },
  {
    question:
      "How many Levite males one month old and upward were counted?",
    options: [
      "22,000",
      "22,273",
      "23,000",
      "21,500",
    ],
    answer: "22,000",
    reference: "Numbers 3:39",
  },
  {
    question:
      "What redemption price was required for each of the 273 firstborn Israelites who exceeded the number of Levites?",
    options: [
      "Five shekels",
      "One shekel",
      "Ten shekels",
      "Half a shekel",
    ],
    answer: "Five shekels",
    reference: "Numbers 3:46-51",
  },
  {
    question:
      "What age range was used for counting Levites eligible for work at the tent of meeting in Numbers 4?",
    options: [
      "Thirty to fifty years old",
      "Twenty to fifty years old",
      "Twenty-five to fifty years old",
      "Thirty to sixty years old",
    ],
    answer: "Thirty to fifty years old",
    reference: "Numbers 4:3",
  },
  {
    question:
      "What were the Kohathites forbidden to do when transporting the holy objects?",
    options: [
      "Touch the holy things directly",
      "Carry anything on their shoulders",
      "Enter the outer courtyard",
      "Look toward the sanctuary",
    ],
    answer: "Touch the holy things directly",
    reference: "Numbers 4:15",
  },
  {
    question:
      "What danger was associated with the Kohathites looking at the holy things even for a moment?",
    options: [
      "They could die",
      "They would become unclean for seven days",
      "They would be expelled from the Levites",
      "They would lose their inheritance",
    ],
    answer: "They could die",
    reference: "Numbers 4:20",
  },
  {
    question:
      "What was the total number of Levite men aged thirty to fifty counted for tabernacle service?",
    options: [
      "8,580",
      "22,000",
      "8,300",
      "7,500",
    ],
    answer: "8,580",
    reference: "Numbers 4:48",
  },
  {
    question:
      "When restitution was made for a wrong committed against another person, what additional amount had to be added?",
    options: [
      "One-fifth",
      "One-tenth",
      "One-half",
      "Double the amount",
    ],
    answer: "One-fifth",
    reference: "Numbers 5:7",
  },
  {
    question:
      "If the person wronged had no close relative to receive restitution, to whom was the payment given?",
    options: [
      "The LORD through the priest",
      "The tribal leader",
      "The Levites generally",
      "The poor of the camp",
    ],
    answer: "The LORD through the priest",
    reference: "Numbers 5:8",
  },
  {
    question:
      "What grain offering was brought by a husband in the jealousy ritual?",
    options: [
      "One-tenth of an ephah of barley flour without oil or frankincense",
      "Fine wheat flour mixed with oil",
      "Two-tenths of an ephah of barley with frankincense",
      "One omer of wheat flour with salt",
    ],
    answer:
      "One-tenth of an ephah of barley flour without oil or frankincense",
    reference: "Numbers 5:15",
  },
  {
    question:
      "What was added to the holy water used in the jealousy ritual?",
    options: [
      "Dust from the tabernacle floor",
      "Ashes from the altar",
      "Blood from a goat",
      "Salt from the sanctuary",
    ],
    answer: "Dust from the tabernacle floor",
    reference: "Numbers 5:17",
  },
  {
    question:
      "What three restrictions characterized a Nazirite vow?",
    options: [
      "No grape products, no cutting of hair, and no contact with a dead body",
      "No meat, no wine, and no marriage",
      "No work, no haircuts, and no oil",
      "No wine, no sandals, and no travel",
    ],
    answer:
      "No grape products, no cutting of hair, and no contact with a dead body",
    reference: "Numbers 6:2-8",
  },
  {
    question:
      "What happened if a Nazirite was suddenly defiled by someone dying in his presence?",
    options: [
      "He shaved his head on the seventh day and restarted the period of dedication",
      "He added seven days but did not restart",
      "He paid a fine and continued",
      "He permanently lost his Nazirite status",
    ],
    answer:
      "He shaved his head on the seventh day and restarted the period of dedication",
    reference: "Numbers 6:9-12",
  },
  {
    question:
      "What was done with a Nazirite's hair at the completion of the vow?",
    options: [
      "It was placed in the fire under the fellowship offering",
      "It was buried outside the camp",
      "It was given to the priest",
      "It was placed on the altar of incense",
    ],
    answer: "It was placed in the fire under the fellowship offering",
    reference: "Numbers 6:18",
  },
  {
    question:
      "How many wagons and oxen were given by the tribal leaders for tabernacle transport?",
    options: [
      "Six covered wagons and twelve oxen",
      "Twelve wagons and twenty-four oxen",
      "Four wagons and eight oxen",
      "Six wagons and six oxen",
    ],
    answer: "Six covered wagons and twelve oxen",
    reference: "Numbers 7:3",
  },
  {
    question:
      "Why were no wagons or oxen given to the Kohathites?",
    options: [
      "They were required to carry the holy things on their shoulders",
      "They had fewer items to transport",
      "Their duties were only inside the camp",
      "They were exempt from transport work",
    ],
    answer:
      "They were required to carry the holy things on their shoulders",
    reference: "Numbers 7:9",
  },
  {
    question:
      "Who was the first tribal leader to present his dedication offering for the altar?",
    options: [
      "Nahshon son of Amminadab of Judah",
      "Nethanel son of Zuar of Issachar",
      "Eliab son of Helon of Zebulun",
      "Elizur son of Shedeur of Reuben",
    ],
    answer: "Nahshon son of Amminadab of Judah",
    reference: "Numbers 7:12",
  },
  {
    question:
      "How many silver dishes, silver basins, and gold bowls were presented altogether during the altar dedication?",
    options: [
      "Twelve of each",
      "Six of each",
      "Twenty-four of each",
      "Seventy of each",
    ],
    answer: "Twelve of each",
    reference: "Numbers 7:84",
  },
  {
    question:
      "From where did Moses hear God's voice when he entered the tent of meeting?",
    options: [
      "From above the atonement cover between the two cherubim",
      "From the altar of incense",
      "From behind the curtain",
      "From the pillar of cloud outside",
    ],
    answer: "From above the atonement cover between the two cherubim",
    reference: "Numbers 7:89",
  },
  {
    question:
      "Toward what were the seven lamps of the lampstand arranged to give light?",
    options: [
      "The area in front of the lampstand",
      "The ark",
      "The entrance curtain",
      "The altar of incense",
    ],
    answer: "The area in front of the lampstand",
    reference: "Numbers 8:2",
  },
  {
    question:
      "What age did Levites begin service according to Numbers 8?",
    options: [
      "Twenty-five years old",
      "Thirty years old",
      "Twenty years old",
      "Fifty years old",
    ],
    answer: "Twenty-five years old",
    reference: "Numbers 8:24",
  },
  {
    question:
      "At what age did Levites retire from compulsory service?",
    options: [
      "Fifty years old",
      "Sixty years old",
      "Forty years old",
      "Seventy years old",
    ],
    answer: "Fifty years old",
    reference: "Numbers 8:25",
  },
  {
    question:
      "What were retired Levites still allowed to do after age fifty?",
    options: [
      "Assist their fellow Levites in carrying out duties, but not perform regular service",
      "Serve as priests at the altar",
      "Carry the ark",
      "Continue all normal duties",
    ],
    answer:
      "Assist their fellow Levites in carrying out duties, but not perform regular service",
    reference: "Numbers 8:26",
  },
  {
    question:
      "What provision was made for Israelites who were ceremonially unclean at the normal Passover date?",
    options: [
      "They could observe Passover one month later",
      "They were permanently excused",
      "They had to wait until the next year",
      "They observed it seven days later",
    ],
    answer: "They could observe Passover one month later",
    reference: "Numbers 9:6-11",
  },
  {
    question:
      "On what date was the second-month Passover observed by those unable to keep the first?",
    options: [
      "The fourteenth day of the second month",
      "The tenth day of the second month",
      "The fifteenth day of the second month",
      "The first day of the second month",
    ],
    answer: "The fourteenth day of the second month",
    reference: "Numbers 9:11",
  },
  {
    question:
      "What were the silver trumpets used for?",
    options: [
      "Calling the community together and signaling the camps to set out",
      "Only announcing sacrifices",
      "Only warning of war",
      "Only beginning festivals",
    ],
    answer:
      "Calling the community together and signaling the camps to set out",
    reference: "Numbers 10:2",
  },
  {
    question:
      "How many silver trumpets was Moses commanded to make?",
    options: [
      "Two",
      "Seven",
      "Twelve",
      "One",
    ],
    answer: "Two",
    reference: "Numbers 10:2",
  },
  {
    question:
      "Who was specifically responsible for blowing the silver trumpets?",
    options: [
      "The sons of Aaron, the priests",
      "The Kohathites",
      "The tribal leaders",
      "Joshua and Caleb",
    ],
    answer: "The sons of Aaron, the priests",
    reference: "Numbers 10:8",
  },
  {
    question:
      "On what date did the cloud lift from above the tabernacle, beginning Israel's departure from Sinai?",
    options: [
      "The twentieth day of the second month of the second year",
      "The first day of the second month",
      "The fourteenth day of the first month",
      "The first day of the third month",
    ],
    answer:
      "The twentieth day of the second month of the second year",
    reference: "Numbers 10:11",
  },
  {
    question:
      "Who did Moses ask to accompany Israel and serve as their eyes in the wilderness?",
    options: [
      "Hobab son of Reuel the Midianite",
      "Jethro son of Midian",
      "Caleb son of Jephunneh",
      "Hur son of Caleb",
    ],
    answer: "Hobab son of Reuel the Midianite",
    reference: "Numbers 10:29-32",
  },
  {
    question:
      "What did Moses say whenever the ark set out?",
    options: [
      "Rise up, LORD! May your enemies be scattered",
      "The LORD is our banner",
      "Be strong and courageous",
      "Let Israel follow the cloud",
    ],
    answer: "Rise up, LORD! May your enemies be scattered",
    reference: "Numbers 10:35",
  },
  {
    question:
      "What happened at Taberah after the people complained about their hardships?",
    options: [
      "Fire from the LORD burned among the outskirts of the camp",
      "Quail covered the camp",
      "Snakes attacked the people",
      "The ground opened beneath them",
    ],
    answer: "Fire from the LORD burned among the outskirts of the camp",
    reference: "Numbers 11:1-3",
  },
  {
    question:
      "What foods from Egypt did the people remember while complaining about manna?",
    options: [
      "Fish, cucumbers, melons, leeks, onions, and garlic",
      "Fish, dates, barley, onions, and grapes",
      "Meat, figs, cucumbers, and olives",
      "Melons, lentils, garlic, and bread",
    ],
    answer: "Fish, cucumbers, melons, leeks, onions, and garlic",
    reference: "Numbers 11:5",
  },
  {
    question:
      "What did manna look like according to Numbers?",
    options: [
      "Coriander seed and like bdellium in appearance",
      "White pearls",
      "Barley grain and amber",
      "Mustard seed and crystal",
    ],
    answer: "Coriander seed and like bdellium in appearance",
    reference: "Numbers 11:7",
  },
  {
    question:
      "How did the people prepare manna before eating it?",
    options: [
      "They ground it in mills or crushed it in mortars, boiled it, and made cakes",
      "They ate it only raw",
      "They baked it whole without grinding",
      "They mixed it with meat",
    ],
    answer:
      "They ground it in mills or crushed it in mortars, boiled it, and made cakes",
    reference: "Numbers 11:8",
  },
  {
    question:
      "How many elders did God tell Moses to gather to help carry the burden of the people?",
    options: [
      "Seventy",
      "Twelve",
      "Fifty",
      "One hundred",
    ],
    answer: "Seventy",
    reference: "Numbers 11:16",
  },
  {
    question:
      "Which two men prophesied in the camp even though they had not gone out to the tent with the other elders?",
    options: [
      "Eldad and Medad",
      "Joshua and Caleb",
      "Dathan and Abiram",
      "Nadab and Abihu",
    ],
    answer: "Eldad and Medad",
    reference: "Numbers 11:26",
  },
  {
    question:
      "How long did God say the people would eat meat after they demanded it?",
    options: [
      "A whole month, until it came out of their nostrils",
      "Seven days",
      "Forty days",
      "Three days",
    ],
    answer: "A whole month, until it came out of their nostrils",
    reference: "Numbers 11:19-20",
  },
  {
    question:
      "Approximately how far around the camp did the quail spread?",
    options: [
      "About a day's journey in every direction",
      "About three days' journey",
      "Seven miles",
      "Only within the camp",
    ],
    answer: "About a day's journey in every direction",
    reference: "Numbers 11:31",
  },
  {
    question:
      "Approximately how deep were the quail over the ground?",
    options: [
      "About two cubits",
      "One cubit",
      "Five cubits",
      "Half a cubit",
    ],
    answer: "About two cubits",
    reference: "Numbers 11:31",
  },
  {
    question:
      "What was the place named where the people who craved other food were buried?",
    options: [
      "Kibroth Hattaavah",
      "Taberah",
      "Hazeroth",
      "Massah",
    ],
    answer: "Kibroth Hattaavah",
    reference: "Numbers 11:34",
  },
  {
    question:
      "What reason did Miriam and Aaron initially give for speaking against Moses?",
    options: [
      "He had married a Cushite woman",
      "He had appointed Joshua",
      "He refused to return to Egypt",
      "He favored the tribe of Levi",
    ],
    answer: "He had married a Cushite woman",
    reference: "Numbers 12:1",
  },
  {
    question:
      "How did God distinguish Moses from other prophets?",
    options: [
      "God spoke with him face to face, clearly and not in riddles",
      "Moses alone saw dreams",
      "Moses alone entered the tabernacle",
      "Moses never needed visions",
    ],
    answer: "God spoke with him face to face, clearly and not in riddles",
    reference: "Numbers 12:6-8",
  },
  {
    question:
      "What happened to Miriam after the LORD's anger was kindled against her and Aaron?",
    options: [
      "She became leprous, white as snow",
      "She became blind",
      "She lost her voice",
      "She was struck with fever",
    ],
    answer: "She became leprous, white as snow",
    reference: "Numbers 12:9-10",
  },
  {
    question:
      "How long was Miriam confined outside the camp?",
    options: [
      "Seven days",
      "Fourteen days",
      "Three days",
      "Forty days",
    ],
    answer: "Seven days",
    reference: "Numbers 12:14-15",
  },
  {
    question:
      "From which wilderness were the twelve spies sent to explore Canaan?",
    options: [
      "The Wilderness of Paran",
      "The Wilderness of Zin",
      "The Wilderness of Sin",
      "The Wilderness of Shur",
    ],
    answer: "The Wilderness of Paran",
    reference: "Numbers 13:3",
  },
  {
    question:
      "What was Hoshea son of Nun renamed by Moses?",
    options: [
      "Joshua",
      "Caleb",
      "Jephunneh",
      "Nun",
    ],
    answer: "Joshua",
    reference: "Numbers 13:16",
  },
  {
    question:
      "At what season did the spies enter Canaan?",
    options: [
      "The season of the first ripe grapes",
      "Barley harvest",
      "Wheat harvest",
      "Olive harvest",
    ],
    answer: "The season of the first ripe grapes",
    reference: "Numbers 13:20",
  },
  {
    question:
      "At which valley did the spies cut down a cluster of grapes so large that two men carried it on a pole?",
    options: [
      "The Valley of Eshcol",
      "The Valley of Siddim",
      "The Valley of Achor",
      "The Valley of Hebron",
    ],
    answer: "The Valley of Eshcol",
    reference: "Numbers 13:23-24",
  },
  {
    question:
      "How long did the spies explore Canaan?",
    options: [
      "Forty days",
      "Thirty days",
      "Seven days",
      "Seventy days",
    ],
    answer: "Forty days",
    reference: "Numbers 13:25",
  },
  {
    question:
      "Which three descendants of Anak were named at Hebron?",
    options: [
      "Ahiman, Sheshai, and Talmai",
      "Anak, Arba, and Talmai",
      "Sheshai, Arba, and Og",
      "Ahiman, Anak, and Sihon",
    ],
    answer: "Ahiman, Sheshai, and Talmai",
    reference: "Numbers 13:22",
  },
  {
    question:
      "Which two spies urged Israel to enter Canaan despite the report of the other ten?",
    options: [
      "Joshua and Caleb",
      "Moses and Aaron",
      "Caleb and Eleazar",
      "Joshua and Hur",
    ],
    answer: "Joshua and Caleb",
    reference: "Numbers 14:6-9",
  },
  {
    question:
      "How long did God decree Israel would wander in the wilderness because of the spies' report?",
    options: [
      "Forty years",
      "Thirty-eight years",
      "Seventy years",
      "Forty days",
    ],
    answer: "Forty years",
    reference: "Numbers 14:33-34",
  },
  {
    question:
      "What principle linked the forty years of wandering to the spies' exploration?",
    options: [
      "One year for each of the forty days",
      "One year for every two days",
      "Seven years for each week",
      "One month for each day",
    ],
    answer: "One year for each of the forty days",
    reference: "Numbers 14:34",
  },
  {
    question:
      "Which generation was sentenced to die in the wilderness?",
    options: [
      "Those twenty years old and upward who were counted in the census and grumbled",
      "Everyone older than thirty",
      "Only the ten unfaithful spies",
      "All males including Levites",
    ],
    answer:
      "Those twenty years old and upward who were counted in the census and grumbled",
    reference: "Numbers 14:29",
  },
  {
    question:
      "What happened to the ten spies who brought the bad report?",
    options: [
      "They died by a plague before the LORD",
      "They were stoned",
      "They were exiled",
      "They died later in battle",
    ],
    answer: "They died by a plague before the LORD",
    reference: "Numbers 14:36-37",
  },
  {
    question:
      "Who defeated the Israelites when they presumptuously attempted to enter the land after God's judgment?",
    options: [
      "The Amalekites and Canaanites",
      "The Amorites and Moabites",
      "The Midianites and Edomites",
      "The Philistines and Canaanites",
    ],
    answer: "The Amalekites and Canaanites",
    reference: "Numbers 14:45",
  },
  {
    question:
      "What did Israel later have to attach to the corners of their garments?",
    options: [
      "Tassels with a blue cord",
      "Gold bells",
      "Scarlet cords",
      "White linen strips",
    ],
    answer: "Tassels with a blue cord",
    reference: "Numbers 15:38",
  },
  {
    question:
      "What was the purpose of the tassels on Israel's garments?",
    options: [
      "To remind them of all the LORD's commands and help them obey",
      "To identify tribal rank",
      "To distinguish priests from ordinary Israelites",
      "To mark military age",
    ],
    answer:
      "To remind them of all the LORD's commands and help them obey",
    reference: "Numbers 15:39-40",
  },
  {
    question:
      "What happened to the man found gathering wood on the Sabbath?",
    options: [
      "He was stoned to death outside the camp",
      "He was exiled",
      "He was fined",
      "He was imprisoned permanently",
    ],
    answer: "He was stoned to death outside the camp",
    reference: "Numbers 15:32-36",
  },
  {
    question:
      "Who were the principal leaders of the rebellion against Moses and Aaron in Numbers 16?",
    options: [
      "Korah, Dathan, and Abiram",
      "Korah, Balaam, and Abiram",
      "Dathan, Abiram, and Joshua",
      "Korah, On, and Eleazar",
    ],
    answer: "Korah, Dathan, and Abiram",
    reference: "Numbers 16:1",
  },
  {
    question:
      "How many well-known community leaders joined Korah's rebellion?",
    options: [
      "250",
      "70",
      "120",
      "300",
    ],
    answer: "250",
    reference: "Numbers 16:2",
  },
  {
    question:
      "What test did Moses propose for Korah and the 250 leaders?",
    options: [
      "They were to bring censers with fire and incense before the LORD",
      "They were to bring rods from each tribe",
      "They were to offer twelve bulls",
      "They were to stand before the ark overnight",
    ],
    answer:
      "They were to bring censers with fire and incense before the LORD",
    reference: "Numbers 16:16-18",
  },
  {
    question:
      "What extraordinary judgment occurred to Dathan and Abiram and their households?",
    options: [
      "The ground opened and swallowed them alive",
      "Fire descended on their tents",
      "They were struck with leprosy",
      "They were killed by the Levites",
    ],
    answer: "The ground opened and swallowed them alive",
    reference: "Numbers 16:31-33",
  },
  {
    question:
      "What happened to the 250 men who offered incense?",
    options: [
      "Fire came out from the LORD and consumed them",
      "The earth swallowed them",
      "They were struck by a plague",
      "They were driven from the camp",
    ],
    answer: "Fire came out from the LORD and consumed them",
    reference: "Numbers 16:35",
  },
  {
    question:
      "What was done with the bronze censers belonging to the men who died?",
    options: [
      "They were hammered into sheets to overlay the altar",
      "They were buried",
      "They were melted into trumpets",
      "They were placed inside the ark",
    ],
    answer: "They were hammered into sheets to overlay the altar",
    reference: "Numbers 16:38-40",
  },
  {
    question:
      "How many people died in the plague that followed the congregation's complaint after Korah's rebellion?",
    options: [
      "14,700",
      "24,000",
      "3,000",
      "12,000",
    ],
    answer: "14,700",
    reference: "Numbers 16:49",
  },
  {
    question:
      "What did Aaron do to stop the plague among the people?",
    options: [
      "He offered incense and made atonement while standing between the living and the dead",
      "He sprinkled blood over the camp",
      "He lifted Moses' staff",
      "He offered a bull for every tribe",
    ],
    answer:
      "He offered incense and made atonement while standing between the living and the dead",
    reference: "Numbers 16:46-48",
  },
  {
    question:
      "What happened to Aaron's staff when the twelve tribal staffs were placed before the LORD?",
    options: [
      "It sprouted, budded, blossomed, and produced almonds",
      "It turned into a serpent",
      "It became covered with gold",
      "It produced figs",
    ],
    answer: "It sprouted, budded, blossomed, and produced almonds",
    reference: "Numbers 17:8",
  },
  {
    question:
      "Where was Aaron's staff kept afterward?",
    options: [
      "Before the testimony as a sign against the rebels",
      "Inside Aaron's tent",
      "Beside the bronze altar",
      "At the entrance to the camp",
    ],
    answer: "Before the testimony as a sign against the rebels",
    reference: "Numbers 17:10",
  },
  {
    question:
      "What portion of Israel's tithes did the Levites themselves have to give as an offering to the LORD?",
    options: [
      "A tenth of the tithe they received",
      "One-fifth",
      "Half",
      "One-twentieth",
    ],
    answer: "A tenth of the tithe they received",
    reference: "Numbers 18:26",
  },
  {
    question:
      "What animal was used in the purification ritual involving ashes for cleansing from contact with the dead?",
    options: [
      "A red heifer without defect that had never been under a yoke",
      "A white bull without defect",
      "A red ram",
      "A female goat without defect",
    ],
    answer:
      "A red heifer without defect that had never been under a yoke",
    reference: "Numbers 19:2",
  },
  {
    question:
      "Who was responsible for slaughtering the red heifer outside the camp?",
    options: [
      "Eleazar the priest",
      "Aaron",
      "Moses",
      "The eldest Levite",
    ],
    answer: "Eleazar the priest",
    reference: "Numbers 19:3",
  },
  {
    question:
      "How many times did Eleazar sprinkle some of the red heifer's blood toward the front of the tent of meeting?",
    options: [
      "Seven times",
      "Three times",
      "Four times",
      "Twelve times",
    ],
    answer: "Seven times",
    reference: "Numbers 19:4",
  },
  {
    question:
      "Which three materials were thrown into the burning red heifer?",
    options: [
      "Cedar wood, hyssop, and scarlet wool",
      "Frankincense, cedar, and oil",
      "Hyssop, salt, and scarlet thread",
      "Cedar, myrrh, and cinnamon",
    ],
    answer: "Cedar wood, hyssop, and scarlet wool",
    reference: "Numbers 19:6",
  },
  {
    question:
      "For how long was someone who touched a human corpse ceremonially unclean?",
    options: [
      "Seven days",
      "Three days",
      "Until evening",
      "Fourteen days",
    ],
    answer: "Seven days",
    reference: "Numbers 19:11",
  },
  {
    question:
      "On which days was a corpse-defiled person required to purify himself with the cleansing water?",
    options: [
      "The third and seventh days",
      "The first and seventh days",
      "The second and sixth days",
      "The third and eighth days",
    ],
    answer: "The third and seventh days",
    reference: "Numbers 19:12",
  },
  {
    question:
      "Where did Miriam die and get buried?",
    options: [
      "Kadesh in the Wilderness of Zin",
      "Mount Hor",
      "Hazeroth",
      "The plains of Moab",
    ],
    answer: "Kadesh in the Wilderness of Zin",
    reference: "Numbers 20:1",
  },
  {
    question:
      "What did God tell Moses to do to the rock at Meribah to produce water?",
    options: [
      "Speak to the rock before the people",
      "Strike it twice",
      "Touch it with Aaron's staff",
      "Pour water over it",
    ],
    answer: "Speak to the rock before the people",
    reference: "Numbers 20:8",
  },
  {
    question:
      "What did Moses actually do to the rock?",
    options: [
      "He struck it twice with his staff",
      "He struck it once",
      "He spoke to it",
      "He broke it open",
    ],
    answer: "He struck it twice with his staff",
    reference: "Numbers 20:11",
  },
  {
    question:
      "What consequence did God announce to Moses and Aaron after the incident at Meribah?",
    options: [
      "They would not bring the community into the promised land",
      "They would lose their priestly status immediately",
      "They would wander an additional forty years",
      "They would never see Canaan",
    ],
    answer: "They would not bring the community into the promised land",
    reference: "Numbers 20:12",
  },
  {
    question:
      "Which nation refused Israel passage through its territory despite Israel promising not to pass through fields or vineyards?",
    options: [
      "Edom",
      "Moab",
      "Ammon",
      "Midian",
    ],
    answer: "Edom",
    reference: "Numbers 20:14-21",
  },
  {
    question:
      "Where did Aaron die?",
    options: [
      "Mount Hor",
      "Mount Nebo",
      "Mount Sinai",
      "Pisgah",
    ],
    answer: "Mount Hor",
    reference: "Numbers 20:22-29",
  },
  {
    question:
      "To whom were Aaron's priestly garments transferred before Aaron died?",
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
      "How long did the whole community mourn Aaron?",
    options: [
      "Thirty days",
      "Seven days",
      "Forty days",
      "Seventy days",
    ],
    answer: "Thirty days",
    reference: "Numbers 20:29",
  },
  {
    question:
      "What did Israel call the place where they completely destroyed the Canaanite king of Arad's cities?",
    options: [
      "Hormah",
      "Heshbon",
      "Jazer",
      "Kedesh",
    ],
    answer: "Hormah",
    reference: "Numbers 21:1-3",
  },
  {
    question:
      "What did God send among the Israelites after they complained against God and Moses on the way around Edom?",
    options: [
      "Venomous serpents",
      "A plague of locusts",
      "Fire from heaven",
      "Wild beasts",
    ],
    answer: "Venomous serpents",
    reference: "Numbers 21:5-6",
  },
  {
    question:
      "What did Moses make so that bitten Israelites could look at it and live?",
    options: [
      "A bronze serpent",
      "A golden serpent",
      "A bronze staff",
      "A silver serpent",
    ],
    answer: "A bronze serpent",
    reference: "Numbers 21:8-9",
  },
  {
    question:
      "Which Amorite king refused Israel passage and was defeated at Jahaz?",
    options: [
      "Sihon",
      "Og",
      "Balak",
      "Arad",
    ],
    answer: "Sihon",
    reference: "Numbers 21:21-24",
  },
  {
    question:
      "What city was the capital of Sihon king of the Amorites?",
    options: [
      "Heshbon",
      "Jazer",
      "Bashan",
      "Dibon",
    ],
    answer: "Heshbon",
    reference: "Numbers 21:26",
  },
  {
    question:
      "Which king of Bashan came out against Israel at Edrei?",
    options: [
      "Og",
      "Sihon",
      "Balak",
      "Agag",
    ],
    answer: "Og",
    reference: "Numbers 21:33",
  },
  {
    question:
      "Who was the king of Moab who became terrified because of Israel's victories?",
    options: [
      "Balak son of Zippor",
      "Balaam son of Beor",
      "Sihon son of Heshbon",
      "Og son of Bashan",
    ],
    answer: "Balak son of Zippor",
    reference: "Numbers 22:2-4",
  },
  {
    question:
      "Whom did Balak summon to curse Israel?",
    options: [
      "Balaam son of Beor",
      "Beor son of Balaam",
      "Phinehas son of Eleazar",
      "Zippor son of Balak",
    ],
    answer: "Balaam son of Beor",
    reference: "Numbers 22:5-6",
  },
  {
    question:
      "What did the first group of Moabite and Midianite elders carry when they went to Balaam?",
    options: [
      "The fee for divination",
      "Gold censers",
      "Sacrificial animals",
      "A royal decree",
    ],
    answer: "The fee for divination",
    reference: "Numbers 22:7",
  },
  {
    question:
      "How many times did Balaam's donkey turn aside or react before the LORD opened its mouth?",
    options: [
      "Three times",
      "Two times",
      "Seven times",
      "Four times",
    ],
    answer: "Three times",
    reference: "Numbers 22:23-27",
  },
  {
    question:
      "What did the donkey do the third time it saw the angel of the LORD?",
    options: [
      "It lay down under Balaam",
      "It ran into a field",
      "It crushed Balaam's foot against a wall",
      "It turned back toward Moab",
    ],
    answer: "It lay down under Balaam",
    reference: "Numbers 22:27",
  },
  {
    question:
      "How many altars did Balaam repeatedly tell Balak to build for each attempt to curse Israel?",
    options: [
      "Seven",
      "Twelve",
      "Three",
      "Ten",
    ],
    answer: "Seven",
    reference: "Numbers 23:1, 14, 29",
  },
  {
    question:
      "What sacrifices were offered on each of Balaam's seven altars?",
    options: [
      "A bull and a ram",
      "A goat and a lamb",
      "A bull and a goat",
      "Two rams",
    ],
    answer: "A bull and a ram",
    reference: "Numbers 23:1-2",
  },
  {
    question:
      "In Balaam's first oracle, with what did he compare the number of Jacob's people?",
    options: [
      "The dust of Jacob",
      "The stars of heaven",
      "The sand of the sea",
      "The drops of rain",
    ],
    answer: "The dust of Jacob",
    reference: "Numbers 23:10",
  },
  {
    question:
      "Which statement appears in Balaam's second oracle concerning God?",
    options: [
      "God is not human, that he should lie, nor a son of man, that he should change his mind",
      "God changes His word according to kings",
      "God can be persuaded by sacrifices",
      "God hides His will from Israel",
    ],
    answer:
      "God is not human, that he should lie, nor a son of man, that he should change his mind",
    reference: "Numbers 23:19",
  },
  {
    question:
      "What animal imagery is used of Israel in Balaam's second oracle?",
    options: [
      "A lioness rising and a lion lifting itself",
      "An eagle over its nest",
      "A bear defending its cubs",
      "A wild ox beside a river",
    ],
    answer: "A lioness rising and a lion lifting itself",
    reference: "Numbers 23:24",
  },
  {
    question:
      "What famous future image appears in Balaam's fourth oracle?",
    options: [
      "A star coming out of Jacob and a scepter rising out of Israel",
      "A branch growing from Levi",
      "A lion arising from Joseph",
      "A prophet descending from Sinai",
    ],
    answer:
      "A star coming out of Jacob and a scepter rising out of Israel",
    reference: "Numbers 24:17",
  },
  {
    question:
      "At what place did Israel begin engaging in sexual immorality with Moabite women?",
    options: [
      "Shittim",
      "Kadesh",
      "Hormah",
      "Heshbon",
    ],
    answer: "Shittim",
    reference: "Numbers 25:1",
  },
  {
    question:
      "To what deity were the Israelites drawn through the Moabite women?",
    options: [
      "Baal of Peor",
      "Chemosh",
      "Molek",
      "Dagon",
    ],
    answer: "Baal of Peor",
    reference: "Numbers 25:3",
  },
  {
    question:
      "Who killed the Israelite man and Midianite woman with a spear, stopping the plague?",
    options: [
      "Phinehas son of Eleazar",
      "Eleazar son of Aaron",
      "Joshua son of Nun",
      "Caleb son of Jephunneh",
    ],
    answer: "Phinehas son of Eleazar",
    reference: "Numbers 25:7-8",
  },
  {
    question:
      "How many Israelites died in the plague associated with Baal of Peor?",
    options: [
      "24,000",
      "14,700",
      "23,000",
      "3,000",
    ],
    answer: "24,000",
    reference: "Numbers 25:9",
  },
  {
    question:
      "What covenant did God grant Phinehas because of his zeal?",
    options: [
      "A covenant of peace and a lasting priesthood",
      "A covenant of kingship",
      "A covenant of land",
      "A covenant of military victory",
    ],
    answer: "A covenant of peace and a lasting priesthood",
    reference: "Numbers 25:12-13",
  },
  {
    question:
      "What was the total number of Israelite fighting men in the second census?",
    options: [
      "601,730",
      "603,550",
      "600,000",
      "602,730",
    ],
    answer: "601,730",
    reference: "Numbers 26:51",
  },
  {
    question:
      "Which two men from the first census generation were specifically said to remain alive besides the new generation?",
    options: [
      "Caleb son of Jephunneh and Joshua son of Nun",
      "Joshua and Eleazar",
      "Caleb and Phinehas",
      "Moses and Joshua",
    ],
    answer: "Caleb son of Jephunneh and Joshua son of Nun",
    reference: "Numbers 26:63-65",
  },
  {
    question:
      "What were the names of Zelophehad's five daughters?",
    options: [
      "Mahlah, Noah, Hoglah, Milkah, and Tirzah",
      "Mahlah, Miriam, Hoglah, Milkah, and Tirzah",
      "Noah, Deborah, Milkah, Tirzah, and Keziah",
      "Mahlah, Hoglah, Dinah, Milkah, and Tirzah",
    ],
    answer: "Mahlah, Noah, Hoglah, Milkah, and Tirzah",
    reference: "Numbers 27:1",
  },
  {
    question:
      "What inheritance ruling did God give concerning a man who died without a son?",
    options: [
      "His inheritance was to pass to his daughter",
      "His inheritance returned to the tribe",
      "His brother always received it first",
      "His property went to the priests",
    ],
    answer: "His inheritance was to pass to his daughter",
    reference: "Numbers 27:8",
  },
  {
    question:
      "From what mountain was Moses told to view the promised land before his death?",
    options: [
      "A mountain in the Abarim range",
      "Mount Hor",
      "Mount Sinai",
      "Mount Carmel",
    ],
    answer: "A mountain in the Abarim range",
    reference: "Numbers 27:12",
  },
  {
    question:
      "Whom did God appoint to succeed Moses?",
    options: [
      "Joshua son of Nun",
      "Caleb son of Jephunneh",
      "Eleazar son of Aaron",
      "Phinehas son of Eleazar",
    ],
    answer: "Joshua son of Nun",
    reference: "Numbers 27:18",
  },
  {
    question:
      "Before whom was Joshua to stand when seeking decisions through the Urim?",
    options: [
      "Eleazar the priest",
      "Moses",
      "Aaron",
      "The seventy elders",
    ],
    answer: "Eleazar the priest",
    reference: "Numbers 27:21",
  },
  {
    question:
      "How many lambs were required each day for the regular daily burnt offering?",
    options: [
      "Two one-year-old lambs",
      "One lamb",
      "Seven lambs",
      "Three lambs",
    ],
    answer: "Two one-year-old lambs",
    reference: "Numbers 28:3-4",
  },
  {
    question:
      "How many lambs were offered as the additional burnt offering every Sabbath?",
    options: [
      "Two lambs",
      "Seven lambs",
      "One lamb",
      "Four lambs",
    ],
    answer: "Two lambs",
    reference: "Numbers 28:9",
  },
  {
    question:
      "How many young bulls were offered as the monthly burnt offering at the beginning of each month?",
    options: [
      "Two",
      "One",
      "Seven",
      "Twelve",
    ],
    answer: "Two",
    reference: "Numbers 28:11",
  },
  {
    question:
      "What was required of a woman's vow made while she still lived in her father's household?",
    options: [
      "Her father could confirm or nullify it when he heard of it",
      "It was always binding",
      "Only a priest could cancel it",
      "Her mother had to approve it",
    ],
    answer:
      "Her father could confirm or nullify it when he heard of it",
    reference: "Numbers 30:3-5",
  },
  {
    question:
      "What happened to a wife's vow if her husband nullified it on the day he heard about it?",
    options: [
      "The vow did not stand",
      "She had to fulfill half of it",
      "She had to bring a guilt offering first",
      "It remained binding",
    ],
    answer: "The vow did not stand",
    reference: "Numbers 30:6-8",
  },
  {
    question:
      "How many Israelite soldiers were sent against Midian?",
    options: [
      "12,000",
      "24,000",
      "40,000",
      "600,000",
    ],
    answer: "12,000",
    reference: "Numbers 31:4-5",
  },
  {
    question:
      "How many soldiers were selected from each tribe for the war against Midian?",
    options: [
      "One thousand",
      "Five hundred",
      "Two thousand",
      "Ten thousand",
    ],
    answer: "One thousand",
    reference: "Numbers 31:4",
  },
  {
    question:
      "Which priest accompanied Israel's army against Midian carrying sacred articles and signal trumpets?",
    options: [
      "Phinehas son of Eleazar",
      "Eleazar",
      "Ithamar",
      "Aaron",
    ],
    answer: "Phinehas son of Eleazar",
    reference: "Numbers 31:6",
  },
  {
    question:
      "Which prophet was killed along with the kings of Midian?",
    options: [
      "Balaam son of Beor",
      "Balak son of Zippor",
      "Eldad",
      "Medad",
    ],
    answer: "Balaam son of Beor",
    reference: "Numbers 31:8",
  },
  {
    question:
      "What proportion of the soldiers' share of Midianite plunder was given as tribute to the LORD?",
    options: [
      "One out of every five hundred",
      "One out of every fifty",
      "One-tenth",
      "One-fifth",
    ],
    answer: "One out of every five hundred",
    reference: "Numbers 31:28",
  },
  {
    question:
      "What proportion of the Israelites' half of the Midianite plunder was given to the Levites?",
    options: [
      "One out of every fifty",
      "One out of every five hundred",
      "One-tenth",
      "One out of every hundred",
    ],
    answer: "One out of every fifty",
    reference: "Numbers 31:30",
  },
  {
    question:
      "Which two tribes possessed very large herds and requested land east of the Jordan?",
    options: [
      "Reuben and Gad",
      "Gad and Manasseh",
      "Reuben and Simeon",
      "Judah and Gad",
    ],
    answer: "Reuben and Gad",
    reference: "Numbers 32:1",
  },
  {
    question:
      "What condition did Moses place on Reuben and Gad receiving land east of the Jordan?",
    options: [
      "Their fighting men had to cross the Jordan armed and help conquer Canaan",
      "They had to give half their livestock to Levi",
      "They had to settle their families west of the Jordan first",
      "They had to wait until Jubilee",
    ],
    answer:
      "Their fighting men had to cross the Jordan armed and help conquer Canaan",
    reference: "Numbers 32:20-22",
  },
  {
    question:
      "What warning did Moses give Reuben and Gad if they failed to fulfill their promise?",
    options: [
      "Be sure your sin will find you out",
      "Your inheritance will be given to Levi",
      "You will wander another forty years",
      "You will be cut off from Israel",
    ],
    answer: "Be sure your sin will find you out",
    reference: "Numbers 32:23",
  },
  {
    question:
      "Which half-tribe also received territory east of the Jordan?",
    options: [
      "Half the tribe of Manasseh",
      "Half the tribe of Ephraim",
      "Half the tribe of Benjamin",
      "Half the tribe of Simeon",
    ],
    answer: "Half the tribe of Manasseh",
    reference: "Numbers 32:33",
  },
  {
    question:
      "From where did the Israelites depart immediately after celebrating Passover in Egypt?",
    options: [
      "Rameses",
      "Succoth",
      "Etham",
      "Pi Hahiroth",
    ],
    answer: "Rameses",
    reference: "Numbers 33:3",
  },
  {
    question:
      "What were the Egyptians doing while Israel departed after Passover?",
    options: [
      "Burying all their firstborn whom the LORD had struck down",
      "Gathering their armies",
      "Burning Israelite homes",
      "Offering sacrifices to Pharaoh",
    ],
    answer:
      "Burying all their firstborn whom the LORD had struck down",
    reference: "Numbers 33:4",
  },
  {
    question:
      "At which place were twelve springs and seventy palm trees recorded during Israel's journey?",
    options: [
      "Elim",
      "Marah",
      "Rephidim",
      "Dophkah",
    ],
    answer: "Elim",
    reference: "Numbers 33:9",
  },
  {
    question:
      "How old was Aaron when he died on Mount Hor?",
    options: [
      "123 years old",
      "120 years old",
      "110 years old",
      "130 years old",
    ],
    answer: "123 years old",
    reference: "Numbers 33:39",
  },
  {
    question:
      "On what date did Aaron die?",
    options: [
      "The first day of the fifth month in the fortieth year",
      "The tenth day of the seventh month",
      "The first day of the first month in the fortieth year",
      "The fourteenth day of the first month",
    ],
    answer: "The first day of the fifth month in the fortieth year",
    reference: "Numbers 33:38",
  },
  {
    question:
      "What were Israelites commanded to destroy after crossing the Jordan into Canaan?",
    options: [
      "Carved images, cast idols, and high places",
      "All houses and wells",
      "All vineyards",
      "Every city wall",
    ],
    answer: "Carved images, cast idols, and high places",
    reference: "Numbers 33:52",
  },
  {
    question:
      "What warning was given if Israel failed to drive out the inhabitants of Canaan?",
    options: [
      "Those left would become barbs in their eyes and thorns in their sides",
      "The land would produce no food",
      "Israel would immediately return to Egypt",
      "The Jordan would become impassable",
    ],
    answer:
      "Those left would become barbs in their eyes and thorns in their sides",
    reference: "Numbers 33:55",
  },
  {
    question:
      "Who, together with Joshua, was appointed to assign the land of Canaan by inheritance?",
    options: [
      "Eleazar the priest",
      "Phinehas",
      "Caleb",
      "Moses",
    ],
    answer: "Eleazar the priest",
    reference: "Numbers 34:17",
  },
  {
    question:
      "How many towns were the Israelites commanded to give the Levites?",
    options: [
      "Forty-eight",
      "Six",
      "Twelve",
      "Seventy",
    ],
    answer: "Forty-eight",
    reference: "Numbers 35:7",
  },
  {
    question:
      "How many of the Levitical towns were designated as cities of refuge?",
    options: [
      "Six",
      "Three",
      "Twelve",
      "Forty-eight",
    ],
    answer: "Six",
    reference: "Numbers 35:6",
  },
  {
    question:
      "How were the six cities of refuge distributed in relation to the Jordan?",
    options: [
      "Three east of the Jordan and three in Canaan",
      "All six west of the Jordan",
      "Four west and two east",
      "Two west and four east",
    ],
    answer: "Three east of the Jordan and three in Canaan",
    reference: "Numbers 35:14",
  },
  {
    question:
      "For whom were the cities of refuge intended?",
    options: [
      "Anyone who killed another person unintentionally",
      "Anyone convicted of theft",
      "Only Israelites accused of murder",
      "Priests who became ceremonially unclean",
    ],
    answer: "Anyone who killed another person unintentionally",
    reference: "Numbers 35:11, 15",
  },
  {
    question:
      "Until whose death was an unintentional killer required to remain in the city of refuge?",
    options: [
      "The death of the high priest",
      "The death of the victim's nearest relative",
      "The death of the tribal leader",
      "The next Jubilee",
    ],
    answer: "The death of the high priest",
    reference: "Numbers 35:25-28",
  },
  {
    question:
      "How many witnesses were required before a person could be put to death for murder?",
    options: [
      "More than one witness",
      "One witness",
      "Exactly twelve witnesses",
      "Seven witnesses",
    ],
    answer: "More than one witness",
    reference: "Numbers 35:30",
  },
  {
    question:
      "Could ransom money be accepted in place of execution for a convicted murderer?",
    options: [
      "No",
      "Yes, if the family agreed",
      "Yes, if double compensation was paid",
      "Only before the high priest",
    ],
    answer: "No",
    reference: "Numbers 35:31",
  },
  {
    question:
      "What marriage restriction was placed on daughters who inherited tribal land?",
    options: [
      "They had to marry within a clan of their father's tribe",
      "They had to marry Levites",
      "They could marry only eldest sons",
      "They could not marry",
    ],
    answer: "They had to marry within a clan of their father's tribe",
    reference: "Numbers 36:6-9",
  },
  {
    question:
      "Why were heiresses required to marry within their father's tribe?",
    options: [
      "So inherited land would not transfer from one tribe to another",
      "So priestly inheritance would remain pure",
      "So tribal populations would remain equal",
      "So census numbers would not change",
    ],
    answer:
      "So inherited land would not transfer from one tribe to another",
    reference: "Numbers 36:7-9",
  },
  {
    question:
      "Whom did the daughters of Zelophehad eventually marry?",
    options: [
      "Their cousins on their father's side",
      "Sons of Aaron",
      "Men from Judah",
      "Levites from Kohath",
    ],
    answer: "Their cousins on their father's side",
    reference: "Numbers 36:10-12",
  },
];

export default numbersQuestions;