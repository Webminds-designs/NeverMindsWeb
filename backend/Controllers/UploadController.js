import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadFile = async (req, res) => {
  try {
    // upload file to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `Neverminds/${req.file.filename}`,
      folder: "Neverminds",
      use_filename: true,
      unique_filename: false,
    });
    
    // push uploaded file to uploadedFiles array
    res.status(201).json(result);

    // delete file from server
    fs.unlinkSync(req.file.path);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
};
