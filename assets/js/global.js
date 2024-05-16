$(document).ready(function() {
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

        // Remove active class from all .acordion-subtitle elements if they don't have active class
        $('.acordion-subtitle').not('.active').removeClass('active');
    });

    // Add click event listener to .accordion-sub-box-title to toggle .form-wrapper and apply active class
    $('.accordion-wrapper .accordion-box .accordion-sub-box-title').click(function(e) {
        e.stopPropagation(); // Prevent event from bubbling up to .accordion-inner-box

        // Toggle active class on .acordion-subtitle
        $(this).find('.acordion-subtitle').toggleClass('active');

        // Toggle (show/hide) the .form-wrapper
        $(this).siblings('.form-wrapper').slideToggle();
    });

    // Prevent closing of form wrapper when clicking inside it
    $('.form-wrapper').click(function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
    });

    // Open the first accordion and its sibling by adding the "active" class
    var $firstAccordion = $('.accordion-wrapper .accordion-box:first');
    $firstAccordion.find('.accordion-inner-box').addClass('active');
    $firstAccordion.find('.accordion-sub-box').slideDown();
    $firstAccordion.next().css('display', 'block');
    
    // Open only the first accordion-content-box
    $('.accordion-content-box:first').css('display', 'block');
    
    // Open the form wrapper of the first accordion-sub-box if it's not a sibling to accordion-content-box
    if (!$('.accordion-content-box:first').next().hasClass('accordion-sub-box')) {
        $('.accordion-wrapper .accordion-box:first .accordion-sub-box:first .form-wrapper').slideDown();
    }

    // Toggle active class on .acordion-subtitle if the first accordion-sub-box is open by default
    if ($firstAccordion.find('.accordion-sub-box:first').is(':visible')) {
        $firstAccordion.find('.accordion-sub-box-title:first .acordion-subtitle').toggleClass('active');
    }

    // accordion when click on inner-box and opens content-box for new user page
    $('.accordion-inner-box').click(function() {
        var contentBox = $(this).next('.accordion-content-box');
        $('.accordion-content-box').not(contentBox).slideUp();
        contentBox.slideToggle();
    });

    // Remove active class from .acordion-subtitle when clicking on another .accordion-inner-box
    $('.accordion-inner-box').click(function() {
        var $currentInnerBox = $(this);
        $('.accordion-inner-box').not($currentInnerBox).each(function() {
            var $siblingAccordionSubtitle = $(this).siblings('.accordion-sub-box').find('.acordion-subtitle');
            if ($siblingAccordionSubtitle.hasClass('active')) {
                $siblingAccordionSubtitle.removeClass('active');
            }
        });
    });
    // ####### //

    // user information validation start
    $('#save-user-button').click(function(e) {
        e.preventDefault();
    
        // Remove any existing error messages and error classes
        $('.required').removeClass('error');
        $('.error-message').empty().hide();
    
        // Check for empty required fields
        var hasErrors = false;
        $('.required').each(function() {
            if ($(this).val() === '') {
                $(this).addClass('error');
                hasErrors = true;
            }
        });
    
        // Show error messages at the bottom in the error-message div
        if (hasErrors) {
            $('.error-message').html('Please fill in all required fields.').slideDown();
        } else {
            $('.error-message').slideUp();
        }
    
        // Open accordion-content-box with active class if it contains form with empty required fields
        $('.accordion-box').each(function() {
            var $accordionContentBox = $(this).find('.accordion-content-box');
            var $form = $accordionContentBox.find('form');
            if ($form.length > 0 && $form.find('.required.error').length > 0) {
                $(this).addClass('active');
                $accordionContentBox.slideDown();
                $(this).find('.accordion-inner-box').addClass('active'); // Add active class to accordion-inner-box
            }
        });
    });
    // ##### //


    // Validate form fields when clicking on "Save Contract" button
    $('#save-button').click(function(e) {
        e.preventDefault();
    
        var $accordionBox = $(this).closest('.accordion-box');
    
        // Find all forms within the accordion box
        $accordionBox.find('form').each(function() {
            var $form = $(this);
            var isValid = true;
    
            // Loop through each form field and validate
            $form.find('.required').each(function() {
                if ($(this).val() === '') {
                    $(this).addClass('error');
                    isValid = false;
                } else {
                    $(this).removeClass('error');
                }
            });
    
            // If any required field is blank, show error messages
            if (!isValid) {
                $form.find('.error-message').text('Please fill in all required fields.').slideDown();
                // Slide down the form wrapper if any required field has the error class applied
                openFormWrapper($accordionBox, true);
            } else {
                $form.find('.error-message').slideUp();
            }
        });
    });
    
    // Add event listener for input fields to remove error class on typing
    $('.accordion-box form .required').not('.date-picker').on('input', function() {
        var $form = $(this).closest('form');
        if ($(this).val() !== '') {
            $(this).removeClass('error');
            checkAllFieldsFilled($form); // Check if all fields are filled whenever a field is updated
        }
    });
    
    // Add event listener for date fields to remove error class on value change
    $('.accordion-box form .required.date-picker').on('change', function() {
        var $form = $(this).closest('form');
        if ($(this).val() !== '') {
            $(this).removeClass('error');
            checkAllFieldsFilled($form); // Check if all fields are filled whenever a field is updated
        }
    });
    
    // Function to check if all required fields are filled for a specific form
    function checkAllFieldsFilled($form) {
        var allFilled = true;
        $form.find('.required').each(function() {
            if ($(this).val() === '') {
                allFilled = false;
                return false; // Exit the loop early if any field is not filled
            }
        });
    
        if (allFilled) {
            $form.find('.error-message').slideUp(); // Slide up error message if all fields are filled
            openFormWrapper($form.closest('.accordion-sub-box'), false);
        }
    }
    
    // Function to open form wrapper if all required fields are filled or if there are errors
    function openFormWrapper($accordionSubBox, hasErrors) {
        var $formWrapper = $accordionSubBox.find('.form-wrapper');
        if ($formWrapper.find('form').length > 0) { // Check if form wrapper contains form elements
            if (hasErrors || $formWrapper.find('.required.error').length > 0) {
                $formWrapper.slideDown();
                $accordionSubBox.find('.acordion-subtitle').addClass('active');
            }
        }
    }
    // ####### //

    // Add click event listener to each checkbox
    $('#tree input[type=checkbox]').click(function(){
        // children checkboxes depend on current checkbox
        $(this).next().find('input[type=checkbox]').prop('checked',this.checked);

        // go up the hierarchy - and check/uncheck depending on number of children checked/unchecked
        $(this).parents('ul').prev('input[type=checkbox]').prop('checked',function(){
            return $(this).next().find(':checked').length;
        });
    });

    // select 2 js snippet
    $('#serviceSchedule').each(function () {
        $(this).select2({
          theme: 'bootstrap-5',
          width: 'style',
          placeholder: $(this).attr('placeholder'),
          allowClear: Boolean($(this).data('allow-clear')),
        });
    });

    // date picker snippet
    $('#startDate').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });

    $('#endDate').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });

    // modal popup
    $('#openModalBtn').click(function() {
        var modal = $('#myModal');
        modal.removeClass('fadeOut');
        modal.css('display', 'block');
        $('body').addClass('modal-open');
    });

    $('#closeModalBtn').click(function() {
        var modal = $('#myModal');
        modal.addClass('fadeOut');
        setTimeout(function() {
            modal.css('display', 'none');
            $('body').removeClass('modal-open');
        }, 400); // 400ms - duration of animation
    });

    $(window).click(function(event) {
        var modal = $('#myModal');
        if (event.target == modal[0]) {
            modal.addClass('fadeOut');
            setTimeout(function() {
                modal.css('display', 'none');
                $('body').removeClass('modal-open');
            }, 400); // 400ms - duration of animation
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

// select input checkbox that will apply class on targeted tr
document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll('.users-details .table-input-checkbox');
    var headerCheckbox = document.getElementById('select-all-header');
    var headerTr = document.querySelector('thead tr');
    var editPanel = document.querySelector('.edit-panel');

    if (!headerCheckbox) {
        console.error("Header checkbox not found. Make sure your HTML structure is correct.");
        return; // Exit the function if headerCheckbox is null
    }

    function updateHeaderCheckboxState() {
        var anyChecked = false;
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                anyChecked = true;
            }
        });
        headerCheckbox.checked = anyChecked;
        if (headerCheckbox.checked) {
            headerTr.classList.add('selected');
            editPanel.style.display = 'block'; // Show the edit panel when any checkbox is checked
        } else {
            headerTr.classList.remove('selected');
            editPanel.style.display = 'none'; // Hide the edit panel when all checkboxes are unchecked
        }
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var parentTr = this.closest('.tr_list');
            if (this.checked) {
                parentTr.classList.add('selected');
                editPanel.style.display = 'block'; // Show the edit panel when any checkbox is checked
            } else {
                parentTr.classList.remove('selected');
                // Check if any checkbox is still checked
                var anyChecked = Array.from(checkboxes).some(function (checkbox) {
                    return checkbox.checked;
                });
                if (!anyChecked) {
                    editPanel.style.display = 'none'; // Hide the edit panel when all checkboxes are unchecked
                }
            }
            updateHeaderCheckboxState();
        });
    });

    headerCheckbox.addEventListener('change', function () {
        var isChecked = headerCheckbox.checked;
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;
            var parentTr = checkbox.closest('.tr_list');
            if (isChecked) {
                parentTr.classList.add('selected');
                editPanel.style.display = 'block'; // Show the edit panel when header checkbox is checked
            } else {
                parentTr.classList.remove('selected');
                editPanel.style.display = 'none'; // Hide the edit panel when header checkbox is unchecked
            }
        });
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
