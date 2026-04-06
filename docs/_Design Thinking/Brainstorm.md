---
id: brainstorm
title: Brainstorm
---
 
## Introdução
<p align = "justify">
O brainstorm é uma técnica de elicitação de requisitos que consiste em reunir a equipe e discutir sobre diversos tópicos gerais do projeto apresentados no documento problema de negócio. No brainstorm o diálogo é incentivado e críticas são evitadas para permitir que todos colaborem com suas próprias ideias.
</p>
 
## Metodologia
<p align = "justify">
A equipe se reuniu para debater ideias gerais sobre o projeto via Notion onde cada um compartilhou suas ideias, começou e terminou no domingo dia 5.
</p>
 
## Brainstorm
 
## Versão 1.0
 
## Perguntas
 
### 1. Qual o objetivo principal da aplicação?

<p align = "justify">
 
<b>Leonardo</b> - Deve ser uma plataforma onde qualquer aluno possa adicionar e acompanhar suas horas de AAC de forma simples, sem depender de e-mail ou da secretaria para saber o status.
-A plataforma deve fornecer uma visão centralizada do progresso de cada aluno, permitindo que coordenadores validem certificados e que a secretaria homologue tudo em um único lugar.
— O objetivo da aplicação é eliminar o processo manual de validação de horas, automatizando a triagem dos certificados enviados e reduzindo o tempo de resposta para o aluno.
— O principal objetivo é criar um sistema que conecte os três atores — aluno, coordenador e secretaria — em um fluxo único e rastreável, do envio do certificado até o lançamento no histórico.
— A plataforma deve gerenciar todo o ciclo das atividades complementares, desde o catálogo de atividades válidas por curso até a notificação automática do aluno sobre o resultado da análise.

</p>
 
---
 
### 2. Como será o processo para cadastrar um novo usuário?
 
<p align = "justify">
Julia — O cadastro deve ser vinculado ao e-mail institucional do Ibmec, garantindo que apenas alunos, coordenadores e funcionários da secretaria consigam acessar a plataforma. O aluno ao se cadastrar deve informar o curso e o período atual. O sistema já carrega automaticamente a carga horária exigida e o catálogo de atividades válidas para aquele curso. Com o usuário logado pela primeira vez, ele deve passar por uma etapa de confirmação do curso e período. O coordenador responsável pelo curso deve ser associado automaticamente. O coordenador deve ter um perfil diferente do aluno na hora do cadastro, já com acesso à fila de solicitações do seu curso assim que o login for concluído. A secretaria deve conseguir acessar a visão geral de todos os cursos, não apenas um, o que diferencia seu perfil dos demais.
</p>


---
 
### 3. Como será o processo de envio de um certificado de atividade? 
 
<p align = "justify">
<b>Carlos</b> - O aluno deve fazer upload do PDF ou imagem do certificado. O sistema lê automaticamente o documento e pré-preenche os campos de carga horária, instituição emissora e data.
— O certificado deve ter validação automática básica antes de ir para o coordenador: se não tiver carga horária legível ou data, o sistema já avisa o aluno que o documento está incompleto.
— O processo deve ser feito em uma tela única, sem etapas desnecessárias. O aluno sobe o arquivo, confirma os dados extraídos automaticamente e envia — tudo em menos de dois minutos.
— Cada certificado deve ser associado a uma categoria do catálogo de atividades. O próprio sistema pode sugerir a categoria com base no conteúdo extraído, e o aluno confirma ou corrige.
— O produto deve registrar a data e hora exata do envio para fins de auditoria, e o aluno deve receber uma confirmação imediata de que o certificado foi recebido.
</p>

 
---
 
### 4. Como o coordenador irá validar as atividades enviadas?

<p align = "justify">
<b>Bernardo</b> - O coordenador deve ter uma fila de solicitações ordenada por data de envio, com o preview do certificado e os dados extraídos já visíveis na mesma tela, sem precisar baixar nada. A validação deve ter dois botões claros: aprovar e reprovar. Em caso de reprovação, é obrigatório informar o motivo, que será exibido diretamente para o aluno na plataforma. O sistema deve aplicar as regras do catálogo automaticamente antes da análise humana. Se o tipo de atividade já ultrapassou o teto de horas do aluno, o coordenador vê um alerta antes de aprovar. O coordenador deve poder editar as horas aprovadas caso o documento indique uma carga diferente da solicitada pelo aluno e essa edição deve ficar registrada no histórico. Deve ser possível filtrar a fila por curso, período e status, para que o coordenador consiga priorizar alunos formandos que estão com horas em aberto.
</p>


---
 
### 5. Quais informações o aluno precisa visualizar na plataforma?

<p align = "justify">
<b>Mateus</b> - Com a localização das horas em um painel visual, o aluno deve ver de imediato quantas horas já foram aprovadas, quantas estão em análise e quantas ainda faltam para atingir a meta do curso. 
 - O aluno deve poder acessar o histórico completo de todas as solicitações, com data de envio, status atual e motivo em caso de reprovação. 
 - O aluno deve ver o catálogo de atividades válidas para o seu curso com os limites por categoria já indicados, para não enviar certificados de atividades que não serão aceitas. 
 - O aluno deve receber alertas automáticos quando estiver a menos de 20% da carga horária no penúltimo semestre, evitando surpresas na colação de grau.
 - O usuário deve poder acessar um relatório exportável com o resumo das suas horas para apresentar à secretaria ou à coordenação quando necessário.
</p>


---
 
### 6. Como seria o sistema de notificações e acompanhamento de status

<p align = "justify">
<b>Pietro</b> - Toda mudança de status — envio recebido, em análise, aprovado, reprovado — deve gerar uma notificação automática para o aluno, sem que ele precise entrar na plataforma para descobrir.
— As notificações devem ser enviadas por e-mail e também visíveis dentro da própria plataforma, para que o aluno tenha acesso mesmo que não cheque o e-mail.
— A secretaria deve receber um relatório automático semanal com alunos em risco de não colação, ou seja, formandos com horas insuficientes no semestre atual.
— O coordenador deve ser notificado quando houver solicitações pendentes há mais de 7 dias na fila, para evitar que certificados fiquem sem análise por longos períodos.
— Toda ação na plataforma deve gerar um log de auditoria — quem fez, o quê, quando — acessível para a secretaria e a coordenação em caso de contestação.
</p>
 
### Requisitos elicitados
 
|ID|Descrição|
|----|-------------|
|BS01| O sistema deve permitir que o aluno faça upload de certificados em formato PDF ou imagem|
|BS02| O sistema deve extrair automaticamente os dados do certificado (carga horária, instituição, data) via OCR|
|BS03| O sistema deve pré-preencher o formulário de solicitação com os dados extraídos, permitindo edição pelo aluno.|
|BS04| O sistema deve validar se o documento possui carga horária e data legíveis antes de enviar para análise.|
|BS05| O sistema deve associar o certificado a uma categoria do catálogo e sugerir a categoria automaticamente.|
|BS06| O aluno deve visualizar um dashboard com horas aprovadas, em análise e faltantes em relação à meta do curso.|
|BS07| O aluno deve acessar o histórico completo de solicitações com status e motivo de reprovação quando aplicável.|
|BS08| O aluno deve ser notificado por e-mail e pela plataforma a cada mudança de status de suas solicitações.|
|BS09| O aluno deve receber alerta automático ao atingir menos de 20% da carga exigida no penúltimo semestre.|
|BS10| O coordenador deve acessar uma fila de solicitações com preview do certificado e dados extraídos na mesma tela.|
|BS11| O coordenador deve poder aprovar ou reprovar uma solicitação, sendo o motivo obrigatório em caso de reprovação.|
|BS12| O coordenador deve poder editar as horas aprovadas quando divergirem do documento, com registro em log.|
|BS13| O sistema deve alertar o coordenador quando o tipo de atividade ultrapassar o teto de horas do aluno.|
|BS14| A secretaria deve acessar relatório de alunos formandos com horas insuficientes no semestre vigente.|
|BS15| Todas as ações na plataforma devem gerar log de auditoria com usuário, ação e timestamp.|
 
## Conclusão
<p align = "justify">
Através da aplicação da técnica, foi possível elicitar alguns dos primeiros requisitos do projeto.
</p>
## Referências Bibliográficas
 
> BARBOSA, S. D. J; DA SILVA, B. S. Interação humano-computador. Elsevier, 2010.
 
 
## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| 05/04/2026 | 1.0 | Atualização do documento | Matheus , Julia, Carlos, Bernardo, Leonardo e Pietro |
