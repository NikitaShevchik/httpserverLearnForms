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



// Работа с URLSearchParams в JavaScript

let paramsString = 'a=1&b=2&c=3';
let searchParams = new URLSearchParams(paramsString);

// Получение значения параметра
let res = searchParams.get('a');
console.log(res);

// Проверка наличия параметра
let res2 = searchParams.has('a');
console.log(res2); // выведет true

// Преобразование в строку

let res3 = searchParams.toString();
console.log(res3); // выведет 'a=1&b=2&c=3'

// Изменение параметров

searchParams.set('b', '!');
let res4 = searchParams.toString();
console.log(res4); // выведет 'a=1&b=!&c=3'

//Добавление параметров

searchParams.set('d', '5'); // изменит существующий параметр
searchParams.append('f', '4'); // добавит в конец (даже если повторяется)

let res5 = searchParams.toString();
console.log(res5)

// Удаление параметров

searchParams.delete('f');
let res6 = searchParams.toString();
console.log(res6)

// Перебор параметров циклом

for (let p of searchParams) {
    console.log(p);
}

// Несколько одинаковых параметров. В вебе работает (на серверном ошибка)

// let paramsString2 = 'a=1&b=2&c=3&a=4&a=5';
// let res7 = paramsString2.getAll('a')
// console.log(res7)

// Практические задачи
let paramsStringPractice = 'test1=param1&test2=param2&test3=param3';
let searchParamsPractice = new URLSearchParams(paramsStringPractice);

// Добавьте в эту строку еще один параметр test3.
searchParamsPractice.append('test3', 'nikita')
let result = searchParamsPractice.toString();
console.log(result)

// Удалите из этой строки параметр test2.
searchParamsPractice.delete('test2')
let result2 = searchParamsPractice.toString()
console.log(result2)

// Измените параметр test1 на новое значение.
searchParamsPractice.set('test1', 'nikitos')
let result3 = searchParamsPractice.toString()
console.log(result3)
