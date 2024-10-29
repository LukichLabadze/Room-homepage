const images = [
  'url("./images/desktop-image-hero-1.jpg")',
  'url("./images/desktop-image-hero-2.jpg")',
  'url("./images/desktop-image-hero-3.jpg")'
];

const texts = [
  'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.',
  'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
]

let currentIndex = 0;
let textIndex = 0;

const backgroundElement = document.getElementById('hero-pic');
const textElement = document.getElementById('main-p');

function updateBackground() {
  backgroundElement.style.backgroundImage = images[currentIndex];
}

function updateText(){
  textElement.textContent = texts[textIndex]
}




function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Move to next image
  updateBackground();
}

// Function to show the previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous image
  updateBackground();
}

function showNextText(){
  textIndex = (textIndex + 1) % texts.length;
  updateText()
}

function showPreviousText(){
  textIndex = (textIndex - 1 + texts.length) % texts.length;
  updateText()
}



// Event listeners for the buttons
document.getElementById('right-click').addEventListener('click', showNextImage);
document.getElementById('left-click').addEventListener('click', showPreviousImage);

document.getElementById('right-click').addEventListener('click', showNextText);
document.getElementById('left-click').addEventListener('click', showPreviousText);



updateBackground();
updateText()