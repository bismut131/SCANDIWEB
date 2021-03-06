"use strict";

const sku = document.querySelector("#sku");
const name = document.querySelector("#Name");
const price = document.querySelector("#price");
const type = document.querySelector("#type-switcher");

(function () {
  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    function (event) {
      getProductsFromBase().then(function (data) {
        event.preventDefault();

        if (
          !skuValidation() ||
          !priceValidation() ||
          !typeProductsValidation() ||
          !skuExists(data) ||
          !form.checkValidity()
        ) {
          console.log(
            skuValidation(),
            priceValidation(),
            typeProductsValidation(),
            skuExists(data),
            form.checkValidity()
          );
          form.classList.add("was-validated");
          return false;
        }

        window.location.replace(host + "/index.html");
      });
    },
    true
  );
})();

function skuExists(data) {
  for (const item of data) {
    if (sku.value === item["sku"]) {
      const feedback = document.querySelector(".feedback");
      feedback.textContent = '"SKU alrady exists in Productlist"';
      return false;
    }
  }
  return true;
}

function skuValidation() {
  if (sku.value.length > 9) {
    const feedback = document.querySelector(".feedback");
    feedback.textContent = '"SKU must be less than 9 charachters!"';
    return false;
  } else {
    const feedback = document.querySelector(".feedback");
    feedback.textContent = "";
    return true;
  }
}

// function namePriceTypeValidation() {
//   console.log(name, price, type);
//   if (
//     sku.value.length === 0 ||
//     name.value.length === 0 ||
//     price.value.length === 0 ||
//     type.value === ""
//   )
//     return false;
// }

function priceValidation() {
  if (parseFloat(price.value) < 0 || isNaN(price.value)) {
    const feedback = document.getElementsByClassName("feedback")[1];
    feedback.textContent = '"Please, provide the data of indicated type"';
    return false;
  } else {
    const feedback = document.getElementsByClassName("feedback")[1];
    feedback.textContent = "";
    return true;
  }
}

function typeProductsValidation() {
  if (type.value === "DVD") {
    const size = document.querySelector("#size");
    if (
      size.value.length === 0 ||
      parseFloat(size.value) < 0 ||
      isNaN(size.value)
    ) {
      const feedback = document.getElementsByClassName("feedback")[2];
      feedback.textContent = '"Please, provide the data of indicated type"';
      return false;
    } else return true;
  } else if (type.value === "BOOK") {
    const weight = document.querySelector("#weight");
    if (
      weight.value.length === 0 ||
      parseFloat(weight.value) < 0 ||
      isNaN(weight.value)
    ) {
      const feedback = document.getElementsByClassName("feedback")[2];
      feedback.textContent = '"Please, provide the data of indicated type"';
      return false;
    } else return true;
  } else if (type.value === "FURNITURE") {
    const height = document.querySelector("#height");
    const width = document.querySelector("#width");
    const length = document.querySelector("#length");

    if (
      height.value.length === 0 ||
      parseFloat(height.value) < 0 ||
      isNaN(height.value) ||
      width.value.length === 0 ||
      parseFloat(width.value) < 0 ||
      isNaN(width.value) ||
      length.value.length === 0 ||
      parseFloat(length.value) < 0 ||
      isNaN(length.value)
    ) {
      const feedback = document.getElementsByClassName("feedback")[2];
      feedback.textContent = '"Please, provide the data of indicated type"';
      return false;
    } else return true;
  }
}
