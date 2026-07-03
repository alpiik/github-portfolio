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

// Copy email to clipboard
const copyEmailBtn = document.getElementById("copy-email");
if (copyEmailBtn) {
  const email = copyEmailBtn.dataset.email;
  const originalLabel = copyEmailBtn.textContent;
  let widthLocked = false;

  copyEmailBtn.addEventListener("click", async () => {
    if (!widthLocked) {
      copyEmailBtn.style.minWidth = `${copyEmailBtn.offsetWidth}px`;
      widthLocked = true;
    }
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Fallback for browsers without Clipboard API support
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    copyEmailBtn.textContent = "Copied!";
    copyEmailBtn.classList.add("copied");
    setTimeout(() => {
      copyEmailBtn.textContent = originalLabel;
      copyEmailBtn.classList.remove("copied");
    }, 1800);
  });
}
