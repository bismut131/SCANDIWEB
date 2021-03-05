function getItemstoProductlist (data) {
    
    var allProducts= '';
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
      allProducts += product;
    }

    document.getElementsByClassName('product-list')[0].innerHTML = allProducts;
    addEventListenerToItems();
  }
