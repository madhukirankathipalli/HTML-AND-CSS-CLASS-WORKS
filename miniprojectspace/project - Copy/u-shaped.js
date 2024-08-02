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
        case 'Modern kitchen design':
            description.textContent = 'This is a Modern U-shaped kitchen design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Compact U-Shaped kitchen':
            description.textContent = 'This is a Compact and vibrant U-Shaped kitchen';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: modern | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Ultra modern design':
            description.textContent = 'This is an Ultra modern kitchen design.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Modern U-shaped':
            description.textContent = 'A Modern U-shaped kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'Small U-shaped design':
            description.textContent = 'A Small U-shaped kitchen design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Parrot green kitchen design':
            description.textContent = 'A Parrot green kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: soft finishing, stylish decor.';
            break;
        case 'Uber cool kitchen':
            description.textContent = 'A Uber cool kitchen design.';
            details.textContent = 'Room Dimension: 12 x 12 feet | Style: Simple | Features: neat and clean, stylish decor.';
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