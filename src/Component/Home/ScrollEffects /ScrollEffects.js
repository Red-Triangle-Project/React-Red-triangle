import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const ScrollEffects = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        function scrollActive() {
            const scrollY = window.pageYOffset;
        
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id');
        
                const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
                if (link) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        link.classList.add('active-link');
                    } else {
                        link.classList.remove('active-link');
                    }
                }
            });
        }
        

        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up');
            if (scrollUp) {
                if (window.scrollY >= 350) {
                    scrollUp.classList.add('show-scroll');
                } else {
                    scrollUp.classList.remove('show-scroll');
                }
            }
        }

        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'bx-sun';

        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
        }

        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });

        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
        });

        sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`);
        sr.reveal(`.home__description, .footer__info`, { delay: 500 });
        sr.reveal(`.home__search`, { delay: 600 });
        sr.reveal(`.home__value`, { delay: 700 });
        sr.reveal(`.home__images`, { delay: 800, origin: 'bottom' });
        sr.reveal(`.logos__img`, { interval: 100 });
        sr.reveal(`.value__images, .contact__content`, { origin: 'left' });
        sr.reveal(`.value__content, .contact__images`, { origin: 'right' });

        return () => {
            window.removeEventListener('scroll', scrollActive);
            window.removeEventListener('scroll', scrollUp);
        };
    }, []); 

    return null; 
};

export default ScrollEffects;
