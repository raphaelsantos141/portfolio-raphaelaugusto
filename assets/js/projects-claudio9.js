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

// Substitua este array com o caminho relativo para suas próprias imagens no diretório 'img/'
const images = [
  '/assets/imgs/projetos/claudio9/fennec_ingame_claudio9.jpg',
  '/assets/imgs/projetos/claudio9/octane1_ingame_claudio9.jpg',
  '/assets/imgs/projetos/claudio9/octane_ingame_claudio9.jpg',
  '/assets/imgs/projetos/claudio9/logo_claudio9.png',
  '/assets/imgs/projetos/claudio9/fennec_claudio9.png',
 '/assets/imgs/projetos/claudio9/octane1_claudio9.png',
 '/assets/imgs/projetos/claudio9/octane2_claudio9.png',
 '/assets/imgs/projetos/claudio9/octane3_claudio9.png',
 '/assets/imgs/projetos/claudio9/octane_art_claudio9.png',
 '/assets/imgs/projetos/claudio9/octane_claudio9.png',
];

// Número de imagens por página
const imagesPerPage = 9;
let currentPage = 1;
const gallery = document.getElementById('gallery');
const pagination = document.getElementById('pagination');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Função para renderizar a galeria
function renderGallery(page) {
  gallery.classList.add('fade-out');
  
  setTimeout(() => {
      // Limpa a galeria
      gallery.innerHTML = '';
      
      // Cálculo para as imagens da página atual
      const startIndex = (page - 1) * imagesPerPage;
      const endIndex = Math.min(startIndex + imagesPerPage, images.length);
      
      // Organiza as imagens mais recentes primeiro
      const pageImages = images.slice().reverse().slice(startIndex, endIndex);
      
      // Renderiza as imagens
      pageImages.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image;
          imgElement.alt = "Gallery Image";
          imgElement.onclick = () => openModal(image);
          gallery.appendChild(imgElement);
      });

      gallery.classList.remove('fade-out');
  }, 500); // Espera a animação de fade-out antes de renderizar as novas imagens
  
  renderPagination();
}

// Função para renderizar os botões de paginação
function renderPagination() {
  // Limpa a paginação
  pagination.innerHTML = '';

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Botão de "Primeira Página"
  const firstButton = document.createElement('button');
  firstButton.innerHTML = '<<';
  firstButton.disabled = currentPage === 1;
  firstButton.onclick = () => {
      currentPage = 1;
      renderGallery(currentPage);
  };
  pagination.appendChild(firstButton);

  // Botão de página anterior
  const prevButton = document.createElement('button');
  prevButton.innerHTML = 'Prev';
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => {
      if (currentPage > 1) {
          currentPage--;
          renderGallery(currentPage);
      }
  };
  pagination.appendChild(prevButton);

  // Botão de página seguinte
  const nextButton = document.createElement('button');
  nextButton.innerHTML = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.onclick = () => {
      if (currentPage < totalPages) {
          currentPage++;
          renderGallery(currentPage);
      }
  };
  pagination.appendChild(nextButton);

  // Botão de "Última Página"
  const lastButton = document.createElement('button');
  lastButton.innerHTML = '>>';
  lastButton.disabled = currentPage === totalPages;
  lastButton.onclick = () => {
      currentPage = totalPages;
      renderGallery(currentPage);
  };
  pagination.appendChild(lastButton);
}


// Função para abrir o modal com a imagem em tamanho original
function openModal(imageSrc) {
  modal.style.display = 'flex';
  modalImage.src = imageSrc;
  modalImage.onload = function() {
      // Ajusta o modal para o tamanho da imagem sem distorção
      modalImage.style.maxWidth = "90%";
      modalImage.style.maxHeight = "90%";
      modalImage.style.width = "auto"; // Exibe no tamanho original da imagem
      modalImage.style.height = "auto"; // Exibe no tamanho original da imagem
  };
}

// Função para fechar o modal
closeModal.onclick = function() {
  modal.style.display = 'none';
}

// Fecha o modal ao clicar fora da imagem
modal.onclick = function(event) {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
}


// Inicializa a galeria na primeira página
renderGallery(currentPage);
