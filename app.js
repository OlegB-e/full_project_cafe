const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

if (burger && menu) {
    burger.addEventListener('click', () => {
        const isExpanded = menu.classList.toggle('disp');
        burger.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (event) => {
        if (!burger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.add('disp'); // Закрыть меню, если кликнули вне
        }
    });
}
