function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'macontemprary':
            description.textContent = 'Indian Traditional Mandir Design With Wooden Finish.';
            details.textContent = 'Room Dimension: 6 x 7 feet | Style: Contemporary | Features: Traditional design, modern decor.';
            break;
        case 'mamodern':
            description.textContent = 'Modern Mandir Unit Design With LED Wall And Lotus Motifs.';
            details.textContent = 'Room Dimension: 5 x 8 feet | Style: Modern | Features: Elegant lighting, sleek furniture.';
            break;
        case 'macoz':
            description.textContent = 'Contemporary Wooden Mandir Design With Textured Grey Accent Wall.';
            details.textContent = 'Room Dimension: 10 x 12 feet | Style: Contemporery | Features: Wooden accents, comfortable furniture.';
            break;
        case 'mabed':
            description.textContent = 'Contemporary Wooden Mandir Design With Textured Grey Accent Wall.';
            details.textContent = 'Room Dimension: 10 x 12 feet | Style: Contemporery | Features: Wooden accents, comfortable furniture.';
            break;
        case 'maluxurious':
            description.textContent = 'Modern Wooden Mandir Design With Beige Damask Wallpaper.';
            details.textContent = 'Room Dimension: 6 x 5 feet | Style: Modern | Features: Soft furnishings, elegant decor.';
            break;
        case 'maminimalist':
            description.textContent = 'Indian Traditional Mandir Design With Grey Stone Cladding And Granite Console';
            details.textContent = 'Room Dimension: 19 x 9 feet |Style: Traditional design|Features: Stone Cladding, Granite Console.';
            break;
        case 'machic':
            description.textContent = 'Modern Mandir Design With Floor Mounted Storage Units And Wall Mounted Shelves.';
            details.textContent = 'Room Dimension: 8 x 9 feet | Style:Modern Mandi  | Features: Wall Mounted Shelves, stylish decor.';
            break;
        case 'macozybed':
            description.textContent = 'Modern All White Mandir Design With Om Mandala And Ornate Door.';
            details.textContent = 'Room Dimension: 5 x 4 feet | Style: Modern | Features: Geometric patterns, stylish decor.';
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