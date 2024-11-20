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
  '/assets/imgs/projetos/lucia/galeria/1.jpg',
  '/assets/imgs/projetos/lucia/galeria/2.jpg',
  '/assets/imgs/projetos/lucia/galeria/3.jpg',
  '/assets/imgs/projetos/lucia/galeria/4.jpg',
  '/assets/imgs/projetos/lucia/galeria/4faces.jpg',
  '/assets/imgs/projetos/lucia/galeria/5.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_15-16-16_1416.jpg',
  '/assets/imgs/projetos/lucia/galeria/6.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-25_23-57-35_6187.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-26_00-01-26_2916.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-26_00-08-51_4933.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-26_01-15-35_5232.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-26_01-24-39_3171.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-26_01-37-33_2421.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-27_02-06-05_6129.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-27_02-10-01_5537.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-27_02-33-48_2695.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_10-54-11_2827.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_11-03-36_1126.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_12-00-16_7273.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_12-05-45_1216.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-09-28_12-37-13_7656.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_14-03-10_3206.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_14-07-48_5657.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_14-23-41_3994.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_14-29-38_5153.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_14-30-18_1817.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_16-49-11_6324.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-05_17-07-57_2779.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-07_20-46-40_6799.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-09_21-02-01_1996.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-13_09-10-07_3126.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-13_10-04-19_6091.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-13_10-42-09_2555.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-17_19-40-52_9744.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-01_18-30-47_1974.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-10-21_22-31-00_1069.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-01_18-44-15_5322.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_19-27-57_2061.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_19-29-44_7375.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_20-01-58_8138.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_21-11-18_2387.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_21-30-38_5899.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_21-42-52_8492.jpg',
  '/assets/imgs/projetos/lucia/galeria/2024-11-12_22-17-59_3948.jpg',
];


// Número de imagens por página
const imagesPerPage = 9;
let currentPage = 1;
const gallery = document.getElementById('gallery');
const pagination = document.getElementById('pagination');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Função para rolar suavemente até a galeria
function smoothScrollToGallery() {
    $('html, body').animate({
        scrollTop: $('#gallery').offset().top - 200 // Ajuste o offset conforme necessário
    }, 700);
}

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
      smoothScrollToGallery(); // Rolar para a galeria
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
          smoothScrollToGallery(); // Rolar para a galeria
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
          smoothScrollToGallery(); // Rolar para a galeria
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
      smoothScrollToGallery(); // Rolar para a galeria
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
