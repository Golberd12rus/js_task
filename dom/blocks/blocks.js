const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");
let isChange = false;


quantitySelector.addEventListener("change", (e) => {
  const quantity = e.target.value;
  let markup = "";

  for(i=0; i<quantity; i++){
    const block = document.createElement("div");
    block.className = "item";
    block.innerHTML = i + 1;
    markup += block.outerHTML;
  }

  blocksContainer.innerHTML = markup;
});



colorSelector.addEventListener("change", e =>{
  isChange = !isChange;
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  for (i=0; i<items.length; i++){
    if (isChange) {
      if (i % 2 != 0) {
        items[i].style.background = color;
    } else {
        items[i].style.background = "#fff";
    }
    } else {
      if (i % 2 == 0) {
        items[i].style.background = color;
    } else {
        items[i].style.background = "#fff";
    }
    
  }
  }
})

