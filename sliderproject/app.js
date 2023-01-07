// GitHup @mohammadcoder82

// codes;

let ImgArr = [
  'back1.jfif',
  'back3.jfif',
  'back7.jfif',
  'back9.jfif',
]

let prevBtn = document.querySelector('.Prev');
let nextBtn = document.querySelector('.Next');
let ImgSrc = document.querySelector('img');

let nextCounter = 0;

console.log(ImgArr.length);

console.log(ImgArr.length-1);

nextBtn.addEventListener('click', function() {
  nextCounter++;
  if (nextCounter > ImgArr.length - 1) {
    nextCounter = 0;
    ImgSrc.src = 'back1.jfif'
  } else {
      let ImgCounter = ImgArr[nextCounter];
      ImgSrc.src = ImgCounter;
  }
})

prevBtn.addEventListener('click', function () {
  nextCounter--;
  if (nextCounter < 0) {
    nextCounter = 3;
    ImgSrc.src = 'back9.jfif';
  } else {
      let ImgCounter = ImgArr[nextCounter];
      ImgSrc.src = ImgCounter;
  }
})
