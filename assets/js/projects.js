/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // Ajuste o valor de offset conforme a altura do seu cabeçalho
      var offset = 80; // Altura do cabeçalho fixo (ajuste conforme necessário)

      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

