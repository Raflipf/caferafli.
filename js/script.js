// Toggle class active untuk  menu
const navbarNav = document.querySelector('.navbar-nav');/*kelas*/
// ketika   menu di klik
document.querySelector('#hamburger-menu').onclick = () => { /*elemen id*/
  navbarNav.classList.toggle('active');/*muncul kelas aktik ketika di klik di hilangkan ketika tidak*/
};


// Toggle class active untuk pesanan cart
const shoppingCart = document.querySelector('.cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen agar navbar sisi keluar
const hm = document.querySelector('#hamburger-menu');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) { /*event*/
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});
