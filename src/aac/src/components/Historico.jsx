import { useState, useEffect } from 'react';
import { getSolicitacoesAluno } from '../api';

const STATUS_BADGE = {
  aprovado:  'badge-green',
  pendente:  'badge-amber',
  reprovado: 'badge-red',
};

const STATUS_LABEL = {
  aprovado:  'Aprovada',
  pendente:  'Em análise',
  reprovado: 'Reprovada',
};

function Historico() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    getSolicitacoesAluno('202508560348').then(setSolicitacoes);
  }, []);

  const filtros = [
    { key: 'todos',    label: 'Todos' },
    { key: 'aprovado', label: 'Aprovados' },
    { key: 'pendente', label: 'Pendentes' },
    { key: 'reprovado',label: 'Reprovadas' },
  ];

  const lista = filtro === 'todos' ? solicitacoes : solicitacoes.filter((s) => s.status === filtro);

  return (
    <div className="content">
      <h1 className="page-title">Histórico de Solicitações</h1>
      <p className="page-sub">{solicitacoes.length} solicitações no total.</p>

      <div className="filter-chips">
        {filtros.map((f) => (
          <button
            key={f.key}
            className={`chip ${filtro === f.key ? 'chip-active' : 'chip-inactive'}`}
            onClick={() => setFiltro(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Atividade</th>
              <th>Local</th>
              <th>Horas</th>
              <th>Categoria</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((s) => (
              <tr key={s.id}>
                <td>
                  <strong>{s.atividade}</strong>
                  {s.motivo && <div className="reason-text">Motivo: {s.motivo}</div>}
                </td>
                <td style={{ color: 'var(--muted)' }}>{s.local || '—'}</td>
                <td>{s.horas}h</td>
                <td>{s.categoria}</td>
                <td><span className={`badge ${STATUS_BADGE[s.status]}`}>{STATUS_LABEL[s.status]}</span></td>
                <td>{new Date(s.data).toLocaleDateString('pt-BR')}</td>
              </tr>
            ))}
            {lista.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--muted)', fontStyle: 'italic' }}>Nenhuma solicitação encontrada.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <a href="#" className="export-link">📊 Exportar relatório</a>
    </div>
  );
}

export default Historico;
