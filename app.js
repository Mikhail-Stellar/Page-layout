document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.finishing-card'));

    if (!cards.length) return;

    const closeAll = () => {
        cards.forEach(c => c.classList.remove('is-open'));
    };

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Если нажали на кнопку/ссылку “ЗАКАЗАТЬ” внутри карточки — не закрываем карточку
            const orderBtn = e.target.closest('.button--order');
            if (orderBtn) return;

            const willOpen = !card.classList.contains('is-open');
            closeAll();
            if (willOpen) card.classList.add('is-open');
        }, { passive: true });
    });

    // Клик вне карточек закрывает открытые
    document.addEventListener('click', (e) => {
        const inside = e.target.closest('.finishing-card');
        if (!inside) closeAll();
    });

    // ESC закрывает
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });
});