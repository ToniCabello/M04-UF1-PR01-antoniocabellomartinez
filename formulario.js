
// Esperamos a que todo el contenido de la página (HTML) se haya cargado completamente.
document.addEventListener("DOMContentLoaded", () => {

    // Obtenemos referencias a los elementos del formulario y del modal
    const form = document.getElementById("form"); // Formulario
    const modal = document.getElementById("modal"); // Modal de éxito
    const closeModal = document.querySelector(".close"); // Botón para cerrar el modal
  
    // Añadimos un evento para cuando se envíe el formulario
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevenimos el envío normal del formulario (evita la recarga de la página)
  
      // Obtenemos los valores de los campos del formulario
      const username = document.getElementById("username").value.trim(); // Nombre
      const email = document.getElementById("email").value.trim(); // Email
      const anime = document.getElementById("anime").value.trim(); // Anime recomendado
      const categoria = document.getElementById("categoria").value; // Categoría seleccionada
  
      // Variable para verificar si todos los campos son válidos
      let valid = true;
  
      // Validamos cada campo
      valid &= validateField("username", username, "Nombre obligatorio"); // Validamos el campo "Nombre"
      valid &= validateEmail("email", email); // Validamos el campo "Email"
      valid &= validateField("anime", anime, "Anime obligatorio"); // Validamos el campo "Anime"
      valid &= validateSelect("categoria", categoria, "Selecciona categoría"); // Validamos el campo "Categoría"
  
      // Si todos los campos son válidos, mostramos el modal y redirigimos a otra página
      if (valid) {
        modal.style.display = "flex"; // Mostramos el modal
        form.reset(); // Limpiamos el formulario
        setTimeout(() => { 
          window.location.href = "Animerank.html"; // Redirigimos a otra página después de 3 segundos
        }, 3000); 
      }
    });
  
    // Función para validar los campos de texto
    function validateField(id, value, msg) {
      const input = document.getElementById(id); // Obtenemos el campo de entrada
      const errorDiv = input.nextElementSibling; // Obtenemos el div donde mostraremos los errores
  
      // Si el campo está vacío, mostramos un mensaje de error
      if (value === "") {
        errorDiv.textContent = msg; // Mostramos el mensaje de error
        return false; // Indicamos que el campo no es válido
      } else {
        errorDiv.textContent = ""; // Si está completo, limpiamos el mensaje de error
        return true; // El campo es válido
      }
    }
  
    // Función para validar el campo de email
    function validateEmail(id, value) {
      const input = document.getElementById(id); // Obtenemos el campo de entrada
      const errorDiv = input.nextElementSibling; // Obtenemos el div de los errores
      const regex = /\S+@\S+\.\S+/; // Expresión regular para validar un email
  
      // Si el campo está vacío o el email no es válido, mostramos un error
      if (!value || !regex.test(value)) {
        errorDiv.textContent = "Email inválido"; // Mostramos el mensaje de error
        return false; // Indicamos que el email no es válido
      } else {
        errorDiv.textContent = ""; // Limpiamos el mensaje de error si el email es válido
        return true; // El email es válido
      }
    }
  
    // Función para validar los campos de selección (como el <select>)
    function validateSelect(id, value, msg) {
      const select = document.getElementById(id); // Obtenemos el campo de selección
      const errorDiv = select.nextElementSibling; // Obtenemos el div donde mostraremos los errores
  
      // Si el valor seleccionado es "nada" (lo que indica que no se ha seleccionado una categoría válida), mostramos un error
      if (value === "nada") {
        errorDiv.textContent = msg; // Mostramos el mensaje de error
        return false; // Indicamos que la selección no es válida
      } else {
        errorDiv.textContent = ""; // Limpiamos el mensaje de error si la selección es válida
        return true; // La selección es válida
      }
    }
  
    // Añadimos un evento para cerrar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"; // Ocultamos el modal
    });
  
  });