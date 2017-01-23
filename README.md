# weatherapp

Local Development
-----------------
###:warning: NOTE: This guide assumes you are using Apple OS X and have Node installed:warning:

Install dependencies via `npm install`
Install nodemon via `npm install -g nodemon`
Install concurrently via `npm install -g concurrently`
Copy and rename `.env.sample` to `.env` and add an API key from openweathermap.org

## Run server
Run server via `npm run dev`. This will run `webpack --watch` and `nodemon ./bin/www` to watch both client and server side files.

## Test
Run testing suite via `npm run test`

## Prod
Production code is hosted at [here](https://forecast.space)
