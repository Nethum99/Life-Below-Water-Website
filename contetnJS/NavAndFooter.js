// ----------------------for search icon-------------------------------------------------------------


//  get the element with the ID "searchbtn" and add an event listener for the 'click' event.
document.getElementById("searchbtn").addEventListener('click', function(event){
    // preventing the display 
    event.preventDefault();

    // Check if the display style of the searchBar element is 'none'.
    if(searchBar.style.display == 'none'){
        // if it true call this function
        DisplaySearchBar(event);
    }
    else{
        // if it false call this function
        hideSearchBar(event);
    }
});

// Retrieve the HTML element with the ID "searchBar" and store it in the variable searchBar.
var searchBar = document.getElementById("searchBar");


// Define a function named DisplaySearchBar that takes an event object as a parameter.
function DisplaySearchBar(event){
    // preventing the display 
    event.preventDefault();
    // set the display of the searchBar element to 'block' , making search bar visible
    searchBar.style.display = 'block';

}

// Define a function named hideSearchBar that takes an event object as a parameter.
function hideSearchBar(event){
    // preventing the display 
    event.preventDefault();

    // set the display of the searchBar element to 'none' , making search bar hide
    searchBar.style.display = 'none';
}

// -------------for menu icon---------------------------------------------------------------------------------

// retrieve the HTML element with the ID "navbar" and store it in the variable navbar.
var navbar = document.getElementById("navbar");

// get the element with the ID "menubtn" and add event listner for the click event.
document.getElementById("menubtn").addEventListener('click', function(event){
    // preventing the display 
    event.preventDefault();

    DisplayNavBar(event);
    if(DisplayNavBar(event)){
        hideNavBar(event);
    }

});


// Define a function named DisplayNavBar that takes an event object as a parameter
function DisplayNavBar(event){
    // preventing the display 
    event.preventDefault();

    // set the display of the navhBar element to 'block' , making navigation bar visible
    navbar.style.display = 'block';
}

function hideNavBar(event){
    event.preventDefault();

    // set the display of the navhBar element to 'none' , making navigation bar hide
    navbar.style.display = 'none';
}