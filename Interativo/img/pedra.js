//que é chamada quando um botão é clicado.
function play(userChoice) {
    const choices = ["pedra", "papel", "tesoura"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  // criar arrray opcoes do jogo
    if (userChoice === computerChoice) {
        document.getElementById('result').innerHTML = "Empate!";
    } else if (
        (userChoice === "pedra" && computerChoice === "tesoura") ||
        (userChoice === "papel" && computerChoice === "pedra") ||
        (userChoice === "tesoura" && computerChoice === "papel")
    ) {
        document.getElementById('result').innerHTML = "Você ganhou!";
    } else {
        document.getElementById('result').innerHTML = "Você perdeu!";
    }
}