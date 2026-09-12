// Cartoon Data Store
const cartoons = [
  {
    id: "c1",
    title: "Doremon",
    category: "action",
    badge: "#1 in Cartoons Today",
    shortInfo: "Doraemon is a beloved Japanese iconic series created by Fujiko F. Fujio. The story revolves around a earless robotic cat named Doraemon, sent back in time from the 22nd century by Sewashi Nobi to help his lazy, clumsy, and academically struggling great-grandfather, Nobita Nobi.",
    longInfo: "Full Details: Created by manga writing duo Fujiko F. Fujio in 1969, Doraemon is one of Japan's most iconic and longest-running anime franchises, blending slice-of-life comedy with science fiction and moral lessons about growth, friendship, and responsibility. The story begins in the 22nd century, where Sewashi Nobi, the great-great-grandson of Nobita Nobi, lives in extreme poverty due to the massive financial debts Nobita accumulated through bad luck, laziness, and poor decisions throughout his lifetime. To fix his family's lineage and secure a better future, Sewashi sends Doraemon—a blue, earless robotic cat equipped with a four-dimensional pocket full of futuristic gadgets—back in time to 20th-century Tokyo to guide, protect, and mentor the young Nobita into becoming a responsible adult. The standard narrative follows a consistent cautionary arc: Nobita faces an everyday problem such as getting bullied by his physically aggressive classmate Gian, being outshone by the wealthy and boastful Suneo, failing a school exam, or trying to impress his gentle crush Shizuka. Desperate for a quick fix, Nobita begs Doraemon for a tool—such as the Anywhere Door, Bamboo Copter, or Time Machine—only to inevitably misuse the invention out of greed, petty revenge, or sheer laziness despite Doraemon's warnings. This misuse escalates into chaotic consequences that teach Nobita ironic lessons about hard work and personal responsibility. Beyond the daily episodic comedy, feature-length movies elevate the cast into grand adventures across space, lost civilizations, and prehistoric eras, bringing out Nobita's hidden bravery, loyalty, and deep empathy. Ultimately, Doraemon endures because its sci-fi elements highlight a timeless human truth: shortcuts and magical gadgets cannot replace self-improvement, resilience, and genuine compassion.,
    bgImage: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/uVu-D2rC-Lg?playlist=uVu-D2rC-Lg&autoplay=1&iv_load_policy=3&loop=1&start="
  },
  {
    id: "c2",
    title: "Tom and Jerry",
    category: "sci-fi",
    badge: "#2 in Sci-Fi Cartoons",
    shortInfo: "Traverse distant galaxies with space explorers uncovering ancient galactic secrets.",
    longInfo: "Full Details: An epic outer-space cartoon saga detailing galactic exploration, starship combat, alien civilizations, and deep space discovery.",
    bgImage: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c3",
    title: "Shinchan",
    category: "comedy",
    badge: "#3 in Comedy Today",
    shortInfo: "Hilarious daily misadventures of eccentric friends living together in a crazy town.",
    longInfo: "Full Details: Loaded with slapstick humor and witty banter, this animated series highlights wild daily situations that result in chaotic outcomes.",
    bgImage: "https://i.pinimg.com/736x/0a/5f/07/0a5f073bd75fece31a6e68442f505fc5.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

let selectedCartoon = cartoons[0];

// Update Hero Interface
function updateHero(cartoon) {
  selectedCartoon = cartoon;
  document.getElementById("hero-title").innerText = cartoon.title;
  document.getElementById("hero-badge").innerText = cartoon.badge;
  document.getElementById("hero-desc").innerText = cartoon.shortInfo;
  document.getElementById("hero-banner").style.backgroundImage = `url('${cartoon.bgImage}')`;
}

// Render Thumbnails based on selected category tab
function renderCards(categoryFilter = 'all') {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  const filteredCartoons = categoryFilter === 'all' 
    ? cartoons 
    : cartoons.filter(c => c.category === categoryFilter || (categoryFilter === 'popular' && c.badge.includes('#1')));

  filteredCartoons.forEach(cartoon => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${cartoon.bgImage}')`;
    
    const title = document.createElement("div");
    title.className = "card-title-overlay";
    title.innerText = cartoon.title;
    
    card.appendChild(title);
    card.addEventListener("click", () => updateHero(cartoon));
    container.appendChild(card);
  });
}

// Navigation Tab Click Handler
function filterCategory(cat, event) {
  if (event) {
    document.querySelectorAll(".nav-links a").forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
  }
  document.getElementById("section-heading").innerText = `${cat.toUpperCase()} Cartoons`;
  renderCards(cat);
}

// Button Events to open in the same tab
document.getElementById("play-btn").addEventListener("click", () => {
  window.location.href = selectedCartoon.videoUrl;
});

document.getElementById("info-btn").addEventListener("click", () => {
  localStorage.setItem("selectedCartoon", JSON.stringify(selectedCartoon));
  window.location.href = 'info.html';
});

// Initial Setup
window.addEventListener("DOMContentLoaded", () => {
  updateHero(cartoons[0]);
  renderCards('all');
});