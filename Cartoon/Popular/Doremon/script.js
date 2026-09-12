// Cartoon Data Store
const cartoons = [
  {
    id: "c1",
    title: "Spider-Man Animated",
    category: "action",
    badge: "#1 in Cartoons Today",
    shortInfo: "A teenage hero balances high school life while fighting supervillains in the city.",
    longInfo: "Full Details: Follow the superhero adventures of Peter Parker as he protects New York City from terrifying villains while battling everyday high school obstacles and personal life struggles.",
    bgImage: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/uVu-D2rC-Lg?playlist=uVu-D2rC-Lg&autoplay=1&iv_load_policy=3&loop=1&start="
  },
  {
    id: "c2",
    title: "Cosmic Quest",
    category: "sci-fi",
    badge: "#2 in Sci-Fi Cartoons",
    shortInfo: "Traverse distant galaxies with space explorers uncovering ancient galactic secrets.",
    longInfo: "Full Details: An epic outer-space cartoon saga detailing galactic exploration, starship combat, alien civilizations, and deep space discovery.",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c3",
    title: "Laugh Factory",
    category: "comedy",
    badge: "#3 in Comedy Today",
    shortInfo: "Hilarious daily misadventures of eccentric friends living together in a crazy town.",
    longInfo: "Full Details: Loaded with slapstick humor and witty banter, this animated series highlights wild daily situations that result in chaotic outcomes.",
    bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
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