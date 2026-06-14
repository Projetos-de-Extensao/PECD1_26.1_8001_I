import { useState } from 'react';

const PERFIS = [
  { key: 'aluno', label: 'Aluno', icon: '🎓', destino: 'index' },
  { key: 'coordenador', label: 'Coordenador', icon: '📝', destino: 'coordenador' },
  { key: 'secretaria', label: 'Secretaria', icon: '🏫', destino: 'secretaria' },
];

const PLACEHOLDER_EMAIL = {
  aluno: 'seuemail@aluno.ibmec.edu.br',
  coordenador: 'coordenador@ibmec.edu.br',
  secretaria: 'secretaria@ibmec.edu.br',
};

function Login({ onLogin }) {
  const [perfil, setPerfil] = useState('aluno');

  const handleSubmit = (e) => {
    e.preventDefault();
    const perfilObj = PERFIS.find((p) => p.key === perfil);
    onLogin(perfilObj.key, perfilObj.destino);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <span className="ibmec-dot"></span>
          <span className="brand-name">ibmec</span>
        </div>
        <div className="left-content">
          <h1 style={{ color: '#ffffff' }}>Portal de Atividades Complementares</h1>
          <p>
            Acesse o sistema para enviar certificados,
            acompanhar suas horas complementares
            e visualizar o andamento das solicitações.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Entrar</h2>
          <p className="subtitle">Selecione seu perfil e faça login</p>

          {/* Seletor de perfil */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
            {PERFIS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPerfil(p.key)}
                style={{
                  flex: 1,
                  padding: '10px 4px',
                  border: `2px solid ${perfil === p.key ? 'var(--navy)' : 'var(--border)'}`,
                  borderRadius: 8,
                  background: perfil === p.key ? 'var(--navy)' : '#fff',
                  color: perfil === p.key ? '#fff' : 'var(--muted)',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all .15s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 20 }}>{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder={PLACEHOLDER_EMAIL[perfil]}
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Digite sua senha" />
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" style={{ marginRight: 6 }} />
                Lembrar acesso
              </label>
              <a href="#" className="forgot-password">Esqueci minha senha</a>
            </div>

            <button type="submit" className="login-button">
              Entrar como {PERFIS.find((p) => p.key === perfil)?.label}
            </button>
          </form>

          <div className="support-text">
            Problemas para acessar? <a href="#">Fale com o suporte</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
