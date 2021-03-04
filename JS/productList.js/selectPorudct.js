const sku = new Array();

window.setTimeout(() => {
    const itemCheckbox = document.querySelectorAll(".checkbox");
    const deleteButton = document.querySelector(".btn-danger")
    console.log(itemCheckbox,deleteButton);

    for(const item of itemCheckbox){
        item.addEventListener('change',(event) => {
            const itemSku = event.target.nextSibling.nextSibling.textContent;
            if(event.target.checked == true){
                sku.push(itemSku);
                console.log(sku);
            } else {
                sku.splice(sku.indexOf(itemSku),1);
                console.log(sku);
            }
        })
    }

    deleteButton.addEventListener('click', () => {

        fetch("PHP/deleteItem.php", {
            method: "post",
            mode: "same-origin",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(sku),
        })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            console.log(text);
        })
        .catch(function (error) {
            console.error(error);
        });
    })
},300)



