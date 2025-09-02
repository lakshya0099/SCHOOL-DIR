import mysql from "mysql2/promise";

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
        
        ca: process.env.DB_SSL_CA,
        rejectUnauthorized: false, 
      },
    });
    console.log("✅ Connected to MySQL with SSL (Vercel safe)");
  }
  return connection;
}
