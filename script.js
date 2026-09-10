// Data for Trending Songs
const trendingSongs = [
  {
    id: 1,
    title: 'Vaaroon Forever - From "Mirzapur The Movie"',
    artist: "Anand Bhaskar, Romy, Shreya Ghoshal",
    cover: "https://picsum.photos/id/1015/300/300"
  },
  {
    id: 2,
    title: "Parvati",
    artist: "Sadhu Tiwari",
    cover: "https://picsum.photos/id/1025/300/300"
  },
  {
    id: 3,
    title: 'Do Numbari - From "Mirzapur The Movie"',
    artist: "Dhanda Nyoliwala",
    cover: "https://picsum.photos/id/1035/300/300"
  },
  {
    id: 4,
    title: "Sammi Meri Waar",
    artist: "Luminexa",
    cover: "https://picsum.photos/id/1045/300/300"
  },
  {
    id: 5,
    title: 'Radhimaa - From "Think Indie"',
    artist: "Sai Abhyankkar, Nargis Teji",
    cover: "https://picsum.photos/id/1055/300/300"
  },
  {
    id: 6,
    title: "IYKYK",
    artist: "Jxggi, Disha...",
    cover: "https://picsum.photos/id/1065/300/300"
  }
];

// Data for Popular Artists
const popularArtists = [
  { name: "Pritam", role: "Artist", cover: "https://picsum.photos/id/1005/300/300" },
  { name: "A.R. Rahman", role: "Artist", cover: "https://picsum.photos/id/1012/300/300" },
  { name: "Arijit Singh", role: "Artist", cover: "https://picsum.photos/id/1027/300/300" },
  { name: "Sachin-Jigar", role: "Artist", cover: "https://picsum.photos/id/1062/300/300" },
  { name: "Vishal-Shekhar", role: "Artist", cover: "https://picsum.photos/id/1074/300/300" },
  { name: "Atif Aslam", role: "Artist", cover: "https://picsum.photos/id/1084/300/300" }
];

let isPlaying = false;

// Render Trending Songs
function renderTrending() {
  const grid = document.getElementById("trending-grid");
  if (!grid) return;
  grid.innerHTML = "";
  trendingSongs.forEach(song => {
    const card = document.createElement("div");
    card.className = "spotify-card";
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${song.cover}" alt="${song.title}">
      </div>
      <div class="card-title">${song.title}</div>
      <div class="card-subtitle">${song.artist}</div>
    `;
    card.addEventListener("click", () => playTrack(song));
    grid.appendChild(card);
  });
}

// Render Popular Artists
function renderArtists() {
  const grid = document.getElementById("artist-grid");
  if (!grid) return;
  grid.innerHTML = "";
  popularArtists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "spotify-card";
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${artist.cover}" alt="${artist.name}">
      </div>
      <div class="card-title">${artist.name}</div>
      <div class="card-subtitle">${artist.role}</div>
    `;
    grid.appendChild(card);
  });
}

// Track Switching Logic
function playTrack(song) {
  document.getElementById("player-img").src = song.cover;
  document.getElementById("player-title").textContent = song.title;
  document.getElementById("player-artist").textContent = song.artist;
  
  isPlaying = true;
  updatePlayButton();
}

// Play/Pause Toggle
function togglePlay() {
  isPlaying = !isPlaying;
  updatePlayButton();
}

function updatePlayButton() {
  const icon = document.getElementById("play-icon");
  if (isPlaying) {
    icon.className = "fa-solid fa-pause";
  } else {
    icon.className = "fa-solid fa-play";
  }
}

// JSZip Download functionality
document.getElementById("download-zip-btn")?.addEventListener("click", async () => {
  if (typeof JSZip === "undefined") {
    alert("JSZip library is not loaded properly.");
    return;
  }
  
  const zip = new JSZip();

  // Fetch current page source dynamic elements
  const htmlContent = document.documentElement.outerHTML;
  zip.file("index.html", htmlContent);

  try {
    const cssResponse = await fetch("styles.css");
    const cssText = await cssResponse.text();
    zip.file("styles.css", cssText);

    const jsResponse = await fetch("script.js");
    const jsText = await jsResponse.text();
    zip.file("script.js", jsText);

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "Madhur_Music_Source.zip");
  } catch (err) {
    console.error("Error creating zip file:", err);
    alert("Failed to bundle source files.");
  }
});

// Event Listeners
document.getElementById("main-play-btn")?.addEventListener("click", togglePlay);

// Initialize Page
renderTrending();
renderArtists();