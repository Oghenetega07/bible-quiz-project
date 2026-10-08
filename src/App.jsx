import{useCallback,useEffect,useMemo,useRef,useState}from"react";import publicDomainVerseNotes from"./data/publicDomainVerseNotes";import"./App.css";

const TROPHY_DEFINITIONS=[
{id:"first-steps",name:"First Steps",description:"Complete your first quiz."},
{id:"bronze-scholar",name:"Bronze Scholar",description:"Score at least 60% in one quiz."},
{id:"silver-scribe",name:"Silver Scribe",description:"Score at least 75% in one quiz."},
{id:"gold-steward",name:"Gold Steward",description:"Score at least 90% in one quiz."},
{id:"perfect-score",name:"Perfect Score",description:"Score 100% in one quiz."},
{id:"five-book-journey",name:"Five-Book Journey",description:"Complete quizzes from five Bible books."},
{id:"testament-explorer",name:"Testament Explorer",description:"Complete a quiz from both Testaments."},
{id:"daily-faithfulness",name:"Daily Faithfulness",description:"Build a three-day study streak."},
{id:"book-master",name:"Book Master",description:"Complete a 120-question book quiz with at least 80%."}
];

const TOPIC_RULES=[
["Creation",/creat|beginning|earth|heaven|garden|adam|eve/i],
["Faith",/faith|believ|trust|hope/i],
["Prayer",/pray|prayer|ask|supplication/i],
["Leadership",/king|judge|leader|rule|throne|priest/i],
["Prophecy",/prophet|prophecy|vision|dream|foretell/i],
["Miracles",/miracle|heal|blind|leper|raised|sea|manna/i],
["Covenant and Law",/covenant|command|law|statute|ordinance/i],
["Wisdom",/wisdom|wise|understanding|knowledge|proverb/i],
["Worship",/worship|praise|psalm|temple|altar|sacrifice/i],
["Jesus Christ",/jesus|christ|messiah|son of man|saviour|savior/i],
["Church and Discipleship",/church|disciple|apostle|ministry|gospel/i],
["Salvation",/salvation|saved|redeem|forgive|grace|mercy/i]
];

const oldTestament=[
"Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
"1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
"Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon",
"Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
"Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"
];

const newTestament=[
"Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians",
"Galatians","Ephesians","Philippians","Colossians","1 Thessalonians",
"2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James",
"1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"
];

const allBibleBooks=[...oldTestament,...newTestament];

const questionBankLoaders=import.meta.glob(
["./data/oldtestament/*.js","./data/newtestament/*.js"],
{import:"default"}
);

function safeLoad(key,fallback){
try{
const value=localStorage.getItem(key);
return value?JSON.parse(value):fallback;
}catch(error){
console.error(`Could not load ${key}:`,error);
return fallback;
}
}

function safeSave(key,value){
try{
localStorage.setItem(key,JSON.stringify(value));
return true;
}catch(error){
console.error(`Could not save ${key}:`,error);
return false;
}
}

function questionKey(question){
const source=`${question.reference||""}|${question.question||""}`;
let hash=2166136261;
for(let index=0;index<source.length;index+=1){
hash^=source.charCodeAt(index);
hash=Math.imul(hash,16777619);
}
return`question-${(hash>>>0).toString(36)}`;
}

function getQuestionTopic(question){
const content=`${question.question||""} ${question.answer||""}`;
const match=TOPIC_RULES.find(([,pattern])=>pattern.test(content));
return match?match[0]:"Bible Knowledge";
}

function getDateKey(value=new Date()){
const date=value instanceof Date?value:new Date(value);
if(Number.isNaN(date.getTime()))return"";
return`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}

function getTodayKey(){
return getDateKey(new Date());
}

function getStartOfWeek(){
const now=new Date();
const distance=now.getDay()===0?6:now.getDay()-1;
const start=new Date(now);
start.setDate(now.getDate()-distance);
start.setHours(0,0,0,0);
return start;
}

function shuffleArray(items,random=Math.random){
const shuffled=[...items];
for(let index=shuffled.length-1;index>0;index-=1){
const randomIndex=Math.floor(random()*(index+1));
[shuffled[index],shuffled[randomIndex]]=[shuffled[randomIndex],shuffled[index]];
}
return shuffled;
}

function createSeededRandom(seed){
let value=seed>>>0;
return()=>{
value+=0x6D2B79F5;
let result=value;
result=Math.imul(result^(result>>>15),result|1);
result^=result+Math.imul(result^(result>>>7),result|61);
return((result^(result>>>14))>>>0)/4294967296;
};
}

function createChallengeSeed(){
if(globalThis.crypto?.getRandomValues){
return globalThis.crypto.getRandomValues(new Uint32Array(1))[0]||1;
}
return(Math.floor(Math.random()*4294967295)>>>0)||1;
}

function readChallengeFromUrl(){
const params=new URLSearchParams(window.location.search);
const seed=Number(params.get("seed"));
const count=Number(params.get("n"));
const minutes=Number(params.get("m"));
const book=params.get("book");
if(params.get("bq")!=="1"||!allBibleBooks.includes(book)||
!Number.isInteger(seed)||seed<1||seed>4294967295||
!Number.isInteger(count)||count<1||count>120||
!Number.isInteger(minutes)||minutes<0||minutes>30){
return null;
}
const score=Number(params.get("score"));
const total=Number(params.get("total"));
return{
book,
count,
minutes,
study:params.get("s")==="1",
seed,
result:Number.isInteger(score)&&Number.isInteger(total)&&total>0
?{name:params.get("player")||"A friend",score,total,percentage:Math.round((score/total)*100)}
:null,
opponentScore:Number(params.get("opponentScore")),
opponentTotal:Number(params.get("opponentTotal")),
opponentName:params.get("opponent")||""
};
}

function createChallengeUrl(challenge){
const url=new URL(window.location.href);
url.search="";
url.searchParams.set("bq","1");
url.searchParams.set("book",challenge.book);
url.searchParams.set("n",String(challenge.count));
url.searchParams.set("m",String(challenge.minutes));
url.searchParams.set("s",challenge.study?"1":"0");
url.searchParams.set("seed",String(challenge.seed));
if(challenge.opponent&&challenge.opponentTotal){
url.searchParams.set("opponent",challenge.opponent.name);
url.searchParams.set("opponentScore",String(challenge.opponent.score));
url.searchParams.set("opponentTotal",String(challenge.opponent.total));
}
if(challenge.result){
url.searchParams.set("player",challenge.result.name);
url.searchParams.set("score",String(challenge.result.score));
url.searchParams.set("total",String(challenge.result.total));
}
return url.toString();
}

function getQuestionBankLoader(book){
const fileName=book.toLowerCase().replaceAll(" ","");
return Object.entries(questionBankLoaders).find(([path])=>
path.toLowerCase().endsWith(`/${fileName}.js`)
)?.[1];
}

function getDailyChallengeBook(){
const dayNumber=Number(getTodayKey().replaceAll("-",""));
return allBibleBooks[dayNumber%allBibleBooks.length];
}

function getTimeUntilTomorrow(){
const now=new Date();
const tomorrow=new Date(now);
tomorrow.setDate(now.getDate()+1);
tomorrow.setHours(0,0,0,0);
const totalMinutes=Math.max(0,Math.ceil((tomorrow-now)/60000));
return`${Math.floor(totalMinutes/60)}h ${String(totalMinutes%60).padStart(2,"0")}m`;
}

function loadStoredStreak(){
return safeLoad("bibleQuizStreak",{current:0,lastDate:""});
}

function downloadCanvas(canvas,filename){
const link=document.createElement("a");
link.download=filename;
link.href=canvas.toDataURL("image/png");
link.click();
}

function wrapCanvasText(context,text,x,y,maxWidth,lineHeight){
const words=text.split(/\s+/);
let line="";
let currentY=y;
words.forEach(word=>{
const testLine=line?`${line} ${word}`:word;
if(context.measureText(testLine).width>maxWidth&&line){
context.fillText(line,x,currentY);
line=word;
currentY+=lineHeight;
}else{
line=testLine;
}
});
if(line)context.fillText(line,x,currentY);
}

function downloadResultCard({name,book,score,total,percentage}){
const canvas=document.createElement("canvas");
canvas.width=1200;
canvas.height=630;
const context=canvas.getContext("2d");
const background=context.createLinearGradient(0,0,1200,630);
background.addColorStop(0,"#102a23");
background.addColorStop(1,"#244c3f");
context.fillStyle=background;
context.fillRect(0,0,1200,630);
context.strokeStyle="#be9345";
context.lineWidth=3;
context.strokeRect(38,38,1124,554);
context.fillStyle="#be9345";
context.font="700 24px Arial";
context.fillText("BIBLE QUIZ RESULT",80,105);
context.fillStyle="#f4f0e6";
context.font="400 68px Georgia";
wrapCanvasText(context,book,80,205,720,78);
context.font="400 30px Arial";
context.fillStyle="#d9d3c5";
context.fillText(name||"Bible Student",82,355);
context.fillText(`${score} of ${total} correct`,82,410);
context.beginPath();
context.arc(980,315,128,0,Math.PI*2);
context.strokeStyle="#be9345";
context.lineWidth=12;
context.stroke();
context.fillStyle="#f4f0e6";
context.font="700 66px Georgia";
context.textAlign="center";
context.fillText(`${percentage}%`,980,338);
context.textAlign="left";
context.font="400 22px Arial";
context.fillStyle="#aaa999";
context.fillText("Study the Word. Grow in faith. Keep learning.",82,540);
downloadCanvas(canvas,`${book.toLowerCase().replaceAll(" ","-")}-quiz-result.png`);
}

function downloadCertificate({name,book,percentage}){
const canvas=document.createElement("canvas");
canvas.width=1600;
canvas.height=1130;
const context=canvas.getContext("2d");
context.fillStyle="#f7f1e3";
context.fillRect(0,0,canvas.width,canvas.height);
context.strokeStyle="#173d32";
context.lineWidth=18;
context.strokeRect(35,35,1530,1060);
context.strokeStyle="#be9345";
context.lineWidth=4;
context.strokeRect(62,62,1476,1006);
context.textAlign="center";
context.fillStyle="#173d32";
context.font="700 28px Arial";
context.fillText("BIBLE QUIZ",800,155);
context.font="400 78px Georgia";
context.fillText("Certificate of Book Mastery",800,275);
context.font="400 30px Arial";
context.fillStyle="#59655f";
context.fillText("This certificate is presented to",800,385);
context.font="400 72px Georgia";
context.fillStyle="#173d32";
context.fillText(name||"Bible Student",800,490);
context.font="400 30px Arial";
context.fillStyle="#59655f";
context.fillText("for completing all 120 questions from",800,590);
context.font="400 70px Georgia";
context.fillStyle="#be9345";
context.fillText(book,800,700);
context.font="700 38px Arial";
context.fillStyle="#173d32";
context.fillText(`Final score: ${percentage}%`,800,800);
context.font="400 24px Arial";
context.fillStyle="#59655f";
context.fillText(new Date().toLocaleDateString(),800,965);
context.fillText("Awarded for careful study and faithful progress",800,1020);
downloadCanvas(canvas,`${book.toLowerCase().replaceAll(" ","-")}-mastery-certificate.png`);
}

function registerInstallableApp(){
let manifest=document.querySelector('link[rel="manifest"]');
if(!manifest){
manifest=document.createElement("link");
manifest.rel="manifest";
manifest.href=`${import.meta.env.BASE_URL}manifest.webmanifest`;
document.head.appendChild(manifest);
}
if("serviceWorker"in navigator&&import.meta.env.PROD){
navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(error=>
console.error("Could not register offline support:",error)
);
}
}

function App(){
const[challenge,setChallenge]=useState(()=>readChallengeFromUrl());
const[page,setPage]=useState(()=>challenge?"setup":"testaments");
const[challengeStatus,setChallengeStatus]=useState("");
const[selectedTestament,setSelectedTestament]=useState(()=>
challenge?(oldTestament.includes(challenge.book)?"old":"new"):""
);
const[selectedBook,setSelectedBook]=useState(()=>challenge?.book||"");
const[questionCount,setQuestionCount]=useState(()=>challenge?.count??null);
const[timeLimit,setTimeLimit]=useState(()=>
challenge?.minutes?`${challenge.minutes} Minutes`:null
);
const[questions,setQuestions]=useState([]);
const[answers,setAnswers]=useState([]);
const[currentQuestion,setCurrentQuestion]=useState(0);
const[timeLeft,setTimeLeft]=useState(0);
const[lockedQuestions,setLockedQuestions]=useState([]);
const[reviewingHistory,setReviewingHistory]=useState(false);
const[isLoadingQuiz,setIsLoadingQuiz]=useState(false);
const[isDailyChallenge,setIsDailyChallenge]=useState(false);
const[studyMode,setStudyMode]=useState(()=>challenge?.study||false);
const[quizMode,setQuizMode]=useState("standard");
const[showCompletionAnimation,setShowCompletionAnimation]=useState(false);
const[showReportForm,setShowReportForm]=useState(false);
const[reportReason,setReportReason]=useState("");
const[flashcardIndex,setFlashcardIndex]=useState(0);
const[flashcardRevealed,setFlashcardRevealed]=useState(false);
const[managerBook,setManagerBook]=useState("Genesis");
const[managerQuestions,setManagerQuestions]=useState([]);
const[managerSearch,setManagerSearch]=useState("");
const[managerStatus,setManagerStatus]=useState("");
const[editingQuestionIndex,setEditingQuestionIndex]=useState(null);
const[installPrompt,setInstallPrompt]=useState(null);
const finishingQuizRef=useRef(false);
const completionTimerRef=useRef(null);

const[profile,setProfile]=useState(()=>safeLoad("bibleQuizProfile",{
name:"Bible Student",
soundEnabled:false
}));

const[quizHistory,setQuizHistory]=useState(()=>
safeLoad("bibleQuizHistory",[])
);

const[activeSession,setActiveSession]=useState(()=>
safeLoad("bibleQuizActiveSession",null)
);

const[bookmarks,setBookmarks]=useState(()=>
safeLoad("bibleQuizBookmarks",[])
);

const[questionReports,setQuestionReports]=useState(()=>
safeLoad("bibleQuizReports",[])
);

const[weeklyGoal,setWeeklyGoal]=useState(()=>
safeLoad("bibleQuizWeeklyGoal",3)
);

const[displaySettings,setDisplaySettings]=useState(()=>
safeLoad("bibleQuizDisplaySettings",{
theme:"light",
textSize:"normal",
reducedMotion:false,
compactQuestions:false
})
);

const[questionOverrides,setQuestionOverrides]=useState(()=>
safeLoad("bibleQuizQuestionOverrides",{})
);

const[dailyChallengeDate,setDailyChallengeDate]=useState(()=>
localStorage.getItem("bibleQuizDailyChallengeDate")||""
);

const[timeUntilTomorrow,setTimeUntilTomorrow]=useState(getTimeUntilTomorrow);

const[questionForm,setQuestionForm]=useState({
question:"",
options:["","","",""],
answer:"",
reference:""
});

const scrollToTop=useCallback(()=>{
setTimeout(()=>{
window.scrollTo({top:0,behavior:"smooth"});
},50);
},[]);

const saveHistory=useCallback(history=>{
setQuizHistory(history);
safeSave("bibleQuizHistory",history);
},[]);

function saveProfile(nextProfile){
setProfile(nextProfile);
safeSave("bibleQuizProfile",nextProfile);
}

function openPage(nextPage){
setPage(nextPage);
scrollToTop();
}

useEffect(()=>{
registerInstallableApp();
const captureInstallPrompt=event=>{
event.preventDefault();
setInstallPrompt(event);
};
window.addEventListener("beforeinstallprompt",captureInstallPrompt);
return()=>window.removeEventListener("beforeinstallprompt",captureInstallPrompt);
},[]);

useEffect(()=>{
const countdown=setInterval(()=>{
setTimeUntilTomorrow(getTimeUntilTomorrow());
},60000);
return()=>clearInterval(countdown);
},[]);

useEffect(()=>{
return()=>{
if(completionTimerRef.current)clearTimeout(completionTimerRef.current);
};
},[]);

useEffect(()=>{safeSave("bibleQuizBookmarks",bookmarks);},[bookmarks]);
useEffect(()=>{safeSave("bibleQuizReports",questionReports);},[questionReports]);
useEffect(()=>{safeSave("bibleQuizWeeklyGoal",weeklyGoal);},[weeklyGoal]);
useEffect(()=>{safeSave("bibleQuizDisplaySettings",displaySettings);},[displaySettings]);
useEffect(()=>{safeSave("bibleQuizQuestionOverrides",questionOverrides);},[questionOverrides]);

useEffect(()=>{
if(page!=="questions"||questions.length===0)return;
const session={
selectedBook,
selectedTestament,
questionCount,
timeLimit,
questions,
answers,
lockedQuestions,
currentQuestion,
timeLeft,
studyMode,
quizMode,
isDailyChallenge,
savedAt:Date.now()
};
setActiveSession(session);
safeSave("bibleQuizActiveSession",session);
},[
answers,currentQuestion,isDailyChallenge,lockedQuestions,page,
questionCount,questions,quizMode,selectedBook,selectedTestament,
studyMode,timeLeft,timeLimit
]);

function scrollToStartButton(){
setTimeout(()=>{
document.querySelector(".start-quiz-button")?.scrollIntoView({
behavior:"smooth",
block:"center"
});
},100);
}

function chooseTestament(testament){
setSelectedTestament(testament);
setSelectedBook("");
setPage("books");
scrollToTop();
}

function chooseBook(book){
setIsDailyChallenge(false);
setQuizMode("standard");
setSelectedBook(book);
}

function continueToSetup(){
setQuestionCount(null);
setTimeLimit(null);
setStudyMode(false);
setPage("setup");
scrollToTop();
}

function goBack(){
if(page==="questions")setPage("setup");
else if(page==="setup")setPage("books");
else if(page==="books"){
setPage("testaments");
setSelectedTestament("");
setSelectedBook("");
}else if(page==="review"){
setPage(reviewingHistory?"history":"results");
}else if(page==="history"){
setPage("testaments");
}
scrollToTop();
}

function chooseTime(time){
setTimeLimit(time);
scrollToStartButton();
}

async function shareChallenge(includeResult=false){
const nextChallenge={
book:selectedBook,
count:questionCount||20,
minutes:studyMode?0:parseInt(timeLimit,10)||10,
study:studyMode,
seed:challenge?.seed||createChallengeSeed(),
result:includeResult?{
name:profile.name||"A friend",
score:finalScore,
total:questions.length,
percentage
}:null
};
const sharePayload=includeResult&&challenge?.result
?{...nextChallenge,opponent:challenge.result}
:nextChallenge;
setChallenge(sharePayload);
const url=createChallengeUrl(sharePayload);
try{
if(navigator.share){
await navigator.share({title:`${selectedBook} Bible Quiz Challenge`,text:includeResult?`${profile.name||"A friend"} scored ${finalScore}/${questions.length}. Can you beat it?`:`Take my ${selectedBook} Bible Quiz challenge!`,url});
setChallengeStatus("Challenge shared.");
return;
}
await navigator.clipboard.writeText(url);
setChallengeStatus(includeResult?"Result link copied. Send it to a friend!":"Invite link copied. Send it to a friend!");
}catch(error){
if(error.name==="AbortError")return;
const input=document.createElement("textarea");
input.value=url;
input.style.position="fixed";
input.style.opacity="0";
document.body.appendChild(input);
input.select();
const copied=document.execCommand("copy");
input.remove();
setChallengeStatus(copied?"Invite link copied. Send it to a friend!":"Could not copy the link. Please copy it from the address bar.");
}
}

async function loadQuestionBank(book){
if(Object.prototype.hasOwnProperty.call(questionOverrides,book)){
return questionOverrides[book];
}
const loader=getQuestionBankLoader(book);
return loader?await loader():null;
}

async function startQuiz(){
if(!questionCount||(!studyMode&&!timeLimit)){
alert(studyMode
?"Please select the number of questions."
:"Please select the number of questions and time limit."
);
return;
}

setReviewingHistory(false);
finishingQuizRef.current=false;
setIsLoadingQuiz(true);

let bookQuestions;
try{
bookQuestions=await loadQuestionBank(selectedBook);
}catch(error){
console.error(error);
setIsLoadingQuiz(false);
alert("This question bank could not be loaded. Please try again.");
return;
}

setIsLoadingQuiz(false);

if(!bookQuestions?.length){
alert("No questions are available for this book.");
return;
}

const random=challenge?.seed?createSeededRandom(challenge.seed):Math.random;
const shuffledQuestions=shuffleArray(bookQuestions,random);
const availableCount=Math.min(questionCount,shuffledQuestions.length);

if(availableCount<questionCount){
alert(`${selectedBook} currently has ${availableCount} questions available. This quiz will use all of them.`);
}

const selectedQuestions=shuffledQuestions.slice(0,availableCount);
const answerPositions=shuffleArray(
selectedQuestions.map((_,index)=>index%4),random
);

const preparedQuestions=selectedQuestions.map((question,index)=>{
const wrongOptions=question.options.filter(option=>option!==question.answer);

if(question.options.length!==4||wrongOptions.length!==3){
return{...question,options:shuffleArray(question.options,random)};
}

const options=[];
const shuffledWrong=shuffleArray(wrongOptions,random);
let wrongIndex=0;

for(let position=0;position<4;position+=1){
if(position===answerPositions[index]){
options.push(question.answer);
}else{
options.push(shuffledWrong[wrongIndex]);
wrongIndex+=1;
}
}

return{...question,options};
});

setQuestions(preparedQuestions);
setAnswers(new Array(preparedQuestions.length).fill(null));
setLockedQuestions(new Array(preparedQuestions.length).fill(false));
setCurrentQuestion(0);
setTimeLeft(studyMode?null:parseInt(timeLimit,10)*60);
setPage("questions");
scrollToTop();
}

function selectAnswer(answer){
if(lockedQuestions[currentQuestion])return;
const updated=[...answers];
updated[currentQuestion]=answer;
setAnswers(updated);
}

function lockCurrentAnswer(){
if(answers[currentQuestion]===null||lockedQuestions[currentQuestion])return;
setLockedQuestions(previous=>{
const updated=[...previous];
updated[currentQuestion]=true;
return updated;
});
}

function nextQuestion(){
lockCurrentAnswer();
setShowReportForm(false);
setReportReason("");
if(currentQuestion<questions.length-1){
setCurrentQuestion(previous=>previous+1);
scrollToTop();
}else{
finishQuiz();
}
}

function previousQuestion(){
lockCurrentAnswer();
setShowReportForm(false);
if(currentQuestion>0){
setCurrentQuestion(previous=>previous-1);
scrollToTop();
}
}

function skipQuestion(){
lockCurrentAnswer();
setShowReportForm(false);
if(currentQuestion<questions.length-1){
setCurrentQuestion(previous=>previous+1);
scrollToTop();
}else{
finishQuiz();
}
}

function goToQuestion(index){
if(index===currentQuestion)return;
lockCurrentAnswer();
setShowReportForm(false);
setCurrentQuestion(index);
scrollToTop();
}

const calculateScore=useCallback(()=>{
return answers.reduce((total,answer,index)=>
total+(answer!==null&&questions[index]&&answer===questions[index].answer?1:0)
,0);
},[answers,questions]);

const finishQuiz=useCallback(()=>{
if(!questions.length||finishingQuizRef.current)return;
finishingQuizRef.current=true;

const score=calculateScore();
const percentage=Math.round((score/questions.length)*100);

const historyItem={
id:`${Date.now()}-${Math.random()}`,
book:selectedBook,
testament:selectedTestament,
isDailyChallenge,
dateKey:getTodayKey(),
score,
total:questions.length,
percentage,
timeLimit:studyMode?"Study Mode":timeLimit,
mode:quizMode,
studyMode,
date:new Date().toLocaleString(),
completedAt:Date.now(),
questions:questions.map((question,index)=>({
id:questionKey(question),
question:question.question,
options:question.options,
answer:question.answer,
reference:question.reference||"",
topic:getQuestionTopic(question),
userAnswer:answers[index]||null
}))
};

saveHistory([historyItem,...quizHistory]);
setActiveSession(null);
localStorage.removeItem("bibleQuizActiveSession");

if(isDailyChallenge){
setDailyChallengeDate(historyItem.dateKey);
localStorage.setItem("bibleQuizDailyChallengeDate",historyItem.dateKey);

const previousDate=new Date();
previousDate.setDate(previousDate.getDate()-1);
const savedStreak=loadStoredStreak();

safeSave("bibleQuizStreak",{
current:savedStreak.lastDate===getDateKey(previousDate)
?savedStreak.current+1
:1,
lastDate:historyItem.dateKey
});
}

setShowCompletionAnimation(true);
completionTimerRef.current=setTimeout(()=>{
setShowCompletionAnimation(false);
setPage("results");
scrollToTop();
},650);
},[
answers,calculateScore,isDailyChallenge,questions,quizHistory,
quizMode,saveHistory,scrollToTop,selectedBook,selectedTestament,
studyMode,timeLimit
]);

useEffect(()=>{
if(page!=="questions"||studyMode||timeLeft===null)return;
const timer=setInterval(()=>{
setTimeLeft(previous=>previous<=1?0:previous-1);
},1000);
return()=>clearInterval(timer);
},[page,studyMode,timeLeft===null]);

useEffect(()=>{
if(page==="questions"&&!studyMode&&timeLeft===0&&questions.length){
finishQuiz();
}
},[page,timeLeft,questions.length,finishQuiz,studyMode]);

function formatTime(seconds){
const safe=Math.max(0,seconds);
return`${String(Math.floor(safe/60)).padStart(2,"0")}:${String(safe%60).padStart(2,"0")}`;
}

function restartQuiz(){
finishingQuizRef.current=false;
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

function goHome(){
finishingQuizRef.current=false;
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

function openHistory(){
setPage("history");
scrollToTop();
}

function viewHistoryAnswers(item){
setReviewingHistory(true);
setSelectedTestament(item.testament);
setSelectedBook(item.book);
setQuestions(item.questions);
setAnswers(item.questions.map(question=>question.userAnswer));
setLockedQuestions(new Array(item.questions.length).fill(true));
setCurrentQuestion(0);
setPage("review");
scrollToTop();
}

function startDailyChallenge(){
if(dailyChallengeDate===getTodayKey())return;
const book=getDailyChallengeBook();
setIsDailyChallenge(true);
setQuizMode("daily");
setStudyMode(false);
setSelectedTestament(oldTestament.includes(book)?"old":"new");
setSelectedBook(book);
setQuestionCount(20);
setTimeLimit("5 Minutes");
setPage("setup");
scrollToTop();
}

function resumeSavedQuiz(){
if(!activeSession?.questions?.length)return;

const elapsed=Math.floor(
(Date.now()-(activeSession.savedAt||Date.now()))/1000
);

const resumedTime=activeSession.studyMode
?null
:Math.max(0,(activeSession.timeLeft||0)-elapsed);

if(!activeSession.studyMode&&resumedTime===0){
setActiveSession(null);
localStorage.removeItem("bibleQuizActiveSession");
alert("The saved quiz has expired. Please begin a new one.");
return;
}

setSelectedBook(activeSession.selectedBook);
setSelectedTestament(activeSession.selectedTestament);
setQuestionCount(activeSession.questionCount);
setTimeLimit(activeSession.timeLimit);
setQuestions(activeSession.questions);
setAnswers(activeSession.answers);
setLockedQuestions(activeSession.lockedQuestions);
setCurrentQuestion(activeSession.currentQuestion);
setTimeLeft(resumedTime);
setStudyMode(Boolean(activeSession.studyMode));
setQuizMode(activeSession.quizMode||"standard");
setIsDailyChallenge(Boolean(activeSession.isDailyChallenge));
finishingQuizRef.current=false;
setPage("questions");
scrollToTop();
}

function startMistakePractice(){
const mistakes=quizHistory
.flatMap(item=>item.questions
.filter(question=>
question.userAnswer!==null&&question.userAnswer!==question.answer
)
.map(question=>({...question,sourceBook:item.book}))
)
.filter((question,index,items)=>
items.findIndex(item=>questionKey(item)===questionKey(question))===index
);

if(!mistakes.length){
alert("Complete a quiz and miss at least one question to use this mode.");
return;
}

const practiceQuestions=shuffleArray(mistakes)
.slice(0,Math.min(20,mistakes.length))
.map(question=>({...question,options:shuffleArray(question.options)}));

setSelectedBook("Mistake Practice");
setSelectedTestament("mixed");
setQuestionCount(practiceQuestions.length);
setTimeLimit("Study Mode");
setQuestions(practiceQuestions);
setAnswers(new Array(practiceQuestions.length).fill(null));
setLockedQuestions(new Array(practiceQuestions.length).fill(false));
setCurrentQuestion(0);
setTimeLeft(null);
setStudyMode(true);
setQuizMode("mistakes");
setIsDailyChallenge(false);
finishingQuizRef.current=false;
setPage("questions");
scrollToTop();
}

function toggleBookmark(question){
const id=questionKey(question);
if(bookmarks.some(bookmark=>bookmark.id===id)){
setBookmarks(previous=>previous.filter(bookmark=>bookmark.id!==id));
return;
}

setBookmarks(previous=>[{
id,
book:selectedBook,
question:question.question,
answer:question.answer,
reference:question.reference||"",
note:"",
savedAt:Date.now()
},...previous]);
}

function updateBookmarkNote(id,note){
setBookmarks(previous=>previous.map(bookmark=>
bookmark.id===id?{...bookmark,note}:bookmark
));
}

function submitQuestionReport(){
const question=questions[currentQuestion];
if(!question||!reportReason.trim())return;

setQuestionReports(previous=>[{
id:`${Date.now()}-${questionKey(question)}`,
questionId:questionKey(question),
book:selectedBook,
question:question.question,
reference:question.reference||"",
reason:reportReason.trim(),
status:"Open",
createdAt:Date.now()
},...previous]);

setReportReason("");
setShowReportForm(false);
}

async function installApp(){
if(!installPrompt){
alert("Use your browser's Install App option when it becomes available.");
return;
}
await installPrompt.prompt();
await installPrompt.userChoice;
setInstallPrompt(null);
}

function resetQuestionForm(){
setEditingQuestionIndex(null);
setQuestionForm({
question:"",
options:["","","",""],
answer:"",
reference:""
});
}

function editManagedQuestion(index){
const question=managerQuestions[index];
setEditingQuestionIndex(index);
setQuestionForm({
question:question.question,
options:[...question.options],
answer:question.answer,
reference:question.reference||""
});
}

function saveManagedQuestion(){
const cleanQuestion=questionForm.question.trim();
const cleanOptions=questionForm.options.map(option=>option.trim());
const cleanAnswer=questionForm.answer.trim();

if(
!cleanQuestion||
cleanOptions.some(option=>!option)||
new Set(cleanOptions).size!==4||
!cleanOptions.includes(cleanAnswer)
){
setManagerStatus(
"Enter a question, four different options, and select the correct answer."
);
return;
}

const question={
question:cleanQuestion,
options:cleanOptions,
answer:cleanAnswer,
reference:questionForm.reference.trim()
};

const updated=[...managerQuestions];

if(editingQuestionIndex===null)updated.unshift(question);
else updated[editingQuestionIndex]=question;

setManagerQuestions(updated);
setQuestionOverrides(previous=>({...previous,[managerBook]:updated}));
setManagerStatus("Question bank saved on this device.");
resetQuestionForm();
}

function deleteManagedQuestion(index){
if(!window.confirm("Delete this question from your local question bank?"))return;

const updated=managerQuestions.filter((_,itemIndex)=>itemIndex!==index);
setManagerQuestions(updated);
setQuestionOverrides(previous=>({...previous,[managerBook]:updated}));
setManagerStatus("Question removed from this device.");
resetQuestionForm();
}

async function resetManagedBook(){
const loader=getQuestionBankLoader(managerBook);
if(!loader)return;
const original=await loader();
const updatedOverrides={...questionOverrides};
delete updatedOverrides[managerBook];
setQuestionOverrides(updatedOverrides);
setManagerQuestions(original);
setManagerStatus("The original question bank has been restored.");
resetQuestionForm();
}

useEffect(()=>{
if(page!=="questionManager")return;

let cancelled=false;

async function loadManagedQuestions(){
setManagerStatus("Loading question bank...");
try{
const loaded=Object.prototype.hasOwnProperty.call(
questionOverrides,
managerBook
)
?questionOverrides[managerBook]
:await getQuestionBankLoader(managerBook)?.();

if(!cancelled){
setManagerQuestions(loaded||[]);
setManagerStatus(
loaded?.length
?`${loaded.length} questions loaded.`
:"No question bank was found for this book."
);
resetQuestionForm();
}
}catch(error){
console.error(error);
if(!cancelled)setManagerStatus("The question bank could not be loaded.");
}
}

loadManagedQuestions();
return()=>{cancelled=true};
},[managerBook,page]);

const books=selectedTestament==="old"?oldTestament:newTestament;
const currentQuizQuestion=questions[currentQuestion];
const verseEntries=Object.entries(publicDomainVerseNotes);
const finalScore=calculateScore();
const percentage=questions.length
?Math.round((finalScore/questions.length)*100)
:0;
const opponentPercentage=challenge?.opponentTotal
?Math.round((challenge.opponentScore/challenge.opponentTotal)*100)
:challenge?.result?.percentage;
const progress=questions.length
?((currentQuestion+1)/questions.length)*100
:0;

const dailyVerse=useMemo(()=>{
if(!verseEntries.length){
return{
reference:"",
text:"Your word is a lamp to my feet and a light to my path.",
explanation:"God’s Word gives guidance and wisdom."
};
}

const seed=getTodayKey()
.split("")
.reduce((total,character)=>total+character.charCodeAt(0),0);

const[reference,verse]=verseEntries[seed%verseEntries.length];
return{reference,...verse};
},[verseEntries.length]);

const verseInfo=currentQuizQuestion?.reference
?publicDomainVerseNotes[currentQuizQuestion.reference]
:null;

const completedQuizCount=quizHistory.length;
const averagePercentage=completedQuizCount
?Math.round(
quizHistory.reduce((total,item)=>total+item.percentage,0)/
completedQuizCount
)
:0;

const bestPercentage=completedQuizCount
?Math.max(...quizHistory.map(item=>item.percentage))
:0;

const studiedBookCount=new Set(
quizHistory
.filter(item=>allBibleBooks.includes(item.book))
.map(item=>item.book)
).size;

const totalAnswered=quizHistory.reduce((total,item)=>
total+item.questions.filter(question=>question.userAnswer!==null).length
,0);

const totalCorrect=quizHistory.reduce((total,item)=>
total+item.questions.filter(question=>question.userAnswer===question.answer).length
,0);

const overallAccuracy=totalAnswered
?Math.round((totalCorrect/totalAnswered)*100)
:0;

const streakData=loadStoredStreak();
const yesterday=new Date();
yesterday.setDate(yesterday.getDate()-1);

const currentStreak=[
getTodayKey(),
getDateKey(yesterday)
].includes(streakData.lastDate)
?streakData.current
:0;

const completedTestaments=new Set(
quizHistory
.filter(item=>allBibleBooks.includes(item.book))
.map(item=>item.testament)
);

const masteredBook=quizHistory.some(item=>
allBibleBooks.includes(item.book)&&
item.total>=120&&
item.percentage>=80
);

const unlockedTrophyIds=[
completedQuizCount>=1&&"first-steps",
bestPercentage>=60&&"bronze-scholar",
bestPercentage>=75&&"silver-scribe",
bestPercentage>=90&&"gold-steward",
bestPercentage===100&&"perfect-score",
studiedBookCount>=5&&"five-book-journey",
completedTestaments.has("old")&&
completedTestaments.has("new")&&
"testament-explorer",
currentStreak>=3&&"daily-faithfulness",
masteredBook&&"book-master"
].filter(Boolean);

const trophies=TROPHY_DEFINITIONS.filter(trophy=>
unlockedTrophyIds.includes(trophy.id)
);

const bookMastery=useMemo(()=>allBibleBooks.map(book=>{
const attempts=quizHistory.filter(item=>item.book===book);
const answeredIds=new Set();
const correctIds=new Set();

attempts.forEach(attempt=>{
attempt.questions.forEach(question=>{
if(question.userAnswer===null)return;
const id=question.id||questionKey(question);
answeredIds.add(id);
if(question.userAnswer===question.answer)correctIds.add(id);
});
});

const progress=Math.min(100,Math.round((correctIds.size/120)*100));
const best=attempts.length
?Math.max(...attempts.map(attempt=>attempt.percentage))
:0;

return{
book,
attempts:attempts.length,
correct:correctIds.size,
best,
progress,
status:
progress===100?"Mastered":
progress>=60?"Strong":
progress>=25?"Developing":
progress>0?"Started":
"Not started"
};
}),[quizHistory]);

const bookAccuracy=Object.values(
quizHistory.reduce((groups,item)=>{
const group=groups[item.book]||{
book:item.book,
correct:0,
answered:0
};

item.questions.forEach(question=>{
if(question.userAnswer!==null){
group.answered+=1;
if(question.userAnswer===question.answer)group.correct+=1;
}
});

groups[item.book]=group;
return groups;
},{})
).sort((first,second)=>second.answered-first.answered);

const weeklyQuizCount=quizHistory.filter(item=>{
const completedAt=item.completedAt||new Date(item.date).getTime();
return completedAt>=getStartOfWeek().getTime();
}).length;

const weeklyGoalProgress=Math.min(
100,
Math.round((weeklyQuizCount/Math.max(1,weeklyGoal))*100)
);

const studyCalendar=Array.from({length:35},(_,index)=>{
const date=new Date();
date.setHours(0,0,0,0);
date.setDate(date.getDate()-(34-index));
const dateKey=getDateKey(date);
const sessions=quizHistory.filter(item=>item.dateKey===dateKey);

return{
date,
dateKey,
sessions:sessions.length,
average:sessions.length
?Math.round(
sessions.reduce((sum,item)=>sum+item.percentage,0)/
sessions.length
)
:0
};
});

const flashcards=bookmarks.length
?bookmarks.map(bookmark=>({
id:bookmark.id,
front:bookmark.question,
back:bookmark.answer,
reference:bookmark.reference
}))
:verseEntries.slice(0,50).map(([reference,verse])=>({
id:reference,
front:verse.text,
back:verse.explanation,
reference
}));

const activeFlashcard=flashcards.length
?flashcards[flashcardIndex%flashcards.length]
:null;

const topicSummary=Object.values(
questions.reduce((groups,question,index)=>{
const topic=question.topic||getQuestionTopic(question);
const group=groups[topic]||{topic,total:0,correct:0};
group.total+=1;
if(answers[index]===question.answer)group.correct+=1;
groups[topic]=group;
return groups;
},{})
);

const mistakeQuestionCount=new Set(
quizHistory.flatMap(item=>item.questions
.filter(question=>
question.userAnswer!==null&&question.userAnswer!==question.answer
)
.map(question=>question.id||questionKey(question))
)
).size;

const filteredManagerQuestions=managerQuestions
.map((question,index)=>({question,index}))
.filter(({question})=>
`${question.question} ${question.reference||""}`
.toLowerCase()
.includes(managerSearch.trim().toLowerCase())
);

const currentQuestionBookmarked=currentQuizQuestion
?bookmarks.some(bookmark=>bookmark.id===questionKey(currentQuizQuestion))
:false;

const showCurrentFeedback=Boolean(
currentQuizQuestion&&(
lockedQuestions[currentQuestion]||
(studyMode&&answers[currentQuestion]!==null)
)
);

const certificateEligible=
allBibleBooks.includes(selectedBook)&&
questions.length>=120&&
percentage>=80;

const encouragement=
percentage>=80
?{
title:"YOU HAVE HIDDEN HIS WORD IN YOUR HEART",
message:"Your score reflects a strong knowledge of Scripture. Keep searching, learning, and living what you know.",
verse:"Your word is a lamp to my feet and a light to my path.",
reference:"Psalm 119:105"
}
:percentage>=60
?{
title:"KEEP GROWING IN THE WORD",
message:"Every question you missed is another invitation to go deeper.",
verse:"Grow in the grace and knowledge of our Lord and Savior Jesus Christ.",
reference:"2 Peter 3:18"
}
:percentage>=40
?{
title:"THERE IS MORE TO DISCOVER",
message:"Return to the passages you missed and discover what Scripture says.",
verse:"Open my eyes, that I may behold wondrous things out of your law.",
reference:"Psalm 119:18"
}
:{
title:"DON'T STOP HERE",
message:"Your score is not the most important thing. What matters is your willingness to learn.",
verse:"Your words were found, and I ate them, and your words became to me a joy.",
reference:"Jeremiah 15:16"
};

const rootClassName=[
"quiz-page",
`theme-${displaySettings.theme}`,
`text-${displaySettings.textSize}`,
displaySettings.reducedMotion?"reduce-motion":"",
displaySettings.compactQuestions?"compact-questions":""
].filter(Boolean).join(" ");

return(
<div className={rootClassName}>
<header className="site-header">
<div className="header-inner">
<button className="brand-button"onClick={goHome}>BIBLE QUIZ</button>

<nav className="header-nav">
<button onClick={goHome}>Home</button>
<button onClick={openHistory}>History</button>
<button onClick={()=>openPage("mastery")}>Mastery</button>
<button onClick={()=>openPage("trophies")}>Trophies</button>
<button onClick={startDailyChallenge}>
Daily Challenge
</button>
<button onClick={()=>openPage("profile")}>Profile</button>
</nav>
</div>
</header>

<main className="selection-container">
{showCompletionAnimation&&(
<div className="completion-overlay">
<strong>Quiz complete</strong>
<span>Your effort matters. Keep growing.</span>
</div>
)}

{page==="testaments"&&(
<>
<section className="hero-panel">
<div className="hero-copy">
<span className="eyebrow">BIBLE STUDY & MEMORIZATION</span>
<h2>Grow in faith with every question you answer.</h2>
<p>
Strengthen your knowledge of Scripture, build confidence in
God’s Word, and return daily for a fresh challenge.
</p>

<div className="hero-actions">
<button
className="continue-button"
onClick={startDailyChallenge}
disabled={dailyChallengeDate===getTodayKey()}
>
{dailyChallengeDate===getTodayKey()
?"Daily Challenge Complete"
:"Start Daily Challenge"}
</button>

<button className="secondary-button"onClick={openHistory}>
View History
</button>
</div>
</div>

<div className="hero-stats">
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

<section className="feature-action-grid">
{activeSession?.questions?.length>0&&(
<button
className="feature-action-card featured"
onClick={resumeSavedQuiz}
>
<span>Continue</span>
<strong>Resume unfinished quiz</strong>
<small>
{activeSession.selectedBook} · Question{" "}
{activeSession.currentQuestion+1} of{" "}
{activeSession.questions.length}
</small>
</button>
)}

<button
className="feature-action-card"
onClick={startMistakePractice}
disabled={mistakeQuestionCount===0}
>
<span>Practice</span>
<strong>Review past mistakes</strong>
<small>{mistakeQuestionCount} questions available</small>
</button>

<button
className="feature-action-card"
onClick={()=>openPage("flashcards")}
>
<span>Memorize</span>
<strong>Bible flashcards</strong>
<small>{flashcards.length} cards ready</small>
</button>

<button
className="feature-action-card"
onClick={()=>openPage("bookmarks")}
>
<span>Library</span>
<strong>Bookmarks and notes</strong>
<small>{bookmarks.length} saved items</small>
</button>

<button className="feature-action-card"onClick={installApp}>
<span>Application</span>
<strong>Install BIBLE QUIZ</strong>
<small>Use it like an app on this device</small>
</button>
</section>

<section className="weekly-goal-card">
<div>
<span className="testament-label">WEEKLY STUDY GOAL</span>
<h3>{weeklyQuizCount} of {weeklyGoal} quizzes completed</h3>
</div>

<div className="goal-progress-track">
<span style={{width:`${weeklyGoalProgress}%`}}/>
</div>

<label>
Weekly target
<select
value={weeklyGoal}
onChange={event=>setWeeklyGoal(Number(event.target.value))}
>
{[1,2,3,4,5,7,10].map(goal=>(
<option key={goal}value={goal}>{goal} quizzes</option>
))}
</select>
</label>
</section>

<div className="featured-verse-card">
<span className="featured-verse-label">VERSE OF THE DAY</span>
<p className="featured-verse-text">“{dailyVerse.text}”</p>
<span className="featured-verse-reference">{dailyVerse.reference}</span>
</div>

<div className="selection-heading">
<h2>Choose a Testament</h2>
<p>Select where you want your Bible quiz to come from.</p>
</div>

<div className="testament-cards">
<button className="testament-card"onClick={()=>chooseTestament("old")}>
<span className="card-number">39</span>
<div><h3>OLD TESTAMENT</h3><p>39 Books</p></div>
</button>

<button className="testament-card"onClick={()=>chooseTestament("new")}>
<span className="card-number">27</span>
<div><h3>NEW TESTAMENT</h3><p>27 Books</p></div>
</button>
</div>

<section className="progress-dashboard">
<div className="dashboard-heading">
<span className="testament-label">YOUR PROGRESS</span>
<h3>Keep building your knowledge</h3>
</div>

<div className="dashboard-stats">
<div><strong>{completedQuizCount}</strong><span>Quizzes</span></div>
<div><strong>{averagePercentage}%</strong><span>Average</span></div>
<div><strong>{bestPercentage}%</strong><span>Best score</span></div>
<div><strong>{studiedBookCount}</strong><span>Books studied</span></div>
<div><strong>{currentStreak}</strong><span>Daily streak</span></div>
</div>

<div className="accuracy-list">
<h4>Accuracy by book</h4>
{bookAccuracy.length===0
?<p>Complete a quiz to see your accuracy by book.</p>
:bookAccuracy.slice(0,6).map(item=>(
<div className="accuracy-row"key={item.book}>
<span>{item.book}</span>
<strong>
{item.answered
?Math.round((item.correct/item.answered)*100)
:0}% · {item.answered} questions
</strong>
</div>
))}
</div>

<div className="badge-row">
<h4>Trophies</h4>
{trophies.length
?trophies.map(trophy=><span key={trophy.id}>{trophy.name}</span>)
:<p>Your first trophy is waiting.</p>}
</div>
</section>
</>
)}

{page==="books"&&(
<>
<button className="back-button"onClick={goBack}>Back</button>

<div className="selection-heading">
<span className="testament-label">
{selectedTestament==="old"?"OLD TESTAMENT":"NEW TESTAMENT"}
</span>
<h2>Choose a Book</h2>
<p>Select the book you want to take your quiz from.</p>
</div>

<div className="books-grid">
{books.map(book=>{
const mastery=bookMastery.find(item=>item.book===book);
return(
<button
key={book}
className={`book-button ${selectedBook===book?"selected-book":""}`}
onClick={()=>chooseBook(book)}
>
<span>{book}</span>
<small>{mastery?.progress||0}% mastered</small>
</button>
);
})}
</div>

{selectedBook&&(
<div className="book-selected-box">
<div className="selected-book-info">
<p>You selected</p>
<h3>{selectedBook}</h3>
</div>
<button className="continue-button"onClick={continueToSetup}>
Continue
</button>
</div>
)}
</>
)}

{page==="setup"&&(
<>
<button className="back-button"onClick={goBack}>Back</button>

<div className="selection-heading">
<span className="testament-label">QUIZ</span>
<h2>{selectedBook}</h2>
<p>Set up your quiz before you begin.</p>
</div>

{challenge?.result&&(
<aside className="challenge-banner">
<span className="testament-label">FRIEND CHALLENGE</span>
<strong>{challenge.result.name} scored {challenge.result.score} of {challenge.result.total} ({challenge.result.percentage}%).</strong>
<p>Take the same {challenge.book} quiz and see how your score compares.</p>
</aside>
)}

<div className="setup-card">
<div className="setup-section">
<h3>Number of Questions</h3>
<p>Choose how many questions you want.</p>

<div className="question-options">
{[20,30,40,50,60,80,100,120].map(number=>(
<button
key={number}
className={
questionCount===number
?"setup-option selected-option"
:"setup-option"
}
onClick={()=>setQuestionCount(number)}
>
{number}
</button>
))}
</div>
</div>

{!isDailyChallenge&&(
<div className="setup-section study-mode-section">
<div>
<h3>Study Mode</h3>
<p>
Learn without a timer and see the answer explanation
after selecting an answer.
</p>
</div>

<button
className={studyMode?"mode-toggle active":"mode-toggle"}
onClick={()=>{
const enabled=!studyMode;
setStudyMode(enabled);
if(enabled){
setTimeLimit(null);
scrollToStartButton();
}
}}
>
{studyMode?"Study Mode On":"Use Study Mode"}
</button>
</div>
)}

<div className="setup-section">
<h3>Time Limit</h3>

{studyMode
?<p>This study session is untimed.</p>
:<>
<p>Choose how much time you want for the quiz.</p>
<div className="time-options">
{["5 Minutes","10 Minutes","15 Minutes","20 Minutes","30 Minutes"]
.map(time=>(
<button
key={time}
className={
timeLimit===time
?"setup-option selected-option"
:"setup-option"
}
onClick={()=>chooseTime(time)}
>
{time}
</button>
))}
</div>
</>}
</div>

<div className="setup-summary">
<div><span>Book</span><strong>{selectedBook}</strong></div>
<div><span>Questions</span><strong>{questionCount||"Not selected"}</strong></div>
<div>
<span>Time</span>
<strong>{studyMode?"Study Mode":timeLimit||"Not selected"}</strong>
</div>
</div>

<button className="challenge-button"onClick={()=>shareChallenge(false)}>
Challenge a Friend
</button>
{challengeStatus&&<p className="challenge-status"role="status">{challengeStatus}</p>}

<button
className="start-quiz-button"
onClick={startQuiz}
disabled={isLoadingQuiz}
>
{isLoadingQuiz?"Loading Questions...":"Start Quiz"}
</button>
</div>
</>
)}

{page==="questions"&&currentQuizQuestion&&(
<div className="quiz-container">
<div className="quiz-top">
<span>{selectedBook}</span>
<span>Question {currentQuestion+1} of {questions.length}</span>
<span className="timer">
{studyMode?"STUDY MODE":formatTime(timeLeft)}
</span>
</div>

<div className="progress-container">
<div className="progress-info">
<span>Quiz Progress</span>
<span>{Math.round(progress)}%</span>
</div>
<div className="progress-track">
<div
className="progress-fill"
style={{width:`${progress}%`}}
/>
</div>
</div>

<div className="question-navigator">
<div className="question-navigator-header">
<span>Questions</span>
<span>
{answers.filter(answer=>answer!==null).length} of{" "}
{questions.length} answered
</span>
</div>

<div className="question-navigator-grid">
{questions.map((question,index)=>{
const current=index===currentQuestion;
const locked=lockedQuestions[index];
const answered=answers[index]!==null;

return(
<button
key={`${index}-${question.question}`}
className={`question-number${current?" current":""}${locked?" completed":""}${answered&&!locked?" selected":""}`}
onClick={()=>goToQuestion(index)}
>
{index+1}
</button>
);
})}
</div>
</div>

<div className="quiz-card">
<div className="question-label">QUESTION {currentQuestion+1}</div>
<h2>{currentQuizQuestion.question}</h2>

<div className="question-tools">
<button
className={currentQuestionBookmarked?"active":""}
onClick={()=>toggleBookmark(currentQuizQuestion)}
>
{currentQuestionBookmarked?"Bookmarked":"Bookmark"}
</button>

<button onClick={()=>setShowReportForm(previous=>!previous)}>
Report question
</button>
</div>

{showReportForm&&(
<div className="question-report-form">
<label htmlFor="report-reason">What should be checked?</label>
<textarea
id="report-reason"
value={reportReason}
onChange={event=>setReportReason(event.target.value)}
placeholder="Incorrect answer, repeated question, spelling issue, or unclear wording"
/>
<div>
<button onClick={()=>setShowReportForm(false)}>Cancel</button>
<button
className="continue-button"
onClick={submitQuestionReport}
disabled={!reportReason.trim()}
>
Save report
</button>
</div>
</div>
)}

<div className="options">
{currentQuizQuestion.options.map((option,index)=>{
const selected=answers[currentQuestion]===option;
return(
<button
key={`${index}-${option}`}
className={selected?"selected":""}
onClick={()=>selectAnswer(option)}
disabled={lockedQuestions[currentQuestion]}
>
<span className="option-letter">
{String.fromCharCode(65+index)}
</span>
<span>{option}</span>
</button>
);
})}
</div>

{showCurrentFeedback&&(
<div className="answer-feedback">
{lockedQuestions[currentQuestion]&&(
<p className="answer-locked-message">This answer is locked.</p>
)}

<p className="quiz-correct-answer">
<strong>Correct answer:</strong> {currentQuizQuestion.answer}
</p>

{verseInfo&&(
<>
<p className="quiz-reference">
<strong>Study reference:</strong>{" "}
{currentQuizQuestion.reference}
</p>
<div className="verse-box">
<p className="verse-text">{verseInfo.text}</p>
<p className="verse-explanation">
<strong>What it means:</strong> {verseInfo.explanation}
</p>
</div>
</>
)}
</div>
)}

<div className="quiz-navigation">
<button
className="previous-button"
onClick={previousQuestion}
disabled={currentQuestion===0}
>
Previous
</button>
<button className="skip-button"onClick={skipQuestion}>Skip</button>
<button className="next-button"onClick={nextQuestion}>
{currentQuestion===questions.length-1?"Finish Quiz":"Next"}
</button>
</div>
</div>
</div>
)}

{page==="results"&&(
<div className="quiz-container">
<div className="result-card">
<p className="result-small-title">QUIZ COMPLETE</p>
<h2>{selectedBook}</h2>

{challenge?.result&&(
<aside className="challenge-banner result-challenge-banner">
<span className="testament-label">FRIEND CHALLENGE</span>
<strong>{challenge.opponentName||challenge.result.name}: {opponentPercentage}% | {profile.name&&profile.name!=="Bible Student"?profile.name:"You"}: {percentage}%</strong>
<p>{percentage>opponentPercentage?"You beat your friend!":percentage===opponentPercentage?"You tied!":"Your friend is ahead. Challenge them to a rematch!"}</p>
</aside>
)}

<div className="score-display">
<div className="score-number">
{finalScore}<span> / {questions.length}</span>
</div>
<div className="percentage">{percentage}%</div>
</div>

<div className="result-divider"/>

<div className="encouragement-box">
<p className="encouragement-label">A WORD FOR YOU</p>
<h3>{encouragement.title}</h3>
<p className="encouragement-message">{encouragement.message}</p>
<div className="encouragement-scripture">
<p>{encouragement.verse}</p>
<span>{encouragement.reference}</span>
</div>
</div>

<section className="topic-summary">
<div className="feature-section-heading">
<span className="testament-label">TOPIC SUMMARY</span>
<h3>What this quiz covered</h3>
</div>

<div className="topic-summary-grid">
{topicSummary.map(topic=>(
<div key={topic.topic}>
<span>{topic.topic}</span>
<strong>{topic.correct}/{topic.total}</strong>
<small>correct</small>
</div>
))}
</div>
</section>

<div className="result-downloads">
<button className="secondary-button"onClick={()=>shareChallenge(true)}>
Share Your Result
</button>

<button
className="secondary-button"
onClick={()=>downloadResultCard({
name:profile.name,
book:selectedBook,
score:finalScore,
total:questions.length,
percentage
})}
>
Download result card
</button>

{certificateEligible&&(
<button
className="secondary-button"
onClick={()=>downloadCertificate({
name:profile.name,
book:selectedBook,
percentage
})}
>
Download mastery certificate
</button>
)}
</div>
{challengeStatus&&<p className="challenge-status"role="status">{challengeStatus}</p>}

<div className="result-actions">
<button
className="continue-button"
onClick={()=>openPage("review")}
>
Review Answers
</button>
<button className="start-quiz-button"onClick={restartQuiz}>
Retake Quiz
</button>
<button className="back-button"onClick={goHome}>Go Home</button>
</div>
</div>
</div>
)}

{page==="review"&&(
<div className="quiz-container">
<button className="back-button"onClick={goBack}>
{reviewingHistory?"Back to History":"Back to Results"}
</button>

<div className="selection-heading">
<span className="testament-label">REVIEW</span>
<h2>{selectedBook}</h2>
<p>Review your answers and learn from the questions you missed.</p>
</div>

<div className="review-list">
{questions.map((question,index)=>{
const userAnswer=answers[index];
const correct=userAnswer===question.answer;
const verse=question.reference
?publicDomainVerseNotes[question.reference]
:null;

return(
<div className="review-card"key={index}>
<div className="question-label">QUESTION {index+1}</div>
<h3>{question.question}</h3>
<p><strong>Your answer:</strong>{" "}
{userAnswer===null?"Not answered":userAnswer}</p>
<p><strong>Correct answer:</strong> {question.answer}</p>
{question.reference&&(
<p><strong>Reference:</strong> {question.reference}</p>
)}
{verse&&(
<div className="review-verse-box">
<p>{verse.text}</p>
<p><strong>What it means:</strong> {verse.explanation}</p>
</div>
)}
<p className={correct?"review-correct":"review-wrong"}>
{correct?"Correct":userAnswer===null?"Skipped":"Wrong"}
</p>
</div>
);
})}
</div>
</div>
)}

{page==="mastery"&&(
<div className="quiz-container feature-page">
<button className="back-button"onClick={goHome}>Back Home</button>

<div className="selection-heading">
<span className="testament-label">BOOK MASTERY</span>
<h2>Your progress across Scripture</h2>
<p>Answer all 120 unique questions correctly to master a book.</p>
</div>

<div className="mastery-overview">
<div>
<strong>{bookMastery.filter(book=>book.progress===100).length}</strong>
<span>Books mastered</span>
</div>
<div>
<strong>{bookMastery.filter(book=>book.progress>0).length}</strong>
<span>Books started</span>
</div>
<div>
<strong>{66-studiedBookCount}</strong>
<span>Books remaining</span>
</div>
</div>

<div className="mastery-grid">
{bookMastery.map(book=>(
<article className="mastery-card"key={book.book}>
<div className="mastery-card-heading">
<div><span>{book.status}</span><h3>{book.book}</h3></div>
<strong>{book.progress}%</strong>
</div>

<div className="goal-progress-track">
<span style={{width:`${book.progress}%`}}/>
</div>

<dl>
<div><dt>Mastered questions</dt><dd>{book.correct}/120</dd></div>
<div><dt>Best score</dt><dd>{book.best}%</dd></div>
<div><dt>Attempts</dt><dd>{book.attempts}</dd></div>
</dl>

<button
className="secondary-button"
onClick={()=>{
setSelectedTestament(
oldTestament.includes(book.book)?"old":"new"
);
setSelectedBook(book.book);
setQuestionCount(null);
setTimeLimit(null);
setStudyMode(false);
setPage("setup");
scrollToTop();
}}
>
Study this book
</button>
</article>
))}
</div>
</div>
)}

{page==="trophies"&&(
<div className="quiz-container feature-page">
<button className="back-button"onClick={goHome}>Back Home</button>

<div className="selection-heading">
<span className="testament-label">TROPHY ROOM</span>
<h2>Your study awards</h2>
<p>
You have unlocked {trophies.length} of{" "}
{TROPHY_DEFINITIONS.length} trophies.
</p>
</div>

<div className="trophy-room-grid">
{TROPHY_DEFINITIONS.map(trophy=>{
const unlocked=unlockedTrophyIds.includes(trophy.id);
return(
<article
className={unlocked?"trophy-tile unlocked":"trophy-tile"}
key={trophy.id}
>
<span className="trophy-state">
{unlocked?"Unlocked":"Locked"}
</span>
<div className="trophy-shape"><span/></div>
<h3>{trophy.name}</h3>
<p>{trophy.description}</p>
</article>
);
})}
</div>
</div>
)}

{page==="flashcards"&&(
<div className="quiz-container feature-page">
<button className="back-button"onClick={goHome}>Back Home</button>

<div className="selection-heading">
<span className="testament-label">MEMORY FLASHCARDS</span>
<h2>Strengthen your recall</h2>
<p>Select the card to reveal its answer.</p>
</div>

{activeFlashcard?(
<>
<button
className={flashcardRevealed?"flashcard revealed":"flashcard"}
onClick={()=>setFlashcardRevealed(previous=>!previous)}
>
<span className="flashcard-label">
{flashcardRevealed?"ANSWER":"QUESTION"}
</span>
<strong>
{flashcardRevealed
?activeFlashcard.back
:activeFlashcard.front}
</strong>
<small>
{flashcardRevealed
?activeFlashcard.reference||"Bible study card"
:"Select the card to reveal the answer"}
</small>
</button>

<div className="flashcard-controls">
<button
className="secondary-button"
onClick={()=>{
setFlashcardIndex(previous=>
previous===0?flashcards.length-1:previous-1
);
setFlashcardRevealed(false);
}}
>
Previous
</button>

<span>
{(flashcardIndex%flashcards.length)+1} of {flashcards.length}
</span>

<button
className="continue-button"
onClick={()=>{
setFlashcardIndex(previous=>
(previous+1)%flashcards.length
);
setFlashcardRevealed(false);
}}
>
Next card
</button>
</div>
</>
):(
<div className="empty-feature-state">
<h3>No flashcards are available</h3>
<p>Bookmark a quiz question to create your first card.</p>
</div>
)}
</div>
)}

{page==="bookmarks"&&(
<div className="quiz-container feature-page">
<button className="back-button"onClick={goHome}>Back Home</button>

<div className="selection-heading">
<span className="testament-label">BOOKMARKS AND NOTES</span>
<h2>Your personal study library</h2>
<p>Save questions and write what you want to remember.</p>
</div>

{bookmarks.length?(
<div className="bookmark-list">
{bookmarks.map(bookmark=>(
<article className="bookmark-card"key={bookmark.id}>
<div className="bookmark-heading">
<span>{bookmark.book}</span>
<button
onClick={()=>setBookmarks(previous=>
previous.filter(item=>item.id!==bookmark.id)
)}
>
Remove
</button>
</div>

<h3>{bookmark.question}</h3>
<p><strong>Answer:</strong> {bookmark.answer}</p>
{bookmark.reference&&<p>{bookmark.reference}</p>}

<label>
Personal note
<textarea
value={bookmark.note}
onChange={event=>
updateBookmarkNote(bookmark.id,event.target.value)
}
placeholder="Write what you want to remember"
/>
</label>
</article>
))}
</div>
):(
<div className="empty-feature-state">
<h3>No bookmarks yet</h3>
<p>Use the Bookmark button while taking a quiz.</p>
</div>
)}
</div>
)}

{page==="questionManager"&&(
<div className="quiz-container feature-page question-manager-page">
<button
className="back-button"
onClick={()=>openPage("profile")}
>
Back to Profile
</button>

<div className="selection-heading">
<span className="testament-label">QUESTION MANAGER</span>
<h2>Edit your local question banks</h2>
<p>Changes are stored on this device.</p>
</div>

<section className="manager-reports">
<div className="feature-section-heading">
<h3>Question reports</h3>
<span>{questionReports.length} saved</span>
</div>

{questionReports.length===0
?<p>No questions have been reported.</p>
:questionReports.slice(0,10).map(report=>(
<article key={report.id}>
<div>
<strong>{report.book}</strong>
<span>{report.reason}</span>
<small>{report.question}</small>
</div>
<button
onClick={()=>setQuestionReports(previous=>
previous.filter(item=>item.id!==report.id)
)}
>
Remove report
</button>
</article>
))}
</section>

<section className="manager-controls">
<label>
Bible book
<select
value={managerBook}
onChange={event=>setManagerBook(event.target.value)}
>
{allBibleBooks.map(book=>(
<option key={book}value={book}>{book}</option>
))}
</select>
</label>

<label>
Search this bank
<input
value={managerSearch}
onChange={event=>setManagerSearch(event.target.value)}
placeholder="Question or reference"
/>
</label>

<button className="secondary-button"onClick={resetManagedBook}>
Restore original bank
</button>
</section>

<p className="manager-status">{managerStatus}</p>

<section className="question-editor">
<div className="feature-section-heading">
<h3>
{editingQuestionIndex===null?"Add a question":"Edit question"}
</h3>
{editingQuestionIndex!==null&&(
<button onClick={resetQuestionForm}>Cancel editing</button>
)}
</div>

<label>
Question
<textarea
value={questionForm.question}
onChange={event=>setQuestionForm(previous=>({
...previous,
question:event.target.value
}))}
/>
</label>

<div className="manager-option-grid">
{questionForm.options.map((option,index)=>(
<label key={index}>
Option {String.fromCharCode(65+index)}
<input
value={option}
onChange={event=>setQuestionForm(previous=>{
const options=[...previous.options];
options[index]=event.target.value;
return{...previous,options};
})}
/>
</label>
))}
</div>

<div className="manager-option-grid">
<label>
Correct answer
<select
value={questionForm.answer}
onChange={event=>setQuestionForm(previous=>({
...previous,
answer:event.target.value
}))}
>
<option value="">Select the correct option</option>
{questionForm.options
.filter(option=>option.trim())
.map((option,index)=>(
<option key={`${index}-${option}`}value={option.trim()}>
{option.trim()}
</option>
))}
</select>
</label>

<label>
Bible reference
<input
value={questionForm.reference}
onChange={event=>setQuestionForm(previous=>({
...previous,
reference:event.target.value
}))}
placeholder="Genesis 1:1"
/>
</label>
</div>

<button className="continue-button"onClick={saveManagedQuestion}>
{editingQuestionIndex===null?"Add question":"Save changes"}
</button>
</section>

<div className="managed-question-list">
{filteredManagerQuestions.slice(0,80).map(({question,index})=>(
<article key={`${index}-${questionKey(question)}`}>
<div>
<span>Question {index+1}</span>
<h3>{question.question}</h3>
<p>{question.reference||"No reference added"}</p>
</div>

<div>
<button onClick={()=>editManagedQuestion(index)}>Edit</button>
<button onClick={()=>deleteManagedQuestion(index)}>Delete</button>
</div>
</article>
))}
</div>
</div>
)}

{page==="profile"&&(
<div className="quiz-container feature-page">
<button className="back-button"onClick={goHome}>Back Home</button>

<div className="selection-heading">
<span className="testament-label">PROFILE</span>
<h2>Your Study Profile</h2>
<p>Track your growth on this device.</p>
</div>

<div className="profile-card">
<label htmlFor="profile-name">Your name</label>
<input
id="profile-name"
value={profile.name}
onChange={event=>saveProfile({
...profile,
name:event.target.value
})}
/>
</div>

<div className="dashboard-stats profile-stats">
<div><strong>{completedQuizCount}</strong><span>Quizzes</span></div>
<div><strong>{totalAnswered}</strong><span>Answered</span></div>
<div><strong>{overallAccuracy}%</strong><span>Accuracy</span></div>
</div>

<div className="badge-row">
<h4>Trophies</h4>
{trophies.length
?trophies.map(trophy=><span key={trophy.id}>{trophy.name}</span>)
:<p>Complete a quiz to unlock trophies.</p>}
</div>

<section className="profile-feature-section">
<div className="feature-section-heading">
<div>
<span className="testament-label">WEEKLY GOAL</span>
<h3>{weeklyQuizCount} of {weeklyGoal} quizzes</h3>
</div>

<select
value={weeklyGoal}
onChange={event=>setWeeklyGoal(Number(event.target.value))}
>
{[1,2,3,4,5,7,10].map(goal=>(
<option key={goal}value={goal}>{goal} quizzes</option>
))}
</select>
</div>

<div className="goal-progress-track">
<span style={{width:`${weeklyGoalProgress}%`}}/>
</div>
</section>

<section className="profile-feature-section">
<div className="feature-section-heading">
<div>
<span className="testament-label">STUDY CALENDAR</span>
<h3>Last 35 days</h3>
</div>
<span>{currentStreak} day streak</span>
</div>

<div className="study-calendar">
{studyCalendar.map(day=>(
<div
className={day.sessions?"active":""}
key={day.dateKey}
title={`${day.date.toLocaleDateString()}: ${day.sessions} quizzes`}
>
<span>{day.date.getDate()}</span>
<small>{day.sessions||""}</small>
</div>
))}
</div>
</section>

<section className="profile-feature-section display-settings">
<div className="feature-section-heading">
<h3>Display settings</h3>
</div>

<div className="settings-grid">
<label>
Colour theme
<select
value={displaySettings.theme}
onChange={event=>setDisplaySettings(previous=>({
...previous,
theme:event.target.value
}))}
>
<option value="light">Light</option>
<option value="dark">Dark</option>
</select>
</label>

<label>
Text size
<select
value={displaySettings.textSize}
onChange={event=>setDisplaySettings(previous=>({
...previous,
textSize:event.target.value
}))}
>
<option value="normal">Normal</option>
<option value="large">Large</option>
<option value="largest">Largest</option>
</select>
</label>

<label className="setting-check">
<input
type="checkbox"
checked={displaySettings.reducedMotion}
onChange={event=>setDisplaySettings(previous=>({
...previous,
reducedMotion:event.target.checked
}))}
/>
Reduce animations
</label>

<label className="setting-check">
<input
type="checkbox"
checked={displaySettings.compactQuestions}
onChange={event=>setDisplaySettings(previous=>({
...previous,
compactQuestions:event.target.checked
}))}
/>
Use compact question spacing
</label>
</div>
</section>

<div className="profile-tool-grid">
<button
className="secondary-button"
onClick={()=>openPage("questionManager")}
>
Open Question Manager
</button>
<button className="secondary-button"onClick={installApp}>
Install BIBLE QUIZ
</button>
<button
className="secondary-button"
onClick={()=>openPage("bookmarks")}
>
View Bookmarks
</button>
<button
className="secondary-button"
onClick={()=>openPage("trophies")}
>
Open Trophy Room
</button>
</div>
</div>
)}

{page==="history"&&(
<div className="quiz-container">
<button className="back-button"onClick={goBack}>Back</button>

<div className="selection-heading">
<span className="testament-label">HISTORY</span>
<h2>Quiz History</h2>
<p>Your completed Bible quizzes are saved on this device.</p>
</div>

{quizHistory.length===0
?<div className="result-card">
<p>You have not completed any quizzes yet.</p>
</div>
:<>
<div className="history-list">
{quizHistory.map(item=>(
<div className="history-card"key={item.id}>
<h3>{item.book}</h3>
<p><strong>Score:</strong> {item.score}/{item.total}</p>
<p><strong>Percentage:</strong> {item.percentage}%</p>
<p><strong>Questions:</strong> {item.total}</p>
<p><strong>Time:</strong> {item.timeLimit}</p>
<p><strong>Date:</strong> {item.date}</p>
<button
className="history-view-button"
onClick={()=>viewHistoryAnswers(item)}
>
View Answers
</button>
</div>
))}
</div>

<button
className="back-button"
onClick={()=>{
if(window.confirm("Do you want to clear your quiz history?")){
saveHistory([]);
}
}}
>
Clear History
</button>
</>}
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