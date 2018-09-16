function onscroll(){
    let scroll = document.documentElement.scrollTop | document.body.scrollTop;
    if(scroll > (25 + (Math.max(0, document.body.clientHeight - 500) / 2))){
        let menu = document.getElementById("menuBar");
        menu.style.background = "rgba(0, 38, 128, 0.7)";
    } else {
        let menu = document.getElementById("menuBar");
        menu.style.background = "none";
    }
}