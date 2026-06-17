import { useState, useEffect } from 'react';

function CardSolicitacao({ sol, onAprovar, onReprovar }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="subm-card">
      <div
        className="subm-card-head"
        onClick={() => setAberto((o) => !o)}
        style={{ cursor: 'pointer', alignItems: 'flex-start' }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="subm-student-name">{sol.alunoNome}</div>
          <div className="subm-student-sub">{sol.curso} · {sol.periodo} período</div>
          <div className="subm-student-sub">{sol.horas}h · {new Date(sol.data).toLocaleDateString('pt-BR')}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
          {sol.formando && <span className="badge-formando">⚠ Formando</span>}
          <span className="badge badge-amber">Pendente</span>
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>{aberto ? '▲' : '▼'}</span>
        </div>
      </div>

      {aberto && (
        <>
          <div className="doc-row">
            <span>📄 {sol.arquivo}</span>
            <a href="#">Visualizar</a>
          </div>

          <div className="subm-meta">
            <div className="meta-item">Atividade<strong>{sol.atividade}</strong></div>
            <div className="meta-item">Local<strong>{sol.local || '—'}</strong></div>
            <div className="meta-item">Horas<strong>{sol.horas}h</strong></div>
            <div className="meta-item">Categoria<strong>{sol.categoria}</strong></div>
          </div>

          <div style={{ textAlign: 'center', padding: '6px 16px 10px', fontSize: 12, color: 'var(--muted)' }}>
            Enviado
            <strong style={{ display: 'block', fontSize: 13, color: 'var(--text)' }}>
              {new Date(sol.data).toLocaleDateString('pt-BR')}
            </strong>
          </div>

          {sol.aviso && (
            <div className="warn-banner">⚠ {sol.aviso}</div>
          )}

          <div className="subm-actions">
            <button className="btn-approve" onClick={() => onAprovar(sol.id)}>✓ Aprovar</button>
            <button className="btn-reject"  onClick={() => onReprovar(sol.id)}>✗ Reprovar</button>
          </div>
        </>
      )}
    </div>
  );
}

function Coordenador() {
  const [pendentes, setPendentes] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
  fetch('http://localhost:3001/solicitacoes?status=pendente')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar solicitações pendentes');
      }

      return response.json();
    })
    .then((data) => {
      setPendentes(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

 const handleAprovar = (id) => {
  fetch(`http://localhost:3001/solicitacoes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 'aprovado',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao aprovar solicitação');
      }

      setPendentes((prev) => prev.filter((s) => s.id !== id));
    })
    .catch((error) => {
      console.error(error);
    });
};
  const handleReprovar = (id) => {
  fetch(`http://localhost:3001/solicitacoes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: 'reprovado',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao reprovar solicitação');
      }

      setPendentes((prev) => prev.filter((s) => s.id !== id));
    })
    .catch((error) => {
      console.error(error);
    });
};

  const pendentesFiltrados = pendentes.filter((s) =>
    s.alunoNome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="content">
      <div className="fila-header">
        <h1 className="page-title">Fila de Validação</h1>
        {pendentes.length > 0 && (
          <span className="badge-count">⚠ {pendentes.length} pendente{pendentes.length > 1 ? 's' : ''}</span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <div className="filter-chips" style={{ margin: 0, flex: 1 }}>
          <span className="chip chip-active">Todos</span>
          <span className="chip chip-inactive">Formandos</span>
          <span className="chip chip-inactive">Pendentes &gt;7d</span>
        </div>
        <input
          className="form-control"
          style={{ maxWidth: 240, margin: 0, padding: '8px 12px', fontSize: 13 }}
          placeholder="🔍 Buscar por aluno..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {pendentesFiltrados.length === 0 ? (
        <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginTop: 20 }}>
          {busca ? 'Nenhum aluno encontrado.' : 'Nenhuma solicitação pendente.'}
        </p>
      ) : (
        pendentesFiltrados.map((sol) => (
          <CardSolicitacao
            key={sol.id}
            sol={sol}
            onAprovar={handleAprovar}
            onReprovar={handleReprovar}
          />
        ))
      )}
    </div>
  );
}

export default Coordenador;
