const menu = document.querySelector('.burger-menu')
const close = document.querySelector('.close-menu-burger')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
  nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})

