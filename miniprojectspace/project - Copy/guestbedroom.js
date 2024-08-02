function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'gcontemporary':
            description.textContent = 'Contemporary Guest Bedroom Design With Dark Brown Accent Wall And Wall Trims.';
            details.textContent = 'Room Dimension: 12 x 12 feet | Style: Contemporary | Features: The dark brown wall serves as a stunning focal point, tying together all the interior design accents.';
            break;
        case 'gmodern':
            description.textContent = 'A modern Guest bedroom showcasing elegant lighting and a sleek design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Modern | Features: Elegant lighting, sleek furniture.';
            break;
        case 'Cgcozy':
            description.textContent = 'Minimalist Guest Bedroom Design With Queen Storage Bed.';
            details.textContent = 'Room Dimension: 16 x 16 feet | Style: Minimal | Features: Guest bedroom with chest of draw, study table, chair and side table .';
            break;
        case 'gbed':
            description.textContent = 'A cozy Guest bedroom featuring warm wooden accents and a comfortable layout.';
            details.textContent = 'Room Dimension: 16 x 16 feet | Style: Cozy | Features: Wooden accents, comfortable furniture.';
            break;
        case 'glux':
            description.textContent = 'Luxurious Guest bedroom with soft furnishings and a sophisticated ambiance.';
            details.textContent = 'Room Dimension: 14 x 14 feet | Style: Luxurious | Features: Soft furnishings, elegant decor.';
            break;
        case 'gmin':
            description.textContent = 'Modern Guest Bedroom Design With Grey Bed And Marble Accent Wall.';
            details.textContent = 'Room Dimension: 14 x 14 feet |Style: Modern|Features:  Queen-size grey bed with end-to-end headboard - Wood wall-mounted side storage';
            break;
        case 'gchic':
            description.textContent = 'Modern Guest Room Design With Tropical Inspired Leafy Wallpaper.';
            details.textContent = 'Room Dimension: 13 x 10 feet | Style: Modern | Features:  Beige and brown leafy wallpaper with tropical-inspired wall art.';
            break;
        case 'gcozybed':
            description.textContent = 'Modern Guest Room Design With Elegant Grey Damask Wallpaper.';
            details.textContent = 'Room Dimension: 12 x 10 feet | Style: Modern | Features: 4-door maroon swing wardrobe -Dark wood side table.';
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