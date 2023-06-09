// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
// const hamburger2 = document.querySelector("#hamburger-2");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");

  navMenu.classList.toggle("hidden");
});

const dinamisTeks = document.querySelector(".dinamis-text");

const words = [
  "Gak Punya Privilage",
  "Baru Lulus Kuliah",
  "Beda Jurusan",
  "Pindah Jalur Karir",
  "Bugde Pas-Pasan",
  "Susah Cari Kerja",
];

animText = function () {
  // i = 0;

  // setInterval(() => {
  //   dinamisTeks.innerHTML = words[(i = (i + 1) % words.length)];
  // }, 3000);

  // coba
  // words.forEach((word) => {
  //   console.info(word);
  //   setInterval(() => {
  //     dinamisTeks.innerHTML = word;
  //   }, 3000);
  // });

  // coba 2
  // for (const i of words) {
  //   const word = i;
  //   console.log(word);
  //   dinamisTeks.innerHTML = word;
  // }

  // if (i < words.length) {
  //   words2.forEach((word) => {
  //     console.log(word[i]);
  //   });
  //   i++;
  // } else {
  //   console.log(`selesai`);
  // }

  let i = 0;
  setInterval(() => {
    dinamisTeks.innerHTML = words[i];
    console.info(words[i++]);

    if (i === words.length) {
      i = 0;
      // console.log(i);
    }
  }, 3000);
  // };
};

animText();

// animText();
// hamburger2.addEventListener("click", function () {
//   hamburger2.classList.toggle("hamburger-active");
// });
