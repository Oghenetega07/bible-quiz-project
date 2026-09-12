const genesisQuestions = [
  {
    question: "What did God call the light when He separated it from the darkness?",
    options: ["Day", "Morning", "Sun", "Brightness"],
    answer: "Day",
    reference: "Genesis 1:3-5",
  },
  {
    question: "What was created to separate the waters above from the waters below?",
    options: ["The firmament", "The earth", "The heavens", "The atmosphere"],
    answer: "The firmament",
    reference: "Genesis 1:6-8",
  },
  {
    question: "Which appeared on the earth before the sun, moon, and stars were made?",
    options: ["Vegetation", "Birds", "Animals", "Man"],
    answer: "Vegetation",
    reference: "Genesis 1:11-13",
  },
  {
    question: "What purposes did God give the lights in the expanse of heaven?",
    options: [
      "For signs, seasons, days, and years",
      "For worship and sacrifice",
      "For measuring the earth",
      "For guiding animals"
    ],
    answer: "For signs, seasons, days, and years",
    reference: "Genesis 1:14",
  },
  {
    question: "What did God command the waters to bring forth abundantly?",
    options: ["Living creatures", "Trees", "Birds", "Fish only"],
    answer: "Living creatures",
    reference: "Genesis 1:20",
  },
  {
    question: "What authority did God give mankind over the creatures He had made?",
    options: [
      "To have dominion over them",
      "To worship them",
      "To destroy them",
      "To keep them only in the garden"
    ],
    answer: "To have dominion over them",
    reference: "Genesis 1:26-28",
  },
  {
    question: "What food did God initially give mankind?",
    options: [
      "Seed-bearing plants and fruit from trees",
      "Fish and birds",
      "Animals and grains",
      "Bread and fruit"
    ],
    answer: "Seed-bearing plants and fruit from trees",
    reference: "Genesis 1:29",
  },
  {
    question: "What did God do on the seventh day after completing His work?",
    options: ["He rested", "He created man", "He planted Eden", "He blessed Adam"],
    answer: "He rested",
    reference: "Genesis 2:2-3",
  },
  {
    question: "What responsibility was Adam given concerning the garden?",
    options: [
      "To tend and keep it",
      "To name only the plants",
      "To build a house in it",
      "To guard it from animals"
    ],
    answer: "To tend and keep it",
    reference: "Genesis 2:15",
  },
  {
    question: "What reason did God give for making a woman for Adam?",
    options: [
      "It was not good for man to be alone",
      "Adam needed someone to name animals",
      "Adam needed help building the garden",
      "Adam needed another ruler"
    ],
    answer: "It was not good for man to be alone",
    reference: "Genesis 2:18",
  },
  {
    question: "From what did Adam recognize the woman as being closely related to him?",
    options: [
      "She was taken from his side",
      "She was created from the ground",
      "She was formed from a tree",
      "She was brought from outside Eden"
    ],
    answer: "She was taken from his side",
    reference: "Genesis 2:21-23",
  },
  {
    question: "What made the serpent's question to Eve significant?",
    options: [
      "It questioned God's command concerning the trees",
      "It asked Eve to leave Eden",
      "It asked Adam to name it",
      "It commanded Eve to eat every fruit"
    ],
    answer: "It questioned God's command concerning the trees",
    reference: "Genesis 3:1",
  },
  {
    question: "What did Adam and Eve use after realizing they were naked?",
    options: ["Fig leaves", "Animal skins", "Palm leaves", "Tree bark"],
    answer: "Fig leaves",
    reference: "Genesis 3:7",
  },
  {
    question: "Why did Adam say he hid from God?",
    options: [
      "He was afraid because he was naked",
      "He was angry with Eve",
      "He had become sick",
      "He was searching for food"
    ],
    answer: "He was afraid because he was naked",
    reference: "Genesis 3:8-10",
  },
  {
    question: "When God questioned Adam about eating the forbidden fruit, whom did Adam mention first?",
    options: ["The woman", "The serpent", "God", "Himself"],
    answer: "The woman",
    reference: "Genesis 3:11-12",
  },
  {
    question: "What prevented mankind from accessing the tree of life after the fall?",
    options: [
      "Cherubim and a flaming sword",
      "A wall of fire",
      "An angel with a shield",
      "A locked gate"
    ],
    answer: "Cherubim and a flaming sword",
    reference: "Genesis 3:22-24",
  },
  {
    question: "What occupations did Cain and Abel have?",
    options: [
      "Cain was a farmer and Abel was a shepherd",
      "Cain was a shepherd and Abel was a farmer",
      "Both were shepherds",
      "Both were farmers"
    ],
    answer: "Cain was a farmer and Abel was a shepherd",
    reference: "Genesis 4:2",
  },
  {
    question: "What warning did God give Cain about sin?",
    options: [
      "Sin was crouching at his door and desired him",
      "Sin would destroy his family",
      "Sin would take away his possessions",
      "Sin would make him unable to work"
    ],
    answer: "Sin was crouching at his door and desired him",
    reference: "Genesis 4:6-7",
  },
  {
    question: "What happened to the ground because of Cain's actions?",
    options: [
      "It would no longer yield its strength to him",
      "It became completely barren",
      "It was covered with water",
      "It produced only thorns"
    ],
    answer: "It would no longer yield its strength to him",
    reference: "Genesis 4:11-12",
  },
  {
    question: "What happened to Enoch that was different from the usual description of death in Genesis?",
    options: [
      "God took him",
      "He died in the flood",
      "He disappeared into the wilderness",
      "He became a priest"
    ],
    answer: "God took him",
    reference: "Genesis 5:22-24",
  },
  {
    question: "Why was Noah given his name according to his father Lamech?",
    options: [
      "He would bring relief from the painful labor caused by the cursed ground",
      "He would build the first city",
      "He would become a king",
      "He would discover a new land"
    ],
    answer:
      "He would bring relief from the painful labor caused by the cursed ground",
    reference: "Genesis 5:28-29",
  },
  {
    question: "What two conditions are specifically mentioned as characterizing the earth before the flood?",
    options: [
      "It was corrupt and filled with violence",
      "It was dry and barren",
      "It was dark and empty",
      "It was divided and scattered"
    ],
    answer: "It was corrupt and filled with violence",
    reference: "Genesis 6:11-13",
  },
  {
    question: "How is Noah specifically described before the flood?",
    options: [
      "Righteous and walking with God",
      "A mighty warrior",
      "A king over the earth",
      "A priest of God"
    ],
    answer: "Righteous and walking with God",
    reference: "Genesis 6:9",
  },
  {
    question: "Where was Noah instructed to place the door of the ark?",
    options: [
      "In its side",
      "On its roof",
      "At the front",
      "Underneath it"
    ],
    answer: "In its side",
    reference: "Genesis 6:16",
  },
  {
    question: "What did God establish with Noah before the flood?",
    options: ["A covenant", "A kingdom", "A priesthood", "A new city"],
    answer: "A covenant",
    reference: "Genesis 6:18",
  },
  {
    question: "How many people from Noah's family entered the ark?",
    options: ["Eight", "Seven", "Six", "Ten"],
    answer: "Eight",
    reference: "Genesis 7:13",
  },
  {
    question: "What did Noah first send out after the waters began to recede?",
    options: ["A raven", "A dove", "An eagle", "A pigeon"],
    answer: "A raven",
    reference: "Genesis 8:6-7",
  },
  {
    question: "What did the dove bring back to Noah when it returned to the ark?",
    options: [
      "A freshly plucked olive leaf",
      "A branch of fig leaves",
      "A piece of grass",
      "A flower"
    ],
    answer: "A freshly plucked olive leaf",
    reference: "Genesis 8:11",
  },
  {
    question: "What did Noah build after leaving the ark?",
    options: ["An altar", "A house", "A tower", "A city"],
    answer: "An altar",
    reference: "Genesis 8:20",
  },
  {
    question: "What did God promise never again to destroy the earth with?",
    options: ["A flood", "Fire", "Earthquakes", "A famine"],
    answer: "A flood",
    reference: "Genesis 9:11",
  },
  {
    question: "What sign did God place in the cloud as a reminder of His covenant?",
    options: ["A rainbow", "A star", "A bright light", "A cloud of fire"],
    answer: "A rainbow",
    reference: "Genesis 9:12-17",
  },
  {
    question: "What did Ham do after seeing his father's nakedness?",
    options: [
      "He told his two brothers",
      "He covered Noah himself",
      "He left the family",
      "He built an altar"
    ],
    answer: "He told his two brothers",
    reference: "Genesis 9:22",
  },
  {
    question: "What did the builders of Babel want to make for themselves?",
    options: ["A name", "A kingdom", "A temple", "A palace"],
    answer: "A name",
    reference: "Genesis 11:4",
  },
  {
    question: "What action by God disrupted the plan at Babel?",
    options: [
      "He confused their language",
      "He destroyed their houses",
      "He caused a flood",
      "He sent animals among them"
    ],
    answer: "He confused their language",
    reference: "Genesis 11:7-9",
  },
  {
    question: "What was Lot's relationship to Abram?",
    options: ["Nephew", "Brother", "Cousin", "Son"],
    answer: "Nephew",
    reference: "Genesis 11:27",
  },
  {
    question: "Why did Abram and Lot separate from one another?",
    options: [
      "Their possessions and herds had become too great for them to remain together",
      "Lot wanted to become a king",
      "Abram was angry with Lot",
      "God commanded Lot to leave Canaan"
    ],
    answer:
      "Their possessions and herds had become too great for them to remain together",
    reference: "Genesis 13:5-9",
  },
  {
    question: "Which area did Lot choose after separating from Abram?",
    options: ["The Jordan Valley", "The hill country", "The Negev", "Egypt"],
    answer: "The Jordan Valley",
    reference: "Genesis 13:10-11",
  },
  {
    question: "How did Abram rescue Lot after he was taken captive?",
    options: [
      "He pursued the captors with trained men from his household",
      "He asked Pharaoh for soldiers",
      "He gathered the kings of Canaan",
      "He waited for Lot to escape"
    ],
    answer: "He pursued the captors with trained men from his household",
    reference: "Genesis 14:14-16",
  },
  {
    question: "What did Melchizedek bring out when he met Abram?",
    options: ["Bread and wine", "Water and bread", "Oil and wine", "Meat and water"],
    answer: "Bread and wine",
    reference: "Genesis 14:18",
  },
  {
    question: "What did Abram refuse to take from the king of Sodom?",
    options: [
      "The goods and possessions of Sodom",
      "Food for his men",
      "Land near Sodom",
      "Gold from Melchizedek"
    ],
    answer: "The goods and possessions of Sodom",
    reference: "Genesis 14:21-23",
  },
  {
    question: "What did Abram's belief in the Lord result in being counted as?",
    options: ["Righteousness", "Wisdom", "Strength", "Blessing"],
    answer: "Righteousness",
    reference: "Genesis 15:6",
  },
  {
    question: "In the covenant ceremony, what did Abram divide?",
    options: [
      "A heifer, a goat, and a ram",
      "Two lambs and a goat",
      "A bull and two doves",
      "A ram and two birds"
    ],
    answer: "A heifer, a goat, and a ram",
    reference: "Genesis 15:9-10",
  },
  {
    question: "Who was Hagar's son?",
    options: ["Ishmael", "Isaac", "Esau", "Ephraim"],
    answer: "Ishmael",
    reference: "Genesis 16:15",
  },
  {
    question: "What new name did God give Abram?",
    options: ["Abraham", "Israel", "Isaac", "Abimelech"],
    answer: "Abraham",
    reference: "Genesis 17:5",
  },
  {
    question: "What new name did God give Sarai?",
    options: ["Sarah", "Rebekah", "Rachel", "Leah"],
    answer: "Sarah",
    reference: "Genesis 17:15",
  },
  {
    question: "What physical sign did God establish as the sign of His covenant with Abraham's household?",
    options: ["Circumcision", "Anointing", "A sacrifice", "A special garment"],
    answer: "Circumcision",
    reference: "Genesis 17:10-11",
  },
  {
    question: "Why did Abraham laugh when God told him Sarah would bear a son?",
    options: [
      "He considered their advanced age and wondered how it could happen",
      "He thought God was joking",
      "He had already seen the child",
      "He did not believe Sarah was his wife"
    ],
    answer:
      "He considered their advanced age and wondered how it could happen",
    reference: "Genesis 17:17",
  },
  {
    question: "What did Sarah do when she heard that she would have a son?",
    options: ["She laughed", "She cried", "She left the tent", "She worshiped"],
    answer: "She laughed",
    reference: "Genesis 18:10-12",
  },
  {
    question: "Why did Abraham plead with God concerning Sodom?",
    options: [
      "He was concerned that righteous people might be destroyed with the wicked",
      "He owned land in Sodom",
      "Lot asked him to become king",
      "He wanted Sodom's wealth"
    ],
    answer:
      "He was concerned that righteous people might be destroyed with the wicked",
    reference: "Genesis 18:23-33",
  },
  {
    question: "What did Lot offer to the men of Sodom in an attempt to protect his visitors?",
    options: [
      "His two daughters",
      "His servants",
      "His animals",
      "His house"
    ],
    answer: "His two daughters",
    reference: "Genesis 19:6-8",
  },
  {
    question: "What happened to Lot's wife when she looked back?",
    options: ["She became a pillar of salt", "She became blind", "She disappeared", "She died in the fire"],
    answer: "She became a pillar of salt",
    reference: "Genesis 19:26",
  },
  {
    question: "What name was given to Abraham and Sarah's promised son?",
    options: ["Isaac", "Ishmael", "Jacob", "Esau"],
    answer: "Isaac",
    reference: "Genesis 21:3",
  },
  {
    question: "Why did Sarah insist that Hagar and Ishmael be sent away?",
    options: [
      "She did not want Ishmael to share the inheritance with Isaac",
      "Ishmael had left the household",
      "Hagar wanted to marry Abraham",
      "Ishmael refused to work"
    ],
    answer:
      "She did not want Ishmael to share the inheritance with Isaac",
    reference: "Genesis 21:9-12",
  },
  {
    question: "What did Abraham find caught in a thicket when he was about to offer Isaac?",
    options: ["A ram", "A goat", "A lamb", "A bull"],
    answer: "A ram",
    reference: "Genesis 22:13",
  },
  {
    question: "What name did Abraham give the place where God provided the ram?",
    options: [
      "The Lord Will Provide",
      "The Lord Is My Shepherd",
      "The Lord Is There",
      "The Lord Our Banner"
    ],
    answer: "The Lord Will Provide",
    reference: "Genesis 22:14",
  },
  {
    question: "What was Abraham's servant looking for when he arrived near Nahor?",
    options: [
      "A wife for Isaac",
      "A servant for Abraham",
      "A shepherd for Isaac's flock",
      "A bride for Ishmael"
    ],
    answer: "A wife for Isaac",
    reference: "Genesis 24:2-4",
  },
  {
    question: "What did Rebekah offer to do after giving Abraham's servant water?",
    options: [
      "Draw water for his camels",
      "Prepare food for his men",
      "Lead him to Abraham",
      "Give him clothing"
    ],
    answer: "Draw water for his camels",
    reference: "Genesis 24:18-20",
  },
  {
    question: "What did Esau receive in exchange for his birthright?",
    options: [
      "Bread and lentil stew",
      "Bread and wine",
      "Meat and fruit",
      "Milk and honey"
    ],
    answer: "Bread and lentil stew",
    reference: "Genesis 25:29-34",
  },
  {
    question: "When Isaac questioned Jacob's identity, what caused him to be uncertain?",
    options: [
      "Jacob's voice sounded like Jacob, but his hands felt like Esau's",
      "Jacob wore different clothes",
      "Jacob had Esau's sandals",
      "Jacob refused to speak"
    ],
    answer:
      "Jacob's voice sounded like Jacob, but his hands felt like Esau's",
    reference: "Genesis 27:21-23",
  },
  {
    question: "What did Jacob see in his dream while traveling toward Haran?",
    options: [
      "A stairway with angels ascending and descending",
      "A burning bush",
      "A great river",
      "A city surrounded by fire"
    ],
    answer: "A stairway with angels ascending and descending",
    reference: "Genesis 28:10-12",
  },
  {
    question: "What name did Jacob give the place where he had his dream?",
    options: ["Bethel", "Peniel", "Hebron", "Beersheba"],
    answer: "Bethel",
    reference: "Genesis 28:18-19",
  },
  {
    question: "How many years did Jacob initially agree to serve Laban for Rachel?",
    options: ["Seven years", "Five years", "Ten years", "Fourteen years"],
    answer: "Seven years",
    reference: "Genesis 29:18",
  },
  {
    question: "Which sister did Laban give Jacob instead of Rachel first?",
    options: ["Leah", "Dinah", "Bilhah", "Zilpah"],
    answer: "Leah",
    reference: "Genesis 29:23-25",
  },
  {
    question: "Who was Jacob's firstborn son?",
    options: ["Reuben", "Simeon", "Levi", "Judah"],
    answer: "Reuben",
    reference: "Genesis 29:32",
  },
  {
    question: "What was the name of Rachel's first son?",
    options: ["Joseph", "Benjamin", "Dan", "Naphtali"],
    answer: "Joseph",
    reference: "Genesis 30:22-24",
  },
  {
    question: "What unusual method did Jacob use while tending Laban's flocks?",
    options: [
      "He placed peeled branches before the animals at watering places",
      "He separated all the sheep from the goats",
      "He changed the animals' food every day",
      "He marked every animal with his name"
    ],
    answer:
      "He placed peeled branches before the animals at watering places",
    reference: "Genesis 30:37-43",
  },
  {
    question: "Why did Jacob secretly leave Laban's household?",
    options: [
      "He feared Laban and had been instructed by God to return to his homeland",
      "He wanted to become king",
      "Rachel commanded him to leave",
      "His flocks had all died"
    ],
    answer:
      "He feared Laban and had been instructed by God to return to his homeland",
    reference: "Genesis 31:1-3, 20-21",
  },
  {
    question: "What did Rachel take from her father's household?",
    options: ["Household gods", "Gold", "Animals", "Scrolls"],
    answer: "Household gods",
    reference: "Genesis 31:19",
  },
  {
    question: "What name did Jacob give the place where he said he had seen God face to face?",
    options: ["Peniel", "Bethel", "Mahanaim", "Succoth"],
    answer: "Peniel",
    reference: "Genesis 32:30",
  },
  {
    question: "What part of Jacob's body was touched during his struggle with the mysterious man?",
    options: ["His hip", "His shoulder", "His hand", "His knee"],
    answer: "His hip",
    reference: "Genesis 32:25",
  },
  {
    question: "What new name was Jacob given after wrestling with God?",
    options: ["Israel", "Edom", "Judah", "Bethel"],
    answer: "Israel",
    reference: "Genesis 32:28",
  },
  {
    question: "What made Joseph especially hated by his brothers before he was sold?",
    options: [
      "His dreams and his father's special love for him",
      "His refusal to work",
      "His desire to leave Canaan",
      "His wealth"
    ],
    answer: "His dreams and his father's special love for him",
    reference: "Genesis 37:3-11",
  },
  {
    question: "What did Joseph's brothers dip his special robe in?",
    options: ["Goat's blood", "Sheep's blood", "Wine", "Mud"],
    answer: "Goat's blood",
    reference: "Genesis 37:31-33",
  },
  {
    question: "Who suggested selling Joseph rather than killing him?",
    options: ["Judah", "Reuben", "Simeon", "Levi"],
    answer: "Judah",
    reference: "Genesis 37:26-28",
  },
  {
    question: "What happened to Joseph after Potiphar's wife accused him?",
    options: [
      "He was put in prison",
      "He was sent back to Canaan",
      "He became a servant in another house",
      "He was executed"
    ],
    answer: "He was put in prison",
    reference: "Genesis 39:19-20",
  },
  {
    question: "What did Joseph say was the source of the ability to interpret dreams?",
    options: ["God", "Wisdom from Egypt", "His own intelligence", "The prison keeper"],
    answer: "God",
    reference: "Genesis 40:8",
  },
  {
    question: "What did Pharaoh's dreams reveal about Egypt's future?",
    options: [
      "Seven years of abundance followed by seven years of famine",
      "Seven years of war followed by seven years of peace",
      "Seven years of famine followed by seven years of abundance",
      "Three years of famine followed by seven years of abundance"
    ],
    answer: "Seven years of abundance followed by seven years of famine",
    reference: "Genesis 41:25-30",
  },
  {
    question: "What strategy did Joseph recommend to prepare Egypt for the coming famine?",
    options: [
      "Store a portion of the harvest during the years of abundance",
      "Send the people to Canaan",
      "Stop planting crops",
      "Sell all the livestock"
    ],
    answer: "Store a portion of the harvest during the years of abundance",
    reference: "Genesis 41:33-36",
  },
  {
    question: "What Egyptian name did Pharaoh give Joseph?",
    options: ["Zaphenath-paneah", "Abimelech", "Potiphera", "On"],
    answer: "Zaphenath-paneah",
    reference: "Genesis 41:45",
  },
  {
    question: "What was the name of Joseph's first son?",
    options: ["Manasseh", "Ephraim", "Benjamin", "Gershom"],
    answer: "Manasseh",
    reference: "Genesis 41:51",
  },
  {
    question: "Why did Joseph's brothers fail to recognize him when they came to Egypt?",
    options: [
      "They did not know he had become the Egyptian ruler before them",
      "Joseph had completely changed his face",
      "Joseph refused to speak",
      "They had never seen him before"
    ],
    answer:
      "They did not know he had become the Egyptian ruler before them",
    reference: "Genesis 42:7-8",
  },
  {
    question: "How did Joseph secretly communicate with his brothers while they were speaking to him?",
    options: [
      "Through an interpreter",
      "Through Benjamin",
      "Through Pharaoh",
      "Through a servant"
    ],
    answer: "Through an interpreter",
    reference: "Genesis 42:23",
  },
  {
    question: "Which brother did Joseph require them to bring back to Egypt?",
    options: ["Benjamin", "Reuben", "Judah", "Simeon"],
    answer: "Benjamin",
    reference: "Genesis 42:14-20",
  },
  {
    question: "What did Joseph secretly return to his brothers?",
    options: ["Their money", "Their animals", "Their clothing", "Their weapons"],
    answer: "Their money",
    reference: "Genesis 42:25",
  },
  {
    question: "What object did Joseph order to be placed in Benjamin's sack?",
    options: ["A silver cup", "A gold ring", "A knife", "A scroll"],
    answer: "A silver cup",
    reference: "Genesis 44:1-2",
  },
  {
    question: "What did Judah offer to do when Benjamin was accused of taking Joseph's cup?",
    options: [
      "Remain as a servant in Benjamin's place",
      "Fight Joseph's servants",
      "Return to Canaan alone",
      "Pay Joseph with livestock"
    ],
    answer: "Remain as a servant in Benjamin's place",
    reference: "Genesis 44:32-34",
  },
  {
    question: "How did Joseph explain the purpose of God sending him ahead to Egypt?",
    options: [
      "To preserve life during the famine",
      "To become king over Canaan",
      "To punish his brothers",
      "To build an Egyptian temple"
    ],
    answer: "To preserve life during the famine",
    reference: "Genesis 45:5-8",
  },
  {
    question: "What happened to Jacob when he heard that Joseph was alive?",
    options: [
      "His spirit revived",
      "He immediately died",
      "He became angry",
      "He refused to believe it"
    ],
    answer: "His spirit revived",
    reference: "Genesis 45:26-28",
  },
  {
    question: "What did God tell Jacob when he was preparing to go down to Egypt?",
    options: [
      "Not to be afraid",
      "To remain in Canaan",
      "To leave his family behind",
      "To return to Haran"
    ],
    answer: "Not to be afraid",
    reference: "Genesis 46:2-4",
  },
  {
    question: "What did Jacob make Joseph swear concerning his burial?",
    options: [
      "That he would bury him in Canaan",
      "That he would bury him in Egypt",
      "That he would cremate him",
      "That he would bury him beside Joseph"
    ],
    answer: "That he would bury him in Canaan",
    reference: "Genesis 47:29-31",
  },
  {
    question: "Which of Joseph's two sons received Jacob's right-hand blessing?",
    options: ["Ephraim", "Manasseh", "Both equally", "Neither"],
    answer: "Ephraim",
    reference: "Genesis 48:13-20",
  },
  {
    question: "Which son of Jacob was associated with the future scepter and ruler's staff?",
    options: ["Judah", "Reuben", "Joseph", "Levi"],
    answer: "Judah",
    reference: "Genesis 49:8-10",
  },
  {
    question: "What did Joseph tell his brothers about their evil actions against him?",
    options: [
      "God used what they meant for evil for good",
      "Their actions had ruined God's plan",
      "He would repay them for everything",
      "God had forgotten what they did"
    ],
    answer: "God used what they meant for evil for good",
    reference: "Genesis 50:15-20",
  },
  {
    question: "What did Joseph request concerning his bones before his death?",
    options: [
      "That they be carried out of Egypt when God brought Israel out",
      "That they be buried beside Pharaoh",
      "That they be buried in Egypt",
      "That they be placed in the ark"
    ],
    answer:
      "That they be carried out of Egypt when God brought Israel out",
    reference: "Genesis 50:24-26",
  },

  // Additional whole-book questions

  {
    question: "Which two trees were specifically identified as being in the midst of the garden?",
    options: [
      "The tree of life and the tree of the knowledge of good and evil",
      "The olive tree and the fig tree",
      "The cedar tree and the palm tree",
      "The tree of wisdom and the tree of strength"
    ],
    answer:
      "The tree of life and the tree of the knowledge of good and evil",
    reference: "Genesis 2:9",
  },
  {
    question: "What did God say would happen to Adam on the day he ate from the forbidden tree?",
    options: [
      "He would surely die",
      "He would lose his name",
      "He would become blind",
      "He would be unable to have children"
    ],
    answer: "He would surely die",
    reference: "Genesis 2:16-17",
  },
  {
    question: "What was the first thing Adam did after God brought the animals to him?",
    options: [
      "He gave them names",
      "He separated them into groups",
      "He offered sacrifices",
      "He built shelters for them"
    ],
    answer: "He gave them names",
    reference: "Genesis 2:19-20",
  },
  {
    question: "What did Cain say would happen if someone found him after he was sent away?",
    options: [
      "They might kill him",
      "They would make him king",
      "They would forgive him",
      "They would take his possessions"
    ],
    answer: "They might kill him",
    reference: "Genesis 4:13-14",
  },
  {
    question: "How many sons of Noah were specifically named?",
    options: ["Three", "Two", "Four", "Five"],
    answer: "Three",
    reference: "Genesis 6:10",
  },
  {
    question: "What did the waters of the flood do to the mountains?",
    options: [
      "They covered even the high mountains",
      "They surrounded only the lowlands",
      "They stopped below the mountains",
      "They destroyed the mountains completely"
    ],
    answer: "They covered even the high mountains",
    reference: "Genesis 7:19-20",
  },
  {
    question: "What did Noah do after the flood before planting a vineyard?",
    options: [
      "He became a farmer",
      "He built a city",
      "He returned to Mesopotamia",
      "He separated from his sons"
    ],
    answer: "He became a farmer",
    reference: "Genesis 9:20",
  },
  {
    question: "Which son of Noah was the father of Canaan?",
    options: ["Ham", "Shem", "Japheth", "None of them"],
    answer: "Ham",
    reference: "Genesis 9:18-22",
  },
  {
    question: "What did Abram do when he arrived at Shechem in Canaan?",
    options: [
      "He built an altar to the Lord",
      "He built a city",
      "He dug a well",
      "He planted a vineyard"
    ],
    answer: "He built an altar to the Lord",
    reference: "Genesis 12:6-7",
  },
  {
    question: "Why did Abram and Sarai go down to Egypt?",
    options: [
      "There was a severe famine in the land",
      "God commanded them to settle there permanently",
      "They wanted to trade their livestock",
      "Lot had moved there"
    ],
    answer: "There was a severe famine in the land",
    reference: "Genesis 12:10",
  },
  {
    question: "What did Pharaoh do after discovering that Sarai was Abram's wife?",
    options: [
      "He sent Abram and Sarai away",
      "He imprisoned Abram",
      "He gave Sarai to another ruler",
      "He kept them in Egypt"
    ],
    answer: "He sent Abram and Sarai away",
    reference: "Genesis 12:17-20",
  },
  {
    question: "What did Abram give Lot the freedom to choose when they separated?",
    options: [
      "Which land he wanted",
      "Which servants he wanted",
      "Which city he wanted to rule",
      "Which animals he wanted"
    ],
    answer: "Which land he wanted",
    reference: "Genesis 13:8-12",
  },
  {
    question: "What did Abraham name the well at Beersheba after making a covenant with Abimelech?",
    options: [
      "Beersheba",
      "Beer-lahai-roi",
      "Rehoboth",
      "Esek"
    ],
    answer: "Beersheba",
    reference: "Genesis 21:22-31",
  },
  {
    question: "What did Isaac do after Rebekah became his wife?",
    options: [
      "He loved her and was comforted after his mother's death",
      "He immediately left Canaan",
      "He built an altar in Egypt",
      "He separated from Abraham"
    ],
    answer:
      "He loved her and was comforted after his mother's death",
    reference: "Genesis 24:67",
  },
  {
    question: "What did Esau's wives cause for Isaac and Rebekah?",
    options: [
      "They brought grief to them",
      "They increased their wealth",
      "They caused them to leave Canaan",
      "They became servants in their household"
    ],
    answer: "They brought grief to them",
    reference: "Genesis 26:34-35",
  },
  {
    question: "What did Jacob place under his head when he slept at Bethel?",
    options: ["A stone", "A piece of wood", "A bundle of clothes", "A branch"],
    answer: "A stone",
    reference: "Genesis 28:10-11",
  },
  {
    question: "What did Jacob do after waking from his dream at Bethel?",
    options: [
      "He set up the stone as a pillar and poured oil on it",
      "He destroyed the stone",
      "He buried the stone",
      "He carried the stone back to Canaan"
    ],
    answer:
      "He set up the stone as a pillar and poured oil on it",
    reference: "Genesis 28:18",
  },
  {
    question: "Why did Jacob love Rachel more than Leah?",
    options: [
      "Rachel was the woman he had originally agreed to serve for",
      "Rachel was the older sister",
      "Rachel owned more livestock",
      "Leah had refused to marry him"
    ],
    answer:
      "Rachel was the woman he had originally agreed to serve for",
    reference: "Genesis 29:18-20, 30",
  },
  {
    question: "What did Jacob call his first six sons born to Leah collectively in his later journey?",
    options: [
      "His sons",
      "The tribes of Israel",
      "The sons of Rachel",
      "The house of Joseph"
    ],
    answer: "His sons",
    reference: "Genesis 30:17-21",
  },
  {
    question: "What did Jacob discover after secretly leaving Laban?",
    options: [
      "Laban pursued him with his relatives",
      "Esau had entered his camp",
      "Joseph had disappeared",
      "The famine had begun"
    ],
    answer: "Laban pursued him with his relatives",
    reference: "Genesis 31:22-23",
  },
  {
    question: "What did Jacob send ahead of himself when preparing to meet Esau?",
    options: [
      "Large groups of livestock as gifts",
      "Armed soldiers only",
      "His youngest children",
      "His household gods"
    ],
    answer: "Large groups of livestock as gifts",
    reference: "Genesis 32:13-21",
  },
  {
    question: "What was Jacob's emotional response when he saw Esau approaching?",
    options: [
      "He was greatly afraid and distressed",
      "He became angry",
      "He laughed",
      "He immediately returned to Laban"
    ],
    answer: "He was greatly afraid and distressed",
    reference: "Genesis 32:6-8",
  },
  {
    question: "What did Joseph's brothers first do with him before selling him?",
    options: [
      "They threw him into a pit",
      "They took him to Egypt",
      "They locked him in a house",
      "They tied him to a tree"
    ],
    answer: "They threw him into a pit",
    reference: "Genesis 37:23-24",
  },
  {
    question: "Who pulled Joseph out of the pit with the intention of rescuing him?",
    options: ["Reuben", "Judah", "Simeon", "Benjamin"],
    answer: "Reuben",
    reference: "Genesis 37:21-22",
  },
  {
    question: "What did Joseph's brothers see approaching after placing him in the pit?",
    options: [
      "A caravan of Ishmaelites",
      "Pharaoh's army",
      "A group from Hebron",
      "A caravan from Egypt carrying grain"
    ],
    answer: "A caravan of Ishmaelites",
    reference: "Genesis 37:25",
  },
  {
    question: "What did Joseph do when Potiphar's wife attempted to persuade him?",
    options: [
      "He refused and fled from her",
      "He agreed to her request",
      "He reported her immediately to Pharaoh",
      "He left Egypt"
    ],
    answer: "He refused and fled from her",
    reference: "Genesis 39:7-12",
  },
  {
    question: "What position did Joseph eventually receive in Pharaoh's administration?",
    options: [
      "Second in command over Egypt",
      "Chief priest",
      "Commander of Pharaoh's army",
      "Governor of Canaan"
    ],
    answer: "Second in command over Egypt",
    reference: "Genesis 41:40-44",
  },
  {
    question: "What happened to Joseph's brothers when they first came to Egypt for grain?",
    options: [
      "They bowed down before him",
      "They immediately recognized him",
      "They were appointed as governors",
      "They refused to buy grain"
    ],
    answer: "They bowed down before him",
    reference: "Genesis 42:6",
  },
  {
    question: "What did Joseph eventually reveal to his brothers about himself?",
    options: [
      "That he was their brother Joseph",
      "That he was Pharaoh's son",
      "That he had never been sold",
      "That he had forgotten Canaan"
    ],
    answer: "That he was their brother Joseph",
    reference: "Genesis 45:1-4",
  },
  {
    question: "What did Joseph tell his brothers not to do while returning to bring Jacob to Egypt?",
    options: [
      "Not to quarrel on the way",
      "Not to speak to Pharaoh",
      "Not to take Benjamin",
      "Not to bring their wives"
    ],
    answer: "Not to quarrel on the way",
    reference: "Genesis 45:24",
  },
  {
    question: "What did Joseph arrange for his family when they came to Egypt?",
    options: [
      "He settled them in the land of Goshen",
      "He settled them in Pharaoh's palace",
      "He sent them to Canaan",
      "He placed them in prison"
    ],
    answer: "He settled them in the land of Goshen",
    reference: "Genesis 46:28-34",
  },
  {
    question: "What did Jacob tell Pharaoh about the length of his life?",
    options: [
      "His days had been few and difficult",
      "His days had been peaceful and long",
      "He had lived longer than Abraham",
      "He had never experienced hardship"
    ],
    answer: "His days had been few and difficult",
    reference: "Genesis 47:8-9",
  },
  {
    question: "Which of Joseph's sons did Jacob deliberately place before the other when blessing them?",
    options: ["Ephraim", "Manasseh", "Both at the same time", "Neither"],
    answer: "Ephraim",
    reference: "Genesis 48:17-20",
  },
  {
    question: "What did Jacob say about Joseph that distinguished him from his brothers in his blessing?",
    options: [
      "He described Joseph as a fruitful bough by a spring",
      "He called Joseph a lion",
      "He called Joseph a serpent",
      "He called Joseph a judge"
    ],
    answer: "He described Joseph as a fruitful bough by a spring",
    reference: "Genesis 49:22",
  },
  {
    question: "Who took responsibility for making sure Jacob was buried according to his wishes?",
    options: ["Joseph", "Judah", "Reuben", "Benjamin"],
    answer: "Joseph",
    reference: "Genesis 50:1-14",
  },
  {
    question: "Why were Joseph's brothers afraid after Jacob died?",
    options: [
      "They feared Joseph would repay them for what they had done",
      "They feared Pharaoh would punish them",
      "They had lost all their possessions",
      "They were afraid of leaving Egypt"
    ],
    answer:
      "They feared Joseph would repay them for what they had done",
    reference: "Genesis 50:15",
  },
];

export default genesisQuestions;