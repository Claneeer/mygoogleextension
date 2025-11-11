const toggleThemeBtn = document.getElementById('toggleThemeBtn');

// Função para atualizar a aparência do botão com base no tema atual
function updateButtonState(theme) {
  if (theme === 'dark') {
    toggleThemeBtn.textContent = 'Ativar Modo Claro';
    toggleThemeBtn.className = 'dark-mode-btn';
  } else {
    toggleThemeBtn.textContent = 'Ativar Modo Escuro';
    toggleThemeBtn.className = 'light-mode-btn';
  }
}

async function fetchApiData() {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const response = await fetch(`${API_URL}/api/hello`);
  const data = await response.json();
  // Exiba data.msg em algum lugar na tela
  document.getElementById('api-message').textContent = data.msg;
  // Adicione um data-testid para o Playwright
  document.getElementById('api-message').setAttribute('data-testid', 'api-ok');
}
fetchApiData(); // Chame isso no load ou no clique