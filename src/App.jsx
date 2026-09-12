import { useEffect, useState } from "react";
import "./App.css";

import genesisQuestions from "./data/oldTestament/genesis";
import exodusQuestions from "./data/oldTestament/exodus";
import leviticusQuestions from "./data/oldTestament/leviticus";
import numbersQuestions from "./data/oldTestament/numbers";
import deuteronomyQuestions from "./data/oldTestament/deuteronomy";
import joshuaQuestions from "./data/oldtestament/joshua";
import judgesQuestions from "./data/oldtestament/judges";
import ruthQuestions from "./data/oldtestament/ruth";
import firstSamuelQuestions from "./data/oldtestament/1samuel";
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
import hebrewsQuestions from ".//data/newtestament/hebrews";
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
   TEMPORARY QUESTIONS
========================= */

const temporaryQuestions = [
  {
    question:
      "Which quality is repeatedly emphasized as important in a person's relationship with God?",
    options: [
      "Wealth",
      "Human popularity",
      "Faithfulness",
      "Political influence",
    ],
    answer: "Faithfulness",
    reference: "General",
  },
  {
    question:
      "Which of these is most closely associated with obedience to God?",
    options: [
      "Following God's commands",
      "Seeking human praise",
      "Avoiding responsibility",
      "Depending entirely on personal wisdom",
    ],
    answer: "Following God's commands",
    reference: "General",
  },
  {
    question:
      "Which statement best describes the central purpose of Scripture?",
    options: [
      "To provide historical records only",
      "To reveal God's will and His redemptive work",
      "To teach political leadership",
      "To record every event in human history",
    ],
    answer: "To reveal God's will and His redemptive work",
    reference: "General",
  },
];

/* =========================
   QUESTION BANKS
========================= */

const questionBanks = {
  "Genesis": genesisQuestions,
  "Exodus": exodusQuestions,
  "Leviticus": leviticusQuestions,
  "Numbers": numbersQuestions, 
  "Deuteronomy": deuteronomyQuestions,
  "Joshua": joshuaQuestions,
  "Judges": judgesQuestions,
  "Ruth": ruthQuestions,
  "1 Samuel": firstSamuelQuestions,
  "2 Samuel": secondSamuelQuestions,
  "1 Kings": firstKingsQuestions,
  "2 Kings": secondKingsQuestions,
  "1 Chronicles": firstChroniclesQuestions,
  "2 Chronicles": secondChroniclesQuestions,
  "Ezra": ezraQuestions,
  "Nehemiah": nehemiahQuestions,
  "Esther": estherQuestions,
  "Job": jobQuestions,
  "Psalms": psalmsQuestions,
  "Proverbs": proverbsQuestions,
  "Ecclesiastes": ecclesiastesQuestions,
  "Song of Solomon": songOfSolomonQuestions,
  "Isaiah": isaiahQuestions,
  "Jeremiah": jeremiahQuestions,
  "Lamentations": lamentationsQuestions,
  "Ezekiel": ezekielQuestions,
  "Daniel": danielQuestions,
  "Hosea": hoseaQuestions,
  "Joel": joelQuestions,
  "Amos": amosQuestions,
  "Obadiah": obadiahQuestions,
  "Jonah": jonahQuestions,
  "Micah": micahQuestions,
  "Nahum": nahumQuestions,
  "Habakkuk": habakkukQuestions,
  "Zephaniah": zephaniahQuestions,
  "Haggai": haggaiQuestions,
  "Zechariah": zechariahQuestions,
  "Malachi": malachiQuestions,
  "Matthew": matthewQuestions,
  "Mark": markQuestions,
  "Luke": lukeQuestions,
  "John": johnQuestions,
  "Acts": actsQuestions,
  "Romans": romansQuestions,
  "1 Corinthians": firstCorinthiansQuestions,
  "2 Corinthians": secondCorinthiansQuestions,
  "Galatians": galatiansQuestions,
  "Ephesians": ephesiansQuestions,
  "Philippians": philippiansQuestions,
  "Colossians": colossiansQuestions,
  "1 Thessalonians": firstThessaloniansQuestions,
  "2 Thessalonians": secondThessaloniansQuestions,
  "1 Timothy": firstTimothyQuestions,
  "2 Timothy": secondTimothyQuestions,
  "Titus": titusQuestions,
  "Philemon": philemonQuestions,
  "Hebrews": hebrewsQuestions,
  "James": jamesQuestions,
  "1 Peter": firstPeterQuestions,
  "2 Peter": secondPeterQuestions,
  "1 John": firstJohnQuestions,
  "2 John": secondJohnQuestions,
  "3 John": thirdJohnQuestions,
  "Jude": judeQuestions,
  "Revelation": revelationQuestions
};

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

  function chooseTestament(testament) {
    setSelectedTestament(testament);
    setSelectedBook("");
    setPage("books");
  }

  function chooseBook(book) {
    setSelectedBook(book);
  }

  function continueToSetup() {
    setQuestionCount(null);
    setTimeLimit(null);
    setPage("setup");
  }

  function goBack() {
    if (page === "questions") {
      setPage("setup");
    } else if (page === "setup") {
      setPage("books");
    } else {
      setPage("testaments");
      setSelectedTestament("");
      setSelectedBook("");
    }
  }

  function startQuiz() {
    if (!questionCount || !timeLimit) {
      alert("Please select the number of questions and time limit.");
      return;
    }

    const bookQuestions =
      questionBanks[selectedBook] || temporaryQuestions;

    const shuffledQuestions = [...bookQuestions].sort(
      () => Math.random() - 0.5
    );

    const selectedQuestions = shuffledQuestions.slice(
      0,
      Math.min(questionCount, shuffledQuestions.length)
    );

    setQuestions(selectedQuestions);
    setAnswers(new Array(selectedQuestions.length).fill(null));
    setCurrentQuestion(0);

    const minutes = parseInt(timeLimit, 10);
    setTimeLeft(minutes * 60);

    setPage("questions");
  }

  function selectAnswer(answer) {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function skipQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    setPage("results");
  }

  function calculateScore() {
    let total = 0;

    answers.forEach((answer, index) => {
      if (
        answer &&
        questions[index] &&
        answer === questions[index].answer
      ) {
        total++;
      }
    });

    return total;
  }

  /* =========================
     TIMER
  ========================= */

  useEffect(() => {
    if (page !== "questions" || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [page, timeLeft]);

  useEffect(() => {
    if (
      page === "questions" &&
      timeLeft === 0 &&
      questions.length > 0
    ) {
      finishQuiz();
    }
  }, [page, timeLeft, questions.length]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  function restartQuiz() {
    setPage("setup");
    setCurrentQuestion(0);
    setAnswers([]);
    setQuestions([]);
    setTimeLeft(0);
  }

  const books =
    selectedTestament === "old"
      ? oldTestament
      : newTestament;

  const currentQuizQuestion =
    questions[currentQuestion];

  const finalScore = calculateScore();

  const percentage =
    questions.length > 0
      ? Math.round(
          (finalScore / questions.length) * 100
        )
      : 0;

  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  return (
    <div className="quiz-page">
      <header>
        <h1>BIBLE QUIZ</h1>
      </header>

      <main className="selection-container">

        {/* =========================
            TESTAMENT SELECTION
        ========================= */}

        {page === "testaments" && (
          <>
            <div className="selection-heading">
              <h2>Choose a Testament</h2>

              <p>
                Select where you want your Bible quiz to come from.
              </p>
            </div>

            <div className="testament-cards">

              <button
                className="testament-card"
                onClick={() => chooseTestament("old")}
              >
                <span className="card-number">
                  39
                </span>

                <div>
                  <h3>OLD TESTAMENT</h3>
                  <p>39 Books</p>
                </div>

              </button>

              <button
                className="testament-card"
                onClick={() => chooseTestament("new")}
              >
                <span className="card-number">
                  27
                </span>

                <div>
                  <h3>NEW TESTAMENT</h3>
                  <p>27 Books</p>
                </div>

              </button>

            </div>
          </>
        )}

        {/* =========================
            BOOK SELECTION
        ========================= */}

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
                {selectedTestament === "old"
                  ? "OLD TESTAMENT"
                  : "NEW TESTAMENT"}
              </span>

              <h2>Choose a Book</h2>

              <p>
                Select the book you want to take your quiz from.
              </p>

            </div>

            <div className="books-grid">

              {books.map((book) => (
                <button
                  key={book}
                  className={`book-button ${
                    selectedBook === book
                      ? "selected-book"
                      : ""
                  }`}
                  onClick={() => chooseBook(book)}
                >
                  {book}
                </button>
              ))}

            </div>

            {selectedBook && (
              <div className="book-selected-box">

                <p>You selected</p>

                <h3>{selectedBook}</h3>

                <button
                  className="continue-button"
                  onClick={continueToSetup}
                >
                  Continue
                </button>

              </div>
            )}
          </>
        )}

        {/* =========================
            QUIZ SETUP
        ========================= */}

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

              <h2>{selectedBook}</h2>

              <p>
                Set up your quiz before you begin.
              </p>

            </div>

            <div className="setup-card">

              <div className="setup-section">

                <h3>Number of Questions</h3>

                <p>
                  Choose how many questions you want.
                </p>

                <div className="question-options">

                  {[15, 20, 30, 40, 50, 60].map(
                    (number) => (
                      <button
                        key={number}
                        className={
                          questionCount === number
                            ? "setup-option selected-option"
                            : "setup-option"
                        }
                        onClick={() =>
                          setQuestionCount(number)
                        }
                      >
                        {number}
                      </button>
                    )
                  )}

                </div>

              </div>

              <div className="setup-section">

                <h3>Time Limit</h3>

                <p>
                  Choose how much time you want for the quiz.
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

              <div className="setup-summary">

                <div>
                  <span>Book</span>
                  <strong>{selectedBook}</strong>
                </div>

                <div>
                  <span>Questions</span>
                  <strong>
                    {questionCount || "Not selected"}
                  </strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>
                    {timeLimit || "Not selected"}
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

        {/* =========================
            QUESTIONS
        ========================= */}

        {page === "questions" &&
          currentQuizQuestion && (

            <div className="quiz-container">

              <div className="quiz-top">

                <span>{selectedBook}</span>

                <span>
                  Question {currentQuestion + 1} of{" "}
                  {questions.length}
                </span>

                <span className="timer">
                  ⏱ {formatTime(timeLeft)}
                </span>

              </div>

              <div className="progress-container">

                <div className="progress-info">

                  <span>Quiz Progress</span>

                  <span>
                    {Math.round(progress)}%
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

              <div className="quiz-card">

                <div className="question-label">
                  QUESTION {currentQuestion + 1}
                </div>

                <h2>
                  {currentQuizQuestion.question}
                </h2>

                <div className="options">

                  {currentQuizQuestion.options.map(
                    (option, index) => (

                      <button
                        key={option}
                        className={
                          answers[currentQuestion] === option
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          selectAnswer(option)
                        }
                      >

                        <span className="option-letter">
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        <span>{option}</span>

                      </button>

                    )
                  )}

                </div>

                <div className="quiz-navigation">

                  <button
                    className="previous-button"
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </button>

                  <button
                    className="skip-button"
                    onClick={skipQuestion}
                  >
                    Skip
                  </button>

                  <button
                    className="next-button"
                    onClick={nextQuestion}
                  >
                    {currentQuestion === questions.length - 1
                      ? "Finish Quiz"
                      : "Next"}
                  </button>

                </div>

              </div>

            </div>
          )}

        {/* =========================
            RESULTS
        ========================= */}

        {page === "results" && (

          <div className="quiz-container">

            <div className="result-card">

              <div className="result-icon">
                🏆
              </div>

              <h2>Quiz Complete!</h2>

              <p className="result-score">
                You scored{" "}
                <strong>
                  {finalScore} / {questions.length}
                </strong>
              </p>

              <p className="result-score">
                {percentage}%
              </p>

              <p className="result-message">
                You have completed your{" "}
                {selectedBook} Bible quiz.
              </p>

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