document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente cargado y analizado");

    // FOTOS photo
    const photos = [
        { id: 1, nombre: "Foto 1", descripcion: "MINATO", url: "img/Work/0.jpg" },
        { id: 2, nombre: "Foto 2", descripcion: "MINATO", url: "img/Work/1.jpeg" },
        { id: 3, nombre: "Foto 2", descripcion: "MINATO", url: "img/Work/2.jpg" },
        { id: 4, nombre: "Foto 3", descripcion: "MINATO", url: "img/Work/3.jpg" },
        { id: 5, nombre: "Foto 4", descripcion: "MINATO", url: "img/Work/5.jpg" },
        { id: 6, nombre: "Foto 5", descripcion: "MINATO", url: "img/Work/6.jpg" },
        { id: 7, nombre: "Foto 6", descripcion: "MINATO", url: "img/Work/7.jpg" },
        { id: 8, nombre: "Foto 7", descripcion: "MINATO", url: "img/Work/9.jpg" },
        { id: 9, nombre: "Foto 8", descripcion: "MINATO", url: "img/Work/10.jpg" },
        { id: 10, nombre: "Foto 9", descripcion: "MINATO", url: "img/Work/11.jpg" },
        { id: 11, nombre: "Foto 11", descripcion: "MINATO", url: "img/Work/13.jpg" },
        { id: 12, nombre: "Foto 12", descripcion: "MINATO", url: "img/Work/14.jpg" },
        { id: 13, nombre: "Foto 13", descripcion: "MINATO", url: "img/Work/15.jpg" },
        { id: 14, nombre: "Foto 14", descripcion: "MINATO", url: "img/Work/16.jpg" },
        { id: 15, nombre: "Foto 15", descripcion: "MINATO", url: "img/Work/17.jpg" },
        { id: 16, nombre: "Foto 16", descripcion: "MINATO", url: "img/Work/18.jpg" },
        { id: 17, nombre: "Foto 17", descripcion: "MINATO", url: "img/Work/19.jpg" },
        { id: 18, nombre: "Foto 18", descripcion: "MINATO", url: "img/Work/20.jpg" },
        { id: 19, nombre: "Foto 19", descripcion: "MINATO", url: "img/Work/21.jpg" },
        { id: 20, nombre: "Foto 20", descripcion: "MINATO", url: "img/Work/22.jpg" },
        { id: 21, nombre: "Foto 21", descripcion: "MINATO", url: "img/Work/23.jpg" },
        { id: 22, nombre: "Foto 22", descripcion: "MINATO", url: "img/Work/24.jpg" },
        { id: 23, nombre: "Foto 23", descripcion: "MINATO", url: "img/Work/25.jpg" },
        { id: 24, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/26.jpg" },
        { id: 25, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/27.jpg" },
        { id: 26, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/28.jpg" },
        { id: 27, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/29.jpg" },
        { id: 28, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/30.jpg" },
        { id: 29, nombre: "Foto 24", descripcion: "MINATO", url: "img/Work/31.jpg" },
        { id: 30, nombre: "Foto 10", descripcion: "MINATO", url: "img/Work/12.jpeg" },

    ];
    // FOTOS STREET
    const photosStreet = [
        { id: 1, nombre: "Foto 1", descripcion: "MINATO", url: "img/street/0.jpg" },
        { id: 2, nombre: "Foto 2", descripcion: "MINATO", url: "img/street/1.jpg" },
        { id: 3, nombre: "Foto 3", descripcion: "MINATO", url: "img/street/2.jpeg" },
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
        { id: 25, nombre: "Foto 25", descripcion: "MINATO", url: "img/street/24.jpg" },
        { id: 26, nombre: "Foto 26", descripcion: "MINATO", url: "img/street/25.jpg" },
        { id: 27, nombre: "Foto 27", descripcion: "MINATO", url: "img/street/26.jpg" },
        { id: 28, nombre: "Foto 28", descripcion: "MINATO", url: "img/street/27.jpg" },
        { id: 29, nombre: "Foto 29", descripcion: "MINATO", url: "img/street/28.jpg" },
        { id: 30, nombre: "Foto 30", descripcion: "MINATO", url: "img/street/29.jpg" },
        { id: 31, nombre: "Foto 31", descripcion: "MINATO", url: "img/street/30.jpg" },
        { id: 32, nombre: "Foto 32", descripcion: "MINATO", url: "img/street/31.jpg" }
    ];

    // VIDEOS
    const videos = [
        { id: 1, nombre: "Video 1", descripcion: "MINATO", url: "https://www.youtube.com/watch?v=NVZYmpVS8ds" },
        { id: 2, nombre: "Video 2", descripcion: "MINATO", url: "https://www.youtube.com/watch?v=5IdjGx9RMNk" },
        // ... más videos
    ];
    const mediaGridPhotos = document.querySelector('#photos-section .media-grid');
    const mediaGridStreet = document.querySelector('#street-section .media-grid');
    const mediaGridVideos = document.querySelector('#videos-section .media-gridv');
    const imageOverlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');

    function displayPhotos(photos, container) {
        console.log('Contenedor para fotos:', container); // Verifica el contenedor
        if (!container) {
            console.error('Container for photos is null');
            return;
        }
        container.innerHTML = '';
        photos.forEach(photo => {
            const mediaItem = document.createElement('li');
            mediaItem.classList.add('media-item');

            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.nombre;
            img.classList.add('thumbnail');

            const title = document.createElement('h3');
            title.textContent = photo.nombre;

            mediaItem.appendChild(img);
            mediaItem.appendChild(title);
            container.appendChild(mediaItem);

            img.addEventListener('click', function() {
                console.log("Imagen clickeada en sección:", container); // Verifica si el evento se dispara
                enlargedImage.src = photo.url;
                imageOverlay.style.display = 'flex';
            });
        });
    }

    function displayVideos(videos, container) {
        console.log('Contenedor para videos:', container); // Verifica el contenedor
        container.innerHTML = '';
        videos.forEach(video => {
            const mediaItem = document.createElement('li');
            mediaItem.classList.add('media-item');

            const img = document.createElement('img');
            const videoId = video.url.split('v=')[1];
            img.src = `https://img.youtube.com/vi/${videoId}/0.jpg`; // Thumbnail del video
            img.alt = video.nombre;
            img.classList.add('thumbnail');

            const title = document.createElement('h3');
            title.textContent = video.nombre;

            mediaItem.appendChild(img);
            mediaItem.appendChild(title);
            container.appendChild(mediaItem);

            img.addEventListener('click', function() {
                window.open(video.url, '_blank');
            });
        });
    }

    function showSection(sectionId) {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    document.getElementById('photos-link').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('photos-section');
    });

    document.getElementById('street-link').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('street-section');
    });

    document.getElementById('videos-link').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('videos-section');
    });

    document.getElementById('contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('contact-section');
    });

    displayPhotos(photos, mediaGridPhotos);
    displayPhotos(photosStreet, mediaGridStreet);
    displayVideos(videos, mediaGridVideos);

    imageOverlay.addEventListener('click', function() {
        imageOverlay.style.display = 'none';
    });
});