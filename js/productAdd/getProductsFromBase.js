//for validation
async function getProductsFromBase() {
  const url = host + "PHP/fetchItems.php";
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

const ProductlistItems = getProductsFromBase();
