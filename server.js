// Express code  
const express = require("express");
const app = express();
const port = 8769;
// console.log(app);

// app.get app.post app.put app.delete 
// app.get('/abc', (req, res) => {
    //    res.send('hello from simple server :)'
    //    )
  
// })
// app.get('/home', (req, res) => {
//     res.send('hello from Home :)')
// })
// app.get('/about', (req, res) => {
//     res.send('hello from About :)')
// })
// app.get('/blog', (req, res) => {
//     res.send('hello from Blog :)')
// })
app.get('/blog/:slug', (req, res) => {
    res.send(`hello from Blog ${req.params.slug}:)`)
    console.log(req);
    
    console.log(req.params);
    console.log(req.query);
})

app.listen(port, () => {
    console.log(`Servr Listening to port : ${port}`);
})

// Create a server Jismee apko ek simple endpoint "/" that will reeturn a table while inside home, about , blog endpoints it will return a plain text.