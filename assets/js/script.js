
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

//fade in image and text
function showEntrance() {
    let entranceimg = document.getElementById("entrance-image")
    let entrancetext1 = document.getElementById("entrance-text-1")
    let entrancetext2 = document.getElementById("entrance-text-2")
setTimeout(() => {
    showFade(entranceimg);
    setTimeout(() => {
        showFade(entrancetext1);
        showFade(entrancetext2);
    }, 500);
}, 500);
};

showEntrance();