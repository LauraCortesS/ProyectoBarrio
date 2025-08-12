// Coordenadas Plaza de Bolívar (Bogotá)
const BosquePopular = [4.670281649609675, -74.09640553419669;

// Inicializar el mapa centrado en Plaza de Bolívar
const map = L.map('map').setView(BosquePopular, 16);

// Cargar capa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cargar archivo GPX (debe estar en la raíz del proyecto)
const gpxFile = 'ruta.gpx';

// Lista de marcadores con imágenes (sin descripciones)
const puntosConImagenes = [
    { img: 'img_1.jpg', descripcion: '' },
    { img: 'img_2.jpg', descripcion: '' },

];

// Agregar marcadores con popups que muestran solo imágenes
puntosConImagenes.forEach(punto => {
    const marker = L.marker(punto.coords).addTo(map);
    marker.bindPopup(`
        <img src="${punto.img}" alt="Foto" style="width:200px; border-radius:8px;">
    `);
});
