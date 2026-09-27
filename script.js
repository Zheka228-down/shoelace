document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const drawer = document.getElementById('drawer');

    if (burgerBtn && drawer) {
        burgerBtn.addEventListener('click', () => {
            drawer.open = true;
        });
    }

    // Закрытие drawer при клике по ссылке
    const drawerLinks = drawer?.querySelectorAll('a');
    drawerLinks?.forEach(link => {
        link.addEventListener('click', () => {
            drawer.open = false;
        });
    });

    // Простая валидация формы подписки
    const subscribeForm = document.querySelector('.sidebar__form');
    subscribeForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = subscribeForm.querySelector('sl-input');
        if (input && input.value) {
            alert(`Спасибо! Вы подписаны на рассылку: ${input.value}`);
            input.value = '';
        }
    });

    // Валидация формы обратной связи
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
});