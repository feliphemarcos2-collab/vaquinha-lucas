// ===== CONFIGURAÇÃO =====
    const meta = 2500;
    const arrecadado = 200; // <<< ATUALIZE APENAS ESTE VALOR
    const dataFinal = new Date("2026-11-10"); // <<< DATA LIMITE REAL

    // ===== PROGRESSO =====
    const porcentagem = Math.min((arrecadado / meta) * 100, 100);

    document.getElementById("valor-arrecadado").innerText =
      `R$ ${arrecadado.toLocaleString("pt-BR")}`;

    document.getElementById("progress-fill").style.width =
      `${porcentagem}%`;

    // ===== MENSAGEM DINÂMICA =====
    let mensagem = "";

    if (porcentagem < 10) {
      mensagem = "Toda ajuda agora faz muita diferença.";
    } else if (porcentagem < 40) {
      mensagem = "Já demos o primeiro passo. Obrigado a quem ajudou!";
    } else if (porcentagem < 80) {
      mensagem = "Estamos na reta final. Falta menos do que parece.";
    } else {
      mensagem = "Falta muito pouco! Se puder ajudar agora, é decisivo.";
    }

    document.getElementById("mensagem-progresso").innerText = mensagem;

    // ===== CONTADOR DE DIAS =====
    const hoje = new Date();
    const diffTime = dataFinal - hoje;
    const diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const contador = document.getElementById("contador-dias");

    if (diasRestantes > 1) {
      contador.innerText = `⏳ Restam ${diasRestantes} dias`;
    } else if (diasRestantes === 1) {
      contador.innerText = "⏳ Último dia para ajudar";
    } else {
      contador.innerText = "⏳ Prazo final atingido";

    }

