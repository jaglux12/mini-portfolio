const bMenu = document.getElementById("bMenu")
const text_bMenu = document.getElementById("textbMenu")
const menuMobile = document.getElementById("menuMobile")
const mainNav = document.getElementById("mainNav")

bMenu.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden")

    text_bMenu.classList.toggle("fa-xmark")

},false)