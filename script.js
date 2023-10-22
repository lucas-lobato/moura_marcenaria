document.addEventListener("DOMContentLoaded", function () {
    const formularioContato = document.getElementById("formulario-contato");
    formularioContato.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Construir os dados do formulário em um objeto
        const dadosFormulario = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        // Enviar os dados para o servidor
        fetch("URL_DO_SERVIDOR_DE_ENVIO_DE_EMAIL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosFormulario)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "sucesso") {
                alert("E-mail enviado com sucesso!");
                formularioContato.reset(); // Limpa o formulário após o envio
            } else {
                alert("Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.");
            }
        })
        .catch(error => {
            console.error("Erro ao enviar o formulário:", error);
            alert("Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.");
        });
    });
});
