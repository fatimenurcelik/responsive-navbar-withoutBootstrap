const navToggler =  document.querySelector(".nav-toggler");

navToggler.addEventListener("click", toggler);

function toggler(){
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.overflow = "hidden";
    }else{
        nav.removeAttribute("style");
    }
}