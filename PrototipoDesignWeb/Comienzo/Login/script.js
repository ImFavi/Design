document.getElementById('LoginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe
  
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
  
    // Comprueba si las credenciales son válidas
    if (correo === 'fav.perez@design.cl' && password === 'admin123') {
      // Redirige a la página deseada después del inicio de sesión exitoso
      window.location.href ='https://www.youtube.com/watch?v=WIRK_pGdIdA&t=2922s';
    } else {
      alert('Datos inválidas. Intente de nuevo.');
    }
  });
  