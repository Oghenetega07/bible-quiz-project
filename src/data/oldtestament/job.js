const jobQuestions = [
  {
    question: "Where did Job live?",
    options: ["Uz", "Edom", "Moab", "Midian"],
    answer: "Uz",
    reference: "Job 1:1",
  },
  {
    question: "How is Job described at the beginning of the book?",
    options: [
      "Blameless and upright",
      "A mighty warrior",
      "A priest of Israel",
      "A prophet from Judah",
    ],
    answer: "Blameless and upright",
    reference: "Job 1:1",
  },
  {
    question: "How many sons did Job have?",
    options: ["Seven", "Ten", "Three", "Five"],
    answer: "Seven",
    reference: "Job 1:2",
  },
  {
    question: "How many daughters did Job have?",
    options: ["Three", "Seven", "Five", "Ten"],
    answer: "Three",
    reference: "Job 1:2",
  },
  {
    question: "How many sheep did Job own before his suffering began?",
    options: ["Seven thousand", "Three thousand", "Five hundred", "One thousand"],
    answer: "Seven thousand",
    reference: "Job 1:3",
  },
  {
    question: "How many camels did Job own?",
    options: ["Three thousand", "Seven thousand", "Five hundred", "One thousand"],
    answer: "Three thousand",
    reference: "Job 1:3",
  },
  {
    question: "How many yoke of oxen did Job own?",
    options: ["Five hundred", "One thousand", "Three hundred", "Seven hundred"],
    answer: "Five hundred",
    reference: "Job 1:3",
  },
  {
    question: "How many female donkeys did Job own?",
    options: ["Five hundred", "Three hundred", "One thousand", "Seven hundred"],
    answer: "Five hundred",
    reference: "Job 1:3",
  },
  {
    question: "Why did Job regularly offer burnt offerings for his children?",
    options: [
      "He feared they might have sinned and cursed God in their hearts",
      "They were required to become priests",
      "They had asked him to do so",
      "They had broken the Sabbath",
    ],
    answer: "He feared they might have sinned and cursed God in their hearts",
    reference: "Job 1:5",
  },
  {
    question: "Who appeared among the heavenly beings before the Lord?",
    options: ["Satan", "Eliphaz", "Elihu", "Michael"],
    answer: "Satan",
    reference: "Job 1:6",
  },
  {
    question: "From where did Satan say he had come?",
    options: [
      "From roaming throughout the earth",
      "From Egypt",
      "From heaven only",
      "From the land of Uz",
    ],
    answer: "From roaming throughout the earth",
    reference: "Job 1:7",
  },
  {
    question: "What did Satan claim was the reason Job feared God?",
    options: [
      "God had protected and blessed him",
      "Job was afraid of death",
      "Job wanted to become a prophet",
      "Job had seen God directly",
    ],
    answer: "God had protected and blessed him",
    reference: "Job 1:9-10",
  },
  {
    question: "What limitation did God first place on Satan?",
    options: [
      "He could not lay a hand on Job himself",
      "He could not touch Job's possessions",
      "He could not harm Job's children",
      "He could not leave heaven",
    ],
    answer: "He could not lay a hand on Job himself",
    reference: "Job 1:12",
  },
  {
    question: "Who attacked Job's oxen and donkeys?",
    options: ["The Sabeans", "The Chaldeans", "The Philistines", "The Amalekites"],
    answer: "The Sabeans",
    reference: "Job 1:14-15",
  },
  {
    question: "What destroyed Job's sheep and the servants caring for them?",
    options: [
      "Fire from heaven",
      "A great wind",
      "The Chaldeans",
      "A flood",
    ],
    answer: "Fire from heaven",
    reference: "Job 1:16",
  },
  {
    question: "Who attacked and carried away Job's camels?",
    options: ["The Chaldeans", "The Sabeans", "The Edomites", "The Moabites"],
    answer: "The Chaldeans",
    reference: "Job 1:17",
  },
  {
    question: "What killed Job's sons and daughters?",
    options: [
      "A great wind collapsed the house on them",
      "Fire from heaven",
      "A Chaldean attack",
      "A plague",
    ],
    answer: "A great wind collapsed the house on them",
    reference: "Job 1:18-19",
  },
  {
    question: "What did Job do after hearing of the loss of his children?",
    options: [
      "Tore his robe, shaved his head, and worshiped",
      "Cursed God",
      "Left the land of Uz",
      "Attacked the raiders",
    ],
    answer: "Tore his robe, shaved his head, and worshiped",
    reference: "Job 1:20",
  },
  {
    question: "What did Job acknowledge about his possessions after losing them?",
    options: [
      "The Lord gave and the Lord has taken away",
      "Everything belonged to Satan",
      "His servants had failed him",
      "His wealth would soon return",
    ],
    answer: "The Lord gave and the Lord has taken away",
    reference: "Job 1:21",
  },
  {
    question: "How did Job respond morally to his first wave of suffering?",
    options: [
      "He did not sin by charging God with wrongdoing",
      "He accused God of injustice",
      "He abandoned worship",
      "He blamed his children",
    ],
    answer: "He did not sin by charging God with wrongdoing",
    reference: "Job 1:22",
  },

  {
    question: "What further test did Satan request against Job?",
    options: [
      "Permission to afflict Job's body",
      "Permission to kill Job immediately",
      "Permission to take his wife",
      "Permission to destroy Uz",
    ],
    answer: "Permission to afflict Job's body",
    reference: "Job 2:4-5",
  },
  {
    question: "What restriction did God place on Satan during the second test?",
    options: [
      "He must spare Job's life",
      "He could not touch Job's skin",
      "He could not speak to Job",
      "He could not harm Job's wife",
    ],
    answer: "He must spare Job's life",
    reference: "Job 2:6",
  },
  {
    question: "What physical suffering came upon Job?",
    options: [
      "Painful sores from the soles of his feet to the crown of his head",
      "Blindness",
      "Paralysis",
      "A broken leg",
    ],
    answer: "Painful sores from the soles of his feet to the crown of his head",
    reference: "Job 2:7",
  },
  {
    question: "What did Job use to scrape himself?",
    options: ["A piece of broken pottery", "A knife", "A stone", "A branch"],
    answer: "A piece of broken pottery",
    reference: "Job 2:8",
  },
  {
    question: "Where did Job sit while suffering?",
    options: ["Among the ashes", "Inside his house", "At the city gate", "In the temple"],
    answer: "Among the ashes",
    reference: "Job 2:8",
  },
  {
    question: "What did Job's wife tell him to do?",
    options: [
      "Curse God and die",
      "Leave Uz",
      "Call for his friends",
      "Offer more sacrifices",
    ],
    answer: "Curse God and die",
    reference: "Job 2:9",
  },
  {
    question: "How did Job answer his wife?",
    options: [
      "Should we accept good from God and not trouble?",
      "God has abandoned us",
      "My friends will rescue me",
      "I will curse the day I was born",
    ],
    answer: "Should we accept good from God and not trouble?",
    reference: "Job 2:10",
  },
  {
    question: "Which three friends first came to comfort Job?",
    options: [
      "Eliphaz, Bildad, and Zophar",
      "Elihu, Eliphaz, and Bildad",
      "Zophar, Elihu, and Eliphaz",
      "Bildad, Elihu, and Zophar",
    ],
    answer: "Eliphaz, Bildad, and Zophar",
    reference: "Job 2:11",
  },
  {
    question: "How long did Job's friends sit silently with him?",
    options: ["Seven days and seven nights", "Three days", "Forty days", "Twelve days"],
    answer: "Seven days and seven nights",
    reference: "Job 2:13",
  },
  {
    question: "Why did Job's friends initially say nothing?",
    options: [
      "They saw how great his suffering was",
      "They were afraid of him",
      "They did not recognize him",
      "They were waiting for a priest",
    ],
    answer: "They saw how great his suffering was",
    reference: "Job 2:13",
  },

  {
    question: "What did Job curse when he finally began to speak?",
    options: ["The day of his birth", "God", "His wife", "His friends"],
    answer: "The day of his birth",
    reference: "Job 3:1",
  },
  {
    question: "What did Job wish had happened on the night of his conception?",
    options: [
      "That it had never been counted among the days",
      "That it had become a feast",
      "That his parents had left Uz",
      "That an angel had appeared",
    ],
    answer: "That it had never been counted among the days",
    reference: "Job 3:3-7",
  },
  {
    question: "What did Job say he had no peace, quietness, or rest from?",
    options: ["Trouble", "His friends", "Work", "Enemies"],
    answer: "Trouble",
    reference: "Job 3:26",
  },

  {
    question: "Which friend spoke first in response to Job?",
    options: ["Eliphaz", "Bildad", "Zophar", "Elihu"],
    answer: "Eliphaz",
    reference: "Job 4:1",
  },
  {
    question: "What principle did Eliphaz claim to have observed about those who sow trouble?",
    options: [
      "They reap it",
      "They become wealthy",
      "They escape judgment",
      "They become rulers",
    ],
    answer: "They reap it",
    reference: "Job 4:8",
  },
  {
    question: "What unusual experience did Eliphaz describe?",
    options: [
      "A spirit passed before his face during a night vision",
      "He saw fire fall from heaven",
      "He heard God from a whirlwind",
      "He saw Job's restoration",
    ],
    answer: "A spirit passed before his face during a night vision",
    reference: "Job 4:12-16",
  },
  {
    question: "What question did the mysterious voice raise about human righteousness?",
    options: [
      "Can a mortal be more righteous than God?",
      "Can Job defeat death?",
      "Can wisdom be purchased?",
      "Can man understand the stars?",
    ],
    answer: "Can a mortal be more righteous than God?",
    reference: "Job 4:17",
  },

  {
    question: "What did Eliphaz encourage Job to do with his case?",
    options: [
      "Appeal to God",
      "Appeal to the elders",
      "Leave Uz",
      "Seek a physician",
    ],
    answer: "Appeal to God",
    reference: "Job 5:8",
  },
  {
    question: "What did Eliphaz say God does to the schemes of the crafty?",
    options: [
      "Thwarts them",
      "Rewards them",
      "Ignores them",
      "Strengthens them",
    ],
    answer: "Thwarts them",
    reference: "Job 5:12",
  },
  {
    question: "How did Eliphaz describe God's discipline?",
    options: [
      "Blessed is the one whom God corrects",
      "It should always be rejected",
      "It proves God has abandoned someone",
      "It is only for kings",
    ],
    answer: "Blessed is the one whom God corrects",
    reference: "Job 5:17",
  },

  {
    question: "To what did Job compare the weight of his anguish?",
    options: [
      "The sand of the seas",
      "A mountain",
      "A city wall",
      "An iron chain",
    ],
    answer: "The sand of the seas",
    reference: "Job 6:2-3",
  },
  {
    question: "What did Job say the arrows of the Almighty had done to him?",
    options: [
      "Their poison was in him",
      "They had missed him",
      "They had protected him",
      "They had struck his enemies",
    ],
    answer: "Their poison was in him",
    reference: "Job 6:4",
  },
  {
    question: "What did Job compare his unreliable friends to?",
    options: [
      "Seasonal streams that disappear",
      "Broken swords",
      "Dry trees",
      "Wild animals",
    ],
    answer: "Seasonal streams that disappear",
    reference: "Job 6:15-20",
  },

  {
    question: "What did Job say human life on earth was like?",
    options: [
      "Hard service",
      "A royal feast",
      "A peaceful river",
      "A permanent home",
    ],
    answer: "Hard service",
    reference: "Job 7:1",
  },
  {
    question: "What did Job say filled his nights?",
    options: [
      "Misery",
      "Visions of victory",
      "Peace",
      "Songs",
    ],
    answer: "Misery",
    reference: "Job 7:3-4",
  },
  {
    question: "What did Job say his body was clothed with?",
    options: [
      "Worms and scabs",
      "Ashes only",
      "Sackcloth",
      "Dust and blood",
    ],
    answer: "Worms and scabs",
    reference: "Job 7:5",
  },

  {
    question: "Which friend argued that God does not pervert justice?",
    options: ["Bildad", "Eliphaz", "Zophar", "Elihu"],
    answer: "Bildad",
    reference: "Job 8:1-3",
  },
  {
    question: "What did Bildad imply had caused Job's children to die?",
    options: [
      "Their own sin",
      "Satan alone",
      "A random accident",
      "Job's failure as a father",
    ],
    answer: "Their own sin",
    reference: "Job 8:4",
  },
  {
    question: "What plant did Bildad use as an example of something that cannot grow without water?",
    options: ["Papyrus", "Cedar", "Olive tree", "Fig tree"],
    answer: "Papyrus",
    reference: "Job 8:11",
  },

  {
    question: "What question did Job raise about being right before God?",
    options: [
      "How can a mortal be righteous before God?",
      "Why does God need sacrifices?",
      "Can the dead return?",
      "Why do kings prosper?",
    ],
    answer: "How can a mortal be righteous before God?",
    reference: "Job 9:2",
  },
  {
    question: "What did Job say would happen if someone disputed with God?",
    options: [
      "They could not answer Him once in a thousand times",
      "They would easily win",
      "They would become wise",
      "They would immediately die",
    ],
    answer: "They could not answer Him once in a thousand times",
    reference: "Job 9:3",
  },
  {
    question: "What celestial constellations did Job say God made?",
    options: [
      "The Bear, Orion, and the Pleiades",
      "The Lion, Eagle, and Dragon",
      "The Sun, Moon, and Morning Star",
      "The Scorpion, Ram, and Bull",
    ],
    answer: "The Bear, Orion, and the Pleiades",
    reference: "Job 9:9",
  },
  {
    question: "What did Job wish existed between himself and God?",
    options: [
      "A mediator",
      "A king",
      "A priestly army",
      "A prophet from Uz",
    ],
    answer: "A mediator",
    reference: "Job 9:33",
  },

  {
    question: "What did Job ask God not to do without explaining his charge?",
    options: [
      "Condemn him",
      "Heal him",
      "Speak to him",
      "Restore his children",
    ],
    answer: "Condemn him",
    reference: "Job 10:2",
  },
  {
    question: "What did Job say God's hands had done to him?",
    options: [
      "Shaped and made him",
      "Destroyed his enemies",
      "Built his house",
      "Protected his possessions",
    ],
    answer: "Shaped and made him",
    reference: "Job 10:8",
  },

  {
    question: "Which friend spoke after Bildad?",
    options: ["Zophar", "Elihu", "Eliphaz", "No one"],
    answer: "Zophar",
    reference: "Job 11:1",
  },
  {
    question: "What did Zophar claim Job deserved compared with what he was suffering?",
    options: [
      "God had even forgotten some of Job's sin",
      "Job was suffering too much",
      "Job deserved no suffering",
      "Job had been completely righteous",
    ],
    answer: "God had even forgotten some of Job's sin",
    reference: "Job 11:6",
  },
  {
    question: "What did Zophar say humans could not fully fathom?",
    options: [
      "The mysteries of God",
      "The movements of animals",
      "The history of Uz",
      "The wisdom of kings",
    ],
    answer: "The mysteries of God",
    reference: "Job 11:7",
  },

  {
    question: "How did Job sarcastically respond to his friends' claims of wisdom?",
    options: [
      "Surely wisdom will die with you",
      "You are wiser than angels",
      "I know nothing at all",
      "God has chosen you as prophets",
    ],
    answer: "Surely wisdom will die with you",
    reference: "Job 12:2",
  },
  {
    question: "What did Job insist he also possessed?",
    options: ["Understanding", "Royal authority", "Prophetic visions", "Wealth"],
    answer: "Understanding",
    reference: "Job 12:3",
  },
  {
    question: "According to Job, who can teach that God's hand has done these things?",
    options: [
      "The animals, birds, earth, and fish",
      "Only priests",
      "Only prophets",
      "Only kings",
    ],
    answer: "The animals, birds, earth, and fish",
    reference: "Job 12:7-10",
  },

  {
    question: "What did Job say he desired to do directly with the Almighty?",
    options: [
      "Speak and argue his case",
      "Hide from Him permanently",
      "Fight Him",
      "Ask his friends to speak instead",
    ],
    answer: "Speak and argue his case",
    reference: "Job 13:3",
  },
  {
    question: "What did Job call his friends because of their arguments?",
    options: [
      "Worthless physicians",
      "Faithful witnesses",
      "Wise judges",
      "True prophets",
    ],
    answer: "Worthless physicians",
    reference: "Job 13:4",
  },
  {
    question: "What did Job say his friends would show wisdom by doing?",
    options: [
      "Keeping silent",
      "Speaking more forcefully",
      "Leaving Uz",
      "Calling a priest",
    ],
    answer: "Keeping silent",
    reference: "Job 13:5",
  },
  {
    question: "What remarkable statement did Job make about trusting God despite danger?",
    options: [
      "Though He slay me, yet will I hope in Him",
      "God will never allow me to die",
      "I will trust only when I am restored",
      "My friends will save me",
    ],
    answer: "Though He slay me, yet will I hope in Him",
    reference: "Job 13:15",
  },

  {
    question: "How did Job describe human life?",
    options: [
      "Few days and full of trouble",
      "Long and peaceful",
      "Hidden from suffering",
      "Always prosperous",
    ],
    answer: "Few days and full of trouble",
    reference: "Job 14:1",
  },
  {
    question: "To what did Job compare a human being who quickly fades?",
    options: [
      "A flower",
      "A cedar tree",
      "A river",
      "A mountain",
    ],
    answer: "A flower",
    reference: "Job 14:2",
  },
  {
    question: "What did Job say could happen to a tree even after it was cut down?",
    options: [
      "It could sprout again",
      "It could never grow again",
      "It would become stone",
      "It would immediately bear fruit",
    ],
    answer: "It could sprout again",
    reference: "Job 14:7-9",
  },
  {
    question: "What question did Job ask concerning death?",
    options: [
      "If someone dies, will they live again?",
      "Why are the wicked never buried?",
      "Can death defeat God?",
      "Who created death?",
    ],
    answer: "If someone dies, will they live again?",
    reference: "Job 14:14",
  },

  {
    question: "What did Eliphaz accuse Job's words of doing?",
    options: [
      "Undermining reverence for God",
      "Encouraging righteousness",
      "Defending the poor",
      "Teaching wisdom",
    ],
    answer: "Undermining reverence for God",
    reference: "Job 15:4",
  },
  {
    question: "What did Eliphaz ask sarcastically about Job's age?",
    options: [
      "Were you the first man ever born?",
      "Are you older than Abraham?",
      "Are you younger than your children?",
      "Were you born before the earth?",
    ],
    answer: "Were you the first man ever born?",
    reference: "Job 15:7",
  },

  {
    question: "What did Job call his friends after their repeated speeches?",
    options: [
      "Miserable comforters",
      "Faithful brothers",
      "Wise counselors",
      "Righteous judges",
    ],
    answer: "Miserable comforters",
    reference: "Job 16:2",
  },
  {
    question: "Where did Job say his witness was?",
    options: ["In heaven", "In Uz", "Among his friends", "In the city gate"],
    answer: "In heaven",
    reference: "Job 16:19",
  },

  {
    question: "What did Job say had become his closest family in his despair?",
    options: [
      "The grave and worms",
      "His friends",
      "The angels",
      "The poor",
    ],
    answer: "The grave and worms",
    reference: "Job 17:13-14",
  },

  {
    question: "Which friend compared the fate of the wicked to a lamp being put out?",
    options: ["Bildad", "Eliphaz", "Zophar", "Elihu"],
    answer: "Bildad",
    reference: "Job 18:5-6",
  },
  {
    question: "What did Bildad say would happen to the memory of the wicked?",
    options: [
      "It would perish from the earth",
      "It would be honored forever",
      "It would be written in heaven",
      "It would become famous",
    ],
    answer: "It would perish from the earth",
    reference: "Job 18:17",
  },

  {
    question: "What did Job say his relatives and close friends had done?",
    options: [
      "Abandoned and forgotten him",
      "Defended him",
      "Restored his wealth",
      "Driven away his enemies",
    ],
    answer: "Abandoned and forgotten him",
    reference: "Job 19:13-14",
  },
  {
    question: "What did Job say about his breath?",
    options: [
      "It was offensive to his wife",
      "It had become stronger",
      "It smelled of incense",
      "It had stopped completely",
    ],
    answer: "It was offensive to his wife",
    reference: "Job 19:17",
  },
  {
    question: "What did Job famously declare about his Redeemer?",
    options: [
      "He lives",
      "He had abandoned him",
      "He would remain silent forever",
      "He was one of Job's friends",
    ],
    answer: "He lives",
    reference: "Job 19:25",
  },
  {
    question: "Where did Job say his Redeemer would ultimately stand?",
    options: ["On the earth", "In Uz", "At the city gate", "On Mount Sinai"],
    answer: "On the earth",
    reference: "Job 19:25",
  },

  {
    question: "What did Zophar say about the triumph of the wicked?",
    options: [
      "It is brief",
      "It lasts forever",
      "It is greater than wisdom",
      "It is never judged",
    ],
    answer: "It is brief",
    reference: "Job 20:5",
  },

  {
    question: "What troubling observation did Job make about some wicked people?",
    options: [
      "They live on, grow old, and increase in power",
      "They always die young",
      "They never become wealthy",
      "They are immediately punished",
    ],
    answer: "They live on, grow old, and increase in power",
    reference: "Job 21:7",
  },
  {
    question: "What did Job say some wicked people tell God?",
    options: [
      "Leave us alone",
      "Teach us your ways",
      "Forgive us",
      "Destroy our enemies",
    ],
    answer: "Leave us alone",
    reference: "Job 21:14",
  },

  {
    question: "What specific sins did Eliphaz falsely accuse Job of committing?",
    options: [
      "Exploiting the poor, widows, and orphans",
      "Murdering his children",
      "Worshiping idols",
      "Stealing from kings",
    ],
    answer: "Exploiting the poor, widows, and orphans",
    reference: "Job 22:6-9",
  },
  {
    question: "What did Eliphaz urge Job to do?",
    options: [
      "Return to the Almighty",
      "Leave Uz",
      "Offer sacrifices to his friends",
      "Seek help from kings",
    ],
    answer: "Return to the Almighty",
    reference: "Job 22:23",
  },

  {
    question: "What did Job long to know in his search for God?",
    options: [
      "Where he could find God",
      "Where Satan lived",
      "Where his children were buried",
      "Where his wealth had gone",
    ],
    answer: "Where he could find God",
    reference: "Job 23:3",
  },
  {
    question: "What did Job say God would discover after testing him?",
    options: [
      "He would come forth as gold",
      "He would be found guilty",
      "He would disappear",
      "He would become king",
    ],
    answer: "He would come forth as gold",
    reference: "Job 23:10",
  },
  {
    question: "What did Job say he valued more than his daily food?",
    options: [
      "The words of God's mouth",
      "His wealth",
      "His friends",
      "His health",
    ],
    answer: "The words of God's mouth",
    reference: "Job 23:12",
  },

  {
    question: "What injustice did Job describe concerning the poor?",
    options: [
      "Boundary stones were moved and flocks were stolen",
      "They were made kings",
      "They were given too much land",
      "They controlled the courts",
    ],
    answer: "Boundary stones were moved and flocks were stolen",
    reference: "Job 24:2",
  },

  {
    question: "Which friend gave the very short speech about God's dominion and awe?",
    options: ["Bildad", "Eliphaz", "Zophar", "Elihu"],
    answer: "Bildad",
    reference: "Job 25:1-2",
  },
  {
    question: "What did Bildad ask about human purity before God?",
    options: [
      "How can one born of woman be pure?",
      "Can humans become angels?",
      "Can wisdom remove sin?",
      "Can sacrifices make kings pure?",
    ],
    answer: "How can one born of woman be pure?",
    reference: "Job 25:4",
  },

  {
    question: "What did Job say God suspends over empty space?",
    options: ["The earth", "The heavens", "The sea", "The stars"],
    answer: "The earth",
    reference: "Job 26:7",
  },
  {
    question: "What did Job say God wraps up in His clouds?",
    options: ["The waters", "The stars", "The earth", "The wind"],
    answer: "The waters",
    reference: "Job 26:8",
  },

  {
    question: "What did Job refuse to do while he lived?",
    options: [
      "Deny his integrity",
      "Speak about God",
      "Remember his children",
      "Listen to his friends",
    ],
    answer: "Deny his integrity",
    reference: "Job 27:5-6",
  },

  {
    question: "What question introduces Job's great discussion about wisdom?",
    options: [
      "Where can wisdom be found?",
      "Who created the stars?",
      "Why do the wicked prosper?",
      "Where does Satan live?",
    ],
    answer: "Where can wisdom be found?",
    reference: "Job 28:12",
  },
  {
    question: "What did Job say cannot be exchanged for wisdom?",
    options: [
      "Gold and precious jewels",
      "Food",
      "Land",
      "Animals",
    ],
    answer: "Gold and precious jewels",
    reference: "Job 28:15-19",
  },
  {
    question: "What did Job identify as wisdom?",
    options: [
      "The fear of the Lord",
      "Great wealth",
      "Long life",
      "Knowledge of nature",
    ],
    answer: "The fear of the Lord",
    reference: "Job 28:28",
  },
  {
    question: "What did Job identify as understanding?",
    options: [
      "To shun evil",
      "To know mysteries",
      "To gain wealth",
      "To defeat enemies",
    ],
    answer: "To shun evil",
    reference: "Job 28:28",
  },

  {
    question: "What did Job remember about his former days?",
    options: [
      "God's friendship blessed his house",
      "His friends had opposed him",
      "He had lived in poverty",
      "He had no children",
    ],
    answer: "God's friendship blessed his house",
    reference: "Job 29:4",
  },
  {
    question: "How did people respond when Job entered the city gate in his former days?",
    options: [
      "Young men stepped aside and older men rose",
      "Everyone mocked him",
      "The poor fled",
      "The rulers ignored him",
    ],
    answer: "Young men stepped aside and older men rose",
    reference: "Job 29:7-8",
  },
  {
    question: "Whom did Job say he had helped before his suffering?",
    options: [
      "The poor, fatherless, blind, and lame",
      "Only kings",
      "Only his family",
      "Only priests",
    ],
    answer: "The poor, fatherless, blind, and lame",
    reference: "Job 29:12-16",
  },

  {
    question: "Who mocked Job after his condition changed?",
    options: [
      "Young men whose fathers he had once despised",
      "Kings from neighboring lands",
      "His own children",
      "The priests of Uz",
    ],
    answer: "Young men whose fathers he had once despised",
    reference: "Job 30:1",
  },
  {
    question: "What had Job's music turned into?",
    options: [
      "Mourning",
      "Celebration",
      "Silence only",
      "Worship",
    ],
    answer: "Mourning",
    reference: "Job 30:31",
  },

  {
    question: "What covenant did Job say he had made with his eyes?",
    options: [
      "Not to look lustfully at a young woman",
      "Never to look at wealth",
      "Never to look at idols",
      "Never to look at kings",
    ],
    answer: "Not to look lustfully at a young woman",
    reference: "Job 31:1",
  },
  {
    question: "What did Job say should happen if he had denied justice to his servants?",
    options: [
      "He would have no answer when God called him to account",
      "His servants should become kings",
      "He should lose only his wealth",
      "His friends should judge him",
    ],
    answer: "He would have no answer when God called him to account",
    reference: "Job 31:13-14",
  },
  {
    question: "What did Job say about the Creator of both himself and his servants?",
    options: [
      "The same God formed them in the womb",
      "They had different creators",
      "Only Job was formed by God",
      "Servants were outside God's concern",
    ],
    answer: "The same God formed them in the womb",
    reference: "Job 31:15",
  },
  {
    question: "What did Job deny doing when he saw the sun or moon?",
    options: [
      "Worshiping them",
      "Studying them",
      "Naming them",
      "Fearfully hiding from them",
    ],
    answer: "Worshiping them",
    reference: "Job 31:26-28",
  },

  {
    question: "Why did Job's three friends stop answering him?",
    options: [
      "Job was righteous in his own eyes",
      "They agreed with everything he said",
      "They had left Uz",
      "They were afraid of Elihu",
    ],
    answer: "Job was righteous in his own eyes",
    reference: "Job 32:1",
  },
  {
    question: "Who became angry after the three friends stopped speaking?",
    options: ["Elihu", "Eliphaz", "Bildad", "Zophar"],
    answer: "Elihu",
    reference: "Job 32:2",
  },
  {
    question: "Why was Elihu angry with Job?",
    options: [
      "Job justified himself rather than God",
      "Job had refused to speak",
      "Job had insulted Elihu",
      "Job had left Uz",
    ],
    answer: "Job justified himself rather than God",
    reference: "Job 32:2",
  },
  {
    question: "Why was Elihu angry with Job's three friends?",
    options: [
      "They had failed to refute Job yet had condemned him",
      "They had defended Job",
      "They had spoken too little",
      "They had left before Elihu arrived",
    ],
    answer: "They had failed to refute Job yet had condemned him",
    reference: "Job 32:3",
  },
  {
    question: "Why had Elihu waited before speaking?",
    options: [
      "The others were older than he was",
      "Job had forbidden him",
      "He had been absent",
      "He was afraid of God",
    ],
    answer: "The others were older than he was",
    reference: "Job 32:4",
  },
  {
    question: "What did Elihu say gives people understanding?",
    options: [
      "The breath of the Almighty",
      "Old age alone",
      "Education",
      "Wealth",
    ],
    answer: "The breath of the Almighty",
    reference: "Job 32:8",
  },

  {
    question: "What did Elihu say he and Job shared in their origin?",
    options: [
      "Both were formed from clay",
      "Both were prophets",
      "Both were from Uz",
      "Both were wealthy",
    ],
    answer: "Both were formed from clay",
    reference: "Job 33:6",
  },
  {
    question: "What did Elihu say God may use to speak to people?",
    options: [
      "Dreams and visions",
      "Only prophets",
      "Only sacrifices",
      "Only storms",
    ],
    answer: "Dreams and visions",
    reference: "Job 33:14-16",
  },
  {
    question: "What purpose did Elihu say God's warnings could serve?",
    options: [
      "To turn people from wrongdoing and preserve them from pride",
      "To make them wealthy",
      "To make them kings",
      "To remove all suffering immediately",
    ],
    answer: "To turn people from wrongdoing and preserve them from pride",
    reference: "Job 33:17",
  },

  {
    question: "What did Elihu insist God would never do?",
    options: [
      "Act wickedly or pervert justice",
      "Allow anyone to suffer",
      "Judge rulers",
      "Remain silent",
    ],
    answer: "Act wickedly or pervert justice",
    reference: "Job 34:10-12",
  },
  {
    question: "What did Elihu say God shows toward princes and the rich?",
    options: [
      "No partiality",
      "Special favor",
      "Fear",
      "Permanent anger",
    ],
    answer: "No partiality",
    reference: "Job 34:19",
  },

  {
    question: "What did Elihu say Job had asked about righteousness?",
    options: [
      "What advantage is there in not sinning?",
      "Can God forgive sin?",
      "Can humans become perfect?",
      "Why were sacrifices required?",
    ],
    answer: "What advantage is there in not sinning?",
    reference: "Job 35:3",
  },
  {
    question: "According to Elihu, whom does human wickedness directly affect?",
    options: [
      "Other humans",
      "God's nature",
      "The stars",
      "The angels only",
    ],
    answer: "Other humans",
    reference: "Job 35:6-8",
  },

  {
    question: "What did Elihu say God does not despise despite His power?",
    options: [
      "Anyone",
      "Only the poor",
      "Only the righteous",
      "Only kings",
    ],
    answer: "Anyone",
    reference: "Job 36:5",
  },
  {
    question: "What did Elihu say God does for the afflicted?",
    options: [
      "Teaches them through their suffering",
      "Always removes suffering immediately",
      "Abandons them",
      "Makes them rulers",
    ],
    answer: "Teaches them through their suffering",
    reference: "Job 36:15",
  },

  {
    question: "What natural phenomenon did Elihu describe as revealing God's majestic voice?",
    options: ["Thunder", "Earthquake", "Fire", "Snow only"],
    answer: "Thunder",
    reference: "Job 37:2-5",
  },
  {
    question: "What did Elihu say God commands the snow to do?",
    options: [
      "Fall on the earth",
      "Melt immediately",
      "Cover only mountains",
      "Remain in heaven",
    ],
    answer: "Fall on the earth",
    reference: "Job 37:6",
  },
  {
    question: "What did Elihu say God's works cause people to do?",
    options: [
      "Stop their labor so all may know His work",
      "Work continually",
      "Leave their homes",
      "Offer sacrifices",
    ],
    answer: "Stop their labor so all may know His work",
    reference: "Job 37:7",
  },

  {
    question: "From what did the Lord finally answer Job?",
    options: ["A whirlwind", "A fire", "A cloud", "A dream"],
    answer: "A whirlwind",
    reference: "Job 38:1",
  },
  {
    question: "What did God first challenge Job about?",
    options: [
      "Speaking words without knowledge",
      "Losing his wealth",
      "Listening to his wife",
      "Rejecting his friends",
    ],
    answer: "Speaking words without knowledge",
    reference: "Job 38:2",
  },
  {
    question: "What did God ask Job concerning the earth's foundation?",
    options: [
      "Where were you when I laid it?",
      "Why did you destroy it?",
      "Can you rebuild it?",
      "Who told you its size?",
    ],
    answer: "Where were you when I laid it?",
    reference: "Job 38:4",
  },
  {
    question: "What did God say sang together when the earth was founded?",
    options: [
      "The morning stars",
      "The oceans",
      "The mountains",
      "The angels of Uz",
    ],
    answer: "The morning stars",
    reference: "Job 38:7",
  },
  {
    question: "What did God say shouted for joy at creation?",
    options: [
      "All the angels",
      "All humans",
      "The animals",
      "The kings",
    ],
    answer: "All the angels",
    reference: "Job 38:7",
  },
  {
    question: "What did God say He placed around the sea?",
    options: [
      "Doors and boundaries",
      "Mountains only",
      "Walls of stone",
      "Clouds only",
    ],
    answer: "Doors and boundaries",
    reference: "Job 38:8-11",
  },
  {
    question: "What did God ask Job whether he had ever commanded?",
    options: ["The morning", "The stars to disappear", "The sea to dry up", "The moon to stop"],
    answer: "The morning",
    reference: "Job 38:12",
  },
  {
    question: "What storehouses did God ask Job whether he had entered?",
    options: [
      "The storehouses of snow and hail",
      "The storehouses of gold",
      "The storehouses of grain",
      "The storehouses of wind only",
    ],
    answer: "The storehouses of snow and hail",
    reference: "Job 38:22",
  },
  {
    question: "What constellation did God ask Job whether he could bind?",
    options: ["The Pleiades", "Orion", "The Bear", "The Morning Star"],
    answer: "The Pleiades",
    reference: "Job 38:31",
  },
  {
    question: "What constellation did God ask Job whether he could loosen?",
    options: ["Orion", "The Pleiades", "The Bear", "Venus"],
    answer: "Orion",
    reference: "Job 38:31",
  },

  {
    question: "What animal did God ask Job whether he could hunt prey for?",
    options: ["The lion", "The horse", "The ox", "The donkey"],
    answer: "The lion",
    reference: "Job 38:39",
  },
  {
    question: "Which birds did God say cry to Him for food?",
    options: ["Ravens", "Eagles", "Doves", "Sparrows"],
    answer: "Ravens",
    reference: "Job 38:41",
  },
  {
    question: "Which animals did God ask Job whether he knew the time they gave birth?",
    options: [
      "Mountain goats",
      "Lions",
      "Horses",
      "Oxen",
    ],
    answer: "Mountain goats",
    reference: "Job 39:1",
  },
  {
    question: "What animal did God describe as refusing to serve humans or stay by their manger?",
    options: ["Wild ox", "Horse", "Lion", "Donkey"],
    answer: "Wild ox",
    reference: "Job 39:9",
  },
  {
    question: "Which bird was described as treating her young harshly, as though they were not hers?",
    options: ["Ostrich", "Eagle", "Raven", "Hawk"],
    answer: "Ostrich",
    reference: "Job 39:13-16",
  },
  {
    question: "What animal was described as laughing at fear and charging into battle?",
    options: ["Horse", "Lion", "Wild ox", "Donkey"],
    answer: "Horse",
    reference: "Job 39:19-25",
  },
  {
    question: "What bird did God say soars and spreads its wings toward the south?",
    options: ["Hawk", "Raven", "Ostrich", "Dove"],
    answer: "Hawk",
    reference: "Job 39:26",
  },
  {
    question: "What bird makes its nest on high cliffs?",
    options: ["Eagle", "Raven", "Ostrich", "Sparrow"],
    answer: "Eagle",
    reference: "Job 39:27-30",
  },

  {
    question: "How did Job respond after God's first series of questions?",
    options: [
      "He said he was unworthy and would put his hand over his mouth",
      "He challenged God again",
      "He blamed his friends",
      "He asked God for wealth",
    ],
    answer: "He said he was unworthy and would put his hand over his mouth",
    reference: "Job 40:3-5",
  },
  {
    question: "What did God ask Job whether he would do to justify himself?",
    options: [
      "Condemn God",
      "Condemn his friends",
      "Leave Uz",
      "Reject wisdom",
    ],
    answer: "Condemn God",
    reference: "Job 40:8",
  },
  {
    question: "What great creature did God describe as eating grass like an ox?",
    options: ["Behemoth", "Leviathan", "Lion", "Wild ox"],
    answer: "Behemoth",
    reference: "Job 40:15",
  },
  {
    question: "Where did God say Behemoth's strength was?",
    options: [
      "In its loins and belly muscles",
      "In its wings",
      "In its teeth only",
      "In its horns",
    ],
    answer: "In its loins and belly muscles",
    reference: "Job 40:16",
  },
  {
    question: "To what was Behemoth's tail compared?",
    options: ["A cedar", "A spear", "A palm tree", "An oak root"],
    answer: "A cedar",
    reference: "Job 40:17",
  },

  {
    question: "What creature did God challenge Job to catch with a fishhook?",
    options: ["Leviathan", "Behemoth", "A crocodile", "A great fish"],
    answer: "Leviathan",
    reference: "Job 41:1",
  },
  {
    question: "What did God say would happen if someone laid a hand on Leviathan?",
    options: [
      "They would remember the struggle and never do it again",
      "They would easily tame it",
      "They would become wealthy",
      "They would kill it immediately",
    ],
    answer: "They would remember the struggle and never do it again",
    reference: "Job 41:8",
  },
  {
    question: "What did God say about everything under heaven?",
    options: [
      "It belongs to Him",
      "It belongs to Job",
      "It belongs to kings",
      "It belongs to angels",
    ],
    answer: "It belongs to Him",
    reference: "Job 41:11",
  },
  {
    question: "How are Leviathan's rows of shields described?",
    options: [
      "Tightly sealed together",
      "Broken and weak",
      "Covered with feathers",
      "Made of gold",
    ],
    answer: "Tightly sealed together",
    reference: "Job 41:15-17",
  },
  {
    question: "What effect did Leviathan have on mighty warriors?",
    options: [
      "They retreated in fear",
      "They easily captured it",
      "They ignored it",
      "They worshiped it",
    ],
    answer: "They retreated in fear",
    reference: "Job 41:25",
  },

  {
    question: "What did Job finally acknowledge about God's power?",
    options: [
      "No purpose of God can be thwarted",
      "God could not understand his suffering",
      "God needed Job's advice",
      "God's power had limits",
    ],
    answer: "No purpose of God can be thwarted",
    reference: "Job 42:2",
  },
  {
    question: "What did Job admit about his earlier words?",
    options: [
      "He spoke of things he did not understand",
      "Everything he said was correct",
      "His friends had spoken for him",
      "He had deliberately lied",
    ],
    answer: "He spoke of things he did not understand",
    reference: "Job 42:3",
  },
  {
    question: "How did Job describe the difference between his earlier and later knowledge of God?",
    options: [
      "He had heard of God, but now his eyes had seen Him",
      "He had never known God before",
      "He had seen God physically every day",
      "He no longer believed what he had heard",
    ],
    answer: "He had heard of God, but now his eyes had seen Him",
    reference: "Job 42:5",
  },
  {
    question: "What did Job do after his encounter with God?",
    options: [
      "Repented in dust and ashes",
      "Offered sacrifices for himself",
      "Left the land of Uz",
      "Condemned his friends",
    ],
    answer: "Repented in dust and ashes",
    reference: "Job 42:6",
  },
  {
    question: "With which friend was God particularly angry after the speeches ended?",
    options: ["Eliphaz", "Bildad", "Zophar", "Elihu"],
    answer: "Eliphaz",
    reference: "Job 42:7",
  },
  {
    question: "Why was God angry with Job's three friends?",
    options: [
      "They had not spoken what was right about Him as Job had",
      "They had refused to visit Job",
      "They had taken Job's possessions",
      "They had spoken too little",
    ],
    answer: "They had not spoken what was right about Him as Job had",
    reference: "Job 42:7",
  },
  {
    question: "How many bulls were Job's friends instructed to offer?",
    options: ["Seven", "Three", "Ten", "Twelve"],
    answer: "Seven",
    reference: "Job 42:8",
  },
  {
    question: "How many rams were Job's friends instructed to offer?",
    options: ["Seven", "Three", "Ten", "Twelve"],
    answer: "Seven",
    reference: "Job 42:8",
  },
  {
    question: "Who was to pray for Job's three friends?",
    options: ["Job", "Elihu", "A priest", "Job's wife"],
    answer: "Job",
    reference: "Job 42:8",
  },
  {
    question: "When did the Lord restore Job's fortunes?",
    options: [
      "After Job prayed for his friends",
      "After Eliphaz apologized",
      "After Job left Uz",
      "Immediately after Satan departed",
    ],
    answer: "After Job prayed for his friends",
    reference: "Job 42:10",
  },
  {
    question: "How much did God give Job compared with what he had before?",
    options: ["Twice as much", "Three times as much", "The same amount", "Four times as much"],
    answer: "Twice as much",
    reference: "Job 42:10",
  },
  {
    question: "How many sheep did Job have after his restoration?",
    options: ["Fourteen thousand", "Seven thousand", "Six thousand", "Twelve thousand"],
    answer: "Fourteen thousand",
    reference: "Job 42:12",
  },
  {
    question: "How many camels did Job have after his restoration?",
    options: ["Six thousand", "Three thousand", "Twelve thousand", "One thousand"],
    answer: "Six thousand",
    reference: "Job 42:12",
  },
  {
    question: "How many yoke of oxen did Job have after his restoration?",
    options: ["One thousand", "Five hundred", "Two thousand", "Seven hundred"],
    answer: "One thousand",
    reference: "Job 42:12",
  },
  {
    question: "How many female donkeys did Job have after his restoration?",
    options: ["One thousand", "Five hundred", "Two thousand", "Seven hundred"],
    answer: "One thousand",
    reference: "Job 42:12",
  },
  {
    question: "How many sons did Job have after his restoration?",
    options: ["Seven", "Ten", "Three", "Fourteen"],
    answer: "Seven",
    reference: "Job 42:13",
  },
  {
    question: "How many daughters did Job have after his restoration?",
    options: ["Three", "Seven", "Ten", "Five"],
    answer: "Three",
    reference: "Job 42:13",
  },
  {
    question: "What was the name of Job's first daughter after his restoration?",
    options: ["Jemimah", "Keziah", "Keren-Happuch", "Hadassah"],
    answer: "Jemimah",
    reference: "Job 42:14",
  },
  {
    question: "What was the name of Job's second daughter?",
    options: ["Keziah", "Jemimah", "Keren-Happuch", "Tamar"],
    answer: "Keziah",
    reference: "Job 42:14",
  },
  {
    question: "What was the name of Job's third daughter?",
    options: ["Keren-Happuch", "Keziah", "Jemimah", "Abigail"],
    answer: "Keren-Happuch",
    reference: "Job 42:14",
  },
  {
    question: "What was unusual about Job's daughters compared with women throughout the land?",
    options: [
      "No women were found as beautiful as they were",
      "They became prophets",
      "They married kings",
      "They lived longer than Job",
    ],
    answer: "No women were found as beautiful as they were",
    reference: "Job 42:15",
  },
  {
    question: "What unusual inheritance did Job give his daughters?",
    options: [
      "An inheritance along with their brothers",
      "Only jewelry",
      "Only livestock",
      "No inheritance",
    ],
    answer: "An inheritance along with their brothers",
    reference: "Job 42:15",
  },
  {
    question: "How many years did Job live after his restoration?",
    options: ["140 years", "120 years", "70 years", "100 years"],
    answer: "140 years",
    reference: "Job 42:16",
  },
  {
    question: "How many generations of his descendants did Job live to see?",
    options: ["Four", "Three", "Seven", "Five"],
    answer: "Four",
    reference: "Job 42:16",
  },
  {
    question: "How is Job's death described?",
    options: [
      "He died old and full of years",
      "He died during another trial",
      "He died in battle",
      "He died shortly after his restoration",
    ],
    answer: "He died old and full of years",
    reference: "Job 42:17",
  },
];

export default jobQuestions;