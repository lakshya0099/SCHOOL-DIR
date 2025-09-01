import { getConnection } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const conn = await getConnection();
      const [rows] = await conn.execute("SELECT * FROM schools");
      res.status(200).json(rows);
    } catch (error) {
      console.error("DB Fetch error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
