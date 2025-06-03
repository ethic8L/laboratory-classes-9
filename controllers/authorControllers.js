const Author = require('../models/Author');

exports.getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
};

exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  const updated = await Author.findByIdAndUpdate(id, { firstName, lastName }, { new: true });
  if (updated) res.status(200).json(updated);
  else res.status(404).json({ message: 'Author not found' });
};

exports.createAuthor = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const newAuthor = new Author({ firstName, lastName });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
