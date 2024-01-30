import mysql from "mysql";
export const db = mysql.createConnection({
  host: `127.0.0.1`,
  user: "root",
  password: "mafs.2007",
  database: "ma_blog",
});
