const addItemForm = document.querySelector(".itemData");

addItemForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    !skuValidation() ||
    !priceValidation() ||
    !typeProductsValidation() ||
    !addItemForm.checkValidity()
  ) {
    console.log("YES");
    return false;
  }

  const sendFormData = new FormData(this);

  fetch("PHP/addItem.php", {
    method: "POST",
    body: sendFormData,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      alert(text);
    })
    .catch(function (error) {
      console.error(error);
    });
});
