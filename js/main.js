var elList = document.querySelector(".pokemon__list");
var elForm = document.querySelector(".pok__form");
var elModalList = document.querySelector(".modal-body");
var elImg = document.querySelector(".img");
var elModalFather = document.querySelector(".modal-header");
var modalType = document.createElement("li");
var modalInfo = document.createElement("p");
var modalHeight = document.createElement("p");
var modalTime = document.createElement("p");
var modalCandy = document.createElement("p");
var modalNum = document.createElement("p");
var elInput = document.querySelector(".form-input");
const fragment = new DocumentFragment();

elInput.addEventListener("keypress", function (evt) {
  let inputValue = evt.target.value.toLocaleLowerCase();
  let filterItem = pokemons.filter(function (item) {
    return item.name.toLocaleLowerCase().includes(inputValue);
  });

  elList.innerHTML = "";

  for (var pokemon of filterItem) {
    var newDiv = document.createElement("div");
    var newItem = document.createElement("li");
    var newTitle = document.createElement("h3");
    var newImg = document.createElement("img");
    var newInfo = document.createElement("p");
    var newMarquee = document.createElement("marquee");
    var newButton = document.createElement("button");
    var modalTitle = document.createElement("modal-title");

    // create
    newTitle.textContent = pokemon.name;
    newImg.textContent = pokemon.img;
    newInfo.textContent = pokemon.weaknesses;
    newButton.textContent = "More Info";
    // modal title create

    // Style Ctyle

    // style img
    newImg.src = pokemon.img;
    newImg.setAttribute("class", "card-img-top  alert-dark h-75");

    // style list
    elList.setAttribute("class", "list-unstyled d-flex flex-wrap");

    //newTitle style

    newTitle.setAttribute("class", " text-center text-white py-3 bg-dark");

    // style Item
    newItem.setAttribute("class", "card m-1 alert-info mb-4");
    newItem.dataset.LineId = pokemon.id;
    newItem.setAttribute("style", "width: 18.2rem");

    //newInfo style
    newInfo.setAttribute("class", "fw-3 fs-4 pb-3");

    //newButton style
    newButton.setAttribute("class", "btn btn-primary py-2");

    newButton.dataset.LineId = pokemon.id;

    newButton.setAttribute("data-bs-toggle", "modal");
    newButton.setAttribute("data-bs-target", "#exampleModal");

    // modal title style
    modalTitle.setAttribute("id", "exampleModalLabel");
    modalTitle.setAttribute("class", "text-start fs-4 fw-bold");

    // modal info style
    modalInfo.setAttribute(
      "class",
      "bg-warning fs-5 fw-bold text-danger py-2 px-3"
    );
    modalHeight.setAttribute(
      "class",
      "bg-warning fs-5 fw-bold text-danger py-2 px-3"
    );
    modalTime.setAttribute(
      "class",
      "bg-warning fs-5 fw-bold text-danger py-2 px-3"
    );
    modalCandy.setAttribute(
      "class",
      "bg-warning fs-5 fw-bold text-danger py-2 px-3"
    );
    modalNum.setAttribute(
      "class",
      "bg-warning fs-5 fw-bold text-danger py-2 px-3"
    );

    //newMarquee append
    newMarquee.appendChild(newInfo);

    elModalFather.appendChild(modalTitle);
    //append Div
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newMarquee);

    //  modal cild
    modalType.appendChild(modalCandy);
    modalType.appendChild(modalInfo);
    modalType.appendChild(modalHeight);
    modalType.appendChild(modalTime);
    modalType.appendChild(modalNum);
    elModalList.appendChild(modalType);
    // fragment append
    newItem.appendChild(newDiv);
    newItem.appendChild(newButton);
    fragment.appendChild(newItem);
  }

  elList.append(fragment);
});

for (var pokemon of pokemons) {
  var newDiv = document.createElement("div");
  var newItem = document.createElement("li");
  var newTitle = document.createElement("h3");
  var newImg = document.createElement("img");
  var newInfo = document.createElement("p");
  var newMarquee = document.createElement("marquee");
  var newButton = document.createElement("button");
  var modalTitle = document.createElement("modal-title");

  // create
  newTitle.textContent = pokemon.name;
  newImg.textContent = pokemon.img;
  newInfo.textContent = pokemon.weaknesses;
  newButton.textContent = "More Info";
  // modal title create

  // Style Ctyle

  // style img
  newImg.src = pokemon.img;
  newImg.setAttribute("class", "card-img-top  alert-dark h-75");

  // style list
  elList.setAttribute("class", "list-unstyled d-flex flex-wrap");

  //newTitle style

  newTitle.setAttribute("class", " text-center text-white py-3 bg-dark");

  // style Item
  newItem.setAttribute("class", "card m-1 alert-info mb-4");
  newItem.dataset.LineId = pokemon.id;
  newItem.setAttribute("style", "width: 18.2rem");

  //newInfo style
  newInfo.setAttribute("class", "fw-3 fs-4 pb-3");

  //newButton style
  newButton.setAttribute("class", "btn btn-primary py-2");

  newButton.dataset.LineId = pokemon.id;

  newButton.setAttribute("data-bs-toggle", "modal");
  newButton.setAttribute("data-bs-target", "#exampleModal");

  // modal title style
  modalTitle.setAttribute("id", "exampleModalLabel");
  modalTitle.setAttribute("class", "text-start fs-4 fw-bold");

  // modal info style
  modalInfo.setAttribute(
    "class",
    "bg-warning fs-5 fw-bold text-danger py-2 px-3"
  );
  modalHeight.setAttribute(
    "class",
    "bg-warning fs-5 fw-bold text-danger py-2 px-3"
  );
  modalTime.setAttribute(
    "class",
    "bg-warning fs-5 fw-bold text-danger py-2 px-3"
  );
  modalCandy.setAttribute(
    "class",
    "bg-warning fs-5 fw-bold text-danger py-2 px-3"
  );
  modalNum.setAttribute(
    "class",
    "bg-warning fs-5 fw-bold text-danger py-2 px-3"
  );

  //newMarquee append
  newMarquee.appendChild(newInfo);

  elModalFather.appendChild(modalTitle);
  //append Div
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newMarquee);

  //  modal cild
  modalType.appendChild(modalCandy);
  modalType.appendChild(modalInfo);
  modalType.appendChild(modalHeight);
  modalType.appendChild(modalTime);
  modalType.appendChild(modalNum);
  elModalList.appendChild(modalType);
  // fragment append
  newItem.appendChild(newDiv);
  newItem.appendChild(newButton);
  fragment.appendChild(newItem);
}

elList.append(fragment);

elList.addEventListener("click", function (evt) {
  const btnId = evt.target.matches(".btn-primary");
  if (btnId) {
    let itemId = evt.target.dataset.LineId;
    let itemModalId = pokemons.find((a) => a.id == itemId);

    modalTitle.textContent = itemModalId.name;
    modalCandy.textContent = `Candy: ${itemModalId.candy}`;
    modalInfo.textContent = `Type: ${itemModalId.type}`;
    modalHeight.textContent = `Height: ${itemModalId.height}`;
    modalTime.textContent = `Time: ${itemModalId.spawn_time}`;
    modalNum.textContent = `Num: ${itemModalId.num}`;
  }
});
