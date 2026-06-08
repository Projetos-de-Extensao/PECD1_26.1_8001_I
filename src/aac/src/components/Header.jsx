function Header() {


    
    return (
        <>  
           <header className="topbar">
                    <div className="topbar-brand">
                        <span className="ibmec-dot"></span>
                        <span className="ibmec-name">ibmec</span>
                    </div>
                    <div className="topbar-right">
                        <a href="notificacoes.html" className="notif-link"><span>🔔</span> Notificações</a>
                        <div className="user-info">
                            <div className="name">Olá, <strong>Leonardo</strong></div>
                            <div className="mat">Matrícula: 202508560348</div>
                        </div>
                        <div className="avatar">L</div>
                    </div>
                </header>

                <nav className="tabs-bar">
                    <a href="index.html" className="tab-link active"><span className="tab-icon">📊</span> Painel</a>
                    <a href="enviar.html" className="tab-link"><span className="tab-icon">📎</span> Enviar Certificado</a>
                    <a href="historico.html" className="tab-link"><span className="tab-icon">📋</span> Histórico</a>
                    <a href="notificacoes.html" className="tab-link"><span className="tab-icon">🔔</span> Notificações</a>
                    <a href="coordenador.html" className="tab-link"><span className="tab-icon">✅</span> Coordenador</a>
                    <a href="secretaria.html" className="tab-link"><span className="tab-icon">🏫</span> Secretaria</a>
                </nav>
</>
    )

}
export default Header;
