var menuIcon = document.querySelector('.menuImg');
menuIcon.addEventListener('click', openMenu);

function openMenu() {
    var menuTrigger = document.querySelector('.menuTrigger').checked,
        tabs = document.querySelectorAll('.tabs-content');

    if (menuTrigger == false) {
        document.querySelector('.nav-box').style.width = '68px';
        document.querySelector('.logo').style.width = '68px';
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.width = 'calc(100% - 68px)';
        }
        document.querySelector('.topMenu').style.width = 'calc(100% - 68px)';
    }
    else {
        document.querySelector('.nav-box').style.width = '240px';
        document.querySelector('.logo').style.width = '240px';
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.width = 'calc(100% - 240px)';
        }
        document.querySelector('.topMenu').style.width = 'calc(100% - 240px)';
    }
}