import { imagesArray } from "./data.js";

const firstRow = document.querySelector(".image-gallery-first-row");
const secondRow = document.querySelector(".image-gallery-second-row");
const modalImage = document.querySelector(".modal img");

// Display first section - grid image gallery
for (let i = 0; i < imagesArray.length; i++) {
  const image = imagesArray[i];

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("position-relative", "p-2", "img-wrapper");

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "position-absolute");
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#exampleModal");

  const icon = document.createElement("i");
  icon.classList.add(
    "search-icon",
    "fa-solid",
    "fa-magnifying-glass",
    "fa-2xl"
  );

  button.appendChild(icon);
  imgWrapper.appendChild(img);
  imgWrapper.appendChild(button);

  if (i === 0) {
    imgWrapper.classList.add("col-lg-7");
    firstRow.appendChild(imgWrapper);
  } else if (i === 1) {
    imgWrapper.classList.add("col-lg-5");
    firstRow.appendChild(imgWrapper);
  } else if (i === 2) {
    imgWrapper.classList.add("col-lg-12");
    secondRow.appendChild(imgWrapper);
  }
}

// Modal code

const closeButton = document.createElement("button");
closeButton.type = "button";
closeButton.classList.add("btn-close");
closeButton.setAttribute("data-bs-dismiss", "modal");
closeButton.setAttribute("aria-label", "Close");

closeButton.addEventListener("click", function () {
  modalImage.removeAttribute("src");
});

const modalHeader = document.querySelector(".modal-header");
modalHeader.appendChild(closeButton);

const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const thumbnail = this.parentNode.querySelector("img");
    const thumbnailSrc = thumbnail.getAttribute("src");

    modalImage.setAttribute("src", thumbnailSrc);
  });
});
