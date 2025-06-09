function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
