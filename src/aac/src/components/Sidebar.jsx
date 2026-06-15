const ITEMS_POR_PERFIL = {
  aluno: [
    { key: 'index',       label: 'Atividades Complementares' },
    { key: 'historico',   label: 'Histórico' },
    { key: 'notificacoes',label: 'Notificações' },
    { key: 'scan-qr',     label: 'Registrar Presença (QR)' },
    { key: 'qr-presenca', label: 'Verificar Presença (QR)' },
  ],
  coordenador: [
    { key: 'coordenador', label: 'Fila de Validação' },
    { key: 'qr-presenca', label: 'Verificar Presença (QR)' },
    { key: 'scan-qr',     label: 'Registrar Presença (QR)' },
    { key: 'notificacoes',label: 'Notificações' },
  ],
  secretaria: [
    { key: 'secretaria',  label: 'Painel da Secretaria' },
    { key: 'qr-presenca', label: 'Verificar Presença (QR)' },
    { key: 'scan-qr',     label: 'Registrar Presença (QR)' },
    { key: 'notificacoes',label: 'Notificações' },
  ],
};

function Sidebar({ currentPage, navigate, perfil, isOpen, onClose }) {
  const items = ITEMS_POR_PERFIL[perfil] || ITEMS_POR_PERFIL.aluno;

  return (
    <>
      <div
        className={`sidebar-overlay${isOpen ? ' sidebar-open' : ''}`}
        onClick={onClose}
      />
      <nav className={`sidebar${isOpen ? ' sidebar-open' : ''}`}>
        <div className="sidebar-brand">
          <span className="ibmec-dot"></span>
          <span className="ibmec-name">ibmec</span>
        </div>
        <div className="sidebar-nav">
          {items.map((item) => (
            <button
              key={item.key}
              className={`sidebar-item${currentPage === item.key ? ' active' : ''}`}
              onClick={() => navigate(item.key)}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
            >
              {item.label} <span className="arrow">›</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
