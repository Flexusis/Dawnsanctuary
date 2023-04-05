const playlist = ["audio/whisper.mp3", "audio/home.mp3"];
const soundOff = document.querySelector("#soundOff");
let i = 0;
const myAudio = new Audio(playlist[i]);
let a = 0;

function speakerChanger() {
  if (a == 0) {
    //console.log(myAudio.currentSrc);
    myAudio.load();
    let promise = myAudio.play();
    if (promise !== undefined) {
      promise
        .then((value) => {
          console.log("success", value);
          myAudio.load();
          myAudio.play();
        })
        .catch((error) => {
          console.log("error");
        });

      myAudio.addEventListener("ended", soundChanger);
      a++;
    }
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
soundOff.addEventListener("click", () => {
  context.resume.then(() => {
    console.log("Playback resumed successfully");
  });
});
window.onload = () => {
  let context = new AudioContext();
};

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
