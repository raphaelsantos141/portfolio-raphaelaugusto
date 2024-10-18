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

// Array de URLs de imagens de teste
const images = Array.from({ length: 15 }, (_, i) => `https://picsum.photos/300/300?random=${i + 1}`);

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
}

// Função para abrir o modal com a imagem maior
function openModal(imageSrc) {
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
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
