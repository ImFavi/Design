document.getElementById('RecuperarContraseña').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe
  
    var correo = document.getElementById('correo').value;
  
    // Comprueba si las credenciales son válidas
    if (correo != '') {
      // Redirige a la página deseada después del inicio de sesión exitoso
      window.location.href ='../Login/login.html';
    }
  });
  