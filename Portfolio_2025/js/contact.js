document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([51.9225, 4.47917], 13); // Blaak, Rotterdam

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  L.marker([51.9225, 4.47917]).addTo(map)
    .bindPopup('Blaak, Rotterdam')
    .openPopup();
});
