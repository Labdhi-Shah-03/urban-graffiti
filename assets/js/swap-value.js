$(document).ready(function(){
    // Toggle dropdown on click of #setting-value
    $("#setting-value").click(function(){
        var settingValueGroup = $(this).closest(".input-setting-box").find(".setting-value-group");
        settingValueGroup.slideToggle();
    });

    // Close dropdown on click of permit or restrict buttons
    $("#btnAllRight, #btnAllLeft").click(function(){
        var settingValueGroup = $(this).closest(".input-setting-box").find(".setting-value-group");
        settingValueGroup.slideUp();
    });

    // Toggle highlighted class on click of permit or restrict buttons
    $("#btnAllRight, #btnAllLeft").click(function(){
        $(".input-arrow-box").removeClass("highlighted");
        $(this).closest(".input-arrow-box").addClass("highlighted");
    });

    // Remove highlighted class and close dropdown on click outside of input-setting-box
    $(document).click(function(event) {
        if (!$(event.target).closest('.input-setting-box').length) {
            $(".input-arrow-box").removeClass("highlighted");
            $(".setting-value-group").slideUp();
        }
    });
});

// Function to handle button clicks for moving items between lists
function moveItems(sourceId, destinationId) {
    var selectedValues = document.querySelectorAll(`#${sourceId} a.selected`);
  
    for (var i = selectedValues.length - 1; i >= 0; i--) {
        var value = selectedValues[i];
        var clone = value.cloneNode(true);
        clone.classList.remove('selected'); // Remove the 'selected' class from the clone
        
        var li = document.createElement('li');
        li.appendChild(clone);
        document.getElementById(destinationId).querySelector('.value-box-wrapper').prepend(li); // Placing selected value on top
        value.parentNode.removeChild(value);
    }
}

function moveAllItems(sourceId, destinationId) {
    var allValues = document.querySelectorAll(`#${sourceId} a`);
  
    for (var i = allValues.length - 1; i >= 0; i--) {
        var value = allValues[i];
        var clone = value.cloneNode(true);
        clone.classList.remove('selected');
        
        var li = document.createElement('li');
        li.appendChild(clone);
        document.getElementById(destinationId).querySelector('.value-box-wrapper').prepend(li); // Placing selected value on top
        value.parentNode.removeChild(value);
    }
}
  
  // Function to handle click events on list items
  function handleListClick(listId, e) {
    if (e.target.tagName === 'A') {
      e.target.classList.toggle('selected');
    }
  }
  
  // Function to handle search box input for a list
  function handleSearchInput(listId, searchTerm) {
    var items = document.querySelectorAll(`#${listId} a`);
  
    items.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Event listeners
  document.getElementById('btnRight').addEventListener('click', function () {
    moveItems('lstBox1', 'lstBox2');
  });
  
  document.getElementById('lstBox1').addEventListener('click', function (e) {
    handleListClick('lstBox1', e);
  });
  
  document.getElementById('btnLeft').addEventListener('click', function () {
    moveItems('lstBox2', 'lstBox1');
  });
  
  document.getElementById('lstBox2').addEventListener('click', function (e) {
    handleListClick('lstBox2', e);
  });
  
  document.getElementById('btnAllRight').addEventListener('click', function () {
    moveAllItems('lstBox1', 'lstBox2');
  });
  
  document.getElementById('btnAllLeft').addEventListener('click', function () {
    moveAllItems('lstBox2', 'lstBox1');
  });
  
  document.getElementById('searchBox1').addEventListener('input', function () {
    handleSearchInput('lstBox1', this.value.toLowerCase());
  });
  
  document.getElementById('searchBox2').addEventListener('input', function () {
    handleSearchInput('lstBox2', this.value.toLowerCase());
  });
  