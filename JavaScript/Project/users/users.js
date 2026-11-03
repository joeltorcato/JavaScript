const { livroDigital, livroFisico } = require('./livros');

const SteveJobsBiografia = new livroDigital({
  titulo: 'A biografia de Steve Jobs',
  autor: 'Walter Isaacson',
  numeroPaginas: 607,
  idioma: 'English',
  formato: 'PDF',
  paginas: [10, 20],
});

const MeuPeDeLaranjaLima = new livroFisico({
  titulo: 'Meu pé de laranja lima',
  autor: 'José Mauro de Vasconcelos',
  numeroPaginas: 128,
  idioma: 'Português',
  paginas: [30, 40],
});

module.exports = {
  SteveJobsBiografia,
  MeuPeDeLaranjaLima,
};
