let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    // Update current index with wrapping logic
    if (index >= totalSlides) {
        currentIndex = 0; // Loop back to the first image
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Loop to the last image
    } else {
        currentIndex = index; // Use the provided index
    }

    // Calculate the offset for sliding
    const offset = -currentIndex * 100; // Move left by 100% of the current index
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${offset}%)`; // Apply the sliding effect

    // Update active class for opacity transition
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

// Change slide function
function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');

    if (direction === 1) {
        // When clicking right, increment the index
        showSlide(currentIndex + 1);
    } else {
        // When clicking left, decrement the index
        showSlide(currentIndex - 1);
    }
}

// Initialize the carousel
showSlide(currentIndex);
