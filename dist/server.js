import express from 'express';
import cors from 'cors';
const app = express();
// We need a database of quotes 
const quotes = [
    'JavaScript is the duct tape of the internet.',
    'With JavaScript, you can build anything you can imagine.',
    'Learning JavaScript is like learning to speak the language of the web.',
    'JavaScript is the key to unlocking the full potential of the web.',
    'The best way to learn JavaScript is to build projects.',
    'JavaScript is not just a language, it\'s a mindset.',
    'Every line of JavaScript you write is a step closer to mastering the web.',
    'JavaScript is the bridge between creativity and functionality.',
    'The more you practice JavaScript, the more powerful you become.',
    'JavaScript is the magic wand that brings web pages to life.',
    'In the world of web development, JavaScript is your best friend.',
    'JavaScript is the tool that turns ideas into reality.',
    'The journey of learning JavaScript is as rewarding as the destination.',
    'JavaScript is the canvas on which you can paint your web dreams.',
    'Mastering JavaScript opens up a world of endless possibilities.'
];
/*
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below:
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/
// Allow other domains to make requests to our server
app.use(cors());
// app.get('/', (_, responseObj) => {
//   responseObj.send('Hi there from the server!');
// });
// Random quote route
// When a route sends back an array or an object, it is an API route
// When a route is an API route, you should prefix the path with a /api
app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    responseObj.send({
        quote: randomQuote
    });
});
// app.get('/api/data', (_, responseObj) => {
//   const data = {
//     name: 'JD',
//     age: 44
//   };
//   responseObj.send(data);
// });
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
