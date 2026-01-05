// Language Switcher for Koki Corporation Website
let currentLang = 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if language is stored in localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // Apply the language
    applyLanguage(currentLang);
});

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
    
    // Reload products if on index page
    if (typeof initializeProducts === 'function') {
        initializeProducts(lang);
    }
}

// Apply language to all elements
function applyLanguage(lang) {
    // Update flag display
    const flagEn = document.getElementById('flag-en');
    const flagJp = document.getElementById('flag-jp');
    
    if (flagEn && flagJp) {
        if (lang === 'en') {
            flagEn.style.display = 'block';
            flagJp.style.display = 'none';
        } else {
            flagEn.style.display = 'none';
            flagJp.style.display = 'block';
        }
    }
    
    // Update all text elements with lang-text class
    const textElements = document.querySelectorAll('.lang-text');
    textElements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const jpText = element.getAttribute('data-jp');
        
        if (lang === 'en' && enText) {
            element.textContent = enText;
        } else if (lang === 'jp' && jpText) {
            element.textContent = jpText;
        }
    });
    
    // Update all placeholder elements
    const placeholderElements = document.querySelectorAll('.lang-placeholder');
    placeholderElements.forEach(element => {
        const enPlaceholder = element.getAttribute('data-en-placeholder');
        const jpPlaceholder = element.getAttribute('data-jp-placeholder');
        
        if (lang === 'en' && enPlaceholder) {
            element.placeholder = enPlaceholder;
        } else if (lang === 'jp' && jpPlaceholder) {
            element.placeholder = jpPlaceholder;
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang;
    
    console.log('Language switched to:', lang);
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.switchLanguage = switchLanguage;
    window.getCurrentLanguage = function() {
        return currentLang;
    };
}
