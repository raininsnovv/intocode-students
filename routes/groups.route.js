const { Router } = require("express");
const { groupController } = require("../controllers/groups.controller");
const router = Router();

router.post("/admin", groupController.addGroup);
router.get("/admin", groupController.getAllGroups);
router.delete("/admin/:id", groupController.deleteGroup);
router.patch("/admin/:id", groupController.updateGroup);
router.get("/admin/:id", groupController.getGroupById);
router.get("/week", groupController.getGroupByWeek);
router.get("/finished/", groupController.getFinishedGroups);

module.exports = router;
