import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const addImages = galleryItems.map(({ preview, original, description }) => 
           `<div class="gallery__item">
            <a class="gallert__link" href="${original}">
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

// const img = document.querySelector(".gallery__image");

// const onGalleryImageClick = basicLightbox.create(img);

// function onGalleryImageClick(e) {
gallery.addEventListener('click', onGalleryImageClick);

// onGalleryImageClick.show();

function onGalleryImageClick(e) {
    e.preventDefault();
    
    const currentImage = e.target;

    if(currentImage.nodeName !== 'IMG') {
        return;
    };

    currentImage.src = currentImage.dataset['source'];
    // currentImage.style.width = "800px";
    // currentImage.style.height= "600px";

    const modalImage = basicLightbox.create(
        `
    ${currentImage}
`);
    console.log(currentImage);
    modalImage.show();
};






// console.log(modalImage.show());