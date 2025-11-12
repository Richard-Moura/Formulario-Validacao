# Desafio: Formulário com Validação e Responsividade

Este projeto é um formulário de contato moderno e responsivo, com validação de campos em tempo real utilizando **HTML, CSS e JavaScript puro**.

---

## 📄 Descrição

O formulário permite que usuários enviem mensagens com os seguintes campos obrigatórios:

- Nome completo
- E-mail
- Telefone
- Mensagem

Ele inclui:

- Validação de campos vazios.
- Validação de formato de e-mail.
- Mensagens de erro acessíveis com `aria-live`.
- Feedback visual de campos inválidos.
- Layout responsivo para dispositivos móveis e desktops.

---

## 🎨 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com variáveis CSS e media queries)
- **JavaScript** (DOM e validação de formulário)
- Fontes do Google Fonts: *DM Public Sans*

---


## ⚡ Funcionalidades

1. **Validação de campos obrigatórios**
   - Exibe mensagem de erro se o campo estiver vazio.
2. **Validação de e-mail**
   - Verifica se o formato do e-mail é válido.
3. **Feedback visual**
   - Campos inválidos recebem borda vermelha.
   - Mensagens de erro aparecem abaixo do campo.
4. **Responsividade**
   - Em telas pequenas, o formulário e o texto ficam em coluna.
   - Em telas grandes, ficam lado a lado.
5. **Acessibilidade**
   - Uso de `aria-describedby` e `aria-live` para mensagens de erro.
   - Labels escondidos com `.sr-only` para leitores de tela.


