// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

(() => {
    const refs = {
        openMobileBtn: document.querySelector('[data-mobile-open]'),
        closeMobileBtn: document.querySelector('[data-mobile-close]'),
        mobile: document.querySelector('[data-menu]'),
    };

    refs.openMobileBtn.addEventListener('click', toggleMobile);
    refs.closeMobileBtn.addEventListener('click', toggleMobile);

    function toggleMobile() {
        document.body.classList.toggle("modal-open");
        refs.mobile.classList.toggle('is-open');

    }
})();