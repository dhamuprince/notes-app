const Note = require('../models/note.model');



// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if(!req.body) {
      return res.status(400).send({
          message: "User data can not be empty"
      });
  }

  // Create a Note
  const note = new Note({
      title:req.body.title,
      content:req.body.content
  });

  // Save Note in the database
  note.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
      });
  });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
  .then(notes => {
      res.send(notes);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};


