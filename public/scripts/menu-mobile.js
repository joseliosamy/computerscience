

const nav = document.querySelector("header nav");
const menu = document.querySelector(".menu_hamburguer");

menu.addEventListener('click', ()=>{
  if(nav.style.top === "" || nav.style.top === "-600px" ){
    nav.style.top = '60px';

  }

  else nav.style.top = "-600px";
  
})