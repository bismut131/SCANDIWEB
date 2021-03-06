const sku = new Array();

const deleteButton = document.querySelector(".btn-danger");

deleteButton.addEventListener("click", () => {
  if (sku.length === 0) {
    alert("select at least on item");
    return false;
  }

  fetch("PHP/deleteItem.php", {
    method: "POST",
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sku),
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      getItemstoProductlist(data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
