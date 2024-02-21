document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu-tel');
    var body = document.body; // Sélectionnez le body

    var isMenuOpen = false;

    menuToggle.addEventListener('click', function () {
        if (!isMenuOpen) {
            menu.style.opacity = '1';
            body.classList.add('no-scroll'); // Ajoutez la classe pour empêcher le défilement
            isMenuOpen = true;
        } else {
            menu.style.opacity = '0';
            body.classList.remove('no-scroll'); // Retirez la classe pour activer le défilement
            isMenuOpen = false;
        }
    });
});
