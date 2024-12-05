function openFullScreen(img) {
    const overlay = document.getElementById("fullScreenOverlay");
    const fullScreenImage = document.getElementById("fullScreenImage");
    fullScreenImage.src = img.src; 
    overlay.style.display = "block"; 
 }
 
 function closeFullScreen() {
    const overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "none"; 
 }


function openFullScreen(imgElement) {
   var overlay = document.getElementById("fullScreenOverlay");
   var fullScreenImage = document.getElementById("fullScreenImage");

   fullScreenImage.src = imgElement.src;


   overlay.style.display = "block";
}

function closeFullScreen() {
   var overlay = document.getElementById("fullScreenOverlay");
   

   overlay.style.display = "none";
}

window.onclick = function(event) {
   var overlay = document.getElementById("fullScreenOverlay");
   
   if (event.target == overlay) {
       closeFullScreen();
   }
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    
  
    slides[currentSlide].classList.remove('active');
    
   
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; 
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; 
    }

   
    slides[currentSlide].classList.add('active');

    
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let slideIndex = 0; 

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    
    slides[slideIndex].style.display = "block"; 
}


function plusSlides(n) {
   slideIndex += n; 
   const slides = document.getElementsByClassName("mySlides");
   
   
   if (slideIndex >= slides.length) {slideIndex = 0} 
   if (slideIndex < 0) {slideIndex = slides.length - 1} 

   showSlides(); 
}

showSlides();