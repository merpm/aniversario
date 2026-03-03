const relationshipStartDate = new Date("2023-03-03T00:00:00");

// ======= DATOS =======
const momentsData = [
  { image: "assets/img/foto5.jpeg", caption: "nuestro recuerdo bonito" },
  { image: "assets/img/foto6.jpeg", caption: "mi ojitos ♡" },
  { image: "assets/img/foto7.jpeg", caption: "un día especial" },
  { image: "assets/img/foto8.jpeg", caption: "más de nosotros" },
  { image: "assets/img/foto9.jpeg", caption: "un momento que amo" },
  { image: "assets/img/foto10.jpeg", caption: "siempre contigo" },
  { image: "assets/img/foto11.jpeg", caption: "uno de mis favoritos" },
  { image: "assets/img/foto12.jpeg", caption: "por muchos más" },
];

const reasonsData = [
  {
    img: "assets/reasons/1.png",
    title: "Tu mirada",
    text: "Porque en tus ojitos encuentro ternura, calma y hogar.",
  },
  {
    img: "assets/reasons/2.png",
    title: "Tu sonrisa",
    text: "Tu sonrisa tiene el poder de alegrarme.",
  },
  {
    img: "assets/reasons/3.png",
    title: "Tu forma de quererme",
    text: "Me haces sentir acompañada y especial.",
  },
  {
    img: "assets/reasons/4.png",
    title: "Tu paciencia",
    text: "Amo la forma en que me escuchas y estás para mí.",
  },
  {
    img: "assets/reasons/5.png",
    title: "Nuestra complicidad",
    text: "Nos entendemos con una mirada o una risa.",
  },
  {
    img: "assets/reasons/6.png",
    title: "Tu esencia",
    text: "Amo quién eres y tu manera linda de estar presente.",
  },
  {
    img: "assets/reasons/7.png",
    title: "La paz que me das",
    text: "Contigo me siento tranquila y feliz.",
  },
  {
    img: "assets/reasons/8.png",
    title: "Nuestros recuerdos",
    text: "Cada instante contigo vale muchísimo.",
  },
  {
    img: "assets/reasons/9.png",
    title: "Lo nuestro",
    text: "Amo lo que hemos construido juntos.",
  },
  {
    img: "assets/reasons/10.png",
    title: "Que seas tú",
    text: "La más grande: que seas tú, mi ojitos.",
  },
];

const videoCardsData = [
  {
    title: "Risa que se queda",
    hp: "HP 120",
    file: "assets/video/video1.mp4",
    poster: "assets/img/foto9.jpeg",
    attack: "Risa compartida",
    description: "Un videíto que guarda uno de esos momentos que siempre quiero volver a ver.",
    weakness: "ternura x2",     // Debilidad
    resistance: "abrazos",      // Resistencia
  },
  {
    title: "Atardecer contigo",
    hp: "HP 140",
    file: "assets/video/video2.mp4",
    poster: "assets/img/foto10.jpeg",
    attack: "Ojitos bonitos",
    description: "Cada segundo tuyo se vuelve especial para mí, incluso en lo más sencillo.",
    weakness: "amor real",
    resistance: "complicidad",
  },
  {
    title: "Momento que abraza",
    hp: "HP 160",
    file: "assets/video/video3.mp4",
    poster: "assets/img/foto11.jpeg",
    attack: "Momento especial",
    description: "Hay recuerdos que no solo se miran, también se sienten. Este es uno de ellos.",
    weakness: "felicidad",
    resistance: "detallitos",
  },
  {
    title: "Para siempre, tú",
    hp: "HP 180",
    file: "assets/video/video4.mp4",
    poster: "assets/img/foto12.jpeg",
    attack: "Para siempre",
    description: "Un videíto más para guardar en nuestra cajita de recuerdos bonitos.",
    weakness: "juntos",
    resistance: "mi lugar",
  },
];

// ======= CONTADOR =======
function updateCountdown() {
  const now = new Date();
  const diff = now - relationshipStartDate;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ======= MODALES =======
const openTriggers = document.querySelectorAll(".open-trigger");
const allModals = document.querySelectorAll(".modal-shell");

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("show");
}

function closeModalElement(modal) {
  if (modal) modal.classList.remove("show");
}

openTriggers.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.open));
});

allModals.forEach((modal) => {
  const closeButtons = modal.querySelectorAll(".close-modal");
  closeButtons.forEach((btn) =>
    btn.addEventListener("click", () => closeModalElement(modal)),
  );

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalElement(modal);
  });
});

// ======= MOMENTOS =======
const momentsGrid = document.getElementById("momentsGrid");
const imageZoomModal = document.getElementById("imageZoomModal");
const zoomImage = document.getElementById("zoomImage");
const zoomCaption = document.getElementById("zoomCaption");

function renderMoments() {
  momentsGrid.innerHTML = "";
  momentsData.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "moment-card";
    card.style.setProperty("--rot", `${index % 2 === 0 ? "-2deg" : "2deg"}`);
    card.innerHTML = `<img src="${item.image}" alt="${item.caption}"><span>${item.caption}</span>`;

    card.addEventListener("click", () => {
      zoomImage.src = item.image;
      zoomCaption.textContent = item.caption;
      imageZoomModal.classList.add("show");
    });

    momentsGrid.appendChild(card);
  });
}
renderMoments();

// ======= 10 COSAS =======
const reasonsGrid = document.getElementById("reasonsGrid");
const heartPositions = ["top-left", "top-right", "bottom-left", "bottom-right"];

function renderReasons() {
  reasonsGrid.innerHTML = "";
  reasonsData.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "cute-card";
    card.innerHTML = `
      <div class="cute-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.closest('.cute-card').classList.add('no-img')">
        <span class="cute-badge">${index + 1}</span>
      </div>
      <div class="cute-body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    reasonsGrid.appendChild(card);
  });
}
renderReasons();

// ======= VIDEOS =======
const videoCardsGrid = document.getElementById("videoCardsGrid");

function renderVideoCards() {
  videoCardsGrid.innerHTML = "";

  videoCardsData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "poke-card";

    card.innerHTML = `
      <!-- CONTENIDO -->
      <div class="poke-content">
        <div class="poke-title">${item.title}</div>

        <div class="poke-video">
          <video controls preload="metadata" poster="${item.poster}">
            <source src="${item.file}" type="video/mp4" />
          </video>
        </div>

        <div class="poke-ability-name">${item.attack}</div>
        <div class="poke-ability-desc">${item.description}</div>

        <div class="poke-weak">${item.weakness}</div>
        <div class="poke-res">${item.resistance}</div>
      </div>

      <!-- FRAME encima (LA CARTA) -->
      <img class="poke-frame" src="assets/img/pokemon.png" alt="carta">
    `;

    videoCardsGrid.appendChild(card);
  });
}

renderVideoCards();

// ======= MÚSICA =======
const musicButton = document.getElementById("musicButton");
const loveSong = document.getElementById("loveSong");
let isPlaying = false;

async function tryPlayMusic() {
  try {
    loveSong.volume = 0.45;
    await loveSong.play();
    isPlaying = true;
    musicButton.textContent = "❚❚";
  } catch (e) {
    isPlaying = false;
    musicButton.textContent = "♫";
  }
}

window.addEventListener("load", () => tryPlayMusic());
document.addEventListener(
  "click",
  () => {
    if (!isPlaying) tryPlayMusic();
  },
  { once: true },
);

musicButton.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      loveSong.volume = 0.45;
      await loveSong.play();
      musicButton.textContent = "❚❚";
      isPlaying = true;
    } else {
      loveSong.pause();
      musicButton.textContent = "♫";
      isPlaying = false;
    }
  } catch (e) {
    musicButton.textContent = "♫";
  }
});
