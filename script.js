document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Mensagem enviada! Entraremos em contato em breve.');
    this.reset();
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menuNav');
        if (menu.classList.contains('show')) {
            new bootstrap.Collapse(menu).hide();
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.card-servico').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `.visivel { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});