# Validação de Formulário com HTML, CSS e JavaScript

Um formulário moderno e responsivo de cadastro com validação em tempo real e atualizações visuais para nome de usuário, email, senha e confirmação de senha.

## Funcionalidades

- **Feedback Dinâmico**: As bordas dos inputs mudam para verde quando válidas e para vermelho quando há erros.
- **Indicadores Visuais**: Ícones do FontAwesome de sucesso e erro aparecem dinamicamente baseado na validação.
- **Mensagens de Erro**: Exibe textos descritivos na parte inferior de cada campo inválido.
- **Validações Aplicadas**:
  - Obrigatoriedade de preenchimento de todos os campos.
  - Validação de formato de email usando expressões regulares (RegEx).
  - Exigência de senha com no mínimo 7 caracteres.
  - Verificação se as duas senhas digitadas são idênticas.

## Estrutura do Projeto

```text
├── index.html
├── style.css
└── script.js
```

## Instruções de Instalação

1. Salve os arquivos `index.html`, `style.css` e `script.js` na mesma pasta do seu projeto.
2. Certifique-se de manter o script do FontAwesome ou o link do kit ativo antes do fechamento da tag `</body>`.
3. Abra o arquivo `index.html` em qualquer navegador web para testar o formulário.
