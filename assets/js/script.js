// view mobile hamburger
document.addEventListener("DOMContentLoaded", () => {
  const offcanvasElement = document.getElementById("navbarNav");
  const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

  // Tutup offcanvas saat item menu diklik
  offcanvasElement.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      offcanvas.hide(); // Perintah untuk menutup offcanvas
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Step navigation
  const wizardSteps = document.querySelectorAll(".wizard-steps li");
  const steps = document.querySelectorAll(".step");
  const projectCards = document.querySelectorAll(".project-card");

  wizardSteps.forEach((step) => {
    step.addEventListener("click", () => {
      const targetStep = step.getAttribute("data-step");
      showStep(targetStep);
    });
  });

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      showStep(2); // Move to description step
    });
  });

  document.querySelectorAll(".prev-step").forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = document.querySelector(
        '.step:not([style*="display: none"])'
      );
      const prevStep = parseInt(currentStep.getAttribute("data-step")) - 1;
      if (prevStep >= 1) showStep(prevStep);
    });
  });

  document.querySelectorAll(".next-step").forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentStep = document.querySelector(
        '.step:not([style*="display: none"])'
      );
      const nextStep = parseInt(currentStep.getAttribute("data-step")) + 1;
      if (nextStep <= steps.length) showStep(nextStep);
    });
  });

  function showStep(stepNumber) {
    steps.forEach((step) => (step.style.display = "none"));
    document.querySelector(`.step[data-step="${stepNumber}"]`).style.display =
      "block";
    wizardSteps.forEach((step) => step.classList.remove("active"));
    document
      .querySelector(`.wizard-steps li[data-step="${stepNumber}"]`)
      .classList.add("active");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const deadlineCards = document.querySelectorAll(".deadline-card");
    const deadlineDateInput = document.getElementById("deadlineDate");

    // Set tanggal default ke hari ini
    const today = new Date().toISOString().split("T")[0];
    deadlineDateInput.value = today;

    // Tambahkan event listener ke setiap card
    deadlineCards.forEach((card) => {
      card.addEventListener("click", () => {
        // Hapus status active dari semua card
        deadlineCards.forEach((c) => c.classList.remove("active"));

        // Tambahkan status active ke card yang dipilih
        card.classList.add("active");

        // Logika tambahan
        if (card.dataset.type === "flexible") {
          console.log("Deadline saya fleksibel dipilih.");
        } else if (card.dataset.type === "date") {
          console.log("Tanggal dipilih:", deadlineDateInput.value);
        }
      });
    });
  });
});
