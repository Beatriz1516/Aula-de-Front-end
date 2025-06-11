
   
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        hamburger.addEventListener('click', function() {
           
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
       
        const navItems = document.querySelectorAll('.nav-item');
       
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    });
