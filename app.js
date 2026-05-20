const QUESTIONS = [
  {
    skill: "Grammar",
    level: "A1",
    points: 1,
    prompt: "Choose the correct sentence.",
    options: ["She are from Canada.", "She is from Canada.", "She be from Canada.", "She am from Canada."],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "A1",
    points: 1,
    prompt: "I usually eat breakfast ___ 7 a.m.",
    options: ["on", "in", "at", "to"],
    answer: 2,
  },
  {
    skill: "Practical English",
    level: "A1",
    points: 1,
    prompt: "You meet someone for the first time. Which response is natural?\nA: Nice to meet you.",
    options: ["Nice to meet you too.", "I am meet.", "Yes, please.", "No, I don't."],
    answer: 0,
  },
  {
    skill: "Reading",
    level: "A1",
    points: 1,
    prompt: "Read: Tom works in a bakery. He starts work at six in the morning.\nWhat time does Tom start work?",
    options: ["5:00", "6:00", "7:00", "8:00"],
    answer: 1,
  },
  {
    skill: "Grammar",
    level: "A1",
    points: 1,
    prompt: "Choose the correct question.",
    options: ["Where you live?", "Where do you live?", "Where are live you?", "Where live do you?"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "A1",
    points: 1,
    prompt: "Which word means the opposite of 'expensive'?",
    options: ["cheap", "heavy", "busy", "late"],
    answer: 0,
  },
  {
    skill: "Grammar",
    level: "A2",
    points: 2,
    prompt: "I ___ to Kyoto last weekend.",
    options: ["go", "went", "gone", "was go"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "A2",
    points: 2,
    prompt: "The train was delayed, so I arrived ___ than planned.",
    options: ["early", "earlier", "late", "later"],
    answer: 3,
  },
  {
    skill: "Practical English",
    level: "A2",
    points: 2,
    prompt: "You are in a cafe. Which phrase is most natural?",
    options: ["I want coffee now.", "Give me a coffee.", "Could I have a coffee, please?", "Coffee is mine."],
    answer: 2,
  },
  {
    skill: "Reading",
    level: "A2",
    points: 2,
    prompt: "Read: The museum is closed on Mondays, except during national holidays.\nWhen can you visit the museum?",
    options: ["Every Monday", "No Mondays ever", "On a Monday if it is a national holiday", "Only on national holidays"],
    answer: 2,
  },
  {
    skill: "Grammar",
    level: "A2",
    points: 2,
    prompt: "I have lived here ___ 2021.",
    options: ["for", "since", "during", "from"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "A2",
    points: 2,
    prompt: "If a task is 'simple', it is ___ .",
    options: ["easy to understand", "very dangerous", "full of people", "not allowed"],
    answer: 0,
  },
  {
    skill: "Grammar",
    level: "B1",
    points: 3,
    prompt: "If I ___ more time, I would learn another language.",
    options: ["have", "had", "will have", "am having"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "B1",
    points: 3,
    prompt: "The word 'reliable' is closest in meaning to ___ .",
    options: ["fast", "trustworthy", "creative", "ordinary"],
    answer: 1,
  },
  {
    skill: "Practical English",
    level: "B1",
    points: 3,
    prompt: "Your colleague asks for feedback. Which reply is polite and useful?",
    options: [
      "It is bad.",
      "You must change everything.",
      "The main idea is clear, but the second paragraph could be shorter.",
      "I don't like it because no.",
    ],
    answer: 2,
  },
  {
    skill: "Reading",
    level: "B1",
    points: 3,
    prompt:
      "Read: The city introduced bike lanes to reduce traffic. At first, many drivers complained, but after six months, average travel times fell by 12%.\nWhat happened after six months?",
    options: [
      "Drivers stopped using cars completely.",
      "Travel times became shorter on average.",
      "Bike lanes were removed.",
      "Traffic increased by 12%.",
    ],
    answer: 1,
  },
  {
    skill: "Grammar",
    level: "B1",
    points: 3,
    prompt: "The report ___ by the finance team yesterday.",
    options: ["completed", "was completed", "has completed", "is completing"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "B1",
    points: 3,
    prompt: "Which phrase means 'to postpone'?",
    options: ["put off", "look up", "take after", "run out"],
    answer: 0,
  },
  {
    skill: "Grammar",
    level: "B2",
    points: 4,
    prompt: "No sooner ___ the meeting started than the connection failed.",
    options: ["had", "has", "did", "was"],
    answer: 0,
  },
  {
    skill: "Vocabulary",
    level: "B2",
    points: 4,
    prompt: "The proposal is 'feasible'. This means it is ___ .",
    options: ["possible to do", "morally wrong", "unusually expensive", "already finished"],
    answer: 0,
  },
  {
    skill: "Practical English",
    level: "B2",
    points: 4,
    prompt: "Choose the best sentence for a professional email.",
    options: [
      "Tell me by tomorrow.",
      "I need your answer immediately.",
      "Could you let me know by tomorrow whether this timeline works for you?",
      "Why have you not answered?",
    ],
    answer: 2,
  },
  {
    skill: "Reading",
    level: "B2",
    points: 4,
    prompt:
      "Read: Although remote work improved employee satisfaction, managers noticed that informal knowledge sharing declined. The company therefore introduced optional weekly office days.\nWhy did the company introduce weekly office days?",
    options: [
      "To reduce employee satisfaction",
      "To support informal knowledge sharing",
      "To make remote work impossible",
      "To replace managers",
    ],
    answer: 1,
  },
  {
    skill: "Grammar",
    level: "B2",
    points: 4,
    prompt: "Had we known about the issue earlier, we ___ the launch.",
    options: ["delay", "will delay", "would have delayed", "would delay"],
    answer: 2,
  },
  {
    skill: "Vocabulary",
    level: "B2",
    points: 4,
    prompt: "Which word best completes the sentence?\nThe data is not conclusive, but it does ___ a clear trend.",
    options: ["imply", "deny", "exclude", "consume"],
    answer: 0,
  },
  {
    skill: "Grammar",
    level: "C1",
    points: 5,
    prompt: "Choose the sentence with the most natural advanced structure.",
    options: [
      "Rarely we see such a dramatic improvement.",
      "Rarely do we see such a dramatic improvement.",
      "Rarely seeing we such a dramatic improvement.",
      "Rarely have see such dramatic improvement.",
    ],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "C1",
    points: 5,
    prompt: "A 'nuanced' argument is one that ___ .",
    options: [
      "ignores all details",
      "contains subtle distinctions",
      "is intentionally offensive",
      "uses only simple words",
    ],
    answer: 1,
  },
  {
    skill: "Practical English",
    level: "C1",
    points: 5,
    prompt: "Which sentence softens disagreement while remaining clear?",
    options: [
      "That is completely wrong.",
      "I take your point, but I wonder whether the data supports a different conclusion.",
      "You did not understand the data.",
      "No, this is not acceptable.",
    ],
    answer: 1,
  },
  {
    skill: "Reading",
    level: "C1",
    points: 5,
    prompt:
      "Read: The author's criticism is not aimed at automation itself, but at the assumption that efficiency gains automatically translate into better human outcomes.\nWhat is the author's main concern?",
    options: [
      "Automation never improves efficiency.",
      "Efficiency gains may not automatically benefit people.",
      "Human outcomes are easy to measure.",
      "Automation should be banned.",
    ],
    answer: 1,
  },
  {
    skill: "Grammar",
    level: "C1",
    points: 5,
    prompt: "The policy, ___ well intentioned, failed to address the underlying problem.",
    options: ["despite", "although", "however", "nevertheless"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "C1",
    points: 5,
    prompt: "Which word is closest to 'mitigate'?",
    options: ["worsen", "lessen", "ignore", "predict"],
    answer: 1,
  },
  {
    skill: "Reading",
    level: "B1",
    points: 3,
    prompt:
      "Read: Sara wanted to join the evening course, but the last train home left before the class ended. She chose the online version instead.\nWhy did Sara choose the online version?",
    options: [
      "The evening course was too expensive.",
      "She could not get home after the evening class.",
      "She disliked studying with other people.",
      "The course was cancelled.",
    ],
    answer: 1,
  },
  {
    skill: "Practical English",
    level: "A2",
    points: 2,
    prompt: "Someone says, 'I'm sorry I'm late.' Which reply is natural?",
    options: ["It doesn't matter at all, never.", "No problem. We just started.", "You are late person.", "Yes, I am sorry."],
    answer: 1,
  },
  {
    skill: "Grammar",
    level: "B2",
    points: 4,
    prompt: "By the time we arrived, the presentation ___ already ___ .",
    options: ["has / begun", "had / begun", "will / begin", "was / begin"],
    answer: 1,
  },
  {
    skill: "Vocabulary",
    level: "B1",
    points: 3,
    prompt: "A 'brief' explanation is ___ .",
    options: ["short", "angry", "private", "unclear"],
    answer: 0,
  },
  {
    skill: "Reading",
    level: "B2",
    points: 4,
    prompt:
      "Read: The survey results should be interpreted cautiously because the sample was small and most respondents came from the same industry.\nWhy should the results be interpreted cautiously?",
    options: [
      "The survey was too long.",
      "The sample may not represent a wide population.",
      "The respondents refused to answer.",
      "The results were mathematically impossible.",
    ],
    answer: 1,
  },
  {
    skill: "Practical English",
    level: "C1",
    points: 5,
    prompt: "Choose the sentence that best manages expectation in a project update.",
    options: [
      "Everything is fine.",
      "We are exploring two options and will confirm the timeline once the technical risk is clearer.",
      "Maybe it works, maybe it doesn't.",
      "The timeline is impossible because people are slow.",
    ],
    answer: 1,
  },
  {
    skill: "Listening",
    level: "A2",
    points: 2,
    prompt: "Listen to the audio. What food does the speaker prefer to buy at the supermarket?",
    audio: "elllo.org – Rocio (El Salvador) talks about buying dinner at the supermarket.",
    audioSrc: "audio/listening-A2-rocio.mp3",
    options: [
      "Fast food, because it is quick to prepare",
      "Sushi or rice with vegetables",
      "Frozen meals that are easy to heat up",
      "Roasted chicken from the deli",
    ],
    answer: 1,
  },
  {
    skill: "Listening",
    level: "B1",
    points: 3,
    prompt: "Listen to the audio. What does the speaker say he had to do on his paper round regardless of the weather?",
    audio: "elllo.org – Arthur (Australia) talks about his first part-time job delivering newspapers.",
    audioSrc: "audio/listening-B1-arthur.mp3",
    options: [
      "Stay home if it was raining heavily",
      "Deliver the newspapers every Wednesday without fail",
      "Drive around the neighbourhood in a car",
      "Collect payment from each household",
    ],
    answer: 1,
  },
  {
    skill: "Listening",
    level: "B2",
    points: 4,
    prompt: "Listen to the audio. What is the speaker's main reason for preferring modern medicine?",
    audio: "elllo.org – Arthur (Australia) discusses natural versus modern medicine.",
    audioSrc: "audio/listening-B2-arthur.mp3",
    options: [
      "Modern medicine is cheaper than herbal treatments",
      "He does not believe natural medicine has any value",
      "He has professional training in the healthcare field",
      "His family has only ever used hospital medicine",
    ],
    answer: 2,
  },
  {
    skill: "Listening",
    level: "C1",
    points: 5,
    prompt: "Listen to the audio. Which example does the speaker use to support her view about AI and industry?",
    audio: "elllo.org – Grace (South Africa) discusses what industry AI will put out of business.",
    audioSrc: "audio/listening-C1-grace.mp3",
    options: [
      "Paper-based media was destroyed overnight by the internet",
      "AI has already eliminated most office jobs worldwide",
      "Telephone operators became obsolete, but people still needed to communicate",
      "Traditional medicine was fully replaced by modern hospitals",
    ],
    answer: 2,
  },
];

const LEVELS = [
  { level: "A1", min: 0, label: "基礎の入り口", summary: "基本的な単語、短い文、日常の定型表現を確認する段階です。" },
  { level: "A2", min: 18, label: "基礎運用", summary: "身近な話題なら短く理解・応答できます。文法の土台を広げると伸びやすいです。" },
  { level: "B1", min: 38, label: "自立の入口", summary: "日常や仕事の一般的な話題をかなり扱えます。説明力と読解の安定が次の鍵です。" },
  { level: "B2", min: 61, label: "実務運用", summary: "抽象的な話題やビジネス文脈でも要点を追えます。自然な表現の精度を上げたい段階です。" },
  { level: "C1", min: 82, label: "高度運用", summary: "複雑な文章や微妙なニュアンスを扱えます。説得力、簡潔さ、語彙選択が磨きどころです。" },
];

const AUDIO_VERSION = "20260518-elllo-1";
const SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbzkzwfHvoMetCZ4gYd-OUeGm_-T_YX6xAXmIwBPBR2V2rS5bYDicQPB0l2D1pDryqiiCw/exec";
const audioCache = new Map();

const state = {
  startedAt: null,
  remainingSeconds: 30 * 60,
  timerId: null,
  listeningPlays: new Map(),
  answers: new Map(),
  latestResult: null,
};

const startScreen = document.querySelector("#start-screen");
const testScreen = document.querySelector("#test-screen");
const resultScreen = document.querySelector("#result-screen");
const quizForm = document.querySelector("#quiz-form");
const progressBar = document.querySelector("#progress-bar");
const missingMessage = document.querySelector("#missing-message");
const timer = document.querySelector("#timer");

function getAudioUrl(src) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${src}?v=${AUDIO_VERSION}`;
}

const globalAudio = document.querySelector("#global-audio");

function preloadListeningAudio() {
  // DOM audio element is reused; nothing to preload separately
}

function showScreen(screen) {
  for (const item of [startScreen, testScreen, resultScreen]) {
    item.classList.toggle("active", item === screen);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestions() {
  quizForm.innerHTML = QUESTIONS.map((question, index) => {
    const listeningControl = question.audio
      ? `
        <div class="listening-control">
          <button class="listen-button" type="button" data-audio-index="${index}" aria-label="音声を再生 ${index + 1}">
            <span aria-hidden="true">▶</span>
            音声を再生
          </button>
          <span class="listen-status" data-listen-status="${index}">再生 0 / 2</span>
        </div>
      `
      : "";
    const options = question.options
      .map(
        (option, optionIndex) => `
          <label class="option">
            <input type="radio" name="q-${index}" value="${optionIndex}" />
            <span>${option}</span>
          </label>
        `,
      )
      .join("");

    return `
      <article class="question-card">
        <div class="question-meta">
          <span>Q${index + 1} / ${QUESTIONS.length}</span>
          <span>${question.skill} · ${question.level}</span>
        </div>
        <p class="question-text">${question.prompt}</p>
        ${listeningControl}
        <div class="options">${options}</div>
      </article>
    `;
  }).join("");
}

async function playListeningQuestion(index) {
  const question = QUESTIONS[index];
  if (!question?.audio) return;
  const played = state.listeningPlays.get(index) || 0;
  const status = document.querySelector(`[data-listen-status="${index}"]`);
  const button = document.querySelector(`[data-audio-index="${index}"]`);

  if (played >= 2) {
    missingMessage.textContent = "このリスニング音声は2回まで再生済みです。";
    return;
  }

  if (!question.audioSrc) {
    missingMessage.textContent = "このリスニング問題の音声ファイルが見つかりません。";
    return;
  }

  globalAudio.pause();
  globalAudio.currentTime = 0;
  globalAudio.src = getAudioUrl(question.audioSrc);
  globalAudio.load();

  state.listeningPlays.set(index, played + 1);
  if (status) {
    status.textContent = `再生 ${played + 1} / 2`;
  }
  if (button && played + 1 >= 2) {
    button.disabled = true;
    button.classList.add("is-disabled");
  }

  try {
    await globalAudio.play();
    missingMessage.textContent = "";
  } catch {
    missingMessage.textContent = "音声を再生できませんでした。ブラウザの音量設定を確認して、もう一度押してください。";
  }
}

function updateProgress() {
  const answered = state.answers.size;
  progressBar.style.width = `${(answered / QUESTIONS.length) * 100}%`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function startTimer() {
  clearInterval(state.timerId);
  state.remainingSeconds = 40 * 60;
  timer.textContent = formatTime(state.remainingSeconds);
  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    timer.textContent = formatTime(Math.max(0, state.remainingSeconds));
    if (state.remainingSeconds <= 0) {
      submitTest({ force: true });
    }
  }, 1000);
}

function getResultLevel(score) {
  return LEVELS.reduce((best, item) => (score >= item.min ? item : best), LEVELS[0]);
}

function calculateResult() {
  const maxPoints = QUESTIONS.reduce((total, question) => total + question.points, 0);
  let earned = 0;
  const skillStats = {};
  const missedLevels = {};

  const details = [];

  QUESTIONS.forEach((question, index) => {
    const raw = state.answers.get(index);
    const selected = raw !== undefined ? Number(raw) : null;
    const correct = selected === question.answer;
    if (!skillStats[question.skill]) {
      skillStats[question.skill] = { earned: 0, max: 0 };
    }
    skillStats[question.skill].max += question.points;
    if (correct) {
      earned += question.points;
      skillStats[question.skill].earned += question.points;
    } else {
      missedLevels[question.level] = (missedLevels[question.level] || 0) + 1;
    }
    details.push({ question, index, selected, correct });
  });

  const score = Math.round((earned / maxPoints) * 100);
  const completedAt = new Date();
  const elapsedSec = state.startedAt ? Math.floor((completedAt - state.startedAt) / 1000) : 0;
  const timeTaken = `${Math.floor(elapsedSec / 60)}分${String(elapsedSec % 60).padStart(2, "0")}秒`;
  return {
    name: document.querySelector("#participant-name").value.trim() || "Anonymous",
    score,
    earned,
    maxPoints,
    level: getResultLevel(score),
    skillStats,
    missedLevels,
    details,
    completedAt,
    timeTaken,
    answered: state.answers.size,
  };
}

function buildRecommendations(result) {
  const lowestSkill = Object.entries(result.skillStats)
    .map(([skill, stat]) => ({ skill, rate: stat.earned / stat.max }))
    .sort((a, b) => a.rate - b.rate)[0];

  const advice = [
    `${lowestSkill.skill} が今回いちばん伸びしろのある領域です。短い教材で正答理由を説明できるまで復習すると効果が出ます。`,
  ];

  if (result.level.level === "A1" || result.level.level === "A2") {
    advice.push("中学英文法の現在形、過去形、疑問文、前置詞を先に固めると、読解の点数も一緒に上がります。");
  } else if (result.level.level === "B1") {
    advice.push("B2に向けて、条件文、受動態、現在完了、句動詞を例文ごと覚えるのが近道です。");
  } else if (result.level.level === "B2") {
    advice.push("C1に向けて、抽象語彙、婉曲表現、長めの英文の論理関係を読む練習が効きます。");
  } else {
    advice.push("C1以上では、正確さだけでなく、簡潔で自然な言い換えと説得力のある構成が差になります。");
  }

  advice.push("このテストはスピーキングとライティングを直接測っていないため、会話力や作文力は別テストで補うと判定がより正確になります。");
  return advice;
}

function drawScore(score) {
  const canvas = document.querySelector("#score-canvas");
  const context = canvas.getContext("2d");
  const center = canvas.width / 2;
  const radius = 92;
  const end = -Math.PI / 2 + (Math.PI * 2 * score) / 100;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 18;
  context.lineCap = "round";
  context.strokeStyle = "#e8eeeb";
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.stroke();

  const gradient = context.createLinearGradient(42, 42, 218, 218);
  gradient.addColorStop(0, "#006c67");
  gradient.addColorStop(0.55, "#2f5f9f");
  gradient.addColorStop(1, "#d94f3d");
  context.strokeStyle = gradient;
  context.beginPath();
  context.arc(center, center, radius, -Math.PI / 2, end);
  context.stroke();

  context.fillStyle = "#17211b";
  context.font = "900 42px system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(`${score}`, center, center - 8);
  context.fillStyle = "#66706b";
  context.font = "800 15px system-ui, sans-serif";
  context.fillText("/ 100", center, center + 30);
}

function renderResult(result) {
  document.querySelector("#result-title").textContent = `${result.name} さんの結果`;
  document.querySelector("#cefr-badge").textContent = result.level.level;
  document.querySelector("#score-line").textContent = `${result.score} / 100`;
  document.querySelector("#summary-line").textContent = `${result.level.label}: ${result.level.summary}`;

  document.querySelector("#skill-breakdown").innerHTML = Object.entries(result.skillStats)
    .map(([skill, stat]) => {
      const percent = Math.round((stat.earned / stat.max) * 100);
      return `
        <div class="skill-row">
          <span>${skill}</span>
          <div class="skill-track"><i style="width: ${percent}%"></i></div>
          <strong>${percent}</strong>
        </div>
      `;
    })
    .join("");

  document.querySelector("#recommendations").innerHTML = buildRecommendations(result)
    .map((item) => `<li>${item}</li>`)
    .join("");

  drawScore(result.score);
  renderAnswerReview(result);
}

function renderAnswerReview(result) {
  document.querySelector("#answer-review").innerHTML = result.details.map(({ question, index, selected, correct }) => {
    const unanswered = selected === null;
    const cardClass = unanswered ? "review-card is-unanswered" : correct ? "review-card is-correct" : "review-card is-wrong";
    const icon = unanswered ? "−" : correct ? "✓" : "✗";

    const optionsHtml = question.options.map((opt, i) => {
      let cls = "review-option";
      if (i === question.answer) cls += " is-correct-answer";
      if (!unanswered && i === selected && !correct) cls += " is-selected-wrong";
      return `<span class="${cls}">${opt}</span>`;
    }).join("");

    const promptText = question.prompt.replace(/\n/g, "<br>");

    return `
      <div class="${cardClass}">
        <div class="review-meta">
          <span class="review-num">Q${index + 1}</span>
          <span class="review-skill">${question.skill} · ${question.level}</span>
          <span class="review-icon">${icon}</span>
        </div>
        <p class="review-prompt">${promptText}</p>
        <div class="review-options">${optionsHtml}</div>
        ${unanswered ? '<p class="review-unanswered-note">未回答</p>' : ""}
      </div>
    `;
  }).join("");
}

async function sendResultToSheet(result) {
  const date = result.completedAt.toLocaleDateString("ja-JP", {
    year: "numeric", month: "2-digit", day: "2-digit",
  });
  const skills = Object.entries(result.skillStats)
    .map(([skill, stat]) => `${skill}:${Math.round((stat.earned / stat.max) * 100)}`)
    .join(" / ");
  const details = result.details.map(({ question, index, selected, correct }) => ({
    index,
    skill: question.skill,
    level: question.level,
    prompt: question.prompt,
    correct,
    correctOption: question.options[question.answer],
    selectedOption: selected !== null ? question.options[selected] : null,
  }));

  const docLinkEl = document.querySelector("#doc-link");
  if (docLinkEl) docLinkEl.textContent = "送信中…";

  try {
    const res = await fetch(SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ date, name: result.name, score: result.score, cefr: result.level.level, skills, timeTaken: result.timeTaken, details }),
    });
    const json = await res.json();
    if (docLinkEl && json.docUrl) {
      docLinkEl.innerHTML = `<a href="${json.docUrl}" target="_blank" rel="noopener">📄 回答用紙を開く</a>`;
    }
  } catch {
    if (docLinkEl) docLinkEl.textContent = "";
  }
}

function submitTest({ force = false } = {}) {
  if (!force && state.answers.size < QUESTIONS.length) {
    missingMessage.textContent = `未回答が ${QUESTIONS.length - state.answers.size} 問あります。すべて回答してから採点できます。`;
    return;
  }
  clearInterval(state.timerId);
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
  }
  state.latestResult = calculateResult();
  renderResult(state.latestResult);
  sendResultToSheet(state.latestResult);
  showScreen(resultScreen);
}

function downloadCsv() {
  if (!state.latestResult) return;
  const result = state.latestResult;
  const rows = [
    ["name", "score", "cefr_estimate", "answered", "completed_at"],
    [result.name, result.score, result.level.level, result.answered, result.completedAt.toISOString()],
    [],
    ["skill", "earned_points", "max_points", "percent"],
    ...Object.entries(result.skillStats).map(([skill, stat]) => [
      skill,
      stat.earned,
      stat.max,
      Math.round((stat.earned / stat.max) * 100),
    ]),
  ];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `english-level-result-${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

renderQuestions();

quizForm.addEventListener("click", (event) => {
  const button = event.target.closest(".listen-button");
  if (!button) return;
  playListeningQuestion(Number(button.dataset.audioIndex));
});

quizForm.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='radio']")) return;
  const questionIndex = Number(event.target.name.replace("q-", ""));
  state.answers.set(questionIndex, event.target.value);
  missingMessage.textContent = "";
  updateProgress();
});

document.querySelector("#start-button").addEventListener("click", () => {
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
  }
  preloadListeningAudio();
  state.answers.clear();
  state.listeningPlays.clear();
  state.startedAt = new Date();
  quizForm.reset();
  updateProgress();
  showScreen(testScreen);
  startTimer();
});

document.querySelector("#submit-button").addEventListener("click", () => submitTest());
document.querySelector("#restart-button").addEventListener("click", () => {
  clearInterval(state.timerId);
  if (globalAudio) {
    globalAudio.pause();
    globalAudio.currentTime = 0;
  }
  showScreen(startScreen);
});
document.querySelector("#download-button").addEventListener("click", downloadCsv);
