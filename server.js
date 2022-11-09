"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import validate_token from "./routes/validate_token.js";
import vote from "./routes/vote.js";
import admin from "./routes/admin-api.js";
import user from "./routes/user.js";
import revalidate from "./routes/validate_token.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "https://pemirahimakom.my.id" }));

app.use("/api/validate_token", validate_token);
app.use("/api/vote", vote);
app.use("/api/admin", admin);
app.use("/api/user", user);
app.use("/api/revalidate_auth", revalidate);
app.use(mongoSanitize());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 3001, function () {
  console.log("Server started at port 3001");
});
