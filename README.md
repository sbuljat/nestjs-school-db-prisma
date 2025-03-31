## Description

[Nest](https://github.com/nestjs/nest) framework educational project on using [Database via Prisma](https://docs.nestjs.com/recipes/prisma).

Prisma documentation can be found [here](https://www.prisma.io/docs/getting-started/quickstart).

## Installation

```bash
$ npm install
```

### Configuration

- Database Connection
  In order to run the application access details of the database are required. That can be added via environment variable (`DATABASE_URL`) or using [dotenv](https://github.com/motdotla/dotenv) library and it's local file `.env` which has to have entry `DATABASE_URL=...`

## Running the app

```bash
# development
$ npm start

# watch mode
$ nest start --watch
```

## Testing the app

- Get user by username. Should return HTTP 404 when database is empty.

  `curl --location 'localhost:3000/users/sbuljat'`

- Create a user. Should return HTTP 200.

  `curl --location 'localhost:3000/users' \
--header 'Content-Type: application/json' \
--data '{
    "username": "sbuljat",
    "password": "Password123",
    "name": "Stjepan Buljat"
}'`

- Get user by username. Should return HTTP 200.

  `curl --location 'localhost:3000/users/sbuljat'`

- Delete user by username. Should return HTTP 200.

  `curl --location --request DELETE 'localhost:3000/users/sbuljat'`

## Deploying the app


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it however you want.
