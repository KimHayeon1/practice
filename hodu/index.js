const btnAllMenu = document.getElementById('btn-allmenu');
const btnClose = document.getElementById('btn-close');
const header2 = document.getElementById('header2');

btnAllMenu.addEventListener('click', handleBtnAllMenu);
btnClose.addEventListener('click', handleBtnClose);

function handleBtnAllMenu() {
  header2.style.display = 'flex';
  btnClose.style.display = 'block';
}

function handleBtnClose() {
  header2.style.display = 'none';
  btnClose.style.display = 'none';
}