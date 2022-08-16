(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    dot_1: document.querySelector("[data-dot-1]"),
    dot_2: document.querySelector("[data-dot-2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.dot_1.addEventListener("click", toggleModal);
  refs.dot_2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
    refs.openModalBtn.classList.toggle("hidden");
    refs.dot_1.classList.toggle("active--dot");
    refs.dot_2.classList.toggle("active--dot");
  }
})();
