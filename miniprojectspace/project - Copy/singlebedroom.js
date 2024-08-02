function openModal(img, captionText) {
    var modal = document.getElementById("smyModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'scontemporary':
            description.textContent = 'This contemporary bedroom features a plush tufted bed with modern accents.';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Contemporary | Features: Tufted bed, modern decor.';
            break;
        case 'smodern':
            description.textContent = 'A modern bedroom showcasing elegant lighting and a sleek design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant lighting, sleek furniture.';
            break;
        case 'scozy':
            description.textContent = 'A cozy bedroom featuring warm wooden accents and a comfortable layout.';
            details.textContent = 'Room Dimension: 16 x 16 feet | Style: Cozy | Features: Wooden accents, comfortable furniture.';
            break;
        case 'sbed':
            description.textContent = 'A cozy bedroom featuring warm wooden accents and a comfortable layout.';
            details.textContent = 'Room Dimension: 16 x 16 feet | Style: Cozy | Features: Wooden accents, comfortable furniture.';
            break;
        case 'sluxurious':
            description.textContent = 'luxurious and a sophisticated ambiance.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Luxurious | Features: Soft furnishings, elegant decor.';
            break;
        case 'sminimalist':
            description.textContent = 'A minimalist and a clean, simple design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: Minimalist|Features: Large windows, clean design.';
            break;
        case 'schic':
            description.textContent = 'A chic bedroom adorned with stylish geometric patterns.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: Chic | Features: Geometric patterns, stylish decor.';
            break;
        case 'scozy':
            description.textContent = 'A chic bedroom adorned with stylish geometric patterns.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Chic | Features: Geometric patterns, stylish decor.';
            break;
        default:
            description.textContent = 'Description not available.';
            details.textContent = 'Details not available.';
            break;
    }
}

function closeModal() {
    var modal = document.getElementById("smyModal");
    modal.style.display = "none";
}

function orderNow() {
    alert('Order functionality is not yet implemented.');
}

window.onclick = function (event) {
    var modal = document.getElementById("smyModal");
    if (event.target === modal) {
        closeModal();
    }
}

function toggleIconColor(element) {
    var icon = element.querySelector('i');
    icon.classList.toggle('red');
}