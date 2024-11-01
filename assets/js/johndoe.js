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
// Blog mostrar projetos
const posts = [
  {
    title: "Projeto TCC - Vaso Sanitário Automatizado",
    image: "assets/imgs/projetos/vasosanitario/thumb.jpg",
    content: "Projeto final de TCC para o curso Técnico de Mecatrônica, vaso sanitário automatizado com Arduino que utiliza sensores para levantar a tampa e acionar a descarga automaticamente, proporcionando maior conveniência e higiene.",
    link: "/pages/00-vasosanitario.html",
    date: "2018-12-01",
    tecnologias: ["Arduino"]
  },
  {
    title: "Site Acrilwood Ind",
    image: "assets/imgs/projetos/acrilwoodind/thumb.jpg",
    content: "Site da Acilwood Ind: uma plataforma moderna desenvolvida com HTML, CSS e JavaScript, destacando a excelência em madeira e produtos.",
    link: "/pages/00-acrilwoodind.html",
    date: "2024-09-01",
    tecnologias: ["HTML", "Javascript"]
  },
  {
    title: "Site Garden Ouro Fino",
    image: "assets/imgs/projetos/gardenourofino/thumb.png",
    content: "Site Garden Ouro Fino: uma plataforma atrativa e funcional que destaca a variedade de flores e arranjos da floricultura, proporcionando uma experiência envolvente.",
    link: "/pages/00-gardenourofino.html",
    date: "2024-10-01",
    tecnologias: ["HTML", "Javascript"]
  },
  {
    title: "IA: Lucia Turing",
    image: "assets/imgs/projetos/lucia/thumb.png",
    content: "Lucia Turing é uma personagem fictícia utilizando inteligência artificial, especificamente com a ferramenta Fooocus baseada no Stable Diffusion.",
    link: "/pages/00-lucia.html",
    date: "2013-10-18",
    tecnologias: ["IA"]
  },
  {
    title: "Jogo Nema Izlaza",
    image: "assets/imgs/projetos/nema izlaza/captura_game.jpg",
    content: "Nema Izlaza é um jogo de terror em primeira pessoa que criei onde o jogador, perdido em uma floresta escura, busca uma saída usando apenas uma lanterna. Com clima tenso e atmosfera sombria.",
    link: "/pages/00-nemaizlaza.html",
    date: "2014-02-24",
    tecnologias: ["Unity", "C#"]
  },
  {
    title: "Site Programando Viagens",
    image: "assets/imgs/projetos/programandoviagens/programandoviagens.jpg",
    content: "Este projeto foi desenvolvido como parte do primeiro e segundo semestre do curso de Análise e Desenvolvimento de Sistemas. O objetivo é criar um site para planejamento e organização de viagens.",
    link: "/pages/00-programando_viagens.html",
    date: "2024-07-01",
    tecnologias: ["HTML", "Javascript", "PHP"]
  },
  {
    title: "Claudio9",
    image: "/assets/imgs/projetos/claudio9/logo_claudio9.png",
    content: "A Claudio9 é uma equipe paródia de e-sports inspirada na Cloud9, com um toque de humor, criada para o Rocket League, sua estética mistura nostalgia e esportes eletrônicos!",
    link: "/pages/00-claudio9.html",
    date: "2022-09-13",
    tecnologias: ["Blender", "Design"]
  },
  {
    title: "Automatização de Etiquetas",
    image: "/assets/imgs/projetos/automacao_etiquetas/thumb.png",
    content: "Este projeto foi desenvolvido para automatizar o processo de criação de etiquetas no escritório onde trabalho. A necessidade surgiu a partir da demanda de colar etiquetas em caixas de displays de acrílico e MDF, otimizando o tempo e simplificando o processo para os colaboradores.",
    link: "/pages/00-automacao_etiquetas.html",
    date: "2024-10-24",
    tecnologias: ["Python"]
  },
  {
    title: "Projetos Displays Acrílico e MDF",
    image: "/assets/imgs/projetos/displays/displays/2.jpg",
    content: "Projetos que desenvolvi como desenhista técnico nas empresas de acrílico e MDF, criando desenhos e otimizando cortes para máquinas a laser.",
    link: "/pages/00-displays.html",
    date: "2022-09-14",
    tecnologias: ["Design", "AutoCAD"]
  },
];

const postsPerPage = 5; // Definindo 5 postagens por página
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
              <a href="${post.link}" target="_blank"> <img src="${post.image}" alt="${post.title}"></a>
          </div>
          <div class="content-holder">
              <h6 class="title">
                  <a href="${post.link}" target="_blank">${post.title}</a>
              </h6>
              <p>${post.content}</p>
              <a href="${post.link}" target="_blank" class="read-more">Veja mais <i class="ti-angle-double-right"></i></a>
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
      
      // Rola para o início da seção do blog
      const blogSection = document.getElementById('blog');
      blogSection.scrollIntoView({ behavior: 'smooth' });
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
