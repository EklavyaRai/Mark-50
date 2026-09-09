// Sample Music Data List (Using copyright-free audio samples)
const songs = [
  {
    id: 1,
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    cover: "https://picsum.photos/id/1018/200/200",
    rating: "★★★★★"
  },
  {
    id: 2,
    title: "Creative Minds",
    artist: "Bensound Royalty Free",
    src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    cover: "https://picsum.photos/id/1025/200/200",
    rating: "★★★★☆"
  },
  {
    id: 3,
    title: "Ukulele Beats",
    artist: "Acoustic Pop",
    src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
    cover: "https://picsum.photos/id/1039/200/200",
    rating: "★★★★★"
  },
  {
    id: 4,
    title: "Sunny Days",
    artist: "Jazzy Vibes",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    cover: "https://picsum.photos/id/1043/200/200",
    rating: "★★★★☆"
  }
];

// DOM Elements Selection
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
const queueCount = document.getElementById("queue-count");
const searchInput = document.getElementById("search-input");
const likeBtn = document.getElementById("like-btn");

let currentSongIndex = 0;
let isPlaying = false;
let queue = 0;

// Render songs grid (Amazon Product Style)
function renderSongs(songList) {
  musicGrid.innerHTML = "";
  songList.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("song-card");
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="rating">${song.rating}</div>
      </div>
      <button class="card-btn" onclick="playSelectedSong(${index})">
        <i class="fa-solid fa-play"></i> Listen Now
      </button>
    `;
    musicGrid.appendChild(card);
  });
}

// Load track into the player
function loadSong(song) {
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerImg.src = song.cover;
  audio.src = song.src;
}

// Play selected song
function playSelectedSong(index) {
  currentSongIndex = index;
  loadSong(songs[currentSongIndex]);
  playAudio();
  queue++;
  queueCount.textContent = queue;
}

// Toggle Play/Pause
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

// Previous and Next Song Navigation
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
audio.addEventListener("timeupdate", (e) => {
  const { currentTime, duration } = e.srcElement;
  if (isNaN(duration)) return;
  
  const progressPercent = (currentTime / duration) * 100;
  progressBar.value = progressPercent;

  // Formatting Time
  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60);
  const durationMin = Math.floor(duration / 60);
  const durationSec = Math.floor(duration % 60);

  currentTimeEl.textContent = `${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`;
  durationTimeEl.textContent = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
});

// Seek Track
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Volume Adjustment
volumeBar.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
});

// Search functionality
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

// Initial Setup
renderSongs(songs);
loadSong(songs[0]);
