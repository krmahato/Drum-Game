var btnList = document.querySelectorAll(".drum");

for (var i = 0; i < (btnList.length); i++) {
    btnList[i].addEventListener("click", function() {
        btnSwitch(this.innerHTML);
        btnAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown", function(event) {
    btnSwitch(event.key);
    btnAnimation(event.key);
});



function btnSwitch(btnValue) {
    switch (btnValue) {
        case "a":
            var a_btn = new Audio("sounds/tom-1.mp3");
            a_btn.play();
            break;

        case "s":
            var s_btn = new Audio("sounds/tom-2.mp3");
            s_btn.play();
            break;

        case "d":
            var d_btn = new Audio("sounds/tom-3.mp3");
            d_btn.play();
            break;

        case "f":
            var f_btn = new Audio("sounds/tom-4.mp3");
            f_btn.play();
            break;

        case "j":
            var j_btn = new Audio("sounds/snare.mp3");
            j_btn.play();
            break;

        case "k":
            var k_btn = new Audio("sounds/crash.mp3");
            k_btn.play();
            break;

        case "l":
            var l_btn = new Audio("sounds/kick-bass.mp3");
            l_btn.play();
            break;

        default: console.log(btnValue);
            break;
    }
}

function btnAnimation(btnVal) {
    var pressedBtn = document.querySelector(`.${btnVal}`);

    pressedBtn.classList.add("pressed");

    setTimeout(function () {
        pressedBtn.classList.remove("pressed");
    }, 100);
}


