import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { getPresencaById, getAtividades, verificarPresenca, addPresencaVerificada, getPresencas } from '../db';

function ScanQR() {
  const [resultado, setResultado] = useState(null);
  const [atividades, setAtividades] = useState([]);
  const [scannerAtivo, setScannerAtivo] = useState(false);
  const [erroScan, setErroScan] = useState('');
  const [checkinAtividade, setCheckinAtividade] = useState(null);
  const [checkinNome, setCheckinNome] = useState('');
  const [checkinFeito, setCheckinFeito] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    getAtividades().then(setAtividades);
  }, []);

  const iniciarScanner = () => {
    setResultado(null);
    setCheckinAtividade(null);
    setCheckinFeito(null);
    setErroScan('');
    setScannerAtivo(true);
  };

  useEffect(() => {
    if (!scannerAtivo) return;

    const scanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: { width: 250, height: 250 } }, false);

    scanner.render(
      (decodedText) => {
        try {
          const data = JSON.parse(decodedText);
          if (data.type === 'activity-checkin' && data.atividadeId) {
            const ativ = atividades.find((a) => a.id === data.atividadeId);
            setCheckinAtividade(ativ || { id: data.atividadeId, nome: 'Atividade desconhecida' });
          } else if (data.presencaId) {
            const presenca = getPresencaById(data.presencaId);
            if (!presenca) setErroScan('Presença não encontrada no sistema.');
            else setResultado(presenca);
          } else {
            throw new Error('QR inválido');
          }
        } catch {
          setErroScan('QR code inválido ou não reconhecido.');
        }
        scanner.clear().catch(() => {});
        setScannerAtivo(false);
      },
      () => {}
    );

    scannerRef.current = scanner;
    return () => { scanner.clear().catch(() => {}); };
  }, [scannerAtivo]);

  const confirmarPresenca = () => {
    if (!resultado) return;
    setResultado(verificarPresenca(resultado.id));
  };

  const handleCheckin = (e) => {
    e.preventDefault();
    if (!checkinNome.trim() || !checkinAtividade) return;

    const duplicado = getPresencas().find(
      (p) => p.nome.toLowerCase() === checkinNome.trim().toLowerCase() && p.atividadeId === checkinAtividade.id
    );
    if (duplicado) { setCheckinFeito(duplicado); return; }

    const nova = addPresencaVerificada({ nome: checkinNome.trim(), matricula: '', atividadeId: checkinAtividade.id, local: checkinAtividade.local || '' });
    setCheckinFeito(nova);
  };

  const atividade = atividades.find((a) => a.id === resultado?.atividadeId);

  if (checkinAtividade && !checkinFeito) {
    return (
      <div className="content" style={{ maxWidth: 480, margin: '0 auto' }}>
        <h1 className="page-title">Check-in na Atividade</h1>
        <div style={{ background: 'var(--navy)', borderRadius: 10, padding: '14px 18px', color: '#fff', marginBottom: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 800 }}>{checkinAtividade.nome}</div>
          {checkinAtividade.data && (
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
              {checkinAtividade.data} · {checkinAtividade.horas}h · {checkinAtividade.local}
            </div>
          )}
        </div>
        <form onSubmit={handleCheckin}>
          <div className="form-group">
            <label className="form-label">Seu nome completo</label>
            <input className="form-control" value={checkinNome} onChange={(e) => setCheckinNome(e.target.value)} required placeholder="Ex: João da Silva" autoFocus />
          </div>
          <button type="submit" className="btn-submit">Confirmar Presença</button>
        </form>
        <button className="chip chip-inactive" style={{ marginTop: 12, display: 'block', width: '100%', padding: '10px' }} onClick={() => { setCheckinAtividade(null); setCheckinNome(''); }}>
          Cancelar
        </button>
      </div>
    );
  }

  if (checkinFeito) {
    return (
      <div className="content" style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>✅</div>
        <h1 className="page-title" style={{ textAlign: 'center' }}>Presença Registrada!</h1>
        <div style={{ background: 'var(--green-bg)', border: '1px solid #86efac', borderRadius: 10, padding: '16px 20px', marginBottom: 20 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--green-text)', marginBottom: 4 }}>{checkinFeito.nome}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>{checkinAtividade?.nome}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
            Registrado em {new Date(checkinFeito.verificadoEm || checkinFeito.timestamp).toLocaleString('pt-BR')}
          </div>
        </div>
        <button className="btn-submit" style={{ background: 'var(--navy)' }} onClick={() => { setCheckinAtividade(null); setCheckinFeito(null); setCheckinNome(''); }}>
          Registrar outra presença
        </button>
      </div>
    );
  }

  if (resultado) {
    return (
      <div className="content" style={{ maxWidth: 520, margin: '0 auto' }}>
        <h1 className="page-title">Registrar Presença (QR)</h1>
        <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ background: 'var(--navy)', padding: '16px 20px', color: '#fff' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{resultado.nome}</div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>Matrícula: {resultado.matricula || '—'}</div>
          </div>
          <div style={{ padding: '16px 20px' }}>
            {atividade && (
              <div style={{ marginBottom: 16 }}>
                <div className="meta-item">Atividade<strong>{atividade.nome}</strong></div>
                <div style={{ display: 'flex', gap: 24, marginTop: 10 }}>
                  <div className="meta-item">Data<strong>{atividade.data}</strong></div>
                  <div className="meta-item">Horas<strong>{atividade.horas}h</strong></div>
                  <div className="meta-item">
                    Tipo<strong><span className={`badge ${atividade.tipo === 'interna' ? 'badge-green' : 'badge-amber'}`}>{atividade.tipo === 'interna' ? 'Interna' : 'Externa'}</span></strong>
                  </div>
                </div>
              </div>
            )}
            {resultado.verificado ? (
              <div style={{ background: 'var(--green-bg)', border: '1px solid #86efac', borderRadius: 8, padding: '14px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>✅</div>
                <div style={{ fontWeight: 800, color: 'var(--green-text)', fontSize: 15 }}>Já Verificado</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                  Presença confirmada em {new Date(resultado.verificadoEm).toLocaleString('pt-BR')}
                </div>
              </div>
            ) : (
              <div>
                <div className="warn-banner" style={{ marginBottom: 16, justifyContent: 'center' }}>⏳ Presença ainda não verificada</div>
                <button className="btn-submit" style={{ background: 'var(--green)' }} onClick={confirmarPresenca}>✓ Confirmar Presença</button>
              </div>
            )}
            <button className="chip chip-inactive" style={{ marginTop: 12, display: 'block', width: '100%', padding: '10px' }} onClick={iniciarScanner}>
              Escanear outro QR
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content" style={{ maxWidth: 520, margin: '0 auto' }}>
      <h1 className="page-title">Registrar Presença (QR)</h1>
      <p className="page-sub">Escaneie o QR code do aluno para verificar presença, ou o QR code da atividade para fazer check-in direto.</p>
      {!scannerAtivo && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>📷</div>
          <button className="btn-submit" style={{ width: 'auto', padding: '12px 32px' }} onClick={iniciarScanner}>Iniciar Scanner</button>
          {erroScan && <div className="warn-banner" style={{ marginTop: 16, justifyContent: 'center' }}>{erroScan}</div>}
        </div>
      )}
      {scannerAtivo && (
        <div>
          <div id="qr-reader" style={{ width: '100%' }} />
          <button className="chip chip-inactive" style={{ marginTop: 12, display: 'block', width: '100%', padding: '10px' }} onClick={() => { scannerRef.current?.clear().catch(() => {}); setScannerAtivo(false); }}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default ScanQR;
