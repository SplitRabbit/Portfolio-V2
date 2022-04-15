
// Function for showing the element with incoming fade
function showFade(element) {
        var op = 0.05;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 30);
};

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }, 30);
};

//fade in image and text
function showEntrance() {
    let entranceimg = document.getElementById("entrance-image")
    let entrancetext1 = document.getElementById("entrance-text-1")
    let entrancetext2 = document.getElementById("entrance-text-2")
    let entrancepage = document.getElementById("entrance-page")
setTimeout(() => {
    showFade(entranceimg);
    setTimeout(() => {
        showFade(entrancetext1);
        showFade(entrancetext2);
        setTimeout(() => {
            fade(entrancepage);
        }, 3000);
    }, 500);
}, 500);
};

showEntrance();