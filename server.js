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

// export default {
//     '/handler/': function ({ get }) {
//         let year = get.year;
//         let month = get.month;
//         let day = get.day;
//         if (day < 32 && day > 0 && 0 < month && month < 13 && year > 0) {
//             console.log(get)
//             return `Date success ${year}-${month}-${day}`
//         } else {
//             console.log(get)
//             return 'Date not success'
//         }
//     }
// }

/*----------------------------------------------------------POST---------------------------------------------------------*/

let usersBase = [
    {
        login: 'Nikita',
        password: '143'
    },
    {
        login: 'abobus',
        password: 'aboba'
    },
    {
        login: 'sel999',
        password: 'sel999'
    }
]



// export default {
//     '/handler/': function ({ post }) {
//         for (let i = 0; i < usersBase.length; i++) {
//             if (post.login == usersBase[i].login && post.password == usersBase[i].password) {
//                 return 'Success'
//             }
//         }
//         return 'User not found / Wrong password'
//     }
// }

// export default {
//     '/handler/': function ({ get }) {
//         console.log(get);
//         return 'text';
//     }
// }

let obj = { 1: 'a', 2: 'b', 3: 'c' };

// export default {
//     '/handler/': function ({ get }) {
//         let obj = { 1: 'a', 2: 'b', 3: 'c' };
//         return obj[get.key];
//     }
// }

// Сделайте ссылки, показывающие в браузере соответствующих юзеров.

let arr = [
    'user1', 'user2', 'user3'
];

export default {
    '/handler/': function ({ get }) {
        try {
            if (arr[get.key - 1] != undefined) {
                return arr[get.key - 1];
            } else {
                throw { name: 'noUserFound', message: 'User not found' }
            }
        } catch (error) {
            if (error.name === 'noUserFound') {
                return error.message
            }
        }
    }
}
