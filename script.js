// DOMContentLoaded to ensure elements are ready
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // --- Mobile Dropdown Toggle ---
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault(); // Prevent navigation on first click
                    dropdown.classList.toggle('active');
                }
            });
        });
    }

    // --- Sticky Header Shadow on Scroll ---
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
            header.style.padding = '0';
        }
    });

    // --- Notice Board Pause on Hover ---
    const noticeBoard = document.querySelector('.notice-body');
    const noticeList = document.querySelector('.notice-list');

    if (noticeBoard && noticeList) {
        noticeBoard.addEventListener('mouseenter', () => {
            noticeList.style.animationPlayState = 'paused';
        });

        noticeBoard.addEventListener('mouseleave', () => {
            noticeList.style.animationPlayState = 'running';
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.querySelector('i').classList.remove('fa-times');
                    mobileToggle.querySelector('i').classList.add('fa-bars');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Simple Form Validation (for future forms) ---
    // Example: Admission Enquiry Form
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add validation logic here
            alert('Thank you for your enquiry. We will contact you soon.');
            admissionForm.reset();
        });
    }
});
