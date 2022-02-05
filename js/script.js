         "use strict";
         let numberOfFilms = prompt("Сколько фильмов вы посмотрели ?","");
         let personalMovieDB = {
             count:numberOfFilms,
             movies:{},
             actors:{},
             genres:[],
             private: false,
         };
         if (numberOfFilms < 10){
            alert("Просмотрено мало фильмов!");
        }else if (numberOfFilms >= 10 && numberOfFilms <= 30 ){
            alert('Вы классический зритель !');
        }else if (numberOfFilms > 30){
            alert('Вы киноман !');
        }else{
            alert("ОШИБКА");
        }

            //  for(let i = 0;i < 2; i++){
            //     let a = prompt("Последний фильм ?",""),
            //         b = prompt("На сколько оцените ?","");
            //         if(a != null && b != null && a != "" && b != "" && a.length < 50){
            //            personalMovieDB.movies[a] = b; 
            //            console.log(personalMovieDB);
            //         } else {console.log('ERROR');
            //                 i--;
            //             }
            //  }
             let it = 0;
            do{
                let a = prompt("Последний фильм ?",""),
                    b = prompt("На сколько оцените ?","");
                    it++;

            }while(it <= 1);
           
            
            
            
               
               
               
    
    
    
    
    
    
    
    
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