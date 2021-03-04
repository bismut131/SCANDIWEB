(function () {
  "use strict";

  //does nothing yet.

  //here correct the bug to got the list page with save button if checkvalidity then go to list

  // Fetch the form we want to apply custom Bootstrap validation styles to
  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    true
  );
})();



// function checkValidity () {
//     const sku = 
// }

// sku not more than 9 chars and not empty ; onyl alphabet and numbers
// name only alphabet and numbers
// price only number+

//size only number' 
//weight only number 
//height widht length only number