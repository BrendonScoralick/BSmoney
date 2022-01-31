import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';
import { json } from 'stream/consumers';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freelance',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAT: new Date('2022-01-12 5:20:00'),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1200,
        createdAT: new Date('2022-02-12 11:20:00'),
      }]
    })
  },

  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

