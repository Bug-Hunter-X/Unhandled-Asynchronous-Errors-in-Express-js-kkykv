# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled errors within asynchronous route handlers.  The `bug.js` file shows an example where an error is thrown inside a `setTimeout` callback, causing the server to crash without proper error handling.

The solution, in `bugSolution.js`, shows how to properly handle asynchronous errors using `try...catch` blocks and middleware.