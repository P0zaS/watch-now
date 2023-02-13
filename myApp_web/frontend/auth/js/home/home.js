
function toggleAsideMenu(show = true) {
    let asideMenu = document.getElementById('asideMenu');
    let contentAsideMenu = document.getElementById('asideMenuContent');
    if (show) {
        asideMenu.classList.add('aside-menu-active')
        contentAsideMenu.classList.add('content-aside-menu-active')
    } else {
        asideMenu.classList.remove('aside-menu-active')
        contentAsideMenu.classList.remove('content-aside-menu-active')                                                                               
    }
}