import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  // Carregar tema salvo no localStorage ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setCurrentTheme(savedTheme);
    document.body.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Alternar tema
  const handleToggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

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
    </div>
  );
}

export default App;