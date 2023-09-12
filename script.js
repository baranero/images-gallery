const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');
const modalImage = document.querySelector('.modal img');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const thumbnail = this.parentNode.querySelector('img');
    const thumbnailSrc = thumbnail.getAttribute('src');
    modalImage.setAttribute('src', thumbnailSrc);
  });
});