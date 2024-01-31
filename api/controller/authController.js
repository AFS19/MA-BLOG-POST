import {db} from "../db/db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // collect data
  const [username, email, password] = req.body;
  // check existing user
  const query = `SELECT username, email FROM users WHERE username=? AND email=?`;
  db.query(query, [username, email], (error, data) => {
    if (error) return res.json([(data) => error]);
    if (data.length)
      return res.status(409).json([(data) => "this user already exists."]);
    // Hash the password
    const  slat = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.has(password, salt);
    // Create new user
    const query = "INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)";
    const values = [username, email, hashPassword];
    db.query(query, values, (error) => {
      if (error) return res.json([(data) => error]);
      return res.status(200).json("user create success");
    });
  });
};
export const login = (req, res) => {
  res.json([
    (data) => {
      "login method from auth controller";
    },
  ]);
};

export const logout = (req, res) => {
  res.json([
    (data) => {
      "logout method from auth controller";
    },
  ]);
};
