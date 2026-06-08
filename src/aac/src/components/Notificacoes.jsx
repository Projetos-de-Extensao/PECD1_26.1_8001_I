function Notificacoes() {
    return (
        <div className="portal">

            <nav className="sidebar">
                <div className="sidebar-brand">
                    <span className="ibmec-dot"></span>
                    <span className="ibmec-name">ibmec</span>
                </div>
                <div className="sidebar-nav">
                    <a href="#" className="sidebar-item">Minhas Disciplinas <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">Acadêmico <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">E-mail de Estudante <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">Financeiro <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">Atendimento <span className="arrow">›</span></a>
                    <a href="index.html" className="sidebar-item active">Atividades Complementares <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">Avaliação Institucional <span className="arrow">›</span></a>
                    <a href="#" className="sidebar-item">Bibliotecas Virtuais <span className="arrow">›</span></a>
                </div>
            </nav>

            <div className="main">
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
                    <a href="index.html" className="tab-link"><span className="tab-icon">📊</span> Painel</a>
                    <a href="enviar.html" className="tab-link"><span className="tab-icon">📎</span> Enviar Certificado</a>
                    <a href="historico.html" className="tab-link"><span className="tab-icon">📋</span> Histórico</a>
                    <a href="notificacoes.html" className="tab-link active"><span className="tab-icon">🔔</span> Notificações</a>
                    <a href="coordenador.html" className="tab-link"><span className="tab-icon">✅</span> Coordenador</a>
                    <a href="secretaria.html" className="tab-link"><span className="tab-icon">🏫</span> Secretaria</a>
                </nav>

                <div className="content">
                    <h1 className="page-title">Notificações</h1>

                    <div className="notif-list">

                        <div className="notif-item green">
                            <div className="notif-title">✅ Atividade aprovada</div>
                            <div className="notif-body">"Monitoria Cálculo II" foi aprovada pelo coordenador.</div>
                            <div className="notif-time">Há 2 horas</div>
                        </div>

                        <div className="notif-item red">
                            <div className="notif-title">✕ Atividade reprovada</div>
                            <div className="notif-body">"Palestra IA Summit" não foi aceita. Motivo: sem carga horária.</div>
                            <div className="notif-time">Há 1 dia</div>
                        </div>

                        <div className="notif-item amber">
                            <div className="notif-title">⚠ Alerta de horas</div>
                            <div className="notif-body">Você está com menos de 20% da carga no penúltimo semestre!</div>
                            <div className="notif-time">Há 3 dias</div>
                        </div>

                        <div className="notif-item blue">
                            <div className="notif-title">📎 Certificado recebido</div>
                            <div className="notif-body">"Curso Python FGV" foi recebido e está em análise.</div>
                            <div className="notif-time">Há 4 dias</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );

}

export default Notificacoes;
