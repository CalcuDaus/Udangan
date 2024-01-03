document.querySelector(".buka-undangan").addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("cover-active");
  var audio = document.getElementById('myAudio');
  audio.play();
});