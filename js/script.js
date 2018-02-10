//Check if location is index.html, if so, execute this piece of code :)
$(document).ready(function () {
    if(window.location.href.indexOf("index") > -1) {
       // JS code to fire saveValue function by pressing enter on keyboard
       document.getElementById("inputField").addEventListener("keyup", function(event) {
           event.preventDefault();
           if (event.keyCode === 13) {
               document.getElementById("goButton").click();
           }
       });

    }
});

//Check if location is search.html, if so, execute retrieveValue function
$(document).ready(function () {
  if(window.location.href.indexOf("search") > -1) {
    retrieveValue();
  }
});

    // Object that stores everything related to what a user enters
    var userProfile = {
      name: "none",
      problem: "none",
      q1: true,
      q2: true,
      q3: true
    };

		// Variable that will store the problem that a user shares via the input field
		var myValue;

		// This function dumps problem value in console, pushes it into variable, and stores it in local storage.
		function saveValue(){
			$('input[type=text]').each(function(){
				// Output the form's values to the browser console.
				console.log(this.value);
				// Push content of input field into object userProfile.
				myValue = this.value;
				// Store values into local storage.
				localStorage.myValue = myValue;
			});
		}

    // Function to retrieve what user typed into inputField and display it on page
		function retrieveValue(){
				// Retrieve value from local storage
				var myStoredValue = localStorage.getItem('myValue');
        // Log whatever is retrieved to console
				console.log('locally stored value: ' + myStoredValue);
        userProfile.problem = myStoredValue;
        console.log('Succesfully added problem to userProfile ' + userProfile.problem);
				// Function to display content of myStoredValue on page
				function showTheProblem() {
    			var newP = document.createElement('p');
    			newP.appendChild(document.createTextNode('Thanks for sharing: '));
          newP.appendChild(document.createElement("br"));
          newP.appendChild(document.createTextNode(myStoredValue));
          document.getElementById("problemDisplay").appendChild(newP);
				};
        //Call function to show problem on the page
				showTheProblem();

		}


// jQuery code to allow toggle between yes / no buttons and store boolean in object
jQuery(function ($) {
    $('#Q1yes').click(function () {
        $(this).toggleClass('clickedYes')
        $('#Q1no').removeClass('clickedNo')
        userProfile.q1 = true;
        console.log('Q1 set to ' + userProfile.q1)
    })
    $('#Q1no').click(function () {
        $(this).toggleClass('clickedNo')
        $('#Q1yes').removeClass('clickedYes')
        userProfile.q1 = false;
        console.log('Q1 set to ' + userProfile.q1)
    })
    $('#Q2yes').click(function () {
        $(this).toggleClass('clickedYes')
        $('#Q2no').removeClass('clickedNo')
        userProfile.q2 = true;
        console.log('Q2 set to ' + userProfile.q2)
    })
    $('#Q2no').click(function () {
        $(this).toggleClass('clickedNo')
        $('#Q2yes').removeClass('clickedYes')
        userProfile.q2 = false;
        console.log('Q2 set to ' + userProfile.q2)
    })
    $('#Q3yes').click(function () {
        $(this).toggleClass('clickedYes')
        $('#Q3no').removeClass('clickedNo')
        userProfile.q3 = true;
        console.log('Q3 set to ' + userProfile.q3)
    })
    $('#Q3no').click(function () {
        $(this).toggleClass('clickedNo')
        $('#Q3yes').removeClass('clickedYes')
        userProfile.q3 = false;
        console.log('Q3 set to ' + userProfile.q3)
    })
})
