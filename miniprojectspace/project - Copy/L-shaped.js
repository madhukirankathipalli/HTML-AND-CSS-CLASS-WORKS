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
        case 'Yellow kitchen design':
            description.textContent = 'This is a Yellow kitchen design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Cheerful L-Shaped kitchen':
            description.textContent = 'This is a Cheerful L-Shaped kitchen';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: modern | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Inclusive furniture design':
            description.textContent = 'This is a Inclusive furniture  l-shaped kitchen design.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Classic l-shaped':
            description.textContent = 'A Classic l-shaped kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'General L-shaped design':
            description.textContent = 'A General L-shaped kitchen design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Black and white kitchen':
            description.textContent = 'A Black and white kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: soft finishing, stylish decor.';
            break;
        case 'Neat and clean kitchen':
            description.textContent = 'A Neat and clean kitchen design.';
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