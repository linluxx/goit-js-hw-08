// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

function createGalleryItems(images) {
  return images
    .map(
      ({ original, preview, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href='${original}'>
    <img
    class="gallery__img"
    src="${preview}"
    data-source="${original}"
    alt="${description}" 
    />
     </a>
    </li>
    `
    )
    .join('');
}

let galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
