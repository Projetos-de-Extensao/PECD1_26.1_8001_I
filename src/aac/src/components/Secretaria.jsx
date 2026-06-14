import { useState, useEffect } from 'react';
import { getAtividades, addAtividade, getPresencas } from '../db';

const TIPO_LABEL = { interna: 'Interna', externa: 'Externa' };
const TIPO_COLOR = { interna: 'badge-green', externa: 'badge-amber' };

function NovaAtividadeModal({ onClose, onSave }) {
  const [form, setForm] = useState({ nome: '', tipo: 'externa', data: '', horas: '', descricao: '', local: '' });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.data || !form.horas) return;
    onSave({ ...form, horas: Number(form.horas) });
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)' }}>Nova Atividade</h2>
          <button onClick={onClose} style={closeBtn}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nome da Atividade</label>
            <input className="form-control" value={form.nome} onChange={set('nome')} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Tipo</label>
              <select className="form-control" value={form.tipo} onChange={set('tipo')}>
                <option value="externa">Externa (Palestra, Workshop…)</option>
                <option value="interna">Interna (Empresa Júnior, etc.)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Horas</label>
              <input className="form-control" type="number" min="0.5" step="0.5" value={form.horas} onChange={set('horas')} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Data</label>
              <input className="form-control" type="date" value={form.data} onChange={set('data')} required />
            </div>
            <div className="form-group">
              <label className="form-label">Local</label>
              <input className="form-control" value={form.local} onChange={set('local')} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Descrição</label>
            <textarea className="form-control" rows={3} value={form.descricao} onChange={set('descricao')} style={{ resize: 'vertical' }} />
          </div>
          <button type="submit" className="btn-submit" style={{ marginTop: 12 }}>Salvar Atividade</button>
        </form>
      </div>
    </div>
  );
}

function AtividadeCard({ atividade, presencas }) {
  const [open, setOpen] = useState(false);
  const inscritos = presencas.filter((p) => p.atividadeId === atividade.id);
  const verificados = inscritos.filter((p) => p.verificado).length;

  return (
    <div className="subm-card" style={{ marginBottom: 12 }}>
      <div
        className="subm-card-head"
        onClick={() => setOpen((o) => !o)}
        style={{ cursor: 'pointer' }}
      >
        <div>
          <div className="subm-student-name">{atividade.nome}</div>
          <div className="subm-student-sub">
            {atividade.data} · {atividade.horas}h · {atividade.local || '—'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className={`badge ${TIPO_COLOR[atividade.tipo]}`}>
            {TIPO_LABEL[atividade.tipo]}
          </span>
          <span style={{ color: 'var(--muted)', fontSize: 18 }}>{open ? '▲' : '▼'}</span>
        </div>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', padding: '14px 16px' }}>
          {atividade.descricao && (
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>{atividade.descricao}</p>
          )}

          <div style={{ display: 'flex', gap: 24, marginBottom: 14 }}>
            <div className="meta-item">
              Inscritos<strong>{inscritos.length}</strong>
            </div>
            <div className="meta-item">
              Verificados<strong style={{ color: 'var(--green)' }}>{verificados}</strong>
            </div>
            <div className="meta-item">
              Pendentes<strong style={{ color: 'var(--red)' }}>{inscritos.length - verificados}</strong>
            </div>
          </div>

          {inscritos.length === 0 ? (
            <p style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>Nenhum aluno inscrito ainda.</p>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Matrícula</th>
                    <th>Inscrito em</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {inscritos.map((p) => (
                    <tr key={p.id}>
                      <td><strong>{p.nome}</strong></td>
                      <td>{p.matricula}</td>
                      <td>{new Date(p.timestamp).toLocaleString('pt-BR')}</td>
                      <td>
                        {p.verificado ? (
                          <span className="badge badge-green">✓ Verificado</span>
                        ) : (
                          <span className="badge badge-amber">Pendente</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Secretaria() {
  const [atividades, setAtividades] = useState([]);
  const [presencas, setPresencas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAtividades(getAtividades());
    setPresencas(getPresencas());
  }, []);

  const handleSave = (form) => {
    addAtividade(form);
    setAtividades(getAtividades());
    setShowModal(false);
  };

  const totalInscritos = presencas.length;
  const totalVerificados = presencas.filter((p) => p.verificado).length;

  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h1 className="page-title">Painel da Secretaria</h1>
          <p className="page-sub">Gerencie as atividades complementares e acompanhe as presenças.</p>
        </div>
        <button className="btn-submit" style={{ width: 'auto', marginTop: 0, padding: '10px 20px' }} onClick={() => setShowModal(true)}>
          + Nova Atividade
        </button>
      </div>

      <div className="sec-stat-row">
        <div className="sec-stat navy">
          <div className="val">{atividades.length}</div>
          <div className="lbl">Atividades cadastradas</div>
        </div>
        <div className="sec-stat navy">
          <div className="val">{totalInscritos}</div>
          <div className="lbl">Inscrições totais</div>
        </div>
        <div className="sec-stat" style={{ borderColor: 'var(--green)', background: 'var(--green-bg)' }}>
          <div className="val" style={{ color: 'var(--green)' }}>{totalVerificados}</div>
          <div className="lbl" style={{ color: 'var(--green-text)' }}>Presenças verificadas</div>
        </div>
        <div className="sec-stat red">
          <div className="val">{totalInscritos - totalVerificados}</div>
          <div className="lbl">Pendentes de verificação</div>
        </div>
      </div>

      <h2 style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)', marginBottom: 12 }}>
        Atividades — clique para ver detalhes e presenças
      </h2>

      {atividades.length === 0 ? (
        <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>Nenhuma atividade cadastrada.</p>
      ) : (
        atividades.map((a) => (
          <AtividadeCard key={a.id} atividade={a} presencas={presencas} />
        ))
      )}

      {showModal && (
        <NovaAtividadeModal onClose={() => setShowModal(false)} onSave={handleSave} />
      )}
    </div>
  );
}

const overlay = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999,
};

const modal = {
  background: '#fff', borderRadius: 12, padding: '28px 32px',
  width: '100%', maxWidth: 540, maxHeight: '90vh', overflowY: 'auto',
  boxShadow: '0 20px 60px rgba(0,0,0,.2)',
};

const closeBtn = {
  background: 'none', border: 'none', fontSize: 20, cursor: 'pointer',
  color: 'var(--muted)', lineHeight: 1,
};

export default Secretaria;
