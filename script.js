// Simulated data for subsidy schemes
const subsidySchemes = [
  { name: "1. Pradhan Mantri Kisan Maandhan Yojna ", description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode." },
  { name: "2. Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)", description: "Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund. " },
  { name: "3. Pradhan Mantri Fasal Bima Yojana (PMFBY)", description: "PMFBY was launched in 2016 in order to provide a simple and affordable crop insurance product to ensure comprehensive risk cover for crops to farmers against all non-preventable natural risks from pre-sowing to post-harvest and to provide adequate claim amount." }
];

// Function to dynamically load subsidy schemes
function loadSchemes() {
  const schemeList = document.getElementById('schemeList');
  subsidySchemes.forEach(scheme => {
      const schemeItem = document.createElement('div');
      schemeItem.innerHTML = `<h3>${scheme.name}</h3><p>${scheme.description}</p>`;
      schemeList.appendChild(schemeItem);
  });
}

// Function to smoothly scroll to a section when a navigation link is clicked
function smoothScroll(target, duration) {
  const targetSection = document.querySelector(target);
  const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Smooth scroll functionality for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute('href');
      smoothScroll(targetSection, 1000);
  });
});

// Load subsidy schemes when the page is loaded
document.addEventListener('DOMContentLoaded', loadSchemes);
