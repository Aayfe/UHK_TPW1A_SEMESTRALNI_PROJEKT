document.addEventListener('DOMContentLoaded', function () {

    alert("!TATO STRÁNKA SLOUŽÍ POUZE JAKO STUDENTSKÝ PROJEKT! VŠECHNY INFORMACE JSOU SMYŠLENÉ");

    
    Zoom('.zoomable', {
        background: 'auto',
        useMaximumSize: true
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const navIcon = document.querySelector('.burger-icon');


        const colorBackground = getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim();

        if (window.scrollY > 0) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.85)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.height = '60px';
            navIcon.classList.add('burger-icon-fixed');
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.height = 'auto';
            navIcon.classList.remove('burger-icon-fixed');

        }
    });
});