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

// ПЛАВНАЯ ПРОКРУТКА И АКТИВНЫЕ ССЫЛКИ
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
    
    // ОБНОВЛЕННЫЙ КОД ДЛЯ АКТИВНЫХ ССЫЛОК
    $(window).on('scroll', function() {
        const scrollPos = $(document).scrollTop() + 100;
        let found = false;
        
        $('nav a[href^="#"]').each(function() {
            const $link = $(this);
            const targetId = $link.attr('href');
            
            if (targetId === '#') return;
            
            const $target = $(targetId);
            
            if ($target.length) {
                const targetTop = $target.offset().top;
                const targetBottom = targetTop + $target.outerHeight();
                
                if (scrollPos >= targetTop && scrollPos < targetBottom) {
                    $link.addClass('active');
                    found = true;
                } else {
                    $link.removeClass('active');
                }
            }
        });
        
     
        if (!found) {
            $('nav a[href^="#"]').removeClass('active');
        }
    });
    
    $(window).trigger('scroll');
});

// КНОПКА "НАВЕРХ" 
$(document).ready(function() {
    
    const backToTopButton = $('.back-to-top');
    
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
    
  
    $('<style>').text(`
        nav a.active {
            color: #00b4db !important;
            background: rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 0 10px rgba(0, 180, 219, 0.5);
        }
        
        input::placeholder, textarea::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
        }
        
        input:focus, textarea:focus {
            outline: 2px solid #00b4db;
            background: rgba(255, 255, 255, 0.15) !important;
        }
    `).appendTo('head');
});
