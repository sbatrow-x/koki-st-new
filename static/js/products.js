// Product loader and renderer
let productsData = null;
let currentLanguage = 'en';

// Load products from JSON file
async function loadProducts() {
    try {
        const response = await fetch('./products.json');
        productsData = await response.json();
        console.log('Products loaded successfully');
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Render product card
function renderProductCard(product, category, lang = 'en') {
    const name = lang === 'jp' ? product.name : product.en_name;
    const categoryName = getCategoryName(category, lang);
    
    return `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="rounded position-relative fruite-item">
                <div class="fruite-img">
                    <img src="${product.img}" class="img-fluid w-100 rounded-top" alt="${name}" onerror="this.src='static/img/placeholder.jpg'">
                </div>
                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
                    ${categoryName}
                </div>
                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>${name}</h4>
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">${product.weight}</p>
                        <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary">
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> ${product.price}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(category, lang = 'en') {
    const categoryNames = {
        'powder_spices': { en: 'Powder Spices', jp: '粉末スパイス' },
        'whole_spices': { en: 'Whole Spices', jp: 'ホールスパイス' },
        'tea': { en: 'Tea', jp: '紅茶' },
        'coconut_products': { en: 'Coconut Products', jp: 'ココナッツ製品' },
        'bathik_products': { en: 'Bathik', jp: 'バティック' },
        'cannes_products': { en: 'Cannes', jp: '缶詰' },
        'craft_items': { en: 'Craft', jp: '工芸品' },
        'kitchen_items': { en: 'Kitchen Items', jp: 'キッチン用品' }
    };
    
    return categoryNames[category] ? categoryNames[category][lang] : category;
}

// Render products for a specific category
function renderCategoryProducts(category, containerId, lang = 'en') {
    if (!productsData || !productsData[category]) {
        console.error(`Category ${category} not found`);
        return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container ${containerId} not found`);
        return;
    }
    
    const products = productsData[category];
    let html = '';
    
    for (const key in products) {
        html += renderProductCard(products[key], category, lang);
    }
    
    container.innerHTML = html;
}

// Initialize products on page load
async function initializeProducts(lang = 'en') {
    currentLanguage = lang;
    await loadProducts();
    
    if (!productsData) {
        console.error('Failed to load products');
        return;
    }
    
    // Render each category
    renderCategoryProducts('powder_spices', 'powder-spices-container', lang);
    renderCategoryProducts('whole_spices', 'whole-spices-container', lang);
    renderCategoryProducts('tea', 'tea-container', lang);
    renderCategoryProducts('coconut_products', 'coconut-container', lang);
    renderCategoryProducts('bathik_products', 'bathik-container', lang);
    renderCategoryProducts('cannes_products', 'cannes-container', lang);
    renderCategoryProducts('craft_items', 'craft-container', lang);
    renderCategoryProducts('kitchen_items', 'kitchen-container', lang);
}

// Get language from localStorage or default to 'en'
function getSavedLanguage() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const lang = getSavedLanguage();
    initializeProducts(lang);
});
