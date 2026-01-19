        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Add to cart animation
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                this.textContent = '✓ Ajouté!';
                this.style.background = '#4CAF50';
                setTimeout(() => {
                    this.textContent = 'Ajouter au panier';
                    this.style.background = '#000';
                }, 2000);
            });
        });

        // Category modal
        const modal = document.getElementById('category-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeBtn = document.querySelector('.close');

        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                let description = '';

                switch (title) {
                    case '🏋️ Prise de Masse':
                        description = 'Découvrez notre gamme de produits dédiés à la prise de masse musculaire. Gainers riches en calories, protéines de haute qualité et suppléments pour maximiser vos gains. Idéal pour les sportifs cherchant à développer leur masse musculaire de manière efficace et saine.';
                        break;
                    case '💪 Protéines':
                        description = 'Une sélection complète de protéines : whey, caséine, isolat, végétales. Choisissez la source de protéines qui convient à votre régime alimentaire et à vos objectifs sportifs. Qualité premium pour une récupération optimale.';
                        break;
                    case '⚡ Performance':
                        description = 'Boostez vos performances avec notre collection de suppléments : créatine, BCAA, pré-workout, caféine. Améliorez votre endurance, votre force et votre concentration pendant l\'entraînement.';
                        break;
                    case '🌾 Céréales & Snacks':
                        description = 'Des céréales complètes, flocons d\'avoine bio, barres protéinées et snacks healthy. Nourrissez-vous sainement entre les repas avec des produits riches en nutriments et faibles en sucres ajoutés.';
                        break;
                }

                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Generate QR Code for WhatsApp
        window.addEventListener('load', () => {
            const whatsappNumber = '+221777831264'; // Remplacer par le vrai numéro
            const whatsappLink = `https://wa.me/${whatsappNumber}`;
            new QRCode(document.getElementById('qrcode'), {
                text: whatsappLink,
                width: 128,
                height: 128,
            });
        });

        // Burger Menu
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const closeMenu = document.querySelector('.close-menu');

        const toggleMenu = () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        };

        burger.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            }
        });