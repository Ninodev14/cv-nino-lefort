document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu-tel');
    var html = document.documentElement;

    var isMenuOpen = false;

    menuToggle.addEventListener('click', function () {
        if (!isMenuOpen) {
            menu.style.display = 'flex';
            html.classList.add('no-scroll');

            menuToggle.classList.toggle("active");
            setTimeout(function () {
                menu.style.opacity = '1';
                isMenuOpen = true;
            }, 1);

        } else {
            setTimeout(function () {
                menu.style.display = 'none';
                html.classList.remove('no-scroll');
            }, 300);
            menuToggle.classList.toggle("active");
            menu.style.opacity = '0';
            isMenuOpen = false;
        }
    });
});