// Leaflet-kaart
var map = L.map('map').setView([51.9194, 4.4886], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([51.9194, 4.4886]).addTo(map)
  .bindPopup('Blaak, Rotterdam')
  .openPopup();
