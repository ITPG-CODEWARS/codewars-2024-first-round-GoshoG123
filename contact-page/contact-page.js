document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Check if the page is already at the top
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});