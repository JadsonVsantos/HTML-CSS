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

  document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
// Configurar os parâmetros de envio de e-mail
const params = {
  from_name: nome,
  email_id: email,
  message: mensagem,
};

emailjs.send("service_0ymgjdr", "template_ocmif9f", params, "CiFHyl3By1XfGm-xh")
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.getElementById("mensagem-enviada").textContent = `Obrigado, ${nome}. Sua mensagem foi enviada com sucesso!`;

    // Limpar o formulário após o envio
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  }, function(error) {
    console.log('FAILED...', error);
    document.getElementById("mensagem-enviada").textContent = "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.";
  });
});
});
  