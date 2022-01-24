

//Primer Dado
var randomNumber1 = Math.floor((Math.random() * 6)+1);//1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


//Segundo Dado
var randomNumber2 = Math.floor( (Math.random()*6) +1 );

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Ganadores
if ( randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML ="¡Jugador 1 Ganó!🎉 ";

} else if(randomNumber1< randomNumber2){
  document.querySelector("h1").innerHTML ="¡Jugador 2 Ganó!🎉 ";
}else{
  document.querySelector("h1").innerHTML ="¡Han empatado! 😜 ";
}
