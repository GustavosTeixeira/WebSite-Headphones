/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Valide se existe constante*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Valide se existe constante */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVER MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================== MUDAR BACKGROUND HEADER ==================*/
function scrollHeader(){
    const header = document.getElementById('header')
    //Quando a rolagem é maior que 50 de altura da janela de visualização, adicione a classe de cabeçalho de rolagem à tag de cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*============== SHOW ROLAR PARA CIMA - SCROLL UP =============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Quando a rolagem é superior a 200 na altura da janela de visualização, adicione a classe show-scroll à tag a com as classes scroll-top
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*====== ROLAR SEÇÕES - SCROLL SECTIONS ACTIVE LINK ======*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ==== ANIMAÇÃO DE REVELAÇÃO DE ROLAGEM - SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home__header, .section__title`, {delay:600})
sr.reveal(`.home__footer`, {delay:700})
sr.reveal(`.home__img`, {delay:900, origin:'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {origin:'top', interval:100})
sr.reveal(`.specs-data, .discount__animate`, {origin:'left', interval:100})
sr.reveal(`.specs__img, .discount__img`, {origin:'right'})
sr.reveal(`.case__img`, {origin:'top'})
sr.reveal(`.case__data`)