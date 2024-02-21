document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu-tel');
    var body = document.body; // Sélectionnez le body

    var isMenuOpen = false;

    menuToggle.addEventListener('click', function () {
        if (!isMenuOpen) {
            menu.style.display = 'flex';
            body.classList.add('no-scroll');
            isMenuOpen = true;
            setTimeout(function () {
                menu.style.opacity = '1';
            }, 1);

        } else {
            setTimeout(function () {
                menu.style.display = 'none';
                body.classList.remove('no-scroll');
                isMenuOpen = false;
            }, 300);
            menu.style.opacity = '0';
        }
    });
});