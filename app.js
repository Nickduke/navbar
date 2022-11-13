const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// 1st method
// navToggle.addEventListener('click', () => {
//   if (links.classList.contains('show-links')) {
//     links.classList.remove('show-links');
//   } else {
//     links.classList.add('show-links');
//   }
// });

// Best method
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
