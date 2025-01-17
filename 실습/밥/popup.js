const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const items = article.querySelectorAll("li");
const cart = document.querySelector(".cart");
const buyBtn = document.querySelector(".btn-buy");

items.forEach(v => v.addEventListener('click', () => {
  cart.append(v.cloneNode(true))
  closePopup()
  buyBtn.style.display = 'block'
}))

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (!e.shiftKey && e.key === "Tab") {
    // console.log("tab만 누름");
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.key === "Tab") {
    // console.log("shift + tab");
    e.preventDefault();
    closeBtn.focus();
  }
});