'use strict';

const express = required('express');
const app = express();

app.get('params/:name', (req, res) => {
  let name = req.params.name;
  res.json({
    name,
  });
});

app.get('/query', (req, res) => {
  let name = req.query.name;
  let role = req.query.role;
  res.json({
    name,
    role
  });
});

app.get('/hello', (req, res) => {
  res.json({
    name: '',
  });
});

module.exports = app;
