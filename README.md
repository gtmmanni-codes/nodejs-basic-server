# nodejs-basic-server

A simple Node.js HTTP server created while learning backend fundamentals. Handles basic routing and server setup using core modules.

URL for Data - "http://localhost:8000"
To view home,news,about data just add "/home,/news,/about" respectively after "http://localhost:8000"

I am using nodemon in this code . I added "start":"nodemon index.js" in package.json

## Important

we cannot send object type data directly to browser we need to convert it into string using JSON.stringify() function .
