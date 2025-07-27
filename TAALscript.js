// ✅ Wait for full DOM load
document.addEventListener("DOMContentLoaded", () => {

  // 🔥 Highlight nav link while scrolling
  const sections = document.querySelectorAll("main > section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 🌿 Accordion logic
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((acc) => {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // 🌊 Human Impact Analysis Tabs
  const impactTabButtons = document.querySelectorAll(".impact-tab-btn");
  const impactTabContents = document.querySelectorAll(".impact-tab-content");

  impactTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active from all buttons + contents
      impactTabButtons.forEach((b) => b.classList.remove("active"));
      impactTabContents.forEach((c) => c.classList.remove("active"));

      // Add active to the clicked button and its tab content
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

});