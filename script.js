const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuicon= menuBtn.querySelector('i');


menuBtn.addEventListener("click",()=>{
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains('open');
     menuicon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
      


});


navlinks.addEventListener("click",(e) => {
     navlinks.classList.remove("open");
     menuicon.setAttribute("class","fa-solid fa-bars");
});


const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
     navSearch.classList.toggle("open");
})