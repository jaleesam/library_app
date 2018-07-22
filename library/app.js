const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;
const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootsrap/dist/js')));
app.use('js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

const books = [
  {
    title: 'Moonwalking with Einstein',
    genre: 'nonfiction',
    author: 'Joshua Foer',
    read: false,
  },
  {
    title: 'The Great Gasby',
    genre: 'fiction',
    author: 'F. Scott Fitzgerald',
    read: true,
  },
  {
    title: '1984',
    genre: 'fiction',
    author: 'George Orwell',
    read: false,
  },
  {
    title: 'How to Win Friends and Influence People',
    genre: 'self-help',
    author: 'Dale Carnegie',
    read: true,
  },
  {
    title: 'Salt Sugar Fat',
    genre: 'health',
    author: 'Michael Moss',
    read: true,
  }
];
bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        title: 'Library',
        books
      });
  });
bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });
app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }],
      title: 'Library'
    }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
