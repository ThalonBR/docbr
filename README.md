# 📜 @thalonbr/docbr

Validador completo de documentos brasileiros (CPF e CNPJ), com suporte a entradas **numéricas**, **formatadas** e **alfanuméricas**.

Desenvolvido com **TypeScript**, oferece tipagem forte, sem dependências externas e preparado para o futuro padrão de CNPJ com letras.

---

## ⚠️ Aviso importante

📅 A partir de **26 de julho de 2026**, a Receita Federal permitirá **CNPJs com valores alfanuméricos** para novos cadastros.  
Esta biblioteca **já está preparada** para lidar com esse novo formato de CNPJ.

---

## 🚀 Instalação

\`\`\`bash
npm install @thalonbr/docbr
\`\`\`

ou

\`\`\`bash
yarn add @thalonbr/docbr
\`\`\`

---

## ✨ Funcionalidades

- ✅ Validação precisa de **CPF**
- ✅ Validação de **CNPJ**, incluindo:
  - Números puros (\`11222333000181\`)
  - Formatado (\`11.222.333/0001-81\`)
  - Alfanumérico (\`AB122333000181\`) ✅
- ✅ Escrita 100% em **TypeScript**
- ✅ Tipagem estática e segura
- ✅ Preenchimento automático de zeros
- ✅ Validação por **dígitos verificadores**

---

## 📦 Uso

\`\`\`ts
import { isValidCPF, isCNPJValid } from '@thalonbr/docbr';
\`\`\`

### ✅ Validar CPF

\`\`\`ts
isValidCPF('123.456.789-09'); // false
isValidCPF('11144477735');    // true
isValidCPF('111.444.777-35'); // true
\`\`\`

### ✅ Validar CNPJ

\`\`\`ts
isCNPJValid('11222333000181');           // true
isCNPJValid('11.222.333/0001-81');       // true
isCNPJValid('AB122333000181');           // true (desde que dígitos verificadores sejam válidos)
\`\`\`

---

## 📘 Assinaturas das funções

### \`isValidCPF(cpf: string): boolean\`

Valida CPFs com ou sem pontuação. Ex:

- \`'123.456.789-09'\`
- \`'11144477735'\`

Regras:
- Aceita CPF incompleto e preenche com zeros à esquerda.
- Rejeita CPFs com todos os dígitos repetidos.
- Calcula e valida os dois dígitos verificadores.

---

### \`isCNPJValid(cnpj: string): boolean\`

Valida CNPJs com ou sem pontuação, inclusive alfanuméricos. Ex:

- \`'11.222.333/0001-81'\`
- \`'11222333000181'\`
- \`'AB122333000181'\`

Regras:
- Remove pontuações e símbolos.
- Aceita valores alfanuméricos (compatível com 2026).
- Preenche com zeros à esquerda se necessário.
- Calcula os dois dígitos verificadores com base nos 12 primeiros caracteres.

---

## 🧪 Exemplos reais

\`\`\`ts
isValidCPF('529.982.247-25'); // true
isValidCPF('111.111.111-11'); // false

isCNPJValid('04.252.011/0001-10'); // true
isCNPJValid('AB123456000100');     // false (dígitos inválidos)
\`\`\`

---

## 📂 Estrutura do Projeto

\`\`\`
@thalonbr/docbr
├── src/
│   ├── isValidCPF.ts
│   ├── isCNPJValid.ts
│   └── utils/
│       └── string.utils.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

---

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Regex + cálculo de dígitos verificadores
- Sem dependências externas

---

## 🪪 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

Feito com 💛 por [@thalonbr](https://github.com/thalonbr)
