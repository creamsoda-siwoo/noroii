// 노로이 — 재미로 하는 하찮은 저주
const CURSE_TYPES = [
  { id: "daily", name: "일상", icon: "🧦" },
  { id: "food", name: "음식", icon: "🍜" },
  { id: "tech", name: "기계", icon: "🔌" },
  { id: "luck", name: "불운", icon: "🐈‍⬛" },
  { id: "work", name: "학교·직장", icon: "📎" },
  { id: "game", name: "게임", icon: "🎮" },
  { id: "love", name: "연애", icon: "💔" },
  { id: "body", name: "몸", icon: "🤧" },
  { id: "custom", name: "나만의", icon: "✍️" },
];

const CURSES = {
  daily: [
    "양말 한 짝이 영원히 행방불명된다",
    "이어폰 줄이 주머니에서 매번 매듭을 짓는다",
    "엘리베이터가 항상 바로 앞에서 닫힌다",
    "샤워 중 샴푸가 딱 한 번 짜기 부족하게 남는다",
    "신호등이 다가갈 때마다 빨간불로 바뀐다",
    "새 옷을 입은 날 꼭 국물이 튄다",
    "휴지가 꼭 한 칸 남은 상태로 발견된다",
    "밀어야 하는 문을 당기고, 당겨야 하는 문을 민다",
    "침대에 눕자마자 불 끄는 걸 깜빡했음을 깨닫는다",
    "비닐봉지 입구를 찾는 데 30초가 걸린다",
  ],
  food: [
    "라면 물 조절이 언제나 미묘하게 실패한다",
    "과자 봉지를 뜯으면 질소만 가득하다",
    "치킨을 시키면 퍽퍽살만 남는다",
    "아이스크림이 첫 입에 막대에서 떨어진다",
    "컵라면에 물을 붓자마자 젓가락이 없음을 깨닫는다",
    "편의점 1+1 행사가 항상 방금 끝났다",
    "피자 치즈가 첫 조각에서 전부 딸려 나온다",
    "햄버거 속재료가 한 입 만에 뒤로 빠져나온다",
    "김밥 꼬다리를 남이 먼저 먹는다",
    "탄산음료를 열면 항상 김이 빠져 있다",
  ],
  tech: [
    "충전기가 특정 각도에서만 충전된다",
    "와이파이가 중요한 순간에만 끊긴다",
    "업데이트가 가장 바쁠 때 시작된다",
    "USB를 꽂을 때마다 세 번 뒤집어야 한다",
    "자동완성이 늘 엉뚱한 단어를 고른다",
    "배터리가 항상 13%에서 멈칫한다",
    "프린터가 급할 때만 용지 걸림을 일으킨다",
    "저장 버튼을 누르기 직전에 프로그램이 멈춘다",
    "블루투스 이어폰이 한쪽만 연결된다",
    "새 비밀번호가 '이전과 너무 비슷하다'며 세 번 거절당한다",
  ],
  luck: [
    "가위바위보에서 이상하게 계속 진다",
    "줄을 서면 꼭 옆 줄이 더 빨리 줄어든다",
    "우산을 두고 나온 날만 비가 온다",
    "뽑기에서 꽝만 연속으로 나온다",
    "택배가 '배송 중'에서 사흘 동안 멈춘다",
    "자판기가 동전을 삼키고 아무것도 주지 않는다",
    "가방 속 열쇠가 항상 맨 밑에 있다",
    "찍히는 사진마다 눈을 감고 있다",
    "간발의 차로 버스를 놓친다",
    "마트 카트가 항상 한쪽으로 쏠린다",
  ],
  work: [
    "회의가 끝날 때쯤 꼭 '마지막으로 하나만'이 나온다",
    "발표 순서가 항상 첫 번째로 걸린다",
    "조별과제에서 혼자 자료조사를 맡게 된다",
    "월요일이 일주일에 두 번 온 기분이 든다",
    "점심시간 5분 전에 꼭 일이 생긴다",
    "시험에 공부 안 한 부분만 나온다",
    "퇴근 직전에 '잠깐 시간 돼요?' 메시지가 온다",
    "출석 부를 때 하필 딴생각을 하고 있다",
    "나눠주는 프린트가 내 앞에서 딱 한 장 모자란다",
    "마감 기한을 하루 착각한다",
  ],
  game: [
    "랭크 게임에서 팀원이 첫 판부터 탈주한다",
    "가챠에서 중복 캐릭터만 나온다",
    "보스 체력 1을 남기고 쓰러진다",
    "세이브 안 하고 한 시간 플레이한 직후 정전된다",
    "핑이 결정적인 순간에만 튄다",
    "업데이트 다운로드가 99%에서 멈춘다",
    "아이템 강화가 +9에서 꼭 터진다",
    "친구가 '한 판만 더'를 열 번 외친다",
    "로딩 화면 팁만 외우게 된다",
    "패드 배터리가 결승전에서 방전된다",
  ],
  love: [
    "좋아하는 사람 앞에서만 딸꾹질이 난다",
    "보내는 메시지마다 오타가 하나씩 섞인다",
    "'읽음' 표시만 뜨고 답장은 세 시간 뒤에 온다",
    "고백 타이밍마다 누군가 끼어든다",
    "커플 사진을 찍으면 항상 반쯤 눈을 감는다",
    "데이트 날마다 갑자기 비가 온다",
    "골라둔 맛집이 꼭 그날 휴무다",
    "실수로 3년 전 사진에 '좋아요'를 누른다",
    "준비한 멘트를 첫 마디부터 잊어버린다",
    "영화관에서 앞자리에 키 큰 사람이 앉는다",
  ],
  body: [
    "다리를 꼬고 앉으면 바로 저린다",
    "재채기가 나올 듯 말 듯 하다가 안 나온다",
    "콧물이 휴지 없을 때만 흐른다",
    "새끼발가락이 가구 모서리를 찾아간다",
    "조용한 순간에만 배에서 꼬르륵 소리가 난다",
    "손이 닿지 않는 등 한가운데만 가렵다",
    "하품이 가장 중요한 순간에 터진다",
    "혀를 깨문 자리를 또 깨문다",
    "정전기가 문고리마다 따라온다",
    "자려고 누우면 갑자기 눈이 말똥말똥해진다",
  ],
};

CURSES.custom = load("noroii-custom", []);

const UNLOCKS = [
  "고양이를 세 번 쓰다듬으면 풀린다",
  "진심으로 '미안해'라고 말하면 풀린다",
  "맛있는 걸 사주면 즉시 풀린다",
  "물을 2리터 마시면 풀린다",
  "오늘 밤 11시 전에 자면 풀린다",
  "하루에 세 번 크게 웃으면 풀린다",
  "하늘을 10초 동안 바라보면 풀린다",
  "이 사이트를 닫으면 풀린다 (진짜로)",
];

const SIDE_EFFECTS = [
  "당신도 오늘 하루 양말이 미묘하게 축축하다",
  "당신의 다음 라면도 물이 많다",
  "저주한 손가락이 하루 동안 근질거린다",
  "당신의 와이파이도 한 칸 줄어든다",
  "거울 속 당신이 한 박자 늦게 웃는 기분이 든다 (기분 탓)",
];

const INCANTATIONS = [
  "노로이… 노로이… 양말이여 사라져라…",
  "오-무-라-이-스… 케첩이여 튀어라…",
  "에헤라디야… 와이파이 한 칸 줄어라…",
  "수리수리 마하수리… 엘리베이터 닫혀라…",
  "아브라카다브라… 배터리 13%…",
  "치킨 퍽퍽살… 퍽퍽살… 퍽퍽살…",
];

const PART_LINES = {
  머리: ["아야! 머리는 반칙이야!", "띠용…", "생각이 안 나…", "두통이 몰려온다…"],
  몸통: ["윽, 배가…", "속이 울렁거려…", "거긴 간지러워!", "꼬르륵…"],
  왼팔: ["팔이 저려!", "왼팔이 찌릿!", "숟가락을 못 들겠어…"],
  오른팔: ["밥 먹는 손이야!", "오른팔이 찌릿!", "마우스를 못 잡겠어!"],
  왼다리: ["다리에 쥐 났어!", "절뚝절뚝…", "무릎이 시려…"],
  오른다리: ["새끼발가락은 안 돼!", "걸을 수가 없어!", "발바닥이 간지러워!"],
};
const TOOL_LINES = {
  nail: ["못은 너무하잖아!!", "쾅?! 쾅?!", "공구는 반칙이야!"],
  fire: ["앗 뜨거!!", "탄 냄새 나…", "물! 물 좀!"],
  salt: ["휴, 시원하다…", "고마워…", "짜다…"],
};
const LOW_HP_LINES = ["살려줘…", "솜이 삐져나와…", "이제 그만…", "실밥이 터질 것 같아!"];

const FORTUNES = [
  { t: "대길 · 저주력이 넘치는 날 (+10)", bonus: 10, rm: 1 },
  { t: "길 · 촛불이 잘 타는 날 (+5)", bonus: 5, rm: 1 },
  { t: "평 · 평범한 저주 날씨", bonus: 0, rm: 1 },
  { t: "흉 · 저주가 튕겨나오기 쉬운 날 (반사 확률 2배)", bonus: 0, rm: 2 },
  { t: "대흉 · 기운이 약하다 (−5), 반사 주의", bonus: -5, rm: 1.5 },
  { t: "보름달 · 모든 저주 +15", bonus: 15, rm: 1 },
  { t: "그믐 · 조용히 저주하기 좋은 날 (+3)", bonus: 3, rm: 1 },
];

const SKINS = [
  { id: "straw", name: "짚인형", icon: "🌾", fill: "url(#pat-straw)", stroke: "#5a3d1e" },
  { id: "bear", name: "곰인형", icon: "🧸", fill: "url(#pat-felt)", stroke: "#3e2410" },
  { id: "bone", name: "해골", icon: "💀", fill: "url(#pat-bone)", stroke: "#4a443a" },
  { id: "yarn", name: "털실", icon: "🧶", fill: "url(#pat-yarn)", stroke: "#2e1440" },
];

const TOOLS = [
  { id: "needle", name: "바늘", icon: "🪡", desc: "기본" },
  { id: "nail", name: "못", icon: "🔨", desc: "강력" },
  { id: "fire", name: "불", icon: "🔥", desc: "그을림" },
  { id: "salt", name: "소금", icon: "🧂", desc: "정화" },
];

const PART_BONUS = { 머리: 20, 몸통: 15, 왼팔: 10, 오른팔: 10, 왼다리: 10, 오른다리: 10 };
const PIN_COLORS = ["#b3141b", "#1b1b1b", "#5a1a8a", "#d4a017", "#2a6e3f"];
const HP_MAX = 600;
const SITE_URL = "https://noroii.vercel.app";

const BADGES = [
  { id: "first", icon: "🕯️", name: "첫 저주", desc: "처음으로 저주를 내렸다" },
  { id: "curses30", icon: "📿", name: "저주 중독", desc: "저주 30번" },
  { id: "pins50", icon: "🪡", name: "바늘 장인", desc: "바늘·못 50개" },
  { id: "pyro", icon: "🔥", name: "불장난", desc: "불로 20번 그을림" },
  { id: "salt", icon: "🧂", name: "정화의 손", desc: "소금 10번" },
  { id: "chant", icon: "🗣️", name: "주문술사", desc: "주문 10번 완성" },
  { id: "candles", icon: "🕎", name: "삼촉 의식", desc: "촛불 3개 켜고 발동" },
  { id: "legend", icon: "👑", name: "전설", desc: "전설의 대저주 달성" },
  { id: "forbidden", icon: "🔮", name: "금기", desc: "금지된 저주 달성" },
  { id: "reflect", icon: "🪞", name: "업보", desc: "저주가 튕겨나왔다" },
  { id: "allTypes", icon: "📚", name: "저주 백과", desc: "모든 종류 사용" },
  { id: "allSkins", icon: "🧸", name: "인형 수집가", desc: "모든 인형 사용" },
  { id: "combo20", icon: "🌀", name: "광란의 연타", desc: "20콤보 달성" },
  { id: "destroy", icon: "💥", name: "인형 박살", desc: "인형을 터뜨렸다" },
  { id: "pins500", icon: "🦔", name: "고슴도치", desc: "바늘·못 500개" },
  { id: "author", icon: "✍️", name: "저주 작가", desc: "나만의 저주 작성" },
  { id: "ghost10", icon: "👻", name: "유령 사냥꾼", desc: "유령 10마리 포획" },
  { id: "gold", icon: "🌟", name: "황금 부적", desc: "전설 부적 획득" },
  { id: "talisAll", icon: "🧧", name: "부적 도감 완성", desc: "부적 전부 수집" },
  { id: "mercy", icon: "🕊️", name: "자비", desc: "저주를 풀어줬다" },
  { id: "shake", icon: "📳", name: "흔들어 저주", desc: "폰을 흔들어 발동" },
];

const RARITY = {
  c: { name: "일반", color: "#9b8a7a" },
  r: { name: "희귀", color: "#4a9be0" },
  e: { name: "영웅", color: "#b04ae0" },
  l: { name: "전설", color: "#e0b44c" },
};
const TALISMANS = [
  { id: "sock", r: "c", icon: "🧦", name: "젖은 양말 부적" },
  { id: "battery", r: "c", icon: "🔋", name: "13% 배터리 부적" },
  { id: "chicken", r: "c", icon: "🍗", name: "퍽퍽살 부적" },
  { id: "earphone", r: "c", icon: "🎧", name: "엉킨 이어폰 부적" },
  { id: "wifi", r: "c", icon: "📶", name: "와이파이 한 칸 부적" },
  { id: "tissue", r: "c", icon: "🧻", name: "마지막 휴지 부적" },
  { id: "snack", r: "r", icon: "🍿", name: "질소 과자 부적" },
  { id: "redlight", r: "r", icon: "🚦", name: "빨간불 부적" },
  { id: "afk", r: "r", icon: "🏃", name: "탈주 팀원 부적" },
  { id: "elevator", r: "r", icon: "🛗", name: "닫히는 엘리베이터 부적" },
  { id: "enchant", r: "e", icon: "💥", name: "+9 강화 실패 부적" },
  { id: "monday", r: "e", icon: "📅", name: "월요병 부적" },
  { id: "deadline", r: "e", icon: "⏰", name: "마감 착각 부적" },
  { id: "moon", r: "l", icon: "🌕", name: "보름달 노로이 부적" },
  { id: "goldchicken", r: "l", icon: "👑", name: "황금 퍽퍽살 부적" },
];

const $ = (id) => document.getElementById(id);
const doll = $("doll");
const marksG = $("marks");
const NS = "http://www.w3.org/2000/svg";

const state = {
  target: "",
  type: "daily",
  skin: "straw",
  tool: "needle",
  marks: [],
  power: 0,
  candles: 0,
  chanted: false,
  saltUsed: false,
  hp: HP_MAX,
  combo: 0,
  lastStab: 0,
  destroyed: 0,
  ghosts: 0,
};

// ── 저장소 ──
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (_) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
}
const stats = Object.assign(
  { curses: 0, pins: 0, burns: 0, salts: 0, chants: 0, reflected: 0, maxCombo: 0, destroys: 0, authored: false, ghosts: 0, mercy: 0, shakeCasts: 0, goldTalis: false, talis: [], types: [], skins: [], badges: [] },
  load("noroii-stats", {}),
);

// ── 오늘의 운세 (날짜 기준으로 하루 동안 같음) ──
const today = new Date();
const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const fortune = FORTUNES[(daySeed * 7919) % FORTUNES.length];
$("fortune").textContent = "🌙 오늘의 저주운 — " + fortune.t;

// ── 효과음 (WebAudio) ──
let audio;
function ctx() {
  audio = audio || new (window.AudioContext || window.webkitAudioContext)();
  if (audio.state === "suspended") audio.resume();
  return audio;
}
function tone(freq, dur, type = "sine", vol = 0.15, slide = 0, delay = 0) {
  try {
    const a = ctx();
    const t = a.currentTime + delay;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + dur);
  } catch (_) { /* 소리 없이 진행 */ }
}
function noise(dur, vol = 0.2, freq = 1200) {
  try {
    const a = ctx();
    const buf = a.createBuffer(1, a.sampleRate * dur, a.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = a.createBufferSource();
    const f = a.createBiquadFilter();
    const g = a.createGain();
    src.buffer = buf;
    f.type = "bandpass";
    f.frequency.value = freq;
    g.gain.value = vol;
    src.connect(f).connect(g).connect(a.destination);
    src.start();
  } catch (_) {}
}
const vibrate = (p) => navigator.vibrate && navigator.vibrate(p);
const SFX = {
  needle: () => tone(900, 0.12, "square", 0.08, 200),
  nail: () => { tone(110, 0.25, "square", 0.2, 50); noise(0.08, 0.3, 3000); },
  fire: () => { noise(0.6, 0.35, 900); tone(200, 0.4, "sawtooth", 0.04, 90); },
  salt: () => { tone(1800, 0.15, "sine", 0.06, 2600); tone(2400, 0.2, "sine", 0.05, 3200, 0.08); },
  candle: () => tone(600, 0.15, "sine", 0.06, 900),
  bind: () => tone(220, 0.5, "triangle", 0.1, 330),
  cast: () => { tone(110, 1.6, "sawtooth", 0.12, 40); tone(165, 1.6, "triangle", 0.1, 55); },
  reflect: () => { tone(900, 0.9, "sawtooth", 0.08, 80); tone(1200, 0.6, "sine", 0.06, 300, 0.2); },
  chantDone: () => [330, 415, 494].forEach((f, i) => tone(f, 0.8, "triangle", 0.07, 0, i * 0.08)),
  badge: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.25, "sine", 0.07, 0, i * 0.09)),
  burst: () => { noise(0.9, 0.5, 400); tone(80, 1.2, "sawtooth", 0.15, 30); tone(1400, 0.4, "square", 0.04, 200, 0.1); },
  tick: (i) => tone(500 + (i % 4) * 120, 0.05, "square", 0.03),
  ghost: () => { tone(420, 1.2, "sine", 0.05, 260); tone(630, 1.2, "sine", 0.03, 390, 0.15); },
  ghostCatch: () => { tone(900, 0.3, "triangle", 0.08, 1800); noise(0.3, 0.15, 2500); },
  thunder: () => { noise(2.8, 0.6, 110); noise(1.2, 0.3, 300); },
  talis: () => [784, 988, 1175].forEach((f, i) => tone(f, 0.4, "triangle", 0.06, 0, i * 0.07)),
};

// ── 브금 (WebAudio로 실시간 생성하는 오르골) ──
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const PROG = [[57, 60, 64], [53, 57, 60], [50, 53, 57], [52, 56, 59]]; // Am F Dm E
const ARP = [0, 1, 2, 3, 2, 1, 0, 1]; // 3 = 근음 한 옥타브 위
const PENTA = [69, 72, 74, 76, 79, 81];
const STEP = 60 / 76 / 2;
const bgm = { on: false, timer: 0, step: 0, next: 0, nodes: null };

function bgmNodes() {
  const a = ctx();
  const out = a.createGain();
  out.gain.value = 0;
  out.connect(a.destination);
  const input = a.createGain();
  const delay = a.createDelay();
  const fb = a.createGain();
  const wet = a.createGain();
  delay.delayTime.value = STEP * 3;
  fb.gain.value = 0.35;
  wet.gain.value = 0.4;
  input.connect(out);
  input.connect(delay);
  delay.connect(fb).connect(delay);
  delay.connect(wet).connect(out);
  return { out, input };
}

function voice(freq, t, vol, len, type = "sine", attack = 0.005) {
  const o = audio.createOscillator();
  const g = audio.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(bgm.nodes.input);
  o.start(t);
  o.stop(t + len + 0.05);
}

function boxNote(m, t, vol = 0.05, len = 1.4) {
  [1, 2.003, 3.01].forEach((h, i) => voice(mtof(m) * h, t, vol / (i * 2 + 1), len / (i + 1)));
}

function bell(m, t) {
  [1, 2.76, 5.4].forEach((h, i) => voice(mtof(m) * h, t, 0.07 / (i + 1), 4 / (i + 1)));
}

function scheduleStep(i, t) {
  const s = i % 8;
  const ch = PROG[Math.floor(i / 8) % PROG.length];
  boxNote((ARP[s] === 3 ? ch[0] + 12 : ch[ARP[s]]) + 12, t);
  if (s === 0) voice(mtof(ch[0] - 24), t, 0.05, STEP * 8, "triangle", 0.6);
  if ((s === 2 || s === 6) && Math.random() < 0.35) boxNote(pick(PENTA) + 12, t, 0.03, 2);
  if (i % 32 === 0) bell(40, t);
}

function bgmTick() {
  while (bgm.next < audio.currentTime + 0.2) {
    scheduleStep(bgm.step++, bgm.next);
    bgm.next += STEP;
  }
}

function updateSoundBtn() {
  $("soundBtn").textContent = bgm.on ? "🎵" : "🔇";
  $("soundBtn").setAttribute("aria-label", bgm.on ? "브금 끄기" : "브금 켜기");
}

function startBgm() {
  if (bgm.on) return;
  try {
    const a = ctx();
    if (!bgm.nodes) bgm.nodes = bgmNodes();
    bgm.nodes.out.gain.cancelScheduledValues(a.currentTime);
    bgm.nodes.out.gain.setTargetAtTime(1, a.currentTime, 0.8);
    bgm.next = a.currentTime + 0.1;
    bgm.timer = setInterval(bgmTick, 50);
    bgm.on = true;
  } catch (_) { return; }
  updateSoundBtn();
}

function stopBgm() {
  if (!bgm.on) return;
  clearInterval(bgm.timer);
  bgm.nodes.out.gain.setTargetAtTime(0, audio.currentTime, 0.2);
  bgm.on = false;
  updateSoundBtn();
}

$("soundBtn").addEventListener("click", () => {
  if (bgm.on) stopBgm();
  else startBgm();
  save("noroii-bgm", bgm.on);
});

// 브라우저는 사용자가 한 번 터치/클릭해야 소리를 허용하므로 첫 입력 때 브금 시작
function autoStartBgm(e) {
  document.removeEventListener("pointerdown", autoStartBgm, true);
  document.removeEventListener("keydown", autoStartBgm, true);
  if (e.target.closest && e.target.closest("#soundBtn")) return;
  if (load("noroii-bgm", true)) startBgm();
}
document.addEventListener("pointerdown", autoStartBgm, true);
document.addEventListener("keydown", autoStartBgm, true);
document.addEventListener("visibilitychange", () => {
  if (!audio) return;
  if (document.hidden) audio.suspend();
  else audio.resume();
});
$("soundBtn").textContent = load("noroii-bgm", true) ? "🎵" : "🔇";

// ── 선택 칩 ──
function makeChips(el, items, current, onPick, extra) {
  el.innerHTML = "";
  items.forEach((it) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.dataset.id = it.id;
    b.setAttribute("aria-pressed", it.id === current);
    b.innerHTML = `<span class="ico">${it.icon}</span>${it.name}${extra ? extra(it) : ""}`;
    b.addEventListener("click", () => {
      el.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
      onPick(it.id);
    });
    el.append(b);
  });
}
makeChips($("typeChips"), CURSE_TYPES, state.type, (id) => {
  state.type = id;
  $("customBox").hidden = id !== "custom";
});
makeChips($("skinChips"), SKINS, state.skin, (id) => { state.skin = id; applySkin(); });
makeChips($("tools"), TOOLS, state.tool, (id) => {
  state.tool = id;
  doll.classList.toggle("tool-salt", id === "salt");
  if (state.target) $("dollHint").textContent = toolHint();
}, (t) => `<small>${t.desc}</small>`);

function applySkin() {
  const s = SKINS.find((k) => k.id === state.skin);
  const body = $("dollBody");
  body.setAttribute("fill", s.fill);
  body.setAttribute("stroke", s.stroke);
  SKINS.forEach((k) => doll.classList.toggle("skin-" + k.id, k.id === s.id));
}
applySkin();

function toolHint() {
  return {
    needle: "🪡 바늘: 원하는 부위를 콕 찔러보세요.",
    nail: "🔨 못: 강력하지만 인형이 크게 흔들린다.",
    fire: "🔥 불: 그을린 자국을 남긴다.",
    salt: "🧂 소금: 꽂힌 바늘이나 자국을 터치하면 정화된다.",
  }[state.tool];
}

// ── 의식용 촛불 ──
const candleBox = $("ritualCandles");
for (let i = 0; i < 3; i++) {
  const c = document.createElement("button");
  c.type = "button";
  c.className = "rc";
  c.setAttribute("aria-label", `촛불 ${i + 1} 켜기`);
  c.addEventListener("click", () => {
    if (!state.target) return nudge();
    c.classList.toggle("lit");
    state.candles = candleBox.querySelectorAll(".lit").length;
    if (c.classList.contains("lit")) SFX.candle();
    updateMeter();
  });
  candleBox.append(c);
}

function nudge() {
  $("dollHint").textContent = "먼저 인형에 이름을 새기세요!";
  $("target").focus();
}

// ── 이름 새기기 ──
$("bindBtn").addEventListener("click", () => {
  const name = $("target").value.trim();
  if (!name) {
    $("dollHint").textContent = "이름 없이는 저주할 수 없다…";
    $("target").focus();
    return;
  }
  state.target = name;
  const tag = $("dollName");
  tag.textContent = name.length > 8 ? name.slice(0, 8) + "…" : name;
  if (tag.getComputedTextLength() > 60) tag.setAttribute("textLength", 60);
  else tag.removeAttribute("textLength");
  tag.setAttribute("lengthAdjust", "spacingAndGlyphs");
  doll.classList.add("ready");
  $("chantBtn").disabled = false;
  resetRitual();
  $("dollHint").textContent = `「${name}」 인형 완성. ` + toolHint();
  scheduleGhost(8000);
  SFX.bind();
});
$("target").addEventListener("keydown", (e) => e.key === "Enter" && $("bindBtn").click());

// ── 인형에 도구 사용 ──
function svgPoint(e) {
  const pt = doll.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;
  return pt.matrixTransform(doll.getScreenCTM().inverse());
}

function shake(cls = "shake") {
  doll.classList.remove("shake", "quake");
  void doll.getBBox();
  doll.classList.add(cls);
}

function popAt(x, y, emoji) {
  const t = document.createElementNS(NS, "text");
  t.setAttribute("x", x);
  t.setAttribute("y", y);
  t.setAttribute("text-anchor", "middle");
  t.setAttribute("class", "pop");
  t.textContent = emoji;
  marksG.append(t);
  setTimeout(() => t.remove(), 900);
}

function el(tag, attrs) {
  const n = document.createElementNS(NS, tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  return n;
}

function stabAt(part, x, y) {
  if (state.tool === "salt") return purify(x, y);

  const now = performance.now();
  state.combo = now - state.lastStab < 700 ? state.combo + 1 : 1;
  state.lastStab = now;
  const comboMul = 1 + Math.min(state.combo, 20) * 0.05;

  const base = PART_BONUS[part];
  const g = el("g", { class: "mark" });
  let gain;
  if (state.tool === "needle") {
    gain = base + rand(6);
    g.append(
      el("line", { x1: x, y1: y, x2: x - 14, y2: y - 14, stroke: "#cfcfcf", "stroke-width": 2 }),
      el("circle", { cx: x - 14, cy: y - 14, r: 5, fill: pick(PIN_COLORS), stroke: "#000" }),
    );
    stats.pins++;
    SFX.needle();
    vibrate(30);
    shake();
  } else if (state.tool === "nail") {
    gain = Math.round(base * 1.6) + rand(6);
    g.append(
      el("line", { x1: x, y1: y, x2: x - 6, y2: y - 22, stroke: "#8a8f96", "stroke-width": 4, "stroke-linecap": "round" }),
      el("rect", { x: x - 14, y: y - 27, width: 16, height: 6, rx: 2, fill: "#5d6168", stroke: "#222", transform: `rotate(-15 ${x - 6} ${y - 24})` }),
    );
    stats.pins++;
    SFX.nail();
    vibrate([60, 30, 60]);
    shake("quake");
  } else {
    gain = 8 + rand(5);
    g.setAttribute("class", "mark burn");
    g.append(
      el("circle", { cx: x, cy: y, r: 15, fill: "url(#burnGrad)" }),
      el("circle", { cx: x, cy: y, r: 4, fill: "#ff6a1a", class: "ember" }),
    );
    popAt(x, y - 4, "🔥");
    stats.burns++;
    SFX.fire();
    vibrate(80);
    shake();
  }
  gain = Math.round(gain * comboMul);
  marksG.insertBefore(g, marksG.firstChild);
  state.marks.push({ x, y, gain, g });
  state.power = Math.min(100, state.power + gain);
  if (state.combo > stats.maxCombo) stats.maxCombo = state.combo;
  if (state.combo >= 3) showCombo(state.combo);

  const toolName = TOOLS.find((t) => t.id === state.tool).name;
  $("dollHint").textContent = `${part}에 ${toolName}! (총 ${state.marks.length}개${state.combo >= 3 ? ` · ${state.combo}콤보 ×${comboMul.toFixed(2)}` : ""})`;

  state.hp -= gain;
  flinch();
  if (state.hp <= 0) {
    burst();
  } else if (state.hp < HP_MAX * 0.25 && Math.random() < 0.4) {
    say(pick(LOW_HP_LINES));
  } else if (Math.random() < 0.45) {
    say(pick(TOOL_LINES[state.tool] && Math.random() < 0.5 ? TOOL_LINES[state.tool] : PART_LINES[part]));
  }
  updateMeter();
  checkBadges();
  saveStats();
}

// 꾹 누른 채 문지르면 계속 꽂힌다
let dragging = false;
let lastDrag = { x: 0, y: 0, t: 0 };
doll.addEventListener("pointerdown", (e) => {
  const part = e.target.dataset && e.target.dataset.part;
  if (!part) return;
  if (!state.target) return nudge();
  e.preventDefault();
  dragging = true;
  try { doll.setPointerCapture(e.pointerId); } catch (_) {}
  const { x, y } = svgPoint(e);
  lastDrag = { x, y, t: performance.now() };
  stabAt(part, x, y);
});
doll.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const { x, y } = svgPoint(e);
  const now = performance.now();
  if (now - lastDrag.t < 90 || Math.hypot(x - lastDrag.x, y - lastDrag.y) < 12) return;
  const hit = document.elementFromPoint(e.clientX, e.clientY);
  const part = hit && hit.dataset && hit.dataset.part;
  if (!part) return;
  lastDrag = { x, y, t: now };
  stabAt(part, x, y);
});
["pointerup", "pointercancel", "lostpointercapture"].forEach((ev) => doll.addEventListener(ev, () => (dragging = false)));

let comboTimer = 0;
function showCombo(n) {
  const c = $("combo");
  c.textContent = `${n} COMBO!`;
  c.classList.toggle("hot", n >= 10);
  c.classList.remove("on");
  void c.offsetWidth;
  c.classList.add("on");
  clearTimeout(comboTimer);
  comboTimer = setTimeout(() => c.classList.remove("on"), 700);
}

let bubbleTimer = 0;
let lastTalk = 0;
function say(text, force) {
  const now = performance.now();
  if (!force && now - lastTalk < 900) return;
  lastTalk = now;
  const b = $("bubble");
  b.textContent = text;
  b.classList.add("on");
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => b.classList.remove("on"), 1400);
}

let flinchTimer = 0;
function faceFor() {
  const r = state.hp / HP_MAX;
  return r < 0.25 ? "crit" : r < 0.5 ? "hurt" : "normal";
}
function setFace(f) { doll.dataset.face = f; }
function flinch() {
  setFace(faceFor() === "normal" ? "hurt" : "crit");
  clearTimeout(flinchTimer);
  flinchTimer = setTimeout(() => setFace(faceFor()), 280);
}

function burst() {
  state.destroyed++;
  stats.destroys++;
  state.marks.forEach((m) => m.g.remove());
  state.marks = [];
  state.hp = HP_MAX;
  state.power = 100;
  dragging = false;
  for (let i = 0; i < 16; i++) popAt(20 + rand(160), 20 + rand(260), pick(["☁️", "🧵", "💥", "✨", "🪡"]));
  SFX.burst();
  vibrate([100, 50, 200]);
  const flash = $("flash");
  flash.classList.remove("on", "purple");
  void flash.offsetWidth;
  flash.classList.add("on");
  say("으아아악!! 💥", true);
  doll.classList.remove("resew");
  void doll.getBBox();
  doll.classList.add("resew");
  toast(`💥 인형이 터졌다! 다시 꿰맸다 (파괴 보너스 +30, ${state.destroyed}회)`);
  $("dollHint").textContent = "인형이 터졌다… 그런데 저절로 다시 꿰매졌다. 계속 찌를 수 있다.";
}

function purify(x, y) {
  let best = -1;
  let bestD = 30;
  state.marks.forEach((m, i) => {
    const d = Math.hypot(m.x - x, m.y - y);
    if (d < bestD) { bestD = d; best = i; }
  });
  if (best < 0) {
    $("dollHint").textContent = "🧂 여긴 정화할 것이 없다. 바늘 근처를 터치하세요.";
    return;
  }
  const [m] = state.marks.splice(best, 1);
  m.g.remove();
  popAt(m.x, m.y, "✨");
  state.power = Math.max(0, state.power - m.gain);
  state.saltUsed = true;
  stats.salts++;
  SFX.salt();
  state.hp = Math.min(HP_MAX, state.hp + m.gain);
  setFace(faceFor());
  if (Math.random() < 0.5) say(pick(TOOL_LINES.salt));
  $("dollHint").textContent = `정화 완료. 저주력이 ${m.gain} 줄었다. (남은 자국 ${state.marks.length}개)`;
  updateMeter();
  checkBadges();
  saveStats();
}

// ── 주문 (꾹 누르기) ──
const CHANT_MS = 1600;
let chantStart = 0;
let chantRaf = 0;
let chantHum = null;

function chantDown(e) {
  if (e) e.preventDefault();
  const btn = $("chantBtn");
  if (btn.disabled || state.chanted || chantStart) return;
  chantStart = performance.now();
  $("chantLabel").textContent = "🗣️ 웅얼웅얼…";
  try {
    const a = ctx();
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = "triangle";
    o.frequency.value = 140;
    o.frequency.linearRampToValueAtTime(260, a.currentTime + CHANT_MS / 1000);
    g.gain.value = 0.05;
    o.connect(g).connect(a.destination);
    o.start();
    chantHum = o;
  } catch (_) {}
  const step = (now) => {
    const p = Math.min(1, (now - chantStart) / CHANT_MS);
    $("chantFill").style.width = p * 100 + "%";
    if (p >= 1) return chantComplete();
    chantRaf = requestAnimationFrame(step);
  };
  chantRaf = requestAnimationFrame(step);
}

function stopHum() {
  if (chantHum) { try { chantHum.stop(); } catch (_) {} chantHum = null; }
}

function chantUp() {
  if (!chantStart || state.chanted) return;
  cancelAnimationFrame(chantRaf);
  chantStart = 0;
  stopHum();
  $("chantFill").style.width = "0";
  $("chantLabel").textContent = "🗣️ 끝까지 눌러야 한다…";
}

function chantComplete() {
  chantStart = 0;
  stopHum();
  state.chanted = true;
  stats.chants++;
  $("chantBtn").classList.add("done");
  $("chantLabel").textContent = "✅ 주문 완성 (+15)";
  typeOut($("incant"), pick(INCANTATIONS));
  SFX.chantDone();
  vibrate([40, 40, 40]);
  updateMeter();
  checkBadges();
  saveStats();
}

const chantBtn = $("chantBtn");
chantBtn.addEventListener("pointerdown", chantDown);
["pointerup", "pointerleave", "pointercancel"].forEach((ev) => chantBtn.addEventListener(ev, chantUp));
chantBtn.addEventListener("contextmenu", (e) => e.preventDefault());
chantBtn.addEventListener("keydown", (e) => { if ((e.key === " " || e.key === "Enter") && !e.repeat) chantDown(e); });
chantBtn.addEventListener("keyup", (e) => { if (e.key === " " || e.key === "Enter") chantUp(); });

let typeTimer = 0;
function typeOut(node, text) {
  clearInterval(typeTimer);
  let i = 0;
  node.textContent = "";
  typeTimer = setInterval(() => {
    node.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(typeTimer);
  }, 60);
}

// ── 저주력 계산 ──
function finalPower() {
  const destroyBonus = Math.min(state.destroyed, 3) * 30;
  const ghostBonus = Math.min(state.ghosts, 5) * 10;
  return Math.max(0, Math.round(state.power * (1 + 0.1 * state.candles) + (state.chanted ? 15 : 0) + destroyBonus + ghostBonus + stats.talis.length + fortune.bonus));
}

function updateMeter() {
  $("meterFill").style.width = state.power + "%";
  $("meterNum").textContent = state.power + "%";
  const hpPct = Math.round((state.hp / HP_MAX) * 100);
  const hpFill = $("hpFill");
  hpFill.style.width = hpPct + "%";
  hpFill.classList.toggle("low", hpPct < 50 && hpPct >= 25);
  hpFill.classList.toggle("crit", hpPct < 25);
  $("hpNum").textContent = hpPct + "%";
  const armed = state.marks.length > 0 || state.destroyed > 0;
  $("castBtn").disabled = !armed;
  const parts = [];
  if (state.candles) parts.push(`🕯️×${state.candles} (+${state.candles * 10}%)`);
  if (state.chanted) parts.push("🗣️ +15");
  if (state.destroyed) parts.push(`💥 +${Math.min(state.destroyed, 3) * 30}`);
  if (state.ghosts) parts.push(`👻 +${Math.min(state.ghosts, 5) * 10}`);
  if (stats.talis.length) parts.push(`🧧 +${stats.talis.length}`);
  if (fortune.bonus) parts.push(`🌙 ${fortune.bonus > 0 ? "+" : ""}${fortune.bonus}`);
  $("bonusLine").textContent = armed
    ? `최종 저주력 ${finalPower()}${parts.length ? " · " + parts.join(" · ") : ""}`
    : parts.length ? "보너스: " + parts.join(" · ") : "";
}

function resetRitual() {
  marksG.innerHTML = "";
  state.marks = [];
  state.power = 0;
  state.chanted = false;
  state.saltUsed = false;
  state.candles = 0;
  state.hp = HP_MAX;
  state.combo = 0;
  state.destroyed = 0;
  state.ghosts = 0;
  setFace("normal");
  candleBox.querySelectorAll(".rc").forEach((c) => c.classList.remove("lit"));
  chantBtn.classList.remove("done");
  $("chantFill").style.width = "0";
  $("chantLabel").textContent = "🗣️ 꾹 눌러서 주문 외우기";
  $("incant").textContent = "";
  updateMeter();
}

$("resetBtn").addEventListener("click", () => {
  resetRitual();
  if (state.target) $("dollHint").textContent = "모든 것을 되돌렸다. 다시 시작하자. " + toolHint();
});

// ── 저주 발동 ──
function rand(n) { return Math.floor(Math.random() * n); }
function pick(list) { return list[rand(list.length)]; }
function pickN(list, n) { return [...list].sort(() => Math.random() - 0.5).slice(0, n); }

function rank(p) {
  if (p >= 120) return "금지된 저주";
  if (p >= 90) return "전설의 대저주";
  if (p >= 60) return "강력한 저주";
  if (p >= 30) return "평범한 저주";
  return "미약한 저주";
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

let lastCurse = null;

function cast() {
  if (!state.marks.length && !state.destroyed) return;
  const pool = CURSES[state.type];
  if (!pool.length) {
    toast("✍️ 나만의 저주를 먼저 하나 이상 적어주세요");
    $("customInput").focus();
    return;
  }
  const p = finalPower();
  const reflected = Math.random() < 0.08 * fortune.rm;
  const victim = reflected ? "나 자신" : state.target;
  const count = p >= 120 ? 4 : p >= 90 ? 3 : p >= 50 ? 2 : 1;
  const curses = pickN(pool, Math.min(count, pool.length));
  const daysNum = p >= 120 ? 100 : Math.max(1, Math.round(p / 10));
  const days = `${daysNum}일`;
  const r = rank(p);
  const side = p >= 90 && !reflected ? pick(SIDE_EFFECTS) : null;
  const unlock = pick(UNLOCKS);
  const typeName = state.type === "custom" ? "나만의 저주" : CURSE_TYPES.find((t) => t.id === state.type).name + "의 저주";
  lastCurse = { victim, curses, days, rank: r, p, side, unlock, reflected, typeName };
  const drop = dropTalisman(p);
  const rar = RARITY[drop.t.r];

  const scroll = $("scroll");
  scroll.classList.toggle("reflect", reflected);
  scroll.innerHTML = `
    ${reflected ? '<p class="extra">🪞 저주가 거울에 튕겨 <b>당신에게</b> 돌아왔다!</p>' : ""}
    <p class="title${p >= 120 ? " forbidden" : ""}">${r}</p>
    <p><b>${escapeHTML(victim)}</b>에게 앞으로 <b>${days}</b> 동안…</p>
    <ul>${curses.map((c) => `<li>${escapeHTML(c)}</li>`).join("")}</ul>
    ${side ? `<p class="extra">⚠️ 부작용: ${side}</p>` : ""}
    <p class="extra">🔓 해제 조건: ${unlock}</p>
    <p class="extra talis-drop">🧧 부적 획득: <b style="color:${rar.color}">[${rar.name}]</b> ${drop.t.icon} ${drop.t.name}${drop.isNew ? " <b>NEW!</b>" : ""}</p>
    <p class="seal">— ${typeName} · 저주력 ${p} · 呪印 —</p>`;
  $("result").hidden = false;

  const flash = $("flash");
  flash.classList.remove("on", "purple");
  void flash.offsetWidth;
  flash.classList.toggle("purple", reflected);
  flash.classList.add("on");
  if (reflected) {
    document.body.classList.remove("reflected");
    void document.body.offsetWidth;
    document.body.classList.add("reflected");
    SFX.reflect();
    stats.reflected++;
  } else {
    SFX.cast();
  }
  vibrate([80, 60, 160]);

  stats.curses++;
  if (!stats.types.includes(state.type)) stats.types.push(state.type);
  if (!stats.skins.includes(state.skin)) stats.skins.push(state.skin);
  checkBadges({ p, candles: state.candles });
  saveStats();

  addActive({ victim, rank: r, curse: curses[0], days: daysNum });
  if (drop.isNew) {
    setTimeout(SFX.talis, 900);
    toast(`🧧 새 부적: [${rar.name}] ${drop.t.icon} ${drop.t.name}`);
  }
  if (p >= 120) setTimeout(() => lightning(true), 200);
  if (castByShake) {
    stats.shakeCasts++;
    castByShake = false;
  }
  checkBadges({ p, candles: state.candles });
  saveStats();
  renderTalis();

  addLog(`${reflected ? "🪞 " : ""}${victim} — ${r} (${curses[0]}${curses.length > 1 ? " 외" : ""})`);
  $("result").scrollIntoView({ behavior: "smooth", block: "center" });
}

$("castBtn").addEventListener("click", cast);
$("againBtn").addEventListener("click", cast);

// ── 공유 ──
function shareText() {
  const c = lastCurse;
  return [
    `[노로이] ${c.reflected ? "🪞 저주가 튕겨나왔다! " : ""}${c.victim}에게 ${c.rank} (저주력 ${c.p})`,
    `앞으로 ${c.days} 동안…`,
    ...c.curses.map((x) => "· " + x),
    c.side ? "⚠️ 부작용: " + c.side : "",
    "🔓 " + c.unlock,
    SITE_URL,
  ].filter(Boolean).join("\n");
}

$("copyBtn").addEventListener("click", async () => {
  if (!lastCurse) return;
  try {
    await navigator.clipboard.writeText(shareText());
    toast("📋 저주문을 복사했다");
  } catch (_) {
    toast("복사에 실패했다… 직접 선택해서 복사하세요");
  }
});

$("shareBtn").addEventListener("click", async () => {
  if (!lastCurse) return;
  if (navigator.share) {
    try { await navigator.share({ title: "노로이 저주", text: shareText(), url: SITE_URL }); } catch (_) {}
  } else {
    $("copyBtn").click();
  }
});

$("imgBtn").addEventListener("click", async () => {
  if (!lastCurse) return;
  try { await document.fonts.ready; } catch (_) {}
  const c = lastCurse;
  const W = 1080, H = 1350;
  const cv = document.createElement("canvas");
  cv.width = W;
  cv.height = H;
  const g = cv.getContext("2d");
  const bg = g.createRadialGradient(W / 2, 0, 50, W / 2, 0, H);
  bg.addColorStop(0, "#2a0c10");
  bg.addColorStop(1, "#0b0708");
  g.fillStyle = bg;
  g.fillRect(0, 0, W, H);

  g.textAlign = "center";
  g.fillStyle = "#b3141b";
  g.font = '140px "Nanum Brush Script", cursive';
  g.fillText("呪 노로이 呪", W / 2, 190);

  g.fillStyle = c.reflected ? "#e9e2f2" : "#f2e6c9";
  g.fillRect(90, 260, W - 180, H - 380);
  g.strokeStyle = c.reflected ? "#b9a6d6" : "#d8c69c";
  g.lineWidth = 14;
  g.strokeRect(90, 260, W - 180, H - 380);

  g.fillStyle = c.p >= 120 ? "#4a0a5a" : "#6d0a0e";
  g.font = '120px "Nanum Brush Script", cursive';
  g.fillText(c.rank, W / 2, 410);

  g.fillStyle = "#2a1408";
  g.textAlign = "left";
  let y = 530;
  const lines = [
    c.reflected ? "🪞 저주가 튕겨 당신에게 돌아왔다!" : null,
    `${c.victim}에게 앞으로 ${c.days} 동안…`,
    "",
    ...c.curses.map((x) => "· " + x),
    "",
    c.side ? "⚠️ 부작용: " + c.side : null,
    "🔓 해제 조건: " + c.unlock,
  ].filter((l) => l !== null);
  g.font = '40px "Noto Serif KR", serif';
  for (const line of lines) {
    for (const part of wrap(g, line, W - 300)) {
      g.fillText(part, 150, y);
      y += 62;
    }
  }
  g.textAlign = "right";
  g.fillStyle = "#7a5a3a";
  g.font = '32px "Noto Serif KR", serif';
  g.fillText(`— ${c.typeName} · 저주력 ${c.p} · 呪印 —`, W - 150, H - 170);
  g.textAlign = "center";
  g.fillStyle = "#9b8a7a";
  g.font = '30px "Noto Serif KR", serif';
  g.fillText(SITE_URL.replace("https://", "") + " · 재미용, 실제 효과 0%", W / 2, H - 50);

  const a = document.createElement("a");
  a.download = "noroii-curse.png";
  a.href = cv.toDataURL("image/png");
  document.body.append(a);
  a.click();
  a.remove();
  toast("🖼️ 저주 카드를 저장했다");
});

function wrap(g, text, max) {
  if (!text) return [""];
  const out = [];
  let line = "";
  for (const ch of text) {
    if (g.measureText(line + ch).width > max) { out.push(line); line = ch; }
    else line += ch;
  }
  out.push(line);
  return out;
}

// ── 토스트 ──
let toastTimer = 0;
const toastQueue = [];
function toast(msg) {
  toastQueue.push(msg);
  if (toastQueue.length === 1) showNextToast();
}
function showNextToast() {
  const t = $("toast");
  t.textContent = toastQueue[0];
  t.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("on");
    setTimeout(() => {
      toastQueue.shift();
      if (toastQueue.length) showNextToast();
    }, 350);
  }, 2200);
}

// ── 업적 ──
function saveStats() { save("noroii-stats", stats); renderStats(); }

function checkBadges(ctxInfo = {}) {
  const has = {
    first: stats.curses >= 1,
    curses30: stats.curses >= 30,
    pins50: stats.pins >= 50,
    pyro: stats.burns >= 20,
    salt: stats.salts >= 10,
    chant: stats.chants >= 10,
    candles: ctxInfo.candles === 3,
    legend: ctxInfo.p >= 90,
    forbidden: ctxInfo.p >= 120,
    reflect: stats.reflected >= 1,
    allTypes: CURSE_TYPES.every((t) => t.id === "custom" || stats.types.includes(t.id)),
    combo20: stats.maxCombo >= 20,
    destroy: stats.destroys >= 1,
    pins500: stats.pins >= 500,
    author: stats.authored,
    ghost10: stats.ghosts >= 10,
    gold: stats.goldTalis,
    talisAll: stats.talis.length >= TALISMANS.length,
    mercy: stats.mercy >= 1,
    shake: stats.shakeCasts >= 1,
    allSkins: stats.skins.length >= SKINS.length,
  };
  BADGES.forEach((b) => {
    if (has[b.id] && !stats.badges.includes(b.id)) {
      stats.badges.push(b.id);
      toast(`🏆 업적 달성: ${b.icon} ${b.name}`);
      setTimeout(SFX.badge, 300);
    }
  });
}

function renderStats() {
  $("statRow").innerHTML = [
    ["저주", stats.curses],
    ["바늘·못", stats.pins],
    ["최대 콤보", stats.maxCombo],
    ["인형 파괴", stats.destroys],
  ].map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join("");
  $("badges").innerHTML = BADGES.map((b) => {
    const got = stats.badges.includes(b.id);
    return `<li class="${got ? "got" : ""}" title="${b.desc}"><span class="ico">${b.icon}</span><span><b>${got ? b.name : "???"}</b>${b.desc}</span></li>`;
  }).join("");
  $("badgeCount").textContent = `${stats.badges.length} / ${BADGES.length}`;
}
renderStats();

// ── 기록부 ──
const LOG_KEY = "noroii-log";
function renderLog() {
  const log = load(LOG_KEY, []);
  const ul = $("logList");
  if (!log.length) {
    ul.innerHTML = '<li class="empty">아직 아무도 저주받지 않았다…</li>';
    return;
  }
  ul.innerHTML = log.map((l) => `<li><time>${escapeHTML(l.t)}</time>${escapeHTML(l.m)}</li>`).join("");
}
function addLog(m) {
  const log = load(LOG_KEY, []);
  const t = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  log.unshift({ t, m });
  save(LOG_KEY, log.slice(0, 30));
  renderLog();
}
$("clearLog").addEventListener("click", () => {
  save(LOG_KEY, []);
  renderLog();
});
renderLog();

// ── 저주 룰렛 ──
$("rouletteBtn").addEventListener("click", () => {
  const chips = [...$("typeChips").querySelectorAll(".chip")].filter((c) => c.dataset.id !== "custom");
  const total = 16 + rand(chips.length);
  let i = 0;
  const spin = () => {
    const c = chips[i % chips.length];
    chips.forEach((x) => x.setAttribute("aria-pressed", x === c));
    SFX.tick(i);
    if (++i < total) return setTimeout(spin, 30 + i * i * 0.5);
    c.click();
    toast(`🎰 오늘의 저주는… ${c.textContent.trim()}!`);
  };
  spin();
});

// ── 나만의 저주 ──
function renderCustom() {
  const list = CURSES.custom;
  $("customList").innerHTML = list.length
    ? list.map((c, i) => `<li><span>${escapeHTML(c)}</span><button type="button" data-i="${i}" aria-label="삭제">✕</button></li>`).join("")
    : '<li class="empty">아직 없다. 직접 저주를 지어보세요.</li>';
}
function addCustom() {
  const input = $("customInput");
  const text = input.value.trim();
  if (!text) return input.focus();
  if (CURSES.custom.length >= 30) return toast("나만의 저주는 30개까지 저장된다");
  CURSES.custom.push(text);
  save("noroii-custom", CURSES.custom);
  input.value = "";
  renderCustom();
  stats.authored = true;
  checkBadges();
  saveStats();
}
$("customAdd").addEventListener("click", addCustom);
$("customInput").addEventListener("keydown", (e) => e.key === "Enter" && addCustom());
$("customList").addEventListener("click", (e) => {
  const i = e.target.dataset && e.target.dataset.i;
  if (i === undefined) return;
  CURSES.custom.splice(Number(i), 1);
  save("noroii-custom", CURSES.custom);
  renderCustom();
});
renderCustom();

// ── 유령 ──
let ghostTimer = 0;
function scheduleGhost(delay) {
  clearTimeout(ghostTimer);
  ghostTimer = setTimeout(spawnGhost, delay ?? 20000 + rand(25000));
}
function spawnGhost() {
  if (!state.target || document.hidden) return scheduleGhost();
  const g = document.createElement("button");
  g.type = "button";
  g.className = "ghost-float " + (Math.random() < 0.5 ? "ltr" : "rtl");
  g.textContent = "👻";
  g.setAttribute("aria-label", "유령 잡기");
  g.style.top = 12 + rand(60) + "vh";
  const grab = (e) => {
    e.preventDefault();
    if (g.dataset.caught) return;
    g.dataset.caught = "1";
    const r = g.getBoundingClientRect();
    g.className = "ghost-float caught";
    g.style.left = r.left + "px";
    g.style.top = r.top + "px";
    g.style.right = "auto";
    catchGhost();
  };
  g.addEventListener("pointerdown", grab);
  g.addEventListener("click", grab);
  g.addEventListener("animationend", () => g.remove());
  document.body.append(g);
  SFX.ghost();
  scheduleGhost();
}
function catchGhost() {
  state.ghosts++;
  stats.ghosts++;
  SFX.ghostCatch();
  vibrate(50);
  toast(state.ghosts <= 5 ? `👻 유령을 잡았다! 원한 +10 (${state.ghosts}마리)` : "👻 유령을 잡았다! (보너스는 5마리까지)");
  say(pick(["유령이다!", "나보다 불쌍한 녀석…", "으스스해…"]), true);
  updateMeter();
  checkBadges();
  saveStats();
}

// ── 번개 ──
function lightning(sound) {
  const l = $("lightning");
  l.classList.remove("on");
  void l.offsetWidth;
  l.classList.add("on");
  if (sound && bgm.on) setTimeout(SFX.thunder, 250 + rand(600));
}
(function storm() {
  setTimeout(() => {
    if (!document.hidden && Math.random() < 0.7) lightning(true);
    storm();
  }, 25000 + rand(35000));
})();

// ── 부적 도감 ──
function dropTalisman(p) {
  const roll = Math.random() * 100 - Math.min(p, 150) / 10;
  const tier = roll < 3 ? "l" : roll < 13 ? "e" : roll < 40 ? "r" : "c";
  const t = pick(TALISMANS.filter((x) => x.r === tier));
  const isNew = !stats.talis.includes(t.id);
  if (isNew) stats.talis.push(t.id);
  if (tier === "l") stats.goldTalis = true;
  return { t, isNew };
}
function renderTalis() {
  $("talisCount").textContent = `${stats.talis.length} / ${TALISMANS.length} · 도감 보너스 +${stats.talis.length}`;
  $("talisGrid").innerHTML = TALISMANS.map((t) => {
    const got = stats.talis.includes(t.id);
    const r = RARITY[t.r];
    return `<li class="${got ? "got" : ""}" style="--rc:${r.color}"><span class="ico">${got ? t.icon : "🧧"}</span>${got ? t.name : "???"}<small>${r.name}</small></li>`;
  }).join("");
}
renderTalis();
updateMeter();

// ── 진행 중인 저주 ──
const ACTIVE_KEY = "noroii-active";
function addActive({ victim, rank, curse, days }) {
  const list = load(ACTIVE_KEY, []);
  const now = Date.now();
  list.unshift({ id: now + "-" + rand(1e6), victim, rank, curse, start: now, end: now + days * 864e5 });
  save(ACTIVE_KEY, list.slice(0, 20));
  renderActive();
}
function fmtLeft(ms) {
  const m = Math.floor(ms / 60000);
  const d = Math.floor(m / 1440);
  const h = Math.floor((m % 1440) / 60);
  if (d) return `${d}일 ${h}시간 남음`;
  if (h) return `${h}시간 ${m % 60}분 남음`;
  return `${Math.max(1, m)}분 남음`;
}
function renderActive() {
  const list = load(ACTIVE_KEY, []);
  const ul = $("activeList");
  if (!list.length) {
    ul.innerHTML = '<li class="empty">걸려 있는 저주가 없다. 평화롭다…</li>';
    return;
  }
  const now = Date.now();
  ul.innerHTML = list.map((a) => {
    const done = now >= a.end;
    const pct = Math.min(100, ((now - a.start) / (a.end - a.start)) * 100);
    return `<li class="${done ? "done" : ""}">
      <div class="arow"><span><b>${escapeHTML(a.victim)}</b> · ${escapeHTML(a.rank)}<br>${escapeHTML(a.curse)}</span>
      ${done ? '<span class="left">만료됨 ✔</span>' : `<span class="left">${fmtLeft(a.end - now)}</span><button type="button" class="release" data-id="${escapeHTML(a.id)}">🔓 풀어주기</button>`}</div>
      <div class="abar"><div style="width:${pct}%"></div></div></li>`;
  }).join("");
}
$("activeList").addEventListener("click", (e) => {
  const id = e.target.dataset && e.target.dataset.id;
  if (!id) return;
  save(ACTIVE_KEY, load(ACTIVE_KEY, []).filter((a) => a.id !== id));
  stats.mercy++;
  SFX.salt();
  toast(pick(["🕊️ 저주를 풀어줬다. 착하다", "🕊️ 자비를 베풀었다", "🕊️ 오늘은 봐주기로 했다"]));
  checkBadges();
  saveStats();
  renderActive();
});
$("cleanActive").addEventListener("click", () => {
  const now = Date.now();
  save(ACTIVE_KEY, load(ACTIVE_KEY, []).filter((a) => a.end > now));
  renderActive();
});
renderActive();
setInterval(renderActive, 60000);

// ── 폰 흔들어서 발동 ──
let castByShake = false;
let shakeOn = false;
let shakeHits = [];
let shakeCool = 0;
if ("DeviceMotionEvent" in window && matchMedia("(pointer: coarse)").matches) $("shakeBtn").hidden = false;

function onMotion(e) {
  const a = e.accelerationIncludingGravity || e.acceleration;
  if (!a) return;
  if (Math.hypot(a.x || 0, a.y || 0, a.z || 0) < 25) return;
  const now = performance.now();
  shakeHits = shakeHits.filter((t) => now - t < 800);
  shakeHits.push(now);
  if (shakeHits.length < 3 || now < shakeCool) return;
  shakeHits = [];
  shakeCool = now + 2500;
  if ($("castBtn").disabled) return say("흔들지 마! 어지러워…", true);
  castByShake = true;
  cast();
}

$("shakeBtn").addEventListener("click", async () => {
  const btn = $("shakeBtn");
  if (shakeOn) {
    window.removeEventListener("devicemotion", onMotion);
    shakeOn = false;
  } else {
    try {
      if (typeof DeviceMotionEvent.requestPermission === "function" && (await DeviceMotionEvent.requestPermission()) !== "granted") {
        return toast("흔들기 권한이 거부됐다");
      }
    } catch (_) {
      return toast("이 기기에서는 흔들기를 쓸 수 없다");
    }
    window.addEventListener("devicemotion", onMotion);
    shakeOn = true;
    toast("📳 폰을 세게 흔들면 저주가 발동된다");
  }
  btn.classList.toggle("on", shakeOn);
  btn.textContent = `📳 폰 흔들어서 발동하기: ${shakeOn ? "켜짐" : "꺼짐"}`;
});
