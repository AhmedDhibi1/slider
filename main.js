let imagetab = document.querySelectorAll(".img");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let number = document.querySelector(".numbers");
let count = 0;
//number.children[0].classList.add("num-active");
right.classList.add("end");

for (let i = 1; i <= imagetab.length; i++) {
  let nbr = document.createElement('div');
  nbr.innerHTML = i;
  nbr.classList.add("num");
  number.appendChild(nbr);
  imagetab[i - 1].setAttribute('data', i);
}
number.children[0].classList.add("num-active");

left.addEventListener('click', function() {
  if (count < imagetab.length - 1) {
    imagetab[count].classList.remove("active");
    number.children[count].classList.remove("num-active");
    imagetab[count + 1].classList.add("active");
    number.children[count+1].classList.add("num-active");
    count++;
    updateBackground();
  }

  if (count === imagetab.length - 1) {
    left.classList.add("end");
  } else {
    right.classList.remove("end");
  }
});

right.addEventListener('click', function() {
  if (count > 0) {
    imagetab[count].classList.remove("active");
    number.children[count].classList.remove("num-active");
    imagetab[count - 1].classList.add("active");
    number.children[count-1].classList.add("num-active");
    count--;
    updateBackground();
  }

  if (count === 0) {
    right.classList.add("end");
  } else {
    left.classList.remove("end");
  }
});

for (let i = 0; i < number.children.length; i++) {
  number.children[i].addEventListener('click', function() {
    for (let j = 0; j < imagetab.length; j++) {
      imagetab[j].classList.remove("active");
    }
    imagetab[i].classList.add("active");
    count = i;
    updateBackground();

    for (let k = 0; k < number.children.length; k++) {
      number.children[k].classList.remove("num-active");
    }
    number.children[i].classList.add("num-active");
  });
}

function updateBackground() {
    let activeImage = document.querySelector(".img.active");
    let previousImage = activeImage.previousElementSibling;
  
    if (!previousImage) {
      previousImage = imagetab[imagetab.length - 1];
    }
  
    if (previousImage) {
      const backgroundImageUrl = getComputedStyle(previousImage).getPropertyValue("background-image");
      const imageUrl = backgroundImageUrl.replace('url("', '').replace('")', '');
      document.body.style.backgroundImage = `url('${imageUrl}')`;
    }
  }
  

// Set initial background image
updateBackground();

