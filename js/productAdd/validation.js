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

  if(sku.value.length > 9 || sku.value.length === 0 
    || name.value.length === 0 
    || price.value.length === 0) return false;

  console.log(name.value.length,price.value.length,type.value.length);
 

  if(type.value === "DVD") {
    const size = document.querySelector("#size");
    console.log(size);
    console.log(size.value.length);
    if(size.value.length === 0) return false;
  }
  else if (type.value === "BOOK") {
    const weight = document.querySelector("#weight");
    console.log(weight);
    console.log(weight.value.length);
    if(weight.value.length === 0) return false;
  }
  else if (type.value === "FURNITURE") {
    const height = document.querySelector('#height');
    const width = document.querySelector('#width');
    const length = document.querySelector('#length');

    console.log(height.value.length,width.value.length,length.value.length);

    if(height.value.length === 0 || width.value.length === 0 || length.value.length === 0) return false;
  }

  return true;
};
