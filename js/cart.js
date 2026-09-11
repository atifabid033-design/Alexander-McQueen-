/**
 * LUXURY SHOPPING BAG ENGINE
 * LocalStorage sync, drawer UI rendering, subtotal calculation
 */

class CartEngine {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("mcqueen_cart") || "[]");
    this.init();
  }

  init() {
    this.renderCartDrawer();
    this.updateBadges();
  }

  save() {
    localStorage.setItem("mcqueen_cart", JSON.stringify(this.cart));
    this.updateBadges();
    this.renderCartDrawer();
  }

  addItem(productId, size = null, color = null) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = size || (product.sizes ? product.sizes[0] : "One Size");
    const selectedColor = color || product.color;

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === selectedSize && item.color === selectedColor
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: selectedColor,
        size: selectedSize,
        quantity: 1
      });
    }

    this.save();
    this.openDrawer();
  }

  removeItem(index) {
    this.cart.splice(index, 1);
    this.save();
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.removeItem(index);
      } else {
        this.save();
      }
    }
  }

  getTotalCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateBadges() {
    const count = this.getTotalCount();
    document.querySelectorAll(".bag-count-badge").forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    });
  }

  openDrawer() {
    const overlay = document.getElementById("cart-drawer-overlay");
    if (overlay) {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  closeDrawer() {
    const overlay = document.getElementById("cart-drawer-overlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  renderCartDrawer() {
    const bodyContainer = document.getElementById("cart-drawer-items");
    const subtotalEl = document.getElementById("cart-subtotal");
    
    if (!bodyContainer) return;

    if (this.cart.length === 0) {
      bodyContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 12px;">Your Shopping Bag is empty</p>
          <p style="font-size: 0.85rem; margin-bottom: 24px;">Explore our Autumn / Winter 2026 Collection.</p>
          <a href="women.html" class="btn btn-outline" onclick="window.cartEngine.closeDrawer()">Explore Women</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "$0 USD";
      return;
    }

    bodyContainer.innerHTML = this.cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-title">${item.name}</h4>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">Color: ${item.color} | Size: ${item.size}</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px;">
            <div style="display: flex; align-items: center; border: 1px solid var(--border-subtle); padding: 2px 8px;">
              <button onclick="window.cartEngine.updateQuantity(${idx}, -1)" style="padding: 0 6px; font-weight: bold;">-</button>
              <span style="font-size: 0.8rem; padding: 0 8px;">${item.quantity}</span>
              <button onclick="window.cartEngine.updateQuantity(${idx}, 1)" style="padding: 0 6px; font-weight: bold;">+</button>
            </div>
            <span style="font-weight: 600; font-size: 0.9rem;">$${(item.price * item.quantity).toLocaleString()} USD</span>
          </div>
          <button onclick="window.cartEngine.removeItem(${idx})" style="align-self: flex-start; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); margin-top: 6px; border-bottom: 1px solid var(--border-subtle);">Remove</button>
        </div>
      </div>
    `).join("");

    if (subtotalEl) {
      subtotalEl.textContent = `$${this.getSubtotal().toLocaleString()} USD`;
    }
  }
}

window.cartEngine = new CartEngine();
