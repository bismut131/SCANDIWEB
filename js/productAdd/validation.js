(function () {
  "use strict";

  //does nothing yet.

  //here correct the bug to got the list page with save button if checkvalidity then go to list

  // Fetch the form we want to apply custom Bootstrap validation styles to
  const form = document.querySelector(".needs-validation");
 
  form.addEventListener(
    "submit",
    function (event) {
      if (!checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        console.log("mukomuko");
      }

      form.classList.add("was-validated");
    },
    true
  );
})();



function checkValidity () {
  const sku = document.querySelector("#sku");
  const name = document.querySelector("#Name");
  const price = document.querySelector("#price");
  console.log(sku,name,price);
};

// sku not more than 9 chars and not empty ; onyl alphabet and numbers
// name only alphabet and numbers
// price only number+

//size only number' 
//weight only number 
//height widht length only number