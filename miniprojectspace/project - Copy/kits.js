function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Basic':
            description.textContent = 'This is a modular design of Island Kitchen with a basic style';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Contemporary | Features: Teak styling, modern decor.';
            break;
        case 'Comfortably Seatable island kitchen':
            description.textContent = 'This is a comfortably seatable island kitchen for family gatherings.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Spacious island modular kitchen':
            description.textContent = 'This is a spacious island modular kitchen for large capacity';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: Cozy | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Seatable island kitchen':
            description.textContent = 'This is a basic seatable island kitchen.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Basic | Features: Soft furnishings, elegant decor.';
            break;
        case 'Luxurious island kitchen':
            description.textContent = 'A luxurious island kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: Luxury|Features: luxury design, clean design.';
            break;
        case 'Laminated island kitchen':
            description.textContent = 'A simple and clean island kitchen design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: Simple | Features: Strong fininshing, stylish decor.';
            break;
        case 'Elegant island kitchen':
            description.textContent = 'An elegant and strongly finished kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Chic | Features: Geometric patterns, stylish decor.';
            break;
        case 'Simple island kitchen':
            description.textContent = 'A simple island modular kitchen design.';
            details.textContent = 'Room Dimension: 13 x 13 feet | Style: Simple | Features: Geometric patterns, stylish decor.';
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
    icon.style.Color ="red";
}