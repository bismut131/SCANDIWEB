
function addEventListenerToItems () {
    const itemCheckbox = document.querySelectorAll(".checkbox");
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
    console.log(itemCheckbox);
}