const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", (event) => {
  event.preventDefault();
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;
  var emailUser = "user@schneider.com";
  var passwordUser = "123456";
  var emailAdmim = "admin@schneider.com";
  var passwordAdmin = "654321";

  if (emailInput == emailUser && passwordInput == passwordUser) {
    window.location.href = "./src/pages/blog.html";
  } else if (emailInput == emailAdmim && passwordInput == passwordAdmin) {
    alert("Página em Construção");
  } else {
    alert("Credencial Errada");
  }
});