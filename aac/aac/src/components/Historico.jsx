function Historico() {
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
                    <a href="historico.html" className="tab-link active"><span className="tab-icon">📋</span> Histórico</a>
                    <a href="notificacoes.html" className="tab-link"><span className="tab-icon">🔔</span> Notificações</a>
                    <a href="coordenador.html" className="tab-link"><span className="tab-icon">✅</span> Coordenador</a>
                    <a href="secretaria.html" className="tab-link"><span className="tab-icon">🏫</span> Secretaria</a>
                </nav>

                <div className="content">
                    <h1 className="page-title">Histórico de Solicitações</h1>

                    <div className="filter-chips">
                        <span className="chip chip-active">Todos</span>
                        <span className="chip chip-inactive">Aprovados</span>
                        <span className="chip chip-inactive">Pendentes</span>
                        <span className="chip chip-inactive">Reprovadas</span>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Atividade</th>
                                    <th>Horas</th>
                                    <th>Categoria</th>
                                    <th>Status</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Monitoria Cálculo II</strong>
                                    </td>
                                    <td>60h</td>
                                    <td>Monitoria</td>
                                    <td><span className="badge badge-green">Aprovada</span></td>
                                    <td>20/03/2026</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Palestra IA Summit</strong>
                                        <div className="reason-text">Motivo: Certificado sem carga horária legível.</div>
                                    </td>
                                    <td>4h</td>
                                    <td>Evento</td>
                                    <td><span className="badge badge-red">Reprovada</span></td>
                                    <td>18/03/2026</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Curso Python — FGV</strong>
                                    </td>
                                    <td>30h</td>
                                    <td>Curso livre</td>
                                    <td><span className="badge badge-amber">Em análise</span></td>
                                    <td>02/04/2026</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Hackathon Data Science 2026</strong>
                                    </td>
                                    <td>16h</td>
                                    <td>Evento</td>
                                    <td><span className="badge badge-green">Aprovada</span></td>
                                    <td>10/02/2026</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Curso de Machine Learning — Bradesco</strong>
                                    </td>
                                    <td>40h</td>
                                    <td>Curso livre</td>
                                    <td><span className="badge badge-amber">Em análise</span></td>
                                    <td>15/04/2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <a href="#" className="export-link">📊 Exportar relatório</a>

                </div>

                <footer>SIA Ibmec · Projeto em Ciência de Dados I — 2026.1 · Bernardo, Carlos, Julia, Leonardo, Matheus e Pietro</footer>
            </div>
        </div>
    );
}

export default Historico