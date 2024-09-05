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
$(document).ready(function(){
  $(".navbar .nav-link").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          // Ajuste o valor de offset conforme a altura do seu cabeçalho
          var offset = 80; // Altura do cabeçalho fixo (ajuste conforme necessário)

          $('html, body').animate({
              scrollTop: $(hash).offset().top - offset
          }, 700, function(){
              window.location.hash = hash;
          });
      } 
  });
});



// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

$(document).ready(function() {
  const projects = [
      { img: "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg", 
        title: "Teste Teste", 
        desc: "Loja virtual desenvolvida com HTML, CSS e JavaScript, com integração ao PayPal para pagamentos.", 
        projectLink: "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg", 
        githubLink: "https://github.com/raphaelsantos141/ProgramandoViagens" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 2", 
        desc: "Descrição do projeto 2", 
        projectLink: "link-do-projeto2", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio2" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 3", 
        desc: "Descrição do projeto 3", 
        projectLink: "link-do-projeto3", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio3" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 4", 
        desc: "Descrição do projeto 4", 
        projectLink: "link-do-projeto4", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio4" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 5", 
        desc: "Descrição do projeto 5", 
        projectLink: "link-do-projeto5", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio5" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 6", 
        desc: "Descrição do projeto 6", 
        projectLink: "link-do-projeto6", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio6" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 7", 
        desc: "Descrição do projeto 7", 
        projectLink: "link-do-projeto7", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio7" },

      { img: "https://via.placeholder.com/300", 
        title: "Projeto de Site 8", 
        desc: "Descrição do projeto 8", 
        projectLink: "link-do-projeto8", 
        githubLink: "https://github.com/seu-usuario/seu-repositorio8" },
        
      // Adicione mais projetos conforme necessário
  ];

  const projectsPerPage = 6;
  let currentPage = 0;

  function renderProjects() {
      const start = currentPage * projectsPerPage;
      const end = start + projectsPerPage;
      const projectsToShow = projects.slice(start, end);

      $('#portfolio-grid').empty();

      projectsToShow.forEach(project => {
          $('#portfolio-grid').append(`
              <div class="project">
                  <img src="${project.img}" alt="${project.title}">
                  <div class="project-info">
                      <h3>${project.title}</h3>
                      <p>${project.desc}</p>
                      <div class="project-buttons">
                          <a href="${project.projectLink}" target="_blank" class="btn">Ver Projeto</a>
                          <a href="${project.githubLink}" target="_blank" class="btn github"><i class="fab fa-github"></i></a>
                      </div>
                  </div>
              </div>
          `);
      });
  }

  $('#prev-button').on('click', function() {
      if (currentPage > 0) {
          currentPage--;
          renderProjects();
      }
  });

  $('#next-button').on('click', function() {
      if ((currentPage + 1) * projectsPerPage < projects.length) {
          currentPage++;
          renderProjects();
      }
  });

  // Render initial set of projects
  renderProjects();
});



//Imprimir Curriculo
document.getElementById('printButton').addEventListener('click', function() {
  // URL do PDF
  var pdfUrl = '/assets/pdfs/Curriculo_Raphael.pdf';

  // Abre o PDF em uma nova janela
  var printWindow = window.open(pdfUrl, '_blank');

  // Adiciona um evento de carregamento para acionar a impressão
  printWindow.onload = function() {
      printWindow.print();
  };
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}
