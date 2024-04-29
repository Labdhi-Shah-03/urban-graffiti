$(document).ready(function() {

    // for only single dropdown
    $('.nav-items-sub-dropdown .nav-links').click(function(){
        // Check if the sidebar is collapsed
        if (!$('#work-order').hasClass('sidebar-collapsed')) {
            // Toggle visibility of the dropdown
            $(this).siblings('.nav-list-dropdown').slideToggle();
            
            // Toggle active class
            $(this).toggleClass('active');
        }
    });

    // //for user profile dropdown
    $('.user-profile-box .user-dropdown').click(function(){
        // Toggle visibility of the dropdown
        $(this).siblings('.profile-dropdown-list').slideToggle();
        
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

    // Close .accordion-sub-box and remove active class when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.accordion-box').length) {
            $('.accordion-sub-box').slideUp().removeClass('active');
            $('.accordion-inner-box').removeClass('active');
        }
    });
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

$(document).ready(function () {
    $("#datepicker").flatpickr({
        enableTime: true, // Enable time selection
        dateFormat: "d/m/Y H:i", // Date and time format
        defaultDate: "today" // Set default time to current time
    });
});