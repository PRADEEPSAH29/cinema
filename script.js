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
// Function to filter movies based on search input
function filterMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('dropdown');
    const categories = document.querySelectorAll('.movie-item');

    dropdown.innerHTML = ''; // Clear previous results
    let hasResults = false;

    categories.forEach(movie => {
        const title = movie.getAttribute('data-title') ? movie.getAttribute('data-title').toLowerCase() : '';
        if (title.includes(query) && query.trim() !== '') {
            const item = document.createElement('div');
            item.classList.add('movie-item');
            item.style.display = 'flex';
            item.style.color = 'black';

            const img = movie.querySelector('img');
            if (img) {
                const clonedImg = img.cloneNode(true);
                clonedImg.style.width = '60px';
                clonedImg.style.height = '80px';
                item.appendChild(clonedImg);
            }

            const titleElement = document.createElement('span');
            titleElement.textContent = movie.getAttribute('data-title');
            item.appendChild(titleElement);

            item.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default action
                showSelectedMovie(movie);
            });

            dropdown.appendChild(item);
            hasResults = true;
        }
    });

    dropdown.style.display = hasResults ? 'block' : 'none';
}

// Function to show only the selected movie and hide all others
function showSelectedMovie(selectedMovie) {
    const allMovies = document.querySelectorAll('.movie-item');
    
    // Hide all movie items
    allMovies.forEach(movie => {
        movie.style.display = 'none';
    });

    // Show the selected movie
    selectedMovie.style.display = 'block';

    // Scroll to the selected movie
    selectedMovie.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
    filterMovies();
});

// Event listener to hide dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-container').contains(event.target)) {
        document.getElementById('dropdown').style.display = 'none';
    }
});

// Function to open the modal and play video
function openModal(videoId, modalId) {
    const modal = document.getElementById(modalId);
    const iframe = modal.querySelector('iframe');
    modal.style.display = 'flex';
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

// Event listeners for watch trailer buttons
document.querySelectorAll('.watch-trailer').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const videoId = this.getAttribute('data-video-id');
        const modalId = this.getAttribute('data-modal-id');
        openModal(videoId, modalId);
    });
});

// Event listeners for closing modals
document.querySelectorAll('.modal .close').forEach(span => {
    span.addEventListener('click', function() {
        const modal = this.closest('.modal');
        const iframe = modal.querySelector('iframe');
        modal.style.display = 'none';
        iframe.src = ''; // Stop video playback when modal is closed
    });
});
//system 
// redirect.js

// Function to check if the user is logged in
function isLoggedIn() {
    // Example check: replace with your actual login check logic
    return !!localStorage.getItem('userToken');
}

// Function to handle the click event on the "Book Now" button
function handleBookNowClick(event) {
    event.preventDefault(); // Prevent the default link behavior

    const bookingPageUrl = 'https://pradeepsah29.github.io/cinema1'; // URL of the booking page
    const loginPageUrl = '/login'; // URL of the login page

    if (isLoggedIn()) {
        window.location.href = bookingPageUrl;
    } else {
        window.location.href = loginPageUrl;
    }
}

// Add event listener to the "Book Now" button
document.addEventListener('DOMContentLoaded', () => {
    const bookNowBtn = document.getElementById('bookNowBtn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', handleBookNowClick);
    }
});

}

// Execute the redirection
redirectToPage();

