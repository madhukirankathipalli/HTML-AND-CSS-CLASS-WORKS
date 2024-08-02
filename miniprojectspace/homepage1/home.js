
let isMenuOpen = false; 

function toggleMenu(event) {
    const menu = document.getElementById('headbutton');

    if (isMenuOpen) {
        menu.style.left = '-100%'; 
        isMenuOpen = false;
    } else {
        menu.style.left = '0';
        isMenuOpen = true;
    }
}
document.addEventListener('click', function (event) {
    const menu = document.getElementById('headbutton');
    const menuButton = document.querySelector('.menu');

    if (isMenuOpen && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.left = '-100%'; 
        isMenuOpen = false;
    }
});
function openSignInPopup() {
    document.getElementById('signInPopup').style.display = 'block';
    document.getElementById('signUpPopup').style.display = 'none';
}

function openSignUpPopup() {
    document.getElementById('signUpPopup').style.display = 'block';
    document.getElementById('signInPopup').style.display = 'none';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

window.onclick = function(event) {
    const signInPopup = document.getElementById('signInPopup');
    const signUpPopup = document.getElementById('signUpPopup');
    if (event.target === signInPopup) {
        signInPopup.style.display = 'none';
    } else if (event.target === signUpPopup) {
        signUpPopup.style.display = 'none';
    }
}
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

function aboutus() {
    window.location.href = '../aboutpage/practiceabout.html';
    console.log('Designs button clicked!');
  }
function support() {
    window.location.href = 'support.html';
    console.log('Designs button clicked!');
  }
function handleClick() {
    window.location.href = '../project - Copy/index.html';
    console.log('Designs button clicked!');
  }
function reviewspage() {
    window.location.href = '../reviews_page/miniproject/reviews_client.html';
    console.log('Designs button clicked!');
  }


document.addEventListener('DOMContentLoaded', () => {
    const parent = document.getElementById('hpg2_parent');
    const shapes = document.querySelector('.shapes');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                parent.classList.add('animate-once');
            } else {
                parent.classList.remove('animate-once');
            }
        });
    });

    observer.observe(parent);

    function handleMouseMove() {
        shapes.classList.add('active');

        clearTimeout(shapes.timeout);
        shapes.timeout = setTimeout(() => {
            shapes.classList.remove('active');
        }, 5000);
    }

    document.addEventListener('mousemove', handleMouseMove);
});
function openSignInPopup() {
    document.getElementById('signInPopup').style.display = 'block';
    document.getElementById('signUpPopup').style.display = 'none';
}

function openSignUpPopup() {
    document.getElementById('signUpPopup').style.display = 'block';
    document.getElementById('signInPopup').style.display = 'none';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

window.onclick = function(event) {
    const signInPopup = document.getElementById('signInPopup');
    const signUpPopup = document.getElementById('signUpPopup');
    if (event.target === signInPopup) {
        signInPopup.style.display = 'none';
    } else if (event.target === signUpPopup) {
        signUpPopup.style.display = 'none';
    }
}