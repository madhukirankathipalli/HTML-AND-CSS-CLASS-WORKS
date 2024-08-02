function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Basic Minimalistic design':
            description.textContent = 'This is a Basic Minimalistic style living room';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Basic | Features: Teak styling, modern decor.';
            break;
        case 'Soft furnished living room':
            description.textContent = 'This is a Soft furnished minimalistic living room design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Green minimalistic living room':
            description.textContent = 'This is a Green minimalistic living room';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: classic | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Black n white style living room':
            description.textContent = 'This is a Black and white style minimalistic living room.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Anchor piece':
            description.textContent = 'A minimalist living room with a large piece of furniture to minimize visual clutter.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'Soft':
            description.textContent = 'This is the minimalist living room with soft coloring.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Modern minimalist living room':
            description.textContent = 'The Modern minimalist living room design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: soft finishing, stylish decor.';
            break;
        case 'Simple minimalist style living room':
            description.textContent = 'This is a Simple minimalist style living room';
            details.textContent = 'Room Dimension: 16 x 13 feet | Style: Simple | Features: neat and clean, stylish decor.';
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