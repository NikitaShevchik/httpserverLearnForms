"use strict"
let form = document.querySelector('form');
let button = document.querySelector('button');

button.addEventListener('click', function (event) {
    let email = form.querySelector('input[name="email"]').value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)) {
        form.submit()
    } else {
        event.preventDefault();
    }
})