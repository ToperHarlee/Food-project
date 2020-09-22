'use strict';
function methodOpen(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    //whatShow.style.display = 'block';
    modal.classList.add('show');
    modal.classList.remove('hide');
    //whatShow.classList.toggle('show');
    document.body.style.overflow = 'hidden'; // запрет прокуртки во время всплывания модального окна
    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}
function metHodClose(modalSelector) {
    const modal = document.querySelector(modalSelector);
    //whatClose.style.display = 'none';
    modal.classList.remove('show');
    modal.classList.add('hide');
    //whatClose.classList.toggle('show');
    document.body.style.overflow = 'visible'; // отмена запрета прокрутки
}

function modal(openSelector, modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector),
        btnWhite = document.querySelector('.btn_white'),
        btnDark = document.querySelector('.btn_dark'),
        modalOpen = document.querySelectorAll(openSelector);
    //closeBtn = document.querySelector('.modal__close');
    //closeBtn = document.querySelector('[data-close]');


//для того чтобы обратится к нескольким элементам нужно использовать перебор(т.к. псевдомассив)
    function showModal(element) {
        element.forEach(btn => {
            btn.addEventListener('click', () => methodOpen(modalSelector , modalTimerId));
        });
    }

    // showModal(btnWhite, modal);
    // showModal(btnDark, modal);
    showModal(modalOpen, modal);

    function closeModal(element) {
        element.addEventListener('click', (event) => {
            const target = event.target;
            if (target === modal || event.target.getAttribute('data-close') === '') {
                metHodClose(modalSelector);
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && modal.classList.contains('show')) {
                metHodClose(modalSelector);
            }
        });
    }

    closeModal(modal);

    //************************************* 044 Модификации модального окна ************************************


    function showModalBeScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            methodOpen(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalBeScroll);
        }
    }

    window.addEventListener('scroll', showModalBeScroll);
}

//module.exports = modal;
export default modal;
export {methodOpen};
export {metHodClose};
