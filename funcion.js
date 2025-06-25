function mostrarImagen(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function cerrarImagen() {
  document.getElementById("lightbox").style.display = "none";
}
