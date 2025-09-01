import { getConnection } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute("SELECT NOW() AS currentTime");
    res.status(200).json({ success: true, dbTime: rows[0].currentTime });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
