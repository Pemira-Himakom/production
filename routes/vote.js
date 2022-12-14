"use strict";

import express from "express";
// import jwt from "jsonwebtoken";

// db
import Candidate from "../models/Candidate.js";
import Student from "../models/Student.js";

// middleware
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

router.route("/").post(authenticateToken, async (req, res) => {
  try {
    const { votedCandidate } = req.body;
    const { nim } = req.user;
    const date = new Date(); // get current date
    const currentDate = new Date(
      `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${`0${date.getDate()}`.slice(-2)}`
    );

    const foundStudent = await Student.findOne({ NIM: nim });
    if (!foundStudent) throw new Error("Student not found!");
    if (foundStudent.voted) throw new Error("Student already voted!");

    const batch = nim.substring(0, 2);

    const foundCandidate = await Candidate.findOneAndUpdate(
      {
        date: currentDate,
        candidateNumber: votedCandidate,
        batch: { $regex: batch },
      },
      { $inc: { voteCounter: 1 } }
    );

    if (!foundCandidate) {
      throw new Error("Candidate not found in current time span!");
    }

    // set student vote = true
    await Student.findByIdAndUpdate(foundStudent._id, { voted: true });

    res.json({
      status: true,
      message: `Vote successful!`,
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

export default router;
