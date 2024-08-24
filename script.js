document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoFrame');
    var closeBtn = document.getElementsByClassName('close')[0];
    var watchTrailerButtons = document.getElementsByClassName('watch-trailer');

    // Open modal with the correct video
    Array.from(watchTrailerButtons).forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            var videoId = btn.getAttribute('data-video-id');
            iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
        iframe.src = ''; // Stop the video
    });

    // Close modal if user clicks outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal
            iframe.src = ''; // Stop the video
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
