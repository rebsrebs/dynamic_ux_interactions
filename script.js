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
function createImages() {
  for (let i = 0; i < imagesArray.length; i++) {
    // create image
    let newImage = document.createElement('img');
    newImage.src = imagesArray[i];
    newImage.style.width = "400px";
    newImage.id = `image-${i}`;
    newImage.classList.add('notshown');
    imageContainer.appendChild(newImage);
  }
}

// FUNCTION TO SHOW IMAGE
const showImage = function(num) {
  for (let i = 0; i < imagesArray.length; i++) {
  const image = document.getElementById(`image-${i}`);
    if (num === i) {
      image.classList.add('shown');
      image.classList.remove('notshown');
    } else { 
      image.classList.add('notshown');
      image.classList.remove('shown');
    }
  }
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
      showImage(i);
    });
  }
}

// WHEN PAGE LOADS SHOW FIRST IMAGE IN ARRAY
window.onload = () => {
  createImages();
  createDots();
  showImage(0);
  setInterval(cycleImages, 5000)
};

// CYCLE IMAGES
function cycleImages() {
  if (currentImage === imagesArray.length) {
    currentImage = 0;
  }
  showImage(currentImage);
  currentImage += 1;
}

// RIGHT ARROW
rightArrow.addEventListener('click', function() {
  console.log(`Left arrow was clicked and currentImage is ${currentImage}`);
  currentImage = currentImage + 1;
  console.log(`Now currentImage is ${currentImage}`);
  if (currentImage >= imagesArray.length) {
    currentImage = 0;
  }
  console.log(`imagesArray[currentImage] is ${imagesArray[currentImage]}`);
  showImage(currentImage);
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
  showImage(currentImage);
})

// DROP DOWN MENU
const toggleClass = function(element, className) {
  element.classList.toggle(className);
}

const removeClass = function(element, className) {
    if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

document.querySelectorAll('.dropdownbutton').forEach(item => {
  item.addEventListener('click', event => {
    const id = event.target.id;
    const dropdown = document.getElementById(`${id}-dropdown`);
    toggleClass(dropdown,'hidden')
  })
  item.addEventListener('mouseover', event => {
    const id = event.target.id;
    const dropdown = document.getElementById(`${id}-dropdown`);
    toggleClass(dropdown,'hidden')
  })
  // but when I add the below, it goes away when i bring mouse down over dropdown menu, so I need to make drop down items be insidethe event.
  item.addEventListener('mouseout', event => {
    const id = event.target.id;
    const dropdown = document.getElementById(`${id}-dropdown`);
    toggleClass(dropdown,'hidden')
  })
})
