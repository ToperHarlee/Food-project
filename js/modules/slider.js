'use strict';

function sliders({container, slIde, nextArrow, prevArrow, totalCounter, currentCounter,
wrapper, field}) {
    const slide = document.querySelectorAll(slIde),
        slider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
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
    });
}

//module.exports = sliders;
export default sliders;



