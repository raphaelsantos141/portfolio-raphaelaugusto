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

//Blog mostrar projetos
const posts = [
  {
    title: "Projeto TCC : Vaso Sanitário Automatizado",
    image: "assets/imgs/projetos/vasosanitario/thumb.jpg",
    content: "Projeto final de TCC para o curso Técnico de Mecatrônica, vaso sanitário automatizado com Arduino que utiliza sensores para levantar a tampa e acionar a descarga automaticamente, proporcionando maior conveniência e higiene.",
    link: "00-vasosanitario.html",
    date: "2018-12-01",
    tecnologias: ["Arduino"]
  },
  {
    title: "Projeto Site: Acrilwood Ind",
    image: "assets/imgs/projetos/acrilwoodind/thumb.jpg",
    content: "Site da Acilwood Ind: uma plataforma moderna desenvolvida com HTML, CSS e JavaScript, destacando a excelência em madeira e produtos.",
    link: "00-acrilwoodind.html",
    date: "2024-09-01",
    tecnologias: ["HTML", "Javascript"]
  }
];

const postsPerPage = 3; // Definindo 3 postagens por página
let currentPage = 1; // Iniciando na página 1

function sortPostsByDate() {
  posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Classifica do mais recente para o mais antigo
}

function filterByTechnology() {
  const checkedTechs = Array.from(document.querySelectorAll('#technologyFilter input:checked'))
    .map(checkbox => checkbox.value);

  let filteredPosts = posts;
  if (checkedTechs.length > 0) {
    filteredPosts = posts.filter(post =>
      checkedTechs.every(tech => post.tecnologias.includes(tech))
    );
  } else {
    // Se nenhum filtro estiver selecionado, não aplicar filtragem
    filteredPosts = posts;
  }

  // Ajusta a página atual se necessário
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (currentPage > totalPages) {
    currentPage = 1; // Redefine a página atual para 1 se a página atual for maior que o total de páginas disponíveis
  }

  // Atualiza a renderização com os posts filtrados
  renderPosts(filteredPosts);
  renderPagination(filteredPosts);
}

function renderPosts(filteredPosts = posts) { // Use posts filtrados ou todos
  const blogPosts = document.getElementById('blog-posts');
  blogPosts.innerHTML = ""; // Limpa o conteúdo existente

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, end);

  // Renderiza as postagens na página atual
  paginatedPosts.forEach(post => {
    const postHtml = `
           <div class="blog-card">
               <div class="img-holder">
                   <img src="${post.image}" alt="${post.title}">
               </div>
               <div class="content-holder">
                  <h6 class="title">
                      <a href="${post.link}">${post.title}</a>
                  </h6>
                   <p>${post.content}</p>
                   <a href="${post.link}" class="read-more">Veja mais <i class="ti-angle-double-right"></i></a>

                    <div class="technologies">
        #${post.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join(', ')}
      </div>
               </div>
           </div>
       `;
    blogPosts.innerHTML += postHtml;
  });
}

function renderPagination(filteredPosts = posts) { // Use posts filtrados ou todos
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = ""; // Limpa a paginação atual

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Cria botões de paginação
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-btn');
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', () => {
      currentPage = i;
      renderPosts(filteredPosts);
      renderPagination(filteredPosts);
    });
    pagination.appendChild(pageButton);
  }
}

// Adiciona eventos de mudança para os checkboxes
document.querySelectorAll('#technologyFilter input').forEach(checkbox => {
  checkbox.addEventListener('change', filterByTechnology);
});

// Inicializa a primeira página e a paginação
sortPostsByDate(); // Ordena os posts por data antes de renderizar
renderPosts();
renderPagination();


// portfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1
    }
  }), $(".filters a").click(function () {
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

$(document).ready(function () {
  const projects = [
    {
      img: "assets/imgs/portifolio/prog_viagens1.png",
      title: "Programando Viagens V1",
      desc: "Desenvolvido como parte do primeiro semestre do curso de Análise e Desenvolvimento de Sistemas, Turma A Noturno. O objetivo é criar um site para planejamento e organização de viagens.",
      projectLink: "https://programandoviagens.vercel.app",
      githubLink: "https://github.com/raphaelsantos141/ProgramandoViagens"
    },

    {
      img: "assets/imgs/portifolio/acrilwoodind.png",
      title: "Acrilwood Ind",
      desc: "Criado como uma iniciativa pessoal para a empresa onde trabalho para colocar em prática HTML, CSS e JavaScript. A partir de um template pré-existente, explorei como cada parte funcionava e personalizei a interface para torná-la mais agradável e funcional.",
      projectLink: "https://acrilwoodind.vercel.app",
      githubLink: "https://github.com/raphaelsantos141/Acrilwood-Ind"
    },



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

  $('#prev-button').on('click', function () {
    if (currentPage > 0) {
      currentPage--;
      renderProjects();
    }
  });

  $('#next-button').on('click', function () {
    if ((currentPage + 1) * projectsPerPage < projects.length) {
      currentPage++;
      renderProjects();
    }
  });

  // Render initial set of projects
  renderProjects();
});



//Imprimir Curriculo
document.getElementById('printButton').addEventListener('click', function () {
  // URL do PDF
  var pdfUrl = '/assets/pdfs/Curriculo_Raphael.pdf';

  // Abre o PDF em uma nova janela
  var printWindow = window.open(pdfUrl, '_blank');

  // Adiciona um evento de carregamento para acionar a impressão
  printWindow.onload = function () {
    printWindow.print();
  };
});

// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}
