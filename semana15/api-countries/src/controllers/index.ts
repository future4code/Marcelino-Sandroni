import express from "express";

export const allRoute = express.Router();

allRoute
  .get("/", (req, res) => {
    console.log("GET");
    res.send("<h1>Welcome to country API!</h1>");
  })
  .post("/", (req, res) => {
    console.log("POST");
  });
