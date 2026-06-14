import { useState } from 'react';
import './App.css';
import Coordenador from './components/Coordenador';
import Login from './components/Login';
import Secretaria from './components/Secretaria';
import Index from './components/Index';
import Historico from './components/Historico';
import Notificacoes from './components/Notificacoes';
import Sidebar from './components/Sidebar';
import QRPresenca from './components/QRPresenca';
import ScanQR from './components/ScanQR';

const PAGES = {
  login: Login,
  index: Index,
  historico: Historico,
  notificacoes: Notificacoes,
  coordenador: Coordenador,
  secretaria: Secretaria,
  'qr-presenca': QRPresenca,
  'scan-qr': ScanQR,
};

function App() {
  const [currentPage, setCurrentPage] = useState('index');

  const navigate = (page) => setCurrentPage(page);

  const PageComponent = PAGES[currentPage] || Index;

  return (
    <div className="portal">
      <Sidebar currentPage={currentPage} navigate={navigate} />
      <div className="main">
        <PageComponent navigate={navigate} />
      </div>
    </div>
  );
}

export default App;
