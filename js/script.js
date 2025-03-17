document.addEventListener('DOMContentLoaded', function() {
    const headerBackground = document.querySelector('.header-background');
    const navLinks = document.querySelectorAll('.navbar a');
    const missionText = document.getElementById('mission-text');

    function changeHeaderBackground(imageName) {
        headerBackground.style.backgroundImage = `url('images/${imageName}')`;
    }

  function changeNavColor(color) {
    navLinks.forEach(link => {
        link.style.color = color;
    });
}

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const imageName = this.getAttribute('data-image');
            changeHeaderBackground(imageName);

            const mission = this.getAttribute('data-mission');
            missionText.textContent = mission;

            // Change navigation color
            const navColor = this.getAttribute('data-color');
            changeNavColor(navColor);

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');

            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = href;
            }
        });
    });

    window.addEventListener('pageshow', function(event) {
        const activeLink = document.querySelector('.navbar a.active');
        if (activeLink) {
            const initialImage = activeLink.getAttribute('data-image');
            changeHeaderBackground(initialImage);
            const initialMission = activeLink.getAttribute('data-mission');
            missionText.textContent = initialMission;

            // Set initial navigation color
            const initialNavColor = activeLink.getAttribute('data-color');
            changeNavColor(initialNavColor);
        }
    });
});