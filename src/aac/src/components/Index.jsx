function Index() {
    return (
        <div className="portal">


            <div className="main">



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

                
            </div>
        </div>
    );
}

export default Index;