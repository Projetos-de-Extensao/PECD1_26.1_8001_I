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
 
### 5. "Outras perguntas pertinentes ao contexto", Como seria a forma de adicionar do cliente adicionar os produtos ?
<p align = "justify">
<b>XXX</b> - O cliente....
</p>
 
### 6. Quais informações seriam interessante para o cliente?
<p align = "justify">
   <b>XXX</b> - Informações...
   
   <b>ZZZZ</b> - O cliente usuário poderá acessar informações...

   <b>WWWWs</b> - O usuário poderá ver scouts de partidas do torneio, ver as regras dos torneios, locais e data das partidas.
   
</p>
 
### Requisitos elicitados
 
|ID|Descrição|
|----|-------------|
|BS01| O cliente...|
|BS02| O cliente...|
|BS03| O cliente...|
|BS04| O cliente...|
|BS05| O cliente...|
|BS06| O cliente...|
|BS07| O cliente...|
|BS08| O cliente...|
|BS09| O cliente...|
|BS10| O produto...|
|BS11| O produto...|
|BS12| O produto...|
|BS13| O produto...|
|BS14| O produto...|
|BS15| O produto...|
 
## Conclusão
<p align = "justify">
Através da aplicação da técnica, foi possível elicitar alguns dos primeiros requisitos do projeto.
</p>
## Referências Bibliográficas
 
> BARBOSA, S. D. J; DA SILVA, B. S. Interação humano-computador. Elsevier, 2010.
 
 
## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| DD/MM/YYYY | 1.0 | Criação do documento | XXX XXXX, XXXX XXXX, YYY YYYY e ZZZ XXXX |
