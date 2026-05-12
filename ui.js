function mostrarLibros(libros) {

  const lista =
    document.getElementById("lista");

  lista.innerHTML = "";

  libros.forEach((libro, i) => {

    const li =
      document.createElement("li");

    li.innerHTML = `
      <div class="card">

        <div class="card-content">

          <span>${libro}</span>

          <div>

            <button
              class="edit"
              data-id="${i}"
            >
              ݁ ˖Ი𐑼⋆
            </button>

            <button
              class="delete"
              data-id="${i}"
            >
              .ᐟ.ᐟ
            </button>

          </div>

        </div>

      </div>
    `;

    lista.appendChild(li);
  });
}



function mostrarMensaje(texto) {

  const mensaje =
    document.getElementById("mensaje");

  mensaje.textContent = texto;

  setTimeout(() => {

    mensaje.textContent = "";

  }, 2000);
}



function mostrarResultados(resultadosAPI, libros) {

  const resultados =
    document.getElementById("resultados");

  resultados.innerHTML = "";

  if (resultadosAPI.length === 0) {

    resultados.innerHTML =
      "<li>No se encontraron libros</li>";

    return;
  }

  resultadosAPI.forEach((item) => {

    const titulo =
      item.volumeInfo?.title ||
      "Sin título";

    const li =
      document.createElement("li");

    li.innerHTML = `
      <span>${titulo}</span>

      <button class="agregar-api">
        💙
      </button>
    `;

    li.querySelector("button").onclick =
      () => {

        libros.push(titulo);

        guardarLibros(libros);

        mostrarLibros(libros);

        mostrarMensaje(
          "Libro agregado "
        );
      };

    resultados.appendChild(li);
  });
}


function iniciarNubes() {

  setInterval(() => {

    const nube =
      document.createElement("div");

    nube.classList.add("corazon");

    nube.innerText = "☁️";

    nube.style.left =
      Math.random() * 100 + "vw";

    nube.style.fontSize =
      Math.random() * 10 + 15 + "px";

    document.body.appendChild(nube);

    setTimeout(() => {

      nube.remove();

    }, 6000);

  }, 500);
}
