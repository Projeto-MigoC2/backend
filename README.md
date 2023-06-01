# MigoC2-Backend
Repositório destinado ao backend do projeto MigoC2
Para ver os métodos da API já implementados, acesse o link a baixo com a aplicação rodando:  
http://localhost:3000/api-docs/

## Iniciando ambiente

### requesitos

* [Docker](https://docs.docker.com/get-started/),

* [docker-compose](https://docs.docker.com/compose/install/
),

* [nodeJS](https://nodejs.org/en/download
),

* [yarn](https://yarnpkg.com/getting-started/install
),

### Configuração do Projeto

Siga as etapas abaixo para configurar o projeto em seu ambiente local:

1. Clone o repositório do projeto do Git:

   ```
   git clone https://github.com/Projeto-MigoC2/backend.git
   ```

2. Acesse o diretório do projeto:

   ```
   cd backend
   ```

3. Instale as dependências usando o Yarn:

   ```
   yarn install
   ```

4. Configure as variáveis de ambiente:

   faça uma copia do arquivo `.env.example` e renomeie para `.env` e atualize as variáveis de ambiente conforme necessário. Por exemplo, defina as configurações de conexão do banco de dados.

### Executando o Projeto

Após a configuração do projeto, siga as etapas abaixo para executá-lo:

1. Gere os arquivos de código do Prisma:

   ```
   yarn prisma generate
   ```
2. Execute as migrações do banco de dados:

   ```
   yarn prisma migrate dev
   ```
   Isso criará as tabelas e as estruturas necessárias no banco de dados.

3. Inicie o servidor de desenvolvimento:

   ```
   yarn dev
   ```

   Isso iniciará o servidor backend e estará pronto para receber solicitações.

### Testando o Projeto

Você pode usar ferramentas como o Postman ou o Insomnia para enviar solicitações HTTP para o servidor backend e testar suas APIs.


### Considerações Finais

Esta documentação básica deve ajudá-lo a configurar e executar o projeto de backend com Node.js, Yarn, TypeScript e Prisma ORM. Certifique-se de consultar a documentação oficial de cada uma dessas tecnologias para obter mais informações e explorar recursos adicionais.

Além disso, é uma boa prática documentar as APIs e a estrutura do projeto em detalhes, bem como incluir instruções adicionais para configurações de implantação, gerenciamento de dependências, testes e outras etapas relevantes.

Espero que isso ajude! Se você tiver mais alguma dúvida, fique à vontade para perguntar.