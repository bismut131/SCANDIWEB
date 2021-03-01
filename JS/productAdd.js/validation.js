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

// SKU NAME and other fields should contain just alphabet

//price should onyl contain numbers and type switcher tabs

//on submit check all the fields
// so need eventlistener for submit
