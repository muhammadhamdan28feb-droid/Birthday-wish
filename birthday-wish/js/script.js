/* ============================================================
   EDIT ME — everything you'll want to personalize lives here.
   ============================================================ */
const CONFIG = {
  bestieName: "Bestie",

  // Add / remove / edit messages freely. Each needs a "cats" state
  // (see CAT_STATES below) that controls what the cats do on that screen.
  // The LAST message in this array is always treated as the final,
  // cake-reveal screen.
  messages: [
    { eyebrow: "psst...", text: "Hey Bestie! 👀\nI made something special just for you...", cats: "bw-peek" },
    { eyebrow: "open your surprise", text: "Tap the gift and reveal your surprise one little chapter at a time.", cats: "white-heart" },
    { eyebrow: "ready?", text: "Every tap opens a new message, a new memory, a new smile. Let’s go. ❤️", cats: "both-idle" },

    { eyebrow: "our first meeting", text: "Do you remember how we first met? ❤️", cats: "bw-think" },
    { eyebrow: "first impression", text: "Mujhe abhi bhi yaad hai k ap ko kitna chalwaya tha first time milne k leay...", cats: "white-idle" },
    { eyebrow: "unexpected beginning", text: "Us waqt kahan pata tha ke yeh simple si mulaqat itni khubsurat dosti ban jayegi. 🥹", cats: "both-heart" },
    { eyebrow: "rainy surprise", text: "Aur phir... woh achanak wali baarish. 🌧️", cats: "bw-surprise" },
    { eyebrow: "small coincidence", text: "Maybe it was just rain... lekin yeh chhoti si baarish hamari story ka ek special hissa ban gayi. ❤️", cats: "white-walk" },

    { eyebrow: "lunch box", text: "mera favourite khana lunch box mein laati thi. 🍱", cats: "white-hungry" },
    { eyebrow: "forgetful", text: "Aur sabse funny? lunch box wapas lena bhool jaati thi! 😭😂", cats: "bw-confused" },
    { eyebrow: "biryani", text: "Aur haan... woh biryani wali baat main kabhi nahi bhool sakta. 😂🍛", cats: "bw-joy" },

    { eyebrow: "your caring side", text: "Some stories are not meant to be told to everyone...", cats: "bw-listen" },
    { eyebrow: "trusted you", text: "Lekin mujhe pata tha ke main meri har baat ap k paas safe chhor sakta hoon. 🤍", cats: "white-caring" },
    { eyebrow: "support", text: "ap mujhe har step par samjha aur support kiya.", cats: "both-caring" },
    { eyebrow: "grateful", text: "Yeh sabse pyari quality hai, aur main hamesha iska shukriya ada karunga.", cats: "both-heart" },

    { eyebrow: "funny names", text: "mujhe ajeeb aur cute names deti hn, jo har baar smile karwate hain.", cats: "bw-smile" },
    { eyebrow: "batman", text: "Kabhi Batman 🦇...", cats: "bw-superhero" },
    { eyebrow: "professor", text: "Kabhi Professor 🤓...", cats: "white-glasses" },
    { eyebrow: "favorite name", text: "Sach poocho to Professor mera sabse favourite name hai! 😂❤️", cats: "bw-dance" },
    { eyebrow: "merida", text: "Phir m ap ko Merida 🏹, adventure aur red-curly energy ke saath.", cats: "both-merida" },
    { eyebrow: "melody", text: "Aur Melody 🎶, jise sun ke main seedha dance karna chahta hoon.", cats: "both-melody" },

    { eyebrow: "your story", text: "Phir mujha ap ki story ka twist mila.", cats: "white-story" },
    { eyebrow: "every detail", text: "Main har choti baat mein genuinely interested ho gaya.", cats: "bw-listen" },
    { eyebrow: "mano", text: "Jab ap ne Mano ke baare mein bataya... main literally pighal gaya tha. 🥹❤️", cats: "white-blush" },
    { eyebrow: "simba", text: "Aur jab mera Simba aaya, ap bhi us par fida ho gayi thi. 😂🐱❤️", cats: "both-cute" },
    { eyebrow: "friendship", text: "Shayad dosti ka matlab yahi hai... ek dusre ki kahani mein dhire dhire ghul jana.", cats: "both-heart" },

    { eyebrow: "different worlds", text: "Hum dono kitne alag hain...", cats: "bw-coding" },
    { eyebrow: "coding life", text: "Main code, functions, bugs... 💻", cats: "bw-coding" },
    { eyebrow: "book world", text: "Aur ap novels, stories, characters ki duniya mein. 📚", cats: "white-books" },
    { eyebrow: "flowers", text: "Aur 70 phoolon ke names yaad rakhna? Seriously, yeh pura fiction lagta hai. 🌸✨", cats: "white-flowers" },
    { eyebrow: "same friendship", text: "Different worlds... phir bhi ek hi dosti. ❤️", cats: "both-worlds" },

    { eyebrow: "just a few", text: "Aur yeh sirf kuch yaadein thi jo maine aaj ap k saath share ki.", cats: "both-idle" },
    { eyebrow: "so many more", text: "Because honestly... there are so many more. ❤️", cats: "both-heart" },
    { eyebrow: "one more surprise", text: "But before this gets too emotional... 😂", cats: "bw-anticipate" },
    { eyebrow: "one last surprise", text: "We still have one more surprise for you... 👀🎁", cats: "both-peek", actionLabel: "One Last Surprise →" },

    { eyebrow: "happy birthday", text: "Happy Birthday, Bestie! ❤️🎂\n\nFrom that first meeting...\nto that unexpected baarish...\n\nFrom lunch boxes and biryani...\nto Batman, Professor, Merida and Melody...\n\nFrom sharing stories...\nto knowing each other's little worlds...\n\nWe've collected so many little memories together.\n\nAnd honestly, I hope this is only the beginning.\n\nI hope life gives you endless reasons to smile,\nlots of happiness,\nsuccess in everything you do,\nand many more beautiful moments.\n\nStay the same amazing, caring, unique, and slightly crazy person you are. 😂❤️\n\nAnd no matter how many years pass...\n\nI hope we keep making more memories,\nmore stories,\nmore inside jokes,\nand more crazy moments together.\n\nHappy Birthday to one of the most special people in my life.\n\nHappy Birthday, Bestie! 🥹❤️🎂✨", cats: "final-cake", finalHeading: "HAPPY BIRTHDAY, BESTIE! 🎂❤️✨" }
  ],

  // Leave empty to disable music, or point to your own mp3 file, e.g. "my-song.mp3"
  musicSrc: ""
};

/* CAT_STATES — how the two cats behave on each named state above.
   pos: 'center' | 'left' | 'right' | 'hide'
   anim: 'peek' | 'idle' | 'bounce' | 'wiggle' | 'dance' | 'walk' | 'present'
   hold: null | 'heart' (small heart the white cat holds) */
const CAT_STATES = {
  "bw-peek":       { bw:{pos:'center', anim:'peek'},     white:{pos:'hide'},                     cake:false },
  "white-heart":   { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle', hold:'heart'}, cake:false },
  "both-idle":     { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "bw-think":      { bw:{pos:'center', anim:'idle'},     white:{pos:'hide'},                     cake:false },
  "white-idle":    { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle'},     cake:false },
  "both-heart":    { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "bw-surprise":   { bw:{pos:'center', anim:'peek'},     white:{pos:'hide'},                     cake:false },
  "white-walk":    { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'walk'},       cake:false },
  "white-hungry":  { bw:{pos:'left', anim:'idle'},       white:{pos:'center', anim:'bounce'},    cake:false },
  "bw-confused":   { bw:{pos:'center', anim:'wiggle'},   white:{pos:'hide'},                     cake:false },
  "both-hungry":   { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'peek'},       cake:false },
  "bw-joy":        { bw:{pos:'center', anim:'bounce'},   white:{pos:'hide'},                     cake:false },
  "bw-listen":     { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "white-caring":  { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle', hold:'heart'}, cake:false },
  "both-caring":   { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "bw-smile":      { bw:{pos:'center', anim:'idle'},     white:{pos:'hide'},                     cake:false },
  "bw-superhero":  { bw:{pos:'center', anim:'bounce', extra:'superhero'}, white:{pos:'hide'},            cake:false },
  "white-glasses": { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle', extra:'glasses'}, cake:false },
  "both-merida":   { bw:{pos:'left', anim:'peek'},       white:{pos:'right', anim:'bounce', extra:'merida'}, cake:false },
  "both-melody":   { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'bounce', extra:'music'}, cake:false },
  "white-story":   { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "white-blush":   { bw:{pos:'hide'},                    white:{pos:'center', anim:'bounce', hold:'heart'}, cake:false },
  "both-cute":     { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'bounce'},      cake:false },
  "bw-coding":     { bw:{pos:'center', anim:'idle', extra:'code'}, white:{pos:'hide'},                 cake:false },
  "white-books":   { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle', extra:'books'}, cake:false },
  "white-flowers": { bw:{pos:'hide'},                    white:{pos:'center', anim:'idle', extra:'flowers'}, cake:false },
  "both-worlds":   { bw:{pos:'left', anim:'idle'},       white:{pos:'right', anim:'idle'},       cake:false },
  "bw-anticipate": { bw:{pos:'center', anim:'peek'},     white:{pos:'hide'},                     cake:false },
  "both-peek":     { bw:{pos:'left', anim:'peek'},       white:{pos:'right', anim:'peek'},       cake:false },
  "bw-dance":      { bw:{pos:'center', anim:'dance'},    white:{pos:'hide'},                     cake:false },
  "final-cake":    { bw:{pos:'left', anim:'bounce'},     white:{pos:'right', anim:'present'},    cake:true }
};

/* ============================================================
   Cat + cake SVG artwork (chibi style, reused across screens)
   ============================================================ */
function catSVG(kind){
  // kind: 'bw' (black & white) or 'white'
  const patch = kind === 'bw';
  const bodyFill = '#FFFFFF';
  const patchFill = '#2E2A33';
  return `
  <svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="176" rx="52" ry="8" fill="#E84B86" opacity="0.12"/>
    <!-- tail -->
    <path d="M155 150 C 190 140, 190 90, 158 82" stroke="${patch ? patchFill : '#F3D9E4'}" stroke-width="16" stroke-linecap="round" fill="none"/>
    <!-- body -->
    <ellipse cx="100" cy="128" rx="58" ry="46" fill="${bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    ${patch ? '<path d="M55 110 C 50 145, 80 165, 110 160 C 90 150, 78 125, 88 100 Z" fill="'+patchFill+'"/>' : ''}
    <!-- front paws -->
    <ellipse cx="76" cy="168" rx="14" ry="10" fill="${bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    <ellipse cx="124" cy="168" rx="14" ry="10" fill="${bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    <!-- head -->
    <circle cx="100" cy="76" r="52" fill="${bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    ${patch ? '<path d="M58 60 C 55 40, 78 28, 96 34 C 78 42, 68 58, 74 78 Z" fill="'+patchFill+'"/>' : ''}
    <!-- ears -->
    <path d="M56 44 L44 6 L84 34 Z" fill="${patch ? patchFill : bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    <path d="M144 44 L156 6 L116 34 Z" fill="${bodyFill}" stroke="#E9D9E2" stroke-width="2"/>
    <path d="M60 34 L52 16 L76 32 Z" fill="#FFC2DB"/>
    <path d="M140 34 L148 16 L124 32 Z" fill="#FFC2DB"/>
    <!-- blush -->
    <ellipse cx="70" cy="88" rx="10" ry="6" fill="#FFB6D2" opacity="0.8"/>
    <ellipse cx="130" cy="88" rx="10" ry="6" fill="#FFB6D2" opacity="0.8"/>
    <!-- eyes -->
    <circle cx="82" cy="76" r="5.5" fill="#2E2A33"/>
    <circle cx="118" cy="76" r="5.5" fill="#2E2A33"/>
    <circle cx="84" cy="74" r="1.6" fill="#fff"/>
    <circle cx="120" cy="74" r="1.6" fill="#fff"/>
    <!-- nose + mouth -->
    <path d="M96 90 L104 90 L100 95 Z" fill="#FF8FB3"/>
    <path d="M100 95 C 100 100, 92 102, 88 98 M100 95 C 100 100, 108 102, 112 98" stroke="#2E2A33" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <!-- whiskers -->
    <path d="M42 82 L66 84 M42 92 L66 90 M158 82 L134 84 M158 92 L134 90" stroke="#E9C6D6" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function heartHold(){
  return `<div class="held-heart">💗</div>`;
}

function extraLabel(key){
  const labels = {
    superhero: '🦸',
    glasses: '🤓',
    merida: '🏹',
    music: '🎶',
    books: '📚',
    flowers: '🌸',
    code: '💻'
  };
  return labels[key] || '';
}

function cakeSVG(){
  return `
  <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="110" cy="188" rx="70" ry="9" fill="#E84B86" opacity="0.14"/>
    <!-- flames -->
    <g>
      <path class="flame" d="M70 46 C 66 38, 72 30, 70 22 C 78 28, 80 40, 74 48 Z" fill="#FFC857"/>
      <path class="flame" d="M110 40 C 106 32, 112 24, 110 16 C 118 22, 120 34, 114 42 Z" fill="#FFC857"/>
      <path class="flame" d="M150 46 C 146 38, 152 30, 150 22 C 158 28, 160 40, 154 48 Z" fill="#FFC857"/>
    </g>
    <!-- candles -->
    <rect x="66" y="48" width="8" height="26" rx="2" fill="#FF6FA0"/>
    <rect x="106" y="42" width="8" height="32" rx="2" fill="#8CD9B3"/>
    <rect x="146" y="48" width="8" height="26" rx="2" fill="#B9A6FF"/>
    <!-- top tier -->
    <rect x="55" y="76" width="110" height="42" rx="14" fill="#FFF3F8" stroke="#F3D2E4" stroke-width="2"/>
    <path d="M55 90 Q 65 82 75 90 T 95 90 T 115 90 T 135 90 T 155 90 T 165 90" stroke="#FF9FC0" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="70" cy="100" r="4" fill="#FF6FA0"/>
    <circle cx="95" cy="104" r="4" fill="#8CD9B3"/>
    <circle cx="120" cy="100" r="4" fill="#B9A6FF"/>
    <circle cx="145" cy="104" r="4" fill="#FFC857"/>
    <!-- bottom tier -->
    <rect x="30" y="118" width="160" height="58" rx="18" fill="#FFE3EF" stroke="#F3C6DC" stroke-width="2"/>
    <path d="M30 136 Q 42 126 54 136 T 78 136 T 102 136 T 126 136 T 150 136 T 174 136 T 190 136" stroke="#FF6FA0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="55" cy="156" r="5" fill="#FF6FA0"/>
    <circle cx="85" cy="160" r="5" fill="#B9A6FF"/>
    <circle cx="115" cy="156" r="5" fill="#8CD9B3"/>
    <circle cx="145" cy="160" r="5" fill="#FFC857"/>
    <circle cx="170" cy="156" r="5" fill="#FF6FA0"/>
  </svg>`;
}

/* ============================================================
   Build DOM for message screens
   ============================================================ */
const total = CONFIG.messages.length;
const messagesContainer = document.getElementById('message-screens');

CONFIG.messages.forEach((m, i) => {
  const isFinal = i === total - 1;
  const screen = document.createElement('section');
  screen.className = 'screen';
  screen.id = 'screen-msg-' + i;

  const dots = CONFIG.messages.map((_, di) =>
    `<span class="dot ${di < i ? 'done' : ''} ${di === i ? 'current' : ''}"></span>`
  ).join('');

  screen.innerHTML = `
    <div class="cat-stage" id="cat-stage-${i}"></div>
    <div class="card" data-advance="1">
      ${isFinal
        ? `<div class="eyebrow">${m.eyebrow || ''}</div><h2 class="final-heading">${m.finalHeading || 'Happy Birthday!'}</h2><div class="msg-text">${escapeText(m.text)}</div>`
        : `<div class="eyebrow">${m.eyebrow || ''}</div><div class="msg-text ${m.big ? 'big' : ''}">${escapeText(m.text)}</div>`
      }
      <div class="tap-hint">${isFinal ? 'tap for a surprise ✨' : (m.actionLabel ? 'tap the button to continue →' : 'tap to continue →')}</div>
      ${m.actionLabel ? `<button class="card-action-btn" data-action-index="${i}">${m.actionLabel}</button>` : ''}
    </div>
    <div class="progress">${dots}</div>
    <div class="counter">${i+1} / ${total}</div>
    ${isFinal ? `<button class="replay-btn" id="replay-btn">Replay Our Story 🔄❤️</button>` : ''}
  `;
  messagesContainer.appendChild(screen);
});

function escapeText(t){
  const div = document.createElement('div');
  div.innerText = t;
  return div.innerHTML;
}

document.getElementById('welcome-name').textContent = CONFIG.bestieName;

/* ============================================================
   Render cats into a given cat-stage element for a given state
   ============================================================ */
function renderCatStage(el, stateKey){
  const state = CAT_STATES[stateKey] || CAT_STATES['both-idle'];
  const bw = state.bw || { pos:'hide' };
  const wh = state.white || { pos:'hide' };

  const posClass = p => p.pos === 'hide' ? 'pos-hide' : ('pos-' + p.pos);
  const animClass = p => p.anim ? ('anim-' + p.anim) : '';

  el.innerHTML = `
    <div class="cat-wrap ${posClass(bw)} ${animClass(bw)}" id="cat-bw">
      ${catSVG('bw')}
      ${bw.extra ? `<div class="cat-extra ${bw.extra}">${extraLabel(bw.extra)}</div>` : ''}
    </div>
    <div class="cat-wrap ${posClass(wh)} ${animClass(wh)}" id="cat-white">
      ${catSVG('white')}
      ${wh.hold === 'heart' ? heartHold() : ''}
      ${wh.extra ? `<div class="cat-extra ${wh.extra}">${extraLabel(wh.extra)}</div>` : ''}
    </div>
    ${state.cake ? `<div class="cake-wrap" id="cake-el">${cakeSVG()}</div>` : ''}
  `;

  if(state.cake){
    requestAnimationFrame(() => {
      const cake = el.querySelector('#cake-el');
      if(cake){
        setTimeout(() => cake.classList.add('show'), 250);
      }
    });
  }
}

// Welcome screen starts with the black & white cat peeking
renderCatStage(document.getElementById('welcome-cat-stage'), 'bw-peek');

// Render each message screen's cat stage
CONFIG.messages.forEach((m, i) => {
  renderCatStage(document.getElementById('cat-stage-' + i), m.cats);
});

/* ============================================================
   Navigation logic
   ============================================================ */
let currentIndex = -1; // -1 = welcome
const welcomeScreen = document.getElementById('screen-welcome');
const allMsgScreens = Array.from(document.querySelectorAll('[id^="screen-msg-"]'));

function goTo(index){
  const outgoing = currentIndex === -1 ? welcomeScreen : document.getElementById('screen-msg-' + currentIndex);
  currentIndex = index;
  const incoming = index === -1 ? welcomeScreen : document.getElementById('screen-msg-' + index);

  if(outgoing && outgoing !== incoming){
    outgoing.classList.remove('active');
    outgoing.classList.add('leaving');
    setTimeout(() => outgoing.classList.remove('leaving'), 450);
  }
  incoming.classList.add('active');

  if(index >= 0){
    const stateKey = CONFIG.messages[index].cats;
    // re-trigger cake pop / entrance animations each visit
    renderCatStage(document.getElementById('cat-stage-' + index), stateKey);
  }

  if(index === total - 1){
    launchConfetti();
  }
}

document.getElementById('start-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  ensureMusicStarted();
  goTo(0);
});

allMsgScreens.forEach((screen, i) => {
  const card = screen.querySelector('.card');
  card.addEventListener('click', (event) => {
    if(event.target.closest('.card-action-btn')) return;
    if(i < total - 1 && !card.querySelector('.card-action-btn')){
      goTo(i + 1);
    }
  });
  const actionBtn = card.querySelector('.card-action-btn');
  if(actionBtn){
    actionBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      if(i < total - 1){
        goTo(i + 1);
      }
    });
  }
});

// Replay button
document.addEventListener('click', (e) => {
  if(e.target && e.target.id === 'replay-btn'){
    e.stopPropagation();
    goTo(-1);
  }
});

/* ============================================================
   Ambient floating hearts / sparkles background
   ============================================================ */
const ambient = document.getElementById('ambient');
const floatyEmojis = ['💗','✨','⭐','💫','🩷'];
function spawnFloaty(){
  const s = document.createElement('span');
  s.className = 'floaty';
  s.textContent = floatyEmojis[Math.floor(Math.random()*floatyEmojis.length)];
  const size = 14 + Math.random()*16;
  s.style.left = (Math.random()*100) + '%';
  s.style.fontSize = size + 'px';
  const duration = 9 + Math.random()*8;
  s.style.animationDuration = duration + 's';
  ambient.appendChild(s);
  setTimeout(() => s.remove(), duration*1000 + 200);
}
for(let i=0;i<6;i++){ setTimeout(spawnFloaty, i*900); }
setInterval(spawnFloaty, 1400);

/* ============================================================
   Music controls (no autoplay — user gesture required)
   ============================================================ */
let audio = null;
let musicOn = false;
const musicBtn = document.getElementById('music-btn');

function ensureMusicStarted(){
  if(!CONFIG.musicSrc) return; // no track configured — button stays hidden
  if(!audio){
    audio = new Audio(CONFIG.musicSrc);
    audio.loop = true;
    audio.volume = 0.5;
  }
  musicBtn.classList.add('show');
}

musicBtn.addEventListener('click', () => {
  if(!audio) return;
  if(musicOn){
    audio.pause();
    musicOn = false;
    musicBtn.classList.remove('playing');
    musicBtn.querySelector('.note').textContent = '🔇';
  } else {
    audio.play().catch(()=>{});
    musicOn = true;
    musicBtn.classList.add('playing');
    musicBtn.querySelector('.note').textContent = '🎵';
  }
});

// If a track is configured, reveal the music button once the user starts.
if(CONFIG.musicSrc){
  musicBtn.classList.remove('show');
} else {
  musicBtn.style.display = 'none';
}

/* ============================================================
   Confetti (lightweight canvas implementation, no dependencies)
   ============================================================ */
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const confettiColors = ['#FF6FA0','#FFC857','#B9A6FF','#8CD9B3','#FF9FC0','#FFFFFF'];
let confettiParticles = [];
let confettiRunning = false;

function launchConfetti(){
  const count = 90;
  for(let i=0;i<count;i++){
    confettiParticles.push({
      x: Math.random()*canvas.width,
      y: -20 - Math.random()*canvas.height*0.3,
      w: 6 + Math.random()*6,
      h: 8 + Math.random()*8,
      color: confettiColors[Math.floor(Math.random()*confettiColors.length)],
      speedY: 2 + Math.random()*3,
      speedX: (Math.random()-0.5)*2,
      rotation: Math.random()*360,
      rotSpeed: (Math.random()-0.5)*10,
      life: 0,
      maxLife: 260 + Math.random()*120
    });
  }
  if(!confettiRunning){
    confettiRunning = true;
    requestAnimationFrame(confettiTick);
  }
}

function confettiTick(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiParticles.forEach(p => {
    p.y += p.speedY;
    p.x += p.speedX + Math.sin(p.y*0.02);
    p.rotation += p.rotSpeed;
    p.life++;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI/180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, 1 - p.life/p.maxLife);
    ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
    ctx.restore();
  });
  confettiParticles = confettiParticles.filter(p => p.life < p.maxLife && p.y < canvas.height + 40);
  if(confettiParticles.length > 0){
    requestAnimationFrame(confettiTick);
  } else {
    confettiRunning = false;
  }
}
