function obtenerLibros() {

  return JSON.parse(
    localStorage.getItem("libros")
  ) || [];
}

function guardarLibros(libros) {

  localStorage.setItem(
    "libros",
    JSON.stringify(libros)
  );
}
