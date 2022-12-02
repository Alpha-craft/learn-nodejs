// import { express } from "express";
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('endlo')
});

app.listen(3000, () => {
  console.log(`Server started on port`);
});