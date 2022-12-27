import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const addImages = galleryItems.map(({ preview, original, description }) => 
           `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img 
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}" 
              />
            </a>
          </div>`).join('');

gallery.insertAdjacentHTML('beforeend', addImages);

// console.log(galleryItems);

gallery.addEventListener('click', onGalleryImageClick);
let getModalImage = '';

function onGalleryImageClick(e) {
    e.preventDefault();
    
    const currentImage = e.target;

    if(currentImage.nodeName !== 'IMG') {
        return;
    };

    getModalImage = basicLightbox.create(
        `<img 
            class="${currentImage.classList}"
            src="${currentImage.dataset['source']}"
            alt="${currentImage.alt}" 
        />`
    );
    getModalImage.show();
};

document.addEventListener('keydown', offGalleryImageEscape);

function offGalleryImageEscape(e) {
    if(e.key !== 'Escape') {
        return;
    };

    if(!(getModalImage.visible())) {
        return;
        }

    getModalImage.close();
};
