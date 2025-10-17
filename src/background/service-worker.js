// CSS para o modo escuro. Inverte tudo e depois "desinverte" imagens e vídeos.
const darkModeCSS = `
  html {
    filter: invert(1) hue-rotate(180deg);
    transition: filter 0.5s;
  }
  img, video, iframe, .ytp-chrome-bottom, .ytp-gradient-bottom {
    filter: invert(1) hue-rotate(180deg);
  }
`;

// Função para aplicar o modo escuro a uma aba específica
async function applyDarkMode(tabId) {
  try {
    await chrome.scripting.insertCSS({
      target: { tabId: tabId },
      css: darkModeCSS,
    });
  } catch (err) {
    console.warn(`Não foi possível aplicar o modo escuro na aba ${tabId}: ${err}`);
  }
}

// Função para remover o modo escuro de uma aba específica
async function removeDarkMode(tabId) {
  try {
    await chrome.scripting.removeCSS({
      target: { tabId: tabId },
      css: darkModeCSS,
    });
  } catch (err) {
    console.warn(`Não foi possível remover o modo escuro da aba ${tabId}: ${err}`);
  }
}

// Inicializa o tema como 'light' na primeira instalação
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ theme: 'light' });
});

// Ouve as mensagens do popup
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'TOGGLE_THEME') {
    const { theme } = await chrome.storage.local.get('theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    await chrome.storage.local.set({ theme: newTheme });

    // Aplica ou remove o tema de todas as abas abertas
    const tabs = await chrome.tabs.query({ url: ["http://*/*", "https://*/*"] });
    for (const tab of tabs) {
      if (newTheme === 'dark') {
        await applyDarkMode(tab.id);
      } else {
        await removeDarkMode(tab.id);
      }
    }
    
    // Responde ao popup com o novo tema
    sendResponse({ newTheme: newTheme });
  }
});

// Ouve atualizações de abas para aplicar o tema automaticamente em novas páginas
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // Garante que a página carregou completamente e é uma página web
  if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
    const { theme } = await chrome.storage.local.get('theme');
    if (theme === 'dark') {
      await applyDarkMode(tabId);
    }
  }
});