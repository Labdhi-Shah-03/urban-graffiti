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

    // // for multiple dropdowns (for accordion content box)
    // $('.accordion-inner-box').click(function(){
    //     // Check if the clicked accordion-inner-box is active
    //     var isActive = $(this).hasClass("active");
        
    //     // Remove active class from all accordion-inner-boxes
    //     $('.accordion-inner-box').removeClass('active');
        
    //     // Toggle active class for the clicked accordion-inner-box
    //     if (!isActive) {
    //         $(this).addClass('active');
    //     }
        
    //     // Toggle the visibility of the next accordion content box
    //     $(this).next('.accordion-content-box').slideToggle();
        
    //     // Hide the other accordion content boxes
    //     $(".accordion-content-box").not($(this).next('.accordion-content-box')).slideUp();
    // });


    // for user profile dropdown
    $('.user-profile-box').click(function(event){
        event.stopPropagation(); // Prevent click event from propagating to document
        // Toggle visibility of the dropdown
        $(this).find('.profile-dropdown-list').slideToggle();
        
        // Toggle active class
        $(this).toggleClass('active');
        // Toggle custom-class on user-profile-box
        $('.user-profile-box').toggleClass('custom-class');
    });

    // Click event on document
    $(document).click(function(event) {
        // Check if the clicked element is not within the dropdown or the user profile box
        if (!$(event.target).closest('.user-profile-box').length && !$(event.target).closest('.profile-dropdown-list').length) {
            // Close the dropdown and remove custom class
            $('.profile-dropdown-list').slideUp();
            $('.user-profile-box').removeClass('custom-class');
        }
    });

    // snippet for custom select dropdown for admin user page
    $('.custom-select .select-selected').click(function(event) {
        event.stopPropagation();
        var dropdown = $(this).closest('.custom-select').find('.select-items');
        $('.custom-select .select-items').not(dropdown).slideUp();
        dropdown.slideToggle();
        $(this).toggleClass('clicked');
    });
    
    $('.custom-select .select-items li').click(function() {
        $(this).siblings().removeClass('items-active'); // Remove the class from sibling items only
        $(this).addClass('items-active'); // Add class to the clicked item
        var value = $(this).text();
        var selectedOption = $(this).closest('.custom-select').find('.select-selected');
        selectedOption.text(value);
        selectedOption.removeClass('clicked');
        $(this).closest('.select-items').slideUp();
    });
    
    $(document).click(function() {
        $('.custom-select .select-items').slideUp();
        $('.custom-select .select-selected').removeClass('clicked');
    });

    // filter dropdown with custom select
    // Toggle filter box when filter button is clicked
    $('.filter-btn').click(function(event) {
        event.stopPropagation();
        var filterBox = $(this).closest('.filter-wrapper').find('.filter-box');
        $('.filter-box').not(filterBox).slideUp(); // Close other filter boxes
        filterBox.slideToggle();
    });

    // Close filter box when close icon is clicked
    $('.close-filter').click(function(event) {
        event.stopPropagation();
        $(this).closest('.filter-box').slideUp();
    });

    // Close filter box when search button is clicked
    $('.btn-cta-save').click(function(event) {
        event.stopPropagation();
        $(this).closest('.filter-box').slideUp();
    });

    // Prevent closing filter box when clicking inside the filter box or on the filter button
    $('.filter-wrapper, .filter-btn').click(function(event) {
        event.stopPropagation();
    });

    // Close filter box when clicking outside the filter box
    $(document).click(function() {
        $('.filter-box').slideUp();
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


    // accordion when click on inner-box and opens content-box for new user page
    $('.accordion-inner-box').click(function() {
        var contentBox = $(this).next('.accordion-content-box');
        $('.accordion-content-box').not(contentBox).slideUp();
        contentBox.slideToggle();
        $('.accordion-content-box').not(contentBox).removeClass('active');
        contentBox.toggleClass('active');
    });


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
    
    // // Function to add or remove the sticky class based on scroll position
    // function toggleStickyClass() {
    //     if ($(window).scrollTop() >= scrollThreshold) {
    //         $('.work-order-section').addClass('sticky');
    //     } else {
    //         $('.work-order-section').removeClass('sticky');
    //     }
    // }

    // // Add event listener for scroll
    // $(window).on('scroll', toggleStickyClass);
});

// datatable snippet
// new DataTable('table', {
//     // Options
//     // paging: false,
//     info: false,
//     // filter: false,
//     ordering: false,
//     searching: false,
//     // Paging type
//     lengthMenu: [5, 10, 15, 25, { label: 'All', value: -1 }],
//     // responsive: true,
//     layout: {
//         topEnd: {
//             search: {
//                 placeholder: 'Search Keywords...'
//             }
//         },
//         bottomEnd: {
//             paging: {
//                 type: 'full_numbers',
//                 // boundaryNumbers: false,
//             }
//         }
//     },
//     language: {
//         entries: {
//             _: 'Users ',
//         }
//     }

// });

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

// select input checkbox that will apply class on targeted tr
document.addEventListener("DOMContentLoaded", function () {
    // Get all the checkboxes with the class 'table-input-checkbox' in the body
    var checkboxes = document.querySelectorAll('.users-details .table-input-checkbox');

    // Get the header checkbox
    var headerCheckbox = document.querySelector('thead .table-input-checkbox');

    // Get the header tr element
    var headerTr = document.querySelector('thead tr');

    // Function to update header checkbox state based on body checkboxes
    function updateHeaderCheckboxState() {
        var anyChecked = false;
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                anyChecked = true;
            }
        });
        headerCheckbox.checked = anyChecked;
        // Add or remove class from header tr based on header checkbox state
        if (headerCheckbox.checked) {
            headerTr.classList.add('selected');
        } else {
            headerTr.classList.remove('selected');
        }
    }

    // Add event listener to each checkbox in the body
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Get the parent tr element of the checkbox
            var parentTr = this.closest('.tr_list');

            // If the checkbox is checked
            if (this.checked) {
                // Add a class to the parent tr
                parentTr.classList.add('selected');
            } else {
                // Remove the class from the parent tr
                parentTr.classList.remove('selected');
            }

            // Update the state of the header checkbox
            updateHeaderCheckboxState();
        });
    });

    // Add event listener to the header checkbox
    headerCheckbox.addEventListener('change', function () {
        var isChecked = headerCheckbox.checked;

        // Update the state of all body checkboxes based on the header checkbox
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;

            // Get the parent tr element of the checkbox
            var parentTr = checkbox.closest('.tr_list');

            // If the checkbox is checked
            if (isChecked) {
                // Add a class to the parent tr
                parentTr.classList.add('selected');
            } else {
                // Remove the class from the parent tr
                parentTr.classList.remove('selected');
            }
        });

        // Add or remove class from header tr based on header checkbox state
        if (isChecked) {
            headerTr.classList.add('selected');
        } else {
            headerTr.classList.remove('selected');
        }
    });
});


// pagination


const ulTag = document.querySelector(".pagination ul");

function pagination(totalPages, page) {
  let liTag = "";
  let beforePage = page - 1; //4
  let afterPage = page + 1; //5
  let activeLi = "";
  let totalP = totalPages;
  // if page is greater than 1  then show the prev button
  // display prev button
  if (page > 1) {
    liTag += `<li class="btn prev"onClick="pagination(${totalP}, ${page - 1})">
                <span>
                Prev
                </span>
              </li>`;
  }

  //add page one if there is more than 2 pages
  if (page > 2) {
    liTag += `        <li class="num " onClick="pagination(${totalPages}, ${1})"><span>1</span></li>
    `;
    //add dots   if there is more than 3 pages

    if (page > 3) {
      liTag += `        <li class="dots"><span>...</span></li>
      `;
    }
  }
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == totalPages - 1) {
    afterPage = afterPage + 1;
  }
  // display prev page and current page and after page
  for (let pageNum = beforePage; pageNum <= afterPage; pageNum++) {
    if (pageNum > totalPages) {
      continue;
    }
    if (pageNum == 0) {
      // pageNum = pageNum + 1;
      continue;
    }
    page == pageNum ? (activeLi = "active") : (activeLi = "");

    liTag += `<li class="num ${activeLi}" onClick="pagination(${totalPages}, ${pageNum})"><span>${pageNum}</span></li>`;
    //4 5 6
  }

  // display next button
  //add page one if there is more than 2 pages
  if (page < totalPages - 1) {
    //add dots   if there is more than 3 pages
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="num " onClick="pagination(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next"onClick="pagination(${totalP}, ${page + 1})">
  <span>Next</span>
</li>`;
  }

  ulTag.innerHTML = liTag;
}
pagination(100, 1);


