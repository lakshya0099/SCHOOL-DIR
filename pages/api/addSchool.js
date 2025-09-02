import { getConnection } from "@/lib/db";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const uploadDir = path.join("/tmp", "schoolImages");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = formidable({
      multiples: false,
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Form parse error:", err);
        return res.status(500).json({ error: "File upload error" });
      }

      console.log("📂 Formidable Files:", files);
      console.log("📝 Formidable Fields:", fields);

      const { name, address, city, state, contact, email_id } = fields;

      let image = null;
      if (files.image) {
        const file = Array.isArray(files.image) ? files.image[0] : files.image;

        const filePath = file.filepath;
        const fileName =
          file.originalFilename || path.basename(file.filepath);

        image = fileName;

        console.log("✅ Image saved temporarily at:", filePath);
      }

      try {
        const conn = await getConnection();
        await conn.execute(
          "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            name?.toString(),
            address?.toString(),
            city?.toString(),
            state?.toString(),
            Number(contact),
            image, 
            email_id?.toString(),
          ]
        );
        res
          .status(200)
          .json({ success: true, message: "School added successfully!" });
      } catch (error) {
        console.error("DB Insert error:", error);
        res.status(500).json({ success: false, error: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
