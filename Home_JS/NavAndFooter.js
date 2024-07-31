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

//---------------for content links------------------------------------------------------------------


// retrieve the HTML element with the ID "back" and store it in the variable backbtn
let backbtn = document.getElementById("back");
// retrieve the HTML element with the ID "next" and store it in the variable nextbtn
let nextbtn = document.getElementById("next");
// select the first element with the class "content-links" and assign it to the variable scroll.
let scroll = document.querySelector(".content-links")

// add an event listener to the nextbtn for the 'click' event
nextbtn.addEventListener('click', function(){
    // set the scroll behavior of the scroll element to 'smooth' to enable smooth scrolling.
    scroll.style.scrollBehavior = 'smooth';
    // Increment the scrollLeft property of the scroll element by 900 pixels to scroll to the right.
    scroll.scrollLeft += 900;
});

// add an event listener to the nextbtn for the 'click' event
backbtn.addEventListener('click', () =>{
    // Set the scroll behavior of the scroll element to 'smooth' to enable smooth scrolling.
    scroll.style.scrollBehavior = 'smooth';
    // Decrement the scrollLeft property of the scroll element by 900 pixels to scroll to the left.
    scroll.scrollLeft -= 900;
});