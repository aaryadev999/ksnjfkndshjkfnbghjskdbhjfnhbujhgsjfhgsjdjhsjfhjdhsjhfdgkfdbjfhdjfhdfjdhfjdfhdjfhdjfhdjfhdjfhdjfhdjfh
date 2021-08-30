canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			if(keypress=="alphabetkey")
			{
			aplhabetkey();
		document.getElementById("d1").innerHTML= "You Pressed A- Alpha L- Lima P- Papa H- Hotel A- Alpha B- Bravo E- Echo T- Tango (Alphabet codes pilots use)";
		console.log("alphabet key");}
		if(keypress=="numberkey")
			{
		numberkey();
		document.getElementById("d1").innerHTML= "You Pressed Number Key";
		console.log("number key");}
		if(keypress=="arrowkey")
			{
		arrowkey();
		document.getElementById("d1").innerHTML= "You Pressed Arrow Key";
		console.log("arrow key");}
		if(keypress=="otherkey")
			{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or O- Oscar T- Tango H- Hotel E- Echo R-Romeo (Codes Pilots use) key";
		console.log("arrow key");}
		}
		
		
var keypress= "";

function aplhabetkey()
{
	img_image="Alpkey.png";
	keypress="alphabetkey";
	add();	

}
function numberkey()
{
	img_image="numkey.png";
	keypress="numberkey";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	keypress="arrowkey";
	add();
}

function otherkey()
{
	img_image="otherkey.png";
	keypress="otherkey";
	add();
}
}