 import Record from "../models/Record.js";

// CREATE
export const createRecord = async (req, res) => {
  try {
    const { entity } = req.params;
    const data = req.body;

    const record = await Record.create({
      entity,
      data
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: "Failed to create record" });
  }
};

// READ
export const getRecords = async (req, res) => {
  try {
    const { entity } = req.params;

    const records = await Record.find({ entity });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch records" });
  }
};