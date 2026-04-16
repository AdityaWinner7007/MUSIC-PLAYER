console.log(`working`);
const playBtn = document.getElementById(`play`);
const songPlay = document.getElementById(`audio`);
const songName = document.querySelector(`.SongName`);
const songArtist = document.querySelector(`.artistName`);
const nextButton = document.querySelector(`.nextsong`);
const prevButton = document.querySelector(`.prevsong`);
const songPoster = document.querySelector(`.songImage`);
const songNavigation = document.querySelectorAll(".songList li");
const progressBar = document.getElementById(`progressBar`);

const songList = [
  {
    songName: `Lutt le gaya`,
    songArtist: `Simran Choudhary`,
    songSrc: `songs/lutt le gaya.mp3`,
    imageSrc: `images/lutt le gaya.jpg`,
  },
  {
    songName: `Andaz e karam`,
    songArtist: `Madhur Sharma`,
    songSrc: `songs/andaz e karam.mp3`,
    imageSrc: `images/andaz-e-karam.jpg`,
  },
  {
    songName: `I really do`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/i really do .mp3`,
    imageSrc: `images/i really do.jpg`,
  },
  
  {
     songName: `For a reason`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/For A Reason- Karan Aujla.mp3`,
    imageSrc: `images/for a reason.jpg`,
    
  },{

songName: `COURTSIDE`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/COURTSIDE - KARAN AUJLA.mp3`,
    imageSrc: `images/courtside.jpg`,
  }
  ,{

songName: `BOYFRIEND`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/boyfriend.mp3`,
    imageSrc: `images/boyfriend.jpeg`,
  },  
  {
songName: `Softly`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/Softly- Karan Aujla.mp3`,
    imageSrc: `images/softly.jpg`,
  },
  {
songName: `Winning Speech`,
    songArtist: `Karan Aujla`,
    songSrc: `songs/Winning Speech - Karan Aujla.mp3`,
    imageSrc: `images/winning speech.jpg`,
  },
  {
songName: `Balenci`,
    songArtist: `Shubh`,
    songSrc: `songs/Balenci-Shubh.mp3`,
    imageSrc: `images/balenci.jpg`,
  },
  {
songName: `HUM PYAR KARNE WALE HAI `,
    songArtist: `Shashwast Sachdev`,
    songSrc: `songs/HUM PYAAR KARNE WALE - DHURANDHAR.mp3`,
    imageSrc: `images/hum pyar karne wale.jpg`,
  },
  {
songName: `Ramba ho `,
    songArtist: `Shashwast Sachdev`,
    songSrc: `songs/Ramba Ho Dhurandhar.mp3`,
    imageSrc: `images/ramba ho.jpg`,
  },
  {
songName: `Dhurandhar Title Track `,
    songArtist: `Jasmine Sandlas`,
    songSrc: `songs/Dhurandhar-TitleTrack.mp3`,
    imageSrc: `images/dhurandhar.jpg`,
  },
  {
  songName: `GEHRA HUA `,
    songArtist: `Sir Arijit Singh`,
    songSrc: `songs/gehra-hua.mp3`,
    imageSrc: `images/gehra final.jpg`,
  },



];

updateSongList();

function updateSongList() {
  songList.forEach((item, index) => {
    songNavigation[index].innerHTML = item.songName;
    songNavigation[index].addEventListener('click', ()=>{
      songIndex=index;
        playBtn.innerHTML = `<img src="pause.svg" alt="" />`;
      loadSong();
      songPlay.play();
    })
  });
}

let songIndex = 0;
function loadSong() {
  let currentSong = songList[songIndex];
  songPlay.src = currentSong.songSrc;
  songName.innerHTML = currentSong.songName;
  songArtist.innerHTML = currentSong.songArtist;
  songPoster.src = currentSong.imageSrc;
}
function playSong() {
  if (songPlay.paused) {
    playBtn.innerHTML = `<img src="pause.svg" alt="" />`;
    songPlay.play();
  } else {
    songPlay.pause();
    playBtn.innerHTML = `<img src="play.svg" alt="" />`;
  }
}

function next() {
  songIndex++;
  if (songIndex >= songList.length) {
    songIndex = 0;
  }
  playBtn.innerHTML = `<img src="pause.svg" alt="" />`;
  loadSong();
  songPlay.play();
}
function prev() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songList.length - 1;
  }
  playBtn.innerHTML = `<img src="pause.svg" alt="" />`;
  loadSong();
  songPlay.play();
}

playBtn.addEventListener("click", playSong);
loadSong();
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

songPlay.addEventListener("timeupdate", () => {
  progressBar.value = parseInt((songPlay.currentTime / songPlay.duration) * 100);
});

progressBar.addEventListener('change', ()=>{
 songPlay.currentTime =  (progressBar.value * songPlay.duration) / 100
})