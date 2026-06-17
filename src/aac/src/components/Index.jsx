import { useState, useEffect } from 'react';
import { getSolicitacoesAluno } from '../db';

const CATEGORIAS = [
  { nome: 'Cursos livres',         limite: 30  },
  { nome: 'Monitoria',             limite: 100 },
  { nome: 'Estágio não obrig.',    limite: 100 },
  { nome: 'Evento',                limite: 50  },
  { nome: 'Pesquisa / PIBIC',      limite: 80  },
  { nome: 'Extensão Universitária',limite: 80  },
];

const TOTAL_HORAS = 200;

function barColor(pct) {
  if (pct >= 1) return 'fill-green';
  if (pct >= 0.5) return 'fill-amber';
  return 'fill-gray';
}

function Index() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    getSolicitacoesAluno('202508560348').then(setSolicitacoes);
  }, []);

  const aprovadas = solicitacoes.filter((s) => s.status === 'aprovado');
  const emAnalise = solicitacoes.filter((s) => s.status === 'pendente');

  const horasAprovadas = aprovadas.reduce((sum, s) => sum + s.horas, 0);
  const horasAnalise   = emAnalise.reduce((sum, s) => sum + s.horas, 0);
  const horasFaltam    = Math.max(0, TOTAL_HORAS - horasAprovadas);
  const progresso      = Math.min(horasAprovadas / TOTAL_HORAS, 1);

  const horasPorCategoria = CATEGORIAS.map((cat) => {
    const cumprido = aprovadas
      .filter((s) => s.categoria === cat.nome)
      .reduce((sum, s) => sum + s.horas, 0);
    return { ...cat, cumprido };
  });

  return (
    <div className="content">
      <h1 className="page-title">Minhas Atividades Complementares</h1>
      <p className="page-sub">Acompanhe seu progresso e envie novos certificados.</p>

      <div className="stat-row">
        <div className="stat-card stat-green">
          <div className="val">{horasAprovadas}h</div>
          <div className="lbl">Aprovadas</div>
        </div>
        <div className="stat-card stat-amber">
          <div className="val">{horasAnalise}h</div>
          <div className="lbl">Em análise</div>
        </div>
        <div className="stat-card stat-red">
          <div className="val">{horasFaltam}h</div>
          <div className="lbl">Faltam</div>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-label">
          <span>Progresso geral</span>
          <span>{horasAprovadas} / {TOTAL_HORAS}h</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progresso * 100}%` }}></div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Categoria</th>
              <th style={{ textAlign: 'center' }}>Aprovado</th>
              <th style={{ textAlign: 'center' }}>Limite</th>
              <th style={{ textAlign: 'center' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {horasPorCategoria.map((cat) => {
              const pct = Math.min(cat.cumprido / cat.limite, 1);
              return (
                <tr key={cat.nome}>
                  <td style={{ textAlign: 'center' }}>{cat.nome}</td>
                  <td style={{ textAlign: 'center' }}>{cat.cumprido}h</td>
                  <td style={{ textAlign: 'center' }}>{cat.limite}h</td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="cat-progress" style={{ justifyContent: 'center' }}>
                      <div className="cat-bar">
                        <div className={`cat-bar-fill ${barColor(pct)}`} style={{ width: `${pct * 100}%` }}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Index;
