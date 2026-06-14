import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { getAtividades, addPresenca, getPresencas } from '../db';

function QRPresenca() {
  const [atividades, setAtividades] = useState([]);
  const [form, setForm] = useState({ nome: '', atividadeId: '' });
  const [presenca, setPresenca] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const list = getAtividades();
    setAtividades(list);
    if (list.length > 0) setForm((f) => ({ ...f, atividadeId: list[0].id }));
  }, []);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!form.nome.trim() || !form.atividadeId) {
      setErro('Preencha todos os campos.');
      return;
    }

    const existing = getPresencas().find(
      (p) => p.nome.toLowerCase() === form.nome.trim().toLowerCase() && p.atividadeId === form.atividadeId
    );
    if (existing) {
      setPresenca(existing);
      return;
    }

    const nova = addPresenca({
      nome: form.nome.trim(),
      matricula: '',
      atividadeId: form.atividadeId,
    });
    setPresenca(nova);
  };

  const atividade = atividades.find((a) => a.id === presenca?.atividadeId);
  const qrData = presenca ? JSON.stringify({ presencaId: presenca.id, matricula: presenca.matricula, nome: presenca.nome, atividadeId: presenca.atividadeId }) : '';

  if (presenca) {
    return (
      <div className="content" style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <h1 className="page-title" style={{ textAlign: 'center' }}>Seu QR Code de Presença</h1>
        <p className="page-sub" style={{ textAlign: 'center' }}>Apresente este QR code ao coordenador para registrar sua presença.</p>

        {presenca.verificado && (
          <div className="warning-box" style={{ background: 'var(--green-bg)', border: '1px solid #86efac', color: 'var(--green-text)', marginBottom: 20, justifyContent: 'center' }}>
            ✓ Presença já verificada em {new Date(presenca.verificadoEm).toLocaleString('pt-BR')}
          </div>
        )}

        <div style={{ background: '#f9fafb', border: '1px solid var(--border)', borderRadius: 12, padding: '28px 20px', marginBottom: 20 }}>
          <QRCodeSVG value={qrData} size={220} style={{ display: 'block', margin: '0 auto 20px' }} />
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{presenca.nome}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8 }}>Matrícula: {presenca.matricula}</div>
          {atividade && (
            <div style={{ fontSize: 13, color: 'var(--text)' }}>
              <strong>{atividade.nome}</strong><br />
              {atividade.data} · {atividade.horas}h
            </div>
          )}
        </div>

        <button
          className="btn-submit"
          style={{ background: 'var(--navy)' }}
          onClick={() => { setPresenca(null); setForm({ nome: '', atividadeId: atividades[0]?.id || '' }); }}
        >
          Registrar outra presença
        </button>
      </div>
    );
  }

  return (
    <div className="content" style={{ maxWidth: 480, margin: '0 auto' }}>
      <h1 className="page-title">Verificar Presença</h1>
      <p className="page-sub">Preencha seus dados para gerar o QR code de presença na atividade.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Atividade</label>
          <select className="form-control" value={form.atividadeId} onChange={set('atividadeId')} required>
            {atividades.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome} — {a.data} ({a.tipo === 'interna' ? 'Interna' : 'Externa'})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Nome completo</label>
          <input className="form-control" value={form.nome} onChange={set('nome')} required placeholder="Ex: João da Silva" />
        </div>

        {erro && (
          <div className="warn-banner" style={{ marginBottom: 12 }}>{erro}</div>
        )}

        <button type="submit" className="btn-submit">Gerar QR Code</button>
      </form>
    </div>
  );
}

export default QRPresenca;
