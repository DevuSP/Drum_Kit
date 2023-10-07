//When button is clicked.
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
function handleClick() {

let buttonInnerHTML = this.innerHTML; // this here tells class and string that was clicked. like .w .drum "w" and innerHTML makes it ony "w".
makeSound(buttonInnerHTML);  //key for button clicked. 
buttonAnimation(buttonInnerHTML);
}
}
//When key is Pressed.
document.addEventListener("keydown", function(event){
  makeSound(event.key); //(event = function() to keypress happen),  //(key = any key on keyboard as array.)
  buttonAnimation(event.key);
})                    
                        
// This section is different and are for both pressed and click.
function makeSound(key){  // it will work if event.key or buttonInnerHTML is used, just change switch too.

    switch (key) {
        case "w":
           var tom1 = new Audio("./sounds/tom-1.mp3");
           tom1.play();
            
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            
            break;
        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            
            break;
    
        default: console.log(key)
            break;
    }
    }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}