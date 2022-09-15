const Group = require("../models/Group.model");

module.exports.groupController = {
  addGroup: async (req, res) => {
    try {
      const { name, week, finished } = req.body;
      await Group.create({
        name,
        week,
        finished,
      });
      return res.json("Group added");
    } catch (e) {
      return res.json(e.message);
    }
  },

  deleteGroup: async (req, res) => {
    try {
      await Group.findByIdAndRemove(req.params.id);
      return res.json("Group deleted");
    } catch (e) {
      return res.json(e.message);
    }
  },

  getAllGroups: async (req, res) => {
    try {
      const groups = await Group.find().populate("_studentId");
      return res.json(groups);
    } catch (e) {
      return res.json(e.message);
    }
  },

  updateGroup: async (req, res) => {
    try {
      const { name, week, finished } = req.body;
      await Group.findByIdAndUpdate(req.params.id, {
        name,
        week,
        finished,
      });
      return res.json("Group changed");
    } catch (e) {
      return res.json(e.message);
    }
  },

  getGroupById: async (req, res) => {
    try {
      const group = await Group.findById(req.params.id).populate("_studentId");
      return res.json(group);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getGroupByWeek: async (req, res) => {
    try {
      const data = await Group.find({ week: req.body.week }).populate(
        "_studentId"
      );
      return res.json(data);
    } catch (e) {
      return res.json(e.message);
    }
  },
  getFinishedGroups: async (req, res) => {
    try {
      const data = await Group.find({ finished: true }).populate("_studentId");
      return res.json(data);
    } catch (e) {
      return res.json(e.message);
    }
  },
};
