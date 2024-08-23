document.querySelectorAll('.watch-trailer').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var videoContainer = this.nextElementSibling;
        var iframe = videoContainer.querySelector('iframe');
        var videoId = this.getAttribute('data-video-id');

        // Toggle the display of the video container
        if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
            videoContainer.style.display = 'block';
            iframe.src = 'https://www.youtube.com/embed/' + videoId;
        } else {
            videoContainer.style.display = 'none';
            iframe.src = '';
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
