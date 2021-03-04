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
    // .then(function(){
    //   window.location.replace("http://localhost/SCANDIWEB_muko/SCANDIWEB/index.html");
    // })
    .catch(function (error) {
      console.error(error);
    });
});
