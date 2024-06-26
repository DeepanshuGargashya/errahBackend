const router = require("express").Router();
const multer = require("multer");

// const { NGORegister, NGOLogIn, deleteNGO, getNGODetail, updateNGO } = require('../controllers/NGO-controller.js');

const {
  adminRegister,
  adminLogIn,
  getAdminDashboardData,
} = require("../controllers/admin-controller.js");

const {
  NGORegister,
  NGOLogIn,
  getNGODetail,
  getAllNgo,
  removeNgo,
  updateNGO,
  uploadBulkCsv,
} = require("../controllers/NGO-controller.js");

const {
  sclassCreate,
  sclassList,
  deleteSclass,
  deleteSclasses,
  getSclassDetail,
  getSclassStudents,
} = require("../controllers/class-controller.js");
const {
  complainCreate,
  complainList,
} = require("../controllers/complain-controller.js");
const {
  noticeCreate,
  noticeList,
  deleteNotices,
  deleteNotice,
  updateNotice,
  allNoticecList,
} = require("../controllers/notice-controller.js");
const {
  studentRegister,
  studentLogIn,
  getStudents,
  getStudentDetail,
  deleteStudents,
  deleteStudent,
  updateStudent,
  studentAttendance,
  deleteStudentsByClass,
  updateExamResult,
  clearAllStudentsAttendanceBySubject,
  clearAllStudentsAttendance,
  removeStudentAttendanceBySubject,
  removeStudentAttendance,
} = require("../controllers/student_controller.js");
const {
  subjectCreate,
  classSubjects,
  deleteSubjectsByClass,
  getSubjectDetail,
  deleteSubject,
  freeSubjectList,
  allSubjects,
  deleteSubjects,
} = require("../controllers/subject-controller.js");
const {
  teacherRegister,
  teacherLogIn,
  getTeachers,
  getTeacherDetail,
  deleteTeachers,
  deleteTeachersByClass,
  deleteTeacher,
  updateTeacherSubject,
  teacherAttendance,
  makeTeacherHead,
} = require("../controllers/teacher-controller.js");
const {
  facilityCreate,
  facilityList,
  deleteFacility,
  updateFacility,
  allFacilitiesList,
  uploadFacilityProof,
} = require("../controllers/facility-controller.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Admin
router.post("/AdminReg", adminRegister);
router.post("/AdminLogin", adminLogIn);
router.get("/adminDashboard/:id", getAdminDashboardData);
router.get("/admin/notices/:id", allNoticecList);
router.get("/admin/facilities/:id", allFacilitiesList);
// NGO
router.post("/NGOReg", NGORegister);
router.post("/NGOLogin", NGOLogIn);
router.post("/removeNgo/:id", removeNgo);
router.post("/updateNgo", updateNGO);

router.get("/allNgo", getAllNgo);
router.get("/NGO/:id", getNGODetail);
router.post("/NGO/uploadCsv/:id", upload.single("csvFile"), uploadBulkCsv);
// router.delete("/NGO/:id", deleteNGO)

// router.put("/NGO/:id", updateNGO)

// Student

router.post("/StudentReg", studentRegister);
router.post("/StudentLogin", studentLogIn);

router.get("/Students/:id", getStudents);
router.get("/Student/:id", getStudentDetail);

router.delete("/Students/:id", deleteStudents);
router.delete("/StudentsClass/:id", deleteStudentsByClass);
router.delete("/Student/:id", deleteStudent);

router.put("/Student/:id", updateStudent);

router.put("/UpdateExamResult/:id", updateExamResult);

router.put("/StudentAttendance/:id", studentAttendance);

router.put(
  "/RemoveAllStudentsSubAtten/:id",
  clearAllStudentsAttendanceBySubject
);
router.put("/RemoveAllStudentsAtten/:id", clearAllStudentsAttendance);

router.put("/RemoveStudentSubAtten/:id", removeStudentAttendanceBySubject);
router.put("/RemoveStudentAtten/:id", removeStudentAttendance);

// Teacher

router.post("/TeacherReg", teacherRegister);
router.post("/TeacherLogin", teacherLogIn);
router.post("/changeClassTeacher", makeTeacherHead);

router.get("/Teachers/:id", getTeachers);
router.get("/Teacher/:id", getTeacherDetail);

router.delete("/Teachers/:id", deleteTeachers);
router.delete("/TeachersClass/:id", deleteTeachersByClass);
router.delete("/Teacher/:id", deleteTeacher);

router.put("/TeacherSubject", updateTeacherSubject);

router.post("/TeacherAttendance/:id", teacherAttendance);

// Notice

router.post("/NoticeCreate", noticeCreate);

router.get("/NoticeList/:id", noticeList);

router.delete("/Notices/:id", deleteNotices);
router.delete("/Notice/:id", deleteNotice);

router.put("/Notice/:id", updateNotice);

// facility

router.post("/addFacility", facilityCreate);
router.post("/uploadFacilityProof", uploadFacilityProof);

router.get("/facilityList/:id", facilityList);

router.delete("/facility/:id", deleteFacility);
// router.delete("/Notice/:id", deleteNotice);

router.put("/facility/:id", updateFacility);

// Complain

router.post("/ComplainCreate", complainCreate);

router.get("/ComplainList/:id", complainList);

// Sclass

router.post("/SclassCreate", sclassCreate);

router.get("/SclassList/:id", sclassList);
router.get("/Sclass/:id", getSclassDetail);

router.get("/Sclass/Students/:id", getSclassStudents);

router.delete("/Sclasses/:id", deleteSclasses);
router.delete("/Sclass/:id", deleteSclass);

// Subject

router.post("/SubjectCreate", subjectCreate);

router.get("/AllSubjects/:id", allSubjects);
router.get("/ClassSubjects/:id", classSubjects);
router.get("/FreeSubjectList/:id", freeSubjectList);
router.get("/Subject/:id", getSubjectDetail);

router.delete("/Subject/:id", deleteSubject);
router.delete("/Subjects/:id", deleteSubjects);
router.delete("/SubjectsClass/:id", deleteSubjectsByClass);

module.exports = router;
