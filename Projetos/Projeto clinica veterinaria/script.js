document.getElementById("agendamento-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const animal = document.getElementById("animal").value;
  
    const mensagem = `Consulta agendada com sucesso para ${nome} (${animal}) no dia ${data} às ${hora}. Um e-mail de confirmação será enviado para ${email}.`;
  
    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("mensagem").style.color = "green";
  });
  