export default class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.volume = 0.025;
    this.on = true;
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }

  raiseVolume() {
    this.sound.volume = 0.1;
  }

  mute() {
    this.sound.volume = 0;
  }
}