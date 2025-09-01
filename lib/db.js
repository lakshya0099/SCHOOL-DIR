import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

let connection;

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: {
        ca: fs.readFileSync(path.join(process.cwd(), "certs/ca.pem")),
      },
    });
    console.log("✅ Connected to MySQL with CA Cert");
  }
  return connection;
}
