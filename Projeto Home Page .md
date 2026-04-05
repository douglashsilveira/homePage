# Projeto: Home Page Personalizada

## 1. Pesquisa e Ferramentas
- **Ícones:** Usaremos Phosphor Icons ou Lucide para um visual consistente e moderno.
- **Armazenamento:** `localStorage` para salvar os links e configurações sem necessidade de banco de dados externo.

## 2. Testes Iniciais (TDD)
- **Caso 1:** Usuário clica em um ícone vazio -> Deve abrir modal para inserir Nome e URL.
- **Caso 2:** Usuário arrasta um ícone para nova posição -> A nova ordem deve persistir após o reload.
- **Caso 3:** Pesquisa na barra central -> Deve redirecionar para o Google com o termo digitado.

## 3. Design System (style.css)
- Cores: Violeta Suave (#B39DDB), Dark Glass (rgba(255, 255, 255, 0.1)), Texto Branco/Suave.
- Efeitos: Hover com blur e scale, transições suaves de 0.3s.


## 4. Desenvolvimento

# Implementação da Home Page Editável

## User Review Required
> [!IMPORTANT]
> Para a Agenda, precisarei que você me forneça o **Link de Incorporação (Embed)** da sua Agenda do Google ou o seu **ID da Agenda** (geralmente seu e-mail) se ela for pública. Caso contrário, usaremos um placeholder de agenda para você substituir depois.

## Proposed Changes

### [Componente: Layout & Estilo]
#### [NEW] index.html
#### [NEW] style.css

### [Componente: Lógica de Atalhos]
#### [NEW] app.js
- Implementar a grade de 15 ícones.
- Lógica de `localStorage.getItem('shortcuts')`.
- Função `editShortcut(index)` para atualizar dados.

### [Componente: Agenda]
- Container fixo à direita com iframe do Google Calendar.

## Open Questions
- Você prefere que a barra de pesquisa no topo use o Google ou outro buscador por padrão?
- Deseja que as cores mudem automaticamente (Modo Escuro/Claro) ou fixamos no "Violeta Suave" premium?

## Verification Plan
1. Abrir `index.html` no navegador.
2. Adicionar um link em um dos 15 slots.
3. Recarregar a página e verificar se o link persiste.
4. Testar a responsividade da agenda em diferentes tamanhos de janela.
