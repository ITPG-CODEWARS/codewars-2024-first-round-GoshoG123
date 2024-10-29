document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});