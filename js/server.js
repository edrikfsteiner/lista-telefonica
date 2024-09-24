const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

const contatos = [
  {id: 1, nome: "joão pedro silva souza", telefone: "1234-5678"},
  {id: 2, nome: "maria da cruz", telefone: "9876-5432"},
  {id: 3, nome: "ana maria braga", telefone: "4444-4444"},
  {id: 4, nome: "charles marc hervé perceval leclerc", telefone: "1616-1616"},
  {id: 5, nome: "carlos sainz vásquez de castro cenamón rincón rebello", telefone: "5555-5555"}
];

const operadoras = [
  {id: 1, nome: "Oi", categoria:"Celular", preco: 2},
  {id: 2, nome: "Vivo", categoria:"Celular", preco: 4},
  {id: 3, nome: "TIM", categoria:"Fixo", preco: 3},
  {id: 4, nome: "Claro", categoria:"Fixo", preco: 5}
];

app.get('/contatos', (req, res) => {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  res.json(contatos.find(c => c.id == req.params.id));
});

app.get('/operadoras', (req, res) => {
  res.json(operadoras);
});

app.post('/contatos', (req, res) => {
  const newContato = req.body;

  if (newContato && newContato.nome && newContato.telefone) {
    newContato.id = contatos.length ? Math.max(...contatos.map(c => c.id)) + 1 : 1;
    contatos.push(newContato);
    res.json(newContato);
  } else {
    res.status(400).json({ message: 'Dados inválidos' });
  }
});

app.put('/contatos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contato = contatos.find(c => c.id === id);

  if (contato) {
    Object.assign(contato, req.body);
    res.json(contato);
  } else {
    res.status(404).json({ message: 'Contato not found' });
  }
});

app.delete('/contatos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = contatos.findIndex(c => c.id === id);

  if (index !== -1) {
    contatos.splice(index, 1);
    res.json({ message: 'Contato deleted' });
  } else {
    res.status(404).json({ message: 'Contato not found' });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
  console.log(`Site is hosted on port http://localhost:5500/index.html#!/contatos`)
});