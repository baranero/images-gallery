import { imagesArray } from "./data.js";

const carouselEvent = document.getElementById("imageCarouselEvent");
const carouselEventInner = document.querySelector(
  ".image-event-carousel-inner"
);
const activeImageContainer = document.querySelector(".active-image-container");
const activeImageDescriptionContainer = document.querySelector(
  ".active-image-description-container"
);

// Display third section - event gallery
for (let i = 0; i < imagesArray.length; i++) {
  const image = imagesArray[i];

  const carouselItem = document.createElement("div");

  if (image.id === 1) {
    carouselItem.classList.add("carousel-item", "active", "event-item");
  } else {
    carouselItem.classList.add("carousel-item", "event-item");
  }

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-start",
    "image-carousel-wrapper",
    "h-100"
  );

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  activeImageContainer.innerHTML = `<div class="active-image-description-container"><p class="event-image-title">${imagesArray[0].alt}</p></div>`;

  // Add a click event listener to imgWrapper elements
  imgWrapper.addEventListener("click", () => {
    // Remove the 'active' class from the currently active item
    const currentActiveItem = carouselEventInner.querySelector(
      ".carousel-item.active"
    );
    currentActiveItem.classList.remove("active");

    // Add the 'active' class to the clicked item
    carouselItem.classList.add("active");

    // Update the active image container with the new active image
    const newActiveImage = carouselItem.querySelector("img").cloneNode(true);
    activeImageContainer.innerHTML = `<div class="active-image-description-container"><p class="event-image-title">${newActiveImage.getAttribute(
      "alt"
    )}</p></div>`;

    activeImageContainer.appendChild(newActiveImage); // Append the new active image
  });

  carouselItem.appendChild(imgWrapper);
  imgWrapper.appendChild(img);
  carouselEventInner.appendChild(carouselItem);
}

// Find the active image within the carousel
const activeImage = carouselEventInner
  .querySelector(".carousel-item.active img")
  .cloneNode(true);

// Append the active image to the container
activeImageContainer.appendChild(activeImage);

// Insert the active image container before the carousel
carouselEvent.insertBefore(activeImageContainer, carouselEvent.firstChild);

const nextButton = document.querySelector(".image-event-next-btn");
const prevButton = document.querySelector(".image-event-prev-btn");

function updateActiveImage() {
  // Find the active image within the carousel
  const activeImage = carouselEventInner
    .querySelector(".carousel-item.active img")
    .cloneNode(true);
  // Get the alt text of the active image

  // Clear the activeImageContainer and append the new active image
  activeImageContainer.innerHTML = `<div class="active-image-description-container"><p class="event-image-title">${activeImage.getAttribute(
    "alt"
  )}</p></div>`;
  activeImageContainer.appendChild(activeImage);
}

nextButton.addEventListener("click", () => {
  const currentActiveItem = carouselEventInner.querySelector(
    ".carousel-item.active"
  );
  let nextItem = currentActiveItem.nextElementSibling;

  if (!nextItem) {
    nextItem = carouselEventInner.querySelector(".carousel-item:first-child");
  }

  updateActiveImage();
});

prevButton.addEventListener("click", () => {
  const currentActiveItem = carouselEventInner.querySelector(
    ".carousel-item.active"
  );
  let prevItem = currentActiveItem.previousElementSibling;

  if (!prevItem) {
    prevItem = carouselEventInner.querySelector(".carousel-item:last-child");
  }

  updateActiveImage();
});
