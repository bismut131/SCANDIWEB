"use strict";
(function () {
  const sku = document.querySelector("#sku");

  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    function (event) {
      if (
        // getProductsFromBase().then(function (data) {
        //   for (const item of data) {
        //     console.log(sku.value, item["sku"]);
        //     if (sku.value === item["sku"]) {
        //       console.log("YES");
        //       return true;
        //     }
        //   }
        // }) ||
        !checkValidity()
      ) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
        console.log("MARI");
      } else {
        window.location.replace(host + "/index.html");
      }
    },
    true
  );
})();

console.log(
  getProductsFromBase().then(function (data) {
    for (const item of data) {
      if (sku.value === item["sku"]) {
        console.log("YES");
      }
    }
    return Promise["PromiseResult"];
  })
);

function checkValidity() {
  const name = document.querySelector("#Name");
  const price = document.querySelector("#price");
  const type = document.querySelector("#type-switcher");

  if (sku.value.length > 9) {
    const feedback = document.querySelector(".feedback");
    feedback.textContent = "SKU must be less than 9 charachters!";
    return false;
  }

  if (
    sku.value.length === 0 ||
    name.value.length === 0 ||
    price.value.length === 0 ||
    type.value === ""
  )
    return false;

  if (type.value === "DVD") {
    const size = document.querySelector("#size");
    if (size.value.length === 0) return false;
  } else if (type.value === "BOOK") {
    const weight = document.querySelector("#weight");
    if (weight.value.length === 0) return false;
  } else if (type.value === "FURNITURE") {
    const height = document.querySelector("#height");
    const width = document.querySelector("#width");
    const length = document.querySelector("#length");

    if (
      height.value.length === 0 ||
      width.value.length === 0 ||
      length.value.length === 0
    )
      return false;
  }

  return true;
}
