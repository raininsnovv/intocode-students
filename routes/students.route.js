const { Router } = require("express");
const { studentController } = require("../controllers/students.controller");
const router = Router();

router.post("/admin", studentController.addStudent);
router.patch("/admin/:studentid/:groupid", studentController.addStudentInGroup);
router.patch("/admin/:id", studentController.updateStudent);
router.delete("/admin/:id", studentController.deleteStudent);

router.get("/group/:id", studentController.getStudentsByGroupId);
router.get("/admin", studentController.getAllStudents);
router.get("/admin/paid", studentController.getStudentsPaid);
router.get("/admin/notpaid", studentController.getStudentsNotPaid);
router.get("/admin/halfpay", studentController.getStudentsHalfPay);
router.get("/admin/study", studentController.getStudentsStudy);
router.get("/admin/searchjob", studentController.getStudentsSearchJob);
router.get("/admin/gotanoffer", studentController.getStudentsGotAnOffer);
router.get("/admin/wenttowork", studentController.getStudentsWentToWork);
router.get("/admin/percentoffer/:groupid", studentController.getPercentOffer);

module.exports = router;
