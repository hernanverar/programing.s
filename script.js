// User Interface Logic
window.onload = function() {
    let h1 = document.querySelector("h1");
    h1.onmouseover = function() {
    ;
  
    let p = document.querySelector("p");
    p.onmouseover = function() {
    document.querySelector("p>em").innerText = "hello";
    };
  
    document.querySelector("form").onsubmit = function(event) {
        hideResults();
        event.preventDefault();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);
    
        if (age >= 12 && height >= 60) {
          document.getElementById("swings").removeAttribute("class");
          document.getElementById("coaster").removeAttribute("class");
          document.getElementById("tower").removeAttribute("class");
        } else if (age >= 12 || height >= 48) {
          document.getElementById("swings").removeAttribute("class");
          document.getElementById("coaster").removeAttribute("class");
          // Next, we're evaluating the Swings ride.
        } else if (age >= 6) {
          document.getElementById("swings").removeAttribute("class");
          // Finally, we have our "catch-all" for when a user is less than 6 years old.
        } else {
          document.getElementById("sorry").removeAttribute("class");
        }
      };