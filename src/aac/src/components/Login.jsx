function Login({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('index');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <span className="ibmec-dot"></span>
          <span className="brand-name">ibmec</span>
        </div>
        <div className="left-content">
          <h1>Portal de Atividades Complementares</h1>
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
          <p className="subtitle">Faça login com sua conta acadêmica</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail acadêmico</label>
              <input type="email" id="email" placeholder="seuemail@aluno.ibmec.edu.br" />
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

            <button type="submit" className="login-button">Entrar no Portal</button>
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
