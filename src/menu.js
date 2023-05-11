const bMenu = document.getElementById("bMenu")
const text_bMenu = document.getElementById("textbMenu")
const menuMobile = document.getElementById("menuMobile")

bMenu.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden")

    text_bMenu.classList.toggle("fa-xmark")

},false)