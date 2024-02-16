'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
// import validationAll from './modules/validationAll';
import validationCalculator from './modules/validationCalculator';
import validationForm from './modules/validationForm';
import tabs from './modules/tabs';
import slider from './modules/slider';
import swiper from './modules/swiper';
import sendForm from './modules/sendForm';

// import one from './modules/one';
// import two from './modules/two';

timer('2 february 2024');
menu();
modal();
calculator();
// validationAll();
validationCalculator();
validationForm('form1');
validationForm('form2');
validationForm('form3');
tabs();
slider();
swiper();


// Передаём аргумент
// sendForm('form1');

// Передаём не просто аргумент, а объект у которого будет formId
sendForm({
    formId: 'form1',
    someElement: [
        {
            // * Кастомизируем массив, пример ниже это просто пример, который не берётся из input и т.д.
            // type может быть как block, так и input, span и т.д
            type: 'block',
            // Может получать textContent, value и т.д. в зависимости от типа
            id: 'total'
        }
    ]
});

// one();
// two();