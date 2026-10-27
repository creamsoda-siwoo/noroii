// 노로이 — 재미로 하는 하찮은 저주
const CURSES = {
  daily: [
    "양말 한 짝이 영원히 행방불명된다",
    "이어폰 줄이 주머니에서 매번 매듭을 짓는다",
    "엘리베이터가 항상 바로 앞에서 닫힌다",
    "샤워 중 샴푸가 딱 한 번 짜기 부족하게 남는다",
    "신호등이 다가갈 때마다 빨간불로 바뀐다",
    "새 옷을 입은 날 꼭 국물이 튄다",
  ],
  food: [
    "라면 물 조절이 언제나 미묘하게 실패한다",
    "과자 봉지를 뜯으면 질소만 가득하다",
    "치킨을 시키면 퍽퍽살만 남는다",
    "아이스크림이 첫 입에 막대에서 떨어진다",
    "컵라면에 뜨거운 물을 붓자마자 젓가락이 없음을 깨닫는다",
    "편의점 1+1이 항상 방금 끝났다",
  ],
  tech: [
    "충전기가 특정 각도에서만 충전된다",
    "와이파이가 중요한 순간에만 끊긴다",
    "업데이트가 가장 바쁠 때 시작된다",
    "USB를 꽂을 때마다 세 번 뒤집어야 한다",
    "자동완성이 늘 엉뚱한 단어를 고른다",
    "배터리가 항상 13%에서 멈칫한다",
  ],
  luck: [
    "가위바위보에서 이상하게 계속 진다",
    "줄을 서면 꼭 옆 줄이 더 빨리 줄어든다",
    "우산을 두고 나온 날만 비가 온다",
    "뽑기에서 꽝만 연속으로 나온다",
    "택배가 '배송 중'에서 사흘 동안 멈춘다",
    "재채기가 나올 듯 말 듯 하다가 안 나온다",
  ],
};

const PART_BONUS = { 머리: 20, 몸통: 15, 왼팔: 10, 오른팔: 10, 왼다리: 10, 오른다리: 10 };
const PIN_COLORS = ["#b3141b", "#1b1b1b", "#5a1a8a", "#d4a017", "#2a6e3f"];
const MAX_PINS = 12;

const $ = (id) => document.getElementById(id);
const doll = $("doll");
const pinsG = $("pins");
let target = "";
let power = 0;
let pins = 0;

// ── 효과음 (WebAudio) ──
let audio;
function tone(freq, dur, type = "sine", vol = 0.15, slide = 0) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator();
    const g = audio.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, audio.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, audio.currentTime + dur);
    g.gain.setValueAtTime(vol, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + dur);
    o.connect(g).connect(audio.destination);
    o.start();
    o.stop(audio.currentTime + dur);
  } catch (_) { /* 소리 없이 진행 */ }
}
const sfxStab = () => tone(900, 0.12, "square", 0.08, 200);
const sfxCast = () => {
  tone(110, 1.6, "sawtooth", 0.12, 40);
  tone(165, 1.6, "triangle", 0.1, 55);
};

// ── 이름 새기기 ──
$("bindBtn").addEventListener("click", () => {
  const name = $("target").value.trim();
  if (!name) {
    $("dollHint").textContent = "이름 없이는 저주할 수 없다…";
    $("target").focus();
    return;
  }
  target = name;
  const tag = $("dollName");
  tag.textContent = name.length > 8 ? name.slice(0, 8) + "…" : name;
  if (tag.getComputedTextLength() > 60) tag.setAttribute("textLength", 60);
  else tag.removeAttribute("textLength");
  tag.setAttribute("lengthAdjust", "spacingAndGlyphs");
  doll.classList.add("ready");
  $("dollHint").textContent = `「${name}」 인형에 바늘을 꽂으세요. (최대 ${MAX_PINS}개)`;
  tone(220, 0.5, "triangle", 0.1, 330);
  resetPins();
});
$("target").addEventListener("keydown", (e) => e.key === "Enter" && $("bindBtn").click());

// ── 바늘 꽂기 ──
doll.addEventListener("click", (e) => {
  const part = e.target.dataset && e.target.dataset.part;
  if (!part || !target) return;
  if (pins >= MAX_PINS) {
    $("dollHint").textContent = "더 이상 꽂을 자리가 없다. 저주를 발동하라!";
    return;
  }
  const pt = doll.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;
  const { x, y } = pt.matrixTransform(doll.getScreenCTM().inverse());
  addPin(x, y);

  pins++;
  power = Math.min(100, power + PART_BONUS[part] + Math.floor(Math.random() * 6));
  updateMeter();
  $("dollHint").textContent = `${part}에 바늘이 꽂혔다! (${pins}/${MAX_PINS})`;
  doll.classList.remove("shake");
  void doll.getBBox();
  doll.classList.add("shake");
  sfxStab();
});

function addPin(x, y) {
  const ns = "http://www.w3.org/2000/svg";
  const g = document.createElementNS(ns, "g");
  g.setAttribute("class", "pin");
  const line = document.createElementNS(ns, "line");
  line.setAttribute("x1", x);
  line.setAttribute("y1", y);
  line.setAttribute("x2", x - 14);
  line.setAttribute("y2", y - 14);
  const head = document.createElementNS(ns, "circle");
  head.setAttribute("cx", x - 14);
  head.setAttribute("cy", y - 14);
  head.setAttribute("r", 5);
  head.setAttribute("fill", PIN_COLORS[Math.floor(Math.random() * PIN_COLORS.length)]);
  g.append(line, head);
  pinsG.append(g);
}

function updateMeter() {
  $("meterFill").style.width = power + "%";
  $("meterNum").textContent = power + "%";
  $("castBtn").disabled = pins === 0;
}

function resetPins() {
  pinsG.innerHTML = "";
  pins = 0;
  power = 0;
  updateMeter();
}

$("resetBtn").addEventListener("click", () => {
  resetPins();
  if (target) $("dollHint").textContent = "바늘을 모두 뽑았다. 다시 꽂아보자.";
});

// ── 저주 발동 ──
function pick(list, n) {
  return [...list].sort(() => Math.random() - 0.5).slice(0, n);
}

function rank(p) {
  if (p >= 90) return "전설의 대저주";
  if (p >= 60) return "강력한 저주";
  if (p >= 30) return "평범한 저주";
  return "미약한 저주";
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function cast() {
  const type = $("curseType").value;
  const count = power >= 90 ? 3 : power >= 50 ? 2 : 1;
  const curses = pick(CURSES[type], count);
  const days = Math.max(1, Math.round(power / 10));

  $("scroll").innerHTML = `
    <p class="title">${rank(power)}</p>
    <p><b>${escapeHTML(target)}</b>에게 앞으로 <b>${days}일</b> 동안…</p>
    <ul>${curses.map((c) => `<li>${c}</li>`).join("")}</ul>
    <p class="seal">— 저주력 ${power}% · 呪印 —</p>`;
  $("result").hidden = false;

  const flash = $("flash");
  flash.classList.remove("on");
  void flash.offsetWidth;
  flash.classList.add("on");
  sfxCast();

  addLog(`${target} — ${rank(power)} (${curses[0]}${curses.length > 1 ? " 외" : ""})`);
  $("result").scrollIntoView({ behavior: "smooth", block: "center" });
}

$("castBtn").addEventListener("click", cast);
$("againBtn").addEventListener("click", () => pins && cast());

// ── 기록부 ──
const LOG_KEY = "noroii-log";
function loadLog() {
  try { return JSON.parse(localStorage.getItem(LOG_KEY)) || []; } catch (_) { return []; }
}
function renderLog() {
  const log = loadLog();
  const ul = $("logList");
  if (!log.length) {
    ul.innerHTML = '<li class="empty">아직 아무도 저주받지 않았다…</li>';
    return;
  }
  ul.innerHTML = log
    .map((l) => `<li><time>${l.t}</time>${escapeHTML(l.m)}</li>`)
    .join("");
}
function addLog(m) {
  const log = loadLog();
  const t = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  log.unshift({ t, m });
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(0, 30))); } catch (_) {}
  renderLog();
}
renderLog();
