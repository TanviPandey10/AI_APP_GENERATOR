 import express from "express";
import { createRecord, getRecords } from "../controllers/dynamicController.js";

const router = express.Router();

// ✅ Login Route
router.post("/login", (req, res) => {
  const { email } = req.body;

  console.log("Login Attempt:", email);

  res.json({
    user: {
      email,
      name: "Tanvi",
    },
    message: "Login successful",
  });
});

// ✅ Config Route
router.get("/config", (req, res) => {
  res.json({
    title: "AI App Generator",

    auth: {
      enabled: true,
    },

    ui: {
      pages: [
        {
          type: "form",
          entity: "users",

          title: {
            en: "User Form",
            hi: "यूज़र फॉर्म",
          },

          sections: [
            {
              type: "form",

              fields: [
                {
                  name: "name",
                  label: {
                    en: "Name",
                    hi: "नाम",
                  },
                  type: "text",
                },

                {
                  name: "email",
                  label: {
                    en: "Email",
                    hi: "ईमेल",
                  },
                  type: "email",
                },
              ],
            },
          ],
        },

        {
          type: "table",
          entity: "users",

          title: {
            en: "Users Table",
            hi: "यूज़र टेबल",
          },
        },
      ],
    },
  });
});

// ✅ Dynamic Routes
router.post("/:entity", createRecord);
router.get("/:entity", getRecords);

export default router;