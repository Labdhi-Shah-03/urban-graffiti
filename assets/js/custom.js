$(document).ready(function () {
    $(".search").click(function () {
      $(".input-box-search").toggleClass("active");
    });
  });
// new 
  $(document).ready(function () {
    $(".plus1").click(function () {
      $(".new-plus").show("active");
    });
  });
  $(".close").click(function () {
    $(".new-plus").hide("active");
});

  // tab js
  document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to handle clicks on dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const tabName = this.textContent.trim();
            openTab(tabName);
        });
    });
  
    // Add an event listener to handle clicks on close icons
    const tabContainer = document.getElementById('tabContainer');
    tabContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG' && event.target.alt === 'close') {
            const tabName = event.target.parentElement.id;
            closeTab(tabName);
        }
    });
  });
  
  function openTab(tabName) {
    // Check if the tab is already open
    if (document.getElementById(tabName)) {
        // If open, make it active and return
        activateTab(tabName);
        return;
    }
  
    // Create a new tab
    const tabContainer = document.getElementById('tabContainer');
    const newTab = document.createElement('div');
    newTab.id = tabName;
    newTab.classList.add('tabcontent', 'p-3', 'active'); // Add 'active' class to make it visible by default
    newTab.innerHTML = `<span class="pe-2">${tabName}</span> <img src="assets/image/close.png" alt="close">`;
  
    // Append the new tab to the tab container
    tabContainer.appendChild(newTab);
  
    // Activate the new tab
    activateTab(tabName);
  }
  
  function activateTab(tabName) {
    // Deactivate all tabs
    const allTabs = document.querySelectorAll('.tabcontent');
    allTabs.forEach(tab => tab.classList.remove('active'));
  
    // Activate the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
  }
  
  function closeTab(tabName) {
    // Remove the tab
    const tabToRemove = document.getElementById(tabName);
    if (tabToRemove) {
        tabToRemove.remove();
    }
  }
  
  // model
let tBody = document.getElementById('user_tbody');
let modal = document.getElementById('myModal');
let tr = tBody.getElementsByTagName('TR');
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
for (let i = 0; i < tr.length; i++) {
  tr[i].onclick = function() {
    modal.style.display = "block";
    console.log(this.firstElementChild.innerHTML + ' Selected'); // копирование значения
  };
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};



