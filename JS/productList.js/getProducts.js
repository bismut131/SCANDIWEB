async function postData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("http://localhost/SCANDIWEB_muko/SCANDIWEB//PHP/fetch_items.php").then((data) => {
  // JSON data parsed by `data.json()` call

  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "DVD") {
      var infoProduct = data[i].size;
      infoProduct += "MB";
    } else if (data[i].type === "BOOK") {
      var infoProduct = data[i].weight;
      infoProduct += "KG";
    } else if (data[i].type === "FURNITURE") {
      var infoProduct = data[i].dimension;
    }
    
    const product = `<article class="product">
    <input type="checkbox" class="checkbox" />
    <p class="sku">${data[i].sku}</p>
    <p class="name">${data[i].name}</p>
    <p class="price">${data[i].price}$</p>
    <p class="attribute">${infoProduct}</p>
    </article>`;
    const productList = document.querySelector(".product-list");
    productList.innerHTML += product;
  }
});
