function Index() {
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
                    <a href="index.html" className="tab-link active"><span className="tab-icon">📊</span> Painel</a>
                    <a href="enviar.html" className="tab-link"><span className="tab-icon">📎</span> Enviar Certificado</a>
                    <a href="historico.html" className="tab-link"><span className="tab-icon">📋</span> Histórico</a>
                    <a href="notificacoes.html" className="tab-link"><span className="tab-icon">🔔</span> Notificações</a>
                    <a href="coordenador.html" className="tab-link"><span className="tab-icon">✅</span> Coordenador</a>
                    <a href="secretaria.html" className="tab-link"><span className="tab-icon">🏫</span> Secretaria</a>
                </nav>


                <div className="content">
                    <h1 className="page-title">Minhas Atividades Complementares</h1>
                    <p className="page-sub">Acompanhe seu progresso e envie novos certificados.</p>


                    <div className="stat-row">
                        <div className="stat-card stat-green">
                            <div className="val">120h</div>
                            <div className="lbl">Aprovadas</div>
                        </div>
                        <div className="stat-card stat-amber">
                            <div className="val">30h</div>
                            <div className="lbl">Em análise</div>
                        </div>
                        <div className="stat-card stat-red">
                            <div className="val">50h</div>
                            <div className="lbl">Faltam</div>
                        </div>
                    </div>


                    <div className="progress-section">
                        <div className="progress-label">
                            <span>Progresso geral</span>
                            <span>120 / 200h</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '60%' }}></div>
                        </div>
                    </div>


                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Categoria</th>
                                    <th>Aprovado</th>
                                    <th>Limite</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cursos livres</td>
                                    <td>25h</td>
                                    <td>30h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-amber" style={{ width: '83%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Monitoria</td>
                                    <td>60h</td>
                                    <td>100h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-green" style={{ width: '60%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Estágio não obrig.</td>
                                    <td>35h</td>
                                    <td>100h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-green" style={{ width: '35%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eventos/Congressos</td>
                                    <td>0h</td>
                                    <td>50h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-gray" style={{ width: '0%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pesquisa / PIBIC</td>
                                    <td>0h</td>
                                    <td>80h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-gray" style={{ width: '0%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extensão Universitária</td>
                                    <td>0h</td>
                                    <td>80h</td>
                                    <td>
                                        <div className="cat-progress">
                                            <div className="cat-bar"><div className="cat-bar-fill fill-gray" style={{ width: '0%' }}></div></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <footer>SIA Ibmec · Projeto em Ciência de Dados I — 2026.1 · Bernardo, Carlos, Julia, Leonardo, Matheus e Pietro</footer>
            </div>
        </div>
    );
}

export default Index;