"use strict";

(function () {
  // types to insert in HTML when option changes
  const DVD = `<div class="type mb-3 p-3 ">
  <label for="size" class="form-label">Size(MB)</label>
  <input type="text" name="size" class="form-control description" id="size" placeholder="Please provide size" required>
  <div class="invalid-feedback">“Please, submit required data”</div>
  <div class="feedback" style="color: var(--bs-warning);font-size: 0.875em;font-family: 'Roboto', sans-serif; font-weight: 300;"></div>
  </div>`;

  const FURNITURE = `<div class="type mb-3 p-3">
  <label for="height" class="form-label">Height(CM)</label>
  <input type="text" name="height" class="form-control description" id="height" placeholder="Please, provide Height" required>
  <div class="invalid-feedback">“Please, submit required data”</div>
</div>
<div class="type mb-3 p-3">
  <label for="width" class="form-label">Width(CM)</label>
  <input type="text" name="width" class="form-control description" id="width" placeholder="Please, provide width" required>
  <div class="invalid-feedback">“Please, submit required data”</div>
</div>
<div class="type mb-3 p-3">
  <label for="length" class="form-label">Length(CM)</label>
  <input type="text" name="length" class="form-control description" id="length" placeholder="Please, provide Length" required>
  <div class="invalid-feedback">“Please, submit required data”</div>
  <div class="feedback" style="color: var(--bs-warning);font-size: 0.875em;font-family: 'Roboto', sans-serif; font-weight: 300;"></div>
</div>`;

  const BOOK = `<div class="type mb-3 p-3">
  <label for="weight" class="form-label">Weight(KG)</label>
  <input type="text" name="weight" class="form-control description" id="weight" placeholder="Please, provide weight" required>
  <div class="invalid-feedback">“Please, submit required data”</div>
  <div class="feedback" style="color: var(--bs-warning);font-size: 0.875em;font-family: 'Roboto', sans-serif; font-weight: 300;"></div>
</div>`;
  //

  const typeSwitcher = document.getElementById("type-switcher");
  const typeInsert = document.getElementById("type-insert");

  typeSwitcher.addEventListener("change", function () {
    //option selection
    const type = typeSwitcher.value;
    //select elements, so when case "" deletes all existed elements from type-switcher
    const types = document.querySelectorAll(".type");
    let description = ""; //text for description

    switch (type) {
      case "":
        deleteTypes(types);
        break;
      case "DVD":
        typeInsert.innerHTML = DVD; //insert new element
        description = '"Please, provide size"';
        addDescription(description); // adding dynamical description
        break;
      case "BOOK":
        typeInsert.innerHTML = BOOK; //insert new element
        description = '"Please, provide weight"';
        addDescription(description); // adding dynamical description
        break;
      case "FURNITURE":
        typeInsert.innerHTML = FURNITURE; //insert new element
        description = '"Please, provide dimensions"';
        addDescription(description); // adding dynamical description
        break;
    }
  });
})();

// delete function for type-switching
const deleteTypes = function (types) {
  for (const [key, value] of Object.entries(types)) value.remove();
};

// to add dynamical description (on focus and blur)
const addDescription = function (description) {
  // 1. we need divs of new elements and feedback div to write description
  const inputFields = document.querySelectorAll(".description");
  const descriptionFields = document.getElementsByClassName("feedback")[2];

  // 2. focus event add desrciption
  for (const [key, value] of Object.entries(inputFields)) {
    value.addEventListener("focus", function () {
      descriptionFields.textContent = description;
    });
  }

  //3. delete descriptions on blur
  for (const [key, value] of Object.entries(inputFields)) {
    value.addEventListener("blur", function () {
      descriptionFields.textContent = "";
    });
  }
};
