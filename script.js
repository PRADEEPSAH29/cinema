document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close');
    const trailerButtons = document.querySelectorAll('.watch-trailer');

    // Open modal
    trailerButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const videoId = this.getAttribute('data-video-id');
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            const iframe = modal.querySelector('iframe');
            
            // Set video source
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            const iframe = modal.querySelector('iframe');
            
            // Stop video playback
            iframe.src = '';
            
            // Hide modal
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            const iframe = e.target.querySelector('iframe');
            
            // Stop video playback
            iframe.src = '';
            
            // Hide modal
            e.target.style.display = 'none';
        }
    });
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "block"; // Show the current slide
}

// Optional: Auto-slide functionality
setInterval(function() {
    plusSlides(1);
}, 3000); // Change slide every 5 seconds
