# Desafio Allugator

## Tecnologias

Projeto desenvolvido com as seguintes tecnologias:

- BackEnd

  - TypeScript
  - Express
  - Prisma
  - Jest
  - Supertest
  - Bcrypt

- FrontEnd
  - Next.js
  - React.js
  - TypeScript

## Como iniciar o projeto

### Quais programas necessários?

- Git
- Node
- Postgres
- Docker

### Siga o passo a passo

1. Abra o terminal e clone o repositório do projeto, utilize o comando a seguir:

```bash
git clone git@github.com:cleytonoliveira/allugatv.git
```

2. Após o clone, entre no seguinte diretório:

```bash
cd ./allugatv/api
```

3. Instale as dependências utilizando o seguinte comando:

```bash
npm install
```

4. Entre em cada diretório dos respectivos microsserviços e execute o mesmo comando de `npm install`.

Exemplo:

```bash
cd /api-gateway && npm install
cd ../catalog && npm install
cd ../checkout && npm install
cd ../user && npm install

```

5. Crie um arquivo `.env` para o diretório raiz, assim como para os demais microsserviços. Utilize o arquivo `.env.example` como referência.

6. Com o Docker instalado em sua máquina. Execute o comando abaixo:

```bash
docker compose up -d
```

7. Para criar o banco de dados e criar as tabelas, entre nos diretórios de microsserviço e execute o comando:

```bash
npx prisma migrate dev
```

8. (Opcional) Caso deseje popular o banco de dados com produtos iniciais, execute o comando abaixo em cada um dos microsserviços.

```bash
npx prisma db seed
```

9. Para iniciar o FronEnd, vá até o diretório a seguir:

```bash
cd /allugatv/client
```

10. Instale as dependências utilizando o seguinte comando:

```bash
npm install
```

11. Pronto, agora é só rodar o comando a seguir:

```bash
npm run dev
```

## O que poderia melhorar?

Poderia melhorar a aplicação nos seguintes pontos:

- Criar validações no BackEnd utilizando o Zod;
- Criar testes unitários para o BackEnd;
- Criar testes para o FrontEnd;
- Melhorar a validações dos campos no FrontEnd;
- Melhorar a interface da aplicação e experiência do usuário no FrontEnd (UI e UX).
