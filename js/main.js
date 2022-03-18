const ImgBg = document.querySelector('#ImgBg'),
  title = document.querySelector('#title'),
  Img = document.querySelector('#img'),
  nameSong = document.querySelector('#nameSong'),
  brogress = document.querySelector('#brogress'),
  brogressBar = document.querySelector('#brogressBar'),
  btnPrev = document.querySelector('#btnPrev'),
  btnPlay = document.querySelector('#btnPlay'),
  btnNext = document.querySelector('#btnNext'),
  imgPlayer = document.querySelector('#img__player'),
  audio = document.querySelector('#audio'),
  timeCurrent = document.querySelector('#timeCurrent'),
  timeDuraction = document.querySelector('#timeDuraction');



const songs = [

  {
    bg: './img/cover1.jpg',
    img: './img/cover1.jpg',
    title: 'Throttle',
    nameSong: 'old town road',
    audio: './audio/lil_nas_x-old_town_road.mp3'

  },

  {
    bg: './img/cover2.jpg',
    img: './img/cover2.jpg',
    title: 'Watermelon Sugar',
    nameSong: 'sam hunt-break up in a small town',
    audio: './audio/sam_hunt-break_up_in_a_small_town.mp3'

  },

  {
    bg: './img/cover3.jpg',
    img:'./img/cover3.jpg',
    title: 'Throttle',
    nameSong: 'throttle hit the road jack',
    audio: './audio/throttle-hit_the_road_jack.mp3'

  },

  {
    bg: 'https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg',
    img: 'https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg',
    title: 'Throttle',
    nameSong: 'Harry Styles',
    audio: 'https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3'

  },
  {
    bg: 'https://i.ibb.co/dkDC9CP/Justin-Bieber-Song-Cover-Art.jpg',
    img: "https://i.ibb.co/dkDC9CP/Justin-Bieber-Song-Cover-Art.jpg",
    title: 'Yummy',
    nameSong: 'Justin Bieber',
    audio: "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3"

  },
  {
    bg: 'https://i.ibb.co/371t9Md/Loud-Luxury-Song-Cover-Art.jpg',
    img: "https://i.ibb.co/371t9Md/Loud-Luxury-Song-Cover-Art.jpg",
    title: 'Body',
    nameSong: 'Loud Luxury ft. Brando',
    audio: "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
  },
  {
    bg: 'https://hosseinghanbari.ir/other/music-player/autumn.jpg',
    img: 'https://hosseinghanbari.ir/other/music-player/autumn.jpg',
    title: 'Autumn',
    nameSong: 'Instrumental Music',
    audio: "https://hosseinghanbari.ir/other/music-player/autumn.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/1.jpg",
    img: "http://physical-authority.surge.sh/imgs/1.jpg",
    title: 'lastlings',
    nameSong: 'no time',
    audio: "http://physical-authority.surge.sh/music/1.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/2.jpg",
    img: "http://physical-authority.surge.sh/imgs/2.jpg",
    title: 'the weeknd',
    nameSong: 'blinding lights',
    audio: "http://physical-authority.surge.sh/music/2.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/3.jpg",
    img: "http://physical-authority.surge.sh/imgs/3.jpg",
    title: 'enrasta',
    nameSong: 'джованна',
    audio: "http://physical-authority.surge.sh/music/3.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/4.jpg",
    img: "http://physical-authority.surge.sh/imgs/4.jpg",
    title: 'travis scott',
    nameSong: 'a man',
    audio: "http://physical-authority.surge.sh/music/4.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/5.jpg",
    img: "http://physical-authority.surge.sh/imgs/5.jpg",
    title: 'zaxx',
    nameSong: 'unforgetting',
    audio: "http://physical-authority.surge.sh/music/5.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/6.jpg",
    img: "http://physical-authority.surge.sh/imgs/6.jpg",
    title: 'Randall',
    nameSong: 'waharan',
    audio: "http://physical-authority.surge.sh/music/6.mp3"
  },

  {
    bg: "http://physical-authority.surge.sh/imgs/7.jpg",
    img: "http://physical-authority.surge.sh/imgs/7.jpg",
    title: 'jai wolf',
    nameSong: 'starlight feat mr gabriel',
    audio: "http://physical-authority.surge.sh/music/7.mp3"
  },



];

let songIndex = 0;

let isPlay = false;



const loadSong = (song) => {
  // ImgBg.style.background = song.bg;
  ImgBg.style.background = `url(${song.bg})`;
  title.innerHTML = song.title
  Img.src = song.img;
  nameSong.innerHTML = song.nameSong;
  audio.src = song.audio;


}

loadSong(songs[songIndex]);


/* PlaySong */

const playSong = () => {
  isPlay = true;
  audio.play();
  Img.classList.add('active');
  imgPlayer.src = './img/pouse.svg';

}


/* pouseSong */
const pauseSong = () => {
  isPlay = false;
  audio.pause();
  Img.classList.remove('active');
  imgPlayer.src = './img/play.svg';

}

btnPlay.addEventListener('click', () => {
  if (!isPlay) {
    playSong();

  } else {

    pauseSong();
  }
});

// nextPlay 


const nextPlay = () => {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}



btnNext.addEventListener('click', nextPlay);





// prevPlay 

const prevPlay = () => {

  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong()
}

btnPrev.addEventListener('click', prevPlay);




/* ProgressBar */


function progressBar() {

  const duration = audio.duration;
  const currentTime = audio.currentTime;

  // const {duration , currentTime} = event.srcElement;
  const progressBarWidth = (currentTime / duration) * 100;
  brogressBar.style.width = `${progressBarWidth}%`;

}


/*TimeCurrent */

function TimeCurrent() {
  const currentTime = audio.currentTime;

  var cs = parseInt(audio.currentTime % 60);
  var cm = parseInt((audio.currentTime / 60) % 60);


  timeCurrent.innerHTML = cm + ':' + cs;
}

/* timeDuraction */


function TimeDuraction() {
  const duration = audio.duration;

  var ds = parseInt(audio.duration % 60)
  var dm = parseInt((audio.duration / 60) % 60)
  timeDuraction.innerHTML = dm + ':' + ds
}



audio.addEventListener('timeupdate', function () {
  progressBar();
  TimeCurrent();
  TimeDuraction();
});

/* Progress */

function setProgress(e) {
  const widthX = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / widthX) * duration;

}


brogress.addEventListener('click', setProgress)


/* ended*/


audio.addEventListener('ended', nextPlay)