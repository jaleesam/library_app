const express = require('express');
const bookRouter = express.Router();

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
bookRouter.route('/:id')
  .get((req, res) => {
    const id = req.params;
    {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        title: 'Library',
        book: books[id]
        });
  });

module.exports = bookRouter;
