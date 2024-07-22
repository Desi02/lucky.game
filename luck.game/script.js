function checkGuess() {
    var guess = parseInt(document.getElementById('guessInput').value);
    var correctNumber = 7; // Número correto definido como 7
    
    var messageElement = document.getElementById('message');
   
    
    if (guess === correctNumber) {
      messageElement.textContent = 'Parabéns! Você acertou o número!';
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Que pena!' + '. Tente novamente!';
      messageElement.style.color = 'red';
     
    }
  }
  