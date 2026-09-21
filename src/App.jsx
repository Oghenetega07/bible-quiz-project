import {
  useCallback,
  useEffect,
  useState,
} from "react";
import publicDomainVerseNotes from "./data/publicDomainVerseNotes";
import "./App.css";

/* =========================
   BIBLE BOOKS
========================= */

const oldTestament = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
];

const newTestament = [
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

const questionBankLoaders = import.meta.glob(
  "./data/**/*.js",
  { import: "default" }
);

function getQuestionBankLoader(book) {
  const fileName = book.toLowerCase().replaceAll(" ", "");

  return Object.entries(questionBankLoaders).find(
    ([path]) => path.toLowerCase().endsWith(`/${fileName}.js`)
  )?.[1];
}

/* =========================
   SHUFFLE FUNCTION
========================= */

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
}

function getDailyChallengeBook() {
  const today = getTodayKey();
  const dayNumber = Number(today.replaceAll("-", ""));
  const allBooks = [...oldTestament, ...newTestament];

  return allBooks[dayNumber % allBooks.length];
}

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTimeUntilTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now);

  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const totalMinutes = Math.max(
    0,
    Math.ceil((tomorrow - now) / 60000)
  );
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

/* =========================
   APP
========================= */

function App() {
  const [page, setPage] = useState("testaments");
  const [selectedTestament, setSelectedTestament] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [questionCount, setQuestionCount] = useState(null);
  const [timeLimit, setTimeLimit] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [lockedQuestions, setLockedQuestions] = useState([]);
  const [reviewingHistory, setReviewingHistory] = useState(false);
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bibleQuizProfile") || "null") || {
        name: "Bible Student",
        soundEnabled: false,
      };
    } catch {
      return { name: "Bible Student", soundEnabled: false };
    }
  });
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [isDailyChallenge, setIsDailyChallenge] = useState(false);
  const [dailyChallengeDate, setDailyChallengeDate] = useState(() =>
    localStorage.getItem("bibleQuizDailyChallengeDate") || ""
  );
  const [timeUntilTomorrow, setTimeUntilTomorrow] = useState(
    getTimeUntilTomorrow
  );
  const [quizHistory, setQuizHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem("bibleQuizHistory");

      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error("Could not load quiz history:", error);
      return [];
    }
  });

  const saveHistory = useCallback((history) => {
    setQuizHistory(history);

    try {
      localStorage.setItem(
        "bibleQuizHistory",
        JSON.stringify(history)
      );
    } catch (error) {
      console.error("Could not save quiz history:", error);
    }
  }, []);

  function saveProfile(nextProfile) {
    setProfile(nextProfile);
    localStorage.setItem("bibleQuizProfile", JSON.stringify(nextProfile));
  }

  function openPage(nextPage) {
    setPage(nextPage);
    scrollToTop();
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeUntilTomorrow(getTimeUntilTomorrow());
    }, 60000);

    return () => clearInterval(countdown);
  }, []);

  /* =========================
     SCROLL HELPERS
  ========================= */

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  }, []);

  function scrollToStartButton() {
    setTimeout(() => {
      const startButton = document.querySelector(
        ".start-quiz-button"
      );

      if (startButton) {
        startButton.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  }

  /* =========================
     TESTAMENT
  ========================= */

  function chooseTestament(testament) {
    setSelectedTestament(testament);
    setSelectedBook("");
    setPage("books");
    scrollToTop();
  }

  /* =========================
     BOOK
  ========================= */

  function chooseBook(book) {
    setIsDailyChallenge(false);
    setSelectedBook(book);
  }

  function continueToSetup() {
    setQuestionCount(null);
    setTimeLimit(null);
    setPage("setup");
    scrollToTop();
  }

  /* =========================
     BACK BUTTON
  ========================= */

  function goBack() {
    if (page === "questions") {
      setPage("setup");
    } else if (page === "setup") {
      setPage("books");
    } else if (page === "books") {
      setPage("testaments");
      setSelectedTestament("");
      setSelectedBook("");
    } else if (page === "review") {
      setPage(reviewingHistory ? "history" : "results");
    } else if (page === "history") {
      setPage("testaments");
    }

    scrollToTop();
  }

  /* =========================
     SETUP
  ========================= */

  function chooseTime(time) {
    setTimeLimit(time);
    scrollToStartButton();
  }

  /* =========================
     START QUIZ
  ========================= */

  async function startQuiz() {
    if (!questionCount || !timeLimit) {
      alert(
        "Please select the number of questions and time limit."
      );
      return;
    }

    setReviewingHistory(false);
    setIsLoadingQuiz(true);

    const questionBankLoader = getQuestionBankLoader(selectedBook);
    let bookQuestions = null;

    try {
      bookQuestions = questionBankLoader
        ? await questionBankLoader()
        : null;
    } catch (error) {
      console.error("Could not load question bank:", error);
      setIsLoadingQuiz(false);
      alert(
        "This question bank could not be loaded. Please try again."
      );
      return;
    }

    setIsLoadingQuiz(false);

    if (!bookQuestions || bookQuestions.length === 0) {
      alert(
        "No questions are available for this book."
      );
      return;
    }

    const shuffledQuestions =
      shuffleArray(bookQuestions);

    const chosenQuestions =
      shuffledQuestions.slice(
        0,
        Math.min(
          questionCount,
          shuffledQuestions.length
        )
      );

    /*
      Balance the position of correct answers.

      0 = A
      1 = B
      2 = C
      3 = D
    */

    const answerPositions = [];

    for (
      let i = 0;
      i < chosenQuestions.length;
      i++
    ) {
      answerPositions.push(i % 4);
    }

    const shuffledAnswerPositions =
      shuffleArray(answerPositions);

    const preparedQuestions =
      chosenQuestions.map(
        (question, questionIndex) => {
          const correctAnswer =
            question.answer;

          const wrongOptions =
            question.options.filter(
              (option) =>
                option !== correctAnswer
            );

          if (
            question.options.length !== 4 ||
            wrongOptions.length !== 3
          ) {
            console.error(
              "Invalid question:",
              question.question,
              question
            );

            return {
              ...question,
              options: shuffleArray(
                question.options
              ),
            };
          }

          const shuffledWrongOptions =
            shuffleArray(wrongOptions);

          const correctPosition =
            shuffledAnswerPositions[
              questionIndex
            ];

          const newOptions = [];
          let wrongIndex = 0;

          for (
            let position = 0;
            position < 4;
            position++
          ) {
            if (
              position === correctPosition
            ) {
              newOptions.push(correctAnswer);
            } else {
              newOptions.push(
                shuffledWrongOptions[
                  wrongIndex
                ]
              );

              wrongIndex++;
            }
          }

          return {
            ...question,
            options: newOptions,
          };
        }
      );

    setQuestions(preparedQuestions);

    setAnswers(
      new Array(
        preparedQuestions.length
      ).fill(null)
    );

    setLockedQuestions(
      new Array(
        preparedQuestions.length
      ).fill(false)
    );

    setCurrentQuestion(0);

    const minutes = parseInt(
      timeLimit,
      10
    );

    setTimeLeft(minutes * 60);
    setPage("questions");
    scrollToTop();
  }

  /* =========================
     SELECT ANSWER

     The user may change an answer while
     still on the same question.

     Once the user leaves an answered
     question, that answer becomes locked.
  ========================= */

  function selectAnswer(answer) {
    if (lockedQuestions[currentQuestion]) {
      return;
    }

    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] =
      answer;

    setAnswers(updatedAnswers);
  }

  function lockCurrentAnswer() {
    if (
      answers[currentQuestion] === null ||
      lockedQuestions[currentQuestion]
    ) {
      return;
    }

    setLockedQuestions((previous) => {
      const updated = [...previous];

      updated[currentQuestion] = true;

      return updated;
    });
  }

  /* =========================
     QUESTION NAVIGATION
  ========================= */

  function nextQuestion() {
    lockCurrentAnswer();

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );

      scrollToTop();
    } else {
      finishQuiz();
    }
  }

  function previousQuestion() {
    lockCurrentAnswer();

    if (currentQuestion > 0) {
      setCurrentQuestion(
        (previous) => previous - 1
      );

      scrollToTop();
    }
  }

  function skipQuestion() {
    lockCurrentAnswer();

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );

      scrollToTop();
    } else {
      finishQuiz();
    }
  }

  function goToQuestion(questionIndex) {
    if (questionIndex === currentQuestion) {
      return;
    }

    lockCurrentAnswer();
    setCurrentQuestion(questionIndex);
    scrollToTop();
  }

  /* =========================
     SCORE
  ========================= */

  const calculateScore = useCallback(() => {
    let total = 0;

    answers.forEach(
      (answer, index) => {
        if (
          answer !== null &&
          questions[index] &&
          answer ===
            questions[index].answer
        ) {
          total++;
        }
      }
    );

    return total;
  }, [answers, questions]);

  /* =========================
     FINISH QUIZ
  ========================= */

  const finishQuiz = useCallback(() => {
    if (questions.length === 0) {
      return;
    }

    const score = calculateScore();

    const quizPercentage = Math.round(
      (score / questions.length) * 100
    );

    const historyItem = {
      id: `${Date.now()}-${Math.random()}`,
      book: selectedBook,
      testament: selectedTestament,
      isDailyChallenge,
      dateKey: getTodayKey(),
      score,
      total: questions.length,
      percentage: quizPercentage,
      timeLimit,
      date: new Date().toLocaleString(),
      questions: questions.map(
        (question, index) => ({
          question: question.question,
          options: question.options,
          answer: question.answer,
          reference:
            question.reference || "",
          userAnswer:
            answers[index] || null,
        })
      ),
    };

    saveHistory([
      historyItem,
      ...quizHistory,
    ]);

    if (isDailyChallenge) {
      setDailyChallengeDate(historyItem.dateKey);

      try {
        localStorage.setItem(
          "bibleQuizDailyChallengeDate",
          historyItem.dateKey
        );
      } catch (error) {
        console.error(
          "Could not save daily challenge status:",
          error
        );
      }
    }

    if (isDailyChallenge) {
      const previousDate = new Date();
      previousDate.setDate(previousDate.getDate() - 1);
      const previousKey = `${previousDate.getFullYear()}-${String(previousDate.getMonth() + 1).padStart(2, "0")}-${String(previousDate.getDate()).padStart(2, "0")}`;
      const savedStreak = JSON.parse(localStorage.getItem("bibleQuizStreak") || "{}");
      const nextStreak = {
        current: savedStreak.lastDate === previousKey ? (savedStreak.current || 0) + 1 : 1,
        lastDate: historyItem.dateKey,
      };
      localStorage.setItem("bibleQuizStreak", JSON.stringify(nextStreak));
    }

    setShowCompletionAnimation(true);
    setTimeout(() => {
      setShowCompletionAnimation(false);
      setPage("results");
      scrollToTop();
    }, 650);
  }, [
    answers,
    calculateScore,
    isDailyChallenge,
    questions,
    quizHistory,
    saveHistory,
    scrollToTop,
    selectedBook,
    selectedTestament,
    setShowCompletionAnimation,
    timeLimit,
  ]);

  /* =========================
     TIMER
  ========================= */

  useEffect(() => {
    if (
      page !== "questions" ||
      timeLeft <= 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(
        (previousTime) => {
          if (previousTime <= 1) {
            return 0;
          }

          return previousTime - 1;
        }
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [page, timeLeft]);

  useEffect(() => {
    if (
      page === "questions" &&
      timeLeft === 0 &&
      questions.length > 0
    ) {
      finishQuiz();
    }
  }, [
    page,
    timeLeft,
    questions.length,
    finishQuiz,
  ]);

  function formatTime(seconds) {
    const safeSeconds =
      Math.max(0, seconds);

    const minutes = Math.floor(
      safeSeconds / 60
    );

    const remainingSeconds =
      safeSeconds % 60;

    return `${String(
      minutes
    ).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  /* =========================
     RESTART QUIZ
  ========================= */

  function restartQuiz() {
    setPage("setup");
    setReviewingHistory(false);
    setIsDailyChallenge(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuestions([]);
    setLockedQuestions([]);
    setTimeLeft(0);
    scrollToTop();
  }

  function goHome() {
    setPage("testaments");
    setReviewingHistory(false);
    setSelectedTestament("");
    setSelectedBook("");
    setQuestionCount(null);
    setTimeLimit(null);
    setIsDailyChallenge(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuestions([]);
    setLockedQuestions([]);
    setTimeLeft(0);
    scrollToTop();
  }

  function goHome() {
    setPage("testaments");
    setSelectedTestament("");
    setSelectedBook("");
    setQuestionCount(null);
    setTimeLimit(null);
    setIsDailyChallenge(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuestions([]);
    setLockedQuestions([]);
    setTimeLeft(0);
    scrollToTop();
  }

  /* =========================
     HISTORY
  ========================= */

  function openHistory() {
    setPage("history");
    scrollToTop();
  }

  function viewHistoryAnswers(historyItem) {
    setReviewingHistory(true);
    setSelectedTestament(historyItem.testament);
    setSelectedBook(historyItem.book);
    setQuestions(historyItem.questions);
    setAnswers(
      historyItem.questions.map(
        (question) => question.userAnswer
      )
    );
    setLockedQuestions(
      new Array(historyItem.questions.length).fill(true)
    );
    setCurrentQuestion(0);
    setPage("review");
    scrollToTop();
  }

  function startDailyChallenge() {
    if (dailyChallengeDate === getTodayKey()) {
      return;
    }

    const dailyBook = getDailyChallengeBook();

    setIsDailyChallenge(true);
    setSelectedTestament(
      oldTestament.includes(dailyBook) ? "old" : "new"
    );
    setSelectedBook(dailyBook);
    setQuestionCount(10);
    setTimeLimit("5 Minutes");
    setPage("setup");
    scrollToTop();
  }

  function clearHistory() {
    const shouldClear = window.confirm(
      "Do you want to clear your quiz history?"
    );

    if (shouldClear) {
      saveHistory([]);
    }
  }
  /* =========================
     CURRENT VALUES
  ========================= */

  const books =
    selectedTestament === "old"
      ? oldTestament
      : newTestament;

  const currentQuizQuestion =
    questions[currentQuestion];

  const verseEntries =
    Object.entries(publicDomainVerseNotes);

  function getVerseOfTheDay() {
    if (verseEntries.length === 0) {
      return {
        reference: "",
        text: "Your word is a lamp to my feet and a light to my path.",
        explanation: "God’s Word gives guidance and wisdom.",
      };
    }

    const today = new Date();
    const dateKey = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(
      today.getDate()
    ).padStart(2, "0")}`;

    const seed = dateKey
      .split("")
      .reduce(
        (total, character) =>
          total + character.charCodeAt(0),
        0
      );

    const index =
      seed % verseEntries.length;

    const [reference, verse] =
      verseEntries[index];

    return {
      reference,
      ...verse,
    };
  }

  const dailyVerse = getVerseOfTheDay();

  const verseInfo =
    currentQuizQuestion &&
    currentQuizQuestion.reference
      ? publicDomainVerseNotes[
          currentQuizQuestion.reference
        ]
      : null;

  const finalScore =
    calculateScore();

  const percentage =
    questions.length > 0
      ? Math.round(
          (finalScore /
            questions.length) *
            100
        )
      : 0;

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) /
          questions.length) *
        100
      : 0;

  /* =========================
     ENCOURAGEMENT
  ========================= */

  function getEncouragement() {
    if (percentage >= 80) {
      return {
        title:
          "YOU HAVE HIDDEN HIS WORD IN YOUR HEART",

        message:
          "Your score reflects a strong knowledge of Scripture, but there is always more of God to discover. Keep searching, keep learning, and let what you know become what you live.",

        verse:
          "“Your word is a lamp to my feet and a light to my path.”",

        reference:
          "Psalm 119:105",
      };
    }

    if (percentage >= 60) {
      return {
        title:
          "KEEP GROWING IN THE WORD",

        message:
          "You may not have known every answer, but every question you missed is another invitation to go deeper. Keep opening your Bible. Keep asking questions. Keep growing.",

        verse:
          "“Grow in the grace and knowledge of our Lord and Savior Jesus Christ.”",

        reference:
          "2 Peter 3:18",
      };
    }

    if (percentage >= 40) {
      return {
        title:
          "THERE IS MORE TO DISCOVER",

        message:
          "This is not the end of the quiz; it can be the beginning of deeper study. Go back to the passages you missed and discover what Scripture says. What seems unfamiliar today can become something you remember tomorrow.",

        verse:
          "“Open my eyes, that I may behold wondrous things out of your law.”",

        reference:
          "Psalm 119:18",
      };
    }

    return {
      title:
        "DON'T STOP HERE",

      message:
        "Your score is not the most important thing here. What matters is your willingness to learn. Return to the Word, learn from what you missed, and come back again. Growth begins by continuing.",

      verse:
        "“Your words were found, and I ate them, and your words became to me a joy.”",

      reference:
        "Jeremiah 15:16",
    };
  }

  const encouragement =
    getEncouragement();

  const completedQuizCount = quizHistory.length;
  const averagePercentage = completedQuizCount
    ? Math.round(
        quizHistory.reduce(
          (total, item) => total + item.percentage,
          0
        ) / completedQuizCount
      )
    : 0;
  const bestPercentage = completedQuizCount
    ? Math.max(
        ...quizHistory.map((item) => item.percentage)
      )
    : 0;
  const studiedBookCount = new Set(
    quizHistory.map((item) => item.book)
  ).size;

  const totalAnswered = quizHistory.reduce(
    (total, item) => total + item.questions.filter((question) => question.userAnswer !== null).length,
    0
  );
  const totalCorrect = quizHistory.reduce(
    (total, item) => total + item.questions.filter((question) => question.userAnswer === question.answer).length,
    0
  );
  const overallAccuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const dailyDates = [...new Set(quizHistory.filter((item) => item.isDailyChallenge).map((item) => item.dateKey))].sort().reverse();
  let currentStreak = 0;
  let streakCursor = new Date();
  streakCursor.setHours(0, 0, 0, 0);
  for (const dateKey of dailyDates) {
    const expected = `${streakCursor.getFullYear()}-${String(streakCursor.getMonth() + 1).padStart(2, "0")}-${String(streakCursor.getDate()).padStart(2, "0")}`;
    if (dateKey !== expected) {
      if (currentStreak === 0 && dateKey === getTodayKey()) {
        continue;
      }
      break;
    }
    currentStreak++;
    streakCursor.setDate(streakCursor.getDate() - 1);
  }
  const badges = [
    completedQuizCount >= 1 && "First Quiz",
    bestPercentage === 100 && "Perfect Score",
    completedQuizCount >= 5 && "Five Quizzes",
    studiedBookCount >= 10 && "Ten Books",
    currentStreak >= 3 && "Three-Day Streak",
  ].filter(Boolean);
  const bookAccuracy = Object.values(quizHistory.reduce((groups, item) => {
    const group = groups[item.book] || { book: item.book, correct: 0, answered: 0 };
    item.questions.forEach((question) => {
      if (question.userAnswer !== null) {
        group.answered++;
        if (question.userAnswer === question.answer) group.correct++;
      }
    });
    groups[item.book] = group;
    return groups;
  }, {})).sort((first, second) => second.answered - first.answered);
  const streakData = JSON.parse(localStorage.getItem("bibleQuizStreak") || "{}");

  /* =========================
     WEBSITE
  ========================= */

  return (
    <div className="quiz-page">
      <header className="site-header">
        <div className="header-inner">
          <button
            type="button"
            className="brand-button"
            onClick={goHome}
          >
            BIBLE QUIZ
          </button>

          <nav className="header-nav" aria-label="Main navigation">
            <button type="button" onClick={goHome}>
              Home
            </button>
            <button type="button" onClick={openHistory}>
              History
            </button>
            <button type="button" onClick={startDailyChallenge}>
              Daily Challenge
            </button>
            <button type="button" onClick={() => openPage("profile")}>
              Profile
            </button>
          </nav>
        </div>
      </header>

      <main className="selection-container">
        {showCompletionAnimation && (
          <div className="completion-overlay" role="status" aria-live="polite">
            <div className="completion-burst">✦</div>
            <strong>Quiz complete</strong>
            <span>Your effort matters. Keep growing.</span>
          </div>
        )}

        {/* =====================
            TESTAMENT SELECTION
        ===================== */}

        {page === "testaments" && (
          <>
            <section className="hero-panel" aria-label="Bible quiz introduction">
              <div className="hero-copy">
                <span className="eyebrow">BIBLE STUDY & MEMORIZATION</span>

                <h2>
                  Grow in faith with every question you answer.
                </h2>

                <p>
                  Strengthen your knowledge of Scripture, build confidence in God’s Word, and return daily for a fresh challenge.
                </p>

                <div className="hero-actions">
                  <button
                    className="continue-button"
                    onClick={startDailyChallenge}
                  >
                    Start Daily Challenge
                  </button>

                  <button
                    className="secondary-button"
                    onClick={openHistory}
                  >
                    View History
                  </button>
                </div>
              </div>

              <div className="hero-stats" aria-label="Quiz stats overview">
                <div className="hero-stat">
                  <strong>{completedQuizCount}</strong>
                  <span>Quizzes</span>
                </div>

                <div className="hero-stat">
                  <strong>{averagePercentage}%</strong>
                  <span>Average</span>
                </div>

                <div className="hero-stat">
                  <strong>{bestPercentage}%</strong>
                  <span>Best</span>
                </div>
              </div>
            </section>

            <div className="featured-verse-card" aria-label="Verse of the day">
              <span className="featured-verse-label">VERSE OF THE DAY</span>

              <p className="featured-verse-text">
                “{dailyVerse.text}”
              </p>

              <span className="featured-verse-reference">
                {dailyVerse.reference}
              </span>
            </div>

            <section className="feature-strip" aria-label="Features overview">
              <div className="feature-card">
                <span className="feature-icon">✦</span>
                <h3>Daily Challenge</h3>
                <p>Return each day for a new Bible quiz and keep your memory sharp.</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">✞</span>
                <h3>Scripture Reflection</h3>
                <p>See the full verse and learn what it means after each answer.</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">◎</span>
                <h3>Progress Tracking</h3>
                <p>Review your history and keep improving across every book you study.</p>
              </div>
            </section>

            <div className="selection-heading">
              <h2>
                Choose a Testament
              </h2>

              <p>
                Select where you want
                your Bible quiz to come
                from.
              </p>
            </div>

            <div className="testament-cards">
              <button
                className="testament-card"
                aria-label="Choose Old Testament, 39 books"
                onClick={() =>
                  chooseTestament("old")
                }
              >
                <span className="card-number">
                  39
                </span>

                <div>
                  <h3>
                    OLD TESTAMENT
                  </h3>

                  <p>39 Books</p>
                </div>
              </button>

              <button
                className="testament-card"
                aria-label="Choose New Testament, 27 books"
                onClick={() =>
                  chooseTestament("new")
                }
              >
                <span className="card-number">
                  27
                </span>

                <div>
                  <h3>
                    NEW TESTAMENT
                  </h3>

                  <p>27 Books</p>
                </div>
              </button>
            </div>

            <div className="history-home-section">
              <button
                className="daily-challenge-button"
                onClick={startDailyChallenge}
                disabled={dailyChallengeDate === getTodayKey()}
              >
                <span>
                  {dailyChallengeDate === getTodayKey()
                    ? "Daily Challenge Complete"
                    : "Daily Challenge"}
                </span>
                <small>
                  {dailyChallengeDate === getTodayKey()
                    ? `New challenge in ${timeUntilTomorrow}`
                    : `${getDailyChallengeBook()} · 10 questions · 5 minutes`}
                </small>
              </button>

              <button
                className="continue-button"
                onClick={openHistory}
              >
                Quiz History
              </button>
            </div>

            <section className="progress-dashboard" aria-label="Your progress">
              <div className="dashboard-heading">
                <span className="testament-label">YOUR PROGRESS</span>
                <h3>Keep building your knowledge</h3>
              </div>

              <div className="dashboard-stats">
                <div>
                  <strong>{completedQuizCount}</strong>
                  <span>Quizzes</span>
                </div>
                <div>
                  <strong>{averagePercentage}%</strong>
                  <span>Average</span>
                </div>
                <div>
                  <strong>{bestPercentage}%</strong>
                  <span>Best score</span>
                </div>
                <div>
                  <strong>{studiedBookCount}</strong>
                  <span>Books studied</span>
                </div>
                <div>
                  <strong>{streakData.current || 0}</strong>
                  <span>Daily streak</span>
                </div>
              </div>

              <div className="dashboard-tools">
                <button className="secondary-button" onClick={() => openPage("profile")}>View Profile</button>
              </div>

              <div className="accuracy-list">
                <h4>Accuracy by book</h4>
                {bookAccuracy.length === 0 ? (
                  <p>Complete a quiz to see your accuracy by book.</p>
                ) : bookAccuracy.slice(0, 6).map((item) => (
                  <div className="accuracy-row" key={item.book}>
                    <span>{item.book}</span>
                    <strong>{item.answered ? Math.round((item.correct / item.answered) * 100) : 0}% · {item.answered} questions</strong>
                  </div>
                ))}
              </div>

              <div className="badge-row">
                <h4>Achievements</h4>
                {badges.length === 0 ? <p>Your first achievement is waiting.</p> : badges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
            </section>
          </>
        )}

        {/* =====================
            BOOK SELECTION
        ===================== */}

        {page === "books" && (
          <>
            <button
              className="back-button"
              onClick={goBack}
            >
              Back
            </button>

            <div className="selection-heading">
              <span className="testament-label">
                {selectedTestament ===
                "old"
                  ? "OLD TESTAMENT"
                  : "NEW TESTAMENT"}
              </span>

              <h2>
                Choose a Book
              </h2>

              <p>
                Select the book you
                want to take your quiz
                from.
              </p>
            </div>

            <div className="books-grid">
              {books.map((book) => (
                <button
                  key={book}
                  className={`book-button ${
                    selectedBook ===
                    book
                      ? "selected-book"
                      : ""
                  }`}
                  onClick={() =>
                    chooseBook(book)
                  }
                >
                  {book}
                </button>
              ))}
            </div>

            {selectedBook && (
              <div className="book-selected-box">
                <div className="selected-book-info">
                  <p>
                    You selected
                  </p>

                  <h3>
                    {selectedBook}
                  </h3>
                </div>

                <button
                  className="continue-button"
                  onClick={
                    continueToSetup
                  }
                >
                  Continue
                </button>
              </div>
            )}
          </>
        )}

        {/* =====================
            QUIZ SETUP
        ===================== */}

        {page === "setup" && (
          <>
            <button
              className="back-button"
              onClick={goBack}
            >
              Back
            </button>

            <div className="selection-heading">
              <span className="testament-label">
                QUIZ
              </span>

              <h2>
                {selectedBook}
              </h2>

              <p>
                Set up your quiz
                before you begin.
              </p>
            </div>

            <div className="setup-card">
              <div className="setup-section">
                <h3>
                  Number of Questions
                </h3>

                <p>
                  Choose how many
                  questions you want.
                </p>

                <div className="question-options">
                  {[
                    15,
                    20,
                    30,
                    40,
                    50,
                    60,
                  ].map((number) => (
                    <button
                      key={number}
                      className={
                        questionCount ===
                        number
                          ? "setup-option selected-option"
                          : "setup-option"
                      }
                      onClick={() =>
                        setQuestionCount(
                          number
                        )
                      }
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>

              <div className="setup-section">
                <h3>
                  Time Limit
                </h3>

                <p>
                  Choose how much time
                  you want for the quiz.
                </p>

                <div className="time-options">
                  {[
                    "5 Minutes",
                    "10 Minutes",
                    "15 Minutes",
                    "20 Minutes",
                    "30 Minutes",
                  ].map((time) => (
                    <button
                      key={time}
                      className={
                        timeLimit === time
                          ? "setup-option selected-option"
                          : "setup-option"
                      }
                      onClick={() =>
                        chooseTime(time)
                      }
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="setup-summary">
                <div>
                  <span>Book</span>

                  <strong>
                    {selectedBook}
                  </strong>
                </div>

                <div>
                  <span>
                    Questions
                  </span>

                  <strong>
                    {questionCount ||
                      "Not selected"}
                  </strong>
                </div>

                <div>
                  <span>Time</span>

                  <strong>
                    {timeLimit ||
                      "Not selected"}
                  </strong>
                </div>
              </div>

              <button
                className="start-quiz-button"
                onClick={startQuiz}
                disabled={isLoadingQuiz}
              >
                {isLoadingQuiz
                  ? "Loading Questions..."
                  : "Start Quiz"}
              </button>
            </div>
          </>
        )}

        {/* =====================
            QUESTIONS
        ===================== */}

        {page === "questions" &&
          currentQuizQuestion && (
            <div className="quiz-container">
              <div className="quiz-top">
                <span>
                  {selectedBook}
                </span>

                <span>
                  Question{" "}
                  {currentQuestion + 1}{" "}
                  of {questions.length}
                </span>

                <span
                  className="timer"
                  aria-live="polite"
                  aria-label={`Time remaining ${formatTime(timeLeft)}`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>

              <div className="progress-container">
                <div className="progress-info">
                  <span>
                    Quiz Progress
                  </span>

                  <span>
                    {Math.round(
                      progress
                    )}
                    %
                  </span>
                </div>

                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label="Quiz progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={Math.round(progress)}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div
                className="question-navigator"
                aria-label="Question navigator"
              >
                <div className="question-navigator-header">
                  <span>Questions</span>
                  <span>
                    {lockedQuestions.filter(Boolean).length} of {questions.length} answered
                  </span>
                </div>

                <div className="question-navigator-grid">
                  {questions.map((question, index) => {
                    const isCurrent = index === currentQuestion;
                    const isLocked = lockedQuestions[index];
                    const hasAnswer = answers[index] !== null;

                    return (
                      <button
                        key={`${index}-${question.question}`}
                        className={`question-number${isCurrent ? " current" : ""}${isLocked ? " completed" : ""}${hasAnswer && !isLocked ? " selected" : ""}`}
                        onClick={() => goToQuestion(index)}
                        aria-label={`Go to question ${index + 1}${isLocked ? ", answered" : ", unanswered"}`}
                        aria-current={isCurrent ? "step" : undefined}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                className="quiz-card"
                aria-labelledby="current-question"
              >
                <div className="question-label">
                  QUESTION{" "}
                  {currentQuestion + 1}
                </div>

                <h2 id="current-question">
                  {
                    currentQuizQuestion.question
                  }
                </h2>

                <div className="options">
                  {currentQuizQuestion.options.map(
                    (option, index) => {
                      const selectedAnswer =
                        answers[
                          currentQuestion
                        ];

                      const isSelected =
                        selectedAnswer ===
                        option;

                      const isLocked =
                        lockedQuestions[
                          currentQuestion
                        ];

                      return (
                        <button
                          key={`${index}-${option}`}
                          className={
                            isSelected
                              ? "selected"
                              : ""
                          }
                          aria-pressed={isSelected}
                          aria-label={`Answer ${String.fromCharCode(
                            65 + index
                          )}: ${option}`}
                          onClick={() =>
                            selectAnswer(
                              option
                            )
                          }
                          disabled={
                            isLocked
                          }
                        >
                          <span className="option-letter">
                            {String.fromCharCode(
                              65 + index
                            )}
                          </span>

                          <span>
                            {option}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>

                {lockedQuestions[
                  currentQuestion
                ] && (
                  <div className="answer-feedback">
                    <p className="answer-locked-message">
                      This answer is locked.
                    </p>

                    <p className="quiz-correct-answer">
                      <strong>Correct answer:</strong>{" "}
                      {currentQuizQuestion.answer}
                    </p>

                    {answers[currentQuestion] !==
                      currentQuizQuestion.answer &&
                      verseInfo && (
                        <p className="quiz-explanation">
                          <strong>Why this is correct:</strong>{" "}
                          {verseInfo.explanation}
                        </p>
                      )}

                    {currentQuizQuestion.reference && (
                      <p className="quiz-reference">
                        <strong>Study reference:</strong>{" "}
                        {currentQuizQuestion.reference}
                      </p>
                    )}

                    {verseInfo && (
                      <div className="verse-box">
                        <p className="verse-header">
                          <strong>Verse text:</strong>
                        </p>
                        <p className="verse-text">
                          {verseInfo.text}
                        </p>
                        <p className="verse-explanation">
                          <strong>What it means:</strong>{" "}
                          {verseInfo.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="quiz-navigation">
                  <button
                    className="previous-button"
                    onClick={
                      previousQuestion
                    }
                    disabled={
                      currentQuestion === 0
                    }
                  >
                    Previous
                  </button>

                  <button
                    className="skip-button"
                    onClick={
                      skipQuestion
                    }
                  >
                    Skip
                  </button>

                  <button
                    className="next-button"
                    onClick={
                      nextQuestion
                    }
                  >
                    {currentQuestion ===
                    questions.length - 1
                      ? "Finish Quiz"
                      : "Next"}
                  </button>
                </div>
              </div>
            </div>
          )}

        {/* =====================
            RESULTS
        ===================== */}

        {page === "results" && (
          <div className="quiz-container">
            <div className="result-card">
              <p className="result-small-title">
                QUIZ COMPLETE
              </p>

              <h2>
                {selectedBook}
              </h2>

              <div className="score-display">
                <div className="score-number">
                  {finalScore}

                  <span>
                    {" "}
                    / {questions.length}
                  </span>
                </div>

                <div className="percentage">
                  {percentage}%
                </div>
              </div>

              <div className="result-divider"></div>

              <div className="encouragement-box">
                <p className="encouragement-label">
                  A WORD FOR YOU
                </p>

                <h3>
                  {encouragement.title}
                </h3>

                <p className="encouragement-message">
                  {
                    encouragement.message
                  }
                </p>

                <div className="encouragement-scripture">
                  <p>
                    {
                      encouragement.verse
                    }
                  </p>

                  <span>
                    {
                      encouragement.reference
                    }
                  </span>
                </div>
              </div>

              <div className="result-actions">
                <button
                  className="continue-button"
                  onClick={() => {
                    setPage("review");
                    scrollToTop();
                  }}
                >
                  Review Answers
                </button>

                <button
                  className="start-quiz-button"
                  onClick={restartQuiz}
                >
                  Retake Quiz
                </button>

                <button
                  className="back-button"
                  onClick={goHome}
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =====================
            REVIEW ANSWERS
        ===================== */}

        {page === "review" && (
          <div className="quiz-container">
            <button
              className="back-button"
              onClick={goBack}
            >
              {reviewingHistory
                ? "Back to History"
                : "Back to Results"}
            </button>

            <div className="selection-heading">
              <span className="testament-label">
                REVIEW
              </span>

              <h2>
                {selectedBook}
              </h2>

              <p>
                Review your answers and
                learn from the questions
                you missed.
              </p>
            </div>

            <div className="review-list">
              {questions.map(
                (question, index) => {
                  const userAnswer =
                    answers[index];

                  const isCorrect =
                    userAnswer ===
                    question.answer;

                  const wasSkipped =
                    userAnswer === null;

                  return (
                    <div
                      className="review-card"
                      key={index}
                    >
                      <div className="question-label">
                        QUESTION{" "}
                        {index + 1}
                      </div>

                      <h3>
                        {question.question}
                      </h3>

                      <p>
                        <strong>
                          Your answer:
                        </strong>{" "}
                        {wasSkipped
                          ? "Not answered"
                          : userAnswer}
                      </p>

                      <p>
                        <strong>
                          Correct answer:
                        </strong>{" "}
                        {question.answer}
                      </p>

                      {question.reference && (
                        <p className="answer-reference">
                          <strong>
                            Reference:
                          </strong>{" "}
                          {
                            question.reference
                          }
                        </p>
                      )}

                      {!isCorrect &&
                        question.reference &&
                        publicDomainVerseNotes[
                          question.reference
                        ] && (
                          <div className="review-verse-box">
                            <p>
                              <strong>
                                Why this answer is correct:
                              </strong>{" "}
                              {
                                publicDomainVerseNotes[
                                  question.reference
                                ].explanation
                              }
                            </p>
                          </div>
                        )}

                      {question.reference &&
                        publicDomainVerseNotes[
                          question.reference
                        ] && (
                          <div className="review-verse-box">
                            <p>
                              <strong>
                                Full verse text:
                              </strong>
                            </p>
                            <p>
                              {
                                publicDomainVerseNotes[
                                  question.reference
                                ].text
                              }
                            </p>
                            <p>
                              <strong>
                                What it is talking about:
                              </strong>{" "}
                              {
                                publicDomainVerseNotes[
                                  question.reference
                                ].explanation
                              }
                            </p>
                          </div>
                        )}

                      <p
                        className={
                          isCorrect
                            ? "review-correct"
                            : "review-wrong"
                        }
                      >
                        {isCorrect
                          ? "Correct"
                          : wasSkipped
                            ? "Skipped"
                            : "Wrong"}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            <button
              className="start-quiz-button"
              onClick={restartQuiz}
            >
              Take Quiz Again
            </button>
          </div>
        )}

        {page === "profile" && (
          <div className="quiz-container feature-page">
            <button className="back-button" onClick={goHome}>Back Home</button>
            <div className="selection-heading"><span className="testament-label">PROFILE</span><h2>Your Study Profile</h2><p>Track your growth on this device.</p></div>
            <div className="profile-card"><label htmlFor="profile-name">Your name</label><input id="profile-name" value={profile.name} onChange={(event) => saveProfile({ ...profile, name: event.target.value })} /><label className="sound-toggle"><input type="checkbox" checked={profile.soundEnabled} onChange={(event) => saveProfile({ ...profile, soundEnabled: event.target.checked })} /> Enable quiz sounds</label></div>
            <div className="dashboard-stats profile-stats"><div><strong>{completedQuizCount}</strong><span>Quizzes</span></div><div><strong>{totalAnswered}</strong><span>Answered</span></div><div><strong>{overallAccuracy}%</strong><span>Accuracy</span></div></div>
            <div className="badge-row"><h4>Achievements</h4>{badges.length ? badges.map((badge) => <span key={badge}>{badge}</span>) : <p>Complete a quiz to unlock achievements.</p>}</div>
          </div>
        )}

        {/* =====================
            QUIZ HISTORY
        ===================== */}

        {page === "history" && (
          <div className="quiz-container">
            <button
              className="back-button"
              onClick={goBack}
            >
              Back
            </button>

            <div className="selection-heading">
              <span className="testament-label">
                HISTORY
              </span>

              <h2>
                Quiz History
              </h2>

              <p>
                Your completed Bible
                quizzes are saved on
                this device.
              </p>
            </div>

            {quizHistory.length === 0 ? (
              <div className="result-card">
                <p>
                  You have not completed
                  any quizzes yet.
                </p>
              </div>
            ) : (
              <>
                <div className="history-list">
                  {quizHistory.map(
                    (item) => (
                      <div
                        className="history-card"
                        key={item.id}
                      >
                        <h3>
                          {item.book}
                        </h3>

                        <p>
                          <strong>
                            Score:
                          </strong>{" "}
                          {item.score}/
                          {item.total}
                        </p>

                        <p>
                          <strong>
                            Percentage:
                          </strong>{" "}
                          {item.percentage}%
                        </p>

                        <p>
                          <strong>
                            Questions:
                          </strong>{" "}
                          {item.total}
                        </p>

                        <p>
                          <strong>
                            Time:
                          </strong>{" "}
                          {item.timeLimit}
                        </p>

                        <p>
                          <strong>
                            Date:
                          </strong>{" "}
                          {item.date}
                        </p>

                        <p className="history-read-only">
                          Completed quiz record
                        </p>

                        <button
                          className="history-view-button"
                          onClick={() => viewHistoryAnswers(item)}
                        >
                          View Answers
                        </button>
                      </div>
                    )
                  )}
                </div>

                <button
                  className="back-button"
                  onClick={clearHistory}
                >
                  Clear History
                </button>
              </>
            )}
          </div>
        )}

      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>Study the Word. Grow in faith. Keep learning.</p>
          <span>Bible Quiz</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
