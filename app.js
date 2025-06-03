const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
