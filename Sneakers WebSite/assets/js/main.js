// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId)
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//     })
// }
// }
//  showMenu('nav-toggle','nav-menu')

// /*===== REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link'),
// navMenu = document.getElementById('nav-menu')

// function linkAction(){
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', scrollActive)

// function scrollActive(){
// const scrolly = window.pageYOffsect

//     sections.forEach(current=>{
//          const sectionHeight = current.offsetHeight
//     const sectiontop = current.offsettop - 50
//     sectionId = current.getElementById('id')
//  if(scrollY > sectiontop && scrollY <= sectiontop + sectionHeight){
//         document.querySelector('.nav__menu a[href*=' + sectionId+ ']').classList.add('active-link');    
//     }else{
//         document.querySelector('.nav__menu a[href*='+ sectionId+']').classList.remove('active-link');
//     }
//     })
// }
// /*===== CHANGE COLOR HEADER =====*/ 
//  window.onscroll = ()=>{
//     if(this.scrollY >=200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
//  }

 /*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  showMenu('nav-toggle', 'nav-menu');
  
  /*===== REMOVE MENU =====*/
  const navLink = document.querySelectorAll('.nav__link');
  const navMenu = document.getElementById('nav-menu');
  
  function linkAction() {
    navMenu.classList.remove('show');
  }
  navLink.forEach((n) => n.addEventListener('click', linkAction));
  
  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__menu a');
  
  window.addEventListener('scroll', () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 50) - 1;
  
    navLinks.forEach((link) => link.classList.remove('active-link'));
    navLinks[current].classList.add('active-link');
  });
  
  /*===== CHANGE COLOR HEADER =====*/
  window.onscroll = () => {
    if (this.scrollY >= 200) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  };