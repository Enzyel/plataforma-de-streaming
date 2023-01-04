const toggleSidebar = document.querySelector('.lmenu')
toggleSidebar.addEventListener('click', togleMenu)

const cruzClosed = document.querySelector('.cont-img')
cruzClosed.addEventListener('click', togleMenu)

const sidebar = document.querySelector('.cont-menu')

function togleMenu(){
    sidebar.classList.toggle('inactive')
};