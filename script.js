// Website Load होने पर
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bollywood मंत्र वेबसाइट लोड हो गई!');
    
    // Current Year Footer में
    updateCopyrightYear();
    
    // Navigation smooth scroll
    setupSmoothScroll();
    
    // Trailer buttons
    setupTrailerButtons();
    
    // Contact form
    setupContactForm();
    
    // Review buttons
    setupReviewButtons();
});

// Copyright year update
function updateCopyrightYear() {
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
}

// Smooth scroll for navigation
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Trailer buttons functionality
function setupTrailerButtons() {
    const trailerButtons = document.querySelectorAll('.trailer-btn');
    const modal = document.getElementById('trailer-modal');
    const closeBtn = document.querySelector('.close-btn');
    const movieIdSpan = document.getElementById('movie-id');
    
    // Open modal
    trailerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieId = this.getAttribute('data-movie');
            movieIdSpan.textContent = movieId;
            
            // Show modal with animation
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
}

// Contact form
function setupContactForm() {
    const submitBtn = document.getElementById('submit-btn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('कृपया सभी फ़ील्ड भरें!');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('कृपया सही ईमेल एड्रेस डालें!');
                return;
            }
            
            // Show success message
            alert('धन्यवाद! आपका संदेश भेज दिया गया है। हम जल्द ही संपर्क करेंगे।');
            
            // Clear form
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        });
    }
}

// Review buttons
function setupReviewButtons() {
    const reviewButtons = document.querySelectorAll('.review-btn');
    
    reviewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieCard = this.closest('.movie-card');
            const movieTitle = movieCard.querySelector('h3').textContent;
            
            alert(`जल्द ही ${movieTitle} की पूरी रिव्यू पढ़ें! अभी विकासाधीन है।`);
        });
    });
}

// Movie data (आप बाद में बदल सकते हैं)
const moviesData = [
    {
        id: 1,
        title: "फिल्म: एक्शन 2024",
        rating: 4.5,
        release: "15 मार्च 2024",
        stars: "सलमान खान, कृति सेनन",
        description: "एक थ्रिलिंग एक्शन ड्रामा जो आपको एज ऑफ द सीट पर बिठा देगा...",
        trailerId: "action2024"
    },
    {
        id: 2,
        title: "रोमांस इन द एयर",
        rating: 4.2,
        release: "20 मार्च 2024",
        stars: "रणबीर कपूर, आलिया भट्ट",
        description: "एक खूबसूरत प्रेम कहानी जो दिल छू लेगी। संगीत और सिनेमेटोग्राफी शानदार...",
        trailerId: "romance2024"
    },
    {
        id: 3,
        title: "कॉमेडी नाइट",
        rating: 4.7,
        release: "25 मार्च 2024",
        stars: "अक्षय कुमार, काजोल",
        description: "हंसी का तूफान! पूरे परिवार के देखने लायक। हर दृश्य में कॉमेडी...",
        trailerId: "comedy2024"
    }
];

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Random movie quote generator
const movieQuotes = [
    "पिक्चर अभी बाकी है मेरे दोस्त!",
    "मोगैंबो खुश हुआ!",
    "जानेमन, जानेमन, जानेमन तेरे दो नैना...",
    "भाई होना कोई हंसी खेल नहीं...",
    "रिश्तों में तो हम तुम्हारे बाप लगते हैं!"
];

function getRandomQuote() {
    return movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
}

// Display random quote in console (for fun)
console.log("🎬 बॉलीवुड कोट: " + getRandomQuote());