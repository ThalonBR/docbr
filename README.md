# 📄 @thalonbr/docbr

Uma biblioteca leve e moderna para **validação de documentos brasileiros** (CPF e CNPJ), com suporte total a **CNPJ alfanumérico**, conforme especificações da Receita Federal para 2026.

---

## ✨ Recursos

- ✅ Validação precisa de **CPF**
- ✅ Validação de **CNPJ numérico**
- ✅ Validação de **CNPJ alfanumérico** (compatível com o novo formato válido a partir de **26 de julho de 2026**)
- ✅ Preenchimento automático de zeros à esquerda, se necessário
- ✅ Código limpo, modular e com mensagens de erro claras

---

## 🚀 Instalação

```bash
npm install @thalonbr/docbr
```

ou

```bash
yarn add @thalonbr/docbr
```

---

## 🛠️ Uso

### ✅ Validação de CPF

```ts
import { isValidCPF } from '@thalonbr/docbr'

const cpf1 = '123.456.789-09'
const cpf2 = '11144477735'

console.log(isValidCPF(cpf1)) // false
console.log(isValidCPF(cpf2)) // true
```

### ✅ Validação de CNPJ numérico

```ts
import { isCNPJValid } from '@thalonbr/docbr'

const cnpj = '11.222.333/0001-81'

console.log(isCNPJValid(cnpj)) // true ou false, dependendo do CNPJ
```

### ✅ Validação de CNPJ com letras (Alfanumérico)

```ts
import { isCNPJValid } from '@thalonbr/docbr'

const cnpjAlfanumerico = 'AB1222333000181' // 14 caracteres, letras são convertidas via algoritmo da Receita

console.log(isCNPJValid(cnpjAlfanumerico)) // true ou false, com base no DV calculado
```

### 🔍 Preenchimento com zeros à esquerda (automático)

```ts
import { isValidCPF, isCNPJValid } from '@thalonbr/docbr'

console.log(isValidCPF('123456789')) // false, mas tenta validar com zeros à esquerda
console.log(isCNPJValid('112223330001')) // idem
```

---

## 🧠 Como funciona

A biblioteca aplica os **algoritmos oficiais da Receita Federal** para cálculo dos dígitos verificadores de CPF e CNPJ.  
Para CNPJ alfanumérico, convertemos letras para valores numéricos com base na tabela de substituição da Receita, garantindo compatibilidade futura.

---

## 📌 Aviso Importante

> A Receita Federal anunciou que, **a partir de 26 de julho de 2026**, **novos CNPJs poderão conter letras** em sua composição.  
>  
> A biblioteca `@thalonbr/docbr` já está **100% preparada** para lidar com esse novo formato.  
> **Você pode validar CNPJs alfanuméricos com segurança desde já.**

---

## 📦 API

### `isValidCPF(cpf: string): boolean`

Valida um CPF com ou sem formatação.

- `cpf`: CPF em string, com ou sem pontuação (ex: `'123.456.789-09'` ou `'12345678909'`)
- Retorna `true` se válido, senão `false`
- Lança erro se o valor for vazio ou nulo

---

### `isCNPJValid(cnpj: string): boolean`

Valida um CNPJ com ou sem formatação. Suporta letras (formato 2026+).

- `cnpj`: CNPJ em string, com ou sem pontuação (ex: `'12.345.678/0001-90'`, `'12345678000190'` ou `'AB345678000190'`)
- Retorna `true` se válido, senão `false`
- Lança erro se o valor for vazio ou nulo

---

## 🧪 Testes

Você pode rodar testes unitários com:

```bash
npm test
```

---

## 🤝 Contribuições

Contribuições são super bem-vindas!  
Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar PRs.

---

## 📄 Licença

MIT © [Thalon Brito](https://github.com/thalonbr)

---

## 💡 Exemplo real de uso

```ts
import { isValidCPF, isCNPJValid } from '@thalonbr/docbr'

const users = [
  { name: 'Carlos', cpf: '11144477735' },
  { name: 'Empresa ABC', cnpj: 'AB1222333000181' }
]

users.forEach(user => {
  if (user.cpf && !isValidCPF(user.cpf)) {
    console.log(`CPF inválido: ${user.name}`)
  }

  if (user.cnpj && !isCNPJValid(user.cnpj)) {
    console.log(`CNPJ inválido: ${user.name}`)
  }
})
```

---

**Feito com 💙 para garantir que seus dados estejam sempre corretos.**
