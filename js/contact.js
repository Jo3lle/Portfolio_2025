document.addEventListener("DOMContentLoaded", () => {
    console.log("Welkom op de contactpagina van Donatella!");
  
    // Alert bij klikken op de titel "Get In Touch"
    const getInTouchTitle = document.querySelector("h2.text-purple.mb-4");
    if (getInTouchTitle) {
      getInTouchTitle.style.cursor = "pointer";
      getInTouchTitle.addEventListener("click", () => {
        alert("Neem gerust contact met mij op via het formulier of mijn socials!");
      });
    }
  
    // Alert bij submit contactformulier (voor test)
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // voorkom echte submit
        alert("Bedankt voor je bericht! Ik neem zo snel mogelijk contact op.");
        contactForm.reset(); // formulier leegmaken
      });
    }
  
    // Map initialiseren
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
      const map = L.map('map').setView([51.9225, 4.47917], 13); // Blaak Rotterdam coords
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
  
      L.marker([51.9225, 4.47917]).addTo(map)
        .bindPopup('Blaak, Rotterdam')
        .openPopup();
    }
  });
  