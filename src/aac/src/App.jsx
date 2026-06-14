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

  const navigate = (page) => setCurrentPage(page);

  if (currentPage === 'login') {
    return <Login navigate={navigate} />;
  }

  const PageComponent = PAGES[currentPage] || Index;

  return (
    <div className="portal">
      <Sidebar currentPage={currentPage} navigate={navigate} />
      <div className="main">
        <Header currentPage={currentPage} navigate={navigate} />
        <PageComponent navigate={navigate} />
      </div>
    </div>
  );
}

export default App;
