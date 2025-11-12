// Em: apps/web/src/App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Pode importar o seu popup.css aqui se preferir

function App() {
  const [apiMessage, setApiMessage] = useState('Carregando dados da API...');
  const [currentTheme, setCurrentTheme] = useState('light');

  // URL da API (lida a partir das variáveis de ambiente do Docker Compose)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // 1. Buscar dados da API quando o componente carregar
  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setApiMessage(data.msg || 'Mensagem recebida!'))
      .catch(() => setApiMessage('Erro ao ligar à API.'));
  }, [API_URL]); // Dependência para garantir que 'API_URL' está disponível

  // 2. Lógica para alternar o tema
  const handleToggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  // 3. Renderizar a UI (baseado no seu popup.html)
  return (
    <div className="container">
      <h3>Forçador de Tema (PWA)</h3>
      <p>Alterne o tema para este PWA.</p>
      
      <button 
        id="toggleThemeBtn" 
        onClick={handleToggleTheme}
        className={currentTheme === 'dark' ? 'dark-mode-btn' : 'light-mode-btn'}
      >
        {currentTheme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
      </button>

      <hr style={{margin: '20px 0'}} />

      <h4>Mensagem do Backend:</h4>
      {/* O seletor que o Playwright está à espera: */}
      <p data-testid="api-ok">{apiMessage}</p>
    </div>
  );
}

export default App;