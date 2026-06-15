import seedData from './data/seed.json';

const BASE = 'http://localhost:3001';
const TIMEOUT_MS = 500; // se o servidor não responder em 500ms, usa localStorage

const KEYS = {
  atividades:   'aac_atividades',
  solicitacoes: 'aac_solicitacoes',
  notificacoes: 'aac_notificacoes',
  alunos:       'aac_alunos',
  presencas:    'aac_presencas',
};

// ── helpers ────────────────────────────────────────────────────

function lsGet(key, seed) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch { /* ignore */ }
  localStorage.setItem(key, JSON.stringify(seed));
  return seed;
}

function lsSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
}

async function apiFetch(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(`${BASE}${path}`, { ...options, signal: controller.signal });
    clearTimeout(timer);
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

const JSON_HEADERS = { 'Content-Type': 'application/json' };

// ── Atividades ─────────────────────────────────────────────────

export async function getAtividades() {
  try { return await apiFetch('/atividades'); }
  catch { return lsGet(KEYS.atividades, seedData.atividades); }
}

export async function addAtividade(atividade) {
  const nova = { ...atividade, id: Date.now().toString() };
  try {
    return await apiFetch('/atividades', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(nova) });
  } catch {
    const list = lsGet(KEYS.atividades, seedData.atividades);
    lsSave(KEYS.atividades, [...list, nova]);
    return nova;
  }
}

// ── Solicitações ───────────────────────────────────────────────

export async function getSolicitacoes() {
  try { return await apiFetch('/solicitacoes'); }
  catch { return lsGet(KEYS.solicitacoes, seedData.solicitacoes); }
}

export async function getSolicitacoesPendentes() {
  const todas = await getSolicitacoes();
  return todas.filter((s) => s.status === 'pendente' && s.matricula !== '202508560348');
}

export async function getSolicitacoesAluno(matricula = '202508560348') {
  try {
    return await apiFetch(`/solicitacoes?matricula=${matricula}`);
  } catch {
    const todas = lsGet(KEYS.solicitacoes, seedData.solicitacoes);
    return todas.filter((s) => s.matricula === matricula);
  }
}

export async function atualizarSolicitacao(id, status, motivo = null) {
  const body = { status, ...(motivo && { motivo }) };
  try {
    return await apiFetch(`/solicitacoes/${id}`, { method: 'PATCH', headers: JSON_HEADERS, body: JSON.stringify(body) });
  } catch {
    const list = lsGet(KEYS.solicitacoes, seedData.solicitacoes);
    const idx = list.findIndex((s) => s.id === id);
    if (idx !== -1) { Object.assign(list[idx], body); lsSave(KEYS.solicitacoes, list); return list[idx]; }
    return null;
  }
}

// ── Notificações ───────────────────────────────────────────────

export async function getNotificacoes(perfil = 'aluno') {
  const publico = perfil === 'aluno' ? 'aluno' : 'staff';
  try {
    const todas = await apiFetch('/notificacoes');
    return todas.filter((n) => n.publico === publico || n.publico === 'todos');
  } catch {
    const todas = lsGet(KEYS.notificacoes, seedData.notificacoes);
    return todas.filter((n) => n.publico === publico || n.publico === 'todos');
  }
}

// ── Alunos ─────────────────────────────────────────────────────

export async function getAlunos() {
  try { return await apiFetch('/alunos'); }
  catch { return lsGet(KEYS.alunos, seedData.alunos); }
}

export async function getAlunosEmRisco() {
  const todos = await getAlunos();
  return todos.filter((a) => a.cumprido / a.total < 0.8);
}

// ── Presenças ──────────────────────────────────────────────────

export async function getPresencas() {
  try { return await apiFetch('/presencas'); }
  catch {
    const raw = localStorage.getItem(KEYS.presencas);
    return raw ? JSON.parse(raw) : [];
  }
}

export async function getPresencaById(id) {
  try {
    const r = await fetch(`${BASE}/presencas/${id}`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!r.ok) return null;
    return r.json();
  } catch {
    const list = await getPresencas();
    return list.find((p) => p.id === id) || null;
  }
}

export async function addPresenca(presenca) {
  const nova = { ...presenca, id: Date.now().toString(), timestamp: new Date().toISOString(), verificado: false };
  try {
    return await apiFetch('/presencas', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(nova) });
  } catch {
    const list = await getPresencas();
    lsSave(KEYS.presencas, [...list, nova]);
    return nova;
  }
}

export async function verificarPresenca(id) {
  const body = { verificado: true, verificadoEm: new Date().toISOString() };
  try {
    return await apiFetch(`/presencas/${id}`, { method: 'PATCH', headers: JSON_HEADERS, body: JSON.stringify(body) });
  } catch {
    const list = await getPresencas();
    const idx = list.findIndex((p) => p.id === id);
    if (idx !== -1) { Object.assign(list[idx], body); lsSave(KEYS.presencas, list); return list[idx]; }
    return null;
  }
}

export async function addPresencaVerificada(presenca) {
  const agora = new Date().toISOString();
  const nova = { ...presenca, id: Date.now().toString(), timestamp: agora, verificado: true, verificadoEm: agora };
  try {
    return await apiFetch('/presencas', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(nova) });
  } catch {
    const list = await getPresencas();
    lsSave(KEYS.presencas, [...list, nova]);
    return nova;
  }
}
