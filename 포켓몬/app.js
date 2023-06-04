const listItem = document.querySelector('.list-item')
const cards = document.querySelectorAll('li')

let x = 0;
// document.body.addEventListener('click', rotate)

function rotate(e) {
  let mouseX = e.clientX;
  const half = window.innerWidth / 2;
  if (mouseX < half) {
    listItem.style.transform = `translate(-50%, -50%) rotateY(${++x*360/7}deg)`
  } else {
    listItem.style.transform = `translate(-50%, -50%) rotateY(${--x*360/7}deg)`
  }
}

document.body.addEventListener('mousedown', (e) => {
  e.preventDefault()
  rotate(e)
  const interval = setInterval(rotate, 500, e);
  document.body.addEventListener('mouseup', () => {
    clearInterval(interval);
  })
})

cards.forEach((card, i) => {
  card.addEventListener('mousedown', event => {
    event.stopPropagation()
    const div = event.currentTarget.querySelectorAll('div');
    if (div[1].classList.contains('hidden')) {
      event.currentTarget.style.transform = `scale(1.0) rotateY(calc(360deg/7*${i})) translateZ(calc(340px *7 /2 /3.14))`;
    } else {
      event.currentTarget.style.transform = `scale(0.9) rotateY(calc(360deg/7*${i})) translateZ(calc(340px *7 /2 /3.14))`;
    }
    div.forEach(v => v.classList.toggle("hidden"));
  });
})