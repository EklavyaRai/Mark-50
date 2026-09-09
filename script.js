// Data for Trending Songs from Spotify Screenshot
const trendingSongs = [
  {
    title: 'Vaaroon Forever - From "Mirzapur The Movie"',
    artist: "Anand Bhaskar, Romy, Shreya Ghoshal, Ginny...",
    cover: "https://picsum.photos/id/1015/300/300"
  },
  {
    title: "Parvati",
    artist: "Sadhu Tiwari",
    cover: "https://picsum.photos/id/1025/300/300"
  },
  {
    title: 'Do Numbari - From "Mirzapur The Movie"',
    artist: "Dhanda Nyoliwala",
    cover: "https://picsum.photos/id/1035/300/300"
  },
  {
    title: "Sammi Meri Waar",
    artist: "Luminexa",
    cover: "https://picsum.photos/id/1045/300/300"
  },
  {
    title: 'Radhimaa - From "Think Indie"',
    artist: "Sai Abhyankkar, Nargis Teji, Asma Teji, Vivek",
    cover: "https://picsum.photos/id/1055/300/300"
  },
  {
    title: "IYKYK",
    artist: "Jxggi, Disha...",
    cover: "https://picsum.photos/id/1065/300/300"
  }
];

// Data for Popular Artists
const popularArtists = [
  {
    name: "Pritam",
    role: "Artist",
    cover: "https://picsum.photos/id/1005/300/300"
  },
  {
    name: "A.R. Rahman",
    role: "Artist",
    cover: "https://picsum.photos/id/1012/300/300"
  },
  {
    name: "Arijit Singh",
    role: "Artist",
    cover: "https://picsum.photos/id/1027/300/300"
  },
  {
    name: "Sachin-Jigar",
    role: "Artist",
    cover: "https://picsum.photos/id/1062/300/300"
  },
  {
    name: "Vishal-Shekhar",
    role: "Artist",
    cover: "https://picsum.photos/id/1074/300/300"
  },
  {
    name: "Atif Aslam",
    role: "Artist",
    cover: "https://picsum.photos/id/1084/300/300"
  }
];

// Render Trending Songs
function renderTrending() {
  const grid = document.getElementById("trending-grid");
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
    grid.appendChild(card);
  });
}

// Render Popular Artists
function renderArtists() {
  const grid = document.getElementById("artist-grid");
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

// Initialize Page
renderTrending();
renderArtists();