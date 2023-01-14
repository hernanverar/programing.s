window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    // in this section we get the value for each form input
    const p1Input = document.getElementById("p1").value;
    const p2Input = document.getElementById("p2").value;

    document.querySelector("span#p1").innerText = p1;
    document.querySelector("span#p1").innerText = p2;



  event.preventDefault();
  console.log
  };r
};