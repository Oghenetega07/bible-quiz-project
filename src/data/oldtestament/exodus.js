const exodusQuestions = [
  {
    question: "What happened to the Israelites in Egypt after Joseph and his generation had died?",
    options: [
      "They multiplied greatly",
      "They returned to Canaan",
      "They became rulers",
      "They stopped having children"
    ],
    answer: "They multiplied greatly",
    reference: "Exodus 1:6-7",
  },
  {
    question: "Why did the new king of Egypt begin to fear the Israelites?",
    options: [
      "They had become very numerous and might join Egypt's enemies",
      "They refused to pay taxes",
      "They were building their own army",
      "They wanted Pharaoh's throne"
    ],
    answer: "They had become very numerous and might join Egypt's enemies",
    reference: "Exodus 1:8-10",
  },
  {
    question: "What did Pharaoh first command the Hebrew midwives to do with newborn Hebrew boys?",
    options: [
      "Kill them",
      "Send them to Canaan",
      "Hide them",
      "Give them to Egyptian families"
    ],
    answer: "Kill them",
    reference: "Exodus 1:15-16",
  },
  {
    question: "Why did the Hebrew midwives refuse to obey Pharaoh's command?",
    options: [
      "They feared God",
      "They feared Moses",
      "They wanted to protect Egypt",
      "They were commanded by Pharaoh's daughter"
    ],
    answer: "They feared God",
    reference: "Exodus 1:17",
  },
  {
    question: "What did Moses' mother use to protect him when she could no longer hide him?",
    options: [
      "A basket coated with bitumen and pitch",
      "A wooden box covered with cloth",
      "A clay pot",
      "A tent made from animal skins"
    ],
    answer: "A basket coated with bitumen and pitch",
    reference: "Exodus 2:3",
  },
  {
    question: "Where did Moses' mother place the basket containing him?",
    options: [
      "Among the reeds by the bank of the Nile",
      "Inside Pharaoh's palace",
      "Under a bridge",
      "Inside a cave"
    ],
    answer: "Among the reeds by the bank of the Nile",
    reference: "Exodus 2:3",
  },
  {
    question: "Who watched from a distance to see what would happen to Moses?",
    options: [
      "His sister",
      "His mother",
      "Aaron",
      "Pharaoh's daughter"
    ],
    answer: "His sister",
    reference: "Exodus 2:4",
  },
  {
    question: "What did Pharaoh's daughter recognize when she opened the basket?",
    options: [
      "A Hebrew baby",
      "An Egyptian child",
      "A servant's child",
      "A royal child"
    ],
    answer: "A Hebrew baby",
    reference: "Exodus 2:5-6",
  },
  {
    question: "Who eventually nursed Moses after Pharaoh's daughter found him?",
    options: [
      "His own mother",
      "Pharaoh's daughter",
      "An Egyptian nurse",
      "Miriam"
    ],
    answer: "His own mother",
    reference: "Exodus 2:7-9",
  },
  {
    question: "Why was Moses given his name?",
    options: [
      "Because he was drawn out of the water",
      "Because he was born in Egypt",
      "Because his mother prayed for him",
      "Because Pharaoh named him after the Nile"
    ],
    answer: "Because he was drawn out of the water",
    reference: "Exodus 2:10",
  },
  {
    question: "What caused Moses to flee from Egypt?",
    options: [
      "He killed an Egyptian who was beating a Hebrew",
      "Pharaoh ordered his arrest for refusing to work",
      "He stole from Pharaoh",
      "He led the Israelites in rebellion"
    ],
    answer: "He killed an Egyptian who was beating a Hebrew",
    reference: "Exodus 2:11-15",
  },
  {
    question: "Where did Moses flee after leaving Egypt?",
    options: ["Midian", "Canaan", "Moab", "Edom"],
    answer: "Midian",
    reference: "Exodus 2:15",
  },
  {
    question: "What was Moses doing when he encountered the burning bush?",
    options: [
      "Keeping the flock of Jethro",
      "Traveling to Egypt",
      "Searching for his brother",
      "Building a house"
    ],
    answer: "Keeping the flock of Jethro",
    reference: "Exodus 3:1",
  },
  {
    question: "Where did Moses encounter the burning bush?",
    options: [
      "Horeb, the mountain of God",
      "Mount Sinai after leaving Egypt",
      "The Jordan Valley",
      "The plains of Moab"
    ],
    answer: "Horeb, the mountain of God",
    reference: "Exodus 3:1-2",
  },
  {
    question: "What made the burning bush unusual?",
    options: [
      "It was burning but was not consumed",
      "It produced water instead of smoke",
      "It moved across the mountain",
      "It became a tree"
    ],
    answer: "It was burning but was not consumed",
    reference: "Exodus 3:2-3",
  },
  {
    question: "What did God tell Moses to remove because the place where he stood was holy?",
    options: ["His sandals", "His robe", "His staff", "His belt"],
    answer: "His sandals",
    reference: "Exodus 3:5",
  },
  {
    question: "What name did God reveal to Moses when Moses asked what he should tell Israel about who sent him?",
    options: [
      "I AM WHO I AM",
      "The God of Moses",
      "The God of Egypt",
      "The Lord of Pharaoh"
    ],
    answer: "I AM WHO I AM",
    reference: "Exodus 3:13-14",
  },
  {
    question: "What was Moses' first major concern when God called him to deliver Israel?",
    options: [
      "He questioned whether the Israelites would believe him",
      "He wanted to become Pharaoh",
      "He did not know where Egypt was",
      "He refused to return to Midian"
    ],
    answer: "He questioned whether the Israelites would believe him",
    reference: "Exodus 4:1",
  },
  {
    question: "What happened when Moses threw his staff onto the ground?",
    options: [
      "It became a serpent",
      "It caught fire",
      "It broke apart",
      "It became water"
    ],
    answer: "It became a serpent",
    reference: "Exodus 4:2-4",
  },
  {
    question: "What happened to Moses' hand when he placed it inside his cloak as God commanded?",
    options: [
      "It became leprous",
      "It became burned",
      "It became invisible",
      "It became paralyzed"
    ],
    answer: "It became leprous",
    reference: "Exodus 4:6-7",
  },
  {
    question: "Who did God appoint to speak for Moses because Moses said he was slow of speech?",
    options: ["Aaron", "Miriam", "Joshua", "Hur"],
    answer: "Aaron",
    reference: "Exodus 4:10-16",
  },
  {
    question: "What did Moses carry in his hand when he returned toward Egypt?",
    options: ["The staff of God", "A sword", "A scroll", "A rod of Aaron"],
    answer: "The staff of God",
    reference: "Exodus 4:20",
  },
  {
    question: "What did Aaron do when he met Moses in the wilderness?",
    options: [
      "He kissed him",
      "He challenged him",
      "He gave him a new staff",
      "He returned to Egypt alone"
    ],
    answer: "He kissed him",
    reference: "Exodus 4:27",
  },
  {
    question: "What did Moses and Aaron tell Pharaoh that the Lord required Israel to do?",
    options: [
      "Go into the wilderness to hold a feast to Him",
      "Build a palace",
      "Fight against Egypt",
      "Leave Egypt permanently without warning"
    ],
    answer: "Go into the wilderness to hold a feast to Him",
    reference: "Exodus 5:1",
  },
  {
    question: "How did Pharaoh respond to Moses and Aaron's request?",
    options: [
      "He refused and increased the Israelites' burden",
      "He immediately released Israel",
      "He asked Moses to become his adviser",
      "He allowed only the women to leave"
    ],
    answer: "He refused and increased the Israelites' burden",
    reference: "Exodus 5:2-9",
  },
  {
    question: "What material did Pharaoh stop providing for the Israelites' brickmaking?",
    options: ["Straw", "Clay", "Water", "Wood"],
    answer: "Straw",
    reference: "Exodus 5:7",
  },
  {
    question: "What did Pharaoh require the Israelites to maintain even after removing their straw supply?",
    options: [
      "The same number of bricks",
      "The same number of workers",
      "The same amount of straw",
      "The same number of buildings"
    ],
    answer: "The same number of bricks",
    reference: "Exodus 5:8",
  },
  {
    question: "What did God promise Moses concerning Pharaoh?",
    options: [
      "Pharaoh would eventually let Israel go",
      "Pharaoh would immediately become righteous",
      "Pharaoh would leave Egypt",
      "Pharaoh would appoint Moses as governor"
    ],
    answer: "Pharaoh would eventually let Israel go",
    reference: "Exodus 6:1",
  },
  {
    question: "Which covenant name did God use when speaking of His relationship with Abraham, Isaac, and Jacob?",
    options: ["God Almighty", "I AM", "Lord of Hosts", "King of Israel"],
    answer: "God Almighty",
    reference: "Exodus 6:2-3",
  },
  {
    question: "What did God promise to do for Israel when He brought them out of Egypt?",
    options: [
      "Take them as His people",
      "Make them rulers over Egypt",
      "Give them Pharaoh's palace",
      "Make every Israelite wealthy"
    ],
    answer: "Take them as His people",
    reference: "Exodus 6:6-8",
  },
  {
    question: "What happened when Aaron's staff was thrown down before Pharaoh?",
    options: [
      "It became a serpent",
      "It became a tree",
      "It turned to gold",
      "It disappeared"
    ],
    answer: "It became a serpent",
    reference: "Exodus 7:8-10",
  },
  {
    question: "What happened when Aaron's serpent swallowed the serpents produced by the Egyptian magicians?",
    options: [
      "Aaron's staff swallowed theirs",
      "All the serpents disappeared",
      "Pharaoh's magicians surrendered",
      "The staff became water"
    ],
    answer: "Aaron's staff swallowed theirs",
    reference: "Exodus 7:10-12",
  },
  {
    question: "What was the first plague sent upon Egypt?",
    options: [
      "Water turned to blood",
      "Frogs",
      "Gnats",
      "Darkness"
    ],
    answer: "Water turned to blood",
    reference: "Exodus 7:14-21",
  },
  {
    question: "What happened to the fish in the Nile during the first plague?",
    options: [
      "They died",
      "They multiplied",
      "They escaped into the desert",
      "They became frogs"
    ],
    answer: "They died",
    reference: "Exodus 7:18",
  },
  {
    question: "What was the second plague?",
    options: ["Frogs", "Locusts", "Boils", "Flies"],
    answer: "Frogs",
    reference: "Exodus 8:1-6",
  },
  {
    question: "Where did the frogs enter during the second plague?",
    options: [
      "Houses, bedrooms, and ovens",
      "Only the Nile",
      "Only Pharaoh's palace",
      "Only the fields"
    ],
    answer: "Houses, bedrooms, and ovens",
    reference: "Exodus 8:3",
  },
  {
    question: "What did Pharaoh's magicians say when they could not reproduce the plague of gnats?",
    options: [
      "This is the finger of God",
      "Moses has defeated us",
      "Egypt must repent",
      "The Nile has failed"
    ],
    answer: "This is the finger of God",
    reference: "Exodus 8:16-19",
  },
  {
    question: "Which land was specifically protected from the plague of flies?",
    options: ["Goshen", "Canaan", "Midian", "Moab"],
    answer: "Goshen",
    reference: "Exodus 8:22",
  },
  {
    question: "What happened to Egypt's livestock during the plague sent against the animals?",
    options: [
      "A great number died",
      "They became diseased but survived",
      "They were taken to Goshen",
      "They were released into the wilderness"
    ],
    answer: "A great number died",
    reference: "Exodus 9:3-6",
  },
  {
    question: "What did Moses and Aaron throw toward heaven to bring about the plague of boils?",
    options: ["Handfuls of soot", "Dust", "Ashes from the altar", "Water"],
    answer: "Handfuls of soot",
    reference: "Exodus 9:8-10",
  },
  {
    question: "What happened to the Egyptians who feared the word of the Lord before the hail came?",
    options: [
      "They brought their servants and livestock indoors",
      "They fled to Canaan",
      "They attacked Pharaoh",
      "They hid in the Nile"
    ],
    answer: "They brought their servants and livestock indoors",
    reference: "Exodus 9:19-20",
  },
  {
    question: "What was unusual about the hailstorm in Egypt?",
    options: [
      "It was mixed with fire",
      "It turned into water",
      "It lasted for seven days",
      "It fell only at night"
    ],
    answer: "It was mixed with fire",
    reference: "Exodus 9:23-24",
  },
  {
    question: "What did the locusts consume?",
    options: [
      "What was left of the plants after the hail",
      "Only the grain stored in houses",
      "Only the trees in Goshen",
      "The livestock"
    ],
    answer: "What was left of the plants after the hail",
    reference: "Exodus 10:12-15",
  },
  {
    question: "How did Pharaoh describe his sin after the plague of locusts?",
    options: [
      "I have sinned against the Lord your God and against you",
      "I have sinned only against Egypt",
      "I have done nothing wrong",
      "I have sinned against Moses alone"
    ],
    answer: "I have sinned against the Lord your God and against you",
    reference: "Exodus 10:16",
  },
  {
    question: "What was the ninth plague?",
    options: ["Darkness", "Locusts", "Boils", "Hail"],
    answer: "Darkness",
    reference: "Exodus 10:21-22",
  },
  {
    question: "How was the darkness in Egypt described?",
    options: [
      "A darkness that could be felt",
      "A darkness lasting only one hour",
      "A darkness caused by smoke",
      "A darkness that covered Goshen too"
    ],
    answer: "A darkness that could be felt",
    reference: "Exodus 10:21",
  },
  {
    question: "What did the Israelites have while Egypt was covered in darkness?",
    options: ["Light", "Fire from heaven", "Torches from Pharaoh", "Sunlight from the desert"],
    answer: "Light",
    reference: "Exodus 10:23",
  },
  {
    question: "What was Israel instructed to select for the Passover?",
    options: [
      "A male lamb or goat without blemish",
      "A young bull without blemish",
      "Two doves",
      "A male calf"
    ],
    answer: "A male lamb or goat without blemish",
    reference: "Exodus 12:3-5",
  },
  {
    question: "On what kind of animal was the Passover blood placed?",
    options: [
      "The two doorposts and the lintel",
      "The roof of the house",
      "The floor",
      "The altar outside the house"
    ],
    answer: "The two doorposts and the lintel",
    reference: "Exodus 12:7",
  },
  {
    question: "What were the Israelites told to eat with the Passover lamb?",
    options: [
      "Unleavened bread and bitter herbs",
      "Honey and fruit",
      "Rice and herbs",
      "Bread and wine"
    ],
    answer: "Unleavened bread and bitter herbs",
    reference: "Exodus 12:8",
  },
  {
    question: "What would happen when the Lord saw the blood on the houses of Israel?",
    options: [
      "He would pass over them",
      "He would make the houses invisible",
      "He would send angels inside",
      "He would move the houses to Goshen"
    ],
    answer: "He would pass over them",
    reference: "Exodus 12:13",
  },
  {
    question: "What happened to the firstborn of Egypt during the final plague?",
    options: [
      "They died",
      "They became servants",
      "They fled Egypt",
      "They became Israelites"
    ],
    answer: "They died",
    reference: "Exodus 12:29-30",
  },
  {
    question: "What did the Egyptians urge the Israelites to do after the death of the firstborn?",
    options: [
      "Leave the land quickly",
      "Stay and rebuild Egypt",
      "Fight Pharaoh",
      "Return to Goshen"
    ],
    answer: "Leave the land quickly",
    reference: "Exodus 12:31-33",
  },
  {
    question: "Why did the Israelites leave Egypt with unleavened dough?",
    options: [
      "They were driven out and could not delay to prepare ordinary bread",
      "They had no grain",
      "Pharaoh banned yeast",
      "God had not yet created bread"
    ],
    answer:
      "They were driven out and could not delay to prepare ordinary bread",
    reference: "Exodus 12:34, 39",
  },
  {
    question: "What did Moses take with him when Israel left Egypt?",
    options: [
      "Joseph's bones",
      "Pharaoh's crown",
      "The ark of the covenant",
      "Aaron's staff"
    ],
    answer: "Joseph's bones",
    reference: "Exodus 13:19",
  },
  {
    question: "How did God guide Israel during their journey from Egypt?",
    options: [
      "A pillar of cloud by day and a pillar of fire by night",
      "A star by day and a cloud by night",
      "An angel carrying a torch",
      "A river of light"
    ],
    answer: "A pillar of cloud by day and a pillar of fire by night",
    reference: "Exodus 13:21-22",
  },
  {
    question: "What did Pharaoh do after the Israelites had left Egypt?",
    options: [
      "He pursued them with his army",
      "He blessed their journey",
      "He sent them food",
      "He closed the borders"
    ],
    answer: "He pursued them with his army",
    reference: "Exodus 14:5-9",
  },
  {
    question: "What did Moses tell the Israelites when they were afraid because Pharaoh's army was approaching?",
    options: [
      "The Lord would fight for them",
      "They should attack Egypt",
      "They should return immediately",
      "They should hide in the mountains"
    ],
    answer: "The Lord would fight for them",
    reference: "Exodus 14:13-14",
  },
  {
    question: "What did Moses stretch out over the sea?",
    options: ["His hand", "His staff only", "His robe", "His sword"],
    answer: "His hand",
    reference: "Exodus 14:21",
  },
  {
    question: "What happened to the waters when Moses stretched out his hand?",
    options: [
      "They divided and Israel crossed on dry ground",
      "They became blood",
      "They rose over Egypt",
      "They disappeared permanently"
    ],
    answer: "They divided and Israel crossed on dry ground",
    reference: "Exodus 14:21-22",
  },
  {
    question: "What happened when the Egyptians pursued Israel into the sea?",
    options: [
      "The waters returned over them",
      "They crossed safely",
      "They joined Israel",
      "They became trapped in the desert"
    ],
    answer: "The waters returned over them",
    reference: "Exodus 14:26-28",
  },
  {
    question: "What did Moses and the Israelites do after crossing the Red Sea?",
    options: [
      "They sang a song to the Lord",
      "They built a city",
      "They returned to Egypt",
      "They immediately entered Canaan"
    ],
    answer: "They sang a song to the Lord",
    reference: "Exodus 15:1",
  },
  {
    question: "What did Miriam take in her hand after the Red Sea crossing?",
    options: ["A tambourine", "A staff", "A sword", "A harp"],
    answer: "A tambourine",
    reference: "Exodus 15:20",
  },
  {
    question: "What was the first major problem Israel faced after entering the wilderness of Shur?",
    options: [
      "They found bitter water",
      "They were attacked by Pharaoh",
      "They ran out of clothing",
      "They lost Moses"
    ],
    answer: "They found bitter water",
    reference: "Exodus 15:22-23",
  },
  {
    question: "What was the name of the place where Israel found bitter water?",
    options: ["Marah", "Elim", "Rephidim", "Sinai"],
    answer: "Marah",
    reference: "Exodus 15:23",
  },
  {
    question: "What did Moses throw into the bitter water to make it drinkable?",
    options: ["A piece of wood", "Salt", "A stone", "His staff"],
    answer: "A piece of wood",
    reference: "Exodus 15:25",
  },
  {
    question: "What food did God provide for Israel in the wilderness?",
    options: ["Manna", "Quail only", "Bread from Egypt", "Dates"],
    answer: "Manna",
    reference: "Exodus 16:4, 15",
  },
  {
    question: "What additional food did God provide in the evening?",
    options: ["Quail", "Fish", "Locusts", "Goats"],
    answer: "Quail",
    reference: "Exodus 16:13",
  },
  {
    question: "How much manna was each person instructed to gather?",
    options: [
      "An omer per person",
      "A half ephah per person",
      "A hin per person",
      "A talent per person"
    ],
    answer: "An omer per person",
    reference: "Exodus 16:16",
  },
  {
    question: "What happened when some Israelites kept manna until the next morning contrary to Moses' instruction?",
    options: [
      "It bred worms and became foul",
      "It multiplied",
      "It turned into bread",
      "It disappeared"
    ],
    answer: "It bred worms and became foul",
    reference: "Exodus 16:19-20",
  },
  {
    question: "What was different about the manna gathered on the sixth day?",
    options: [
      "They gathered twice as much",
      "It changed color",
      "It tasted different",
      "It could not be eaten"
    ],
    answer: "They gathered twice as much",
    reference: "Exodus 16:22",
  },
  {
    question: "Why were the Israelites instructed not to gather manna on the seventh day?",
    options: [
      "It was the Sabbath",
      "The manna stopped permanently",
      "They had enough food for a month",
      "Moses forbade eating bread"
    ],
    answer: "It was the Sabbath",
    reference: "Exodus 16:23-26",
  },
  {
    question: "What was the taste of manna compared to?",
    options: [
      "Wafers made with honey",
      "Bread with oil",
      "Dates and milk",
      "Roasted grain"
    ],
    answer: "Wafers made with honey",
    reference: "Exodus 16:31",
  },
  {
    question: "What problem did Israel face at Rephidim?",
    options: [
      "There was no water for the people to drink",
      "There was no food",
      "The Egyptians attacked them",
      "The cloud disappeared"
    ],
    answer: "There was no water for the people to drink",
    reference: "Exodus 17:1",
  },
  {
    question: "What came out of the rock at Horeb when Moses struck it?",
    options: ["Water", "Oil", "Honey", "Blood"],
    answer: "Water",
    reference: "Exodus 17:5-6",
  },
  {
    question: "Which nation attacked Israel at Rephidim?",
    options: ["Amalek", "Moab", "Edom", "Midian"],
    answer: "Amalek",
    reference: "Exodus 17:8",
  },
  {
    question: "What happened while Moses held up his hands during the battle against Amalek?",
    options: [
      "Israel prevailed",
      "Amalek immediately surrendered",
      "The battle stopped",
      "Moses became unable to speak"
    ],
    answer: "Israel prevailed",
    reference: "Exodus 17:11",
  },
  {
    question: "Who helped support Moses' hands during the battle?",
    options: ["Aaron and Hur", "Joshua and Aaron", "Hur and Joshua", "Aaron and Caleb"],
    answer: "Aaron and Hur",
    reference: "Exodus 17:12",
  },
  {
    question: "Who did Moses appoint to lead Israel's fighting men against Amalek?",
    options: ["Joshua", "Aaron", "Hur", "Caleb"],
    answer: "Joshua",
    reference: "Exodus 17:9",
  },
  {
    question: "What advice did Jethro give Moses about judging the people?",
    options: [
      "Appoint capable men over groups to help judge ordinary matters",
      "Judge every case personally without help",
      "Stop judging the people completely",
      "Send all difficult cases to Pharaoh"
    ],
    answer:
      "Appoint capable men over groups to help judge ordinary matters",
    reference: "Exodus 18:17-26",
  },
  {
    question: "What did Jethro recognize about God after hearing what He had done for Israel?",
    options: [
      "That the Lord was greater than all gods",
      "That Egypt had been stronger",
      "That Moses was a king",
      "That Israel needed a new god"
    ],
    answer: "That the Lord was greater than all gods",
    reference: "Exodus 18:8-12",
  },
  {
    question: "What did God tell Israel they would be if they obeyed His covenant?",
    options: [
      "His treasured possession, a kingdom of priests, and a holy nation",
      "The richest nation on earth",
      "Rulers over Egypt",
      "A nation without laws"
    ],
    answer:
      "His treasured possession, a kingdom of priests, and a holy nation",
    reference: "Exodus 19:5-6",
  },
  {
    question: "What did God instruct the Israelites to do before He appeared on Mount Sinai?",
    options: [
      "Consecrate themselves and wash their garments",
      "Build an altar immediately",
      "Leave the mountain",
      "Fast for forty days"
    ],
    answer: "Consecrate themselves and wash their garments",
    reference: "Exodus 19:10-11",
  },
  {
    question: "What sound was heard when God descended upon Mount Sinai?",
    options: ["A loud trumpet blast", "A great singing voice", "Thunder only", "A rushing river"],
    answer: "A loud trumpet blast",
    reference: "Exodus 19:16-19",
  },
  {
    question: "What did the people see on Mount Sinai when God descended upon it?",
    options: [
      "Smoke and fire",
      "A river of water",
      "A golden throne",
      "A rainbow only"
    ],
    answer: "Smoke and fire",
    reference: "Exodus 19:18",
  },
  {
    question: "What is the first commandment given in Exodus concerning other gods?",
    options: [
      "You shall have no other gods before Me",
      "You shall not make idols",
      "You shall not take God's name in vain",
      "You shall keep the Sabbath"
    ],
    answer: "You shall have no other gods before Me",
    reference: "Exodus 20:3",
  },
  {
    question: "What did God forbid Israel from making in connection with worship?",
    options: ["Idols", "Altars", "Offerings", "Prayers"],
    answer: "Idols",
    reference: "Exodus 20:4",
  },
  {
    question: "What day was Israel commanded to remember and keep holy?",
    options: ["The Sabbath", "The first day", "The Passover", "The Day of Atonement"],
    answer: "The Sabbath",
    reference: "Exodus 20:8-11",
  },
  {
    question: "What did the people do when they saw the thunder, lightning, trumpet sound, and smoking mountain?",
    options: [
      "They stood far away in fear",
      "They climbed the mountain",
      "They began eating",
      "They demanded to see God"
    ],
    answer: "They stood far away in fear",
    reference: "Exodus 20:18",
  },
  {
    question: "What did the people ask Moses to do because they were afraid to hear God directly?",
    options: [
      "Speak to them instead of God speaking directly to them",
      "Take them back to Egypt",
      "Build a new altar",
      "Ask Aaron to lead them"
    ],
    answer:
      "Speak to them instead of God speaking directly to them",
    reference: "Exodus 20:19",
  },
  {
    question: "What did God instruct Moses to make for the altar instead of using hewn stones?",
    options: [
      "An altar of earth or uncut stones",
      "A golden altar",
      "A silver altar",
      "A wooden altar covered with iron"
    ],
    answer: "An altar of earth or uncut stones",
    reference: "Exodus 20:24-25",
  },
  {
    question: "What was the basic rule concerning a Hebrew servant's period of service?",
    options: [
      "He served six years and went free in the seventh",
      "He served seven years and went free in the eighth",
      "He served three years",
      "He served until his master died"
    ],
    answer: "He served six years and went free in the seventh",
    reference: "Exodus 21:2",
  },
  {
    question: "What penalty was given for striking or cursing one's father or mother?",
    options: ["Death", "A fine", "Seven years of service", "Exile"],
    answer: "Death",
    reference: "Exodus 21:15, 17",
  },
  {
    question: "What principle appears in Exodus concerning injury caused by an animal known to be dangerous?",
    options: [
      "The owner could be held responsible if the animal was known to be dangerous",
      "The animal alone was always responsible",
      "No one could be held responsible",
      "Only the injured person was responsible"
    ],
    answer:
      "The owner could be held responsible if the animal was known to be dangerous",
    reference: "Exodus 21:28-29",
  },
  {
    question: "What was the punishment for stealing an ox and killing or selling it?",
    options: [
      "Five oxen for one ox",
      "Two oxen for one ox",
      "Seven oxen for one ox",
      "Ten oxen for one ox"
    ],
    answer: "Five oxen for one ox",
    reference: "Exodus 22:1",
  },
  {
    question: "What did God command Israel concerning strangers?",
    options: [
      "They were not to oppress or mistreat them",
      "They were to send them away",
      "They were to make them slaves",
      "They were not allowed to live among Israel"
    ],
    answer: "They were not to oppress or mistreat them",
    reference: "Exodus 22:21",
  },
  {
    question: "What did God command Israel to observe three times each year?",
    options: [
      "Three pilgrimage festivals",
      "Three days of fasting",
      "Three national elections",
      "Three harvests"
    ],
    answer: "Three pilgrimage festivals",
    reference: "Exodus 23:14-17",
  },
  {
    question: "What did God promise to send before Israel to guard them on the journey?",
    options: ["An angel", "A king", "A prophet", "A priest"],
    answer: "An angel",
    reference: "Exodus 23:20",
  },
  {
    question: "What did Moses sprinkle on the people when confirming the covenant?",
    options: ["Blood", "Water", "Oil", "Ashes"],
    answer: "Blood",
    reference: "Exodus 24:6-8",
  },
  {
    question: "How long was Moses on Mount Sinai before receiving the stone tablets?",
    options: ["Forty days and forty nights", "Seven days", "Thirty days", "Seventy days"],
    answer: "Forty days and forty nights",
    reference: "Exodus 24:18",
  },
  {
    question: "What material was placed inside the ark of the covenant?",
    options: [
      "The testimony God gave Moses",
      "Manna only",
      "Aaron's staff only",
      "The priestly garments"
    ],
    answer: "The testimony God gave Moses",
    reference: "Exodus 25:16",
  },
  {
    question: "What was placed above the ark of the covenant?",
    options: [
      "The mercy seat with cherubim",
      "A golden crown",
      "A lampstand",
      "A table of bread"
    ],
    answer: "The mercy seat with cherubim",
    reference: "Exodus 25:17-22",
  },
  {
    question: "What was the purpose of the golden lampstand in the tabernacle?",
    options: [
      "To give light",
      "To hold sacrifices",
      "To store manna",
      "To burn incense only"
    ],
    answer: "To give light",
    reference: "Exodus 25:31-37",
  },
  {
    question: "How many branches extended from the sides of the lampstand?",
    options: ["Six", "Four", "Seven", "Twelve"],
    answer: "Six",
    reference: "Exodus 25:32",
  },
  {
    question: "What was placed on the table inside the tabernacle?",
    options: [
      "The bread of the Presence",
      "The tablets of the covenant",
      "The golden calf",
      "The altar of burnt offering"
    ],
    answer: "The bread of the Presence",
    reference: "Exodus 25:30",
  },
  {
    question: "What material was used for the curtains of the tabernacle?",
    options: [
      "Fine twined linen with blue, purple, and scarlet yarn",
      "Gold and silver",
      "Leather only",
      "Wool only"
    ],
    answer:
      "Fine twined linen with blue, purple, and scarlet yarn",
    reference: "Exodus 26:1",
  },
  {
    question: "What separated the Holy Place from the Most Holy Place?",
    options: ["A veil", "A wall of stone", "A curtain of gold", "A wooden door"],
    answer: "A veil",
    reference: "Exodus 26:31-33",
  },
  {
    question: "What did the priests wear on their forehead as part of the holy garments?",
    options: [
      "A gold plate inscribed with 'Holy to the Lord'",
      "A silver crown",
      "A blue stone",
      "A linen band"
    ],
    answer: "A gold plate inscribed with 'Holy to the Lord'",
    reference: "Exodus 28:36",
  },
  {
    question: "How many stones were set in the breastpiece of judgment?",
    options: ["Twelve", "Ten", "Seven", "Four"],
    answer: "Twelve",
    reference: "Exodus 28:15-21",
  },
  {
    question: "What did the twelve stones on the breastpiece represent?",
    options: [
      "The twelve tribes of Israel",
      "The twelve plagues",
      "The twelve apostles",
      "The twelve months"
    ],
    answer: "The twelve tribes of Israel",
    reference: "Exodus 28:21",
  },
  {
    question: "What were Aaron's sons to wear on their heads as part of their priestly garments?",
    options: ["Turbans", "Crowns", "Helmets", "Veils"],
    answer: "Turbans",
    reference: "Exodus 28:40",
  },
  {
    question: "What was the altar of incense made from?",
    options: ["Acacia wood overlaid with gold", "Pure silver", "Stone", "Bronze only"],
    answer: "Acacia wood overlaid with gold",
    reference: "Exodus 30:1-3",
  },
  {
    question: "How often was incense to be burned on the altar of incense?",
    options: [
      "Morning and evening",
      "Only on the Sabbath",
      "Once a year",
      "Every seven days"
    ],
    answer: "Morning and evening",
    reference: "Exodus 30:7-8",
  },
  {
    question: "What was used for the anointing oil?",
    options: [
      "A special mixture of spices and olive oil",
      "Only olive oil",
      "Animal blood",
      "Water and myrrh"
    ],
    answer: "A special mixture of spices and olive oil",
    reference: "Exodus 30:22-25",
  },
  {
    question: "Who were specifically chosen by God to lead the craftsmanship of the tabernacle?",
    options: [
      "Bezalel and Oholiab",
      "Aaron and Hur",
      "Joshua and Caleb",
      "Nadab and Abihu"
    ],
    answer: "Bezalel and Oholiab",
    reference: "Exodus 31:1-6",
  },
  {
    question: "What did God give Moses on Mount Sinai as the testimony?",
    options: [
      "Two tablets of the testimony",
      "One scroll",
      "Three golden tablets",
      "A wooden staff"
    ],
    answer: "Two tablets of the testimony",
    reference: "Exodus 31:18",
  },
  {
    question: "What did the Israelites ask Aaron to make while Moses was on the mountain?",
    options: ["A golden calf", "A golden ark", "A silver altar", "A bronze serpent"],
    answer: "A golden calf",
    reference: "Exodus 32:1-4",
  },
  {
    question: "What did Aaron use to make the golden calf?",
    options: [
      "Gold earrings from the people",
      "Gold from Pharaoh",
      "Gold from the tabernacle",
      "Gold from Midian"
    ],
    answer: "Gold earrings from the people",
    reference: "Exodus 32:2-4",
  },
  {
    question: "What did Moses do when he saw the golden calf and the people's celebration?",
    options: [
      "He threw down and broke the tablets",
      "He joined the celebration",
      "He returned quietly to the mountain",
      "He built another altar"
    ],
    answer: "He threw down and broke the tablets",
    reference: "Exodus 32:19",
  },
  {
    question: "What did Moses do to the golden calf after destroying it?",
    options: [
      "He burned it, ground it to powder, scattered it on water, and made Israel drink it",
      "He buried it",
      "He melted it into new tablets",
      "He sent it back to Egypt"
    ],
    answer:
      "He burned it, ground it to powder, scattered it on water, and made Israel drink it",
    reference: "Exodus 32:20",
  },
  {
    question: "Who stood with Moses when he called for those who were on the Lord's side?",
    options: ["The sons of Levi", "The sons of Judah", "The priests of Egypt", "The elders of Midian"],
    answer: "The sons of Levi",
    reference: "Exodus 32:26",
  },
  {
    question: "What did Moses ask God to show him after the golden calf incident?",
    options: ["His ways and His glory", "The future of Egypt", "The promised land only", "The names of every Israelite"],
    answer: "His ways and His glory",
    reference: "Exodus 33:13, 18",
  },
  {
    question: "Where did Moses meet with God after the tabernacle had been pitched outside the camp?",
    options: ["At the tent of meeting", "At Pharaoh's palace", "At the Red Sea", "At Marah"],
    answer: "At the tent of meeting",
    reference: "Exodus 33:7-11",
  },
  {
    question: "What happened to Moses' face after he came down from Mount Sinai?",
    options: [
      "It shone",
      "It became covered with blood",
      "It became invisible",
      "It changed color"
    ],
    answer: "It shone",
    reference: "Exodus 34:29",
  },
  {
    question: "What did Moses do because the Israelites were afraid of his shining face?",
    options: ["He put a veil over his face", "He washed his face", "He covered himself with a robe", "He left the camp"],
    answer: "He put a veil over his face",
    reference: "Exodus 34:33-35",
  },
  {
    question: "What did the Israelites bring for the construction of the tabernacle?",
    options: [
      "Freewill offerings",
      "Taxes demanded by Moses",
      "Spoils taken from Midian",
      "Only gold from Egypt"
    ],
    answer: "Freewill offerings",
    reference: "Exodus 35:4-9",
  },
  {
    question: "What happened when the people brought more materials than were needed for the tabernacle?",
    options: [
      "Moses commanded them to stop bringing offerings",
      "The materials were thrown away",
      "The people were punished",
      "The materials were sent to Egypt"
    ],
    answer: "Moses commanded them to stop bringing offerings",
    reference: "Exodus 36:4-7",
  },
  {
    question: "What was placed inside the Most Holy Place?",
    options: [
      "The ark of the testimony",
      "The bronze altar",
      "The laver",
      "The table of bread"
    ],
    answer: "The ark of the testimony",
    reference: "Exodus 40:20-21",
  },
  {
    question: "What happened when Moses finished setting up the tabernacle?",
    options: [
      "The cloud covered the tent and the glory of the Lord filled it",
      "Fire destroyed the tent",
      "The Israelites immediately left Sinai",
      "The ark disappeared"
    ],
    answer:
      "The cloud covered the tent and the glory of the Lord filled it",
    reference: "Exodus 40:34",
  },
  {
    question: "What determined whether Israel would continue their journey after the tabernacle was completed?",
    options: [
      "The movement or remaining of the cloud",
      "Moses' personal decision",
      "Aaron's command",
      "The weather"
    ],
    answer: "The movement or remaining of the cloud",
    reference: "Exodus 40:36-38",
  },
];

export default exodusQuestions;