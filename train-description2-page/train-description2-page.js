let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');

    if (direction === 1) {
        showSlide(currentIndex + 1);
    } else {
        showSlide(currentIndex - 1);
    }
}

showSlide(currentIndex);


document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
