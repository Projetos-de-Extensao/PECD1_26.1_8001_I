function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <span className="ibmec-dot"></span>
        <span className="ibmec-name">ibmec</span>
      </div>
      <div className="sidebar-nav">
        <a href="#" className="sidebar-item">Minhas Disciplinas <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">Acadêmico <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">E-mail de Estudante <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">Financeiro <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">Atendimento <span className="arrow">›</span></a>
        <a href="index.html" className="sidebar-item active">Atividades Complementares <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">Avaliação Institucional <span className="arrow">›</span></a>
        <a href="#" className="sidebar-item">Bibliotecas Virtuais <span className="arrow">›</span></a>
      </div>
    </nav>
  );
}
export default Sidebar;