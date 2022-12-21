
# MigoC2-Backend
Repositório destinado ao backend do projeto MigoC2

## Iniciando ambiente

### requesitos

* [Docker](https://docs.docker.com/get-started/),

* [docker-compose](https://docs.docker.com/compose/install/
),


### comandos

executar o comando(a aplicação também será inicializada):

`docker-compose up`

## Iniciando aplicação

Nas seguintes vezes executar o comando:

`docker-compose start`

Como estamos em desenvolvimento e estamos criando e editando tabelas do banco de dados constantemente,
precisamos usar os seguintes comandos para criar/atualizar essas tabelas:

**(O docker-compose start deve estar rodando para os seguintes comandos funcionarem)**

primeiramente `docker exec -it migoc2 bash` para acessar o terminal do docker

depois `yarn typeorm migration:run -d src/DockerDataSource.ts` para executar a criação/edição das tabelas
