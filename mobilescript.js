const leftArrow = document.getElementById('leftarrow');
const rightArrow = document.getElementById('rightarrow');
const imageContainer = document.getElementById('imagecontainer');

const radishes = './img/pexels-lumn-191043.jpg';
const apple = './img/pexels-mali-maeder-102104.jpg';
const peppers = './img/pexels-rafel-al-saadi-128536.jpg';
const beans = './img/pexels-polina-tankilevitch-4109748.jpg';

let imagesArray = [radishes, apple, peppers, beans];
let currentImage = 0;

// FUNCTION TO SHOW IMAGE IN CONTAINER
function displayImage(num) {
  // create image
  let newImage = document.createElement('img');
  newImage.src = imagesArray[num];
  newImage.style.width = "200px";

  // clear image container
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }
  // put new image in container
  imageContainer.appendChild(newImage);

  // style dots
  for (let i = 0; i < imagesArray.length; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (i === num) {
      dot.classList.add('dotnow');
      dot.classList.remove('dot');
    } else {
      dot.classList.add('dot');
      dot.classList.remove('dotnow');
    }
  }
}

// FUNCTION TO CREATE DOTS
const createDots = function(){
  const dotsContainer = document.getElementById('carouseldots');

  for (let i = 0; i < imagesArray.length; i++) {
    dotP = document.createElement('p');
    dotP.textContent = '•';
    dotP.classList.add('dot');
    dotP.id = `dot-${i}`;
    dotsContainer.appendChild(dotP);
    // why didn't this work?
    // dotP.addEventListener("click", displayImage(i));
    dotP.addEventListener('click',function(){
      displayImage(i);
    });
  }
}

// WHEN PAGE LOADS SHOW FIRST IMAGE IN ARRAY
window.onload = () => {
  createDots();
  displayImage(0);
  cycleImages();
};



// TIME OUT

function cycleImages() {
  for (let i = 0; i < imagesArray.length; i++) {
    setTimeout(() => {displayImage(currentImage);}, 3000);
    currentImage = currentImage + 1;
    if (currentImage === imagesArray.length) {
      currentImage = 0;
    }
  }
}

// RIGHT ARROW
rightArrow.addEventListener('click', function() {
  console.log(`Left arrow was clicked and currentImage is ${currentImage}`);
  currentImage = currentImage + 1;
  console.log(`Now currentImage is ${currentImage}`);
  if (currentImage === imagesArray.length) {
    currentImage = 0;
  }
  console.log(`imagesArray[currentImage] is ${imagesArray[currentImage]}`);
  displayImage(currentImage);
})

// LEFT ARROW
leftArrow.addEventListener('click', function() {
  console.log(`Left arrow was clicked and currentImage is ${currentImage}`);
  currentImage = currentImage - 1;
  console.log(`Now currentImage is ${currentImage}`);
  if (currentImage === -1) {
    currentImage = imagesArray.length - 1;
  }
  console.log(`imagesArray[currentImage] is ${imagesArray[currentImage]}`);
  displayImage(currentImage);
})
