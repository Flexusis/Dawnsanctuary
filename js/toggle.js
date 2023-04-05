const toggleBtn = document.querySelector(".navbar_toggle");
const list = document.querySelectorAll(
  ".navbar_toggle, .menu, .menu1, .menu2, .menu__logo, .menu-li1, .menu-li2, .menu-li3, .menu-li4, .sound, .sns, .bgi, #dawn, #lawn, .depth1_btn, .side-menu, .title, .about-content, .side-img-introduce, .introduce-title"
);
const depth1_btn = document.querySelector(".depth1_btn");
const depth1_375 = document.querySelector(".depth1_375");

//functions for toggleBtn/////
const activer = () => {
  for (let i = 0; i < list.length; i++) {
    let item = list.item(i);
    item.classList.toggle("active");
  }
};

const remover = () => {
  if (depth1_375.classList.contains("active")) {
    depth1_375.classList.remove("active");
  }
};

const toggler = () => {
  depth1_375.classList.toggle("active");
};

function eventer(el, fn1, fn2) {
  el.addEventListener("click", () => {
    fn1();
    fn2();
  });
}

let nothing = function () {
  return undefined;
};
//////////////////////////////
eventer(toggleBtn, activer, remover);
eventer(depth1_btn, toggler, nothing);
