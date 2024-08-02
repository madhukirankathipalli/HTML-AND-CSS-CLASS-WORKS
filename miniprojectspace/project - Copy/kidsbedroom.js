function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Contemporary Master Bedroom Design With Tufted Bed':
            description.textContent = 'Modern Kids Bedroom Design With Single Bedroom.';
            details.textContent = 'Room Dimension: 12 x 10 feet | Style: Modern | Features: Tufted bed, modern decor.';
            break;
        case 'Modern Bedroom with Elegant Lighting':
            description.textContent = 'A modern Kids bedroom Design showcasing elegant lighting and a sleek design.';
            details.textContent = 'Room Dimension: 18 x 15 feet | Style: Modern | Features: Elegant lighting, sleek furniture.';
            break;
        case 'Cozy Bedroom with Wooden Accents':
            description.textContent = 'A cozy bedroom featuring warm wooden accents and a comfortable layout.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Cozy | Features: Wooden accents, comfortable furniture.';
            break;
        case 'Cozy Bedroom with Wooden Accent':
            description.textContent = 'Beach Theme Contemporary Kids Bedroom Design With Two Single Beds.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Contemporary | Features: Two wooden single beds with three side tables.';
            break;
        case 'Luxurious Bedroom with Soft Furnishings':
            description.textContent = 'Modern Kids Bedroom Design With Twin Beds and Swing Wardrobe.';
            details.textContent = 'Room Dimension: 16 x 12 feet | Style: Modern | Features: Upholstered two single bed with headboard.';
            break;
        case 'Minimalist Bedroom with Large Windows':
            description.textContent = 'Modern Kids Bedroom Design With Shared Bunk Bed With Storage.';
            details.textContent = 'Room Dimension: 13 x 12 feet |Style: Modern|Features: A wooden bunk bed with storage.';
            break;
        case 'Chic Bedroom with Geometric Patterns':
            description.textContent = 'A Contemporary Kids Bedroom Design with Classic design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: Chic | Features: Classical design, stylish decor.';
            break;
        case 'Cozy Bedroom with Wooden':
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
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function orderNow() {
    alert('Order functionality is not yet implemented.');
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

function toggleIconColor(element) {
    var icon = element.querySelector('i');
    icon.classList.toggle('red');
}