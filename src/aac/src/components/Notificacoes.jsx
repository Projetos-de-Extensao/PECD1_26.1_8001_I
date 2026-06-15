import { useState, useEffect } from 'react';
import { getNotificacoes } from '../db';

const TITULO_PERFIL = {
  aluno:       'Suas Notificações',
  coordenador: 'Notificações — Coordenação',
  secretaria:  'Notificações — Secretaria',
};

function Notificacoes({ perfil = 'aluno' }) {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    setNotificacoes(getNotificacoes(perfil));
  }, [perfil]);

  return (
    <div className="content">
      <h1 className="page-title">{TITULO_PERFIL[perfil]}</h1>
      <p className="page-sub">{notificacoes.length} notificações recentes.</p>

      <div className="notif-list">
        {notificacoes.map((n) => (
          <div key={n.id} className={`notif-item ${n.tipo}`}>
            <div className="notif-title">{n.titulo}</div>
            <div className="notif-body">{n.corpo}</div>
            <div className="notif-time">{n.tempo}</div>
          </div>
        ))}
        {notificacoes.length === 0 && (
          <div className="notif-item" style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
            Nenhuma notificação.
          </div>
        )}
      </div>
    </div>
  );
}

export default Notificacoes;
