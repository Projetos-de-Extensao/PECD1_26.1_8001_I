const ATIVIDADES_KEY = 'aac_atividades';
const PRESENCAS_KEY = 'aac_presencas';

const seed = [
  {
    id: '1',
    nome: 'Palestra: Mercado Financeiro',
    tipo: 'externa',
    data: '2026-06-20',
    horas: 2,
    descricao: 'Palestra com profissionais do mercado financeiro sobre tendências 2026.',
    local: 'Auditório A',
  },
  {
    id: '2',
    nome: 'Workshop de Excel Avançado',
    tipo: 'externa',
    data: '2026-06-25',
    horas: 4,
    descricao: 'Workshop prático de Excel com foco em análise de dados.',
    local: 'Lab 3',
  },
  {
    id: '3',
    nome: 'Reunião Empresa Júnior',
    tipo: 'interna',
    data: '2026-06-18',
    horas: 1,
    descricao: 'Reunião semanal da empresa júnior IBMEC.',
    local: 'Sala 210',
  },
  {
    id: '4',
    nome: 'Congresso de Engenharia',
    tipo: 'externa',
    data: '2026-07-05',
    horas: 8,
    descricao: 'Congresso anual com apresentações de trabalhos acadêmicos.',
    local: 'Centro de Convenções',
  },
];

export function getAtividades() {
  const raw = localStorage.getItem(ATIVIDADES_KEY);
  if (!raw) {
    localStorage.setItem(ATIVIDADES_KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
}

export function addAtividade(atividade) {
  const list = getAtividades();
  const nova = { ...atividade, id: Date.now().toString() };
  list.push(nova);
  localStorage.setItem(ATIVIDADES_KEY, JSON.stringify(list));
  return nova;
}

export function getPresencas() {
  const raw = localStorage.getItem(PRESENCAS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function addPresenca(presenca) {
  const list = getPresencas();
  const nova = {
    ...presenca,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    verificado: false,
  };
  list.push(nova);
  localStorage.setItem(PRESENCAS_KEY, JSON.stringify(list));
  return nova;
}

export function verificarPresenca(presencaId) {
  const list = getPresencas();
  const idx = list.findIndex((p) => p.id === presencaId);
  if (idx !== -1) {
    list[idx].verificado = true;
    list[idx].verificadoEm = new Date().toISOString();
    localStorage.setItem(PRESENCAS_KEY, JSON.stringify(list));
    return list[idx];
  }
  return null;
}

export function findPresenca(matricula, atividadeId) {
  return getPresencas().find(
    (p) => p.matricula === matricula && p.atividadeId === atividadeId
  ) || null;
}

export function getPresencaById(id) {
  return getPresencas().find((p) => p.id === id) || null;
}
