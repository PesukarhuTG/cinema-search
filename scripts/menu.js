const openMenu = (nav, classActive) => {
    nav.classList.add(classActive);
};

const closeMenu = (nav, classActive) => {
    nav.classList.remove(classActive);
};

const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
    const burgerBtn = document.querySelector(openBtn);
    const navigation = document.querySelector(menu);
    const navigationClose = document.querySelectorAll(closeTrigger);

    burgerBtn.addEventListener('click', () => openMenu(navigation, classActiveMenu));

    navigationClose.forEach(item => {
        item.addEventListener('click', () => closeMenu(navigation, classActiveMenu));
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeMenu(navigation, classActiveMenu);
        } else {
            return;
        }
    })
};

export default slideMenu;

