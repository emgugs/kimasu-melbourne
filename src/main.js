// =============================================
// KIMASU – Main JavaScript
// =============================================

// ---------- Menu Data ----------
const menuData = {
    sides: [
        { name: 'Takoyaki', desc: 'Classic Japanese octopus balls, crispy outside & soft inside.', price: '$12.90', img: '/images/menu/takoyaki.png' },
        { name: 'Potato Croquettes', desc: 'Golden-fried Japanese-style potato croquettes.', price: '$8.90', img: '/images/menu/potato-croquettes.png' },
        { name: 'Kimchi', desc: 'Traditional fermented Korean kimchi.', price: '$4.90', img: '/images/menu/kimchi.png' },
        { name: 'Seaweed Salad', desc: 'Fresh seasoned seaweed salad with sesame.', price: '$6.90', img: '/images/menu/seaweed-salad.png' },
        { name: 'Crab Salad', desc: 'Creamy crab salad with Japanese mayo.', price: '$7.90', img: '/images/menu/crab-salad.png' },
        { name: 'Vege Spring Rolls', desc: 'Crispy vegetable spring rolls with dipping sauce.', price: '$8.90', img: '/images/menu/vege-spring-rolls.png' },
        { name: 'Prawn Tempura', desc: 'Lightly battered crispy prawn tempura.', price: '$12.90', img: '/images/menu/prawn-tempura.jpeg' },
        { name: 'Salmon Sashimi (6 pcs)', desc: 'Fresh premium salmon sashimi, 6 pieces.', price: '$14.90', img: '/images/menu/salmon-sashimi-6-pcs.jpeg' },
        { name: 'Salmon Sashimi (12 pcs)', desc: 'Fresh premium salmon sashimi, 12 pieces.', price: '$26.90', img: '/images/menu/salmon-sashimi-12-pcs.jpeg' },
        { name: 'Seared Salmon (5 pcs)', desc: 'Torched seared salmon, 5 pieces.', price: '$16.90', img: '/images/menu/seared-salmon-5pcs.png' },
    ],
    poke: [
        { name: 'Aloha Poke', desc: 'Hawaiian-inspired poke bowl with fresh salmon & mango.', price: '$18.90', img: '/images/menu/aloha-poke.png' },
        { name: 'Hawaiian Poke', desc: 'Classic Hawaiian poke with sashimi-grade fish.', price: '$18.90', img: '/images/menu/hawaiian-poke.png' },
        { name: 'Busan Style Poke', desc: 'Korean-inspired poke bowl with spicy gochujang.', price: '$18.90', img: '/images/menu/busan-style-poke.webp' },
        { name: 'Spicy Cali Poke', desc: 'California-style spicy poke with avocado.', price: '$18.90', img: '/images/menu/spicy-cali-poke.png' },
        { name: 'Sesame Tofu Poke', desc: 'Crispy sesame tofu poke with fresh vegetables.', price: '$17.90', img: '/images/menu/sesame-tofu-poke.png' },
        { name: 'Pulled Chicken Poke', desc: 'Tender pulled chicken poke with Asian slaw.', price: '$17.90', img: '/images/menu/pulled-chicken-poke.png' },
        { name: 'Tuna Poke', desc: 'Premium sashimi-grade tuna poke bowl.', price: '$19.90', img: '/images/menu/tuna-poke.jpeg' },
        { name: 'Build Your Own Bowl', desc: 'Customise your own poke bowl with your favourite toppings.', price: '$16.90', img: '/images/menu/build-your-own-bowl.png' },
    ],
    rice: [
        { name: 'Chicken Katsu Bowl', desc: 'Crispy chicken katsu over Japanese rice with tonkatsu sauce.', price: '$17.90', img: '/images/menu/chicken-katsu-bowl.png' },
        { name: 'Pork Katsu Bowl', desc: 'Golden pork katsu over Japanese rice with tonkatsu sauce.', price: '$17.90', img: '/images/menu/pork-katsu-bowl.png' },
        { name: 'Crispy Tofu Bowl', desc: 'Crispy tofu over Japanese rice with teriyaki glaze.', price: '$16.90', img: '/images/menu/crispy-tofu-bowl.png' },
        { name: 'Chicken Katsu Curry', desc: 'Chicken katsu served with rich Japanese curry & rice.', price: '$18.90', img: '/images/menu/chicken-katsu-curry.png' },
        { name: 'Pork Katsu Curry', desc: 'Pork katsu served with rich Japanese curry & rice.', price: '$18.90', img: '/images/menu/pork-katsu-curry.png' },
        { name: 'Crispy Tofu Curry', desc: 'Crispy tofu served with rich Japanese curry & rice.', price: '$17.90', img: '/images/menu/crispy-tofu-curry.png' },
        { name: 'Croquette Curry', desc: 'Potato croquettes with Japanese curry & rice.', price: '$17.90', img: '/images/menu/croquette-curry.png' },
        { name: 'Sweet Beef Gyudon', desc: 'Sweet soy-braised beef over Japanese rice.', price: '$18.90', img: '/images/menu/sweet-beef-gyudon.png' },
        { name: 'Teriyaki Beef', desc: 'Grilled teriyaki beef over steamed rice.', price: '$18.90', img: '/images/menu/teriyaki-beef.png' },
    ],
    noodles: [
        { name: 'Chicken Katsu Spicy', desc: 'Chicken katsu with spicy Korean-style noodles.', price: '$18.90', img: '/images/menu/chicken-katsu-spicy.png' },
        { name: 'Pork Katsu', desc: 'Pork katsu with savoury noodle bowl.', price: '$18.90', img: '/images/menu/pork-katsu.png' },
        { name: 'Chicken Katsu', desc: 'Chicken katsu with classic noodle broth.', price: '$18.90', img: '/images/menu/chicken-katsu.png' },
        { name: 'Soba Bonito Tofu', desc: 'Cold soba noodles with bonito flakes & crispy tofu.', price: '$17.90', img: '/images/menu/soba-bonito-tofu.png' },
        { name: 'Beef Udon', desc: 'Thick udon noodles in rich beef broth.', price: '$18.90', img: '/images/menu/beef-udon.png' },
        { name: 'Crispy Prawns Udon', desc: 'Udon noodles topped with crispy tempura prawns.', price: '$18.90', img: '/images/menu/crispy-prawns-udon.png' },
        { name: 'Chicken Udon Gyudon', desc: 'Udon noodles with chicken & sweet soy gyudon style.', price: '$18.90', img: '/images/menu/chicken-udon-gyudon.png' },
        { name: 'Pork Udon Gyudon', desc: 'Udon noodles with pork in sweet soy gyudon style.', price: '$18.90', img: '/images/menu/pork-udon-gyudon.png' },
    ],
    fries: [
        { name: 'Simple Fries', desc: 'Classic golden fries with seasoning.', price: '$7.90', img: '/images/menu/simple-fries.png' },
        { name: 'KSP Fries', desc: 'Korean spicy popcorn chicken loaded fries.', price: '$14.90', img: '/images/menu/ksp-fries.png' },
        { name: 'Kimchi Loaded Fries', desc: 'Loaded fries topped with kimchi & sauces.', price: '$14.90', img: '/images/menu/kimchi-loaded-fries.png' },
        { name: 'Mi Goreng Loaded Fries', desc: 'Loaded fries with mi goreng seasoning.', price: '$14.90', img: '/images/menu/mi-goreng-loaded-fries.png' },
        { name: 'Curry Katsu Loaded Fries', desc: 'Loaded fries with katsu & Japanese curry.', price: '$15.90', img: '/images/menu/curry-katsu-loaded-fries.png' },
        { name: 'Chicken Katsu Sliders', desc: 'Mini chicken katsu sliders with slaw.', price: '$14.90', img: '/images/menu/chicken-katsu-sliders.png' },
        { name: 'Pork Katsu Sliders', desc: 'Mini pork katsu sliders with slaw.', price: '$14.90', img: '/images/menu/pork-katsu-sliders.png' },
        { name: 'Ebi Sliders', desc: 'Crispy prawn ebi sliders.', price: '$14.90', img: '/images/menu/ebi-sliders.png' },
        { name: 'Pulled Pork Sliders', desc: 'Tender pulled pork sliders with Asian slaw.', price: '$14.90', img: '/images/menu/pulled-pork-sliders.png' },
        { name: 'Cheesey Croquette Sliders', desc: 'Cheesy potato croquette sliders.', price: '$13.90', img: '/images/menu/cheesey-croquette-sliders.png' },
    ],
};

// ---------- DOM Elements ----------
const carousel = document.getElementById('menu-carousel');
const tabButtons = document.querySelectorAll('.tab-btn');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// ---------- Render Menu Items ----------
function renderMenuItems(category) {
    if (!carousel) return;
    const items = menuData[category] || [];
    carousel.innerHTML = items
        .map(
            (item) => `
    <div class="menu-item-card">
      <div class="menu-item-image">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="menu-item-body">
        <p class="menu-item-name">${item.name}</p>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-footer">
          <span class="menu-item-price">${item.price}</span>
          <a href="https://kimasu-cs.square.site" target="_blank" rel="noopener" class="btn-add-item">ORDER</a>
        </div>
      </div>
    </div>`
        )
        .join('');

    // Reset scroll position when switching tabs
    carousel.scrollLeft = 0;
}

// ---------- Tab Switching ----------
tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Update active state
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        // Render items for selected category
        const tab = btn.dataset.tab;
        renderMenuItems(tab);
    });
});

// ---------- Carousel Scroll Buttons ----------
const SCROLL_AMOUNT = 320;

if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    });
}

if (scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    });
}

// ---------- Hamburger Menu ----------
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ---------- Initial Render ----------
// Default tab is "rice" (which has the .active class in HTML)
renderMenuItems('rice');
