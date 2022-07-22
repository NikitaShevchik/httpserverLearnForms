// export default {
//     '/handler/': function ({ get }) {
//         let sum = 0;
//         sum = Number(get.num1) + Number(get.num2) + Number(get.num3) + Number(get.num4) + Number(get.num5);
//         return sum / 5;
//     }
// }

// export default {
//     '/handler/': function ({ get }) {
//         console.log(get)
//         console.log('name ', get.name);
//         console.log('surnname ', get.surnname);
//         console.log('fathername ', get.fathername);
//         return 'form data received';
//     }
// }

// Спросите у пользователя дату в формате год-месяц-день. 
// Отправьте дату на сервер. Пусть сервер проверит корректность формата даты. 
// Если дата корректна - пусть он вернет сообщение об успехе, а если некорректна - сообщение о неудаче.

export default {
    '/handler/': function ({ get }) {
        let year = get.year;
        let month = get.month;
        let day = get.day;
        if (day < 32 && day > 0 && 0 < month && month < 13 && year > 0) {
            console.log(get)
            return `Date success ${year}-${month}-${day}`
        } else {
            console.log(get)
            return 'Date not success'
        }
    }
}