function Notificacoes() {
    return (
        <div className="portal">

            <div className="main">

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

                <footer>SIA Ibmec · Projeto em Ciência de Dados I — 2026.1 · Bernardo, Carlos, Julia, Leonardo, Matheus e Pietro</footer>
            </div>
        </div>

    );

}

export default Notificacoes