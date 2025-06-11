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
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

// swiper slider
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500, // 25 seconds
      disableOnInteraction: false,
    },
    effect: "slide",
    speed: 600,
  });





// News SLider

document.addEventListener('DOMContentLoaded', function() {
    const newsCarousel = document.querySelector('.news-carousel');
    const newsItems = document.querySelectorAll('.news-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const itemWidth = newsItems[0].offsetWidth + 24; // Item width + margin
    const visibleItems = 3; // Adjust based on how many items you want to show initially
    let currentIndex = 0;
    let autoScrollInterval;
    const scrollIntervalTime = 4000; // 4.5 seconds

    function scrollToItem(index, smooth = true) {
        const translateX = -index * itemWidth;
        newsCarousel.style.transform = `translateX(${translateX}px)`;
        currentIndex = index;
        updateButtonVisibility();
    }

    function nextSlide() {
        if (currentIndex < newsItems.length - visibleItems) {
            scrollToItem(currentIndex + 1);
        } else if (newsItems.length > visibleItems) {
            scrollToItem(0); // Loop back to the beginning
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            scrollToItem(currentIndex - 1);
        } else if (newsItems.length > visibleItems) {
            scrollToItem(newsItems.length - visibleItems); // Loop back to the end
        }
    }

    function updateButtonVisibility() {
        prevButton.style.display = newsItems.length > visibleItems ? 'block' : 'none';
        nextButton.style.display = newsItems.length > visibleItems ? 'block' : 'none';
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, scrollIntervalTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Initial setup
    updateButtonVisibility();
    scrollToItem(0, false); // Initial position without smooth scroll
    startAutoScroll();

    // Event listeners for manual navigation
    nextButton.addEventListener('click', () => {
        stopAutoScroll();
        nextSlide();
        startAutoScroll();
    });

    prevButton.addEventListener('click', () => {
        stopAutoScroll();
        prevSlide();
        startAutoScroll();
    });

    // Pause auto-scroll on hover
    newsCarouselWrapper = document.querySelector('.news-carousel-wrapper');
    newsCarouselWrapper.addEventListener('mouseenter', stopAutoScroll);
    newsCarouselWrapper.addEventListener('mouseleave', startAutoScroll);
});


// This controls the image pop up on the website

  function showPopup() {
    document.getElementById('image-popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('image-popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
  }

  // Show popup after 2 seconds
  window.addEventListener('load', function () {
    setTimeout(showPopup, 200);
  });

  // Close popup when clicking the overlay
  document.getElementById('popup-overlay').addEventListener('click', closePopup);