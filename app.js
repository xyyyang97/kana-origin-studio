const kanaData = [
  { row: "元音", romaji: "a", hira: "あ", kata: "ア", hiraOrigin: "安", kataOrigin: "阿", hint: "安的草写收成あ；阿取左侧轮廓成ア。" },
  { row: "元音", romaji: "i", hira: "い", kata: "イ", hiraOrigin: "以", kataOrigin: "伊", hint: "以的连笔留下两道气息；伊的左侧单人旁像イ。" },
  { row: "元音", romaji: "u", hira: "う", kata: "ウ", hiraOrigin: "宇", kataOrigin: "宇", hint: "宇的宝盖写快后像う；ウ保留上方屋檐。" },
  { row: "元音", romaji: "e", hira: "え", kata: "エ", hiraOrigin: "衣", kataOrigin: "江", hint: "衣的草写转折成え；江的工部被截成エ。" },
  { row: "元音", romaji: "o", hira: "お", kata: "オ", hiraOrigin: "於", kataOrigin: "於", hint: "於的草写绕出お；オ像於字中的利落骨架。" },
  { row: "K 行", romaji: "ka", hira: "か", kata: "カ", hiraOrigin: "加", kataOrigin: "加", hint: "加的力部就是カ，草写后左弯成か。" },
  { row: "K 行", romaji: "ki", hira: "き", kata: "キ", hiraOrigin: "機", kataOrigin: "機", hint: "機的木旁横竖抽出来像キ，草写多一笔成き。" },
  { row: "K 行", romaji: "ku", hira: "く", kata: "ク", hiraOrigin: "久", kataOrigin: "久", hint: "久的撇捺简化成一个弯角，像く/ク。" },
  { row: "K 行", romaji: "ke", hira: "け", kata: "ケ", hiraOrigin: "計", kataOrigin: "介", hint: "計草写留下竖与右勾；介上部截取成ケ。" },
  { row: "K 行", romaji: "ko", hira: "こ", kata: "コ", hiraOrigin: "己", kataOrigin: "己", hint: "己的上下边被分开，就很好认こ/コ。" },
  { row: "S 行", romaji: "sa", hira: "さ", kata: "サ", hiraOrigin: "左", kataOrigin: "散", hint: "左草写成さ；散的上部横竖像サ。" },
  { row: "S 行", romaji: "shi", hira: "し", kata: "シ", hiraOrigin: "之", kataOrigin: "之", hint: "之的草写一笔滑下成し，片假名用短点加斜线。" },
  { row: "S 行", romaji: "su", hira: "す", kata: "ス", hiraOrigin: "寸", kataOrigin: "須", hint: "寸的钩转成す；須取末端交叉感成ス。" },
  { row: "S 行", romaji: "se", hira: "せ", kata: "セ", hiraOrigin: "世", kataOrigin: "世", hint: "世字横竖关系很明显，せ/セ都保留这个骨架。" },
  { row: "S 行", romaji: "so", hira: "そ", kata: "ソ", hiraOrigin: "曽", kataOrigin: "曽", hint: "曽上部写快像そ，片假名压成两笔ソ。" },
  { row: "T 行", romaji: "ta", hira: "た", kata: "タ", hiraOrigin: "太", kataOrigin: "多", hint: "太的草写成た；多的夕形截取成タ。" },
  { row: "T 行", romaji: "chi", hira: "ち", kata: "チ", hiraOrigin: "知", kataOrigin: "千", hint: "知草写成ち；千的上横竖笔就是チ。" },
  { row: "T 行", romaji: "tsu", hira: "つ", kata: "ツ", hiraOrigin: "川", kataOrigin: "州", hint: "川的水势连成つ；州的点线变成ツ。" },
  { row: "T 行", romaji: "te", hira: "て", kata: "テ", hiraOrigin: "天", kataOrigin: "天", hint: "天的横与下收写快成て，楷书骨架像テ。" },
  { row: "T 行", romaji: "to", hira: "と", kata: "ト", hiraOrigin: "止", kataOrigin: "止", hint: "止的一段留下ト，草写收笔成と。" },
  { row: "N 行", romaji: "na", hira: "な", kata: "ナ", hiraOrigin: "奈", kataOrigin: "奈", hint: "奈的上部大字感变ナ，草写后多出な的回钩。" },
  { row: "N 行", romaji: "ni", hira: "に", kata: "ニ", hiraOrigin: "仁", kataOrigin: "仁", hint: "仁的二横直接帮你记ニ；草写旁边加竖成に。" },
  { row: "N 行", romaji: "nu", hira: "ぬ", kata: "ヌ", hiraOrigin: "奴", kataOrigin: "奴", hint: "奴的又部像ヌ，草写绕成ぬ。" },
  { row: "N 行", romaji: "ne", hira: "ね", kata: "ネ", hiraOrigin: "祢", kataOrigin: "祢", hint: "祢的示字旁像ネ；草写加回环就是ね。" },
  { row: "N 行", romaji: "no", hira: "の", kata: "ノ", hiraOrigin: "乃", kataOrigin: "乃", hint: "乃的一笔旋转成の，片假名保留一撇ノ。" },
  { row: "H 行", romaji: "ha", hira: "は", kata: "ハ", hiraOrigin: "波", kataOrigin: "八", hint: "波草写成は；八的两撇就是ハ。" },
  { row: "H 行", romaji: "hi", hira: "ひ", kata: "ヒ", hiraOrigin: "比", kataOrigin: "比", hint: "比的右侧钩像ヒ，草写变宽成ひ。" },
  { row: "H 行", romaji: "fu", hira: "ふ", kata: "フ", hiraOrigin: "不", kataOrigin: "不", hint: "不的下部散开成ふ，顶部截成フ。" },
  { row: "H 行", romaji: "he", hira: "へ", kata: "ヘ", hiraOrigin: "部", kataOrigin: "部", hint: "部的右部走势简化为山形へ/ヘ。" },
  { row: "H 行", romaji: "ho", hira: "ほ", kata: "ホ", hiraOrigin: "保", kataOrigin: "保", hint: "保里的木形像ホ，草写后加竖弯成ほ。" },
  { row: "M 行", romaji: "ma", hira: "ま", kata: "マ", hiraOrigin: "末", kataOrigin: "末", hint: "末的横竖草写成ま；片假名取上部转折成マ。" },
  { row: "M 行", romaji: "mi", hira: "み", kata: "ミ", hiraOrigin: "美", kataOrigin: "三", hint: "美草写成み；三的三横就是ミ。" },
  { row: "M 行", romaji: "mu", hira: "む", kata: "ム", hiraOrigin: "武", kataOrigin: "牟", hint: "武草写有回环成む；牟下部收成ム。" },
  { row: "M 行", romaji: "me", hira: "め", kata: "メ", hiraOrigin: "女", kataOrigin: "女", hint: "女的交叉骨架像メ，草写绕开成め。" },
  { row: "M 行", romaji: "mo", hira: "も", kata: "モ", hiraOrigin: "毛", kataOrigin: "毛", hint: "毛的横竖钩能看出も/モ。" },
  { row: "Y 行", romaji: "ya", hira: "や", kata: "ヤ", hiraOrigin: "也", kataOrigin: "也", hint: "也的斜挑和竖弯留下や/ヤ。" },
  { row: "Y 行", romaji: "yu", hira: "ゆ", kata: "ユ", hiraOrigin: "由", kataOrigin: "由", hint: "由的框线连写成ゆ，片假名取中间框成ユ。" },
  { row: "Y 行", romaji: "yo", hira: "よ", kata: "ヨ", hiraOrigin: "与", kataOrigin: "與", hint: "与的草写成よ；與的层叠横线简化成ヨ。" },
  { row: "R 行", romaji: "ra", hira: "ら", kata: "ラ", hiraOrigin: "良", kataOrigin: "良", hint: "良的上部像ラ，草写后收成ら。" },
  { row: "R 行", romaji: "ri", hira: "り", kata: "リ", hiraOrigin: "利", kataOrigin: "利", hint: "利的刀旁两笔就是リ，草写也保留两笔感。" },
  { row: "R 行", romaji: "ru", hira: "る", kata: "ル", hiraOrigin: "留", kataOrigin: "流", hint: "留草写成る；流的右下两笔像ル。" },
  { row: "R 行", romaji: "re", hira: "れ", kata: "レ", hiraOrigin: "礼", kataOrigin: "礼", hint: "礼的右侧弯钩像レ，草写延展成れ。" },
  { row: "R 行", romaji: "ro", hira: "ろ", kata: "ロ", hiraOrigin: "呂", kataOrigin: "呂", hint: "呂的口形收成ロ，草写上下一连成ろ。" },
  { row: "W 行", romaji: "wa", hira: "わ", kata: "ワ", hiraOrigin: "和", kataOrigin: "和", hint: "和的右口截取像ワ，草写加左竖成わ。" },
  { row: "W 行", romaji: "wo", hira: "を", kata: "ヲ", hiraOrigin: "遠", kataOrigin: "乎", hint: "遠草写成を；乎的层次被压成ヲ。现代多作助词，读 o。" },
  { row: "鼻音", romaji: "n", hira: "ん", kata: "ン", hiraOrigin: "无", kataOrigin: "尓", hint: "无的草写顺势成ん；尓的右下收笔像ン。" }
];

const rows = ["全部", ...new Set(kanaData.map((item) => item.row))];
let mode = localStorage.getItem("kana-mode") || "hiragana";
let row = "全部";
let cardIndex = Number(localStorage.getItem("kana-card-index") || 0);
let quizItem = null;
let deferredInstallPrompt = null;
let audioMode = localStorage.getItem("kana-audio-mode") || "human";
let selectedVoiceURI = localStorage.getItem("kana-voice-uri") || "";
let voices = [];
const stats = JSON.parse(localStorage.getItem("kana-stats") || '{"known":[],"correct":0,"total":0,"streak":0}');

const $ = (selector) => document.querySelector(selector);
const grid = $("#kanaGrid");
const rowFilter = $("#rowFilter");
const flashCard = $("#flashCard");

function scriptLabel(scriptMode = mode) {
  if (scriptMode === "katakana") return "片假名";
  if (scriptMode === "both") return "混合";
  return "平假名";
}

function activeItems() {
  return kanaData.filter((item) => row === "全部" || item.row === row);
}

function currentScriptForItem(index = cardIndex) {
  if (mode === "both") return index % 2 === 0 ? "hiragana" : "katakana";
  return mode;
}

function kanaFor(item, scriptMode = currentScriptForItem()) {
  return scriptMode === "katakana" ? item.kata : item.hira;
}

function originFor(item, scriptMode = currentScriptForItem()) {
  return scriptMode === "katakana" ? item.kataOrigin : item.hiraOrigin;
}

function originLabel(scriptMode = currentScriptForItem()) {
  return scriptMode === "katakana" ? "楷书来源 / 截取" : "草书来源";
}

function saveStats() {
  localStorage.setItem("kana-stats", JSON.stringify(stats));
  localStorage.setItem("kana-mode", mode);
  localStorage.setItem("kana-card-index", String(cardIndex));
  localStorage.setItem("kana-audio-mode", audioMode);
  localStorage.setItem("kana-voice-uri", selectedVoiceURI);
}

function updateStats() {
  $("#knownCount").textContent = stats.known.length;
  $("#streakCount").textContent = stats.streak;
  $("#accuracyRate").textContent = stats.total ? `${Math.round((stats.correct / stats.total) * 100)}%` : "0%";
  saveStats();
}

function renderRows() {
  rowFilter.innerHTML = rows
    .map((name) => `<button class="row-chip ${name === row ? "active" : ""}" data-row="${name}">${name}</button>`)
    .join("");
}

function renderGrid() {
  const items = activeItems();
  grid.innerHTML = items
    .map((item, index) => {
      const showMode = mode === "katakana" ? "katakana" : "hiragana";
      return `
        <button class="kana-cell" data-index="${kanaData.indexOf(item)}">
          <span class="cell-top"><span>${item.row}</span><span>${scriptLabel(showMode)}</span></span>
          <span class="kana-main"><strong>${kanaFor(item, showMode)}</strong><span>${item.romaji}</span></span>
          <span class="origin-mini"><span>${originLabel(showMode)} ${originFor(item, showMode)}</span><span>${index + 1}/${items.length}</span></span>
        </button>
      `;
    })
    .join("");
}

function renderCard() {
  const items = activeItems();
  if (!items.length) return;
  cardIndex = (cardIndex + items.length) % items.length;
  const item = items[cardIndex];
  const showMode = currentScriptForItem(cardIndex);
  $("#cardScriptLabel").textContent = scriptLabel(showMode);
  $("#cardKana").textContent = kanaFor(item, showMode);
  $("#cardRomaji").textContent = item.romaji;
  $("#cardOriginLabel").textContent = originLabel(showMode);
  $("#cardOrigin").textContent = originFor(item, showMode);
  $("#cardPath").textContent = `${originFor(item, showMode)} → ${kanaFor(item, showMode)}`;
  $("#cardMnemonic").textContent = item.hint;
  flashCard.classList.remove("flipped");
  saveStats();
}

function showDetail(globalIndex) {
  const item = kanaData[globalIndex];
  $("#detailBody").innerHTML = `
    <p class="eyebrow">${item.row} · ${item.romaji}</p>
    <h2>${item.hira} / ${item.kata}</h2>
    <div class="detail-kana">
      <div><span>平假名 · 草书来源 ${item.hiraOrigin}</span><strong>${item.hira}</strong></div>
      <div><span>片假名 · 楷书来源 ${item.kataOrigin}</span><strong>${item.kata}</strong></div>
    </div>
    <p>${item.hint}</p>
    <button class="primary-action buttonish" data-speak="${item.romaji}">播放 ${item.romaji}</button>
  `;
  $("#detailDialog").showModal();
}

function audioName(romaji) {
  const names = {
    a: "A",
    i: "I",
    u: "U",
    e: "E",
    o: "O",
    ka: "Ka",
    ki: "Ki",
    ku: "Ku",
    ke: "Ke",
    ko: "Ko",
    sa: "Sa",
    shi: "Shi",
    su: "Su",
    se: "Se",
    so: "So",
    ta: "Ta",
    chi: "Chi",
    tsu: "Tsu",
    te: "Te",
    to: "To",
    na: "Na",
    ni: "Ni",
    nu: "Nu",
    ne: "Ne",
    no: "No",
    ha: "Ha",
    hi: "Hi",
    fu: "Fu",
    he: "He",
    ho: "Ho",
    ma: "Ma",
    mi: "Mi",
    mu: "Mu",
    me: "Me",
    mo: "Mo",
    ya: "Ya",
    yu: "Yu",
    yo: "Yo",
    ra: "Ra",
    ri: "Ri",
    ru: "Ru",
    re: "Re",
    ro: "Ro",
    wa: "Wa",
    wo: "Wo"
  };
  return names[romaji] || "";
}

async function playHumanAudio(item) {
  const name = audioName(item.romaji);
  if (!name) throw new Error("No human audio file");
  const audio = new Audio(`https://commons.wikimedia.org/wiki/Special:Redirect/file/Ja-${name}.oga`);
  audio.preload = "auto";
  audio.crossOrigin = "anonymous";
  audio.volume = 0.95;
  await audio.play();
}

function speakSystem(text) {
  if (!("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text === "n" ? "ん" : text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.72;
  utterance.pitch = 1.05;
  const voice = voices.find((item) => item.voiceURI === selectedVoiceURI) || voices.find((item) => item.lang?.toLowerCase().startsWith("ja"));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
  return true;
}

async function speakItem(item) {
  if (audioMode === "human") {
    try {
      await playHumanAudio(item);
      return;
    } catch (error) {
      speakSystem(item.hira);
      return;
    }
  }
  speakSystem(item.hira);
}

function renderVoices() {
  if (!("speechSynthesis" in window)) {
    $("#voiceSelect").innerHTML = `<option>浏览器不支持</option>`;
    return;
  }
  voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang?.toLowerCase().startsWith("ja"));
  const options = voices.length ? voices : window.speechSynthesis.getVoices();
  if (!options.length) {
    $("#voiceSelect").innerHTML = `<option value="">自动选择</option>`;
    return;
  }
  $("#voiceSelect").innerHTML = options
    .map((voice) => `<option value="${voice.voiceURI}">${voice.name}</option>`)
    .join("");
  if (!selectedVoiceURI && options[0]) selectedVoiceURI = options[0].voiceURI;
  $("#voiceSelect").value = selectedVoiceURI;
}

function pickQuizItem() {
  const items = activeItems();
  const item = items[Math.floor(Math.random() * items.length)];
  const showMode = mode === "both" ? (Math.random() > 0.5 ? "hiragana" : "katakana") : mode;
  quizItem = { item, showMode };
  $("#quizType").textContent = scriptLabel(showMode);
  $("#quizKana").textContent = kanaFor(item, showMode);
  $("#answerInput").value = "";
  $("#quizFeedback").textContent = "";
  $("#quizFeedback").className = "quiz-feedback";
  renderChoices(item);
}

function renderChoices(item) {
  const pool = kanaData.filter((candidate) => candidate.romaji !== item.romaji).sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [item, ...pool].sort(() => Math.random() - 0.5);
  $("#choiceRow").innerHTML = choices
    .map((choice, index) => `<button class="choice" data-answer="${choice.romaji}"><kbd>${index + 1}</kbd> ${choice.romaji}</button>`)
    .join("");
}

function checkAnswer(value) {
  const answer = value.trim().toLowerCase();
  if (!answer || !quizItem) return;
  const correct = quizItem.item.romaji;
  const accepted = correct === "wo" ? ["wo", "o"] : [correct];
  stats.total += 1;
  if (accepted.includes(answer)) {
    stats.correct += 1;
    stats.streak += 1;
    $("#quizFeedback").textContent = `对，是 ${correct}。`;
    $("#quizFeedback").className = "quiz-feedback good";
    updateStats();
    setTimeout(pickQuizItem, 650);
  } else {
    stats.streak = 0;
    $("#quizFeedback").textContent = `还差一点：这是 ${correct}。线索：${quizItem.item.hint}`;
    $("#quizFeedback").className = "quiz-feedback bad";
    updateStats();
  }
}

function markKnown() {
  const item = activeItems()[cardIndex];
  const key = `${item.romaji}-${currentScriptForItem(cardIndex)}`;
  if (!stats.known.includes(key)) stats.known.push(key);
  updateStats();
  cardIndex += 1;
  renderCard();
}

function renderOriginList() {
  $("#originList").innerHTML = kanaData
    .map(
      (item) => `
        <div class="origin-row">
          <div class="pair">${item.hira}${item.kata}</div>
          <div><small>草书</small><strong class="sosho">${item.hiraOrigin}</strong></div>
          <div><small>楷书</small><strong class="kaisho">${item.kataOrigin}</strong></div>
          <div class="romaji"><small>音</small><strong>${item.romaji}</strong></div>
        </div>
      `
    )
    .join("");
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    mode = button.dataset.mode;
    renderGrid();
    renderCard();
    pickQuizItem();
    saveStats();
  });
  button.classList.toggle("active", button.dataset.mode === mode);
});

rowFilter.addEventListener("click", (event) => {
  const button = event.target.closest("[data-row]");
  if (!button) return;
  row = button.dataset.row;
  cardIndex = 0;
  renderRows();
  renderGrid();
  renderCard();
  pickQuizItem();
});

grid.addEventListener("click", (event) => {
  const cell = event.target.closest(".kana-cell");
  if (cell) showDetail(Number(cell.dataset.index));
});

flashCard.addEventListener("click", () => flashCard.classList.toggle("flipped"));
flashCard.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    flashCard.classList.toggle("flipped");
  }
});

$("#prevCard").addEventListener("click", () => {
  cardIndex -= 1;
  renderCard();
});
$("#nextCard").addEventListener("click", () => {
  cardIndex += 1;
  renderCard();
});
$("#knownCard").addEventListener("click", markKnown);
$("#speakCard").addEventListener("click", (event) => {
  event.stopPropagation();
  speakItem(activeItems()[cardIndex]);
});
$("#speakQuiz").addEventListener("click", () => speakItem(quizItem.item));

$("#answerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer($("#answerInput").value);
});

$("#choiceRow").addEventListener("click", (event) => {
  const choice = event.target.closest("[data-answer]");
  if (choice) checkAnswer(choice.dataset.answer);
});

$("#detailBody").addEventListener("click", (event) => {
  const button = event.target.closest("[data-speak]");
  if (button) {
    const item = kanaData.find((candidate) => candidate.romaji === button.dataset.speak);
    if (item) speakItem(item);
  }
});

$("#closeDialog").addEventListener("click", () => $("#detailDialog").close());

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $("#installBtn").hidden = false;
});

$("#installBtn").addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    alert("可以把这个站点添加到手机桌面：iPhone 用 Safari 分享按钮里的“添加到主屏幕”；Android Chrome 用菜单里的“安装应用”。");
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
});

$("#audioMode").value = audioMode;
$("#audioMode").addEventListener("change", (event) => {
  audioMode = event.target.value;
  saveStats();
});

$("#voiceSelect").addEventListener("change", (event) => {
  selectedVoiceURI = event.target.value;
  saveStats();
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target?.matches?.("input, textarea, select");
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    $("#answerInput").focus();
    return;
  }
  if (isTyping) return;
  if (event.key === " ") {
    event.preventDefault();
    flashCard.classList.toggle("flipped");
    flashCard.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  if (event.key.toLowerCase() === "s") {
    event.preventDefault();
    const inQuiz = Math.abs($("#quiz").getBoundingClientRect().top) < Math.abs($("#study").getBoundingClientRect().top);
    speakItem(inQuiz ? quizItem.item : activeItems()[cardIndex]);
  }
  if (event.key.toLowerCase() === "j") {
    event.preventDefault();
    cardIndex -= 1;
    renderCard();
  }
  if (event.key.toLowerCase() === "k") {
    event.preventDefault();
    markKnown();
  }
  if (event.key.toLowerCase() === "l") {
    event.preventDefault();
    cardIndex += 1;
    renderCard();
  }
  if (/^[1-4]$/.test(event.key)) {
    const choice = document.querySelectorAll("#choiceRow .choice")[Number(event.key) - 1];
    if (choice) {
      event.preventDefault();
      checkAnswer(choice.dataset.answer);
    }
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderVoices();
if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", renderVoices);
}

renderRows();
renderGrid();
renderCard();
renderOriginList();
pickQuizItem();
updateStats();
