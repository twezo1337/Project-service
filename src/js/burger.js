const burger = document.querySelector(".icon__menu"),
      menu   = document.querySelector(".menu__body");

burger.addEventListener("click", () => {
     burger.classList.toggle("_toggle");
     menu.classList.toggle("_toggle");   
});