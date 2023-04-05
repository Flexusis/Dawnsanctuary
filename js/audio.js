const playlist = ["audio/whisper.mp3", "audio/home.mp3"];
const soundOff = document.querySelector("#soundOff");
let i = 0;
let myAudio = new Audio(playlist[i]);
let a = 0;

let has_clicked;
window.addEventListener("click", () => {
  has_clicked = true;
});
window.addEventListener("touchstart", () => {
  has_clicked = true;
});

function speakerChanger() {
  if (a == 0 && !has_clicked) {
    //console.log(myAudio.currentSrc);
    myAudio = new Audio(playlist[i]);
    myAudio.load();
    myAudio.play();
    //let promise = myAudio.play();
    // if (promise !== undefined) {
    //   promise
    //     .then((_) => {})
    //     .catch((error) => {
    //       console.log("error");
    //     });
    // }

    myAudio.addEventListener("ended", soundChanger);
    a++;
  } else {
    myAudio.pause();
    a--;
  }

  if (soundOff.classList.contains("fa-volume-xmark")) {
    soundOff.classList.replace("fa-volume-xmark", "fa-volume-high");
    //console.log(soundOff.className);
  } else if (soundOff.classList.contains("fa-volume-high")) {
    soundOff.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
}
soundOff.addEventListener("click", speakerChanger);

//play file sequentially
function soundChanger() {
  if (i == 0) {
    i++;
  } else if (i == 1) {
    i--;
  }
  myAudio.pause(); // 일시 정지
  myAudio.src = playlist[i];
  myAudio.currentTime = 0; // 재생 위치를 처음으로 설정
  myAudio.play(); // 처음부터 다시 재생됨
}

//Random Jumping
let soundJump = document.getElementById("soundJump");
soundJump.addEventListener("click", jumping);

function jumping() {
  myAudio.currentTime = Math.random() * (myAudio.duration * (2 / 3));
}
