const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const yesbtn2 = document.getElementById("yesbtn2");
const nobtn2 = document.getElementById("nobtn2");
const suggestions = document.getElementById("suggestions");
const dropdown = document.getElementById("dropdown");
let popup = document.getElementById("popup");


document.getElementById("mySubmit").addEventListener("click", function(event){
    event.preventDefault();

    DisplayErrorMessage(event);
    if(DisplayErrorMessage(event)){

        redirect(event);
    }


});


function DisplayErrorMessage(event){
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const radio1BtnError = document.getElementById("radio1BtnError");
    const commentError = document.getElementById("commentError");
    const selectError = document.getElementById("selectError");

 

    if(nameInput === "" || nameInput == null){
        nameError.textContent = '*Name is required';
        nameError.style.borderColor = "red";        
    }
    else{
        nameError.textContent = '';
    }
// this for emial validation

    if(emailInput === "" || emailInput == null){
        emailError.textContent = '*Email required';
    }
    else if(!emailInput.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = '*Please enter a valid email.';
        // return true;
    }
    else{
        emailError.textContent = '';
        // return true;
        
    }



// this for radio 2
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

    // -----------------------------------------

    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    if(selectedOption === ''){
        selectError.textContent = '*Please select an option';
    }
    else{
        selectError.textContent = '';
        return true;
    }

}



function redirect(event){
    event.preventDefault();

    popup.style.display = 'block';

}
document.getElementById("colseBtn").addEventListener('click', closePopup);

function closePopup(){
    popup.style.display = 'none';

    window.location = '';

}



// preview ---------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("preview").addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var visit = document.querySelector('input[name="selection1"]:checked');
    var navigate = document.querySelector('input[name="selection2"]:checked');
    var suggestions = document.getElementById("suggestions").value;
    var rating = document.querySelector('input[name="radioSelect"]:checked');
    var recomend = document.querySelector('input[name="selection3"]:checked');
    var viaOptions = dropdown.options[dropdown.selectedIndex].value;
  
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
