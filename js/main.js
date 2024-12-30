(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

function validateForm() {
    // Get form elements
    var emailInput = document.getElementById('email');

    // Check if the email input is not empty
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    // Check if the entered email is valid
    if (!isValidEmail(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    // Display success alert
    alert('Successfully Subscribed');

    // Clear input after 2 seconds
    setTimeout(function () {
      emailInput.value = '';
    }, 2000);
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for a valid email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("contact-btn-btn").addEventListener("click", function() {
    window.open("contact.html", "_blank");
});


    


   


   var languageSelect = document.getElementById('LanguageSelect');
   var selectedLanguage = readCookie('language');
    
    if ((selectedLanguage == 'english') || (selectedLanguage == 'arabic')) {
    $(".language select").val(selectedLanguage);
    var sel = $(".language select").val(selectedLanguage);
    if (selectedLanguage == 'english') {
           $(".english").css("display", "inline");
           $(".arabic").css("display", "none"); 
            
        }else if (selectedLanguage =='arabic') {
           $(".english").css("display", "none");
           $(".arabic").css("display", "inline");
            
       
        }
    }

    $(".language select").bind('change', function() {
        //on change set cookie and...
        setCookie('language', this.value, 365);
        
        //change css depending on what is selected
        var sel = $(".language select").val();
        if (sel=='english') {
           $(".english").css("display", "inline");
           $(".arabic").css("display", "none");
           
        }else if (sel=='arabic') {
           $(".english").css("display", "none");
           $(".arabic").css("display", "inline");
            
        }else if (sel=='portuguese') {
           $(".english").css("display", "none");
           $(".arabic").css("display", "none");
            
        
        }
        

});

function saveLanguage(cookieValue)
{
    var sel = document.getElementById('LanguageSelect');
    setCookie('language', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();

    if (nDays==null || nDays==0)
        nDays=1;

    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function changeLanguage() {
    const selectedLanguage = document.getElementById("languageSelect").value;
    const targetPage = selectedLanguage === "ar" ? "index-ar.html" : "index.html";
    window.location.href = targetPage;
  }
  

document.addEventListener('DOMContentLoaded', function () {
const newsContainer = document.getElementById('news-container');

// قم بجلب الأخبار من مصدرك وتحديث newsContainer
// يمكنك استخدام AJAX أو Fetch API لجلب البيانات
const news = [
    'عنوان الخبر 1',
    'عنوان الخبر 2',
    'عنوان الخبر 3',
    // ... أخبار أخرى
];

news.forEach(title => {
    const newsItem = document.createElement('p');
    newsItem.textContent = title;
    newsContainer.appendChild(newsItem);
});
});
