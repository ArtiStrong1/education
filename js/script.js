         "use strict";

        

         let personalMovieDB = {
             count: 0,
             movies:{},
             actors:{},
             genres:[],
             private: false,
             start: () => {
                personalMovieDB.count = prompt("Сколько фильмов вы посмотрели ?","");
                 while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                  personalMovieDB.count = prompt("Сколько фильмов вы посмотрели ?","");
               }
               
             },
                rememberMyFilms: () => {
                    for(let i = 0;i < 2; i++){
                        let a = prompt("Последний фильм ?",""),
                            b = prompt("На сколько оцените ?","");
                                if(a != null && b != null && a != "" && b != "" && a.length < 50){
                                  personalMovieDB.movies[a] = b; 
                                  console.log(personalMovieDB);
                                } else { console.log('ERROR');
                                    i--;
                                 }
                            }
                            },
                detectMyLevel: () => { 
                 if (personalMovieDB.count < 10){                 
                    alert("Просмотрено мало фильмов!");                    
                }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){                
                    alert('Вы классический зритель !');
                }else if (personalMovieDB.count > 30){
                    alert('Вы киноман !');
                }else{
                    alert("ОШИБКА");
                                }
                        },
                
                showMyDB (hidden){
                    if (!hidden) {
                    console.log (personalMovieDB);
                }
            },
                togglerVisibleMyDB: () => {
                    if (personalMovieDB.private){
                        personalMovieDB.private = false;
                   }else{
                    personalMovieDB.private = true;
                   }
                },
                
                writeYourGenres: () =>{
                    for (let i = 1;i <= 3 ; i++){
                    let gen = prompt(`Какой ваш любимый ${i} жанр?`,'');
                    if (gen == '' || gen == null){    
                    i--;
                    }else{
                    personalMovieDB.genres[i-1] = gen;
                  }
                 }  
                 personalMovieDB.genres.forEach((item, i, ) => {
                     console.log (`Ваш любимый жанр # ${i + 1} это ${item} !`);
                 });      
                }
        };
            


// function rememberMyFilms() {
//     for(let i = 0;i < 2; i++){
//         let a = prompt("Последний фильм ?",""),
//             b = prompt("На сколько оцените ?","");
//                 if(a != null && b != null && a != "" && b != "" && a.length < 50){
//                        personalMovieDB.movies[a] = b; 
//                        console.log(personalMovieDB);
//                     } else { console.log('ERROR');
//                             i--;
//                         }
//              }
//             }
// rememberMyFilms();

// function writeYourGenres (){
//     for (let i = 1;i <= 3 ; i++){
//         let gen = prompt(`Какой ваш любимый ${i} жанр?`,'');
//         if (gen == '' || gen == null){
//             i--;
//         }
//         personalMovieDB.genres[i-1] = gen;
//     }

    
// } 
// writeYourGenres ();
// personalMovieDB.forEach(function(item, i, genres){
//     console.log (`Любимый жанр №${i + 1} это ${item}`);
// }
// );



        
        
        
        
        
        
        

             


// КОЛЛ БЭК ФУНКЦИИ ! ! ! !

            // function showFirstMessage (text){
            //     console.log(text);
            // }
            // showFirstMessage("hello");


            // function calc(a,b){
            //     return a + b;
            // }
            // console.log(calc(5,4));

           
            
            // function first (){
            //     console.log ('1');
            // }
            // function second (){
            //     console.log('2'); 
            // }
            
            

            // function learnJS(lang, callback){
            //    console.log (`Я учу :${lang}`);
            //    callback();
            // }
            // function done(){
            //     console.log('Я ПРОШЕЛ УРОК!');
            // }
            // learnJS ("JAVASCRIPT",done);

// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },



//     makeTest: function (){
//         console.log ('Test');
//     }

// };

// const {border,bg} = option.colors;

// console.log(option);
// option.makeTest();


// console.log(Object.keys(option).length); 
// let counter = 0;
// for(let key in option){
//   if(typeof(option[key]) === 'object'){
//       for (let i in option[key]){
//           console.log(`Свойство ${i} имеет значение ${option[key] [i]}`);
//           counter++;
//       }
//   }else{console.log (`Свойство ${key} имеет значение ${option[key]} !`);
//   counter++;
//   } 
// }
// console.log(counter);

            //       SWITCH ОПЕРАТОР ! ! ! ! 
    
    
    
    
    
               //   const num = 100;  

    //   switch(num){
    //       case 49:
    //           console.log('Ne verno !');
    //           break;
    //       case 100:
    //         console.log('Ne verno !');
    //         break;
    //       case 50:
    //           console.log("Verno!");
    //           break;
    //       default:
    //         console.log("Ne segodnya!");
    //         break;

    //   }


//let num = 50;
// while (num<= 55){
//     console.log(num);
//     num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while(num < 55);

//for (let i = 1;i < 8;i++){
 //   console.log(num);
  //  num++;
//}

// let str = "Hello";
// console.log(str.length);
//  let arr =[1, 2, 4];
//  console.log (arr.length);

//  let fruit = "some fruit";
//  console.log(fruit.indexOf("it"));

//  const logg = "hello world" ;
//  console.log (logg.slice(6,11));

//  let test = 'Да сколько можно заниматься';
//  console.log (test.slice(3,10));

// МЕТОД forEach ! ! ! ! ! !



//  const num = 12.2;
//  console.log (Math.round(num)); 
// const arr = [1,2,5,7,8];
// arr.sort();
// console.log(arr);
// arr.forEach(function(item, i, arr){
// console.log(`${i} : свойство ${item} находится в ${arr}`);
// });
// for (let i = 0; i<arr.length;i++){
// console.log(arr[i]);
// }   
// for (let value of arr){
//     console.log (value);
// }

// МЕТОДЫ SPLIТ(определяет строку в массив) JOIN (РАЗБИВАЕТ МАССИВ НА СТРОКИ)


// const str = "первый, второй, третий, четвертый";
// const product = str.split(', ');
// product.sort();

// console.log (product);

// RETURN И ПОВЕРЕХНОСТНОЕ КОПИРОВАНИЕ !


// const obj = {
//     a: 5,
//     b: 1,
// };
// function copy(mainObj){
//     let objCopy = {};
//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 25,
//     e: 17,
// };
//  const clone = Object.assign({}, add);
//  clone.d = 30;
//  console.log (clone);
//  console.log (add);

//  const oldArr = ['a', 'b', 'c'];
//  const newArr = oldArr.slice();
 

//  console.log(newArr);
//  console.log(oldArr);

// function log (a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = ['1', '5', '8'];
// log (...num);

// const array = ['22', '33', '44'];
//  const secArray = [...array] ;

// const numbers = {
//        a: 2,
//        b: 5,
//        c: {
//            x: 7,
//            y: 4,
//        }     
// };
//  function newNumbers()

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ ! ! ! 
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('HELLO');
//     }
// };

// const jonh = {
//     health: 100,
// };

// Object.setPrototypeOf(jonh, soldier);
// jonh.sayHello();
 


//         ЗАДАЧКИ ИЗ СОБЕСЕДОВАНИЙ 

// [] + false - null + true       //Добавление в пустой массив дает строку "false" - null = NaN +true = NaN  

// let y = 1;
// let x = y = 2 ;
// console.log(x); // 2 Последовательное присваивание ! ! 

// console.log ([] + 1 + 2);  // 12 строка  !!!

// console.log (!!(1 && 3)===(1 && 3)); //  "!!" - 

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log (a == b);

