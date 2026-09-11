/**
 * THE MCQUEEN ATELIER REVEAL INTERACTION ENGINE
 * Handles kinetic text sequences, fabric veil masks, and blueprint hotspots
 */

class AtelierEngine {
  constructor() {
    this.currentProduct = null;
    this.init();
  }

  init() {
    this.createModalDOM();
  }

  createModalDOM() {
    if (document.getElementById("atelier-modal-overlay")) return;

    const modalHTML = `
      <div id="atelier-modal-overlay" class="atelier-modal-overlay">
        <div class="atelier-modal-header">
          <div style="display: flex; align-items: center; gap: 16px;">
            <span style="font-family: var(--font-sans); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--accent-gold); font-weight: 700;">DIGITAL STUDIO</span>
            <h3 class="atelier-modal-title">THE MCQUEEN ATELIER</h3>
          </div>
          <button class="atelier-close-btn" onclick="window.atelierEngine.close()">Close Studio [ESC]</button>
        </div>
        
        <div class="atelier-workspace">
          <div class="atelier-stage">
            <div id="atelier-fabric-veil" class="atelier-fabric-veil">
              <div id="kinetic-text-step-1" class="kinetic-text-step">CRAFTED WITH INTENT.</div>
              <div id="kinetic-text-step-2" class="kinetic-text-step" style="font-style: italic; margin-top: 16px;">FORM. CUT. SILHOUETTE.</div>
            </div>
            
            <div class="atelier-blueprint-image-container">
              <img id="atelier-blueprint-img" src="" alt="Atelier Blueprint" class="atelier-blueprint-img">
              <div id="atelier-hotspots-layer"></div>
            </div>
          </div>

          <div class="atelier-sidebar">
            <div>
              <div class="atelier-meta-tag">SAVOIR-FAIRE INSPECTION</div>
              <h2 id="atelier-title" class="atelier-title">THE MANTA SILHOUETTE</h2>
              <p id="atelier-subtitle" style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 24px; font-weight: 600;"></p>
              <p id="atelier-quote" class="atelier-quote"></p>
              
              <div id="hotspot-detail-box" class="hotspot-detail-box">
                <h4 id="hotspot-detail-title" class="hotspot-detail-title">SELECT AN ARTISAN PIN</h4>
                <p id="hotspot-detail-text" class="hotspot-detail-text">Click on any blueprint marker across the garment to reveal construction details, pattern drafting methods, and material origins.</p>
              </div>
            </div>

            <div>
              <span class="label-uppercase">CRAFTED IN ITALY & FRANCE</span>
              <div style="display: flex; gap: 12px; margin-top: 16px;">
                <button class="btn btn-primary" style="flex: 1;" onclick="window.atelierEngine.addCurrentToCart()">Add To Shopping Bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Keydown listener for ESC key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  }

  launch(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
    this.currentProduct = product;

    const overlay = document.getElementById("atelier-modal-overlay");
    const veil = document.getElementById("atelier-fabric-veil");
    const step1 = document.getElementById("kinetic-text-step-1");
    const step2 = document.getElementById("kinetic-text-step-2");
    
    const blueprintImg = document.getElementById("atelier-blueprint-img");
    const titleEl = document.getElementById("atelier-title");
    const subtitleEl = document.getElementById("atelier-subtitle");
    const quoteEl = document.getElementById("atelier-quote");
    const hotspotsLayer = document.getElementById("atelier-hotspots-layer");

    if (!overlay || !product.atelier) return;

    // Reset veil
    veil.classList.remove("revealed");
    step1.classList.remove("visible");
    step2.classList.remove("visible");

    // Fill metadata
    blueprintImg.src = product.image;
    titleEl.textContent = product.atelier.title;
    subtitleEl.textContent = product.atelier.subtitle;
    quoteEl.textContent = `"${product.atelier.quote}"`;

    // Render Hotspots
    hotspotsLayer.innerHTML = product.atelier.hotspots.map((hs, index) => `
      <div class="blueprint-hotspot" style="left: ${hs.x}%; top: ${hs.y}%;" onclick="window.atelierEngine.selectHotspot(${index})" title="${hs.title}"></div>
    `).join("");

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Kinetic Animation Sequence
    setTimeout(() => step1.classList.add("visible"), 200);
    setTimeout(() => step2.classList.add("visible"), 800);
    setTimeout(() => {
      veil.classList.add("revealed");
      // Auto-select first hotspot
      if (product.atelier.hotspots.length > 0) {
        this.selectHotspot(0);
      }
    }, 1800);
  }

  selectHotspot(index) {
    if (!this.currentProduct || !this.currentProduct.atelier) return;
    const hs = this.currentProduct.atelier.hotspots[index];
    if (!hs) return;

    // Update active pin styling
    const pins = document.querySelectorAll(".blueprint-hotspot");
    pins.forEach((p, idx) => {
      p.classList.toggle("active", idx === index);
    });

    const titleEl = document.getElementById("hotspot-detail-title");
    const textEl = document.getElementById("hotspot-detail-text");

    if (titleEl && textEl) {
      titleEl.textContent = hs.title;
      textEl.textContent = hs.text;
    }
  }

  addCurrentToCart() {
    if (this.currentProduct) {
      window.cartEngine.addItem(this.currentProduct.id);
      this.close();
    }
  }

  close() {
    const overlay = document.getElementById("atelier-modal-overlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

window.atelierEngine = new AtelierEngine();
