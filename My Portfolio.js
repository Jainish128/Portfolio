

/* ->->->->->| Toggle Icon Navbar |<-<-<-<-<- */
var menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* ->->->->->| Scroll Sections Active Links |<-<-<-<-<- */

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          })  
        };
    });
};

/* ->->->->->| Sticky Navbar |<-<-<-<-<- */
var header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



/* ->->->->->| Remove Toggle Icon and Navbar when click navbar Link (Scroll) |<-<-<-<-<- */
function LinkClicked() 
{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
}


/* ->->->->->| Scroll Reveal |<-<-<-<-<- */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/* ->->->->->| Typed JS -> Multiple Text |<-<-<-<-<- */
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Developer & Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});


