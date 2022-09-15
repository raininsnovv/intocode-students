const Student = require("../models/Student.model.js");
const Group = require("../models/Group.model.js");

module.exports.studentController = {
  addStudent: async (req, res) => {
    const { name, status, paid, _groupId } = req.body;
    try {
      await Student.create({
        name,
        status,
        paid,
        _groupId,
      });
      res.json("Student added");
    } catch (e) {
      res.json(e.message);
    }
  },
  addStudentInGroup: async (req, res) => {
    const group = await Group.findById(req.params.groupId);
    try {
      if (
        !group.students.includes(req.params.studentId) &&
        group.finished === false
      ) {
        await Student.findByIdAndUpdate(req.params.studentId, {
          group: req.params.groupId,
        });
        await Group.findByIdAndUpdate(req.params.groupId, {
          $push: { students: req.params.studentId },
        });
        return res.json("Student added in group");
      } else {
        return res.json("Student already in group");
      }
    } catch (error) {
      return res.json(error.message);
    }
  },

  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find().populate("_groupId");
      return res.json(students);
    } catch (e) {
      return res.json(e.message);
    }
  },

  getStudentsByGroupId: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (e) {
      return res.json(e.message);
    }
  },

  getStudentsPaid: async (req, res) => {
    try {
      const students = await Student.find({ paid: "full" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getStudentsNotPaid: async (req, res) => {
    try {
      const students = await Student.find({ paid: "not paid" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (error) {
      return res.json(error.message);
    }
  },
  getStudentsHalfPay: async (req, res) => {
    try {
      const students = await Student.find({ payment: "half" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getStudentsStudy: async (req, res) => {
    try {
      const students = await Student.find({ status: "study" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (error) {
      return res.json(error.message);
    }
  },
  getStudentsSearchJob: async (req, res) => {
    try {
      const students = await Student.find({ status: "searchJob" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (error) {
      return res.json(error.message);
    }
  },
  getStudentsGotAnOffer: async (req, res) => {
    try {
      const students = await Student.find({ status: "gotAnOffer" }).populate(
        "_groupId"
      );
      return res.json(students);
    } catch (error) {
      return res.json(error.message);
    }
  },
  getStudentsWentToWork: async (req, res) => {
    try {
      const students = await Student.find({ status: "wentToWork" }).populate(
        "_groupId"
      );
      res.json(students);
    } catch (error) {
      res.json(error.message);
    }
  },
  getPercentOffer: async (req, res) => {
    try {
      const group = await Group.findById(req.params.groupid).populate(
        "_studentId"
      );
      let i = 0;
      for (const ar of group.studentId) {
        if (ar.status === "gotAnOffer") {
          i++;
        }
      }
      const result = (i * 100) / group.studentId.length;
      res.json(Math.round(result));
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteStudent: async (req, res) => {
    try {
      await Student.findByIdAndRemove(req.params.id);
      return res.json("Student deleted!");
    } catch (error) {
      return res.json(error.message);
    }
  },

  updateStudent: async (req, res) => {
    try {
      const { name, status, paid } = req.body;
      await Student.findByIdAndUpdate(req.params.id, {
        name,
        status,
        paid,
      });
      res.json("Changes saved");
    } catch (error) {
      res.json(error.message);
    }
  },
};
