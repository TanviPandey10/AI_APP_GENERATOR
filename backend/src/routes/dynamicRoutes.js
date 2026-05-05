 import express from "express";
import { createRecord, getRecords } from "../controllers/dynamicController.js";

const router = express.Router();

router.post("/:entity", createRecord);
router.get("/:entity", getRecords);

export default router;