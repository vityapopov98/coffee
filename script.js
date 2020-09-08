function openMenu() {
    
    // var menu = document.querySelector('.links');
    $('.links').removeClass('menu-hidden')
    $('.links').addClass('menu-open')
    // console.log(menu)
    // menu.className = 'links menu-open'
}
function closeMenu() {
    // alert('may be it wll work')
    // var menu = document.querySelector('.links');
    // console.log(menu)
    $('.links').removeClass('menu-open')
    $('.links').addClass('menu-hidden')
    // menu.className = 'links menu-hidden'
}