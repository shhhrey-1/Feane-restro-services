function activate(list, element) {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
  
  const filters = document.querySelector("#menu-buttons").querySelectorAll("span");

  
  filters.forEach((curr) => {
    curr.addEventListener("click", function () {
      activate(filters, this);
      selectItem(this.id);
    });
  });



const itemCards  = document.querySelector("#item-cards");


//
function reset() {
  const list1 = itemCards.querySelectorAll(".mar");
 
  list1.forEach((card) => {
    card.classList.remove("show");
  });
}
//
function selectItem(selectorID) {
  //
  reset();

  let list;
  if (selectorID === "all-b") {
    list = document.querySelectorAll(".all");
  }
  //
  else if (selectorID === "burger-b") {
    list = document.querySelectorAll(".Burger");
  }
  //
  else if (selectorID === "pizza-b") {
    list = document.querySelectorAll(".Pizza");
  }
  //
  else if (selectorID === "pasta-b") {
    list = document.querySelectorAll(".Pasta");
  }
  //
  else if (selectorID === "fries-b") {
    list = document.querySelectorAll(".fries");
  }
  //
  

  list.forEach((item) => {
    item.classList.add("show");
  });
}