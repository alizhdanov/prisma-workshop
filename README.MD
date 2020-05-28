# How To Run

You need to have running database (PostgresSQL). You have few options here

## With Docker Compose

Make sure you have installed docker

- Run `docker-compose up -d`
- Run `npm install`
- Run `npm run migrate:up`
- Run `npm run seed`

You should see

![result](tmp/result.png)

## If you already have PostgresSQL installed

- Go to `prisma/.env` file and change DATABASE_URL value to match your database url. Format is `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?KEY1=VALUE&KEY2=VALUE&KEY3=VALUE`. [More info you can find here](https://www.prisma.io/docs/reference/database-connectors/postgresql/)
- Run `npm install`
- Run `npm run migrate:up`
- Run `npm run seed`

You should see

![result](tmp/result.png)

## With Heroku

- Setup your account and login - https://signup.heroku.com/login
- Create an app (you can not create DB without an App) https://dashboard.heroku.com/new-app
- Go to postgresSQL addon page and click install - https://elements.heroku.com/addons/heroku-postgresql
- After instalation go to database settings tab in heroku and click "view credentials"
- Repeat steps from "If you already have PostgresSQL installed"
