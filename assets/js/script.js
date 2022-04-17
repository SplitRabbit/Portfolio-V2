// entrance page
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
        let homepage = document.getElementById("homepage")
    setTimeout(() => {
        showFade(entranceimg);
        setTimeout(() => {
            showFade(entrancetext1);
            showFade(entrancetext2);
            setTimeout(() => {
                fade(entrancepage);
                showFade(homepage);
                addintroEl();
            }, 3000);
        }, 500);
    }, 500);
    };

    showEntrance();

// Homepage
    //dynamically edit page based on clicked links
    var contentEL = document.getElementById("content");
    
    function addintroEl() {
        let introEl = document.createElement("div")
        introEl.textContent = "Hi, I'm Jeffrey Wang"
        introEl.classList = "textcontent"
        contentEL.appendChild(introEl)
    };

    document.getElementById("aboutmelink").addEventListener("click",addaboutmeEl)
    function addaboutmeEl() {
        contentEL.innerHTML = "";
        let addaboutmeEl = document.createElement("div")
        addaboutmeEl.textContent = "about me"
        contentEL.appendChild(addaboutmeEl)
    };

    document.getElementById("githublink").addEventListener("click",addgithubEl)
    function addgithubEl() {
        contentEL.innerHTML = "";
        let addgithubEl = document.createElement("div")
        addgithubEl.textContent = "github"
        contentEL.appendChild(addgithubEl)
    };

    document.getElementById("resumelink").addEventListener("click",addresumeEl)
    function addresumeEl() {
        contentEL.innerHTML = "";
        let addresumeEl = document.createElement("div")
        addresumeEl.textContent = "resume"
        contentEL.appendChild(addresumeEl)
    };

    document.getElementById("contactlink").addEventListener("click",addcontactEl)
    function addcontactEl() {
        contentEL.innerHTML = "";
        let addcontactEl = document.createElement("div")
        addcontactEl.textContent = "contact info"
        contentEL.appendChild(addcontactEl)
    };

    
