// ── versão do banco — incremente ao mudar qualquer seed ────────
const DB_VERSION = '5';
const VERSION_KEY = 'aac_db_version';

// ── chaves localStorage ────────────────────────────────────────
const KEYS = {
  atividades:   'aac_atividades',
  presencas:    'aac_presencas',
  solicitacoes: 'aac_solicitacoes',
  notificacoes: 'aac_notificacoes',
  alunos:       'aac_alunos',
};

// Limpa chaves antigas e força re-seed quando a versão muda
const CHAVES_ANTIGAS = [
  'aac_notificacoes_aluno',
  'aac_notificacoes_coordenador',
  'aac_notificacoes_secretaria',
];

function inicializarBanco() {
  if (localStorage.getItem(VERSION_KEY) !== DB_VERSION) {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
    CHAVES_ANTIGAS.forEach((k) => localStorage.removeItem(k));
    localStorage.setItem(VERSION_KEY, DB_VERSION);
  }
}

inicializarBanco();

// ── seeds ──────────────────────────────────────────────────────

const SEED_ATIVIDADES = [
  { id: 'a1', nome: 'Palestra: Mercado Financeiro', tipo: 'externa', categoria: 'Evento', data: '2026-06-20', horas: 2,  descricao: 'Palestra com profissionais do mercado financeiro sobre tendências 2026.', local: 'Auditório A' },
  { id: 'a2', nome: 'Workshop de Excel Avançado',   tipo: 'externa', categoria: 'Curso livre', data: '2026-06-25', horas: 4,  descricao: 'Workshop prático de Excel com foco em análise de dados.', local: 'Lab 3' },
  { id: 'a3', nome: 'Reunião Empresa Júnior',        tipo: 'interna', categoria: 'Extensão Universitária', data: '2026-06-18', horas: 1,  descricao: 'Reunião semanal da empresa júnior IBMEC.', local: 'Sala 210' },
  { id: 'a4', nome: 'Congresso de Engenharia',       tipo: 'externa', categoria: 'Evento', data: '2026-07-05', horas: 8,  descricao: 'Congresso anual com apresentações de trabalhos acadêmicos.', local: 'Centro de Convenções' },
  { id: 'a5', nome: 'Hackathon Data Science 2026',   tipo: 'externa', categoria: 'Evento', data: '2026-05-10', horas: 16, descricao: 'Maratona de dados com equipes de todos os cursos.', local: 'Campus IBMEC' },
  { id: 'a6', nome: 'Monitoria de Cálculo II',       tipo: 'interna', categoria: 'Monitoria', data: '2026-03-01', horas: 60, descricao: 'Monitoria semestral de Cálculo II.', local: 'Sala 105' },
  { id: 'a7', nome: 'Curso Python — FGV Online',     tipo: 'externa', categoria: 'Curso livre', data: '2026-04-02', horas: 30, descricao: 'Curso online de Python com foco em ciência de dados.', local: 'Online' },
  { id: 'a8', nome: 'Estágio não obrigatório — TechCorp', tipo: 'externa', categoria: 'Estágio não obrig.', data: '2026-03-15', horas: 40, descricao: 'Estágio em desenvolvimento de software.', local: 'TechCorp — Barra da Tijuca' },
  { id: 'a9', nome: 'Curso de Machine Learning — Bradesco', tipo: 'externa', categoria: 'Curso livre', data: '2026-04-15', horas: 40, descricao: 'Curso de ML com certificação Bradesco.', local: 'Online' },
  { id: 'a10', nome: 'Palestra: IA Summit 2026',     tipo: 'externa', categoria: 'Evento', data: '2026-03-18', horas: 4,  descricao: 'Painel sobre Inteligência Artificial e futuro do trabalho.', local: 'Auditório B' },
];

const SEED_SOLICITACOES = [
  // fila de validação (coordenador) — solicitações de outros alunos
  { id: 'sol1', alunoNome: 'Maria Oliveira',  matricula: '2023001', curso: 'Ciência de Dados', periodo: '7º', atividade: 'Curso Python — FGV Online',            local: 'Online',                    horas: 30, categoria: 'Curso livre',        data: '2026-04-02', status: 'pendente',  formando: true,  arquivo: 'certificado_python_fgv.pdf',      aviso: 'Aluna já tem 25h em cursos livres (limite: 30h)' },
  { id: 'sol2', alunoNome: 'Pedro Santos',    matricula: '2023002', curso: 'Engenharia',       periodo: '6º', atividade: 'Monitoria de Cálculo II',               local: 'Sala 105',                  horas: 60, categoria: 'Monitoria',          data: '2026-04-01', status: 'pendente',  formando: false, arquivo: 'declaracao_monitoria.pdf',        aviso: null },
  { id: 'sol3', alunoNome: 'Ana Costa',       matricula: '2023003', curso: 'Direito',          periodo: '8º', atividade: 'Congresso de Engenharia',               local: 'Centro de Convenções',      horas: 8,  categoria: 'Evento',             data: '2026-03-28', status: 'pendente',  formando: false, arquivo: 'certificado_congresso.pdf',       aviso: null },
  { id: 'sol4', alunoNome: 'Carlos Lima',     matricula: '2023004', curso: 'Administração',    periodo: '5º', atividade: 'Estágio não obrigatório — TechCorp',    local: 'TechCorp — Barra da Tijuca',horas: 40, categoria: 'Estágio não obrig.', data: '2026-03-15', status: 'pendente',  formando: false, arquivo: 'termo_estagio_techcorp.pdf',      aviso: null },
  // histórico do aluno logado (matricula 202508560348)
  { id: 'sol5', alunoNome: 'Leonardo',        matricula: '202508560348', curso: 'Engenharia', periodo: '6º', atividade: 'Monitoria de Cálculo II',               local: 'Sala 105',                  horas: 60, categoria: 'Monitoria',          data: '2026-03-20', status: 'aprovado',  formando: false, arquivo: 'declaracao_monitoria.pdf',        aviso: null },
  { id: 'sol6', alunoNome: 'Leonardo',        matricula: '202508560348', curso: 'Engenharia', periodo: '6º', atividade: 'Palestra: IA Summit 2026',              local: 'Auditório B',               horas: 4,  categoria: 'Evento',             data: '2026-03-18', status: 'reprovado', formando: false, arquivo: 'cert_ia_summit.pdf',              aviso: null, motivo: 'Certificado sem carga horária legível.' },
  { id: 'sol7', alunoNome: 'Leonardo',        matricula: '202508560348', curso: 'Engenharia', periodo: '6º', atividade: 'Curso Python — FGV Online',             local: 'Online',                    horas: 30, categoria: 'Curso livre',        data: '2026-04-02', status: 'pendente',  formando: false, arquivo: 'certificado_python_fgv.pdf',      aviso: null },
  { id: 'sol8', alunoNome: 'Leonardo',        matricula: '202508560348', curso: 'Engenharia', periodo: '6º', atividade: 'Hackathon Data Science 2026',           local: 'Campus IBMEC',              horas: 16, categoria: 'Evento',             data: '2026-02-10', status: 'aprovado',  formando: false, arquivo: 'cert_hackathon.pdf',              aviso: null },
  { id: 'sol9', alunoNome: 'Leonardo',        matricula: '202508560348', curso: 'Engenharia', periodo: '6º', atividade: 'Curso de Machine Learning — Bradesco',  local: 'Online',                    horas: 40, categoria: 'Curso livre',        data: '2026-04-15', status: 'pendente',  formando: false, arquivo: 'cert_ml_bradesco.pdf',            aviso: null },
];

// publico: 'aluno' | 'staff' (coordenador + secretaria) | 'todos'
const SEED_NOTIFICACOES = [
  { id: 'n1',  publico: 'aluno', tipo: 'green', titulo: '✅ Atividade aprovada',       corpo: '"Monitoria de Cálculo II" foi aprovada pelo coordenador.',                                    tempo: 'Há 2 horas'   },
  { id: 'n2',  publico: 'aluno', tipo: 'red',   titulo: '✕ Atividade reprovada',      corpo: '"Palestra: IA Summit 2026" não foi aceita. Motivo: sem carga horária.',                        tempo: 'Há 1 dia'     },
  { id: 'n3',  publico: 'aluno', tipo: 'amber', titulo: '⚠ Alerta de horas',          corpo: 'Você está com menos de 20% da carga no penúltimo semestre!',                                   tempo: 'Há 3 dias'    },
  { id: 'n4',  publico: 'aluno', tipo: 'blue',  titulo: '📎 Certificado recebido',    corpo: '"Curso Python — FGV Online" foi recebido e está em análise.',                                  tempo: 'Há 4 dias'    },
  { id: 'n5',  publico: 'aluno', tipo: 'green', titulo: '✅ Atividade aprovada',       corpo: '"Hackathon Data Science 2026" foi aprovado. +16h computadas.',                                 tempo: 'Há 5 dias'    },
  { id: 'n6',  publico: 'aluno', tipo: 'amber', titulo: '⚠ Prazo se aproximando',     corpo: 'Faltam 30 dias para o fim do semestre. Você ainda tem 50h a cumprir.',                         tempo: 'Há 1 semana'  },
  { id: 'n7',  publico: 'staff', tipo: 'amber', titulo: '⚠ Nova solicitação',         corpo: 'Maria Oliveira enviou "Curso Python — FGV Online" (30h) para validação.',                      tempo: 'Há 1 hora'    },
  { id: 'n8',  publico: 'staff', tipo: 'amber', titulo: '⚠ Nova solicitação',         corpo: 'Carlos Lima enviou "Estágio não obrigatório — TechCorp" (40h) para validação.',                tempo: 'Há 3 horas'   },
  { id: 'n9',  publico: 'staff', tipo: 'red',   titulo: '🚨 Formando em risco',       corpo: 'Maria Oliveira (Ciência de Dados · 7º) está próxima do limite de horas em cursos livres.',    tempo: 'Há 5 horas'   },
  { id: 'n10', publico: 'staff', tipo: 'amber', titulo: '⚠ Nova solicitação',         corpo: 'Ana Costa enviou "Congresso de Engenharia" (8h) para validação.',                              tempo: 'Há 1 dia'     },
  { id: 'n11', publico: 'staff', tipo: 'blue',  titulo: '📋 Fila atualizada',         corpo: '4 solicitações aguardam validação. 2 são de formandos.',                                       tempo: 'Há 1 dia'     },
  { id: 'n12', publico: 'staff', tipo: 'green', titulo: '✅ Validação concluída',      corpo: 'Aprovação de "Monitoria de Cálculo II" de Pedro Santos registrada.',                           tempo: 'Há 2 dias'    },
  { id: 'n13', publico: 'staff', tipo: 'red',   titulo: '🚨 Alunos em risco',         corpo: '5 formandos estão com horas insuficientes para o semestre 2026.1.',                            tempo: 'Há 2 dias'    },
  { id: 'n14', publico: 'staff', tipo: 'blue',  titulo: '📊 Relatório disponível',    corpo: 'O relatório semanal de AAC do período 2026.1 está pronto para exportação.',                   tempo: 'Há 3 dias'    },
  { id: 'n15', publico: 'staff', tipo: 'green', titulo: '✅ Presença registrada',      corpo: '12 presenças foram verificadas na "Palestra: Mercado Financeiro".',                            tempo: 'Há 3 dias'    },
  { id: 'n16', publico: 'staff', tipo: 'red',   titulo: '🚨 Prazo de entrega',        corpo: 'Ana Costa (Direito · 10º) não entregou documentação complementar até o prazo.',                tempo: 'Há 4 dias'    },
];

const SEED_ALUNOS = [
  { id: 'al1', nome: 'Ana Costa',      curso: 'Ciência de Dados', periodo: '9º', cumprido: 140, total: 200 },
  { id: 'al2', nome: 'Carlos Lima',    curso: 'Engenharia',       periodo: '9º', cumprido: 100, total: 200 },
  { id: 'al3', nome: 'Mariana Souza',  curso: 'Direito',          periodo: '10º', cumprido: 80, total: 200 },
  { id: 'al4', nome: 'Felipe Moura',   curso: 'Administração',    periodo: '9º', cumprido: 120, total: 200 },
  { id: 'al5', nome: 'Beatriz Nunes',  curso: 'Ciência de Dados', periodo: '10º', cumprido: 160, total: 200 },
];

// ── helpers internos ───────────────────────────────────────────

function load(key, seed) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ── API: atividades ────────────────────────────────────────────

export function getAtividades() {
  return load(KEYS.atividades, SEED_ATIVIDADES);
}

export function addAtividade(atividade) {
  const list = getAtividades();
  const nova = { ...atividade, id: Date.now().toString() };
  list.push(nova);
  save(KEYS.atividades, list);
  return nova;
}

// ── API: solicitações ──────────────────────────────────────────

export function getSolicitacoes() {
  return load(KEYS.solicitacoes, SEED_SOLICITACOES);
}

export function getSolicitacoesPendentes() {
  return getSolicitacoes().filter((s) => s.status === 'pendente' && s.matricula !== '202508560348');
}

export function getSolicitacoesAluno(matricula = '202508560348') {
  return getSolicitacoes().filter((s) => s.matricula === matricula);
}

export function atualizarSolicitacao(id, status, motivo = null) {
  const list = getSolicitacoes();
  const idx = list.findIndex((s) => s.id === id);
  if (idx !== -1) {
    list[idx].status = status;
    if (motivo) list[idx].motivo = motivo;
    save(KEYS.solicitacoes, list);
    return list[idx];
  }
  return null;
}

// ── API: notificações ──────────────────────────────────────────

export function getNotificacoes(perfil = 'aluno') {
  const todas = load(KEYS.notificacoes, SEED_NOTIFICACOES);
  const publico = perfil === 'aluno' ? 'aluno' : 'staff';
  return todas.filter((n) => n.publico === publico || n.publico === 'todos');
}

// ── API: alunos em risco ───────────────────────────────────────

export function getAlunos() {
  return load(KEYS.alunos, SEED_ALUNOS);
}

export function getAlunosEmRisco() {
  return getAlunos().filter((a) => a.cumprido / a.total < 0.8);
}

// ── API: presenças ─────────────────────────────────────────────

export function getPresencas() {
  const raw = localStorage.getItem(KEYS.presencas);
  return raw ? JSON.parse(raw) : [];
}

export function addPresenca(presenca) {
  const list = getPresencas();
  const nova = { ...presenca, id: Date.now().toString(), timestamp: new Date().toISOString(), verificado: false };
  list.push(nova);
  save(KEYS.presencas, list);
  return nova;
}

export function verificarPresenca(presencaId) {
  const list = getPresencas();
  const idx = list.findIndex((p) => p.id === presencaId);
  if (idx !== -1) {
    list[idx].verificado = true;
    list[idx].verificadoEm = new Date().toISOString();
    save(KEYS.presencas, list);
    return list[idx];
  }
  return null;
}

export function getPresencaById(id) {
  return getPresencas().find((p) => p.id === id) || null;
}
