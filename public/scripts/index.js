
// Array of hardcoded user comments
var userComments = [
  "I love this website! It's so informative.",
  "The content here is fantastic. Keep up the great work.",
  "I'm a regular visitor to this site, and I'm always impressed.",
  "Great website! Love the content.",
  "This site is so informative and helpful.",
  "I visit this website every day. It's my favorite!",
  "The design of this website is fantastic.",
  "Keep up the excellent work!"
];

// Function to display a random comment
function displayRandomComment() {
  var randomIndex = Math.floor(Math.random() * userComments.length);
  var userCommentContainer = document.getElementById("user-comments");
  userCommentContainer.innerHTML = userComments[randomIndex];


}

// Change the comments every 10 seconds (adjust as needed)
setInterval(displayRandomComment, 1000);

// Display random comments when the page loads
displayRandomComment();

// Toggling Read More Options


$(document).ready(function () {
  $(".read-more a").click(function (e) {
    e.preventDefault();
    $(this).closest(".card-text").toggleClass("expanded");
  });
});


// suggestion form
function validateForm() {
  var name = document.getElementById("inputtext").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var genderInputs = document.getElementsByName("inlineRadioOptions");
  var selectedGender = null;

  // Loop through radio buttons to find the selected one
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      selectedGender = genderInputs[i].value;
      break;
    }
  }

  // Check if a gender is selected
  if (!selectedGender) {
    alert("Please select a gender");
    return false;
  }

  var country = document.getElementById("exampleDataList").value;
  var suggestion = document.getElementById("floatingTextarea").value;

  // Check if all other fields are filled
  if (name === "" || email === "" || country === "" || suggestion === "") {
    alert("Please fill in all fields");
    return false;
  }

  // Additional validation logic can be added if needed

  // Assuming your form has an 'action' attribute for the submission endpoint
  document.getElementById("contactForm").submit();

  // Uncomment the line below if you don't want to submit the form and just show a success message
  alert("Data sent successfully");
  
  // Prevent the default form submission
  return false;
}