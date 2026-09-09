// Sample Music Data
const songs = [
  {
    id: 1,
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    cover: "https://picsum.photos/id/1018/300/300"
  },
  {
    id: 2,
    title: "Creative Minds",
    artist: "Bensound Royalty Free",
    src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    cover: "https://picsum.photos/id/1025/300/300"
  },
  {
    id: 3,
    title: "Ukulele Beats",
    artist: "Acoustic Pop",
    src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
    cover: "https://picsum.photos/id/1039/300/300"
  },
  {
    id: 4,
    title: "Sunny Days",
    artist: "Jazzy Vibes",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    cover: "https://picsum.photos/id/1043/300/300"
  }
];

// DOM Elements
const musicGrid = document.getElementById("music-grid");
const audio = document.getElementById("audio-element");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");
const volumeBar = document.getElementById("volume-bar");
const playerImg = document.getElementById("player-img");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const searchInput = document.getElementById("search-input");
const likeBtn = document.getElementById("like-btn");

let currentSongIndex = 0;
let isPlaying = false;

// Render Songs in Spotify Card Format
function renderSongs(songList) {
  musicGrid.innerHTML = "";
  songList.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("spotify-card");
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${song.cover}" alt="${song.title}">
        <button class="play-hover-btn" onclick="playSelectedSong(${index})">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="card-title">${song.title}</div>
      <div class="card-artist">${song.artist}</div>
    `;
    musicGrid.appendChild(card);
  });
}

// Load Song Details
function loadSong(song) {
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerImg.src = song.cover;
  audio.src = song.src;
}

// Play Selected Track
function playSelectedSong(index) {
  currentSongIndex = index;
  loadSong(songs[currentSongIndex]);
  playAudio();
}

// Play/Pause Functions
function playAudio() {
  isPlaying = true;
  audio.play();
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function pauseAudio() {
  isPlaying = false;
  audio.pause();
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    if (!audio.src) loadSong(songs[currentSongIndex]);
    playAudio();
  }
});

// Navigation Controls
prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playAudio();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  playAudio();
});

// Update Progress Bar
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  if (isNaN(duration)) return;

  const progressPercent = (currentTime / duration) * 100;
  progressBar.value = progressPercent;

  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60);
  const durationMin = Math.floor(duration / 60);
  const durationSec = Math.floor(duration % 60);

  currentTimeEl.textContent = `${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`;
  durationTimeEl.textContent = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
});

// Seek Track Location
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Volume Adjustment
volumeBar.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
});

// Search Filter
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = songs.filter(song => 
    song.title.toLowerCase().includes(query) || 
    song.artist.toLowerCase().includes(query)
  );
  renderSongs(filtered);
});

// Like Button Toggle
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
  const icon = likeBtn.querySelector("i");
  if (likeBtn.classList.contains("liked")) {
    icon.className = "fa-solid fa-heart";
  } else {
    icon.className = "fa-regular fa-heart";
  }
});

// Initialization
renderSongs(songs);
loadSong(songs[0]);