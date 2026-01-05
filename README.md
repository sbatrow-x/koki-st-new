# Koki Corporation Ltd. - Static Website

A fully static website for Koki Corporation Ltd., featuring organic spices and clothing goods from Sri Lanka. This website requires **no server** to run and can be hosted on any static hosting platform.

## 🌟 Features

- **Fully Static**: No backend server required - pure HTML, CSS, and JavaScript
- **Bilingual Support**: Seamlessly switch between English and Japanese
- **Product Management**: Easy-to-update JSON-based product catalog
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Bootstrap 5 with custom styling
- **No Database Required**: All product data stored in JSON format

## 📁 Project Structure

```
koki-web-static/
├── index.html                 # Main homepage
├── contact.html              # Contact page
├── products.json             # Product catalog (edit this to update products)
├── static/
│   ├── css/                  # Stylesheets
│   │   ├── bootstrap.min.css
│   │   ├── style.css
│   │   └── ...
│   ├── js/                   # JavaScript files
│   │   ├── products.js       # Product loader
│   │   ├── language-switcher.js  # Language switching
│   │   ├── main.js
│   │   └── ...
│   └── img/                  # Images
└── README.md                 # This file
```

## 🚀 How to Use

### Option 1: Open Locally
1. Simply open `index.html` in any modern web browser
2. That's it! The website will work immediately

### Option 2: Use a Local Server
For better development experience:
```bash
# Using Python 3
cd koki-web-static
python3 -m http.server 8000

# Or using Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

### Option 3: Deploy to Static Hosting

#### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Select the main branch as source
4. Your site will be live at `https://yourusername.github.io/repo-name/`

#### Netlify
1. Drag and drop this folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is instantly live!

#### Vercel
```bash
npm i -g vercel
cd koki-web-static
vercel
```

## 📝 Updating Products

All products are stored in `products.json`. To add, remove, or update products:

1. Open `products.json` in any text editor
2. Find the category you want to edit (e.g., `powder_spices`, `tea`, `bathik_products`)
3. Add/edit/remove products following this format:

```json
{
  "powder_spices": {
    "1": {
      "name": "日本語の名前",
      "en_name": "English Name",
      "weight": "100g",
      "price": "500円",
      "buying_price": "200円",
      "img": "https://example.com/image.jpg"
    }
  }
}
```

4. Save the file - changes will appear immediately!

## 🌐 Language Switching

The website supports two languages:
- **English** (default)
- **Japanese** (日本語)

Users can switch languages using the flag icon in the navigation bar. The selected language is saved in browser's localStorage and persists across page visits.

### Adding More Languages

To add a new language:

1. Edit HTML files to add new language data attributes:
```html
<span class="lang-text" 
      data-en="English Text" 
      data-jp="日本語テキスト"
      data-fr="Nouveau Texte">
English Text
</span>
```

2. Update `language-switcher.js` to support the new language
3. Add a new flag icon and dropdown option

## 🎨 Customization

### Colors
Edit `static/css/style.css` to change colors:
```css
:root {
    --primary-color: #81c408;
    --secondary-color: #ffb524;
}
```

### Logo
Replace `static/img/logo.png` with your own logo (recommended size: 50x50px)

### Images
Add images to `static/img/` folder and reference them in HTML or `products.json`

## 📦 Product Categories

The website includes these product categories:
- **Powder Spices** (粉末スパイス)
- **Whole Spices** (ホールスパイス)
- **Ceylon Tea** (セイロン茶)
- **Coconut Products** (ココナッツ製品)
- **Bathik Products** (バティック)
- **Cannes Products** (缶詰)
- **Craft Items** (工芸品)
- **Kitchen Items** (キッチン用品)

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Bootstrap 5 + Custom styles
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Bootstrap 5**: Responsive grid and components
- **Font Awesome**: Icons
- **jQuery**: For some UI interactions (carousel, etc.)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contact Information

**Koki Corporation Ltd.**
- Address: 101 Apricot House, 51-11 Fujimidai 4-chome, Kunitachishi, Tokyo, Japan
- Email: kokicor2024@gmail.com
- Phone: 080 6571 8987

## 📄 License

© 2024 Koki Corporation Ltd. All rights reserved.

## 🛠️ Troubleshooting

### Products not loading
- Check browser console for errors (F12)
- Ensure `products.json` is valid JSON (use a JSON validator)
- Check that the file path to `products.json` is correct

### Images not showing
- Verify image URLs are accessible
- Check browser console for 404 errors
- Use absolute URLs for external images

### Language not switching
- Clear browser cache and localStorage
- Check browser console for JavaScript errors
- Ensure `language-switcher.js` is loaded correctly

## 🎯 Advantages Over Flask Version

✅ **No Server Required**: Deploy anywhere, anytime
✅ **No Installation**: No Python, Flask, or dependencies needed
✅ **Free Hosting**: Use GitHub Pages, Netlify, or Vercel for free
✅ **Fast**: Static files load instantly
✅ **Easy Maintenance**: Just edit JSON to update products
✅ **Portable**: Copy the folder anywhere and it works
✅ **No Database**: Everything in simple JSON format

---

**Designed by**: [SBATROW Soft](https://www.sbatrow.com/)
