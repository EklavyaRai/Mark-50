// Cartoon Data Store
const cartoons = [
  {
    id: "c1",
    title: "Doremon",
    category: "action",
    badge: "#1 in Cartoons Today",
    shortInfo: "Doraemon is a beloved Japanese iconic series created by Fujiko F. Fujio. The story revolves around an earless robotic cat named Doraemon, sent back in time from the 22nd century by Sewashi Nobi to help his lazy, clumsy, and academically struggling great-grandfather, Nobita Nobi.",
    longInfo: "Full Details: Created by manga writing duo Fujiko F. Fujio in 1969, Doraemon is one of Japan's most iconic and longest-running anime franchises, blending slice-of-life comedy with science fiction and moral lessons about growth, friendship, and responsibility. The story begins in the 22nd century, where Sewashi Nobi, the great-great-grandson of Nobita Nobi, lives in extreme poverty due to the massive financial debts Nobita accumulated through bad luck, laziness, and poor decisions throughout his lifetime. To fix his family's lineage and secure a better future, Sewashi sends Doraemon—a blue, earless robotic cat equipped with a four-dimensional pocket full of futuristic gadgets—back in time to 20th-century Tokyo to guide, protect, and mentor the young Nobita into becoming a responsible adult. The standard narrative follows a consistent cautionary arc: Nobita faces an everyday problem such as getting bullied by his physically aggressive classmate Gian, being outshone by the wealthy and boastful Suneo, failing a school exam, or trying to impress his gentle crush Shizuka. Desperate for a quick fix, Nobita begs Doraemon for a tool—such as the Anywhere Door, Bamboo Copter, or Time Machine—only to inevitably misuse the invention out of greed, petty revenge, or sheer laziness despite Doraemon's warnings. This misuse escalates into chaotic consequences that teach Nobita ironic lessons about hard work and personal responsibility. Beyond the daily episodic comedy, feature-length movies elevate the cast into grand adventures across space, lost civilizations, and prehistoric eras, bringing out Nobita's hidden bravery, loyalty, and deep empathy. Ultimately, Doraemon endures because its sci-fi elements highlight a timeless human truth: shortcuts and magical gadgets cannot replace self-improvement, resilience, and genuine compassion.",
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
  },
  {
    id: "c4",
    title: "Ninja Hattori",
    category: "action",
    badge: "#4 in Action Cartoons",
    shortInfo: "A young ninja named Kanzo Hattori moves to the city to live with Kenichi Mitsuba and protect him from troubles.",
    longInfo: "Full Details: Ninja Hattori follows Kanzo Hattori, an Iga Ninja who moves to town to attend normal school with Kenichi Mitsuba, an average boy. Joined by his ninja dog Shishimaru and brother Shinzo, Hattori uses ninja skills and gadgets to resolve Kenichi's everyday problems and battle rivalry from Kemumaki, the Koga Ninja.",
    bgImage: "https://i.pinimg.com/736x/d5/6a/e3/d56ae300c79ed1a355529ce5c540782a.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c5",
    title: "Ben 10 (Original & Alien Force)",
    category: "action",
    badge: "#1 in Action Cartoons",
    shortInfo: "Ben Tennyson discovers the Omnitrix, a device allowing him to transform into powerful alien heroes.",
    longInfo: "Full Details: Ben Tennyson, his cousin Gwen, and Grandpa Max embark on a cross-country trip when Ben stumbles upon the Omnitrix, a device containing DNA from multiple alien species. As Ben grows into Alien Force, he tackles extraterrestrial threats with new alien forms alongside Gwen and Kevin Levin to protect Earth from galactic villainy.",
    bgImage: "https://i.pinimg.com/1200x/38/c4/90/38c4907765c86a29a0c7813f8e4cd646.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c6",
    title: "Pokémon",
    category: "action",
    badge: "#2 in Action Cartoons",
    shortInfo: "Ash Ketchum and Pikachu journey across various regions to become the ultimate Pokémon Master.",
    longInfo: "Full Details: Follow ten-year-old Ash Ketchum from Pallet Town and his partner Pikachu as they travel across different regions, challenge gym leaders, enter Pokemon Leagues, make lifelong friends, and foil the scheming Team Rocket on their path toward Pokemon mastery.",
    bgImage: "https://i.pinimg.com/736x/35/04/44/350444c2abb255ffaf7e254d463124fa.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c7",
    title: "SpongeBob SquarePants",
    category: "comedy",
    badge: "#1 in Comedy Cartoons",
    shortInfo: "The wacky, aquatic adventures of an optimistic sea sponge living in Bikini Bottom.",
    longInfo: "Full Details: Deep under the sea in the underwater city of Bikini Bottom lives SpongeBob SquarePants, a energetic yellow sea sponge who works as a fry cook at the Krusty Krab. Alongside his best friend Patrick Star, neighbor Squidward, and pet snail Gary, SpongeBob turns simple daily tasks into chaotic nautical misadventures.",
    bgImage: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c8",
    title: "Phineas and Ferb",
    category: "comedy",
    badge: "#2 in Comedy Cartoons",
    shortInfo: "Two stepbrothers invent grand schemes during summer vacation while their pet platypus works as a secret agent.",
    longInfo: "Full Details: Phineas and Ferb are determined to make every day of summer count by constructing wild inventions like rollercoasters, time machines, and backyard beaches. Meanwhile, their sister Candace tries to bust them to their mom, and their pet platypus Perry leads a double life as Agent P fighting evil Dr. Doofenshmirtz.",
    bgImage: "https://i.pinimg.com/1200x/31/8f/09/318f09c1431bf7ad9a758c0442a4f24c.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c9",
    title: "Oggy and the Cockroaches",
    category: "comedy",
    badge: "#4 in Comedy Cartoons",
    shortInfo: "Oggy the cat tries to enjoy a peaceful life, but three mischievous cockroaches constantly ruin his day.",
    longInfo: "Full Details: Oggy is a lazy blue cat who prefers spending his days watching television and cooking. However, his quiet domestic routine is constantly disrupted by Joey, Dee Dee, and Marky—three mischievous cockroaches who live in his house and take delight in causing slapstick mayhem.",
    bgImage: "https://i.pinimg.com/736x/dd/a7/67/dda7670d98e43c93d466bf234750542b.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "c10",
    title: "Dragon Ball Z",
    category: "action",
    badge: "#3 in Action Cartoons",
    shortInfo: "Goku and the Z-Fighters defend Earth against powerful extraterrestrial warriors and villains.",
    longInfo: "Full Details: Continuing the adventures of Son Goku, Dragon Ball Z explores his Saiyan heritage and follows the Z-Fighters as they defend the Earth against powerful galactic conquerors, Androids, and magical beings like Vegeta, Frieza, Cell, and Majin Buu through high-powered martial arts combat.",
    bgImage: "https://i.pinimg.com/736x/74/79/8b/74798b82e4e8b085eefd60c375f039e0.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

let selectedCartoon = cartoons[0];

// Safely update Hero Interface
function updateHero(cartoon) {
  selectedCartoon = cartoon;

  const titleElem = document.getElementById("hero-title");
  const badgeElem = document.getElementById("hero-badge");
  const descElem = document.getElementById("hero-desc");
  const bannerElem = document.getElementById("hero-banner");

  if (titleElem) titleElem.innerText = cartoon.title;
  if (badgeElem) badgeElem.innerText = cartoon.badge;
  if (descElem) descElem.innerText = cartoon.shortInfo;
  if (bannerElem) bannerElem.style.backgroundImage = `url('${cartoon.bgImage}')`;
}

// Render Thumbnails based on selected category tab
function renderCards(categoryFilter = 'all') {
  const container = document.getElementById("cards-container");
  if (!container) return;

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
  
  const headingElem = document.getElementById("section-heading");
  if (headingElem) headingElem.innerText = `${cat.toUpperCase()} Cartoons`;
  
  renderCards(cat);
}

// Initial Setup & Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  updateHero(cartoons[0]);
  renderCards('all');

  const playBtn = document.getElementById("play-btn");
  const infoBtn = document.getElementById("info-btn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      window.location.href = selectedCartoon.videoUrl;
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      localStorage.setItem("selectedCartoon", JSON.stringify(selectedCartoon));
      window.location.href = 'info.html';
    });
  }
});