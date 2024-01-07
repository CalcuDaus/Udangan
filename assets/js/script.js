document.querySelector(".buka-undangan").addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("cover-active");
  var audio = document.getElementById('myAudio');
  audio.play();
});
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Teks Berhasil Disalin !');
    })
    .catch(err => {
      console.error('Unable to copy to clipboard', err);
    });
}
document.querySelector('#salin').addEventListener('click',function(){
  let value = document.querySelector('.teks-copy').innerText;
  this.innerText = 'copied';
  copyToClipboard(value);
})