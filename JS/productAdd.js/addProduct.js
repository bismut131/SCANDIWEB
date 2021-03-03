const addItemForm = document.querySelector(".itemData");

addItemForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const sendFormData = new FormData(this);
  
  fetch("PHP/addItem.php", {
    method: "post",
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
