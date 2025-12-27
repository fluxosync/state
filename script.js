// Fluxo — lógica mínima

document.addEventListener("DOMContentLoaded", () => {
  checkFluxoMemory();
});

// memória invisível
function checkFluxoMemory() {
  const visited = localStorage.getItem("fluxo_visit");

  if (visited) {
    showMessage("já passamos por aqui antes.");
  } else {
    localStorage.setItem("fluxo_visit", "true");
  }
}

// mensagem simples
function showMessage(text) {
  const el = document.getElementById("message");
  el.textContent = text;
  el.classList.remove("hidden");

  setTimeout(() => {
    el.classList.add("hidden");
  }, 2500);
}

