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
        case 'Cherry wood design':
            description.textContent = 'This is a Cherrywood parallel kitchen design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Gourmet cabin kitchen':
            description.textContent = 'This is a Gourmet cabin kitchen';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: Gourmet | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Modern black furnished':
            description.textContent = 'This is a Modern black furnished kitchen.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Modern parallel kitchen':
            description.textContent = 'A Modern parallel kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: Luxury|Features: luxury design, clean design.';
            break;
        case 'Cosy white kitchen':
            description.textContent = 'A Cosy white parallel kitchen design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: Cosy | Features: Soft fininshing, stylish decor.';
            break;
        case 'Simple parallel kitchen':
            description.textContent = 'A Simple parallel kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Simple | Features: Geometric patterns, stylish decor.';
            break;
        case 'Luxurious parallel kitchen':
            description.textContent = 'A Luxurious parallel modular kitchen design.';
            details.textContent = 'Room Dimension: 16 x 16 feet | Style: Simple | Features: Geometric patterns, stylish decor.';
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