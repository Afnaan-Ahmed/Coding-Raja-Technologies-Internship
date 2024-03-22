// Sample data for music library
const musicLibrary = [
    { name: 'Track 1', url: 'audio/1.mp3' },
    { name: 'Track 2', url: 'audio/2.mp3' },
    { name: 'Track 3', url: 'audio/3.mp3' }
  ];
  
  // Initialize variables
  let currentTrackIndex = 0;
  let isPlaying = false;
  const audioPlayer = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const progressBar = document.getElementById('progressBar');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const musicList = document.getElementById('musicList');
  const playlist = document.getElementById('playlist');
  const addTrackBtn = document.getElementById('addTrack');
  const trackNameInput = document.getElementById('trackName');
  const trackUrlInput = document.getElementById('trackUrl');
  
  // Function to load and play track
  function loadTrack(index) {
    audioPlayer.src = musicLibrary[index].url;
    audioPlayer.load();
    playTrack();
  }
  
  // Function to play track
  function playTrack() {
    audioPlayer.play();
    isPlaying = true;
    playBtn.innerText = 'Pause';
  }
  
  // Function to pause track
  function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerText = 'Play';
  }
  
  // Function to toggle play/pause
  function togglePlay() {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  }
  
  // Function to play next track
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicLibrary.length;
    loadTrack(currentTrackIndex);
  }
  
  // Function to play previous track
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicLibrary.length) % musicLibrary.length;
    loadTrack(currentTrackIndex);
  }
  
  // Function to update progress bar
  function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
  }
  
  // Event listeners for audio player
  audioPlayer.addEventListener('timeupdate', updateProgressBar);
  audioPlayer.addEventListener('ended', nextTrack);
  
  // Event listeners for buttons
  playBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);
  
  // Function to add a track to the playlist
  function addTrackToPlaylist(name, url) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span> <button class="playTrackBtn">Play</button>`;
    playlist.appendChild(li);
    
    // Event listener for play track button
    li.querySelector('.playTrackBtn').addEventListener('click', function() {
      currentTrackIndex = Array.from(playlist.children).indexOf(li);
      loadTrack(currentTrackIndex);
    });
  }
  
  // Display music library
  musicLibrary.forEach(track => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${track.name}</span>`;
    musicList.appendChild(li);
  });
  
  // Event listener for add track button
  addTrackBtn.addEventListener('click', function() {
    const name = trackNameInput.value.trim();
    const url = trackUrlInput.value.trim();
    if (name && url) {
      addTrackToPlaylist(name, url);
      trackNameInput.value = '';
      trackUrlInput.value = '';
    }
  });
  