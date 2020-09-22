'use strict';
import {getResource} from "../services/services";

function cards() {
    const parentEl = document.querySelector('.menu .container'),
        img = document.getElementsByTagName('img'),
        subtitle = document.querySelector('.menu__item-subtitle'),
        descr = document.querySelector('.menu__item-descr'),
        span = document.getElementsByTagName('span');

    class CardMaker {
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


    getResource(' http://localhost:3000/menu')
        .then(data => {
           data.forEach(({imgsrc, imgalt, title, text, price, parentEl, convert}) => {
               new ValuteCard(imgsrc, imgalt, title, text, price, parentEl, convert).renderCard();
           });
        });

    //******************************************* 060 Дополнительно_ Что такое библиотеки. Библиотека axios ***********************************
    /*axios.get(' http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({imgsrc, imgalt, title, text, price, parentEl, convert}) => {
                new ValuteCard(imgsrc, imgalt, title, text, price, parentEl, convert).renderCard();
            });
        });*/
}

//module.exports = cards;
export default cards;












