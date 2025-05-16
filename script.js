/* --- Sidebar --- */

function openNav() {
  document.getElementById("mySidebar").style.width = "390px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

/* --- Cart count --- */

let count = 0;
function myFunction() {
  count+=1;
  document.getElementById("clicks").innerHTML = count;

 }

/* --- Newsletter form --- */

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("newsForm");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
   
    const name = document.getElementById("formFirstname").value;
    const email = document.getElementById("formEmail").value;
    
    if (name && email) {
      submitBtn.textContent = "sending";
      submitBtn.disabled = "true";
      setTimeout(() =>  {
        submitBtn.setAttribute("style", "display:none;");
      }, 2000);
      alert("Thank you for your subscription");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});