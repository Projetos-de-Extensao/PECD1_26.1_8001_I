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

      {/* Painel esquerdo — compacto no mobile, expandido no desktop */}
      <div className="login-left">
        <div className="brand">
          <span className="ibmec-dot"></span>
          <span className="brand-name">ibmec</span>
        </div>
        <div className="left-content">
          <h1 style={{ color: '#ffffff' }}>Portal de Atividades Complementares</h1>
          <p className="login-left-desc">
            Acesse o sistema para enviar certificados,
            acompanhar suas horas complementares
            e visualizar o andamento das solicitações.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="login-right">
        <div className="login-box">
          <h2>Entrar</h2>
          <p className="subtitle">Selecione seu perfil e faça login</p>

          {/* Seletor de perfil */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            {PERFIS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPerfil(p.key)}
                style={{
                  flex: 1,
                  padding: '14px 4px',
                  border: `2px solid ${perfil === p.key ? 'var(--navy)' : 'var(--border)'}`,
                  borderRadius: 10,
                  background: perfil === p.key ? 'var(--navy)' : '#fff',
                  color: perfil === p.key ? '#fff' : 'var(--muted)',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all .15s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  minHeight: 72,
                  justifyContent: 'center',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <span style={{ fontSize: 24 }}>{p.icon}</span>
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
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                autoComplete="current-password"
              />
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
