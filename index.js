document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y analizado");
  // Selecciona las secciones
  const photosSection = document.getElementById('photos-section');
  const streetSection = document.getElementById('street-section');
  const videosSection = document.getElementById('videos-section');

  // Al cargar la página, oculta las secciones de "Street" y "Videos"
  streetSection.style.display = 'none';
  videosSection.style.display = 'none';

  // Asegúrate de que la sección de "Photos" esté visible
  photosSection.style.display = 'block';
    // FOTOS photo
    const photos = [
        { id: 1, nombre: "Foto 1", descripcion: "MINATO", url: "img/Work/0.jpg" },
        { id: 2, nombre: "Foto 2", descripcion: "MINATO", url: "img/Work/1.jpg" },
        { id: 3, nombre: "Foto 2", descripcion: "MINATO", url: "img/Work/2.jpg" },
        { id: 4, nombre: "Foto 3", descripcion: "MINATO", url: "img/Work/3.jpg" },
        { id: 5, nombre: "Foto 3", descripcion: "MINATO", url: "img/Work/4.jpg" },
        { id: 6, nombre: "Foto 4", descripcion: "MINATO", url: "img/Work/5.jpg" },
        { id: 7, nombre: "Foto 5", descripcion: "MINATO", url: "img/Work/6.jpg" },
        { id: 8, nombre: "Foto 6", descripcion: "MINATO", url: "img/Work/7.jpg" },
        { id: 9, nombre: "Foto 6", descripcion: "MINATO", url: "img/Work/8.jpg" },
        { id: 10, nombre: "Foto 7", descripcion: "MINATO", url: "img/Work/9.jpg" },
        { id: 11, nombre: "Foto 8", descripcion: "MINATO", url: "img/Work/10.jpg" },
        { id: 12, nombre: "Foto 9", descripcion: "MINATO", url: "img/Work/11.jpg" },
        { id: 13, nombre: "Foto 9", descripcion: "MINATO", url: "img/Work/12.jpg" },
        { id: 14, nombre: "Foto 11", descripcion: "MINATO", url: "img/Work/13.jpg" },
        { id: 15, nombre: "Foto 12", descripcion: "MINATO", url: "img/Work/14.jpg" },
        { id: 16, nombre: "Foto 13", descripcion: "MINATO", url: "img/Work/15.jpg" },
        { id: 17, nombre: "Foto 14", descripcion: "MINATO", url: "img/Work/16.jpg" },
        { id: 18, nombre: "Foto 15", descripcion: "MINATO", url: "img/Work/17.jpg" },
        { id: 19, nombre: "Foto 16", descripcion: "MINATO", url: "img/Work/18.jpeg" },
        { id: 20, nombre: "Foto 17", descripcion: "MINATO", url: "img/Work/19.jpg" },
        { id: 21, nombre: "Foto 18", descripcion: "MINATO", url: "img/Work/20.jpg" },
        { id: 22, nombre: "Foto 19", descripcion: "MINATO", url: "img/Work/21.jpg" },
        { id: 23, nombre: "Foto 20", descripcion: "MINATO", url: "img/Work/22.jpg" },
        { id: 24, nombre: "Foto 21", descripcion: "MINATO", url: "img/Work/23.jpg" },
        { id: 25, nombre: "Foto 22", descripcion: "MINATO", url: "img/Work/24.jpg" }

    ];
    // FOTOS STREET
    const photosStreet = [
        { id: 1, nombre: "Foto 1", descripcion: "MINATO", url: "img/street/0.jpg" },
        { id: 2, nombre: "Foto 2", descripcion: "MINATO", url: "img/street/1.jpg" },
        { id: 3, nombre: "Foto 3", descripcion: "MINATO", url: "img/street/2.jpg" },
        { id: 4, nombre: "Foto 4", descripcion: "MINATO", url: "img/street/3.jpg" },
        { id: 5, nombre: "Foto 5", descripcion: "MINATO", url: "img/street/4.jpg" },
        { id: 6, nombre: "Foto 6", descripcion: "MINATO", url: "img/street/5.jpg" },
        { id: 7, nombre: "Foto 7", descripcion: "MINATO", url: "img/street/6.jpg" },
        { id: 8, nombre: "Foto 8", descripcion: "MINATO", url: "img/street/7.jpg" },
        { id: 9, nombre: "Foto 9", descripcion: "MINATO", url: "img/street/8.jpg" },
        { id: 10, nombre: "Foto 10", descripcion: "MINATO", url: "img/street/9.jpg" },
        { id: 11, nombre: "Foto 11", descripcion: "MINATO", url: "img/street/10.jpg" },
        { id: 12, nombre: "Foto 12", descripcion: "MINATO", url: "img/street/11.jpg" },
        { id: 13, nombre: "Foto 13", descripcion: "MINATO", url: "img/street/12.jpg" },
        { id: 14, nombre: "Foto 14", descripcion: "MINATO", url: "img/street/13.jpg" },
        { id: 15, nombre: "Foto 15", descripcion: "MINATO", url: "img/street/14.jpg" },
        { id: 16, nombre: "Foto 16", descripcion: "MINATO", url: "img/street/15.jpg" },
        { id: 17, nombre: "Foto 17", descripcion: "MINATO", url: "img/street/16.jpg" },
        { id: 18, nombre: "Foto 18", descripcion: "MINATO", url: "img/street/17.jpg" },
        { id: 19, nombre: "Foto 19", descripcion: "MINATO", url: "img/street/18.jpg" },
        { id: 20, nombre: "Foto 20", descripcion: "MINATO", url: "img/street/19.jpg" },
        { id: 21, nombre: "Foto 21", descripcion: "MINATO", url: "img/street/20.jpg" },
        { id: 22, nombre: "Foto 22", descripcion: "MINATO", url: "img/street/21.jpg" },
        { id: 23, nombre: "Foto 23", descripcion: "MINATO", url: "img/street/22.jpg" },
        { id: 24, nombre: "Foto 24", descripcion: "MINATO", url: "img/street/23.jpg" },
        { id: 25, nombre: "Foto 24", descripcion: "MINATO", url: "img/street/24.jpg" }
    ];

   // VIDEOS convertidos a imágenes con enlaces de YouTube
    const videos = [
    { id: 1, nombre: "Video 2", descripcion: "MINATO", url: "img/videos/2.png", youtubeUrl: "https://youtu.be/NVZYmpVS8ds?si=zBPEOdRYqjOcRogq" },
    { id: 2, nombre: "Video 1", descripcion: "MINATO", url: "img/videos/1.png", youtubeUrl: "https://youtu.be/gOunvJhnC2Q?si=gre5AIyBF_gt-1NG" },
    { id: 3, nombre: "Video 1", descripcion: "MINATO", url: "img/videos/3.png", youtubeUrl: "https://youtu.be/4h-l3d0Dpo4?si=r9BIY80CsWvV9ycI" },
    { id: 4, nombre: "Video 2", descripcion: "MINATO", url: "img/videos/4.png", youtubeUrl: "https://www.instagram.com/reel/Cy4FrMKOPi7/?igsh=YWprM3VrY2JybnI3" },

    // ... más videos
];

const mediaGridPhotos = document.querySelector('#photos-section .media-grid');
const mediaGridStreet = document.querySelector('#street-section .media-grid');
const mediaGridVideos = document.querySelector('#videos-section .media-grid');

// Función para renderizar medios
function renderMedia(mediaArray, container) {
    container.innerHTML = '';
    mediaArray.forEach(media => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = media.url;
        img.alt = media.descripcion;

        // Añadir clases para hacer las imágenes responsivas
        img.classList.add('responsive-image');
        
        listItem.appendChild(img);

        if (media.youtubeUrl) {
            listItem.addEventListener('click', () => {
                window.open(media.youtubeUrl, '_blank');
            });
        } else {
            listItem.addEventListener('click', () => {
                enlargeImage(media.url);
            });
        }

        container.appendChild(listItem);
    });
}

// Renderizar cada sección
renderMedia(photos, mediaGridPhotos);
renderMedia(photosStreet, mediaGridStreet);
renderMedia(videos, mediaGridVideos);

// Función para ampliar imágenes
const overlay = document.getElementById('image-overlay');
const enlargedImage = document.getElementById('enlarged-image');

function enlargeImage(url) {
    enlargedImage.src = url;
    overlay.style.display = 'flex'; // Cambia a 'flex' para centrar la imagen
    enlargedImage.style.maxWidth = '90%'; // Ajusta el tamaño en función de la pantalla
    enlargedImage.style.maxHeight = '90%'; // Asegúrate de que no exceda la pantalla
}

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Manejo de la navegación entre secciones
const navLinks = document.querySelectorAll(".header-nav a");
const sections = document.querySelectorAll("main > section");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.id.replace("-link", "-section");
        sections.forEach(section => {
            section.style.display = section.id === targetId ? "block" : "none";
        });
    });
});
});