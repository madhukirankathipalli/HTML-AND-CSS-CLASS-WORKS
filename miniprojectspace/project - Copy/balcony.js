function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'bacontemporary':
            description.textContent = 'Modern Balcony Design With Seating Area.';
            details.textContent = 'Room Dimension: 10 x 12 feet | Style: Modern | Features: A spacious balcony styled with modern decor. The seating area is raised by a platform and highlighted by profiled cove lights..';
            break;
        case 'bamodern':
            description.textContent = 'Modern Balcony Design with White Wall Paint and Stylish Furnishings.';
            details.textContent = 'Room Dimension: 5 x 9 feet | Style: Modern | Features: Grass mat to add a natural touch to your outdoor space.';
            break;
        case 'bacozy':
            description.textContent = 'Contemporary Balcony Design with Solid Off White Wall and Stylish Furnishings.';
            details.textContent = 'Room Dimension: 7 x 9 feet | Style: Contemporary | Features: Wooden flooring for a warm and inviting ambiance.';
            break;
        case 'babed':
            description.textContent = 'Spacious Contemporary Style Convenient Balcony Design.';
            details.textContent = 'Room Dimension: 10 x 8 feet | Style: Contemporary | Features: Wooden accents, comfortable furniture.';
            break;
        case 'baluxurious':
            description.textContent = 'Modern Balcony Design With Grey Brick Stone Cladding And Grass Mat.';
            details.textContent = 'Room Dimension: 12 x 18 feet | Style: Modern | Features: Floor grass mat and wooden flooring.';
            break;
        case 'baminimalist':
            description.textContent = 'Contemporary Balcony Design with Grey Accent Wall and Vertical Wall Planters.';
            details.textContent = 'Room Dimension: 13 x 10 feet |Style: Contemporary|Features: Spacious balcony with a U-shaped grey and wood sofa set and wooden coffee table';
            break;
        case 'bachic':
            description.textContent = 'Modern Balcony Design With Vertical Wall Planters.';
            details.textContent = 'Room Dimension: 8 x 10 feet | Style: Modern | Features: Geometric patterns, stylish decor.';
            break;
        case 'bacozybed':
            description.textContent = 'Coastal Balcony Design With Stone Cladding Wall.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Coastal | Features: Wooden horizontal plank false ceiling.';
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