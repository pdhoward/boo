
/////////////////////////////////////////////////////
////////          SCARY HTTP SERVER          ///////
///////            version 0.5.0            ///////
//////////////////////////////////////////////////

const express     = require('express');
const path        = require('path');
const {r}         = require('./console')
const {welcome}   = require('./welcome')

const app = express();
const PORT = process.env.PORT || 3000;

const log = (msg) => console.log(msg)

////////////////////////////////////////
//////middleware and static routes/////
///////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

/////////////////////////////////////////////////
//////middleware dynamic routes and server /////
///////////////////////////////////////////////

app.get('/api', (req, res) => res.send(welcome) )

app.listen(PORT, () =>log(r(`Scary server running on Port ${PORT}`) ))
