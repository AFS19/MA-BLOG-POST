import mysql from "mysql";
export const db = mysql.createConnection({
  host: localhost,
  user: "root",
  password: "mafs.2007",
  database: "ma_blog",
});
