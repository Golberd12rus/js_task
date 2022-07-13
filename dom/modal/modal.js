const openBtn = document.getElementById('openOverlay');
const body = document.body;

openBtn.addEventListener("click", e  => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  modalContent.innerHTML = "Hello World!";

  const modalClose = document.createElement("a");
  modalClose.classList.add("modal-close");
  modalClose.textContent = "x";
  modalClose.href = "#";

  modalClose.addEventListener("click", e =>{
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  overlayElement.addEventListener("click", e =>{
    if (!e.target.classList.contains("modal-content")){
      body.removeChild(overlayElement);
    }
  });

  overlayElement.appendChild(modalContainer);
  modalContainer.appendChild(modalClose);
  modalContainer.appendChild(modalContent);
  body.appendChild(overlayElement);
});