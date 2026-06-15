const DB_VERSION = '8';
const VERSION_KEY = 'aac_db_version';

const KEYS = {
  atividades:   'aac_atividades',
  presencas:    'aac_presencas',
  solicitacoes: 'aac_solicitacoes',
  notificacoes: 'aac_notificacoes',
  alunos:       'aac_alunos',
};

// Limpa localStorage quando a versão muda
if (localStorage.getItem(VERSION_KEY) !== DB_VERSION) {
  Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  ['aac_notificacoes_aluno', 'aac_notificacoes_coordenador', 'aac_notificacoes_secretaria']
    .forEach((k) => localStorage.removeItem(k));
  localStorage.setItem(VERSION_KEY, DB_VERSION);
}

// ── helpers ────────────────────────────────────────────────────

async function fetchApi() {
  const r = await fetch('/api.json');
  if (!r.ok) throw new Error('api.json não encontrado');
  return r.json();
}

function lsGet(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

function lsSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
}

// Retorna do localStorage se existir, senão busca da api.json e salva
async function getCollection(key, apiKey) {
  const cached = lsGet(key);
  if (cached !== null) return cached;
  const api = await fetchApi();
  return lsSave(key, api[apiKey] ?? []);
}

// ── Atividades ─────────────────────────────────────────────────

export async function getAtividades() {
  return getCollection(KEYS.atividades, 'atividades');
}

export async function addAtividade(atividade) {
  const list = await getAtividades();
  const nova = { ...atividade, id: Date.now().toString() };
  lsSave(KEYS.atividades, [...list, nova]);
  return nova;
}

// ── Solicitações ───────────────────────────────────────────────

export async function getSolicitacoes() {
  return getCollection(KEYS.solicitacoes, 'solicitacoes');
}

export async function getSolicitacoesPendentes() {
  const todas = await getSolicitacoes();
  return todas.filter((s) => s.status === 'pendente' && s.matricula !== '202508560348');
}

export async function getSolicitacoesAluno(matricula = '202508560348') {
  const todas = await getSolicitacoes();
  return todas.filter((s) => s.matricula === matricula);
}

export async function atualizarSolicitacao(id, status, motivo = null) {
  const list = await getSolicitacoes();
  const idx = list.findIndex((s) => s.id === id);
  if (idx !== -1) {
    list[idx].status = status;
    if (motivo) list[idx].motivo = motivo;
    lsSave(KEYS.solicitacoes, list);
    return list[idx];
  }
  return null;
}

// ── Notificações ───────────────────────────────────────────────

export async function getNotificacoes(perfil = 'aluno') {
  const todas = await getCollection(KEYS.notificacoes, 'notificacoes');
  const publico = perfil === 'aluno' ? 'aluno' : 'staff';
  return todas.filter((n) => n.publico === publico || n.publico === 'todos');
}

// ── Alunos ─────────────────────────────────────────────────────

export async function getAlunos() {
  return getCollection(KEYS.alunos, 'alunos');
}

export async function getAlunosEmRisco() {
  const todos = await getAlunos();
  return todos.filter((a) => a.cumprido / a.total < 0.8);
}

// ── Presenças (só localStorage, não vem da api.json) ──────────

export function getPresencas() {
  return lsGet(KEYS.presencas) ?? [];
}

export function getPresencaById(id) {
  return getPresencas().find((p) => p.id === id) ?? null;
}

export function addPresenca(presenca) {
  const list = getPresencas();
  const nova = { ...presenca, id: Date.now().toString(), timestamp: new Date().toISOString(), verificado: false };
  lsSave(KEYS.presencas, [...list, nova]);
  return nova;
}

export function verificarPresenca(presencaId) {
  const list = getPresencas();
  const idx = list.findIndex((p) => p.id === presencaId);
  if (idx !== -1) {
    list[idx].verificado = true;
    list[idx].verificadoEm = new Date().toISOString();
    lsSave(KEYS.presencas, list);
    return list[idx];
  }
  return null;
}

export function addPresencaVerificada(presenca) {
  const agora = new Date().toISOString();
  const nova = { ...presenca, id: Date.now().toString(), timestamp: agora, verificado: true, verificadoEm: agora };
  lsSave(KEYS.presencas, [...getPresencas(), nova]);
  return nova;
}
