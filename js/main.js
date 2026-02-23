/* ============================================
   Wake Wonder - Main JavaScript
   ============================================ */

// --- Prefers reduced motion ---
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// --- Throttle utility ---
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// --- Loading screen ---
const loading = document.getElementById("loading");
if (loading) {
  window.addEventListener("load", () => {
    loading.classList.add("hidden");
    setTimeout(() => loading.remove(), 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation ---
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const mobileOverlay = document.getElementById("mobileOverlay");

  const closeMobileNav = () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("open");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
    hamburger.setAttribute("aria-expanded", "false");
  };

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
      mobileOverlay.classList.toggle("active");
      document.body.style.overflow = mobileNav.classList.contains("open")
        ? "hidden"
        : "";

      const isOpen = mobileNav.classList.contains("open");
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    mobileOverlay.addEventListener("click", closeMobileNav);

    document
      .querySelectorAll(".mobile-nav__link, .mobile-nav__contact")
      .forEach((link) => {
        link.addEventListener("click", closeMobileNav);
      });

    // Close mobile nav with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        closeMobileNav();
      }
    });
  }

  // --- Header scroll effect ---
  const header = document.getElementById("header");

  // --- Page-top button ---
  const pageTop = document.getElementById("pageTop");

  // --- Combined throttled scroll handler ---
  window.addEventListener("scroll", throttle(() => {
    const currentScroll = window.scrollY;

    // Header shadow
    if (header) {
      if (currentScroll > 100) {
        header.style.boxShadow = "0 2px 16px rgba(0, 0, 0, 0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    }

    // Page-top button visibility
    if (pageTop) {
      if (currentScroll > 400) {
        pageTop.classList.add("visible");
      } else {
        pageTop.classList.remove("visible");
      }
    }
  }, 100));

  if (pageTop) {
    pageTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Fade-in animation on scroll ---
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => fadeObserver.observe(el));

  // --- Counter animation ---
  const counterElements = document.querySelectorAll("[data-count]");
  if (counterElements.length) {
    // Helper: safely update counter value using textContent (no innerHTML)
    const updateCounter = (el, value, unitEl) => {
      const textNode = el.firstChild;
      const displayValue = value >= 10000 ? value.toLocaleString() : String(value);
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = displayValue;
      } else {
        // First update: clear and rebuild safely
        while (el.firstChild && el.firstChild !== unitEl) {
          el.removeChild(el.firstChild);
        }
        el.insertBefore(document.createTextNode(displayValue), unitEl || null);
      }
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const unitEl = el.querySelector(".unit");

            // If user prefers reduced motion, set final value immediately
            if (prefersReducedMotion) {
              updateCounter(el, target, unitEl);
              counterObserver.unobserve(el);
              return;
            }

            const duration = 2000;
            const start = performance.now();

            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * target);

              updateCounter(el, current, unitEl);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((el) => counterObserver.observe(el));
  }

  // --- Active nav link ---
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header-nav__link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });

  // --- Hero entrance animation ---
  const hero = document.querySelector(".hero");
  if (hero && !prefersReducedMotion) {
    const heroContent = hero.querySelector(".hero-content");
    const heroVisual = hero.querySelector(".hero-visual");

    if (heroContent) {
      heroContent.style.opacity = "0";
      heroContent.style.transform = "translateY(30px)";
      heroContent.style.transition = "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

      setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
      }, 300);
    }

    if (heroVisual) {
      heroVisual.style.opacity = "0";
      heroVisual.style.transform = "translateY(40px) scale(0.95)";
      heroVisual.style.transition = "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)";

      setTimeout(() => {
        heroVisual.style.opacity = "1";
        heroVisual.style.transform = "translateY(0) scale(1)";
      }, 600);
    }
  }
});
