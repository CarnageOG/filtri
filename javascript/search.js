// ფილტრის გასუფთვება
function resetFilters() {
  // ჩეკბოქსები
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

  // ტექსტური ველები
  document.querySelectorAll('input[type="text"]').forEach(input => input.value = "");

  // წლების ღილაკებიდან კლასის მოცილება
  document.querySelectorAll('.year-button.selected').forEach(btn => {
    btn.classList.remove('selected');
  });
}

// ინდუსტიტია
const industryDropdown = document.getElementById("industryDropdown");
const industryToggleBtn = industryDropdown.querySelector(".industry-toggle");

industryToggleBtn.addEventListener("click", () => {
  industryDropdown.classList.toggle("active");
});

// რეგიონი
const regionDropdown = document.getElementById("regionDropdown");
const regionToggleBtn = regionDropdown.querySelector(".region-toggle");

regionToggleBtn.addEventListener("click", () => {
  regionDropdown.classList.toggle("active");
});

// ბიზნეს მოდელი
const businessDropdown = document.getElementById("businessDropdown");
const businessToggleBtn = businessDropdown.querySelector(".business-toggle");

businessToggleBtn.addEventListener("click", () => {
  businessDropdown.classList.toggle("active");
});

// დაფინანსების წყარო
const financingDropdown = document.getElementById("financingDropdown");
const financingToggleBtn = financingDropdown.querySelector(".financing-toggle");

financingToggleBtn.addEventListener("click", () => {
  financingDropdown.classList.toggle("active");
});

// კატეგორია
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.main-category-checkbox').forEach(category => {
    category.addEventListener('change', function () {
      const targetId = this.dataset.target;
      const group = document.getElementById(targetId);
      if (group) {
        const checkboxes = group.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = this.checked);
      }
    });
  });

  const filterTitle = document.querySelector('.filter-title');
  filterTitle.addEventListener('click', function () {
    const container = document.getElementById('filterBox');
    container.classList.toggle('active');
  });
});

// დაარსების თარიღი

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector('.data-toggle');
  const parentData = document.querySelector('.data');
  const yearGrid = document.querySelector('.year-grid');
  const selectedYears = new Set();

  toggleButton.addEventListener('click', function () {
    parentData.classList.toggle('active');
  });

  for (let year = 1998; year <= 2025; year++) {
    const btn = document.createElement('button');
    btn.textContent = year;
    btn.classList.add('year-button');

    btn.addEventListener('click', (e) => {
      e.stopPropagation(); 

      btn.classList.toggle('selected');

      if (selectedYears.has(year)) {
        selectedYears.delete(year);
      } else {
        selectedYears.add(year);
      }

      console.log("მონიშნული წლები:", Array.from(selectedYears));
    });

    yearGrid.appendChild(btn);
  }
});

// დაარსების თარიღი სერჩი

document.addEventListener("DOMContentLoaded", function () {
  const dataSearch = document.getElementById("datasearchDropdown");
  const toggleButton = dataSearch.querySelector(".data-search-toggle");
  const dropdownContent = dataSearch.querySelector(".dropdown-content");
  const yearInput = document.getElementById("yearInput");

  toggleButton.addEventListener("click", function () {
    dataSearch.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!dataSearch.contains(e.target)) {
      dataSearch.classList.remove("active");
    }
  });

  yearInput.addEventListener("input", function () {
    const year = yearInput.value.trim();
    console.log("შეყვანილი წელი:", year);
  });
});