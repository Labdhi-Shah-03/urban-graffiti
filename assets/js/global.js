$(document).ready(function() {
    // for only single dropdown
    // $('.nav-items-sub-dropdown .nav-links').click(function(){
    //     // Check if the sidebar is collapsed
    //     if (!$('#work-order').hasClass('sidebar-collapsed')) {
    //         // Toggle visibility of the dropdown
    //         $(this).siblings('.nav-list-dropdown').slideToggle();
            
    //         // Toggle active class
    //         $(this).toggleClass('active');
    //     }
    // });

    // for multiple dropdown with collapsed sidebar
    $('.nav-items-sub-dropdown .nav-links').click(function(){
        // Check if the sidebar is collapsed
        if (!$('#work-order').hasClass('sidebar-collapsed')) {
            // Close any open dropdowns except the one clicked
            $('.nav-items-sub-dropdown .nav-links').not(this).removeClass('active').siblings('.nav-list-dropdown').slideUp();
            
            // Toggle visibility of the dropdown
            $(this).siblings('.nav-list-dropdown').slideToggle();
            
            // Toggle active class
            $(this).toggleClass('active');
        }
    });

    // for multiple dropdowns
    // $('.nav-items-sub-dropdown .nav-links').click(function(){
    //     //Expand or collapse this panel
    //     var isActive = $(this).hasClass("active");
    //     $('.nav-items-sub-dropdown .nav-links').removeClass('active')
    //     if (!isActive) {
    //         $(this).toggleClass('active');
    //     }
        
    //     $(this).next().slideToggle('fast');     
    //     //Hide the other panels
    //     $(".nav-list-dropdown").not($(this).next()).slideUp('fast');
  
    // });

    // //for user profile dropdown
    $('.user-profile-box').click(function(){
        // Toggle visibility of the dropdown
        $(this).find('.profile-dropdown-list').slideToggle();
        
        // Toggle active class
        $(this).toggleClass('active');
        // Toggle custom-class on user-profile-box
        $('.user-profile-box').toggleClass('custom-class');
    });

    // //for multiple accordions
    // $('.accordion-wrapper .accordion-inner-box').click(function(){
    //     //Expand or collapse this panel
    //     var isActive = $(this).hasClass("active");
    //     $('.accordion-wrapper .accordion-inner-box').removeClass('active')
    //     if (!isActive) {
    //         $(this).toggleClass('active');
    //     }
        
    //     $(this).next().slideToggle('fast');     
    //     //Hide the other panels
    //     $(".accordion-sub-box").not($(this).next()).slideUp('fast');
    // });

    // Toggle sub-structure elements when clicking on main-structure elements
    // Add click event listener to .accordion-inner-box to toggle .accordion-sub-box
    $('.accordion-wrapper .accordion-box .accordion-inner-box').click(function(e) {
        e.preventDefault(); // Prevent the default action of the anchor tag
        
        // Toggle active class on clicked .accordion-inner-box
        $(this).toggleClass('active');

        // Remove active class from all other .accordion-inner-box elements
        $('.accordion-inner-box').not(this).removeClass('active');
        
        // Close all other open .accordion-sub-box
        $('.accordion-sub-box').not($(this).siblings('.accordion-sub-box')).slideUp();

        // Toggle (show/hide) the corresponding .accordion-sub-box
        var $subBox = $(this).siblings('.accordion-sub-box');
        $subBox.slideToggle();

        // Close .form-wrapper inside other .accordion-sub-box
        $('.form-wrapper').not($subBox.find('.form-wrapper')).slideUp();

        // Remove active class from .accordion-sub-box
        $('.accordion-sub-box').removeClass('active');
    });

    // Add click event listener to .accordion-sub-box to toggle .form-wrapper and apply active class
    $('.accordion-wrapper .accordion-box .accordion-sub-box').click(function(e) {
        e.stopPropagation(); // Prevent event from bubbling up to .accordion-inner-box
        
        // Toggle active class on clicked .accordion-sub-box
        $(this).toggleClass('active');

        // Remove active class from all other .accordion-sub-box elements
        $('.accordion-sub-box').not(this).removeClass('active');

        // Toggle (show/hide) the .form-wrapper
        $(this).find('.form-wrapper').slideToggle();
    });

    // Prevent closing of form wrapper when clicking inside it
    $('.form-wrapper').click(function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
    });

    // // Close .accordion-sub-box and remove active class when clicking outside of it
    // $(document).click(function(event) {
    //     if (!$(event.target).closest('.accordion-box').length) {
    //         $('.accordion-sub-box').slideUp().removeClass('active');
    //         $('.accordion-inner-box').removeClass('active');
    //     }
    // });

    // // images upload functionality
    //    // Initialize Slick Slider for the main image
    // $('.main-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: false,
    //     asNavFor: '.thumbnail-slider'
    // });
  
    //   // Initialize Slick Slider for the thumbnail carousel
    // $('.thumbnail-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.main-slider',
    //     dots: false,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
  
    //   // Click event for zoom icons
    // $('.zoom-icon').on('click', function() {
    //     var imageSrc = $(this).data('image');
    //     openPopup(imageSrc);
    // });

    // zoom functionality
    //full screen view
    $('.zoom-icon').click(function(e){
        e.preventDefault();

        // Click event for Full Screen
        $('.upload-image-box').removeClass('card-full-screen');
        
        $(this).closest('.upload-image-box').addClass('card-full-screen');

        // Add overlay class to the body
        $('body').addClass('overlay-class-view');

        // // Smooth scroll to the top of the body
        // $('html, body').animate({
        //     scrollTop: 0
        // }, .5);
    })

     // Click event for Full Screen Close
     $('.full-view-close').click(function(e) {
        e.preventDefault(); // Prevent default behavior of anchor tag
        
        $(this).closest('.upload-image-box').removeClass('card-full-screen');

        // Remove overlay class from the body
        $('body').removeClass('overlay-class-view');
    });


    // Define the scroll threshold
    var scrollThreshold = 120; // Adjust this value as needed
    
    // Function to add or remove the sticky class based on scroll position
    function toggleStickyClass() {
        if ($(window).scrollTop() >= scrollThreshold) {
            $('.work-order-section').addClass('sticky');
        } else {
            $('.work-order-section').removeClass('sticky');
        }
    }

    // Add event listener for scroll
    $(window).on('scroll', toggleStickyClass);
});

document.addEventListener("DOMContentLoaded", function() {
    const collapsedArrow = document.getElementById('collapsed-arrow');
    const menuArrow = document.getElementById('menu-arrow');
    const workOrderSection = document.getElementById('work-order');

    collapsedArrow.addEventListener('click', function() {
        if (!workOrderSection.classList.contains('sidebar-collapsed')) {
            workOrderSection.classList.add('sidebar-collapsed');
        }
    });

    menuArrow.addEventListener('click', function() {
        workOrderSection.classList.remove('sidebar-collapsed');
    });
});

// $(document).ready(function () {
//     $("#datepicker").flatpickr({
//         enableTime: true, // Enable time selection
//         dateFormat: "d/m/Y H:i", // Date and time format
//         defaultDate: "today" // Set default time to current time
//     });
// });