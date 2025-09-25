function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    animateChange("hours");
    animateChange("minutes");
    animateChange("seconds");
}

function animateChange(id) {
    let element = document.getElementById(id);
    element.classList.add("animate");
    setTimeout(() => {
        element.classList.remove("animate");
    }, 1000);
}

setInterval(updateClock, 1000);

updateClock(); // Initial call to display clock immediately


// Dark mode functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');

        // Add a smooth transition effect
        body.style.transition = 'all 0.3s ease';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');

        // Add a smooth transition effect
        body.style.transition = 'all 0.3s ease';
    }
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    }
}

// Digital Clock functionality (enhanced version)
function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    // Add leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Update display
    document.getElementById('hours').textContent = formattedHours;
    document.getElementById('minutes').textContent = formattedMinutes;
    document.getElementById('seconds').textContent = formattedSeconds;
    document.getElementById('ampm').textContent = ampm;

    // Update date
    updateDate();
}

function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date-display').textContent = dateString;
}

// Keyboard shortcuts
document.addEventListener('keydown', function (event) {
    // Toggle theme with 'T' key
    if (event.key.toLowerCase() === 't') {
        toggleTheme();
    }

    // Toggle fullscreen with 'F' key
    if (event.key.toLowerCase() === 'f') {
        toggleFullscreen();
    }
});

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
        const body = document.body;
        const themeIcon = document.getElementById('theme-icon');

        if (e.matches) {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        } else {
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
        }
    }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    updateClock();

    // Update clock every second
    setInterval(updateClock, 1000);

    // Add smooth entrance animation
    setTimeout(() => {
        document.querySelector('.clock').style.opacity = '1';
        document.querySelector('.clock').style.transform = 'translateY(0)';
    }, 100);
});

// Handle visibility change (when tab becomes visible/hidden)
document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        updateClock(); // Update immediately when tab becomes visible
    }
});