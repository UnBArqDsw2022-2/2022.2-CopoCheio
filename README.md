<div align="center">

# CopoCheio

CopoCheio is a simple collaborative platform for drinks recipes.

With CopoCheio you can explore new recipes and make a favourite list.

[Getting started](#getting-started) •
[Installation](#installation) •
[Configuration](#configuration) •
[Integrations](#third-party-integrations)

</div>

## Getting started
If you are looking to contribute to the project make sure to read the [Contribution Guide](./CONTRIBUTING.md) and the [Code of conduct](./CODE_OF_CONDUCT.md) before doing anything.

Looking for documents? It's in this [website](https://unbarqdsw2022-2.github.io/2022.2-CopoCheio/).

Didn't find what you were looking for? You can try:
- Looking in open and closed issues.
- Looking in open and closed pull requests
- Openning a issue.
    

## Installation
    
To use the plataform you'll need:
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/get-started)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/) (Only if you are lookin to run it without docker, or intend to install new packages)
- Postgres, no link :( (Only if you are lookin to run it without docker)

### Cloning the repository

```bash
$ git clone https://github.com/UnBArqDsw2022-2/2022.2-CopoCheio.git
$ cd 2022.2-CopoCheio
```  

### Running docs
To run docs you'll have to install [Docsify](https://docsify.js.org/#/quickstart)
After that just run
```bash
$ docsify serve docs
```  

### Running containers

This command run all containers
```bash
$ docker-compose up -D
```
To run some containers just add the name after the `-D`
```bash
$ docker-compose up -D api postgres
```

### Stopping containers

```bash
$ docker-compose down
```

### Deleting all data from containers

```bash
$ docker-compose down -v
```

### Without docker
To run without docker you'll have to create a database, we used postgres.

You'll have to run `npm install` or similars to install the packages in the folders:
- front-end
- back-end
- front-admin

```bash
$ cd front-end
$ npm install
```

Running front-* folders
```bash
$ npm run start
```

Running back-end folder
```bash
$ npm run dev
```

## Configuration
### With docker
You just need to edit the .env file in the root of repository with the .env.example in mind.
### Without docker
You need to edit the .env file in the folders back-end, front-end, front-admin and all of the folders have an .env.example to guide.