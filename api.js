async function buscarLibrosAPI(texto) {

  try {

    const respuesta = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${texto}`
    );

    const data = await respuesta.json();

    return data.items || [];

  } catch (error) {

    console.log(error);

    return [];
  }
}
