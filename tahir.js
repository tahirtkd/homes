let menuToggle = document.querySelector(".menu-toggle");
let menuList = document.querySelector(".menu-list");
menuToggle.addEventListener("click", () => { menuList.classList.toggle("show-mobile") });