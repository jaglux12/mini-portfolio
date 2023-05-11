const bDarkModeM = document.getElementById("bDarkModeM")
const bDarkMode = document.getElementById("bDarkMode")
const tbDarkMode = document.getElementById("tbDarkMode")

bDarkModeM.addEventListener("click", ()=>{
  document.documentElement.classList.toggle("dark") 
},false)

bDarkMode.addEventListener("click", ()=>{
  document.documentElement.classList.toggle("dark")
  console.log("fsadf")
  tbDarkMode.classList.toggle("fa-solid") 
  tbDarkMode.classList.toggle("fa-sun")
},false)
