let libros = obtenerLibros();

document.addEventListener(
  "DOMContentLoaded",
  () => {

    mostrarLibros(libros);

    iniciarNubes();
  }
);
document
  .getElementById("agregar")
  .addEventListener("click", () => {

    const input =
      document.getElementById("titulo");

    if (input.value.trim() === "") {

      mostrarMensaje(
        "Escribe algo "
      );

      return;
    }

    libros.push(input.value);

    guardarLibros(libros);

    mostrarLibros(libros);

    input.value = "";

    mostrarMensaje(
      "Libro agregado "
    );
  });


document
  .getElementById("lista")
  .addEventListener("click", (e) => {

   
    if (
      e.target.classList.contains(
        "delete"
      )
    ) {

      const id =
        e.target.getAttribute(
          "data-id"
        );

      libros.splice(id, 1);

      guardarLibros(libros);

      mostrarLibros(libros);

      mostrarMensaje(
        "Libro eliminado ❌"
      );
    }

    if (
      e.target.classList.contains(
        "edit"
      )
    ) {

      const id =
        e.target.getAttribute(
          "data-id"
        );

      const nuevo = prompt(
        "Editar libro:",
        libros[id]
      );

      if (
        nuevo !== null &&
        nuevo.trim() !== ""
      ) {

        libros[id] = nuevo;

        guardarLibros(libros);

        mostrarLibros(libros);

        mostrarMensaje(
          "Libro editado "
        );
      }
    }
  });


document
  .getElementById("buscar")
  .addEventListener(
    "click",
    async () => {

      const input =
        document.getElementById(
          "titulo"
        );

      if (
        input.value.trim() === ""
      ) {

        mostrarMensaje(
          "Escribe algo "
        );

        return;
      }

      const resultados =
        document.getElementById(
          "resultados"
        );

      resultados.innerHTML =
        "<li>Buscando... </li>";

      const librosAPI =
        await buscarLibrosAPI(
          input.value
        );

      mostrarResultados(
        librosAPI,
        libros
      );
    }
  );
