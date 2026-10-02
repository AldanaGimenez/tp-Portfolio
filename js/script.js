const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

function mostrarAviso(texto, tipo) {
  aviso.textContent = texto;
  aviso.className = tipo;
}

function emailValido(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAviso("Por favor, completá todos los campos.", "error");
    return;
  }

  if (!emailValido(email)) {
    mostrarAviso("El email no tiene un formato válido.", "error");
    return;
  }

  mostrarAviso("¡Mensaje enviado!", "exito");
  formulario.reset();
});
