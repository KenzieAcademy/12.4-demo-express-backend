# Demo Express Back-end for 12.4

This is a demo application designed to show how to use various third-party libraries with Node and Express. It also demonstrates how to start breaking up you API into different files and folders with Express router.

**List of third-party libraries used in this application:**

- Morgan
- CORS
- Helmet
- Module Alias
- Day.js
- Underscore

## How to Run Locally

1. Clone this repository from Github
1. Move into the directory for this repository and run `npm install`
1. The command `npm start` will run the server
1. Open up http://localhost:3000 in your browser
1. Try http://localhost:3000/api/random to retrieve a random number from this API
1. Try http://localhost:3000/api/date/06-14-2022 (or use any other date in the url) to check if the date is in the future or not

Be sure to check your terminal to see the logs from Morgan. E.g. `GET /api/random 200 4.322 ms - 12`.
