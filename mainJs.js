function submi() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(email)) {
            document.getElementById("thanks").innerHTML = "&#10003;thanks";
           // Submit the form
        } else {
            document.getElementById("noThanks").innerHTML=""
        }
    
}

