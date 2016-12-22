var buttons = document.getElementById("button");
var sounds = document.getElementById("sound");

var Fart_sound= document.getElementById("Fart_sound");
var Nope_sound= document.getElementById("Nope_sound");
var Sad_sound= document.getElementById("Sad_sound");

var s1= document.getElementById("s1");
var s2= document.getElementById("s2");
var s3= document.getElementById("s3");

/*double is the cheat code*/
var cheat = [68, 79, 85, 66, 76, 69]; 

var userKeypresses = [];

document.addEventListener("keydown", processKeydown);

function processKeydown(event){
var keycode = event.keyCode;

userKeypresses.push(keycode);

var validCheat = true;
for(var i = 0; i < cheat.length; i++) {
var cheatKeycode = cheat[i];
var userKeypressed = userKeypresses[i];

if(userKeypressed != cheatKeycode){
validCheat = false;
}
}

if(validCheat == true){
console.log("Doing our cheat!");
doCheat();
}else{
console.log("invalid cheat");
}
}

function doCheat(){

var htmlBody = document.getElementsByTagName('body')[0];

htmlBody.style.backgroundImage = "url('back.png')";
}

s1.addEventListener("click", playSound1);

function playSound1(){
	Fart_sound.play();
	
}

s2.addEventListener("click", playSound2);

function playSound2(){
	Nope_sound.play();
	
}

s3.addEventListener("click", playSound3);

function playSound3(){
	Sad_sound.play();
	

}

