// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Show the selected section
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });
}

// Add event listeners to navigation links for showing sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the section ID (remove '#')
        showSection(targetId); // Show the selected section
    });
});

// Typing effect for showcasing passions or skills
const typingElement = document.getElementById('typing-text');
const typingPhrases = [
    'Machine Learning Engineer',
    'Software Engineering Student',
    'Passionate Developer'
];
let phraseIndex = 0;
let charIndex = 0;
let typingDelay = 100; // Speed of typing
let erasingDelay = 50; // Speed of erasing
let nextPhraseDelay = 2000; // Delay before next phrase

function type() {
    if (charIndex < typingPhrases[phraseIndex].length) {
        typingElement.textContent += typingPhrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, nextPhraseDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingPhrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        setTimeout(type, typingDelay);
    }
}




document.addEventListener("DOMContentLoaded", () => {
    // Get all nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Function to show the target section
    const showSection = (id) => {
        sections.forEach((section) => {
            if (section.id === id) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    };

    // Add click event listeners to nav links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href").substring(1); // Get target id without #
            showSection(targetId);
        });
    });

    // Show the first section by default (e.g., Home)
    showSection("home");
});

function showThankYouMessage(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("thank-you-message").style.display = "block";
    return false; // Stop default form action
}

function closeThankYouMessage() {
    document.getElementById("thank-you-message").style.display = "none";
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    // Send form data to Formspree
    fetch('https://formspree.io/f/xgvvpqjg', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            Accept: 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            // Show thank you popup
            document.getElementById('thankYouPopup').style.display = 'flex';
            form.reset(); // Clear the form fields
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(() => {
        alert('Oops! Something went wrong. Please try again.');
    });
});

// Close popup on button click
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('thankYouPopup').style.display = 'none';
});
