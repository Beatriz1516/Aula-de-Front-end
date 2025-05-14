document.addEventListener('DOMContentloaded', function(){
    const hamburger = document.getElementById ('hamburger');
    const navMenu = document.getElementById ('navMenu');


    hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
     });
});