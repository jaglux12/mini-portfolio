const bDarkModeM = document.getElementById("bDarkModeM")

const bDarkMode = document.getElementById("bDarkMode")

bDarkModeM.addEventListener("click", ()=>{
  document.documentElement.classList.toggle("dark") 
},false)

bDarkMode.addEventListener("click", ()=>{
  document.documentElement.classList.toggle("dark")
},false)