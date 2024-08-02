function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Basic eclectic design':
            description.textContent = 'This is a Basic eclectic design';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Basic | Features: Teak styling, modern decor.';
            break;
        case 'Sophisticated':
            description.textContent = 'A Sophisticated And Bright Eclectic Living Room.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Room decor':
            description.textContent = 'Scandinavian-Style Eclectic Living Room Decor';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: classic | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Industrial':
            description.textContent = 'Eclectic Living Room Design With An Industrial Touch.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Colourful':
            description.textContent = 'Colourful Eclectic Living Room Decor .';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'Cozy':
            description.textContent = 'A Small And Cozy Eclectic Living Room.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Impressive':
            description.textContent = 'This is an Impressive eclectic living room design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: Coloring, stylish decor.';
            break;
        case 'Classic':
            description.textContent = 'This is a classic and soft furnished eclectic living room design';
            details.textContent = 'Room Dimension: 16 x 13 feet | Style: Soft furnished | Features: neat and clean, stylish decor.';
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