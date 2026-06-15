import { useState } from 'react';
import './App.css';
import Coordenador from './components/Coordenador';
import Login from './components/Login';
import Secretaria from './components/Secretaria';
import Index from './components/Index';
import Historico from './components/Historico';
import Notificacoes from './components/Notificacoes';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import QRPresenca from './components/QRPresenca';
import ScanQR from './components/ScanQR';

const PAGES = {
  index: Index,
  historico: Historico,
  notificacoes: Notificacoes,
  coordenador: Coordenador,
  secretaria: Secretaria,
  'qr-presenca': QRPresenca,
  'scan-qr': ScanQR,
};

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [perfil, setPerfil] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (perfilSelecionado, paginaDestino) => {
    setPerfil(perfilSelecionado);
    setCurrentPage(paginaDestino);
  };

  const navigate = (page) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  if (!perfil) {
    return <Login onLogin={handleLogin} />;
  }

  const PageComponent = PAGES[currentPage] || Index;

  return (
    <div className="portal">
      <Sidebar
        currentPage={currentPage}
        navigate={navigate}
        perfil={perfil}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main">
        <Header
          currentPage={currentPage}
          navigate={navigate}
          perfil={perfil}
          onLogout={() => setPerfil(null)}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
        />
        <PageComponent navigate={navigate} perfil={perfil} />
      </div>
    </div>
  );
}

export default App;
