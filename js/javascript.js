document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-button");
  const tabContents = document.querySelectorAll(".tab-content");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and tabs
      navButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((tab) => tab.classList.remove("active"));

      // Add active class to clicked button and corresponding tab
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");

      // Add button click sound effect (visual feedback)
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 100);
    });
  });

  // Project card click handler
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank");
      }
    });
  });

  // Add hover effects to skill items
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.color = "#ffd966";
    });

    item.addEventListener("mouseleave", function () {
      this.style.color = "#ffb000";
    });
  });

  // Form submission handler
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation and feedback
    const inputs = this.querySelectorAll("input, textarea");
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.borderColor = "#ff6600";
      } else {
        input.style.borderColor = "#ffb000";
      }
    });

    if (allFilled) {
      const button = this.querySelector(".btn-primary");
      const originalText = button.textContent;
      button.textContent = "MESSAGE SENT!";
      button.style.background = "#ffd966";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "#ffb000";
        inputs.forEach((input) => (input.value = ""));
      }, 2000);
    }
  });

  // Add typing effect to the main title
  const title = document.querySelector(".header h1");
  const originalTitle = title.textContent;
  title.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < originalTitle.length) {
      title.textContent += originalTitle.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 500);
});
currentYear = new Date().getFullYear();

const age = document.querySelector("#age");
age.innerHTML = currentYear - 1998;
console.log(age);
