// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("main section[id]");
const linkMap = new Map(
  Array.from(navLinks.querySelectorAll("a")).map((a) => [a.getAttribute("href").slice(1), a])
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = linkMap.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        linkMap.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -40% 0px" }
);

sections.forEach((section) => observer.observe(section));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
