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
        form.classList.add("was-validated");
      } else {
        window.location.replace(host + "/index.html");
      }
    },
    true
  );
})();



function checkValidity () {
  const sku = document.querySelector("#sku");
  const name = document.querySelector("#Name");
  const price = document.querySelector("#price");
  const type = document.querySelector('#type-switcher');

  //explicitly for showing allert 
  if(sku.value.length > 9) {
    const feedback = document.querySelector(".feedback"); 
    feedback.textContent = "SKU must be less than 9 charachters!";
    return false;
  }

  if(  sku.value.length === 0 
    || name.value.length === 0 
    || price.value.length === 0) return false;

  if(type.value === "DVD") {
    const size = document.querySelector("#size");
    if(size.value.length === 0) return false;
  }
  else if (type.value === "BOOK") {
    const weight = document.querySelector("#weight");
    if(weight.value.length === 0) return false;
  }
  else if (type.value === "FURNITURE") {
    const height = document.querySelector('#height');
    const width = document.querySelector('#width');
    const length = document.querySelector('#length');

    if(height.value.length === 0 || width.value.length === 0 || length.value.length === 0) return false;
  }

  return true;
};
