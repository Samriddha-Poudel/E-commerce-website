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
});

const slides=document.querySelectorAll('.slider-slide');
const dots=document.querySelectorAll('.slider-dot');
let currentindex=0;

function showslide(index){
     slides.forEach((slide, i)=>{
slide.classList.toggle('active', i === index);
     });

     dots.forEach((dot, i) =>{
          dot.classList.toggle('active', i ===index);
     });

     const sliderwrapper= document.querySelector('.slider-wrapper');
     sliderwrapper.style.transform= `translateX(-${index * 100}%)`;
}


function nextslide(){
     currentindex= (currentindex + 1) % slides.length;
     showslide(currentindex);
}

dots.forEach((dot, index) =>{

     dot.addEventListener('click',() => {
          currentindex = index;
          showslide(currentindex);

     })
});

showslide(currentindex);

const autoslideinterval = 5000;
setInterval(nextslide, autoslideinterval);

