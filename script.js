// ===== Gallery Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll(".gallery-slide");
const slidesContainer = document.getElementById("gallerySlides");
const dotsContainer = document.getElementById("galleryDots");

// Create dots
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });
}

// Move slide
function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
}

// Go to specific slide
function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Update slider display
function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Auto slide every 5 seconds
function startAutoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 5000);
}

// Initialize gallery
createDots();
startAutoSlide();

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show success message
  alert(
    "Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera."
  );

  // Reset form
  this.reset();
});

// ===== Smooth Scrolling =====
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile menu if open
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    }
  });
});
