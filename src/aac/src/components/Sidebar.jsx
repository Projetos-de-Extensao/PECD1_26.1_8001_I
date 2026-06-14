function Sidebar({ currentPage, navigate }) {
  const items = [
    { key: 'index', label: 'Atividades Complementares' },
    { key: 'historico', label: 'Histórico' },
    { key: 'notificacoes', label: 'Notificações' },
    { key: 'qr-presenca', label: 'Registrar Presença (QR)' },
    { key: 'scan-qr', label: 'Verificar QR (Coord.)' },
    { key: 'coordenador', label: 'Fila de Validação' },
    { key: 'secretaria', label: 'Painel da Secretaria' },
  ];

  return (
    <nav className="sidebar">
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
  );
}

export default Sidebar;
