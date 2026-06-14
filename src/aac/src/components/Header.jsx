function Header({ currentPage, navigate }) {
  const tabs = [
    { key: 'index', icon: '📊', label: 'Painel' },
    { key: 'historico', icon: '📋', label: 'Histórico' },
    { key: 'notificacoes', icon: '🔔', label: 'Notificações' },
    { key: 'qr-presenca', icon: '📷', label: 'Presença QR' },
    { key: 'scan-qr', icon: '✅', label: 'Verificar QR' },
    { key: 'coordenador', icon: '📝', label: 'Coordenador' },
    { key: 'secretaria', icon: '🏫', label: 'Secretaria' },
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-brand">
          <span className="ibmec-dot"></span>
          <span className="ibmec-name">ibmec</span>
        </div>
        <div className="topbar-right">
          <button
            onClick={() => navigate('notificacoes')}
            className="notif-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            <span>🔔</span> Notificações
          </button>
          <div className="user-info">
            <div className="name">Olá, <strong>Leonardo</strong></div>
            <div className="mat">Matrícula: 202508560348</div>
          </div>
          <div className="avatar">L</div>
        </div>
      </header>

      <nav className="tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-link${currentPage === tab.key ? ' active' : ''}`}
            onClick={() => navigate(tab.key)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            <span className="tab-icon">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </nav>
    </>
  );
}

export default Header;
