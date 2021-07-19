# personal cms project

## Technologies :

- nodejs / typescript
- mysql
- ejs (view templating)

## Prérequis

- Docker & Docker Compose installés

## Installation

```shell
cp .env.sample .env
docker-compose build
docker-compose up

# installation des dépendances
docker-compose run node npm install
```