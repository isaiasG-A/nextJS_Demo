/*
 - It is important to keep all back-end realted logic and back end endpoints within the api folder
  this is done so we can have clean code
 - api folder needs to be within our app folder 
*/

// HTTP://localhost:3000/api/users

//HTTP Methods in Next.js

async function GET(request) {
  return new Response("Hello world")
}

async function POST(request) {
  
}