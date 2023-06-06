
var x = document.querySelectorAll("button");
var y = x.length ;
while(y--) {
    x[y].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML ;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });    
}

document.addEventListener("keydown" , function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch(key) {
        case "w" :
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break ;

        case "a" :
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break ;

        case "s" :
            var tom3 = new Audio("./sounds/snare.mp3");
            tom3.play();
        break;

        default :
        var tom3 = new Audio("./sounds/kick-bass.mp3");
        tom3.play();
    }

}


function buttonAnimation(Key) {

    var activeB = document.querySelector("." + Key);
    activeB.classList.add("pressed");

    setTimeout(function () {
        activeB.classList.remove("pressed");
    } , 100);
    
}


// function handleClick() {
    //     var audio = new Audio("./sounds/tom-1.mp3");
    //     audio.play();
    // }