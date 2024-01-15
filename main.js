let currentSlideIndex = 1;
function showSlides(slideIndex) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    currentSlideIndex = slideIndex;
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
showSlides(currentSlideIndex);
function plusSlides(n) {
    currentSlideIndex = currentSlideIndex + 1;
    showSlides(currentSlideIndex);
}
function currentSlide(n) {
    currentSlide = n;
    showSlides(currentSlideIndex);
}
// countdow
var thoiGianBanDau = 10;
var time = thoiGianBanDau * 60;
var itemCountDown = document.querySelector(.countdow - item);
console.log(itemCountDown);
setInterval(function () {
    let giay = time % 60;
    let phut = Math.floor(time / 60);
    itemCountDown.innerHTML = `${phut} : ${giay}`;
    time--;
}, 100);
