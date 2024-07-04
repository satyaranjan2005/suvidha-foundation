let menuOpen = false;
let menu = document.querySelector(".menu-opts");
document.querySelector(".menu").addEventListener("click",()=>{
  if(menuOpen){
    menu.style.right = "-20rem";
    menuOpen = false;
    document.querySelector(".menu").innerHTML = `<img src="./images/main nav/menu.svg" alt="Menu" id="menu-icon" />`
  } else{
    menu.style.right = 0;
    menuOpen = true;
    document.querySelector(".menu").innerHTML = `<img src="./images/main nav/cross.svg" alt="Menu" id="menu-icon" />`
  }
  console.log(menuOpen)
})