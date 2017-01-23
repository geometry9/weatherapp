# weatherapp

Local Development
-----------------
###:warning: NOTE: This guide assumes you are using Apple OS X and have Node installed:warning:
## Install dependencies
- Install dependencies via `npm install`
- Install nodemon via `npm install -g nodemon`
- Install concurrently via `npm install -g concurrently`
- Copy and rename `.env.sample` to `.env` and add API key from openweathermap.org

## Run server
Run server via `npm run dev`. This will run `webpack --watch` and `nodemon ./bin/www` to watch both client and server side files.

## Test
Run testing suite via `npm run test`

## Prod
Production code is hosted at [here](https://forecast.space)

## Notes

With more time, on the functionality side, could do average for each day, select a day and display relevant data, loop through all the data sets for each day, search by city. On the data structure side, could organize relevant data better, use the redux store and update data on the fly every time data expires and do some more rigorous testing. Error alerting both from server as well as client.
