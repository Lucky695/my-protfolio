let MenuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

/*======================================= scroll section active link =====================*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================================= sticky navbar =====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================================= remove toggle icon and navbar =====================*/

    MenuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};


/*======================================= scroll reveal  =====================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


/*======================================= typed js =====================*/

document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});