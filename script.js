document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
  
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
  
    
    var registrationDetails = document.createElement("div");
    registrationDetails.className = "registration-item";
    registrationDetails.innerHTML =
      "<h3>Registration Details:</h3>" +
      "<p><strong>Full Name:</strong> " + fullName + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
      "<p><strong>Date of Birth:</strong> " + birthdate + "</p>" +
      "<p><strong>Gender:</strong> " + gender + "</p>" +
      "<p><strong>Address:</strong> " + address + "</p>";
  
    
    var detailsContainer = document.getElementById("registrationDetails");
    detailsContainer.appendChild(registrationDetails);
  
    
    document.getElementById("registrationForm").reset();
  });
  
  
  document.getElementById("registrationDetails").addEventListener("click", function(event) {
    var target = event.target;
    if (target.classList.contains("registration-item")) {
      target.remove();
    }
  });
  