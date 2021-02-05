$(".key").click(function() {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  console.log(audio);
  audio.play();
});

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
}

