# Bem vindo ao front-admin
 
 Esse é o projeto front-end admin criado para os usuários admins que vão moderar a plataforma copo cheio. Nele é utilizado as tecnologias React TS, React-testing-library e Node para seu desenvolvimento. Além disso, utilizamos a metodologia do Atomic Design para estruturar nosso padrão de projeto e nossa estrutura de pasta.

## Testando

Para testar a aplicação rode o comando 

```
npm test
```

Caso queira rodar um arquivo especifico rode o comando:

```
npm test __nome_do_arquivo__
```

## Rodando a aplicação

Para rodar a aplicação é necessário instalar os pacotes de dependencia dentro da pasta front-admin, dessa forma rode o comando:

```
$ cd front-admin
```

Caso não tenha feito o build:

```
$ docker-compose up --build
```

Caso já tenha feito o build, basta rodar:

```
$ docker-compose up frontAdmin
```

## Orientações:

Se você não quiser rodar todos os processos no docker basta colocar os nomes na frente do comando. Ex.
```
$ docker-compose up -d frontEnd frontAdmin
```
Esse comando só roda os dois front-end.
Nomes: api || frontEnd || frontAdmin || postgres

Como é utilizado a metodologia do Atomic design na aplicação, é recomendavel ler a documentação do mesmo.

*Link: https://atomicdesign.bradfrost.com/chapter-2/*

Levando isso em consideração, devemos sempre seguir o padrão do projeto e arquiteturar a construção dos componentes com base nessa metodologia. Assim, diversos padrões já foram adicionados tais quais variaveis globals de estilo, presente na pasta *styles*.