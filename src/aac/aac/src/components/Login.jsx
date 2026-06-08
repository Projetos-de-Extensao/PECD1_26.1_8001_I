function Login() {

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


            <div class="login-right">
                <div class="login-box">
                    <h2>Entrar</h2>
                    <p class="subtitle">
                        Faça login com sua conta acadêmica
                    </p>

                    <form>
                        <div class="input-group">

                            <label for="email">E-mail acadêmico</label>
                            <input type="email" id="email" placeholder="seuemail@aluno.ibmec.edu.br"></input>

                        </div>

                        <div class="input-group">

                            <label for="senha">Senha</label>
                            <input type="password" id="senha" placeholder="Digite sua senha"></input>

                        </div>

                        <div class="login-options">

                            <label class="remember">Lembrar acesso</label>
                            <input type="checkbox"></input>

                            <a href="#" class="forgot-password">
                                Esqueci minha senha
                            </a>

                        </div>

                        <button type="submit" class="login-button">
                            Entrar no Portal
                        </button>

                    </form>

                    <div class="support-text">
                        Problemas para acessar?
                        <a href="#">Fale com o suporte</a>
                    </div>
                </div>
           
            </div>

        </div>
    );
}



export default Login;