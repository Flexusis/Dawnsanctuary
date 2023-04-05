let dawn = document.getElementById("#dawn");
let lawn = document.getElementById("#lawn");

anime({
  targets: "#dawn",
  keyframes: [{ translateX: -500, translateY: 100, duration: 40000 }],
  easing: "easeInOutSine",
  loop: true,
});

anime({
  targets: "#lawn",
  keyframes: [{ translateX: 500, translateY: -100, duration: 40000 }],
  easing: "easeInOutSine",
  loop: true,
});
