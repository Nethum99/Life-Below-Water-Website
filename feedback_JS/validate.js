// Retrieve the HTML element with the ID "nameError" and store it in the constant nameError.
const nameError = document.getElementById("nameError");
// Retrieve the HTML element with the ID "emailError" and store it in the constant emailError.
const emailError = document.getElementById("emailError");
// Retrieve the HTML element with the ID "yesbtn2" and store it in the constant yesbtn2.
const yesbtn2 = document.getElementById("yesbtn2");
// Retrieve the HTML element with the ID "nobtn2" and store it in the constant nobtn2.
const nobtn2 = document.getElementById("nobtn2");
// Retrieve the HTML element with the ID "suggestions" and store it in the constant suggestions.
const suggestions = document.getElementById("suggestions");
// Retrieve the HTML element with the ID "dropdown" and store it in the constant dropdown.
const dropdown = document.getElementById("dropdown");
// Retrieve the HTML element with the ID "popup" and store it in the variable popup.
let popup = document.getElementById("popup");


//  get the element with the ID "mySubmit" and add an event listener for the 'click' event.
document.getElementById("mySubmit").addEventListener("click", function(event){
    // preventing the form submission
    event.preventDefault();

    DisplayErrorMessage(event);
    if(DisplayErrorMessage(event)){

        redirect(event);
    }


});

// Define a function named DisplayErrorMessage that takes an event object as a parameter.
function DisplayErrorMessage(event){ 
    // preventing the form submission
    event.preventDefault();

    // Retrieve the HTML element with the ID "name" and store it in the constant nameInput.
    const nameInput = document.getElementById("name").value;
    // Retrieve the HTML element with the ID "email" and store it in the constant emailInput.
    const emailInput = document.getElementById("email").value;
    // Retrieve the HTML element with the ID "radio1BtnError" and store it in the constant radio1BtnError.
    const radio1BtnError = document.getElementById("radio1BtnError");
    // Retrieve the HTML element with the ID "commentError" and store it in the constant commentError.
    const commentError = document.getElementById("commentError");
    // Retrieve the HTML element with the ID "selectError" and store it in the constant selectError.
    const selectError = document.getElementById("selectError");

 
    // this for name validation
    if(nameInput === "" || nameInput == null){
        nameError.textContent = '*Name is required';
        nameError.style.borderColor = "red";        
    }
    // this code got from https://www.w3schools.com/
    else if(!nameInput.match(/^[A-Za-z\s]+$/)){
        nameError.textContent = '*Please only use letters'
    }
    else{
        nameError.textContent = '';
    }

    // this for emial validation
    if(emailInput === "" || emailInput == null){
        emailError.textContent = '*Email required';
    }
    // this code got from https://www.w3schools.com/
    else if(!emailInput.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = '*Please enter a valid email.';
    }
    else{
        emailError.textContent = '';
    }



    // this for radio button validation
    if(yesbtn2.checked || nobtn2.checked){
        radio1BtnError.textContent = '';
        if(nobtn2.checked){
            commentError.textContent = '*Please provide some suggestions';
        }
        else{
            commentError.textContent = '';
        }
    }

    else{
        radio1BtnError.textContent = '*Please select one';
    }

    
    // Retrieve the value of the currently selected option from the dropdown menu.
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    // this for dropbox validation
    if(selectedOption === ''){
        selectError.textContent = '*Please select an option';
    }
    else{
        selectError.textContent = '';
        return true;
    }

}


// Define a function named redirect that takes an event object as a parameter.
function redirect(event){
    //  preventing the form submission
    event.preventDefault();
    // set the display of the popup element to 'block' , making search bar visible
    popup.style.display = 'block';

}

//  get the element with the ID "colseBtn" and add an event listener for the 'click' event.
document.getElementById("colseBtn").addEventListener('click', closePopup);

// Define a function named closePopup that takes an event object as a parameter.
function closePopup(){
    // set the display of the popup element to 'none' , making search bar hide
    popup.style.display = 'none';

    // set location to redirect home
    window.location = 'home.html';

}



// preview ---------------------------------------------------------------------------------------------------------------------------------------

//  get the element with the ID "preview" and add an event listener for the 'click' event.
document.getElementById("preview").addEventListener("click", function(event) {
    // preventing display
    event.preventDefault();

    // Retrieve the HTML element with the ID "name" and store it in the variable name.
    var name = document.getElementById("name").value;
    // Retrieve the HTML element with the ID "email" and store it in the variable email.
    var email = document.getElementById("email").value;
    // Retrieve the HTML element with the ID "suggestions" and store it in the variable suggestions.
    var suggestions = document.getElementById("suggestions").value;
    // Select the first input element with the attribute name equal to "selection1" that is currently checked, and assign it to the variable visit.
    var visit = document.querySelector('input[name="selection1"]:checked');
    // Select the first input element with the attribute name equal to "selection2" that is currently checked, and assign it to the variable navigate.
    var navigate = document.querySelector('input[name="selection2"]:checked');
    // Select the first input element with the attribute name equal to "radioSelect" that is currently checked, and assign it to the variable rating.
    var rating = document.querySelector('input[name="radioSelect"]:checked');
    // Select the first input element with the attribute name equal to "selection3" that is currently checked, and assign it to the variable recomend.
    var recomend = document.querySelector('input[name="selection3"]:checked');
    // Retrieve the value of the currently selected option from the dropdown menu.
    var viaOptions = dropdown.options[dropdown.selectedIndex].value;
  
    // Retrieve the HTML element with the ID "previewContent" and store it in the variable previewContent.
    var previewContent = document.getElementById("previewContent");

    
    previewContent.innerHTML = `<h2>Feedback Preview</h2>`;
    previewContent.innerHTML += `<p><strong>Full Name: </strong>` + name + (name ? "" : "Name is required")+ `</p>` ;
    previewContent.innerHTML += "<p><strong>Email: </strong> " + email + (email ? "" : "Email is required")+ "</p>";
    previewContent.innerHTML += "<p><strong>This is first time visiting? </strong> " + (visit ? visit.value : "Not provided") + "</p>";
    previewContent.innerHTML += "<p><strong>Was this website informative and easy to navigate through? </strong> " + (navigate ? navigate.value : "Not provided") + "</p>";
    previewContent.innerHTML += `<p><strong>*if "No", suggest any improvements for the future: </strong>` + suggestions + (suggestions ? "" : "Not provided")+ `</p>` ;
    previewContent.innerHTML += "<p><strong>How satisfied are you with our service? </strong> " + (rating ? rating.value : "Not provided") + "</p>";
    previewContent.innerHTML += "<p><strong>Would you recommend our service? </strong> " + (recomend ? recomend.value : "Not provided") + "</p>";
    previewContent.innerHTML += "<p><strong>You like to recieved update about the website and any offers: </strong> "+(viaOptions ? viaOptions : "not provided") + "</p>";

});
