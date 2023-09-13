import { imagesArray } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
  // Get references to the rows where images will be added
  const firstRow = document.querySelector('.first-row');
  const secondRow = document.querySelector('.second-row');

  // Loop through the imagesArray and create img elements for each image
  for (let i = 0; i < imagesArray.length; i++) {
    const image = imagesArray[i];

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('position-relative', 'p-2', 'img-wrapper'); // Add the 'image-wrapper' class

    const img = document.createElement('img');
    img.src = image.src; // Set the src attribute from the imagesArray
    img.alt = image.alt;

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'position-absolute');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#exampleModal');

    const icon = document.createElement('i');
    icon.classList.add('search-icon', 'fa-solid', 'fa-magnifying-glass', 'fa-2xl');

    button.appendChild(icon);

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(button);

    // Determine which row to add the image to based on the index
    if (i === 0) {
      imgWrapper.classList.add('col-lg-7');
      firstRow.appendChild(imgWrapper);
    } else if (i === 1) {
      imgWrapper.classList.add('col-lg-5');
      firstRow.appendChild(imgWrapper);
    } else if (i === 2) {
      imgWrapper.classList.add('col-lg-12');
      secondRow.appendChild(imgWrapper);
    }
  }

  // Modal code
  const modalImage = document.querySelector('.modal img');
  const modal = document.querySelector('.modal');

  // Create the close button dynamically
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('btn-close');
  closeButton.setAttribute('data-bs-dismiss', 'modal');
  closeButton.setAttribute('aria-label', 'Close');

  // Add an event listener to handle modal closure when the close button is clicked
  closeButton.addEventListener('click', function () {
    modalImage.removeAttribute('src'); // Clear the modal image
  });

  // Append the close button to the modal header
  const modalHeader = document.querySelector('.modal-header');
  modalHeader.appendChild(closeButton);

  const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const thumbnail = this.parentNode.querySelector('img');
      const thumbnailSrc = thumbnail.getAttribute('src');

      // Set the modal image source to the thumbnail source
      modalImage.setAttribute('src', thumbnailSrc);
    });
  });

  // Your existing code for creating and populating the image gallery

  // ...

  function pauseCarousel() {
    const myCarousel = document.getElementById('imageCarousel');
    if (myCarousel) {
      const carousel = new bootstrap.Carousel(myCarousel);
      carousel.pause();
    }
  }

  // Call the pauseCarousel function to stop the automatic slide
  pauseCarousel();

  // Create and populate the carousel items dynamically
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselControlNext = document.querySelector('.carousel-control-next');
  const carouselControlPrev = document.querySelector('.carousel-control-prev');
  let scrollPosition = 0
  // Define a function to initialize the carousel after it's populated

  carouselControlNext.addEventListener('click', function () {
    const cardWidth = document.querySelector('.carousel-item').getBoundingClientRect().width;
    const carouselWidth = carouselInner.getBoundingClientRect().width;
    
    const maxScrollPosition = carouselWidth - cardWidth * 4;

    if (scrollPosition > maxScrollPosition) {
      
      scrollPosition += cardWidth;
      carouselInner.scrollLeft += cardWidth;
      console.log(cardWidth, carouselWidth, maxScrollPosition, scrollPosition);
    }
    carouselInner.scroll({
      behavior: 'smooth'
    });
    
  })

  carouselControlPrev.addEventListener('click', function () {
    const cardWidth = document.querySelector('.carousel-item').getBoundingClientRect().width;
    const carouselWidth = carouselInner.getBoundingClientRect().width;
    console.log(carouselWidth);
    const maxScrollPosition = carouselWidth - cardWidth * 4;
    if (scrollPosition > maxScrollPosition) {
      scrollPosition -= cardWidth;
      carouselInner.scrollLeft -= cardWidth;
    }
    carouselInner.scroll({
      behavior: 'smooth'
    });
  });


    var carousel = document.getElementById('imageCarousel');

    carousel.addEventListener('slid.bs.carousel', function () {
        var carouselInner = carousel.querySelector('.carousel-inner');
        var carouselItems = carouselInner.querySelectorAll('.carousel-item');
        var lastItem = carouselItems[carouselItems.length - 1];

        // Check if it's the last slide
        if (lastItem.classList.contains('active')) {
            // Move the first slide to the end
            var firstItem = carouselItems[0];
            carouselInner.appendChild(firstItem.cloneNode(true));
            carouselInner.removeChild(firstItem);
        }
    });


  

  // Loop through the imagesArray and create img elements for each image
  for (let i = 0; i < 6; i++) {
    const image = imagesArray[i];

    const carouselItem = document.createElement('div');
    if (image.id === 2) {
      carouselItem.classList.add('carousel-item', 'active', 'col-lg-4');
    } else {
      carouselItem.classList.add('carousel-item', 'col-lg-4');
    }

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'image-carousel-wrapper');

    const img = document.createElement('img');
    img.src = image.src; // Set the src attribute from the imagesArray
    img.alt = image.alt;

    carouselItem.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
    carouselInner.appendChild(carouselItem);
  }

  
});
