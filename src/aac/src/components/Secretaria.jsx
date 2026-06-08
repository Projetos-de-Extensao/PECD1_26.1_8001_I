function Secretaria() {
  return (
    <div className="portal">

      <div className="main">
       

        <div className="content">
          <h1 className="page-title">Painel da Secretaria</h1>

          <div className="sec-stat-row">
            <div className="sec-stat navy">
              <div className="val">347</div>
              <div className="lbl">Alunos ativos</div>
            </div>
            <div className="sec-stat red">
              <div className="val">23</div>
              <div className="lbl">Formandos em risco</div>
            </div>
          </div>


          <div className="warning-box">
            ⚠ Formandos com horas insuficientes — 2026.1
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Curso</th>
                  <th>Cumprido</th>
                  <th>Faltam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ana Costa</strong></td>
                  <td>Ciência de Dados · 9º</td>
                  <td>140/200h</td>
                  <td><span className="faltam-red">60h</span></td>
                </tr>
                <tr>
                  <td><strong>Carlos Lima</strong></td>
                  <td>Engenharia · 9º</td>
                  <td>100/200h</td>
                  <td><span className="faltam-red">100h</span></td>
                </tr>
                <tr>
                  <td><strong>Mariana Souza</strong></td>
                  <td>Direito · 10º</td>
                  <td>80/200h</td>
                  <td><span className="faltam-red">120h</span></td>
                </tr>
                <tr>
                  <td><strong>Felipe Moura</strong></td>
                  <td>Administração · 9º</td>
                  <td>120/200h</td>
                  <td><span className="faltam-red">80h</span></td>
                </tr>
                <tr>
                  <td><strong>Beatriz Nunes</strong></td>
                  <td>Ciência de Dados · 10º</td>
                  <td>160/200h</td>
                  <td><span className="faltam-red">40h</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <a href="#" className="export-link">📊 Exportar relatório semanal.</a>

        </div>

        <footer>SIA Ibmec · Projeto em Ciência de Dados I — 2026.1 · Bernardo, Carlos, Julia, Leonardo, Matheus e Pietro</footer>
      </div>
    </div>

  )

}

export default Secretaria    