const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  const books = await Book.find().populate('author');
  res.status(200).json(books);
};

exports.addBook = async (req, res) => {
  const { title, year, author } = req.body;
  const newBook = new Book({ title, year, author });
  await newBook.save();
  res.status(201).json(newBook);
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const deleted = await Book.findByIdAndDelete(id);
  if (deleted) res.status(204).send();
  else res.status(404).json({ message: 'Book not found' });
};
