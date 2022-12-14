import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const markupGallery = createGallery(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", markupGallery);

galleryContainerEl.addEventListener("click", onGalleryContainerClick);

function createGallery(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
    })
    .join("");
}
let instance;

function onGalleryContainerClick(e) {
  e.preventDefault();
  console.log(e.target.nodeName);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`, {
    onShow: () => {
      document.addEventListener("keydown", onModalCloseToEscape);
    },
    onClose: () => {
      document.removeEventListener("keydown", onModalCloseToEscape);
    },
  });
  instance.show();
}
function onModalCloseToEscape(e) {
  if (e.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onModalCloseToEscape);
  }
}
