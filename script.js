// let x = 10;

// let y = 5;

// let result = x + y;




function calc() {
let num1 = prompt('enter first number');

let num2 = prompt('enter second number');



let result = Number(num1) + Number(num2);

document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`

// alert (num1 + '+' + num2 + ' = ' + result);

// alert(`${num1} + ${num2} = ${result} `);
}


function calculate() {

    let number1 = document.getElementById('_num1').value;

    let number2 = document.getElementById('_num2').value;

    let result = Number(number1) + Number(number2);

    document.getElementById('hw').innerHTML = `${number1} + ${number2} = ${result}`;  





}

function _calculate(x,y){

    let result = Number(x) + Number(y);
    document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;  

}

function check (){



// Number();
let numberOne = Number(document.getElementById('num1').value);
let numberTwo = Number(document.getElementById('num2').value);


if(numberOne > numberTwo  ){

    document.getElementById('special').innerHTML = `${numberOne} is greater than ${numberTwo}`

}

else if(numberOne < numberTwo){
document.getElementById('special').innerHTML = `${numberOne} is less than ${numberTwo}`
}
else if (numberOne == numberTwo){
    document.getElementById('special').innerHTML = `${numberOne} is equal to ${numberTwo}`

}


}

let x = 1000000000;

let y = 5;

let array = ['text', 'maayan', x, y];


console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

console.log(array.length);

if (array.length > 3){

    console.log(`array has more than 3 items. \narray size is: ${array.length}`);



}
let array1 = ['text', 'maayan', x, y ,'gddv','sdgs','dbdkb','agfzafsz']

console.log(array1[3]);


let _movies = [{
title:'The dark knight'
,rating: 9.5,
year: 2008,
imageUrl:' https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
linkUrl:'https://www.imdb.com/title/tt0468569/',
rateUrl:'https://www.imdb.com/title/tt0468569/ratings'
},
{
    title:'The Dark Knight Rises',
    rating: 8.4,
    year: 2012,
    imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
    linkUrl: 'https://www.imdb.com/title/tt1345836/',
    rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
},
{
    title:'Superman Man of Steel',
    rating: 7.1,
    year: 2013,
    imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0770828/',
    rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
},
{
title: 'Deadpool',
rating: 8.0,
year: 2016,
imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
linkUrl: 'https://www.imdb.com/title/tt1431045/?ref_=nv_sr_srsg_0',
rateUrl: 'https://www.imdb.com/title/tt1431045/ratings/?ref_=tt_ov_rt'
},
{
title: 'el camino',
rating: 7.3,
year: 2019,
imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg',
linkUrl: 'https://www.imdb.com/title/tt9243946/?ref_=nv_sr_srsg_0',
rateUrl: 'https://www.imdb.com/title/tt9243946/ratings/?ref_=tt_ov_rt'
},
{
title: 'nobody',
rating: 7.4,
year: 2021,
imageUrl: 'https://m.media-amazon.com/images/I/81FdZwppzMS._SL1500_.jpg',
linkUrl: 'https://www.imdb.com/title/tt7888964/?ref_=nv_sr_srsg_0',
rateUrl: 'https://www.imdb.com/title/tt7888964/ratings/?ref_=tt_ov_rt'
},
{
title: 'logan',
rating: 8.1,
year: 2017,
imageUrl: 'https://m.media-amazon.com/images/I/51iSpEkeVjL._AC_.jpg', 
linkUrl: 'https://www.imdb.com/title/tt3315342/?ref_=nv_sr_srsg_0',
rateUrl: 'https://www.imdb.com/title/tt3315342/ratings/?ref_=tt_ov_rt'
},
{
title: 'IT',
rating: 7.3,
year: 2017,
imageUrl: 'https://cdn.europosters.eu/image/750/posters/it-georgie-i57743.jpg',
linkUrl: 'https://www.imdb.com/title/tt1396484/?ref_=nv_sr_srsg_0',
rateUrl: 'https://www.imdb.com/title/tt1396484/ratings/?ref_=tt_ov_rt'
},
{
title: 'ted',
rating: 6.9,
year: 2012,
imageUrl:'https://i.pinimg.com/originals/50/d1/49/50d149c1c607a730ab652db076a48177.jpg',
linkUrl: 'https://www.imdb.com/title/tt1637725/?ref_=nv_sr_srsg_3',
rateUrl: 'https://www.imdb.com/title/tt1637725/ratings/?ref_=tt_ov_rt'
},






];

// function displayImages()
// {
//     for (let index = 0; index < movies.length; index++) 
//     {
        
//       document.getElementById('images').innerHTML += `
//       <div class="col">
//           <div class="card shadow-sm">
//         <img src="${movies[i].imageUrl}" alt="">
//             <div class="card-body">
             
//             <p class="card-text">title: ${_movies[i].title}</p>
//             <p class="card-text">rating: ${_movies[i].rating}</p>
//             <p class="card-text">year: ${_movies[i].year}</p>
//               <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                 </div>
              
//               </div>
//             </div>
//           </div>
//         </div>
//       `
//     }
// }

function displayImages()
{
    for (let i = 0; i < _movies.length; i++)
    {
      document.getElementById('images').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
            <div class="card-body">
              <p class="card-text">Movie Name: ${_movies[i].title}</p>
              <p class="card-text">Rating: ${_movies[i].rating}</p>
              <p class="card-text">Year: ${_movies[i].year}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}

window.onload = function() {
    displayImages();
  };


  function sendEmail() {

    let firstName = document.querySelector('[name="FirstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
    let date = new Date()
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "maayangabay18@gmail.com",
        Password: "870E622880636FDB60C59543E9B7ACEFFC46",
        From: "maayangabay18@gmail.com",
        To: "maayangabay18@gmail.com",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: `
           <b>הודעה מאת:</b> ${firstName} ${lastName}
            <br>
            <br>
            <b>כתובת איימיל של השולח:</b> ${email}
            <br>
            <br>
            <b>נשלח בתאריך:</b> ${date}
            <br>
            <br>
            <b>תוכן ההודעה:</b>
            <br>
          ${message}
          `
       








    });


}













































































