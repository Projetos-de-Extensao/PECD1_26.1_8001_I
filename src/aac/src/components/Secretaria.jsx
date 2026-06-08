function Secretaria() {
  return (
    <div className="portal">

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

      <div className="main">
        <header className="topbar">
          <div className="topbar-brand">
            <span className="ibmec-dot"></span>
            <span className="ibmec-name">ibmec</span>
          </div>
          <div className="topbar-right">
            <a href="notificacoes.html" className="notif-link"><span>🔔</span> Notificações</a>
            <div className="user-info">
              <div className="name">Olá, <strong>Ana Claudia</strong></div>
              <div className="mat">Secretaria Acadêmica</div>
            </div>
            <div className="avatar">A</div>
          </div>
        </header>

        <nav className="tabs-bar">
          <a href="index.html" className="tab-link"><span className="tab-icon">📊</span> Painel</a>
          <a href="enviar.html" className="tab-link"><span className="tab-icon">📎</span> Enviar Certificado</a>
          <a href="historico.html" className="tab-link"><span className="tab-icon">📋</span> Histórico</a>
          <a href="notificacoes.html" className="tab-link"><span className="tab-icon">🔔</span> Notificações</a>
          <a href="coordenador.html" className="tab-link"><span className="tab-icon">✅</span> Coordenador</a>
          <a href="secretaria.html" className="tab-link active"><span className="tab-icon">🏫</span> Secretaria</a>
        </nav>

        <div className="content">
          <h1 className="page-title">Painel da Secretaria</h1>

          <div className="sec-stat-row">
            <div className="sec-stat navy">
              <div className="val">347</div>
              <div className="lbl">Alunos ativos</div>
            </div>
            <div className="sec-stat red">
              <div className="val">23</div>
              <div className="lbl">Formandos em risco</div>
            </div>
          </div>


          <div className="warning-box">
            ⚠ Formandos com horas insuficientes — 2026.1
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Curso</th>
                  <th>Cumprido</th>
                  <th>Faltam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ana Costa</strong></td>
                  <td>Ciência de Dados · 9º</td>
                  <td>140/200h</td>
                  <td><span className="faltam-red">60h</span></td>
                </tr>
                <tr>
                  <td><strong>Carlos Lima</strong></td>
                  <td>Engenharia · 9º</td>
                  <td>100/200h</td>
                  <td><span className="faltam-red">100h</span></td>
                </tr>
                <tr>
                  <td><strong>Mariana Souza</strong></td>
                  <td>Direito · 10º</td>
                  <td>80/200h</td>
                  <td><span className="faltam-red">120h</span></td>
                </tr>
                <tr>
                  <td><strong>Felipe Moura</strong></td>
                  <td>Administração · 9º</td>
                  <td>120/200h</td>
                  <td><span className="faltam-red">80h</span></td>
                </tr>
                <tr>
                  <td><strong>Beatriz Nunes</strong></td>
                  <td>Ciência de Dados · 10º</td>
                  <td>160/200h</td>
                  <td><span className="faltam-red">40h</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <a href="#" className="export-link">📊 Exportar relatório semanal.</a>

        </div>

        
      </div>
    </div>

  )

}

export default Secretaria    