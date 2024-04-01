document.addEventListener("DOMContentLoaded", function () {
  let transitionPage = document.querySelector('.transition-conection');
  let trasitionMouve = document.querySelector('.transition-conection-hide');
  transitionPage.classList.add('show');
  trasitionMouve.classList.add('mouve');
  setTimeout(function () {
    transitionPage.style.opacity = '0';
    setTimeout(function () {

      transitionPage.style.display = 'none';
    }, 500);
  }, 1000);
});


