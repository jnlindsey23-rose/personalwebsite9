/*
 * SIMPLIFIED FORTY TEMPLATE JAVASCRIPT
 * 
 * WHAT THIS FILE DOES:
 * 1. Mobile menu toggle (open/close)
 * 2. Sets portfolio tile background images from <img> tags
 * 3. Smooth scroll for internal links
 * 
 * WHEN YOU NEED TO EDIT THIS:
 * - If you change HTML structure significantly, check sections marked with "⚠️ EDIT IF..."
 * - If you add/remove portfolio tiles, no changes needed (automatic)
 * - If you change menu structure, no changes needed (automatic)
 */

// ==============================================
// WAIT FOR PAGE TO LOAD
// ==============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // 1. MOBILE MENU TOGGLE
    // ⚠️ EDIT IF: You change the menu button class or menu ID
    // Current: button is .menu-toggle, menu is #menu
    // ==============================================
    
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    const menuClose = document.querySelector('#menu .close');
    const menuLinks = document.querySelectorAll('#menu a:not(.close)');
    
    // Open menu when clicking menu button
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.add('visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    // Close menu when clicking close button
    if (menuClose) {
        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.remove('visible');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    // Close menu when clicking outside of it (on the overlay)
    if (menu) {
        menu.addEventListener('click', function(e) {
            if (e.target === menu) {
                menu.classList.remove('visible');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking any link inside menu
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('visible');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('visible')) {
            menu.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });
    
    
    // ==============================================
    // 2. PORTFOLIO TILES - SET BACKGROUND IMAGES
    // ⚠️ EDIT IF: You change the tiles container class or article structure
    // Current: tiles are in .tiles > article, images are in article > .image > img
    // ==============================================
    
    const tiles = document.querySelectorAll('.tiles > article');
    
    tiles.forEach(function(tile) {
        const img = tile.querySelector('.image img');
        
        if (img) {
            // Get the image source
            const imgSrc = img.getAttribute('src');
            
            // Set it as the background image of the article
            tile.style.backgroundImage = 'url(' + imgSrc + ')';
            
            // Optional: Set background position if data-position attribute exists
            const position = img.getAttribute('data-position');
            if (position) {
                tile.querySelector('.image').style.backgroundPosition = position;
            }
        }
    });
    
    
    // ==============================================
    // 3. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ⚠️ EDIT IF: You want to change scroll speed or offset
    // Current: Scrolls with 800ms duration, 70px offset for fixed header
    // ==============================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't do anything for menu toggle or close buttons
            if (href === '#menu' || href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate position with offset for fixed header
                // ⚠️ CHANGE THIS NUMBER if your header height is different
                const headerOffset = 70; // Pixels from top
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ==============================================
    // 4. BANNER BACKGROUND IMAGE (IF USING <img> TAG)
    // ⚠️ EDIT IF: You change banner structure
    // Current: banner is #banner, image is #banner .image img
    // NOTE: If you're using CSS background-image, you can delete this section
    // ==============================================
    
    const banner = document.getElementById('banner');
    
    if (banner) {
        const bannerImg = banner.querySelector('.image img');
        
        if (bannerImg) {
            const imgSrc = bannerImg.getAttribute('src');
            banner.style.backgroundImage = 'url(' + imgSrc + ')';
        }
    }
    
    
    // ==============================================
    // 5. FORM VALIDATION (OPTIONAL)
    // ⚠️ ADD THIS IF: You want basic client-side form validation
    // Currently commented out - uncomment if needed
    // ==============================================
    
    /*
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return false;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return false;
            }
        });
    }
    */
    
}); // End of DOMContentLoaded


// ==============================================
// ADDITIONAL CUSTOMIZATION NOTES
// ==============================================

/*
 * HOW TO ADD MORE PORTFOLIO TILES:
 * Just add more <article> elements in your HTML with the tile-X class
 * The JavaScript will automatically set their backgrounds
 * 
 * HOW TO CHANGE TILE OVERLAY COLORS:
 * Edit the CSS file, look for lines with .tile-1::before, .tile-2::before, etc.
 * 
 * HOW TO CHANGE MENU ANIMATION:
 * Edit the CSS file, look for #menu transition properties
 * 
 * HOW TO ADD NEW SECTIONS:
 * No JavaScript changes needed! Just add your section in HTML
 * If you want smooth scrolling to it, just make sure it has an id
 * 
 * BROWSER COMPATIBILITY:
 * This code works in all modern browsers (Chrome, Firefox, Safari, Edge)
 * IE11 and below are not supported
 */
