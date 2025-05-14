document.addEventListener('DOMContentloaded', function(){
    const hamburger = document.getElementById ('hamburger');
    const navMenu = document.getElementById ('navMenu');


    hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
     });

     // Fechar o menu quando um item for clicado
     const navItem = document.querySelectorAll('nav-item');
     navItem.forEach (item => {
        item.addEventListener('click', funcition() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            });
        });
     });