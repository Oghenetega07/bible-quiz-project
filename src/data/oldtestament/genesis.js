const genesisQuestions = [
  {
    question:
      "According to the creation account, on which day were the great lights and the stars appointed to govern day and night and to mark signs, seasons, days, and years?",
    options: [
      "The fourth day",
      "The third day",
      "The fifth day",
      "The sixth day",
    ],
    answer: "The fourth day",
    reference: "Genesis 1:14-19",
  },
  {
    question:
      "Which river flowing out of Eden is specifically described as winding through the entire land of Cush?",
    options: ["Gihon", "Pishon", "Tigris", "Euphrates"],
    answer: "Gihon",
    reference: "Genesis 2:10-14",
  },
  {
    question:
      "What three items are specifically associated with the land of Havilah in the description of Eden?",
    options: [
      "Gold, bdellium, and onyx stone",
      "Silver, cedar, and pearls",
      "Gold, frankincense, and myrrh",
      "Bdellium, bronze, and sapphire",
    ],
    answer: "Gold, bdellium, and onyx stone",
    reference: "Genesis 2:11-12",
  },
  {
    question:
      "After pronouncing judgment following the fall, what did God make for Adam and his wife before sending them out of Eden?",
    options: [
      "Garments of skin",
      "Garments of woven linen",
      "Coverings of fig leaves",
      "Coats of wool",
    ],
    answer: "Garments of skin",
    reference: "Genesis 3:21-24",
  },
  {
    question:
      "Which descendant of Cain is recorded as the father of those who play the harp and flute?",
    options: ["Jubal", "Jabal", "Tubal-Cain", "Enoch"],
    answer: "Jubal",
    reference: "Genesis 4:20-22",
  },
  {
    question:
      "What was Tubal-Cain's occupation according to Cain's genealogy?",
    options: [
      "An instructor of every craftsman in bronze and iron",
      "A keeper of livestock",
      "A musician who played harp and flute",
      "A builder of cities",
    ],
    answer: "An instructor of every craftsman in bronze and iron",
    reference: "Genesis 4:22",
  },
  {
    question: "How old was Jared when Enoch was born?",
    options: ["162 years", "65 years", "187 years", "182 years"],
    answer: "162 years",
    reference: "Genesis 5:18",
  },
  {
    question: "Which patriarch in Genesis lived 777 years?",
    options: ["Lamech", "Methuselah", "Jared", "Enosh"],
    answer: "Lamech",
    reference: "Genesis 5:28-31",
  },
  {
    question:
      "What dimensions was Noah commanded to use for the ark?",
    options: [
      "300 cubits long, 50 cubits wide, and 30 cubits high",
      "300 cubits long, 30 cubits wide, and 50 cubits high",
      "450 cubits long, 50 cubits wide, and 30 cubits high",
      "300 cubits long, 60 cubits wide, and 40 cubits high",
    ],
    answer: "300 cubits long, 50 cubits wide, and 30 cubits high",
    reference: "Genesis 6:14-16",
  },
  {
    question:
      "On what date did the floodwaters begin, according to Noah's age and the calendar given in Genesis?",
    options: [
      "The seventeenth day of the second month of Noah's six hundredth year",
      "The first day of the first month of Noah's six hundredth year",
      "The seventeenth day of the seventh month of Noah's six hundredth year",
      "The twenty-seventh day of the second month of Noah's six hundred and first year",
    ],
    answer:
      "The seventeenth day of the second month of Noah's six hundredth year",
    reference: "Genesis 7:11",
  },
  {
    question:
      "For how many days did the waters prevail upon the earth during the flood?",
    options: ["150 days", "40 days", "120 days", "190 days"],
    answer: "150 days",
    reference: "Genesis 7:24",
  },
  {
    question:
      "On what date did the ark come to rest on the mountains of Ararat?",
    options: [
      "The seventeenth day of the seventh month",
      "The first day of the tenth month",
      "The twenty-seventh day of the second month",
      "The first day of the first month",
    ],
    answer: "The seventeenth day of the seventh month",
    reference: "Genesis 8:4",
  },
  {
    question:
      "How long after the mountaintops became visible did Noah open the window of the ark and send out the raven?",
    options: ["Forty days", "Seven days", "Thirty days", "One hundred and fifty days"],
    answer: "Forty days",
    reference: "Genesis 8:5-7",
  },
  {
    question:
      "What command concerning blood accompanied God's permission for humans to eat animals after the flood?",
    options: [
      "They were not to eat flesh with its life, that is, its blood",
      "They were to drain blood only from clean animals",
      "They were to reserve blood for Noah's altar",
      "They were forbidden to eat any animal that had blood",
    ],
    answer: "They were not to eat flesh with its life, that is, its blood",
    reference: "Genesis 9:3-4",
  },
  {
    question:
      "According to the Table of Nations, who was described as a mighty hunter before the LORD?",
    options: ["Nimrod", "Cush", "Mizraim", "Canaan"],
    answer: "Nimrod",
    reference: "Genesis 10:8-9",
  },
  {
    question:
      "Which cities are named as the beginning of Nimrod's kingdom in the land of Shinar?",
    options: [
      "Babel, Erech, Accad, and Calneh",
      "Nineveh, Rehoboth Ir, Calah, and Resen",
      "Sodom, Gomorrah, Admah, and Zeboiim",
      "Ur, Haran, Salem, and Hebron",
    ],
    answer: "Babel, Erech, Accad, and Calneh",
    reference: "Genesis 10:10",
  },
  {
    question: "How old was Terah when he died in Haran?",
    options: ["205 years", "175 years", "180 years", "200 years"],
    answer: "205 years",
    reference: "Genesis 11:32",
  },
  {
    question:
      "What was the first place in Canaan where Abram is specifically said to have built an altar after the LORD appeared to him?",
    options: [
      "Near the great tree of Moreh at Shechem",
      "Between Bethel and Ai",
      "At Hebron by the oaks of Mamre",
      "At Beersheba",
    ],
    answer: "Near the great tree of Moreh at Shechem",
    reference: "Genesis 12:6-7",
  },
  {
    question:
      "When Abram went down to Egypt because of famine, what did Pharaoh give him because of Sarai?",
    options: [
      "Sheep, cattle, male and female donkeys, male and female servants, and camels",
      "Only silver, gold, and cattle",
      "Sheep, goats, horses, and armed servants",
      "Land in Goshen and one hundred camels",
    ],
    answer:
      "Sheep, cattle, male and female donkeys, male and female servants, and camels",
    reference: "Genesis 12:16",
  },
  {
    question:
      "After Abram and Lot separated, where did Abram move his tents and build an altar?",
    options: [
      "By the oaks of Mamre at Hebron",
      "Near Bethel",
      "At Beersheba",
      "In the Valley of Siddim",
    ],
    answer: "By the oaks of Mamre at Hebron",
    reference: "Genesis 13:18",
  },
  {
    question:
      "How many trained men born in Abram's household did he take in pursuit of the kings who had captured Lot?",
    options: ["318", "300", "400", "318 plus Lot's servants"],
    answer: "318",
    reference: "Genesis 14:14",
  },
  {
    question:
      "To what place did Abram pursue the defeated kings after attacking them by night?",
    options: [
      "Hobah, north of Damascus",
      "Dan, south of Damascus",
      "Salem, west of the Jordan",
      "Mamre, near Hebron",
    ],
    answer: "Hobah, north of Damascus",
    reference: "Genesis 14:15",
  },
  {
    question:
      "What title is given to Melchizedek when he blesses Abram?",
    options: [
      "Priest of God Most High",
      "King of the Most High alone",
      "Prophet of Salem",
      "Priest of the LORD of hosts",
    ],
    answer: "Priest of God Most High",
    reference: "Genesis 14:18-20",
  },
  {
    question:
      "What did Abram say he would not take from the king of Sodom, using an expression that emphasized even the smallest items?",
    options: [
      "A thread or a sandal strap",
      "A coin or a garment",
      "A loaf or a wineskin",
      "A sheep or a goat",
    ],
    answer: "A thread or a sandal strap",
    reference: "Genesis 14:22-23",
  },
  {
    question:
      "In Abram's covenant vision, how long did God say his descendants would be strangers and afflicted in a land not their own?",
    options: [
      "Four hundred years",
      "Four hundred and thirty years",
      "Three hundred years",
      "Seventy years",
    ],
    answer: "Four hundred years",
    reference: "Genesis 15:13",
  },
  {
    question:
      "Which animals did Abram cut in two during the covenant ceremony, while leaving the birds undivided?",
    options: [
      "A three-year-old heifer, a three-year-old female goat, and a three-year-old ram",
      "A bull, a ram, and a male goat",
      "A heifer, a lamb, and a male goat",
      "A three-year-old bull, a female goat, and a ram",
    ],
    answer:
      "A three-year-old heifer, a three-year-old female goat, and a three-year-old ram",
    reference: "Genesis 15:9-10",
  },
  {
    question:
      "What two visible manifestations passed between the pieces of Abram's sacrifice after sunset?",
    options: [
      "A smoking firepot and a blazing torch",
      "A pillar of cloud and a pillar of fire",
      "A flame and a whirlwind",
      "A burning bush and a cloud",
    ],
    answer: "A smoking firepot and a blazing torch",
    reference: "Genesis 15:17",
  },
  {
    question: "How old was Abram when Hagar bore Ishmael?",
    options: ["86 years", "85 years", "99 years", "100 years"],
    answer: "86 years",
    reference: "Genesis 16:16",
  },
  {
    question:
      "By what name did Hagar refer to the LORD after the angel spoke with her in the wilderness?",
    options: [
      "The God who sees me",
      "The LORD who provides",
      "The Everlasting God",
      "The God of Bethel",
    ],
    answer: "The God who sees me",
    reference: "Genesis 16:13",
  },
  {
    question:
      "How old was Abraham when he and the males of his household were circumcised?",
    options: ["99 years", "100 years", "86 years", "75 years"],
    answer: "99 years",
    reference: "Genesis 17:23-27",
  },
  {
    question: "How old was Ishmael when he was circumcised?",
    options: ["13 years", "12 years", "14 years", "17 years"],
    answer: "13 years",
    reference: "Genesis 17:25",
  },
  {
    question:
      "When Abraham hosted the three visitors by the oaks of Mamre, how much fine flour did he tell Sarah to knead for cakes?",
    options: ["Three seahs", "One ephah", "Two seahs", "Five measures"],
    answer: "Three seahs",
    reference: "Genesis 18:6",
  },
  {
    question:
      "What food did Abraham personally set before his visitors besides the cakes Sarah prepared?",
    options: [
      "A tender calf, curds, and milk",
      "A lamb, bread, and wine",
      "Goat meat, cheese, and water",
      "A calf, dates, and wine",
    ],
    answer: "A tender calf, curds, and milk",
    reference: "Genesis 18:7-8",
  },
  {
    question:
      "At what number of righteous people did Abraham stop bargaining with the LORD over Sodom?",
    options: ["Ten", "Twenty", "Five", "Fifty"],
    answer: "Ten",
    reference: "Genesis 18:22-33",
  },
  {
    question:
      "What did the men of Sodom accuse Lot of doing when he tried to restrain them?",
    options: [
      "Acting as a judge",
      "Hiding foreign spies",
      "Stealing their property",
      "Breaking their city laws",
    ],
    answer: "Acting as a judge",
    reference: "Genesis 19:9",
  },
  {
    question:
      "What reason did Lot give for asking to flee to Zoar instead of the mountains?",
    options: [
      "He feared disaster would overtake him before he reached the mountains",
      "He wanted to remain near his livestock",
      "His daughters refused to go farther",
      "The angels told him Zoar was already safe",
    ],
    answer:
      "He feared disaster would overtake him before he reached the mountains",
    reference: "Genesis 19:17-22",
  },
  {
    question:
      "What names did Lot's daughters give the sons born from their father?",
    options: [
      "Moab and Ben-Ammi",
      "Ammon and Edom",
      "Moab and Ishmael",
      "Ben-Ammi and Midian",
    ],
    answer: "Moab and Ben-Ammi",
    reference: "Genesis 19:36-38",
  },
  {
    question:
      "What explanation did Abraham give Abimelech for calling Sarah his sister?",
    options: [
      "She was in fact his half-sister, the daughter of his father but not of his mother",
      "She was his cousin and was customarily called sister",
      "Sarah had suggested the deception on their wedding day",
      "The LORD had commanded him to conceal the marriage",
    ],
    answer:
      "She was in fact his half-sister, the daughter of his father but not of his mother",
    reference: "Genesis 20:11-13",
  },
  {
    question:
      "What did Abimelech give Abraham in addition to sheep, cattle, and servants after returning Sarah?",
    options: [
      "One thousand pieces of silver",
      "Four hundred shekels of silver",
      "A hundred pieces of gold",
      "Seven ewe lambs",
    ],
    answer: "One thousand pieces of silver",
    reference: "Genesis 20:14-16",
  },
  {
    question:
      "What unusual gift did Abraham give Abimelech separately when they made a covenant at Beersheba?",
    options: [
      "Seven ewe lambs",
      "Seven rams",
      "A silver cup",
      "A hundred sheep",
    ],
    answer: "Seven ewe lambs",
    reference: "Genesis 21:27-31",
  },
  {
    question:
      "What tree did Abraham plant at Beersheba after making a covenant with Abimelech?",
    options: [
      "A tamarisk tree",
      "An olive tree",
      "A terebinth tree",
      "A fig tree",
    ],
    answer: "A tamarisk tree",
    reference: "Genesis 21:33",
  },
  {
    question:
      "After the binding of Isaac, which of Nahor's descendants was identified as the father of Rebekah?",
    options: ["Bethuel", "Kemuel", "Huz", "Buz"],
    answer: "Bethuel",
    reference: "Genesis 22:20-23",
  },
  {
    question:
      "How much silver did Abraham weigh out to Ephron for the field and cave of Machpelah?",
    options: [
      "400 shekels",
      "300 shekels",
      "500 shekels",
      "1,000 shekels",
    ],
    answer: "400 shekels",
    reference: "Genesis 23:14-16",
  },
  {
    question:
      "Who is specifically named as the owner of the field of Machpelah before Abraham purchased it?",
    options: [
      "Ephron son of Zohar",
      "Mamre the Amorite",
      "Abimelech of Gerar",
      "Bethuel son of Nahor",
    ],
    answer: "Ephron son of Zohar",
    reference: "Genesis 23:8-18",
  },
  {
    question:
      "What sign did Abraham's servant ask God to use to identify the woman chosen for Isaac?",
    options: [
      "She would offer water to him and also volunteer to water his camels",
      "She would invite him to her father's house before being asked",
      "She would identify Abraham by name",
      "She would offer bread to his men and grain to his camels",
    ],
    answer:
      "She would offer water to him and also volunteer to water his camels",
    reference: "Genesis 24:12-14",
  },
  {
    question:
      "What jewelry did Abraham's servant give Rebekah after the camels had finished drinking?",
    options: [
      "A gold nose ring and two gold bracelets",
      "A silver necklace and two gold bracelets",
      "A gold ring and a silver anklet",
      "Two gold earrings and a necklace",
    ],
    answer: "A gold nose ring and two gold bracelets",
    reference: "Genesis 24:22",
  },
  {
    question:
      "How much did the nose ring and bracelets given to Rebekah weigh?",
    options: [
      "The nose ring was half a shekel and the bracelets ten shekels of gold",
      "The nose ring was one shekel and the bracelets five shekels",
      "The nose ring was two shekels and the bracelets twenty shekels",
      "The nose ring was half a shekel and the bracelets five shekels",
    ],
    answer:
      "The nose ring was half a shekel and the bracelets ten shekels of gold",
    reference: "Genesis 24:22",
  },
  {
    question:
      "Where was Isaac living when Rebekah was brought to him?",
    options: [
      "In the Negev, after coming from Beer Lahai Roi",
      "At Hebron beside the cave of Machpelah",
      "At Beersheba beside Abraham's tamarisk tree",
      "Near Bethel between Bethel and Ai",
    ],
    answer: "In the Negev, after coming from Beer Lahai Roi",
    reference: "Genesis 24:62",
  },
  {
    question:
      "Which sons of Abraham buried him in the cave of Machpelah?",
    options: [
      "Isaac and Ishmael",
      "Isaac and Midian",
      "Ishmael and Zimran",
      "Isaac and Jacob",
    ],
    answer: "Isaac and Ishmael",
    reference: "Genesis 25:9",
  },
  {
    question: "How old was Abraham when he died?",
    options: ["175 years", "180 years", "147 years", "160 years"],
    answer: "175 years",
    reference: "Genesis 25:7",
  },
  {
    question: "How old was Isaac when Esau and Jacob were born?",
    options: ["60 years", "40 years", "100 years", "75 years"],
    answer: "60 years",
    reference: "Genesis 25:26",
  },
  {
    question:
      "What two descriptions distinguish Esau and Jacob at birth?",
    options: [
      "Esau was red and hairy, while Jacob came out grasping Esau's heel",
      "Esau was dark-haired, while Jacob was red and smooth",
      "Esau grasped Jacob's heel, while Jacob was covered with hair",
      "Esau was smooth-skinned, while Jacob was red and hairy",
    ],
    answer:
      "Esau was red and hairy, while Jacob came out grasping Esau's heel",
    reference: "Genesis 25:24-26",
  },
  {
    question:
      "Which wells dug by Isaac's servants were named because of disputes with the herdsmen of Gerar?",
    options: [
      "Esek and Sitnah",
      "Rehoboth and Shibah",
      "Beer Lahai Roi and Beersheba",
      "Gerar and Rehoboth",
    ],
    answer: "Esek and Sitnah",
    reference: "Genesis 26:19-22",
  },
  {
    question:
      "What did Isaac name the well over which there was finally no quarrel?",
    options: ["Rehoboth", "Esek", "Sitnah", "Shibah"],
    answer: "Rehoboth",
    reference: "Genesis 26:22",
  },
  {
    question:
      "What were the names and ethnic identities of Esau's first two wives mentioned in Genesis 26?",
    options: [
      "Judith daughter of Beeri the Hittite and Basemath daughter of Elon the Hittite",
      "Adah daughter of Elon the Hittite and Oholibamah daughter of Anah",
      "Basemath daughter of Ishmael and Mahalath daughter of Beeri",
      "Judith daughter of Zibeon and Basemath daughter of Ishmael",
    ],
    answer:
      "Judith daughter of Beeri the Hittite and Basemath daughter of Elon the Hittite",
    reference: "Genesis 26:34",
  },
  {
    question:
      "What did Rebekah put on Jacob's hands and the smooth part of his neck so that Isaac would mistake him for Esau?",
    options: [
      "The skins of the young goats",
      "Sheepskins",
      "Esau's hunting gloves",
      "A hairy garment woven by servants",
    ],
    answer: "The skins of the young goats",
    reference: "Genesis 27:15-16",
  },
  {
    question:
      "What blessing did Isaac give Esau after realizing Jacob had already received the primary blessing?",
    options: [
      "His dwelling would be away from the earth's richness, he would live by the sword, serve his brother, and eventually break the yoke",
      "He would receive the same blessing but without authority over nations",
      "He would inherit Canaan while Jacob would live in Haran",
      "He would rule his brother after seven years",
    ],
    answer:
      "His dwelling would be away from the earth's richness, he would live by the sword, serve his brother, and eventually break the yoke",
    reference: "Genesis 27:39-40",
  },
  {
    question:
      "What did Jacob promise to give God after his dream at Bethel if God kept him and brought him safely home?",
    options: [
      "A tenth of everything God gave him",
      "One-fifth of all his flocks",
      "The stone pillar and all its surrounding land",
      "Seven rams every year",
    ],
    answer: "A tenth of everything God gave him",
    reference: "Genesis 28:20-22",
  },
  {
    question:
      "What reason did Laban give Jacob for substituting Leah for Rachel?",
    options: [
      "It was not customary in their place to give the younger daughter before the firstborn",
      "Rachel had not yet reached marriageable age",
      "Leah had already been promised to Jacob by Bethuel",
      "Jacob had not completed seven full years of service",
    ],
    answer:
      "It was not customary in their place to give the younger daughter before the firstborn",
    reference: "Genesis 29:25-26",
  },
  {
    question:
      "Which son did Leah name because she said, 'This time I will praise the LORD'?",
    options: ["Judah", "Levi", "Simeon", "Reuben"],
    answer: "Judah",
    reference: "Genesis 29:35",
  },
  {
    question:
      "Which of Jacob's sons was born after Leah said, 'God has endowed me with a good endowment'?",
    options: ["Zebulun", "Issachar", "Levi", "Gad"],
    answer: "Zebulun",
    reference: "Genesis 30:19-20",
  },
  {
    question:
      "What plant did Reuben find during wheat harvest that Rachel wanted from Leah?",
    options: ["Mandrakes", "Barley heads", "Wild figs", "Balm plants"],
    answer: "Mandrakes",
    reference: "Genesis 30:14",
  },
  {
    question:
      "What arrangement did Jacob propose for his wages from Laban's flocks?",
    options: [
      "Every speckled and spotted sheep and goat, and every dark-colored lamb",
      "Every firstborn male animal",
      "One-tenth of every newborn animal",
      "All white goats and black sheep",
    ],
    answer:
      "Every speckled and spotted sheep and goat, and every dark-colored lamb",
    reference: "Genesis 30:31-33",
  },
  {
    question:
      "Which three kinds of branches did Jacob peel and place before the flocks?",
    options: [
      "Poplar, almond, and plane",
      "Cedar, olive, and fig",
      "Tamarisk, acacia, and almond",
      "Poplar, oak, and pomegranate",
    ],
    answer: "Poplar, almond, and plane",
    reference: "Genesis 30:37",
  },
  {
    question:
      "How many times did Jacob say Laban had changed his wages?",
    options: ["Ten times", "Seven times", "Twelve times", "Twenty times"],
    answer: "Ten times",
    reference: "Genesis 31:7, 41",
  },
  {
    question:
      "Where did Rachel hide the household gods she had stolen from Laban?",
    options: [
      "Inside a camel's saddle, on which she sat",
      "Inside a tent cushion",
      "Under Leah's bedding",
      "Among Jacob's peeled branches",
    ],
    answer: "Inside a camel's saddle, on which she sat",
    reference: "Genesis 31:34",
  },
  {
    question:
      "What two names were given to the heap of stones marking the covenant between Jacob and Laban?",
    options: [
      "Jegar Sahadutha and Galeed",
      "Mizpah and Bethel",
      "Galeed and Mahanaim",
      "Jegar Sahadutha and Peniel",
    ],
    answer: "Jegar Sahadutha and Galeed",
    reference: "Genesis 31:47",
  },
  {
    question:
      "What did Jacob call the place where angels of God met him after he separated from Laban?",
    options: ["Mahanaim", "Peniel", "Succoth", "Galeed"],
    answer: "Mahanaim",
    reference: "Genesis 32:1-2",
  },
  {
    question:
      "Into how many camps did Jacob divide his people and possessions when he heard Esau was approaching with four hundred men?",
    options: ["Two camps", "Three camps", "Four camps", "Seven camps"],
    answer: "Two camps",
    reference: "Genesis 32:6-8",
  },
  {
    question:
      "How many female camels with their young were included in Jacob's gift to Esau?",
    options: ["Thirty", "Twenty", "Forty", "Ten"],
    answer: "Thirty",
    reference: "Genesis 32:13-15",
  },
  {
    question:
      "After wrestling through the night, what physical consequence remained with Jacob as he crossed Penuel?",
    options: [
      "He limped because of his hip",
      "His right hand was weakened",
      "He was blinded in one eye",
      "His shoulder remained dislocated",
    ],
    answer: "He limped because of his hip",
    reference: "Genesis 32:31-32",
  },
  {
    question:
      "What did Jacob build after settling near the city of Shechem, and what did he call it?",
    options: [
      "An altar called El Elohe Israel",
      "A pillar called Bethel",
      "A well called Rehoboth",
      "An altar called Jehovah Jireh",
    ],
    answer: "An altar called El Elohe Israel",
    reference: "Genesis 33:18-20",
  },
  {
    question:
      "Which two sons of Jacob killed the men of Shechem after they had been circumcised?",
    options: [
      "Simeon and Levi",
      "Judah and Simeon",
      "Reuben and Levi",
      "Dan and Naphtali",
    ],
    answer: "Simeon and Levi",
    reference: "Genesis 34:25",
  },
  {
    question:
      "Before Jacob returned to Bethel, what did he tell his household to do with their foreign gods and earrings?",
    options: [
      "Give them to him, and he buried them under the oak near Shechem",
      "Burn them outside the camp",
      "Take them to Bethel and place them beside the altar",
      "Give them to the people of Shechem",
    ],
    answer:
      "Give them to him, and he buried them under the oak near Shechem",
    reference: "Genesis 35:2-4",
  },
  {
    question:
      "What name did Rachel give her second son as she was dying, and what name did Jacob give him instead?",
    options: [
      "Ben-Oni; Benjamin",
      "Benjamin; Ben-Oni",
      "Joseph; Benjamin",
      "Ben-Ammi; Benjamin",
    ],
    answer: "Ben-Oni; Benjamin",
    reference: "Genesis 35:16-18",
  },
  {
    question:
      "Who was Rebekah's nurse, whose death is recorded near Bethel?",
    options: ["Deborah", "Bilhah", "Zilpah", "Judith"],
    answer: "Deborah",
    reference: "Genesis 35:8",
  },
  {
    question:
      "Which son of Esau became the ancestor of Amalek through Timna?",
    options: ["Eliphaz", "Reuel", "Jeush", "Korah"],
    answer: "Eliphaz",
    reference: "Genesis 36:12",
  },
  {
    question:
      "What did Joseph report to his father about the sons of Bilhah and Zilpah when he was seventeen?",
    options: [
      "A bad report about them",
      "That they had sold part of the flock",
      "That they intended to leave Canaan",
      "That they had quarreled with Judah",
    ],
    answer: "A bad report about them",
    reference: "Genesis 37:2",
  },
  {
    question:
      "At what place did the man who found Joseph wandering say his brothers had gone?",
    options: ["Dothan", "Shechem", "Hebron", "Bethel"],
    answer: "Dothan",
    reference: "Genesis 37:15-17",
  },
  {
    question: "For how many pieces of silver was Joseph sold?",
    options: [
      "Twenty pieces of silver",
      "Thirty pieces of silver",
      "Twenty-five pieces of silver",
      "Fifty pieces of silver",
    ],
    answer: "Twenty pieces of silver",
    reference: "Genesis 37:28",
  },
  {
    question:
      "What three items did Tamar request as a pledge from Judah?",
    options: [
      "His signet, cord, and staff",
      "His ring, cloak, and sandals",
      "His staff, belt, and bracelet",
      "His signet, sword, and cord",
    ],
    answer: "His signet, cord, and staff",
    reference: "Genesis 38:17-18",
  },
  {
    question:
      "What names were given to Tamar's twin sons, and which one had the scarlet thread tied to his hand before withdrawing it?",
    options: [
      "Perez and Zerah; Zerah had the scarlet thread",
      "Zerah and Perez; Perez had the scarlet thread",
      "Shelah and Zerah; Shelah had the scarlet thread",
      "Perez and Onan; Perez had the scarlet thread",
    ],
    answer: "Perez and Zerah; Zerah had the scarlet thread",
    reference: "Genesis 38:27-30",
  },
  {
    question:
      "What offices did Pharaoh's two imprisoned servants hold when Joseph interpreted their dreams?",
    options: [
      "Chief cupbearer and chief baker",
      "Chief steward and chief baker",
      "Cupbearer and commander of the guard",
      "Chief baker and chief scribe",
    ],
    answer: "Chief cupbearer and chief baker",
    reference: "Genesis 40:1-3",
  },
  {
    question:
      "In the chief cupbearer's dream, how many branches were on the vine?",
    options: ["Three", "Seven", "Two", "Twelve"],
    answer: "Three",
    reference: "Genesis 40:9-13",
  },
  {
    question:
      "In the chief baker's dream, what was in the uppermost basket?",
    options: [
      "All kinds of baked goods for Pharaoh, which the birds ate",
      "Three loaves of bread covered with grain",
      "Fruit and bread for Pharaoh",
      "Meat, bread, and cakes",
    ],
    answer:
      "All kinds of baked goods for Pharaoh, which the birds ate",
    reference: "Genesis 40:16-19",
  },
  {
    question:
      "How long after the cupbearer was restored did Pharaoh have the dreams that led to Joseph's release?",
    options: ["Two full years", "Three years", "One year", "Seven years"],
    answer: "Two full years",
    reference: "Genesis 41:1",
  },
  {
    question:
      "What fraction of Egypt's produce did Joseph recommend collecting during the seven years of abundance?",
    options: ["One-fifth", "One-tenth", "One-seventh", "One-fourth"],
    answer: "One-fifth",
    reference: "Genesis 41:34",
  },
  {
    question:
      "Who was Asenath, the woman Pharaoh gave Joseph as a wife?",
    options: [
      "The daughter of Potiphera, priest of On",
      "The daughter of Potiphar, captain of the guard",
      "The daughter of Pharaoh's chief cupbearer",
      "The daughter of an Egyptian governor of Goshen",
    ],
    answer: "The daughter of Potiphera, priest of On",
    reference: "Genesis 41:45",
  },
  {
    question:
      "How old was Joseph when he entered Pharaoh's service?",
    options: [
      "Thirty years old",
      "Seventeen years old",
      "Twenty-eight years old",
      "Forty years old",
    ],
    answer: "Thirty years old",
    reference: "Genesis 41:46",
  },
  {
    question:
      "What reason is given for Joseph naming his second son Ephraim?",
    options: [
      "God had made him fruitful in the land of his affliction",
      "God had made him forget all his trouble",
      "God had preserved him from prison",
      "God had doubled his inheritance",
    ],
    answer:
      "God had made him fruitful in the land of his affliction",
    reference: "Genesis 41:52",
  },
  {
    question:
      "Which brother was kept bound in Egypt while the others returned to Canaan after their first journey for grain?",
    options: ["Simeon", "Reuben", "Levi", "Judah"],
    answer: "Simeon",
    reference: "Genesis 42:24",
  },
  {
    question:
      "What did Reuben offer Jacob as a guarantee that he would bring Benjamin back safely?",
    options: [
      "The lives of his own two sons",
      "His inheritance and flocks",
      "His own life only",
      "His firstborn rights",
    ],
    answer: "The lives of his own two sons",
    reference: "Genesis 42:37",
  },
  {
    question:
      "What gifts did Jacob tell his sons to take back to Egypt for the man, besides double the money?",
    options: [
      "Balm, honey, spices, myrrh, pistachio nuts, and almonds",
      "Silver, gold, balm, grain, and wine",
      "Honey, dates, olive oil, spices, and figs",
      "Balm, myrrh, frankincense, wine, and almonds",
    ],
    answer:
      "Balm, honey, spices, myrrh, pistachio nuts, and almonds",
    reference: "Genesis 43:11-12",
  },
  {
    question:
      "How much larger was Benjamin's portion than those of his brothers at Joseph's banquet?",
    options: [
      "Five times as much",
      "Seven times as much",
      "Twice as much",
      "Ten times as much",
    ],
    answer: "Five times as much",
    reference: "Genesis 43:34",
  },
  {
    question:
      "What two things did Joseph command his steward to put in Benjamin's sack?",
    options: [
      "Benjamin's grain money and Joseph's silver cup",
      "A gold cup and twice the grain money",
      "Joseph's signet ring and Benjamin's money",
      "A silver cup and Judah's pledge",
    ],
    answer: "Benjamin's grain money and Joseph's silver cup",
    reference: "Genesis 44:1-2",
  },
  {
    question:
      "In Judah's plea before Joseph, what reason did he give for offering himself instead of Benjamin?",
    options: [
      "He had guaranteed Benjamin's safety to his father and feared Jacob would die from grief",
      "Benjamin was innocent while Judah had stolen the cup",
      "Judah was the oldest surviving son",
      "Jacob had commanded Judah to remain in Egypt if anything happened",
    ],
    answer:
      "He had guaranteed Benjamin's safety to his father and feared Jacob would die from grief",
    reference: "Genesis 44:18-34",
  },
  {
    question:
      "What did Joseph give Benjamin when sending his brothers back to Canaan after revealing himself?",
    options: [
      "Three hundred pieces of silver and five changes of garments",
      "Five hundred pieces of silver and three garments",
      "A silver cup and five garments",
      "Three hundred pieces of silver and ten donkeys",
    ],
    answer:
      "Three hundred pieces of silver and five changes of garments",
    reference: "Genesis 45:22",
  },
  {
    question:
      "How many donkeys loaded with the good things of Egypt did Joseph send to his father, and how many female donkeys carried grain, bread, and provisions?",
    options: [
      "Ten male donkeys and ten female donkeys",
      "Five male donkeys and ten female donkeys",
      "Ten male donkeys and five female donkeys",
      "Twenty male donkeys and ten female donkeys",
    ],
    answer: "Ten male donkeys and ten female donkeys",
    reference: "Genesis 45:23",
  },
  {
    question:
      "At Beersheba, what did Jacob offer before God spoke to him in visions of the night?",
    options: [
      "Sacrifices to the God of his father Isaac",
      "A tenth of all his possessions",
      "Seven ewe lambs",
      "A drink offering over a stone pillar",
    ],
    answer: "Sacrifices to the God of his father Isaac",
    reference: "Genesis 46:1-4",
  },
  {
    question:
      "According to the count given in Genesis, how many persons of Jacob's household came to Egypt, including Joseph and his two sons in Egypt?",
    options: ["Seventy", "Sixty-six", "Seventy-five", "Sixty-nine"],
    answer: "Seventy",
    reference: "Genesis 46:26-27",
  },
  {
    question:
      "What occupation did Joseph tell his brothers to emphasize before Pharaoh so they could settle in Goshen?",
    options: [
      "They were shepherds and had tended livestock from their youth",
      "They were farmers from Canaan",
      "They were merchants dealing in grain",
      "They were craftsmen skilled in metalwork",
    ],
    answer:
      "They were shepherds and had tended livestock from their youth",
    reference: "Genesis 46:31-34",
  },
  {
    question:
      "During the famine, what did the Egyptians give Joseph after their money was exhausted in exchange for food?",
    options: [
      "Their livestock, and later their land and themselves",
      "Their jewelry first, then their houses",
      "Their land immediately, then their livestock",
      "Only their cattle and sheep",
    ],
    answer: "Their livestock, and later their land and themselves",
    reference: "Genesis 47:13-21",
  },
  {
    question:
      "What portion of produce did Joseph establish as Pharaoh's permanent share, except from the priests' land?",
    options: ["One-fifth", "One-tenth", "One-fourth", "One-seventh"],
    answer: "One-fifth",
    reference: "Genesis 47:23-26",
  },
  {
    question:
      "How old was Jacob when he stood before Pharaoh?",
    options: ["130 years", "147 years", "120 years", "137 years"],
    answer: "130 years",
    reference: "Genesis 47:8-9",
  },
  {
    question:
      "How many years did Jacob live in Egypt before his death?",
    options: [
      "Seventeen years",
      "Twenty years",
      "Twelve years",
      "Seven years",
    ],
    answer: "Seventeen years",
    reference: "Genesis 47:28",
  },
  {
    question:
      "Where did Jacob require Joseph to place his hand when swearing not to bury him in Egypt?",
    options: [
      "Under Jacob's thigh",
      "On Jacob's head",
      "On the staff at Jacob's bedside",
      "On the altar Jacob had built",
    ],
    answer: "Under Jacob's thigh",
    reference: "Genesis 47:29-31",
  },
  {
    question:
      "When Jacob blessed Joseph's sons, which hand did he intentionally place on Ephraim, the younger son?",
    options: [
      "His right hand",
      "His left hand",
      "Both hands",
      "He did not touch Ephraim",
    ],
    answer: "His right hand",
    reference: "Genesis 48:13-20",
  },
  {
    question:
      "Which of Jacob's sons was compared to a serpent by the roadside and a viper along the path?",
    options: ["Dan", "Gad", "Issachar", "Naphtali"],
    answer: "Dan",
    reference: "Genesis 49:16-18",
  },
  {
    question:
      "Which son was compared to a strong donkey lying down between two burdens?",
    options: ["Issachar", "Zebulun", "Asher", "Naphtali"],
    answer: "Issachar",
    reference: "Genesis 49:14-15",
  },
  {
    question:
      "Which son did Jacob describe as a fruitful bough by a spring whose branches run over a wall?",
    options: ["Joseph", "Judah", "Benjamin", "Zebulun"],
    answer: "Joseph",
    reference: "Genesis 49:22",
  },
  {
    question:
      "What did Jacob say about Benjamin in his final blessings?",
    options: [
      "He is a ravenous wolf; in the morning he devours the prey and at evening divides the spoil",
      "He is a lion's cub who crouches over prey",
      "He is a deer let loose who gives beautiful words",
      "He is a serpent by the road that bites the horse's heels",
    ],
    answer:
      "He is a ravenous wolf; in the morning he devours the prey and at evening divides the spoil",
    reference: "Genesis 49:27",
  },
  {
    question:
      "How long did the Egyptians mourn for Jacob?",
    options: ["Seventy days", "Forty days", "Thirty days", "Seven days"],
    answer: "Seventy days",
    reference: "Genesis 50:1-3",
  },
  {
    question:
      "How long did the embalming process for Jacob take?",
    options: ["Forty days", "Seventy days", "Thirty days", "Seven days"],
    answer: "Forty days",
    reference: "Genesis 50:2-3",
  },
  {
    question:
      "At what place did Joseph and the funeral company hold a great and very solemn mourning for Jacob for seven days?",
    options: [
      "The threshing floor of Atad beyond the Jordan",
      "The cave of Machpelah",
      "Beersheba",
      "The oaks of Mamre",
    ],
    answer: "The threshing floor of Atad beyond the Jordan",
    reference: "Genesis 50:10-11",
  },
  {
    question: "How old was Joseph when he died?",
    options: ["110 years", "120 years", "147 years", "100 years"],
    answer: "110 years",
    reference: "Genesis 50:22-26",
  },
  {
    question:
      "Before his death, how far into his descendants did Joseph live to see?",
    options: [
      "Ephraim's children to the third generation, and the children of Machir son of Manasseh",
      "Only his grandchildren through Ephraim",
      "The fourth generation of both Manasseh and Ephraim",
      "Only Machir, son of Manasseh",
    ],
    answer:
      "Ephraim's children to the third generation, and the children of Machir son of Manasseh",
    reference: "Genesis 50:23",
  },
  {
    question:
      "What was done with Joseph's body after his death in Egypt?",
    options: [
      "He was embalmed and placed in a coffin in Egypt",
      "He was immediately taken to Canaan and buried at Machpelah",
      "He was cremated and his ashes preserved",
      "He was buried in Goshen without embalming",
    ],
    answer: "He was embalmed and placed in a coffin in Egypt",
    reference: "Genesis 50:26",
  },
];

export default genesisQuestions;