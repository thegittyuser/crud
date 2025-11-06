import express from "express";
const router = express.Router();
import {
  defaultHome,
  showUsers,
  updateData,
  update,
  deleteData,
} from "../controller/userdata.controller.js";

// routes
router.get("/", defaultHome);

router.get("/show_users", showUsers);

router.get("/update_data/:id", updateData);

router.post("/update/:id", update);

router.get("/delete_data/:id", deleteData);

export default router;
