 // Referência à imagem da lâmpada no HTML.
 const lamp = document.getElementById('lamp');

 // Referência ao botão de alternância
 const toggleButton = document.getElementById('toggle');
 const titulo = document.getElementById('titulo');
 // Variável para rastrear o número de cliques
 let clickCount = 0;

 // Limite de cliques para quebrar a lâmpada
 const clickLimitToBreak = 5; // Altere para o número desejado de cliques para quebrar

 // Verifica se a lâmpada está quebrada verificando se o atributo src da imagem contém a string "LampadaQuebrada"
 function isLampBroken() {
     return lamp.src.indexOf('LampadaQuebrada') > -1;
 }

 // Função para ligar/desligar a lâmpada
 function toggleLamp() {
     if (isLampBroken()) {
         // Se a lâmpada estiver quebrada, não faz nada
         return;
     }

     if (clickCount >= clickLimitToBreak) {
         // Se o limite de cliques for atingido, quebra a lâmpada
         lamp.src = "./img/lampadaQuebrada.jpg";
         // Adiciona a classe dark-background para escurecer o fundo
         document.body.classList.add('dark-background');
         // Oculta o botão de alternância
         toggleButton.style.display = 'none';
         titulo.style.display = 'none';
         return;
     }

     if (lamp.src.indexOf('lampadaLigada.jpg') > -1) {
         // Se a lâmpada está ligada, desliga
         lamp.src = "./img/lampadaDesligada.jpg";
     } else {
         // Se a lâmpada está desligada, liga
         lamp.src = "./img/lampadaLigada.jpg";
     }

     // Atualiza o contador de cliques
     clickCount++;
     document.getElementById('clickCount').textContent = `Cliques: ${clickCount}`;
 }

 // Event listener para o botão de alternância
 toggleButton.addEventListener('click', toggleLamp);