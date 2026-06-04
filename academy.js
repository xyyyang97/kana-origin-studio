const extendedKana = [
  ["浊音", "ga", "が", "ガ"], ["浊音", "gi", "ぎ", "ギ"], ["浊音", "gu", "ぐ", "グ"], ["浊音", "ge", "げ", "ゲ"], ["浊音", "go", "ご", "ゴ"],
  ["浊音", "za", "ざ", "ザ"], ["浊音", "ji", "じ", "ジ"], ["浊音", "zu", "ず", "ズ"], ["浊音", "ze", "ぜ", "ゼ"], ["浊音", "zo", "ぞ", "ゾ"],
  ["浊音", "da", "だ", "ダ"], ["浊音", "ji", "ぢ", "ヂ"], ["浊音", "zu", "づ", "ヅ"], ["浊音", "de", "で", "デ"], ["浊音", "do", "ど", "ド"],
  ["浊音", "ba", "ば", "バ"], ["浊音", "bi", "び", "ビ"], ["浊音", "bu", "ぶ", "ブ"], ["浊音", "be", "べ", "ベ"], ["浊音", "bo", "ぼ", "ボ"],
  ["半浊音", "pa", "ぱ", "パ"], ["半浊音", "pi", "ぴ", "ピ"], ["半浊音", "pu", "ぷ", "プ"], ["半浊音", "pe", "ぺ", "ペ"], ["半浊音", "po", "ぽ", "ポ"],
  ["拗音", "kya", "きゃ", "キャ"], ["拗音", "kyu", "きゅ", "キュ"], ["拗音", "kyo", "きょ", "キョ"],
  ["拗音", "sha", "しゃ", "シャ"], ["拗音", "shu", "しゅ", "シュ"], ["拗音", "sho", "しょ", "ショ"],
  ["拗音", "cha", "ちゃ", "チャ"], ["拗音", "chu", "ちゅ", "チュ"], ["拗音", "cho", "ちょ", "チョ"],
  ["拗音", "nya", "にゃ", "ニャ"], ["拗音", "nyu", "にゅ", "ニュ"], ["拗音", "nyo", "にょ", "ニョ"],
  ["拗音", "hya", "ひゃ", "ヒャ"], ["拗音", "hyu", "ひゅ", "ヒュ"], ["拗音", "hyo", "ひょ", "ヒョ"],
  ["拗音", "mya", "みゃ", "ミャ"], ["拗音", "myu", "みゅ", "ミュ"], ["拗音", "myo", "みょ", "ミョ"],
  ["拗音", "rya", "りゃ", "リャ"], ["拗音", "ryu", "りゅ", "リュ"], ["拗音", "ryo", "りょ", "リョ"],
  ["拗音", "gya", "ぎゃ", "ギャ"], ["拗音", "gyu", "ぎゅ", "ギュ"], ["拗音", "gyo", "ぎょ", "ギョ"],
  ["拗音", "ja", "じゃ", "ジャ"], ["拗音", "ju", "じゅ", "ジュ"], ["拗音", "jo", "じょ", "ジョ"],
  ["拗音", "bya", "びゃ", "ビャ"], ["拗音", "byu", "びゅ", "ビュ"], ["拗音", "byo", "びょ", "ビョ"],
  ["拗音", "pya", "ぴゃ", "ピャ"], ["拗音", "pyu", "ぴゅ", "ピュ"], ["拗音", "pyo", "ぴょ", "ピョ"]
].map(([rowName, romaji, hira, kata]) => ({ row: rowName, romaji, hira, kata, hiraOrigin: "组合音", kataOrigin: "组合音", hint: `${hira} / ${kata} 由基础假名加符号或小假名组合而成。` }));

const academyItems = [...kanaData, ...extendedKana];
const academyKey = "kana-academy-v1";
const academy = JSON.parse(localStorage.getItem(academyKey) || '{"completed":[],"sessions":0}');
let focusSession = null;
const baseUpdateStats = updateStats;
updateStats = function updateStatsWithAcademy() {
  baseUpdateStats();
  renderToday();
  renderWeak();
};

function saveAcademy() {
  localStorage.setItem(academyKey, JSON.stringify(academy));
}

function reviewScore(item) {
  const scripts = ["hiragana", "katakana"];
  return scripts.reduce((sum, scriptMode) => {
    const record = stats.review?.[`${item.romaji}-${scriptMode}`];
    return sum + (record?.wrong || 0) * 3 - (record?.correct || 0);
  }, 0);
}

function weakItems() {
  return kanaData.slice().sort((a, b) => reviewScore(b) - reviewScore(a)).filter((item) => reviewScore(item) > 0).slice(0, 6);
}

function todayItems() {
  const weak = weakItems().slice(0, 3);
  const unseen = kanaData.filter((item) => !stats.known.includes(`${item.romaji}-hiragana`) && !stats.known.includes(`${item.romaji}-katakana`)).slice(0, 5);
  return [...new Map([...weak, ...unseen].map((item) => [item.romaji, item])).values()].slice(0, 8);
}

function renderToday() {
  const items = todayItems();
  const learned = stats.known.length;
  const total = academyItems.length * 2;
  const percent = Math.min(100, Math.round((learned / total) * 100));
  $("#todayDate").textContent = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
  $("#todayTitle").textContent = items.length ? `复习 ${weakItems().length} 个薄弱项 · 学习 ${Math.min(5, items.length)} 个新假名` : "基础假名已完成，继续挑战扩展音节";
  $("#todayPercent").textContent = `${percent}%`;
  $("#todayRing").style.setProperty("--progress", `${percent * 3.6}deg`);
  $("#syllabaryCount").textContent = `${Math.min(academyItems.length, Math.floor(learned / 2))} / ${academyItems.length}`;
  $("#todaySteps").innerHTML = [
    ["1", "快速复习", weakItems().length ? `${weakItems().length} 个薄弱项` : "热身 3 题"],
    ["2", "学习新字", `${Math.min(5, items.length)} 个新假名`],
    ["3", "混合测试", "10 题达到 80%"]
  ].map(([number, title, detail]) => `<div><strong>${number}</strong><span><b>${title}</b><small>${detail}</small></span></div>`).join("");
  const groups = [
    ["基础音", 46, 46],
    ["浊音/半浊音", 25, Math.max(0, Math.min(25, academy.completed.filter((x) => x.startsWith("浊音") || x.startsWith("半浊音")).length))],
    ["拗音", 33, Math.max(0, Math.min(33, academy.completed.filter((x) => x.startsWith("拗音")).length))]
  ];
  $("#mapTrack").innerHTML = groups.map(([name, count, done]) => `<div><span><b>${name}</b><small>${done}/${count}</small></span><progress max="${count}" value="${done}"></progress></div>`).join("");
}

function renderWeak() {
  const items = weakItems();
  $("#weakList").innerHTML = items.length
    ? items.map((item) => `<button type="button" data-weak="${item.romaji}"><strong>${item.hira}${item.kata}</strong><span>${item.romaji}<small>错题权重 ${reviewScore(item)}</small></span></button>`).join("")
    : `<div class="empty-state"><strong>还没有明显薄弱项</strong><span>完成几组测验后，这里会自动整理。</span></div>`;
}

function focusKana(item) {
  return mode === "katakana" ? item.kata : item.hira;
}

function createFocusChoices(answerItem, type, pool) {
  const choices = shuffle([answerItem, ...shuffle(pool.filter((item) => item !== answerItem && item.romaji !== answerItem.romaji)).slice(0, 3)]);
  return choices.map((item) => ({
    value: type === "recognition" || type === "words" ? item.romaji : focusKana(item),
    label: type === "recognition" || type === "words" ? item.romaji : focusKana(item)
  }));
}

function startFocus(type = "recognition", pool = kanaData, title = "专注训练") {
  const sessionPool = pool.length >= 4 ? pool : kanaData;
  focusSession = { type, title, items: shuffle(sessionPool).slice(0, Math.min(10, sessionPool.length)), index: 0, correct: 0 };
  $("#focusDialog").showModal();
  renderFocusQuestion();
}

function renderFocusQuestion() {
  const session = focusSession;
  if (!session) return;
  if (session.index >= session.items.length) {
    const score = Math.round((session.correct / session.items.length) * 100);
    academy.sessions += 1;
    if (score >= 80) {
      session.items
        .filter((item) => extendedKana.includes(item))
        .forEach((item) => {
          const key = `${item.row}-${item.hira}`;
          if (!academy.completed.includes(key)) academy.completed.push(key);
        });
    }
    saveAcademy();
    $("#focusModeLabel").textContent = "训练完成";
    $("#focusProgress").textContent = `${session.correct} / ${session.items.length}`;
    $("#focusBar").style.width = "100%";
    $("#focusKicker").textContent = score >= 80 ? "这一组已经过关" : "再练一次会更稳";
    $("#focusPrompt").textContent = `${score}%`;
    $("#focusChoices").innerHTML = "";
    $("#focusForm").hidden = true;
    $("#focusSound").hidden = true;
    $("#focusFeedback").innerHTML = `<button class="primary-action buttonish" id="repeatFocus" type="button">再练一组</button>`;
    $("#repeatFocus").addEventListener("click", () => startFocus(session.type, session.items, session.title));
    renderToday();
    return;
  }
  const item = session.items[session.index];
  const type = session.type;
  $("#focusModeLabel").textContent = session.title;
  $("#focusProgress").textContent = `${session.index + 1} / ${session.items.length}`;
  $("#focusBar").style.width = `${(session.index / session.items.length) * 100}%`;
  $("#focusFeedback").textContent = "";
  $("#focusForm").hidden = true;
  $("#focusSound").hidden = type !== "listening";
  const promptMap = {
    recognition: ["请选择正确读音", focusKana(item)],
    reverse: ["请选择对应假名", item.romaji],
    listening: ["听声音，选择假名", "♪"],
    words: ["判断这个词语的首音", (examples[item.romaji] || `${focusKana(item)} · ${item.romaji}`).split(" · ")[0]]
  };
  $("#focusKicker").textContent = promptMap[type][0];
  $("#focusPrompt").textContent = promptMap[type][1];
  const choices = createFocusChoices(item, type, session.items.length >= 4 ? session.items : kanaData);
  $("#focusChoices").innerHTML = choices.map((choice, index) => `<button type="button" data-focus-answer="${choice.value}"><kbd>${index + 1}</kbd>${choice.label}</button>`).join("");
  session.answer = type === "recognition" || type === "words" ? item.romaji : focusKana(item);
  session.current = item;
  if (type === "listening") speakItem(item);
}

function answerFocus(value) {
  if (!focusSession) return;
  const correct = value === focusSession.answer;
  if (correct) {
    focusSession.correct += 1;
    $("#focusFeedback").textContent = "正确";
    $("#focusFeedback").className = "focus-feedback good";
  } else {
    $("#focusFeedback").textContent = `正确答案：${focusSession.answer}`;
    $("#focusFeedback").className = "focus-feedback bad";
  }
  focusSession.index += 1;
  setTimeout(renderFocusQuestion, 480);
}

function showExtended() {
  const body = $("#detailBody");
  const groups = ["浊音", "半浊音", "拗音"];
  body.innerHTML = `<p class="eyebrow">Complete Kana</p><h2>完整音节地图</h2>${groups.map((group) => `<h3>${group}</h3><div class="extended-grid">${extendedKana.filter((item) => item.row === group).map((item) => `<button type="button" data-extended="${item.romaji}"><strong>${item.hira}</strong><span>${item.kata} · ${item.romaji}</span></button>`).join("")}</div>`).join("")}`;
  $("#detailDialog").showModal();
}

$("#startToday").addEventListener("click", () => startFocus("recognition", todayItems(), "今日学习"));
$("#practiceWeak").addEventListener("click", () => startFocus("recognition", weakItems(), "薄弱项复习"));
$("#openExtended").addEventListener("click", showExtended);
$("#closeFocus").addEventListener("click", () => $("#focusDialog").close());
$("#focusSound").addEventListener("click", () => focusSession?.current && speakItem(focusSession.current));
$("#focusChoices").addEventListener("click", (event) => {
  const button = event.target.closest("[data-focus-answer]");
  if (button) answerFocus(button.dataset.focusAnswer);
});
$("#focusForm").addEventListener("submit", (event) => {
  event.preventDefault();
  answerFocus($("#focusInput").value.trim().toLowerCase());
});
document.querySelectorAll("[data-focus-mode]").forEach((button) => button.addEventListener("click", () => startFocus(button.dataset.focusMode, kanaData, button.querySelector("span").textContent)));
$("#weakList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-weak]");
  if (!button) return;
  const item = kanaData.find((candidate) => candidate.romaji === button.dataset.weak);
  if (item) startFocus("recognition", [item, ...weakItems()], "薄弱项复习");
});
$("#detailBody").addEventListener("click", (event) => {
  const button = event.target.closest("[data-extended]");
  if (!button) return;
  const item = extendedKana.find((candidate) => candidate.romaji === button.dataset.extended);
  if (item) startFocus("recognition", extendedKana.filter((candidate) => candidate.row === item.row), item.row);
});
document.addEventListener("keydown", (event) => {
  if (!$("#focusDialog").open || !/^[1-4]$/.test(event.key)) return;
  const choices = document.querySelectorAll("#focusChoices [data-focus-answer]");
  const choice = choices[Number(event.key) - 1];
  if (choice) {
    event.preventDefault();
    answerFocus(choice.dataset.focusAnswer);
  }
});

renderToday();
renderWeak();
