const { Router } = require("express");
const { noteController } = require("../controllers/notes.controller");
const router = Router();

router.post("/admin", noteController.addNote);
router.get("/student/:id", noteController.getNotesByStudentId);
router.get("/admin", noteController.getAllNotes);
router.delete("/admin/:id", noteController.deleteNote);
router.patch("/admin/:id", noteController.updateNote);

module.exports = router;
