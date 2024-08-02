function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Basic':
            description.textContent = 'This is a modular design of Kitchen with a basic style';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Contemporary | Features: Teak styling, modern decor.';
            break;
        case 'Yellow galley design':
            description.textContent = 'This is a Yellow galley kitchen design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Compact galley kitchen':
            description.textContent = 'This is a Compact galley kitchen';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: Gourmet | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Gold furnished':
            description.textContent = 'This is a Gold furnished galley kitchen.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Complete wood design':
            description.textContent = 'A Complete wood kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: wood|Features: wood design, clean design.';
            break;
        case 'White wood galley':
            description.textContent = 'A White wood galley kitchen design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Luxurious galley kitchen':
            description.textContent = 'A Luxurious galley kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Luxury | Features: Geometric patterns, stylish decor.';
            break;
        case 'Galley kitchen':
            description.textContent = 'A Galley modular kitchen design.';
            details.textContent = 'Room Dimension: 12 x 12 feet | Style: Simple | Features: Geometric patterns, stylish decor.';
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