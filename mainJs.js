function submi() {
          if (document.getElementById("email").value) {
            document.getElementById("thanks").innerHTML = "&#10003;thanks";
           // Submit the form
        } else {
            document.getElementById("noThanks").innerHTML=""
        }
    
}

