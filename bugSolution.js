const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Hello World!');
      } else {
        // Throw an error to be caught by the error handling middleware
        const error = new Error('Something went wrong!');
        error.status = 500;
        next(error);
      }
    } catch (err) {
      next(err);
    }
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});