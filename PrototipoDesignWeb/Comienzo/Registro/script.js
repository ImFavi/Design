document.getElementById('RegisterForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario se envíe

  var correo = document.getElementById('correo').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Verifica si las contraseñas coinciden
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden. Intente de nuevo.');
    return;
  }

  // Muestra una alerta de registro exitoso
  alert('Registro exitoso');

  window.location.href = '/Comienzo/Login/login.html';
});
