

const navA = document.querySelectorAll("nav a");
const getUrl = window.location.pathname;


if(getUrl === '/'){
  navA[0].style.background = "var(--schema-dark-header-nav-on)";
}else if(getUrl === '/instituicional'){
  navA[1].style.background = "var(--schema-dark-header-nav-on)";
}
