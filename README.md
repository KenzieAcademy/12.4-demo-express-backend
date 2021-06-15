# Demo Express Back-end for 12.4

This is a demo application designed to show how to use various third-party libraries with Node and Express. It also demonstrates how to start breaking up you API into different files and folders with Express router.

**List of third-party libraries used in this application:**

- Morgan
- CORS
- Helmet
- module-alias
- Day.js
- Underscore
- express-fileupload

## How to Run Locally

1. Clone this repository from Github
1. Move into the directory for this repository and run `npm install`
1. The command `npm start` will run the server
1. Open up http://localhost:3000 in your browser
1. Go to http://localhost:3000/file-uploader to see a form to test uploading files
1. You will be able to see any files you upload by using the filename as the path. For example: http://localhost:3000/fishy.jpg would be the path if your filename is `fishy.jpg`.

Check out the [Express File Upload](https://github.com/richardgirges/express-fileupload) library for more information on how this works.
