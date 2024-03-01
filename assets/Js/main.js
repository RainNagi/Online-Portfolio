// For Navigation Bar
const burgerBtn = document.querySelector('.burgerbtn');
const burgerBtnIcon = document.querySelector('.burgerbtn i');
const dropDownMenu = document.querySelector('.dropDownMenu');
const header = document.getElementById('navbar');

burgerBtn.addEventListener("click", function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    burgerBtnIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';
});

dropDownMenu.addEventListener("click", function() {
    dropDownMenu.classList.remove('open');
    const isOpen = dropDownMenu.classList.remove('open');
    burgerBtnIcon.classList = isOpen ? 'fa fa-close' : 'fa fa-bars';
});

// For EB
let west1Logo = document.querySelector('.west1_logo');
let ldnhsLogo =  document.querySelector('.ldnhsLogo') ;
let cstcLogo = document.querySelector('.cstcLogo');
let dllLogo = document.querySelector('.dllLogo');

function hoverIn(x) {
    x.style.width = "100px";
    x.style.height = "100px";
    x.style.filter = "none";
}
function hoverout(x) {
    x.style.width = "60px";
    x.style.height = "60px";
    x.style.filter = "saturate(0)";
}


// Scroll Animation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.sectionsbnts a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section id
            const targetSection = document.getElementById(targetId); // Get the target section
            smoothScroll(targetSection);
        });
    });

    function smoothScroll(target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // milliseconds

        let start = null;
        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    }
});