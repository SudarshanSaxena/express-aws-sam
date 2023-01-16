const express = require('express');
const app = express();

const bodyParser = require('body-parser');


let name = 'sudrshan'

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next)=>{
    res.header("Content-Type","application/json")
    next()
})


 app.get('/hello', (req, res) => {
    // res.render('index', {personList: friendsList.getAll()});
    return res.json({
        message:name
    })
 });


 app.post('/',(req,res)=>{
    console.log(req.body)

    return res.json({body:req.body})
 })


// Server
// app.listen(port, () => {
//    console.log(`Listening on: http://localhost:${port}`);
// });

module.exports = app;