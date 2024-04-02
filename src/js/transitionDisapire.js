document.addEventListener("DOMContentLoaded", function() {
  let disapirePage = document.querySelector('.disapire-page');
  let lienDisapire = document.querySelectorAll('.lien-disapire');

  lienDisapire.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      disapirePage.classList.add('start');
      setTimeout(function() {
        window.location.href = this.getAttribute('href');
      }.bind(this), 500); 
    });
  });
});
