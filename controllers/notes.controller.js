const Note = require("../models/Note.model.js");

module.exports.noteController = {
  addNote: async (req, res) => {
    try {
      const { text, _studentId } = req.body;
      await Note.create({
        text,
        _studentId,
      });
      return res.json("Note added");
    } catch (error) {
      return res.json(error.message);
    }
  },
  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.find().populate("_studentId");
      return res.json(notes);
    } catch (error) {
      return res.json(error.message);
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Note.findByIdAndRemove(req.params.id);
      return res.json("Note deleted");
    } catch (error) {
      return res.json(error.message);
    }
  },
  updateNote: async (req, res) => {
    try {
      const { text, _studentId } = req.body;
      await Note.findByIdAndUpdate(req.params.id, {
        text,
        _studentId,
      });
      return res.json("Note updated");
    } catch (error) {
      return res.json(error.message);
    }
  },
  getNotesByStudentId: async (req, res) => {
    try {
      const notes = await Note.find({ _studentId: req.params.id }).populate(
        "_studentId"
      );
      return res.json(notes);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
