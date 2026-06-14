import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { getPresencaById, getAtividades, verificarPresenca } from '../db';

function ScanQR() {
  const [resultado, setResultado] = useState(null);
  const [atividades, setAtividades] = useState([]);
  const [scannerAtivo, setScannerAtivo] = useState(false);
  const [erroScan, setErroScan] = useState('');
  const scannerRef = useRef(null);

  useEffect(() => {
    setAtividades(getAtividades());
  }, []);

  const iniciarScanner = () => {
    setResultado(null);
    setErroScan('');
    setScannerAtivo(true);
  };

  useEffect(() => {
    if (!scannerAtivo) return;

    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        try {
          const data = JSON.parse(decodedText);
          if (!data.presencaId) throw new Error('QR inválido');
          const presenca = getPresencaById(data.presencaId);
          if (!presenca) {
            setErroScan('Presença não encontrada no sistema.');
          } else {
            setResultado(presenca);
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

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [scannerAtivo]);

  const confirmarPresenca = () => {
    if (!resultado) return;
    const atualizado = verificarPresenca(resultado.id);
    setResultado(atualizado);
  };

  const atividade = atividades.find((a) => a.id === resultado?.atividadeId);

  return (
    <div className="content" style={{ maxWidth: 520, margin: '0 auto' }}>
      <h1 className="page-title">Registrar Presença (QR)</h1>
      <p className="page-sub">Escaneie o QR code do aluno para registrar ou verificar a presença.</p>

      {!scannerAtivo && !resultado && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>📷</div>
          <button className="btn-submit" style={{ width: 'auto', padding: '12px 32px' }} onClick={iniciarScanner}>
            Iniciar Scanner
          </button>
          {erroScan && (
            <div className="warn-banner" style={{ marginTop: 16, justifyContent: 'center' }}>{erroScan}</div>
          )}
        </div>
      )}

      {scannerAtivo && (
        <div>
          <div id="qr-reader" style={{ width: '100%' }} />
          <button
            className="chip chip-inactive"
            style={{ marginTop: 12, display: 'block', width: '100%', padding: '10px' }}
            onClick={() => {
              scannerRef.current?.clear().catch(() => {});
              setScannerAtivo(false);
            }}
          >
            Cancelar
          </button>
        </div>
      )}

      {resultado && (
        <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ background: 'var(--navy)', padding: '16px 20px', color: '#fff' }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{resultado.nome}</div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>Matrícula: {resultado.matricula}</div>
          </div>

          <div style={{ padding: '16px 20px' }}>
            {atividade && (
              <div style={{ marginBottom: 16 }}>
                <div className="meta-item">
                  Atividade<strong>{atividade.nome}</strong>
                </div>
                <div style={{ display: 'flex', gap: 24, marginTop: 10 }}>
                  <div className="meta-item">Data<strong>{atividade.data}</strong></div>
                  <div className="meta-item">Horas<strong>{atividade.horas}h</strong></div>
                  <div className="meta-item">
                    Tipo
                    <strong>
                      <span className={`badge ${atividade.tipo === 'interna' ? 'badge-green' : 'badge-amber'}`}>
                        {atividade.tipo === 'interna' ? 'Interna' : 'Externa'}
                      </span>
                    </strong>
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
                <div className="warn-banner" style={{ marginBottom: 16, justifyContent: 'center' }}>
                  ⏳ Presença ainda não verificada
                </div>
                <button className="btn-submit" style={{ background: 'var(--green)' }} onClick={confirmarPresenca}>
                  ✓ Confirmar Presença
                </button>
              </div>
            )}

            <button
              className="chip chip-inactive"
              style={{ marginTop: 12, display: 'block', width: '100%', padding: '10px' }}
              onClick={iniciarScanner}
            >
              Escanear outro QR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanQR;
