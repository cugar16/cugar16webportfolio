// Shared navigation/footer components keep all pages consistent.
// This works when the project is served through Live Server or a web server.
const navbarMarkup = `
<nav class="navbar navbar-expand-lg site-nav">
  <div class="container">
    <a class="brand" href="index.html" aria-label="Echefu Chukwuemeka home"><span class="brand-mark"></span> Echefu Chukwuemeka<span class="brand-dot">.</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="portfolio.html">Portfolio</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`;

const footerMarkup = `
<footer class="site-footer"><div class="container footer-inner">
  <a class="footer-brand" href="index.html">Echefu Chukwuemeka<span>.</span></a>
  <span>© <span id="currentYear"></span> Echefu Chukwuemeka. Built with intention.</span>
  <div class="footer-links"><a href="portfolio.html">Work</a><a href="about.html">About</a><a href="contact.html">Contact</a></div>
</div></footer>`;

document.querySelectorAll('[data-include="navbar"]').forEach(el => {
  el.outerHTML = navbarMarkup;
});
document.querySelectorAll('[data-include="footer"]').forEach(el => {
  el.outerHTML = footerMarkup;
});

const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();

// Highlight the active page in the navigation.
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav .nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// Front-end demo validation only. Connect a backend or form provider to receive messages.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const feedback = document.getElementById("formFeedback");
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    feedback.textContent = "Thanks! The form looks valid, but this demo is not connected to a message service yet.";
    contactForm.reset();
  });
}
