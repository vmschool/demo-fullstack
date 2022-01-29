const cors = require('cors');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/languages', async (req, res) => {
  res.send([
    { _id: 1, name: 'JavaScript' },
    { _id: 2, name: 'Python' },
    { _id: 3, name: 'Rust' },
    { _id: 4, name: 'Go' },
    { _id: 5, name: 'C#' }
  ]);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(port, () => {
  console.log(`Server has been started on port ${port}...`);
});
