import { imagesArray } from "./data.js";

const imageCarousel = document.getElementById("imageCarousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselControlNext = document.querySelector(".carousel-control-next");
const carouselControlPrev = document.querySelector(".carousel-control-prev");
let scrollPosition = 0;

// Display second section - image slider
for (let i = 0; i < 6; i++) {
  const image = imagesArray[i];

  const carouselItem = document.createElement("div");
  if (image.id === 2) {
    carouselItem.classList.add("carousel-item", "active", "col-lg-4");
  } else {
    carouselItem.classList.add("carousel-item", "col-lg-4");
  }

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "image-carousel-wrapper"
  );

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  carouselItem.appendChild(imgWrapper);
  imgWrapper.appendChild(img);
  carouselInner.appendChild(carouselItem);
}

// slider - next image button
carouselControlNext.addEventListener("click", function () {
  const cardWidth = document
    .querySelector(".carousel-item")
    .getBoundingClientRect().width;
  const carouselWidth = carouselInner.getBoundingClientRect().width;

  const maxScrollPosition = carouselWidth - cardWidth * 4;

  if (scrollPosition > maxScrollPosition) {
    scrollPosition += cardWidth;
    carouselInner.scrollLeft += cardWidth;
  }
  carouselInner.scroll({
    behavior: "smooth",
  });
});

// slider - previous image button
carouselControlPrev.addEventListener("click", function () {
  const cardWidth = document
    .querySelector(".carousel-item")
    .getBoundingClientRect().width;
  const carouselWidth = carouselInner.getBoundingClientRect().width;
  const maxScrollPosition = carouselWidth - cardWidth * 4;
  if (scrollPosition > maxScrollPosition) {
    scrollPosition += cardWidth;
    carouselInner.scrollLeft -= cardWidth;
  }
  carouselInner.scroll({
    behavior: "smooth",
  });
});

// loop of images in slider
imageCarousel.addEventListener("slid.bs.carousel", function () {
  const carouselInner = imageCarousel.querySelector(".carousel-inner");
  const carouselItems = carouselInner.querySelectorAll(".carousel-item");
  const lastItem = carouselItems[carouselItems.length - 1];
  const firstItem = carouselItems[0];

  if (lastItem.classList.contains("active")) {
    carouselInner.appendChild(firstItem.cloneNode(true));
    carouselInner.removeChild(firstItem);
  } else if (firstItem.classList.contains("active")) {
    const newFirstItem = lastItem.cloneNode(true);
    carouselInner.insertBefore(newFirstItem, carouselInner.firstChild);
    carouselInner.removeChild(lastItem);
  }
});
