         "use strict";
let numberOfFilms;
         function start(){
             numberOfFilms = prompt("Сколько фильмов вы посмотрели ?","");
             while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
                numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?","");
            }
            
        }
start();
         let personalMovieDB = {
             count:numberOfFilms,
             movies:{},
             actors:{},
             genres:[],
             private: false,
        };
function detectMyLevel(){ 
        if (numberOfFilms < 10){
            alert("Просмотрено мало фильмов!");
        }else if (numberOfFilms >= 10 && numberOfFilms <= 30 ){
            alert('Вы классический зритель !');
        }else if (numberOfFilms > 30){
            alert('Вы киноман !');
        }else{
            alert("ОШИБКА");
        }
        }
detectMyLevel();

function rememberMyFilms() {
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
            }
rememberMyFilms();

function writeYourGenres (){
    for (let i = 1;i <= 3 ; i++){
        let gen = prompt(`Какой ваш любимый ${i} жанр?`,'');  
        personalMovieDB.genres[i-1] = gen;
    }

    
} 
writeYourGenres ();

function showMyDB (hidden){
    if (!hidden) {
        console.log (personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

        
        
        
        
        
        
        

             




            // function showFirstMessage (text){
            //     console.log(text);
            // }
            // showFirstMessage("hello");


            // function calc(a,b){
            //     return a + b;
            // }
            // console.log(calc(5,4));

           
            
            function first (){
                console.log ('1');
            }
            function second (){
                console.log('2'); 
            }
            
            

            function learnJS(lang, callback){
               console.log (`Я учу :${lang}`);
               callback();
            }
            function done(){
                console.log('Я ПРОШЕЛ УРОК!');
            }
            learnJS ("JAVASCRIPT",done);
            
               
               
               
    
    
    
    
    
    
    
    
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


//  const num = 12.2;
//  console.log (Math.round(num)); 