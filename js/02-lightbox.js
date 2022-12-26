import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const addItems = galleryItems.reduce((acc, { original, preview, description }) => 
    acc += `<a class="gallery__item" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}" 
            />
        </a>`, "");

gallery.insertAdjacentHTML('beforebegin', addItems);

console.log(addItems);

