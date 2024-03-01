// mobile responsive menubar collapse
let userScreenWidth = window.innerWidth;
let menuHand = document.getElementById("hand-berger");
let sideBar = document.getElementById("sideBar");
let sideIcon = document.getElementById("sideIcon");



if(userScreenWidth <= 477){
    // open menu bar
    menuHand.addEventListener("click",openMenuBar);
    function openMenuBar(){
        sideBar.style.transform = "translateX(0)";
    }
    // close menu bar
    sideIcon.addEventListener("click",closeMenuBar);
    function closeMenuBar(){
        sideBar.style.transform = "translateX(-100%)";
    }
}