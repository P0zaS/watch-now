
function toggleAsideMenu(show = true) {
    checkLogin()
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

function toggleSearcher(show = true) {
    checkLogin()
    let searcher_icon = document.getElementById('searcherIcon');
    let searcherContainer = document.getElementById('searcherGroup');

    if (show) {
        searcher_icon.classList.add('unshow')
        searcherContainer.classList.remove('unshow')
    }else{
        searcher_icon.classList.remove('unshow')
        searcherContainer.classList.add('unshow')
    }
}