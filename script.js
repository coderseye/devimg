'use strict'
let topbtn = document.querySelector(".topbtn");
topbtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
})
window.onscroll = function () { scrollFunction() };
document.body.scrollTop = 0;

const w_height = window.innerHeight;

const about = document.querySelector(".about").getBoundingClientRect().top;

let span = document.querySelector(".skills .span1").getBoundingClientRect().bottom;
// console.log(span);
span = span - w_height;

let iframe1 = document.querySelector(".new_pro_img div").getBoundingClientRect().bottom;
iframe1 = iframe1 - w_height;
let iframe2 = document.querySelector(".new_pro2_img div").getBoundingClientRect().bottom;
iframe2 = iframe2 - w_height;


function scrollFunction() {
      if (document.documentElement.scrollTop > about) {
            topbtn.style.display = "block";
      } else {
            topbtn.style.display = "none";
      }

      if (document.documentElement.scrollTop > span + 100) {
            const even = document.querySelectorAll(".skill .skill_span ");
            for (let i = 0; i < even.length; i++) {
                  even[i].style.left = "0%";
                  even[i].style.position = "relative";
                  even[i].style.opacity = "1";
            }
      }
      else {
            const even = document.querySelectorAll(".skill .skill_span ");
            for (let i = 0; i < even.length; i++) {
                  if (i % 2 == 0) {
                        even[i].style.left = "-40%";

                  }
                  else {
                        even[i].style.left = "-10%";
                  }
                  even[i].style.position = "relative";
                  even[i].style.opacity = "0";
            }
      }

      if (document.documentElement.scrollTop > iframe1 + 20) {
            const img = document.querySelector(".new_pro_img div");
            img.style.left = "0%";
            img.style.opacity = "1";
      }
      else {
            const img = document.querySelector(".new_pro_img div");
            img.style.left = "-100%";
            img.style.opacity = "0";

      }
      if (document.documentElement.scrollTop > iframe2 + 20) {
            const img = document.querySelector(".new_pro2_img div");
            img.style.left = "0%";
            img.style.opacity = "1";
      }
      else {
            const img = document.querySelector(".new_pro2_img div");
            img.style.left = "100%";
            img.style.opacity = "0";

      }

}
const slider_img = document.querySelector(".outer_iframe .img .inner_img");
const l_arrow = document.querySelector(".l_arrow");
let j = 0;
l_arrow.style.opacity = "0";

l_arrow.addEventListener('click', (e) => {
      if (j == 1) {
            l_arrow.style.opacity = "0";
      }
      if (j > 0) {
            r_arrow.style.opacity = "1";
            j = j - 1;
            let left = 100 * j;
            slider_img.style.left = `-${left}%`;
      }
      // console.log(j)

})
const r_arrow = document.querySelector(".r_arrow");
r_arrow.addEventListener('click', (e) => {

      if (j == 6) {
            r_arrow.style.opacity = "0";
      }
      if (j < 7) {
            l_arrow.style.opacity = '1';
            j = j + 1;
            let left = 100 * j;
            slider_img.style.left = `-${left}%`;
      }
      // console.log(j)
})

