// ინდუსტრია //
const dropdown = document.getElementById("industryDropdown");
  const toggleBtn = dropdown.querySelector(".industry-toggle");

  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });