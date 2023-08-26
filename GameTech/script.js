
   let Nome = document.getElementById('pNome').value;
   let pEndereco = document.getElementById('pEndereco').value;
   let cidade = document.getElementById('pCidade').value;
   let email = document.getElementById('pEmail').value;
   let emailC = document.getElementById('pEmailC').value;
   let senha = document.getElementById('pSenha').value;
   let senhaConf = document.getElementById('pSenhaC').value;
   function Enviar() {
    if (Nome == "") 
        alert("Prencha todos os campos")
        if (endereco == "") 
            alert("Prencha todos os campos")
            if (cidade == "") 
                alert("Prencha todos os campos")
                if (email == "") 
                    alert("Prencha todos os campos")
                    if (emailConf == "") 
                    alert("Prencha todos os campos")
                    if (senha == "") 
                    alert("Prencha todos os campos")
                    if (senhaConf == "") 
                    alert("Prencha todos os campos")}
                   

    
        function verificarEmail() {
    if (email!= emailC)
    alert("Emails não batem")
}
// Activate Carousel
$("#carouselExampleIndicators").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#carouselExampleIndicators").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselExampleIndicators").carousel("prev");
});
