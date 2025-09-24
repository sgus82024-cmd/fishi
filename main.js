
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    
    header.style.position = 'relative';
    header.appendChild(navToggle);
    
    
        navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-active');
    });
    
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('mobile-menu-active');
        });
    });
});
    
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('mobile-menu-active');
        });
    });
});

 // ПЛАВНАЯ ПРОКРУТКА
  $(document).ready(function() {
       
        

        $('nav a[href^="#"], .btn[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            const targetId = $(this).attr('href');
            const $target = $(targetId);
            
            if ($target.length) {
                const offsetTop = $target.offset().top - 80; 
                
                $('html, body').stop().animate({
                    scrollTop: offsetTop
                }, 800, 'swing');
            }
        });
        
       
        $(window).on('scroll', function() {
            const scrollPos = $(document).scrollTop() + 100;
            
            $('nav a[href^="#"]').each(function() {
                const $link = $(this);
                const targetId = $link.attr('href');
                const $target = $(targetId);
                
                if ($target.length) {
                    const targetTop = $target.offset().top;
                    const targetBottom = targetTop + $target.outerHeight();
                    
                    if (scrollPos >= targetTop && scrollPos < targetBottom) {
                        $link.addClass('active').siblings().removeClass('active');
                    }
                }
            });
        });
        
      
        $(window).trigger('scroll');
    });
    // КНОПКА "НАВЕРХ"
$(document).ready(function() {
   
    const backToTopButton = $('<button>', {
        class: 'back-to-top',
        html: '<i class="fas fa-chevron-up"></i>',
        title: 'Вернуться наверх'
    });
    
  
    $('body').append(backToTopButton);
    
   
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
    });
    
  
    backToTopButton.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'swing');
    });
    
   
  

});


