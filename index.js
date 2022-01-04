
var firstRandomNumber= Math.floor(Math.random()*6)+1; //to get a random number from 1 to 6
var randomDiceImage= "Dice"+firstRandomNumber+".png";
var randomImageSource="images/"+randomDiceImage;
var firstImg =document.querySelectorAll("img")[0];
firstImg.setAttribute("src",randomImageSource);
var secRandomNumber=Math.floor(Math.random()*6)+1;
var randomDiceImage= "Dice"+secRandomNumber+".png";
var randomImageSource="images/"+randomDiceImage;
var secImg =document.querySelectorAll("img")[1];
 secImg.setAttribute("src",randomImageSource);
 const Element=document.createElement("p");

if(firstRandomNumber>secRandomNumber){
document.querySelector("h1").innerHTML="player 1 wins!";
Element.textContent="Congraaaaats to the first player 👆"
document.body.appendChild(Element);
document.querySelector("button").innerHTML="play again";
}
else if (firstRandomNumber<secRandomNumber) {
document.querySelector("h1").innerHTML="player 2 wins!";

Element.textContent="Congraaaaats to the second player ✌️ "
document.body.appendChild(Element);
document.querySelector("button").innerHTML="play again";
}
else{
document.querySelector("h1").innerHTML="Draw";
document.querySelector("button").innerHTML="play again";
}
function refreshPage(){
    window.location.reload();
}
