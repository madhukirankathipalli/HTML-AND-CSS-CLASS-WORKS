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
        case 'Open hall kitchen design':
            description.textContent = 'This is an Open hall kitchen design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant styling, sleek furniture.';
            break;
        case 'Open kitchen with dining hall':
            description.textContent = 'This is an Open kitchen with dining hall';
            details.textContent = 'Room Dimension: 20 x 20 feet | Style: modern | Features: Sleek styling, comfortable furniture.';
            break;
        case 'Simple open kitchen design':
            description.textContent = 'This is a Simple open kitchen design.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'Open island kitchen design':
            description.textContent = 'An Open island kitchen design.';
            details.textContent = 'Room Dimension: 17 x 14 feet |Style: classic|Features: wood design, clean design.';
            break;
        case 'Open kitchen loft design':
            description.textContent = 'This is an Open kitchen loft design.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: wood | Features: Soft fininshing, stylish decor.';
            break;
        case 'Open small kitchen':
            description.textContent = 'This modular is an Open small kitchen design.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: simple | Features: soft finishing, stylish decor.';
            break;
        case 'Outdoor kitchen design':
            description.textContent = 'This is an Open Kitchen Design With Grand Outdoors.';
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