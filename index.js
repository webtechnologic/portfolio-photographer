//responsive menu 
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navList.classList.toggle('newMenu');
}
hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', toggleMenu);

//portfolio section 
const portfolioBtn = document.querySelector('.winter');
const portfolioBtnSpring = document.querySelector('.spring');
const portfolioBtnSummer = document.querySelector('.summer');
const portfolioBtnAutumn = document.querySelector('.autumn');
const portfolioImages = document.querySelectorAll('.portfolio-image-foto');

portfolioBtn.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${'winter'}/${index + 1}.jpg`);
}); 

portfolioBtnSpring.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${'spring'}/${index + 1}.jpg`);
}); 

portfolioBtnSummer.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${'summer'}/${index + 1}.jpg`);
}); 

portfolioBtnAutumn.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${'autumn'}/${index + 1}.jpg`);
}); 

