'use strict';

const validationForm = () => {
    const names = document.querySelectorAll('.form-name');
    const nameFormFooter = document.getElementById('form2-name');
    const emails = document.querySelectorAll('.form-email');
    const phones = document.querySelectorAll('.form-phone');
    const messages = document.querySelectorAll('[placeholder="Ваше сообщение"]');

    // Name - Позволяем ввод только кириллицы в любом регистре, дефиса и пробела
    names.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(input.value);
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\ ]+/, '');
        });
    });

    nameFormFooter.addEventListener('input', (e) => {
        // console.log(input.value);
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\ ]+/, '');
    });

    // Message - Позволяем ввод только кириллицы в любом регистре, дефиса и пробела
    messages.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(input.value);
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\ ]/, '');
        });
    });

    // Email - Позволяем ввод только только латиницы в любом регистре, цифры и спецсимволы:@  -  _  . ! ~ * '
    emails.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(input.value);
            e.target.value = e.target.value.replace(/[^\w\-\@\-\_\.\!\~\*\']/, '');
        });
    });

    // Phone - Позволяем ввод только цифр, круглых скобок и дефис
    phones.forEach((input) => {
        input.addEventListener('input', (e) => {
            console.log(input.value);
            e.target.value = e.target.value.replace(/[^\d\-\(\)]/, '');
        });
    });
};

export default validationForm;