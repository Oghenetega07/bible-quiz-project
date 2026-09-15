import { useEffect, useState } from "react";
import "./App.css";

/* =========================
   OLD TESTAMENT IMPORTS
========================= */

import genesisQuestions from "./data/oldtestament/genesis";
import exodusQuestions from "./data/oldtestament/exodus";
import leviticusQuestions from "./data/oldtestament/leviticus";
import numbersQuestions from "./data/oldtestament/numbers";
import deuteronomyQuestions from "./data/oldtestament/deuteronomy";
import joshuaQuestions from "./data/oldtestament/joshua";
import judgesQuestions from "./data/oldtestament/judges";
import ruthQuestions from "./data/oldtestament/ruth";
import firstSamuelQuestions from "./data/oldtestament/1Samuel";
import secondSamuelQuestions from "./data/oldtestament/2Samuel";
import firstKingsQuestions from "./data/oldtestament/1kings";
import secondKingsQuestions from "./data/oldtestament/2kings";
import firstChroniclesQuestions from "./data/oldtestament/1chronicles";
import secondChroniclesQuestions from "./data/oldtestament/2chronicles";
import ezraQuestions from "./data/oldtestament/ezra";
import nehemiahQuestions from "./data/oldtestament/nehemiah";
import estherQuestions from "./data/oldtestament/esther";
import jobQuestions from "./data/oldtestament/job";
import psalmsQuestions from "./data/oldtestament/psalms";
import proverbsQuestions from "./data/oldtestament/proverbs";
import ecclesiastesQuestions from "./data/oldtestament/ecclesiastes";
import songOfSolomonQuestions from "./data/oldtestament/songofsolomon";
import isaiahQuestions from "./data/oldtestament/isaiah";
import jeremiahQuestions from "./data/oldtestament/jeremiah";
import lamentationsQuestions from "./data/oldtestament/lamentations";
import ezekielQuestions from "./data/oldtestament/ezekiel";
import danielQuestions from "./data/oldtestament/daniel";
import hoseaQuestions from "./data/oldtestament/hosea";
import joelQuestions from "./data/oldtestament/joel";
import amosQuestions from "./data/oldtestament/amos";
import obadiahQuestions from "./data/oldtestament/obadiah";
import jonahQuestions from "./data/oldtestament/jonah";
import micahQuestions from "./data/oldtestament/micah";
import nahumQuestions from "./data/oldtestament/nahum";
import habakkukQuestions from "./data/oldtestament/habakkuk";
import zephaniahQuestions from "./data/oldtestament/zephaniah";
import haggaiQuestions from "./data/oldtestament/haggai";
import zechariahQuestions from "./data/oldtestament/zechariah";
import malachiQuestions from "./data/oldtestament/malachi";

/* =========================
   NEW TESTAMENT IMPORTS
========================= */

import matthewQuestions from "./data/newtestament/matthew";
import markQuestions from "./data/newtestament/mark";
import lukeQuestions from "./data/newtestament/luke";
import johnQuestions from "./data/newtestament/john";
import actsQuestions from "./data/newtestament/acts";
import romansQuestions from "./data/newtestament/romans";
import firstCorinthiansQuestions from "./data/newtestament/1corinthians";
import secondCorinthiansQuestions from "./data/newtestament/2corinthians";
import galatiansQuestions from "./data/newtestament/galatians";
import ephesiansQuestions from "./data/newtestament/ephesians";
import philippiansQuestions from "./data/newtestament/philippians";
import colossiansQuestions from "./data/newtestament/colossians";
import firstThessaloniansQuestions from "./data/newtestament/1thessalonians";
import secondThessaloniansQuestions from "./data/newtestament/2thessalonians";
import firstTimothyQuestions from "./data/newtestament/1timothy";
import secondTimothyQuestions from "./data/newtestament/2timothy";
import titusQuestions from "./data/newtestament/titus";
import philemonQuestions from "./data/newtestament/philemon";
import hebrewsQuestions from "./data/newtestament/hebrews";
import jamesQuestions from "./data/newtestament/james";
import firstPeterQuestions from "./data/newtestament/1peter";
import secondPeterQuestions from "./data/newtestament/2peter";
import firstJohnQuestions from "./data/newtestament/1john";
import secondJohnQuestions from "./data/newtestament/2john";
import thirdJohnQuestions from "./data/newtestament/3john";
import judeQuestions from "./data/newtestament/jude";
import revelationQuestions from "./data/newtestament/revelation";

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

/* =========================
   QUESTION BANKS
========================= */

const questionBanks = {
  Genesis: genesisQuestions,
  Exodus: exodusQuestions,
  Leviticus: leviticusQuestions,
  Numbers: numbersQuestions,
  Deuteronomy: deuteronomyQuestions,
  Joshua: joshuaQuestions,
  Judges: judgesQuestions,
  Ruth: ruthQuestions,
  "1 Samuel": firstSamuelQuestions,
  "2 Samuel": secondSamuelQuestions,
  "1 Kings": firstKingsQuestions,
  "2 Kings": secondKingsQuestions,
  "1 Chronicles": firstChroniclesQuestions,
  "2 Chronicles": secondChroniclesQuestions,
  Ezra: ezraQuestions,
  Nehemiah: nehemiahQuestions,
  Esther: estherQuestions,
  Job: jobQuestions,
  Psalms: psalmsQuestions,
  Proverbs: proverbsQuestions,
  Ecclesiastes: ecclesiastesQuestions,
  "Song of Solomon": songOfSolomonQuestions,
  Isaiah: isaiahQuestions,
  Jeremiah: jeremiahQuestions,
  Lamentations: lamentationsQuestions,
  Ezekiel: ezekielQuestions,
  Daniel: danielQuestions,
  Hosea: hoseaQuestions,
  Joel: joelQuestions,
  Amos: amosQuestions,
  Obadiah: obadiahQuestions,
  Jonah: jonahQuestions,
  Micah: micahQuestions,
  Nahum: nahumQuestions,
  Habakkuk: habakkukQuestions,
  Zephaniah: zephaniahQuestions,
  Haggai: haggaiQuestions,
  Zechariah: zechariahQuestions,
  Malachi: malachiQuestions,

  Matthew: matthewQuestions,
  Mark: markQuestions,
  Luke: lukeQuestions,
  John: johnQuestions,
  Acts: actsQuestions,
  Romans: romansQuestions,
  "1 Corinthians": firstCorinthiansQuestions,
  "2 Corinthians": secondCorinthiansQuestions,
  Galatians: galatiansQuestions,
  Ephesians: ephesiansQuestions,
  Philippians: philippiansQuestions,
  Colossians: colossiansQuestions,
  "1 Thessalonians": firstThessaloniansQuestions,
  "2 Thessalonians": secondThessaloniansQuestions,
  "1 Timothy": firstTimothyQuestions,
  "2 Timothy": secondTimothyQuestions,
  Titus: titusQuestions,
  Philemon: philemonQuestions,
  Hebrews: hebrewsQuestions,
  James: jamesQuestions,
  "1 Peter": firstPeterQuestions,
  "2 Peter": secondPeterQuestions,
  "1 John": firstJohnQuestions,
  "2 John": secondJohnQuestions,
  "3 John": thirdJohnQuestions,
  Jude: judeQuestions,
  Revelation: revelationQuestions,
};

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

/* =========================
   APP
========================= */

function App() {
  const [page, setPage] = useState("testaments");

  const [selectedTestament, setSelectedTestament] =
    useState("");

  const [selectedBook, setSelectedBook] =
    useState("");

  const [questionCount, setQuestionCount] =
    useState(null);

  const [timeLimit, setTimeLimit] =
    useState(null);

  const [questions, setQuestions] = useState([]);

  const [answers, setAnswers] = useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [timeLeft, setTimeLeft] = useState(0);

  /* =========================
     TESTAMENT
  ========================= */

  function chooseTestament(testament) {
    setSelectedTestament(testament);
    setSelectedBook("");
    setPage("books");
  }

  /* =========================
     BOOK
  ========================= */

  function chooseBook(book) {
    setSelectedBook(book);
  }

  function continueToSetup() {
    setQuestionCount(null);
    setTimeLimit(null);
    setPage("setup");
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
    }
  }

  /* =========================
     START QUIZ
  ========================= */

  function startQuiz() {
    if (!questionCount || !timeLimit) {
      alert(
        "Please select the number of questions and time limit."
      );

      return;
    }

    const bookQuestions =
      questionBanks[selectedBook];

    if (
      !bookQuestions ||
      bookQuestions.length === 0
    ) {
      alert(
        "No questions are available for this book."
      );

      return;
    }

    /* Randomize the questions */

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

    /* =========================
       BALANCE ANSWER POSITIONS

       0 = A
       1 = B
       2 = C
       3 = D
    ========================= */

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

    /* =========================
       PREPARE QUESTIONS
    ========================= */

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

          /*
            Protect the quiz if a question
            accidentally contains invalid options.
          */

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
              newOptions.push(
                correctAnswer
              );
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

    setCurrentQuestion(0);

    const minutes = parseInt(
      timeLimit,
      10
    );

    setTimeLeft(minutes * 60);

    setPage("questions");
  }

  /* =========================
     SELECT ANSWER
  ========================= */

  function selectAnswer(answer) {
    /*
      Once an answer has been selected,
      the user cannot change it.
    */

    if (
      answers[currentQuestion] !== null
    ) {
      return;
    }

    const updatedAnswers = [
      ...answers,
    ];

    updatedAnswers[currentQuestion] =
      answer;

    setAnswers(updatedAnswers);
  }

  /* =========================
     QUESTION NAVIGATION
  ========================= */

  function nextQuestion() {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );
    } else {
      finishQuiz();
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        (previous) => previous - 1
      );
    }
  }

  function skipQuestion() {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    setPage("results");
  }

  /* =========================
     SCORE
  ========================= */

  function calculateScore() {
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
  }

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

    setCurrentQuestion(0);

    setAnswers([]);

    setQuestions([]);

    setTimeLeft(0);
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

  /* =========================
     WEBSITE
  ========================= */

  return (
    <div className="quiz-page">

      {/* HEADER */}

      <header>
        <h1>BIBLE QUIZ</h1>
      </header>

      <main className="selection-container">

        {/* =====================
            TESTAMENT SELECTION
        ===================== */}

        {page === "testaments" && (
          <>
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

              {/* NUMBER OF QUESTIONS */}

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

              {/* TIME */}

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
                        setTimeLimit(time)
                      }
                    >
                      {time}
                    </button>
                  ))}

                </div>
              </div>

              {/* SUMMARY */}

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
              >
                Start Quiz
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

              {/* QUIZ TOP */}

              <div className="quiz-top">

                <span>
                  {selectedBook}
                </span>

                <span>
                  Question{" "}
                  {currentQuestion + 1}{" "}
                  of {questions.length}
                </span>

                <span className="timer">
                  {formatTime(timeLeft)}
                </span>

              </div>

              {/* PROGRESS */}

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

                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress}%`,
                    }}
                  ></div>

                </div>
              </div>

              {/* QUESTION CARD */}

              <div className="quiz-card">

                <div className="question-label">
                  QUESTION{" "}
                  {currentQuestion + 1}
                </div>

                <h2>
                  {
                    currentQuizQuestion.question
                  }
                </h2>

                {/* OPTIONS */}

                <div className="options">

                  {currentQuizQuestion.options.map(
                    (option, index) => {
                      const selectedAnswer =
                        answers[
                          currentQuestion
                        ];

                      const hasAnswered =
                        selectedAnswer !==
                        null;

                      const isCorrectOption =
                        option ===
                        currentQuizQuestion.answer;

                      const isWrongSelectedOption =
                        hasAnswered &&
                        selectedAnswer ===
                          option &&
                        !isCorrectOption;

                      let optionClass =
                        "";

                      if (
                        hasAnswered &&
                        isCorrectOption
                      ) {
                        optionClass =
                          "correct-answer";
                      } else if (
                        isWrongSelectedOption
                      ) {
                        optionClass =
                          "wrong-answer";
                      } else if (
                        selectedAnswer ===
                        option
                      ) {
                        optionClass =
                          "selected";
                      }

                      return (
                        <button
                          key={`${index}-${option}`}
                          className={
                            optionClass
                          }
                          onClick={() =>
                            selectAnswer(
                              option
                            )
                          }
                          disabled={
                            hasAnswered
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

                {/* =====================
                    WRONG ANSWER
                ===================== */}

                {answers[
                  currentQuestion
                ] !== null &&
                  answers[
                    currentQuestion
                  ] !==
                    currentQuizQuestion.answer && (
                    <div className="answer-feedback wrong-feedback">

                      <strong>
                        Correct answer:
                      </strong>{" "}

                      {
                        currentQuizQuestion.answer
                      }

                      {currentQuizQuestion.reference && (
                        <>
                          {" — "}

                          <span className="answer-reference">
                            {
                              currentQuizQuestion.reference
                            }
                          </span>
                        </>
                      )}

                    </div>
                  )}

                {/* =====================
                    CORRECT ANSWER
                ===================== */}

                {answers[
                  currentQuestion
                ] !== null &&
                  answers[
                    currentQuestion
                  ] ===
                    currentQuizQuestion.answer && (
                    <div className="answer-feedback correct-feedback">
                      Correct answer.
                    </div>
                  )}

                {/* =====================
                    NAVIGATION
                ===================== */}

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

              {/* SCORE */}

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

              {/* =====================
                  ENCOURAGEMENT
              ===================== */}

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

              {/* RETAKE */}

              <button
                className="start-quiz-button"
                onClick={restartQuiz}
              >
                Take Quiz Again
              </button>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;