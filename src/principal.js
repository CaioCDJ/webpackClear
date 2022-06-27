//const Pessoa = require('./pessoa')
import Pessoa from './pessoa.js';
import './modulos/moduloA';

const atendente = new Pessoa();

console.log(atendente.cumprimentar());
