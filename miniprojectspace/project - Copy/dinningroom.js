function openModal(img, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var description = document.getElementById("modalDescription");
    var details = document.getElementById("modalDetails");
    modal.style.display = "flex";
    modalImg.src = img.src;
    switch (captionText) {
        case 'dcon':
            description.textContent = 'Contemporary 4 Seater Round Dining Room Design With Pastel Blue Chairs.';
            details.textContent = 'Room Dimension: 7 x 7 feet | Style: Contemporary | Features: 4-seater round dining table with pastel blue chairs.';
            break;
        case 'dmod':
            description.textContent = 'Modern Beige 6 Seater Dining Room Design With White Storage Unit.';
            details.textContent = 'Room Dimension: 12 x 16 feet | Style: Modern | Features: Beige 6-seater dining table with glossy table-top.';
            break;
        case 'dcozy':
            description.textContent = 'Blue and Wood Contemporary Dining Room Design With 6 Seater Dining.';
            details.textContent = 'Room Dimension: 12 x 18 feet | Style:  Contemporary | Features: 6 seater dining table with wooden top and wooden legs.';
            break;
        case 'dbed':
            description.textContent = 'Modern White And Brown 6 Seater Dining Room Design.';
            details.textContent = 'Room Dimension: 15 x 12 feet | Style: Modern | Features: White and brown 6-seater dining table.';
            break;
        case 'dlux':
            description.textContent = 'Contemporary Dining Room Design With White Crockery Unit.';
            details.textContent = 'Room Dimension: 13 x 13 feet | Style: Luxurious | Features: 6 seater grey and black dining table -White crockery unit.';
            break;
        case 'dmin':
            description.textContent = 'Modern White And Beige 6 Seater Dining Room Design With Mirrored Wall Panel.';
            details.textContent = 'Room Dimension: 13 x 11 feet |Style: Modern|Features: 6-seater white and beige dining table with wooden legs.';
            break;
        case 'dchic':
            description.textContent = 'Contemporary Teal And Gold 6 Seater Dining Room Design.';
            details.textContent = 'Room Dimension: 14 x 12 feet | Style: Contemporary | Features: G6-seater dining table with teal chairs and gold-toned legs.';
            break;
        case 'dc':
            description.textContent = 'Contemporary White And Beige 6 Seater Dining Room Design With Bevelled Mirror Accent Wall.';
            details.textContent = 'Room Dimension: 15 x 13 feet | Style: Contemporary | Features: White and beige 6-seater dining table.';
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