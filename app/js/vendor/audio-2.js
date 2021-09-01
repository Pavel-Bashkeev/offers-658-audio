window.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector('#audio-thir');
  const timeBlock = document.querySelector('.time-thir');
  const minutes = timeBlock.querySelector('.time-minutes');
  const seconds = timeBlock.querySelector('.time-seconds');
  const btnPlay = document.querySelector('.play-thir');
  const btnPause = document.querySelector('.pause-thir');
  let playInt;
  let time;

  btnPlay.addEventListener('click', () => {
    audio.play();
    toggleBtn()
    playInt = setInterval(countTime, 1000);


  });
  btnPause.addEventListener('click', () => {
    audio.pause();
    toggleBtn()
    clearInterval(playInt);
  });

  function countTime() {
    getTime()
    time--;
  }
  audio.onloadedmetadata = getTime;
  function toggleBtn() {
    btnPause.classList.toggle('hide');
    btnPlay.classList.toggle('hide');
  }
  function getTime(){
    time = Math.round(audio.duration) - Math.round(audio.currentTime);
    let timeSeconds = Math.floor(time % 60);
    let timeMinuts = Math.floor(time / 60);
    seconds.textContent = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;
    minutes.textContent = timeMinuts < 10 ? '0' + timeMinuts : timeMinuts;
  }
});