function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'Basic Scandinavian design':
            description.textContent = 'This is a Basic Scandinavian design';
            details.textContent = 'Room Dimension: 16 x 20 feet | Style: Basic | Features: Teak styling, modern decor.';
            break;
        case 'rustic living room':
            description.textContent = 'This is a Rustic Scandinavian Living Room design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Scandinavian boho living room':
            description.textContent = 'This is a Scandinavian Living Room With A Boho Touch';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: classic | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Light Scandinavian':
            description.textContent = 'Lighting Ideas For Scandinavian living room.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Curtain':
            description.textContent = 'Scandinavian Living Room With Huge Windows And Beautiful Curtains.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'Green living room':
            description.textContent = 'A Dash Of Green To Your Scandinavian Living Room.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Cozy':
            description.textContent = 'Comfortable Drapes, Cushions For A Cozy Vibe.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: soft finishing, stylish decor.';
            break;
        case 'Wooden design':
            description.textContent = 'Elements Of Wooden Adds To The Warmth Of Your Scandinavian Design';
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