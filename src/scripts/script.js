document.addEventListener('DOMContentLoaded', function() {
            var popup = document.getElementById('popup');
            var closeButton = document.getElementById('close-popup');

           
            closeButton.addEventListener('click', function() {
                popup.style.display = 'none';
            });

            window.addEventListener('click', function(event) {
                if (event.target == popup) {
                    popup.style.display = 'none';
                }
            });

            Zoom('.zoomable', {
                    background: 'auto', 
                    useMaximumSize: true 
                });

             window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const navIcon = document.querySelector('.burger-icon');


        const colorBackground = getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim();

        if (window.scrollY > 0) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.7)';
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