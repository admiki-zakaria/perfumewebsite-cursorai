/* ============================================================
   MAISON LUMIÈRE — Interactions & Effects
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById("preloader");

  function finishPreload() {
    preloader.classList.add("is-done");
    document.body.classList.add("is-loaded");
    setTimeout(() => preloader.remove(), 900);
  }

  window.addEventListener("load", () => setTimeout(finishPreload, 650));
  setTimeout(finishPreload, 4200); // safety: never trap the user

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursor-dot");

  if (cursor && cursorDot && window.matchMedia("(hover: hover)").matches) {
    let mx = innerWidth / 2, my = innerHeight / 2;
    let cx = mx, cy = my;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    (function followLoop() {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(followLoop);
    })();

    const hoverSelector = "a, button, [data-hover], input";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverSelector)) cursor.classList.add("is-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverSelector)) cursor.classList.remove("is-hover");
    });
  }

  /* ---------- Scroll progress + header ---------- */
  const progressBar = document.getElementById("scroll-progress-bar");
  const header = document.getElementById("header");

  function onScroll() {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = height > 0 ? (scrollTop / height) * 100 + "%" : "0%";
    header.classList.toggle("is-scrolled", scrollTop > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const burger = document.getElementById("nav-burger");
  const navList = document.getElementById("nav-list");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    navList.classList.toggle("is-open");
    document.body.style.overflow = navList.classList.contains("is-open") ? "hidden" : "";
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-open");
      navList.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll("[data-count]");

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => countObserver.observe(el));

  /* ---------- Hero parallax + bottle mouse tilt ---------- */
  const heroParallax = document.querySelectorAll("[data-parallax]");
  const heroBottle = document.getElementById("hero-bottle");

  if (!prefersReduced) {
    let rafId = null;
    let relX = 0, relY = 0, scrollY = 0;

    const applyParallax = () => {
      heroParallax.forEach((el) => {
        const depth = parseFloat(el.dataset.parallax);
        el.style.transform = `translate3d(${relX * -depth * 44}px, ${relY * -depth * 44 + scrollY * depth}px, 0)`;
      });
      rafId = null;
    };

    document.addEventListener("mousemove", (e) => {
      relX = e.clientX / innerWidth - 0.5;
      relY = e.clientY / innerHeight - 0.5;
      if (!rafId) rafId = requestAnimationFrame(applyParallax);
    });

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (!rafId) rafId = requestAnimationFrame(applyParallax);
    }, { passive: true });

    if (heroBottle) {
      const tilt = (e) => {
        const rect = heroBottle.getBoundingClientRect();
        const px = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const py = (e.clientY - rect.top - rect.height / 2) / rect.height;
        heroBottle.style.transform = `scale(1.02) perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 8}deg)`;
      };

      const reset = () => {
        heroBottle.style.transform = "";
      };

      const heroVisual = heroBottle.closest(".hero__visual");
      heroVisual.addEventListener("mousemove", tilt);
      heroVisual.addEventListener("mouseleave", reset);
    }
  }

  /* ---------- Card 3D tilt ---------- */
  const tiltCards = document.querySelectorAll("[data-tilt]");

  if (!prefersReduced && window.matchMedia("(hover: hover)").matches) {
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-py * 7}deg) rotateY(${px * 7}deg) translateY(-6px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Magnetic buttons ---------- */
  const magnets = document.querySelectorAll("[data-magnetic]");

  if (!prefersReduced && window.matchMedia("(hover: hover)").matches) {
    magnets.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- Newsletter form ---------- */
  const form = document.getElementById("newsletter-form");
  const note = document.getElementById("form-note");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    note.classList.remove("is-success", "is-error");

    if (!valid) {
      note.textContent = "Please enter a valid email address.";
      note.classList.add("is-error");
      return;
    }

    note.textContent = "Welcome to the Private Circle. Your invitation is on its way.";
    note.classList.add("is-success");
    form.reset();
  });
})();
