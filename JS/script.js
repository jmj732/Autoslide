const sliderBox = document.querySelector('.slider-box');
const slider = sliderBox.querySelector('.slider');

let slideIndex = 0;

const file = sliderBox.querySelector('.file');
const files = sliderBox.querySelector('.files');

const total = file.lengt;
const sliderWidth = slider.clientWidth;

const pagination = sliderBox.querySelector('.pagination');

const btnNext = sliderBox.querySelector('.btn-next');
const btnPrev = sliderBox.querySelector('.btn-prev');
const btnAuto = sliderBox.querySelector('.autoplay');
let flag = 0;
let auto;

btnNext.addEventListener('click',function(){
    if(slideIndex == 5){
        slideIndex = 0;
        files.style.left = slideIndex + "px";
    }
    else{
    slideIndex++;
    files.style.left = -(sliderWidth*slideIndex) + "px";
    }
});

btnPrev.addEventListener('click',function(){
    if(slideIndex == 0){
        slideIndex = 5;
        files.style.left = -(sliderWidth*slideIndex) + "px";
    }
    else{
        slideIndex--;
        files.style.left = -(sliderWidth*slideIndex) + "px";
    }
});

btnAuto.addEventListener('click',function(){
    if(flag === 0) flag = 1;
    else {
        flag = 0;
        clearInterval(auto);
    }
    if(flag === 1){
        auto = setInterval(function() {
            if(slideIndex < 5) {
                slideIndex++;
                files.style.left = -(sliderWidth*slideIndex) + "px";
            }
            else{
                slideIndex = 0;
                files.style.left = slideIndex + "px";
            }
        },1000);
    }
});