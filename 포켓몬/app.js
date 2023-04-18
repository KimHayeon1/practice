const listItem = document.querySelector('.list-item')

let x = 0;
// document.body.addEventListener('click', rotate)

function rotate(e) {
  let mouseX = e.clientX;
  const half = window.innerWidth / 2;
  if (mouseX < half) {
    listItem.style.transform = `translate(-50%, -50%) rotateY(${++x*30}deg)`
  } else {
    listItem.style.transform = `translate(-50%, -50%) rotateY(${--x*30}deg)`
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