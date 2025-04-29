// Industry Dropdown Toggle
const industryDropdown = document.getElementById("industryDropdown");
const industryToggleBtn = industryDropdown.querySelector(".industry-toggle");

industryToggleBtn.addEventListener("click", () => {
  industryDropdown.classList.toggle("active");
});

// Region Dropdown Toggle
const regionDropdown = document.getElementById("regionDropdown");
const regionToggleBtn = regionDropdown.querySelector(".region-toggle");

regionToggleBtn.addEventListener("click", () => {
  regionDropdown.classList.toggle("active");
});

// Business model Dropdown Toggle
const businessDropdown = document.getElementById("businessDropdown");
const businessToggleBtn = businessDropdown.querySelector(".business-toggle");

businessToggleBtn.addEventListener("click", () => {
  businessDropdown.classList.toggle("active");
});

// Financing Dropdown Toggle
const financingDropdown = document.getElementById("financingDropdown");
const financingToggleBtn = financingDropdown.querySelector(".financing-toggle");

financingToggleBtn.addEventListener("click", () => {
  financingDropdown.classList.toggle("active");
});

// კატეგორია

// აკავშირებს მთავარ კატეგორიებს ქვეკატეგორიებთან
document.querySelectorAll('.main-category-checkbox').forEach(category => {
  category.addEventListener('change', function () {
    const targetId = this.dataset.target;
    const group = document.getElementById(targetId);
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = this.checked);
  });
});

// ღილაკის დაკლიკებით ცვლის active კლასს
function toggleContent() {
  const container = document.getElementById('filterBox');
  container.classList.toggle('active');
}