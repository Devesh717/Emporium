const questions = [
  "What's your vibe on a weekend?",
  "Loud or soft music?",
  "Do you like classical tunes?",
  "Can you handle rhythm patterns?",
  "Prefer string or wind instruments?",
  "Do you like electronic sounds?",
  "Would you play solo or in a band?",
  "Are you into traditional or modern vibes?"
];

const instruments = [
  { name: "Guitar", image: "https://cdn.pixabay.com/photo/2014/09/16/21/52/guitar-448681_960_720.jpg", description: "Great for solo and band performances, suits energetic players." },
  { name: "Piano", image: "https://cdn.pixabay.com/photo/2014/11/21/17/27/piano-540136_960_720.jpg", description: "Perfect for classical and modern music lovers." },
  { name: "Drums", image: "https://cdn.pixabay.com/photo/2016/11/29/05/16/drum-set-1867121_960_720.jpg", description: "If you love rhythm and loud music, drums are for you." },
  { name: "Violin", image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/violin-1836126_960_720.jpg", description: "Elegant and classical — best for emotional melodies." },
  { name: "Saxophone", image: "https://cdn.pixabay.com/photo/2016/01/19/17/51/saxophone-1149160_960_720.jpg", description: "A jazzy choice for smooth and bold personalities." },
  { name: "Flute", image: "https://cdn.pixabay.com/photo/2016/03/27/21/16/flute-1285162_960_720.jpg", description: "Simple, sweet, and calming — ideal for soft music fans." },
  { name: "Synthesizer", image: "https://cdn.pixabay.com/photo/2018/01/10/20/30/music-3079270_960_720.jpg", description: "For electronic lovers and sound explorers." },
  { name: "Tabla", image: "https://cdn.pixabay.com/photo/2020/03/18/12/45/tabla-4942338_960_720.jpg", description: "Perfect for traditional rhythm and Indian classical music." },
  { name: "Harmonica", image: "https://cdn.pixabay.com/photo/2016/06/13/09/01/harmonica-1454804_960_720.jpg", description: "Portable and expressive — good for blues and folk lovers." },
  { name: "Cello", image: "https://cdn.pixabay.com/photo/2014/09/25/22/14/cello-461619_960_720.jpg", description: "Warm and rich sound — fits classical elegance." },
  { name: "Electric Guitar", image: "https://cdn.pixabay.com/photo/2016/11/21/16/55/guitar-1842077_960_720.jpg", description: "For rock stars and energetic performers." },
  { name: "Clarinet", image: "https://cdn.pixabay.com/photo/2017/01/09/01/56/clarinet-1961814_960_720.jpg", description: "Great for orchestral and jazz pieces." },
  { name: "Trumpet", image: "https://cdn.pixabay.com/photo/2016/11/19/18/06/trumpet-1838583_960_720.jpg", description: "Loud, proud, and perfect for performers who stand out." },
  { name: "Ukulele", image: "https://cdn.pixabay.com/photo/2014/10/25/23/52/ukulele-503037_960_720.jpg", description: "Fun and light-hearted for casual strummers." },
  { name: "Dhol", image: "https://cdn.pixabay.com/photo/2020/12/17/04/32/dhol-5836380_960_720.jpg", description: "Rhythmic powerhouse for celebrations and energy." }
];

let currentQuestion = 0;

function startQuiz() {
  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionEl = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");

  questionEl.textContent = questions[currentQuestion];
  answerButtons.innerHTML = '';

  const options = ["Yes", "No", "Sometimes"];
  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.addEventListener("click", () => handleAnswer(option));
    answerButtons.appendChild(button);
  });
}

function handleAnswer(answer) {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showSpinner();
  }
}

function showSpinner() {
  document.getElementById("spinner").classList.remove("hidden");

  setTimeout(() => {
    suggestInstrument();
  }, 3000); // Simulate analyzing time
}

function suggestInstrument() {
  document.getElementById("spinner").classList.add("hidden");

  // Logic to select instrument based on answers (you can expand this)
  const selectedInstrument = instruments[Math.floor(Math.random() * instruments.length)];

  document.getElementById("instrumentName").textContent = selectedInstrument.name;
  document.getElementById("instrumentImage").src = selectedInstrument.image;
  document.getElementById("instrumentDescription").textContent = selectedInstrument.description;
  document.getElementById("result").classList.remove("hidden");
}

function restartQuiz() {
  currentQuestion = 0;
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".hero").classList.remove("hidden");
}

function shareResult() {
  const result = encodeURIComponent(document.getElementById("instrumentName").textContent);
  const url = `https://wa.me/?text=I just took the Emporium quiz and I got: ${result}`;
  window.open(url, "_blank");
}
