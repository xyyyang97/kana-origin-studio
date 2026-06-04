const phraseGroups = {
  "Greetings": [
    ["Hello.", "こんにちは", "konnichiwa"], ["Good morning.", "おはようございます", "ohayou gozaimasu"],
    ["Good evening.", "こんばんは", "konbanwa"], ["Good night.", "おやすみなさい", "oyasumi nasai"],
    ["Goodbye.", "さようなら", "sayounara"], ["See you later.", "またあとで", "mata ato de"],
    ["See you tomorrow.", "またあした", "mata ashita"], ["Long time no see.", "ひさしぶりです", "hisashiburi desu"],
    ["Welcome.", "いらっしゃいませ", "irasshaimase"], ["Take care.", "きをつけて", "ki o tsukete"]
  ],
  "Polite Basics": [
    ["Thank you.", "ありがとうございます", "arigatou gozaimasu"], ["You're welcome.", "どういたしまして", "dou itashimashite"],
    ["Please.", "おねがいします", "onegaishimasu"], ["Excuse me.", "すみません", "sumimasen"],
    ["I'm sorry.", "ごめんなさい", "gomennasai"], ["It's okay.", "だいじょうぶです", "daijoubu desu"],
    ["Yes.", "はい", "hai"], ["No.", "いいえ", "iie"], ["Sure.", "いいよ", "ii yo"],
    ["Please wait a moment.", "ちょっとまってください", "chotto matte kudasai"]
  ],
  "Introductions": [
    ["Nice to meet you.", "はじめまして", "hajimemashite"], ["My name is Andy.", "わたしのなまえはアンディです", "watashi no namae wa Andi desu"],
    ["What is your name?", "おなまえはなんですか", "onamae wa nan desu ka"], ["I'm from China.", "ちゅうごくからきました", "chuugoku kara kimashita"],
    ["Where are you from?", "どこからきましたか", "doko kara kimashita ka"], ["I live in Shanghai.", "しゃんはいにすんでいます", "Shanhai ni sunde imasu"],
    ["I'm a beginner.", "しょしんしゃです", "shoshinsha desu"], ["I'm learning Japanese.", "にほんごをべんきょうしています", "nihongo o benkyou shite imasu"],
    ["This is my friend.", "こちらはわたしのともだちです", "kochira wa watashi no tomodachi desu"], ["Please call me Andy.", "アンディとよんでください", "Andi to yonde kudasai"]
  ],
  "Understanding": [
    ["I understand.", "わかります", "wakarimasu"], ["I don't understand.", "わかりません", "wakarimasen"],
    ["Please say it again.", "もういちどいってください", "mou ichido itte kudasai"], ["Please speak slowly.", "ゆっくりはなしてください", "yukkuri hanashite kudasai"],
    ["What does this mean?", "これはどういういみですか", "kore wa dou iu imi desu ka"], ["How do you say this in Japanese?", "これはにほんごでなんといいますか", "kore wa nihongo de nan to iimasu ka"],
    ["Please write it down.", "かいてください", "kaite kudasai"], ["Can you speak English?", "えいごをはなせますか", "eigo o hanasemasu ka"],
    ["A little.", "すこしだけ", "sukoshi dake"], ["That's right.", "そうです", "sou desu"]
  ],
  "Questions": [
    ["What is this?", "これはなんですか", "kore wa nan desu ka"], ["Who is that?", "あのひとはだれですか", "ano hito wa dare desu ka"],
    ["Where is it?", "どこですか", "doko desu ka"], ["When is it?", "いつですか", "itsu desu ka"],
    ["Why?", "どうしてですか", "doushite desu ka"], ["How?", "どうやって", "dou yatte"],
    ["Which one?", "どれですか", "dore desu ka"], ["How much is it?", "いくらですか", "ikura desu ka"],
    ["What time is it?", "いまなんじですか", "ima nanji desu ka"], ["Is that true?", "ほんとうですか", "hontou desu ka"]
  ],
  "Daily Conversation": [
    ["How are you?", "げんきですか", "genki desu ka"], ["I'm fine.", "げんきです", "genki desu"],
    ["What are you doing?", "なにをしていますか", "nani o shite imasu ka"], ["I'm busy.", "いそがしいです", "isogashii desu"],
    ["I'm tired.", "つかれました", "tsukaremashita"], ["I'm sleepy.", "ねむいです", "nemui desu"],
    ["I'm hungry.", "おなかがすきました", "onaka ga sukimashita"], ["I'm thirsty.", "のどがかわきました", "nodo ga kawakimashita"],
    ["Let's go.", "いきましょう", "ikimashou"], ["Let's take a break.", "やすみましょう", "yasumimashou"]
  ],
  "Likes & Feelings": [
    ["I like it.", "すきです", "suki desu"], ["I love it.", "だいすきです", "daisuki desu"],
    ["I don't like it.", "すきじゃないです", "suki ja nai desu"], ["It's interesting.", "おもしろいです", "omoshiroi desu"],
    ["It's fun.", "たのしいです", "tanoshii desu"], ["I'm happy.", "うれしいです", "ureshii desu"],
    ["I'm sad.", "かなしいです", "kanashii desu"], ["I'm worried.", "しんぱいです", "shinpai desu"],
    ["I'm surprised.", "びっくりしました", "bikkuri shimashita"], ["That's amazing.", "すごいですね", "sugoi desu ne"]
  ],
  "Food & Restaurant": [
    ["I'm ready to eat.", "いただきます", "itadakimasu"], ["Thank you for the meal.", "ごちそうさまでした", "gochisousama deshita"],
    ["It's delicious.", "おいしいです", "oishii desu"], ["The menu, please.", "メニューをおねがいします", "menyuu o onegaishimasu"],
    ["Water, please.", "みずをください", "mizu o kudasai"], ["This one, please.", "これをください", "kore o kudasai"],
    ["What do you recommend?", "おすすめはなんですか", "osusume wa nan desu ka"], ["No meat, please.", "にくなしでおねがいします", "niku nashi de onegaishimasu"],
    ["The bill, please.", "おかいけいをおねがいします", "okaikei o onegaishimasu"], ["Can I pay by card?", "カードではらえますか", "kaado de haraemasu ka"]
  ],
  "Shopping": [
    ["I'm just looking.", "みているだけです", "mite iru dake desu"], ["Do you have this?", "これはありますか", "kore wa arimasu ka"],
    ["Do you have a larger size?", "もっとおおきいサイズはありますか", "motto ookii saizu wa arimasu ka"], ["Do you have a smaller size?", "もっとちいさいサイズはありますか", "motto chiisai saizu wa arimasu ka"],
    ["Can I try it on?", "しちゃくしてもいいですか", "shichaku shite mo ii desu ka"], ["It's too expensive.", "たかすぎます", "takasugimasu"],
    ["Please make it cheaper.", "やすくしてください", "yasuku shite kudasai"], ["I'll take it.", "これにします", "kore ni shimasu"],
    ["Where is the cashier?", "レジはどこですか", "reji wa doko desu ka"], ["Can I get a bag?", "ふくろをもらえますか", "fukuro o moraemasu ka"]
  ],
  "Directions": [
    ["Where is the station?", "えきはどこですか", "eki wa doko desu ka"], ["Where is the restroom?", "トイレはどこですか", "toire wa doko desu ka"],
    ["Please show me on the map.", "ちずでみせてください", "chizu de misete kudasai"], ["Go straight.", "まっすぐいってください", "massugu itte kudasai"],
    ["Turn right.", "みぎにまがってください", "migi ni magatte kudasai"], ["Turn left.", "ひだりにまがってください", "hidari ni magatte kudasai"],
    ["It's near here.", "このちかくです", "kono chikaku desu"], ["It's far from here.", "ここからとおいです", "koko kara tooi desu"],
    ["I'm lost.", "みちにまよいました", "michi ni mayoimashita"], ["Can you help me?", "てつだってもらえますか", "tetsudatte moraemasu ka"]
  ],
  "Transport": [
    ["One ticket, please.", "きっぷをいちまいください", "kippu o ichimai kudasai"], ["Which platform?", "なんばんせんですか", "nanbansen desu ka"],
    ["Does this go to Tokyo?", "これはとうきょうにいきますか", "kore wa Toukyou ni ikimasu ka"], ["What time does it leave?", "なんじにでますか", "nanji ni demasu ka"],
    ["What time does it arrive?", "なんじにつきますか", "nanji ni tsukimasu ka"], ["Please stop here.", "ここでとめてください", "koko de tomete kudasai"],
    ["To this address, please.", "このじゅうしょまでおねがいします", "kono juusho made onegaishimasu"], ["How long does it take?", "どのくらいかかりますか", "dono kurai kakarimasu ka"],
    ["Is this seat free?", "このせきはあいていますか", "kono seki wa aite imasu ka"], ["I need to transfer.", "のりかえがひつようです", "norikae ga hitsuyou desu"]
  ],
  "Hotel": [
    ["I have a reservation.", "よやくしています", "yoyaku shite imasu"], ["I'd like to check in.", "チェックインをおねがいします", "chekkuin o onegaishimasu"],
    ["I'd like to check out.", "チェックアウトをおねがいします", "chekkuauto o onegaishimasu"], ["What is the Wi-Fi password?", "ワイファイのパスワードはなんですか", "waifai no pasuwaado wa nan desu ka"],
    ["Where is my room?", "へやはどこですか", "heya wa doko desu ka"], ["Can I leave my luggage here?", "にもつをここにおいてもいいですか", "nimotsu o koko ni oite mo ii desu ka"],
    ["The key, please.", "かぎをおねがいします", "kagi o onegaishimasu"], ["The room is cold.", "へやがさむいです", "heya ga samui desu"],
    ["The room is hot.", "へやがあついです", "heya ga atsui desu"], ["Please call a taxi.", "タクシーをよんでください", "takushii o yonde kudasai"]
  ],
  "Time & Plans": [
    ["Today.", "きょう", "kyou"], ["Tomorrow.", "あした", "ashita"], ["Yesterday.", "きのう", "kinou"],
    ["This morning.", "けさ", "kesa"], ["Tonight.", "こんや", "konya"], ["Are you free today?", "きょうひまですか", "kyou hima desu ka"],
    ["Do you have plans?", "よていがありますか", "yotei ga arimasu ka"], ["Let's meet at three.", "さんじにあいましょう", "sanji ni aimashou"],
    ["I'm running late.", "おくれています", "okurete imasu"], ["See you next week.", "またらいしゅう", "mata raishuu"]
  ],
  "Emergencies": [
    ["Help!", "たすけて", "tasukete"], ["Call the police.", "けいさつをよんでください", "keisatsu o yonde kudasai"],
    ["Call an ambulance.", "きゅうきゅうしゃをよんでください", "kyuukyuusha o yonde kudasai"], ["I feel sick.", "きぶんがわるいです", "kibun ga warui desu"],
    ["It hurts here.", "ここがいたいです", "koko ga itai desu"], ["I need a doctor.", "いしゃがひつようです", "isha ga hitsuyou desu"],
    ["Where is the hospital?", "びょういんはどこですか", "byouin wa doko desu ka"], ["I lost my passport.", "パスポートをなくしました", "pasupooto o nakushimashita"],
    ["I lost my phone.", "けいたいをなくしました", "keitai o nakushimashita"], ["Please don't touch me.", "さわらないでください", "sawaranaide kudasai"]
  ],
  "Useful Actions": [
    ["Please come in.", "はいってください", "haitte kudasai"], ["Please sit down.", "すわってください", "suwatte kudasai"],
    ["Please look.", "みてください", "mite kudasai"], ["Please listen.", "きいてください", "kiite kudasai"],
    ["Please tell me.", "おしえてください", "oshiete kudasai"], ["Please give it to me.", "それをください", "sore o kudasai"],
    ["May I take a photo?", "しゃしんをとってもいいですか", "shashin o totte mo ii desu ka"], ["May I use this?", "これをつかってもいいですか", "kore o tsukatte mo ii desu ka"],
    ["Please open it.", "あけてください", "akete kudasai"], ["Please close it.", "しめてください", "shimete kudasai"]
  ]
};

const phrases = Object.entries(phraseGroups).flatMap(([category, items]) =>
  items.map(([english, japanese, romaji]) => ({ category, english, japanese, romaji }))
);
let phraseCategory = "All";
let phraseIndex = 0;

function activePhrases() {
  return phraseCategory === "All" ? phrases : phrases.filter((phrase) => phrase.category === phraseCategory);
}

function renderPhraseFilters() {
  $("#phraseFilters").innerHTML = ["All", ...Object.keys(phraseGroups)]
    .map((category) => `<button type="button" class="row-chip ${category === phraseCategory ? "active" : ""}" data-phrase-category="${category}">${category}</button>`)
    .join("");
}

function renderPhrase() {
  const list = activePhrases();
  phraseIndex = (phraseIndex + list.length) % list.length;
  const phrase = list[phraseIndex];
  $("#phraseCategory").textContent = phrase.category;
  $("#phraseEnglish").textContent = phrase.english;
  $("#phraseJapanese").textContent = phrase.japanese;
  $("#phraseRomaji").textContent = phrase.romaji;
  $("#phraseCounter").textContent = `${phraseIndex + 1} / ${list.length}${phraseCategory === "All" ? "" : " · 150 total"}`;
}

function renderPhraseList() {
  $("#phraseList").innerHTML = activePhrases()
    .map((phrase, index) => `<button type="button" data-phrase-index="${index}"><small>${phrase.english}</small><strong>${phrase.japanese}</strong><span>${phrase.romaji}</span></button>`)
    .join("");
}

function selectPhraseCategory(category) {
  phraseCategory = category;
  phraseIndex = 0;
  renderPhraseFilters();
  renderPhrase();
  renderPhraseList();
}

$("#phraseFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-phrase-category]");
  if (button) selectPhraseCategory(button.dataset.phraseCategory);
});
$("#phraseList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-phrase-index]");
  if (!button) return;
  phraseIndex = Number(button.dataset.phraseIndex);
  renderPhrase();
  $(".phrase-stage").scrollIntoView({ block: "center", behavior: "smooth" });
});
$("#prevPhrase").addEventListener("click", () => { phraseIndex -= 1; renderPhrase(); });
$("#nextPhrase").addEventListener("click", () => { phraseIndex += 1; renderPhrase(); });
$("#randomPhrase").addEventListener("click", () => { phraseIndex = Math.floor(Math.random() * activePhrases().length); renderPhrase(); });
$("#speakPhrase").addEventListener("click", () => speakSystem(activePhrases()[phraseIndex].japanese));

renderPhraseFilters();
renderPhrase();
renderPhraseList();
