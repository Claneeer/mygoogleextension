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

// Ao carregar o popup, pega o tema salvo no storage e atualiza o botão
document.addEventListener('DOMContentLoaded', async () => {
  const { theme } = await chrome.storage.local.get('theme');
  updateButtonState(theme || 'light'); // Padrão para 'light' se não definido
});

// Ao clicar no botão, envia uma mensagem para o service worker para alternar o tema
toggleThemeBtn.addEventListener('click', async () => {
  const response = await chrome.runtime.sendMessage({ type: 'TOGGLE_THEME' });
  if (response && response.newTheme) {
    updateButtonState(response.newTheme);
  }
});