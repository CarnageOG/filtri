const dropdown = document.getElementById("industryDropdown");
  const toggleBtn = dropdown.querySelector(".dropdown-toggle");

  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });