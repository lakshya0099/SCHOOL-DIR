import mysql from "mysql2/promise";

let pool;

export function getConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: {
        ca: process.env.DB_SSL_CA,
        rejectUnauthorized: false,
      },
      waitForConnections: true,
      connectionLimit: 10, 
      queueLimit: 0,       
    });
    console.log("✅ MySQL pool created (SSL, Vercel safe)");
  }
  return pool;
}
