const modal = document.getElementById('caseModal');
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalDetails = modal.querySelector('.modal-details');
const modalImage = modal.querySelector('.modal-image');
const closeBtn = modal.querySelector('.modal-close');

const cases = [
    {
        title: 'Entrevista Exclusiva',
        description: 'Bastidores de uma entrevista especial com insights incríveis!',
        image: 'assets/img/background-warp.jpg',
        modalImage: 'assets/img/polo-seguradora.jpg',
        details: 'Uma entrevista exclusiva que traz perspectivas únicas e insights valiosos sobre o tema em discussão. Nossa equipe capturou cada momento especial, garantindo que a essência da conversa fosse preservada.'
    },
    {
        title: 'Nos Bastidores',
        description: 'A preparação é essencial para um conteúdo de qualidade.',
        image: 'assets/img/background-warp2.jpg',
        modalImage: 'assets/img/polo-seguradora.jpg',
        details: 'O trabalho nos bastidores é fundamental para o sucesso de qualquer produção. Mostramos o processo de preparação e organização que garante a excelência do conteúdo final.'
    },
    {
        title: 'Histórias que Inspiram',
        description: 'Uma conversa sobre inovação e empreendedorismo.',
        image: 'assets/img/background-warp3.jpg',
        modalImage: 'assets/img/vociem.jpg',
        details: 'Compartilhamos histórias inspiradoras de empreendedores e inovadores que estão transformando seus setores. Cada história é única e traz valiosas lições para o público.'
    },
    {
        title: 'Fique por dentro!',
        description: 'Trazendo novidades e tendências para você.',
        image: 'assets/img/background-warp4.jpg',
        modalImage: 'assets/img/vociem.jpg',
        details: 'Mantenha-se atualizado com as últimas tendências e novidades do mercado. Nossa equipe está sempre atenta às mudanças e traz as informações mais relevantes para você.'
    }
];

let hoverTimeout;
let isModalOpen = false;

function openModal(caseData) {
    modalTitle.textContent = caseData.title;
    modalDescription.textContent = caseData.description;
    modalDetails.textContent = caseData.details;
    modalImage.src = caseData.modalImage;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    isModalOpen = true;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    isModalOpen = false;
}

document.querySelectorAll('.case-image').forEach((caseImage, index) => {
    caseImage.addEventListener('mouseenter', () => {
        if (!isModalOpen) {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                openModal(cases[index]);
            }, 300);
        }
    });

    caseImage.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        closeModal();
    });
});

modal.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
});

modal.addEventListener('mouseleave', () => {
    closeModal();
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
}); 