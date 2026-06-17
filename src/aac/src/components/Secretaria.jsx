import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const TIPO_LABEL = { interna: 'Interna', externa: 'Externa' };
const TIPO_COLOR = { interna: 'badge-green', externa: 'badge-amber' };

function QRPopup({ atividade, onClose }) {
  const qrValue = JSON.stringify({ type: 'activity-checkin', atividadeId: atividade.id });
  return (
    <div style={overlay} onClick={onClose}>
      <div
        style={{ ...modal, maxWidth: 400, textAlign: 'center' }}
        className="modal-secretaria"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ ...closeBtn, position: 'absolute', top: 16, right: 20 }}>✕</button>
        <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)', marginBottom: 6 }}>
          Atividade criada!
        </h2>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.5 }}>
          Este QR code ficará <strong>sempre ativo</strong> e pode ser acessado nos detalhes da atividade. Projete ou imprima no evento para que os alunos façam check-in.
        </p>
        <div style={{ background: '#f9fafb', border: '1px solid var(--border)', borderRadius: 10, padding: '20px 16px', marginBottom: 16 }}>
          <QRCodeSVG value={qrValue} size={180} style={{ display: 'block', margin: '0 auto 14px' }} />
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{atividade.nome}</div>
          {atividade.data && (
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
              {atividade.data} · {atividade.horas}h · {atividade.local || '—'}
            </div>
          )}
        </div>
        <button className="btn-submit" style={{ marginTop: 0 }} onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}

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
      <div style={modal} className="modal-secretaria">
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

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10, fontWeight: 700 }}>
              QR CODE DA ATIVIDADE — alunos escaneiam para registrar presença
            </p>
            <QRCodeSVG
              value={JSON.stringify({ type: 'activity-checkin', atividadeId: atividade.id })}
              size={160}
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
              Projete ou imprima este QR code no evento
            </p>
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
  const [alunosRisco, setAlunosRisco] = useState([]);
  const [totalAlunos, setTotalAlunos] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [qrPopup, setQrPopup] = useState(null);
  const [busca, setBusca] = useState('');

useEffect(() => {
  fetch('http://localhost:3001/atividades')
    .then((response) => response.json())
    .then((data) => setAtividades(data))
    .catch((error) => console.error(error));

  fetch('http://localhost:3001/presencas')
    .then((response) => response.json())
    .then((data) => setPresencas(data))
    .catch((error) => console.error(error));

  fetch('http://localhost:3001/alunos')
    .then((response) => response.json())
    .then((data) => {
      const emRisco = data.filter((aluno) => aluno.cumprido < aluno.total);
      setAlunosRisco(emRisco);
    })
    .catch((error) => console.error(error));

  fetch('http://localhost:3001/solicitacoes')
    .then((response) => response.json())
    .then((sols) => {
      setTotalAlunos(new Set(sols.map((s) => s.matricula)).size);
    })
    .catch((error) => console.error(error));
}, []);

const handleSave = async (form) => {
  try {
    const response = await fetch('http://localhost:3001/atividades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar atividade');
    }

    const nova = await response.json();

    setAtividades((prev) => [...prev, nova]);
    setShowModal(false);
    setQrPopup(nova);
  } catch (error) {
    console.error(error);
  }
};
  const totalInscritos = presencas.length;
  const totalVerificados = presencas.filter((p) => p.verificado).length;

  const atividadesFiltradas = atividades.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase()) ||
    (a.local || '').toLowerCase().includes(busca.toLowerCase()) ||
    (a.categoria || '').toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="content">
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h1 className="page-title">Painel da Secretaria</h1>
            <p className="page-sub">Gerencie as atividades complementares e acompanhe as presenças.</p>
          </div>
          <button
            className="btn-submit sec-nova-btn"
            style={{ marginTop: 0, padding: '10px 20px', flexShrink: 0 }}
            onClick={() => setShowModal(true)}
          >
            + Nova Atividade
          </button>
        </div>
      </div>

      <div className="sec-stat-row">
        <div className="sec-stat navy">
          <div className="val">{totalAlunos}</div>
          <div className="lbl">Alunos ativos</div>
        </div>
        <div className="sec-stat red">
          <div className="val">{alunosRisco.length}</div>
          <div className="lbl">Formandos em risco</div>
        </div>
        <div className="sec-stat navy">
          <div className="val">{atividades.length}</div>
          <div className="lbl">Atividades cadastradas</div>
        </div>
        <div className="sec-stat" style={{ borderColor: 'var(--green)', background: 'var(--green-bg)' }}>
          <div className="val" style={{ color: 'var(--green)' }}>{totalVerificados}</div>
          <div className="lbl" style={{ color: 'var(--green-text)' }}>Presenças verificadas</div>
        </div>
      </div>

      {alunosRisco.length > 0 && (
        <>
          <div className="warning-box">⚠ Formandos com horas insuficientes — 2026.1</div>
          <div className="table-wrap" style={{ marginBottom: 28 }}>
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
                {alunosRisco.map((a) => (
                  <tr key={a.id}>
                    <td><strong>{a.nome}</strong></td>
                    <td>{a.curso} · {a.periodo}</td>
                    <td>{a.cumprido}/{a.total}h</td>
                    <td><span className="faltam-red">{a.total - a.cumprido}h</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="#" className="export-link" style={{ marginBottom: 24, display: 'inline-flex' }}>📊 Exportar relatório semanal</a>
        </>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <h2 style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
          Atividades — clique para ver detalhes e presenças
        </h2>
        <input
          className="form-control"
          style={{ maxWidth: 260, margin: 0, padding: '8px 12px', fontSize: 13 }}
          placeholder="🔍 Buscar atividade..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {atividadesFiltradas.length === 0 ? (
        <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
          {busca ? 'Nenhuma atividade encontrada.' : 'Nenhuma atividade cadastrada.'}
        </p>
      ) : (
        atividadesFiltradas.map((a) => (
          <AtividadeCard key={a.id} atividade={a} presencas={presencas} />
        ))
      )}

      {showModal && (
        <NovaAtividadeModal onClose={() => setShowModal(false)} onSave={handleSave} />
      )}

      {qrPopup && (
        <QRPopup atividade={qrPopup} onClose={() => setQrPopup(null)} />
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
  boxShadow: '0 20px 60px rgba(0,0,0,.2)', position: 'relative',
};

const closeBtn = {
  background: 'none', border: 'none', fontSize: 20, cursor: 'pointer',
  color: 'var(--muted)', lineHeight: 1,
};

export default Secretaria;
