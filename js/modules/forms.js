'use strict';
import {methodOpen, metHodClose} from "./modal";
import {postData} from "../services/services";

function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector),
        modalInput = document.querySelectorAll('modal__input');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свзяжемся',
        failure: 'Что то пошло не так...'
    };
    // подвязываем под каждую форму функцию formData
    forms.forEach(item => {bindPostData(item)});


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            // тут вместо добавления стилей можно добавить класс в котором будут
            // прописаны стили и спозиционировано изображение загрузки итд
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);// FormData собранные данные от пользователя из формы(создается в виде обьекта)

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // entries - возвращает данные в виде массива с подмассивов с двумя значениями(ключ-значение)
            //сначала превращаем обьект в массив с подмассивами, потом обратно в обьект а потом в json
            // promise который сделан при помощи fetch  не перейдет в состояние reject  изза ответа http который может быть ошибкой(404 итд)
            // ошибкой будет считатся например не выполненный запрос

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function  showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        methodOpen('.modal', modalTimerId);
        //showModal(modalOpen, modal);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
           <div class="modal__close" data-close>×</div>
           <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            metHodClose('.modal');
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            //closeModal(modal);
        }, 3000);
    }
}

//module.exports = forms;
export default forms;
















