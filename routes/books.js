const express = require("express");
const Router = express.Router();

const Book = require('../models/Book')


Router.get("/", (req, res) => {
  Book.find()
  .then(books => {
    console.log(books)
    res.render("book", {books});
  })
  .catch(err => console.log('Error', err))
})

Router.get("/:id", (req, res) => {
  console.log(req.params.id);

  Book.findById(req.params.id)
    .then(book=> {
      console.log(book);
      res.render("book-info", {book})
    })

  
})



module.exports = Router;