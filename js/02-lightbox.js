import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainerEl = document.querySelector('.gallery')
const markupGallery = createGallery(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', markupGallery);

galleryContainerEl.addEventListener("click",onGalleryContainerClick)

function createGallery(cards) {
    return cards.map(({preview,original,description}) => {return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join("");
}

let lightbox;

function onGalleryContainerClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return
    };
  lightbox = new SimpleLightbox('.gallery a',{
  captionsData: "alt",
  captionDelay: 250,
});
  
}
