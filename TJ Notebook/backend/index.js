const db = require('./db');
const express = require('express');
var cors = require('cors') ;
const app = express();
const port = 8000;
db();

app.use(cors());
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`TJ Notebook Started Backend at http://localhost:${port}`);
})