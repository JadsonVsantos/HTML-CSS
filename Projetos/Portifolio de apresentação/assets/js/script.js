document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    // Aqui, você pode integrar com um serviço de envio de e-mail ou backend
    const mensagemEnviada = `Obrigado, ${nome}. Sua mensagem foi enviada com sucesso!`;
  
    document.getElementById("mensagem-enviada").textContent = mensagemEnviada;
    document.getElementById("mensagem-enviada").textContent = mensagemEnviada;

    // Limpar os campos do formulário após o envio
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  });
  
  