// Libs
const express = require('express');
// Middlewares
const {
  setCors,
  addSuccessMethod,
  addErrorMethod,
  handleNotFound,
  handleErrors,
} = require('./middlewares');
// Routes
const { mainRouter, usersRouter, accountRouter } = require('./routes');
// Modules
const database = require('./database');
// Configs
const { project, mode } = require('./utils/get-config');
const { host, port, base } = require('./utils/get-config').server;

const app = express();

/**
 * Middlewares: main
 *
 */
app.use(setCors);
app.use(addSuccessMethod);
app.use(addErrorMethod);

/**
 * Routes
 *
 */
app.use(`/`, mainRouter);
app.use(`${base}/`, usersRouter);
app.use(`${base}/me`, accountRouter);

/**
 * Middlewares: errors
 *
 */
app.use(handleNotFound);
app.use(handleErrors);

/**
 * Start app
 *
 */
Promise.resolve('Starting app...')
  .then(init => {
    console.log(init);
    console.log('Database connecting...');
    return database.connect();
  })
  .then(
    () => console.log('Database connected successfully'),
    () => console.log('Database connection error')
  )
  .then(success => {
    console.log('Starting server...');
    return app.listen(port);
  })
  .then(
    () => {
      console.log('Server started successfully');
      console.log(
        `\n  ${project}\n  mode: ${mode}\n  url: http://${host}:${port}\n`
      );
    },
    () => console.log('Error starting server')
  )
  .catch(error => console.log('Something went wrong'));
