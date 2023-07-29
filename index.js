$('button.play-button').on('mousedown', function() {
    $("button.play-button").addClass("pressed");
}).on('mouseup', function() {
    $("button.play-button").removeClass("pressed");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "./images/dice" + randomNumber1 + ".png";
    var randomImage2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);
    if (randomNumber1 > randomNumber2) {
       document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    }
    else if (randomNumber1 < randomNumber2) {
       document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
       document.querySelector("h1").innerHTML = "🚩 It's a Draw! 🚩";
    }
});

setTimeout(function() {
    document.querySelector("h1").innerHTML = "Click the Button to Play Again!";
}, 10000);


