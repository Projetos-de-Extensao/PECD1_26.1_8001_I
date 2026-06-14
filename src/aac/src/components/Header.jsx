const TABS_POR_PERFIL = {
  aluno: [
    { key: 'index', icon: '📊', label: 'Painel' },
    { key: 'historico', icon: '📋', label: 'Histórico' },
    { key: 'notificacoes', icon: '🔔', label: 'Notificações' },
    { key: 'scan-qr', icon: '✅', label: 'Registrar Presença QR' },
  ],
  coordenador: [
    { key: 'coordenador', icon: '📝', label: 'Fila de Validação' },
    { key: 'qr-presenca', icon: '📷', label: 'Verificar Presença QR' },
    { key: 'notificacoes', icon: '🔔', label: 'Notificações' },
  ],
  secretaria: [
    { key: 'secretaria', icon: '🏫', label: 'Painel' },
    { key: 'qr-presenca', icon: '📷', label: 'Verificar Presença QR' },
    { key: 'notificacoes', icon: '🔔', label: 'Notificações' },
  ],
};

const NOME_PERFIL = {
  aluno: 'Leonardo',
  coordenador: 'Prof. Carlos',
  secretaria: 'Secretaria',
};

const AVATAR_PERFIL = {
  aluno: 'L',
  coordenador: 'C',
  secretaria: 'S',
};

function Header({ currentPage, navigate, perfil, onLogout }) {
  const tabs = TABS_POR_PERFIL[perfil] || TABS_POR_PERFIL.aluno;

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
            <div className="name">Olá, <strong>{NOME_PERFIL[perfil]}</strong></div>
            <div className="mat">{perfil.charAt(0).toUpperCase() + perfil.slice(1)}</div>
          </div>
          <div className="avatar">{AVATAR_PERFIL[perfil]}</div>
          <button
            onClick={onLogout}
            style={{
              background: 'none', border: '1px solid var(--border)', borderRadius: 6,
              padding: '4px 10px', fontSize: 12, fontWeight: 700, color: 'var(--muted)',
              cursor: 'pointer', fontFamily: 'Nunito, sans-serif',
            }}
          >
            Sair
          </button>
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
