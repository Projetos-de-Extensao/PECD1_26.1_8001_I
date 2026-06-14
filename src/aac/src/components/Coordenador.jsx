function Coordenador() {
    return (
        <div className="content">
 
      {/* Header */}
      <div className="fila-header">
        <h1 className="page-title">Fila de Validação</h1>
        <span className="badge-count">⚠ 12 pendentes</span>
      </div>
 
      {/* Filters */}
      <div className="filter-chips">
        <span className="chip chip-active">Todos</span>
        <span className="chip chip-inactive">Formandos</span>
        <span className="chip chip-inactive">Pendentes &gt;7d</span>
      </div>
 
      {/* Card 1: expandido com ações */}
      <div className="subm-card">
        <div className="subm-card-head">
          <div>
            <div className="subm-student-name">Maria Oliveira</div>
            <div className="subm-student-sub">Ciência de Dados · 7º período</div>
          </div>
          <span className="badge-formando">⚠ Formando</span>
        </div>
 
        <div className="doc-row">
          <span>📄 certificado_python_fgv.pdf</span>
          <a href="#">Visualizar</a>
        </div>
 
        <div className="subm-meta">
          <div className="meta-item">
            Atividade
            <strong>Curso Python</strong>
          </div>
          <div className="meta-item">
            Horas
            <strong>30h</strong>
          </div>
          <div className="meta-item">
            Categoria
            <strong>Curso livre</strong>
          </div>
          <div className="meta-item">
            Enviado
            <strong>02/04/2026</strong>
          </div>
        </div>
 
        <div className="warn-banner">
          ⚠ Aluna já tem 25h em cursos livres (limite: 30h)
        </div>
 
        <div className="subm-actions">
          <a href="coordenador.html" className="btn-approve">✓ Aprovar</a>
          <a href="coordenador.html" className="btn-reject">✗ Reprovar</a>
        </div>
      </div>
 
      {/* Card 2: colapsado */}
      <div className="subm-card subm-collapsed">
        <div className="subm-card-head">
          <div>
            <div className="subm-student-name">Pedro Santos</div>
            <div className="subm-student-sub">Monitoria · 60h · 01/04</div>
          </div>
          <span className="badge badge-amber">Pendente</span>
        </div>
      </div>
 
      {/* Card 3: colapsado */}
      <div className="subm-card subm-collapsed">
        <div className="subm-card-head">
          <div>
            <div className="subm-student-name">Ana Costa</div>
            <div className="subm-student-sub">Congresso · 8h · 28/03</div>
          </div>
          <span className="badge badge-amber">Pendente</span>
        </div>
      </div>
 
      {/* Card 4: colapsado */}
      <div className="subm-card subm-collapsed">
        <div className="subm-card-head">
          <div>
            <div className="subm-student-name">Carlos Lima</div>
            <div className="subm-student-sub">Estágio · 40h · 15/03</div>
          </div>
          <span className="badge badge-amber">Pendente</span>
        </div>
      </div>
 
    </div>

    );
}

export default Coordenador;