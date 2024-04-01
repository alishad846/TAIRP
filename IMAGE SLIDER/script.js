const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideno = 1;
const length = images.length;
const sliderWidth = 500;

const nextslide = () => {
 
   
    slider.style.transform = `translateX(-${(slideno)*sliderWidth}px)`;
   slideno++;
};

const prevslide = () => {

  
    slider.style.transform = `translateX(-${(slideno - 2) * sliderWidth}px)`;
    slideno--;
};

const getFirstSlide = () => {
  slideno = 1
  slider.style.transform = `translateX(0px)`;
};


const getLastslide = () => {
  slideno = length;
  slider.style.transform = `translateX(-${(length-1)*sliderWidth}px)`;
};

right.addEventListener('click', ()=>{
  slideno<length ? nextslide() :getFirstSlide();
});
left.addEventListener('click',()=> {slideno>1?prevslide():getLastslide()});
