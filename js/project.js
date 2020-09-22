'use strict';
// ********************************** 038 Создаем табы в новом проекте ***************************************************

// window.addEventListener('DOMContentLoaded', () => {
// Табы
/*const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

    function hideTabs() {
        tabsContent.forEach(tab => {
            //tab.style.display = 'none';
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });

        tabs.forEach(menuItem => {
            menuItem.classList.remove('tabheader__item_active');
        });
    }

    function showTabs(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabs();
    showTabs();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((items, i) => {
                if (target === items) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });*/

    // *************************************** 041 Создаем таймер обратного отсчета на сайте *****************************************
    //таймер
    /*const deadline = '2020-09-13';

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
          const t = getTimeRemaining(endtime);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
              clearInterval(timeInterval);
              days.innerHTML = '00';
              hours.innerHTML = '00';
              minutes.innerHTML = '00';
              seconds.innerHTML = '00';
              let endTimer = document.createElement('div');
              endTimer.classList.add('endtimer');
              endTimer.style.fontSize = '18px';
              endTimer.textContent = 'Время вышло, обновите дату таймера';
              document.querySelector('.promotion__timer .title').append(endTimer);
          }
        }
    }*/

    //setClock('.timer', deadline);
   //******************************************* 043 Создаем модальное окно ********************************************************
   // модальное окно
   /*const modal = document.querySelector('.modal'),
         btnWhite = document.querySelector('.btn_white'),
         btnDark = document.querySelector('.btn_dark'),
         modalOpen = document.querySelectorAll('[data-modal]');
         //closeBtn = document.querySelector('.modal__close');
         //closeBtn = document.querySelector('[data-close]');


   function methodOpen() {
        //whatShow.style.display = 'block';
        modal.classList.add('show');
        modal.classList.remove('hide');
       //whatShow.classList.toggle('show');
       document.body.style.overflow = 'hidden'; // запрет прокуртки во время всплывания модального окна
       clearInterval(modalTimerId);
   }

//для того чтобы обратится к нескольким элементам нужно использовать перебор(т.к. псевдомассив)
   function showModal(element) {
       element.forEach(btn => {
           btn.addEventListener('click', (event) => {
                  methodOpen();
           });
       });
   }

   // showModal(btnWhite, modal);
   // showModal(btnDark, modal);
    showModal(modalOpen, modal);

   function metHodClose(whatClose) {
       //whatClose.style.display = 'none';
       whatClose.classList.remove('show');
       whatClose.classList.add('hide');
       //whatClose.classList.toggle('show');
       document.body.style.overflow = 'visible'; // отмена запрета прокрутки
   }

   function closeModal(element) {
      element.addEventListener('click', (event) => {
          const target = event.target;
          if (target === modal || event.target.getAttribute('data-close') === '') {
              metHodClose(modal);
          }
      });
       document.addEventListener('keydown', (event) => {
           if (event.code === 'Escape' && modal.classList.contains('show')) {
               metHodClose(modal);
           }
       });
   }

   closeModal(modal);

   //!************************************* 044 Модификации модального окна ************************************
    const modalTimerId = setTimeout(methodOpen, 500000);

    function showModalBeScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            methodOpen();
            window.removeEventListener('scroll', showModalBeScroll);
        }
    }

    window.addEventListener('scroll', showModalBeScroll);*/

    //************************************************** 048 Используем классы в реальной работе **********************************************************
    /*const parentEl = document.querySelector('.menu .container'),
          img = document.getElementsByTagName('img'),
          subtitle = document.querySelector('.menu__item-subtitle'),
          descr = document.querySelector('.menu__item-descr'),
          span = document.getElementsByTagName('span');*/

    /*class CardMake { // это отстойный метод
        constructor(bg, alt, title, text, price, parentEl) {
            this.bg = bg;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentEl);
        }
        render () {
            const div = document.createElement('div');
            div.classList.add('menu__item');
            // каждый элемент создавать отдельно и настраивать
            const img = document.createElement('img');
            img.style.backgroundImage = `url(${this.bg})`;
            img.setAttribute('alt', `${this.alt}`);
            div.append(img);
            const subtitle = document.createElement('h3');
            subtitle.innerHTML = `<h3 class="menu__item-subtitle">${this.title}</h3>`;
            div.append(subtitle);
            const descr = document.createElement('div');
            descr.classList.add('menu__item-descr');
            descr.innerHTML = `<div class="menu__item-descr">${this.text}</div>`;
            div.append(descr);
            const menuItemTotal = document.createElement('div');
            menuItemTotal.innerHTML = `<div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> rub/день</div>
                    </div>`;
            div.append(menuItemTotal);
            this.parent.append(div);
        }
    }
    const newCard = new CardMake(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей.......',
        300,
        '.menu .container'
    );
    newCard.render();*/

    /*class CardMaker {
        constructor(imgsrc, imgalt, title, text, price,convert, ...classes) {
            this.imgsrc = imgsrc;
            this.imgalt = imgalt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = parentEl;
            this.classes = classes;
        }
        renderCard() {
            const newCard = document.createElement('div');
            if (this.classes.length === 0) {
                this.newCard = 'menu__item';
                newCard.classList.add(this.newCard);
            } else {
                this.classes.forEach(className => {
                    newCard.classList.add(className);
                });
            }
            newCard.innerHTML = `
                    <img src="${this.imgsrc}" alt="${this.imgalt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> rub/день</div>
                    </div>
            `;
            this.parent.append(newCard);
        }
    }

    class ValuteCard extends CardMaker {
        constructor(imgsrc, imgalt, title, text, price, parentEl, convert, ...classes) {
            super(imgsrc, imgalt, title, text, price, parentEl, ...classes);
            this.convert = convert; // сюда можно статическое значение но пока оставлю так
            this.converterValute();
        }
        converterValute () {
            // тут код чтобы перевоить в доллары или евро etc
            this.price = this.price * this.convert;
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok){
           throw new Error(`Couldn not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
*/
    /*getResource(' http://localhost:3000/menu')
        .then(data => {
           data.forEach(({imgsrc, imgalt, title, text, price, parentEl, convert}) => {
               new ValuteCard(imgsrc, imgalt, title, text, price, parentEl, convert).renderCard();
           });
        });*/

    //******************************************* 060 Дополнительно_ Что такое библиотеки. Библиотека axios ***********************************
    /*axios.get(' http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({imgsrc, imgalt, title, text, price, parentEl, convert}) => {
                new ValuteCard(imgsrc, imgalt, title, text, price, parentEl, convert).renderCard();
            });
        });*/


    // второй вариант , который будет формировать верстку на лету
    /*getResource(' http://localhost:3000/menu')
        .then(data => {
            createCard(data);
        });
    
    function createCard(data) {
        data.forEach(({imgsrc, imgalt, title, text, price, parentEl, convert}) => {
            const element = document.createElement('div');
            price = price * 75;
            element.classList.add('menu__item');
            element.innerHTML = `
                    <img src="${imgsrc}" alt="${imgalt}">
                    <h3 class="menu__item-subtitle">${title}</h3>
                    <div class="menu__item-descr">${text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${price}</span> rub/день</div>
                    </div>
            `;
            document.querySelector('.menu .container').append(element);
        });
    }*/

    
    //************************ 053 Реализация скрипта отправки данных на сервер ***************************************

    //Forms
    /*const forms = document.querySelectorAll('form'),
          modalInput = document.querySelectorAll('modal__input');

    const message = {
       loading: 'Загрузка',
       success: 'Спасибо, скоро мы с вами свзяжемся',
       failure: 'Что то пошло не так...'
    };
    // подвязываем под каждую форму функцию formData
    forms.forEach(item => {postData(item)});
  
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const  request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // multipart/form-data; - передача файла составным запросом
            // Когда мы используем связку XMLHttpRequest() +  FormData заголовок setRequestHeader
            // устанавливается автоматически (т.е. в этом случае его устанавливать не нужно). если устанавливать multipart/form-data то и будет возникать ошибка (получение данных на сервере)
            const formData = new FormData(form);// FormData собранные данные от пользователя из формы(создается в виде обьекта)

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            // на основании данных которые были в обьекте мы сформируем object путем перебора
            const json = JSON.stringify(object);

            //request.send(formData);
            request.send(json);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    // чтобы удалить сообщение о загрузке можно взять инпутыв форме перебрать их циклом и удалить value
                    //modalInput.forEach(el => {el.value = '';});
                    form.reset();
                    setTimeout(() => {statusMessage.remove();}, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });

        });
    }*/

    //************************************************************ 054 Красивое оповещение пользователя *******************************************************
    /*const forms = document.querySelectorAll('form'),
        modalInput = document.querySelectorAll('modal__input');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свзяжемся',
        failure: 'Что то пошло не так...'
    };
    // подвязываем под каждую форму функцию formData
    forms.forEach(item => {postData(item)});

    function postData(form) {
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

            const  request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);// FormData собранные данные от пользователя из формы(создается в виде обьекта)

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            // на основании данных которые были в обьекте мы сформируем object путем перебора
            const json = JSON.stringify(object);

            //request.send(formData);
            request.send(json);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
            });

        });
    }

    function  showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        methodOpen();
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
            metHodClose(modal);
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            //closeModal(modal);
        }, 3000);
    }*/

    //*************************************************** 056 Fetch API ***************************************************************
// этот урок так же выполняется на локальном сервере Open server
    /*fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Mikhail'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));*/

    //перепишем код с использованием fetch
    /*const forms = document.querySelectorAll('form'),
        modalInput = document.querySelectorAll('modal__input');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свзяжемся',
        failure: 'Что то пошло не так...'
    };
    // подвязываем под каждую форму функцию formData
    forms.forEach(item => {postData(item)});

    function postData(form) {
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

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            // на основании данных которые были в обьекте мы сформируем object путем перебора

// promise который сделан при помощи fetch  не перейдет в состояние reject  изза ответа http который может быть ошибкой(404 итд)
            // ошибкой будет считатся например не выполненный запрос
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(object)
            })
                .then(data => data.text()) // модификация данных для отображения в консоли
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
        methodOpen();
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
            metHodClose(modal);
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            //closeModal(modal);
        }, 3000);
    }*/

    //************************* 058 Подробно про npm и проект. JSON-server *************************************
    /*fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));*/

    //************************ 059 Получение данных с сервера. Async_Await (ES8) ******************************
    /*const forms = document.querySelectorAll('form'),
          modalInput = document.querySelectorAll('modal__input');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свзяжемся',
        failure: 'Что то пошло не так...'
    };
    // подвязываем под каждую форму функцию formData
    forms.forEach(item => {bindPostData(item)});

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: data
        });
        return await res.json();
    };

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
        methodOpen();
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
            metHodClose(modal);
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            //closeModal(modal);
        }, 3000);
    }*/

//********************************************************** 061 Создаем слайдер на сайте, вариант 1 *************************************************************

   /*const slide = document.querySelectorAll('.offer__slide'),
         next = document.querySelector('.offer__slider-next'),
         prev = document.querySelector('.offer__slider-prev'),
         current = document.querySelector('#current'),
         total = document.querySelector('#total');

    let  currentSlide = 1;

    let counterSlides = () => {
        if (slide.length < 10){
            total.textContent = `0${slide.length}`;
        } else {
            total.textContent = `${slide.length}`;
        }
    }
    counterSlides();
    function Slide(slidesLenght) {
         if (slidesLenght > slide.length){
             currentSlide = 1;
         } else if(slidesLenght < 1) {
             currentSlide = slide.length;
         }
         slide.forEach(slide => {
            slide.style.display = 'none';
         });
         slide[currentSlide - 1].style.display = 'block';

        if (slide.length < 10){
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = `${currentSlide}`;
        }
    }
        Slide();

    let nextSlide = (n) => {
        Slide(currentSlide += n);
    }
    let prevSlide = (n) => {
        Slide(currentSlide -= n);
    }
    function click(element1, element2){
        element1.addEventListener('click', () => {
            nextSlide(1);
        });
        element2.addEventListener('click', () => {
            prevSlide(1);
        });
    }
    click(next, prev);*/

// ********************************************* 062 Создаем слайдер на сайте, вариант 2 *********************************************
    /*const slide = document.querySelectorAll('.offer__slide'),
        next = document.querySelector('.offer__slider-next'),
        prev = document.querySelector('.offer__slider-prev'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let  currentSlide = 1;
    let  offSet = 0;

    if (slide.length < 10){
        total.textContent = `0${slide.length}`;
        current.textContent = `0${currentSlide}`;
    } else {
        total.textContent = `${slide.length}`;
        current.textContent = currentSlide;
    }

    slidesField.style.width = 100 * slide.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all .5s';
    slidesWrapper.style.overflow = 'hidden';

    slide.forEach(el => {el.style.width = width});

    next.addEventListener('click', (e) => {
        if(offSet === +width.slice(0, width.length - 2) * (slide.length - 1)){
            offSet = 0;
        } else {
            offSet += +width.slice(0, width.length - 2)
        }

        slidesField.style.transform = `translateX(-${offSet}px)`;

        if (currentSlide === slide.length){
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        if (slide.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }

    });

    prev.addEventListener('click', (e) => {
        if(offSet === 0){
            offSet = +width.slice(0, width.length - 2) * (slide.length - 1);
        } else {
            offSet -= +width.slice(0, width.length - 2)
        }

        slidesField.style.transform = `translateX(-${offSet}px)`;

        if (currentSlide === 1){
            currentSlide = slide.length;
        } else {
            currentSlide--;
        }

        if (slide.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    });*/

    //******************************************** 063 Создаем навигацию для слайдов ********************************************************

    /*const slide = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        next = document.querySelector('.offer__slider-next'),
        prev = document.querySelector('.offer__slider-prev'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let  currentSlide = 1;
    let  offSet = 0;
    let  showCurrentSlideNums = () => {
             if (slide.length < 10){
                 total.textContent = `0${slide.length}`;
                 current.textContent = `0${currentSlide}`;
             } else {
                 total.textContent = `${slide.length}`;
                 current.textContent = currentSlide;
             }
         };

    showCurrentSlideNums();

    slidesField.style.width = 100 * slide.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all .5s';
    slidesWrapper.style.overflow = 'hidden';

    slide.forEach(el => {el.style.width = width});

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    let makeDots = () => {
        indicators.classList.add('carousel-indicators');
        indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;    
    `;
        slider.append(indicators);

        for (let i = 0; i < slide.length; i++ ){
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;       
        `;
            if (i === 0){
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }
    }
    makeDots();

    let sliderCountNum = () => {
        if (slide.length < 10) {
            current.textContent = `0${currentSlide}`;
        } else {
            current.textContent = currentSlide;
        }
    }

    let dotsMoveClick = () => {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[currentSlide - 1].style.opacity = '1';
    }

    let replaceNotNum = (property) => {
        return +property.replace(/\D/g, '');
    }

    next.addEventListener('click', (e) => {
        if(offSet === replaceNotNum(width) * (slide.length - 1)){
            offSet = 0;
        } else {
            offSet += replaceNotNum(width);
        }

        slidesField.style.transform = `translateX(-${offSet}px)`;

        if (currentSlide === slide.length){
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        sliderCountNum();
        dotsMoveClick();
    });

    prev.addEventListener('click', (e) => {
        if(offSet === 0){
            offSet = replaceNotNum(width) * (slide.length - 1);
        } else {
            offSet -= replaceNotNum(width);
        }

        slidesField.style.transform = `translateX(-${offSet}px)`;

        if (currentSlide === 1){
            currentSlide = slide.length;
        } else {
            currentSlide--;
        }

        sliderCountNum();
        dotsMoveClick();
    });

    dots.forEach(dot => {
       dot.addEventListener('click', (e) => {
           const slideTo = e.target.getAttribute('data-slide-to');

           currentSlide = slideTo;
           offSet = replaceNotNum(width) * (slideTo - 1);
           slidesField.style.transform = `translateX(-${offSet}px)`;

           sliderCountNum();
           dotsMoveClick();
       });
    });*/

    //**************************************** 066 Создаем калькулятор на сайте, часть 1 ************************************
    /*const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    let storageDefault = () => {
        if (localStorage.getItem('sex')){
            sex = localStorage.getItem('sex');
        } else{
            sex = 'female';
            localStorage.setItem('sex', 'female');
        }

        if (localStorage.getItem('ratio')){
            ratio = localStorage.getItem('ratio');
        } else{
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375);
        }
    }
    storageDefault();
    
    function initLocalSettings(selector, activeClass) {
       const elements = document.querySelectorAll(selector);

       elements.forEach(el => {
          el.classList.remove(activeClass);
          if(el.getAttribute('id') === localStorage.getItem('sex')){
              el.classList.add(activeClass);
          }
          if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')){
              el.classList.add(activeClass);
          }
       });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio){
            result.textContent = '____';
            return;
        }
        if (sex === 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });

    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
       const input = document.querySelector(selector);

       input.addEventListener('input', (e) => {
// **************************************************** 067 Создаем калькулятор на сайте, часть 2 ******************************
           if (input.value.match(/\D/g)){
              input.style.border = '1px solid red';
           } else {
               input.style.border = 'none';
           }

          switch (input.getAttribute('id')) {
              case 'height':
                  height = +input.value;
                  break;
              case 'weight':
                  weight = +input.value;
                  break;
              case 'age':
                  age = +input.value;
                  break;
          }
           calcTotal();
       });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');*/


//******************************************************* 071 Webpack. Собираем наш проект ************************************************
   /*const tabs = require('./modules/tabs'),
         modal = require('./modules/modal'),
         timer = require('./modules/timer'),
         card = require('./modules/card'),
         slider = require('./modules/slider'),
         calculator = require('./modules/calculator'),
         forms = require('./modules/forms');

   tabs();
   modal();
   timer();
   card();
   slider();
   calculator();
   forms();*/

// });

// ************************************************** 073 Собираем наш проект и фиксим баги ****************************************************
import  tabs  from'./modules/tabs';
import modal, {methodOpen , metHodClose}  from './modules/modal';
import  timer  from'./modules/timer';
import  card  from'./modules/card';
import  slider  from'./modules/slider';
import  calculator  from'./modules/calculator';
import  forms  from'./modules/forms';


window.addEventListener('DOMContentLoaded', () => {

   const modalTimerId = setTimeout(() => methodOpen('.modal', modalTimerId), 500000);

   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId);
   timer('.timer', '2020-12-31');
   card();
   slider({
      container: '.offer__slider',
      slIde: '.offer__slide',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
   });
   calculator();
   forms('form', modalTimerId);

});

