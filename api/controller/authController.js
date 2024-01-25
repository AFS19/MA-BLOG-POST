import db from "../db/db.js";

export const register = (req, res) => {
  // collect data
  const [username, email, password] = req.body;
  // check existing user
  const query = `SELECT username, email FROM users WHERE username=? AND email=?`;
  db.query(query, [username, email], (error, data) => {
    if (error) return res.json([(data) => error]);
    if (data.length)
      return res.status(409).json([(data) => "this user already exists."]);
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
