/**
 * ALEXANDER MCQUEEN - CORE APP ENGINE
 * Navigation, Search Overlay, Page Curtain Transitions, Mobile Drawer
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initPageTransitions();
  initSearchOverlay();
  initMobileMenu();
  initNewsletterForm();
});

/* Header Scroll Transition */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* Page Transitions */
function initPageTransitions() {
  const curtain = document.getElementById("page-curtain");
  
  // Attach smooth transition to internal links
  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("http") || link.target === "_blank") {
      return;
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (curtain) {
        curtain.classList.add("active");
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      } else {
        window.location.href = href;
      }
    });
  });
}

/* Full-Screen Search Overlay */
function initSearchOverlay() {
  if (document.getElementById("search-modal-overlay")) return;

  const searchHTML = `
    <div id="search-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: var(--bg-overlay); backdrop-filter: blur(16px); z-index: 9000; opacity: 0; visibility: hidden; transition: all var(--transition-smooth); display: flex; flex-direction: column;">
      <div style="height: var(--nav-height); padding: 0 4vw; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle);">
        <span class="brand-logo" style="font-size: 1.2rem;">SEARCH HOUSE ARCHIVES</span>
        <button onclick="closeSearchModal()" style="font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600;">Close [ESC]</button>
      </div>

      <div class="container-narrow" style="padding-top: 80px; flex: 1; overflow-y: auto;">
        <span class="label-uppercase" style="margin-bottom: 16px; display: block;">WHAT ARE YOU LOOKING FOR?</span>
        <div style="position: relative; margin-bottom: 60px;">
          <input type="text" id="global-search-input" placeholder="Search Manta Bag, Wishbone Loafers, Tailoring..." style="width: 100%; font-family: var(--font-serif); font-size: clamp(2rem, 4vw, 3.2rem); border: none; border-bottom: 2px solid var(--text-primary); background: transparent; padding: 16px 0; color: var(--text-primary); outline: none;" oninput="handleSearchQuery(this.value)">
        </div>

        <div id="search-suggestions" style="margin-bottom: 60px;">
          <span class="label-uppercase" style="margin-bottom: 20px; display: block;">POPULAR SEARCHES</span>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;" onclick="fillSearch('Manta Leather Tote')">Manta Leather Tote</button>
            <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;" onclick="fillSearch('Wishbone Loafers')">Wishbone Loafers</button>
            <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;" onclick="fillSearch('Tailored Jacket')">Tailored Jacket</button>
            <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;" onclick="fillSearch('Rosa Sandals')">Rosa Sandals</button>
            <button class="btn btn-outline" style="padding: 10px 20px; font-size: 0.7rem;" onclick="fillSearch('Skull Cuff')">Skull Cuff</button>
          </div>
        </div>

        <div id="search-results-grid" class="grid-3" style="padding-bottom: 80px;"></div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", searchHTML);
}

function openSearchModal() {
  const modal = document.getElementById("search-modal-overlay");
  const input = document.getElementById("global-search-input");
  if (modal) {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 200);
      handleSearchQuery("");
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal-overlay");
  if (modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    document.body.style.overflow = "";
  }
}

function fillSearch(query) {
  const input = document.getElementById("global-search-input");
  if (input) {
    input.value = query;
    handleSearchQuery(query);
  }
}

function handleSearchQuery(query) {
  const grid = document.getElementById("search-results-grid");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.color.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: var(--font-serif); font-size: 1.4rem;">No matching pieces found for "${query}".</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="closeSearchModal(); window.location.href='product.html?id=${p.id}'" style="cursor: pointer;">
      <div class="product-card-image-wrap">
        <img src="${p.image}" class="product-card-img main-img" alt="${p.name}">
      </div>
      <div class="product-card-info">
        <h4 class="product-card-title">${p.name}</h4>
        <div class="product-card-meta">
          <span>${p.category}</span>
          <span class="product-card-price">$${p.price.toLocaleString()} USD</span>
        </div>
      </div>
    </div>
  `).join("");
}

/* Mobile Hamburger Menu */
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const drawer = document.getElementById("mobile-menu-drawer");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      drawer.classList.toggle("active");
    });
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  if (drawer) drawer.classList.remove("active");
}

/* Newsletter Form Handler */
function initNewsletterForm() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input");
      if (input && input.value) {
        alert(`Thank you for subscribing to Alexander McQueen Private Communications. Confirmation sent to ${input.value}`);
        input.value = "";
      }
    });
  });
}
