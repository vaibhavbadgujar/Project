// //   menu bar 
//   let navbar = document.querySelector('.navbar');
//   document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active')
//     searchForm.classList.remove('active')
//     cartItem.classList.remove('active')
//   }


// // search bar
//   let searchForm = document.querySelector('.search-form');
//   document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active')
//     navbar.classList.remove('active')
//     cartItem.classList.remove('active')
//   }

// // Cart Item Container   
//   let cartItem = document.querySelector('.cart-item-container');
//   document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active')
//     navbar.classList.remove('active')
//     searchForm.classList.remove('active')   
//   }

//   window.onscroll = () =>{
//     navbar.classList.remove('active')
//     searchForm.classList.remove('active')
//     cartItem.classList.remove('active')
//   }


// menu bar 
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
}

// search bar
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}

// Cart Item Container   
let cartItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')   
}

// Remove "active" class from all elements on scroll
window.addEventListener('scroll', () => {
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
  cartItem.classList.remove('active')
});

