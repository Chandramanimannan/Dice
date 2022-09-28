var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomdice = "dice" + randomNumber1 + ".png"; //dice.png

var randomimages= "images/" + randomdice;//images/dice.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimages); 

var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomdice2="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdice2);

if(randomNumber1 > randomNumber2)
{
document.querySelector("h1").innerHTML="Player 1 Wins ";
}
else if(randomNumber2 > randomNumber1)
{
document.querySelector("h1").innerHTML="Player 2 Wins ";
}
else
{
     document.querySelector("h1").innerHTML="DRAW ";
}