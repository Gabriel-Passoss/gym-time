
# Gym-Time

API para gerenciamento de academias e check-ins, no estilo do GymPass


## Aprendizados

Neste projeto, o foco principal foi construir e consolidar novos aprendizados à respeito da arquitetura do back-end com design patterns (como o fabric, SOLID, repositórios) e como construir uma aplicação testável (utilizando testes unitários para cada serviço e testes e2e)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`NODE_ENV`
`DATABASE_URL`
`JWT_SECRET`
## Funcionalidades

- Cadastrar usuário
- Autenticar usuário
- Recuperar informações do perfil do usuário
- Obter o número de check-ins do usuário
- Obter o histórico de check-ins do usuário
- Cadastrar uma academia
- Buscar academias próximas (10km)
- Buscar academias pelo nome
- Criar um check-in em uma academia
- Validar check-in de um usuário


## Stack utilizada

**Back-end:** Node, Fastify, Prisma, Docker, JWT, Vitest, Zod, bcryptJS, dotenv


## Rodando os testes

Para rodar os testes unitários, rode o seguinte comando

```bash
  npm run test
```

Para rodar os testes E2E, rode o seguinte comando

```bash
  npm run test:e2e
```
