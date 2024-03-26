import {v2 as cloudinary } from "cloudinay";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY , 
    api_secret: CLOUDINARY_SECRET_KEY,
});

const uploadOnCloudinary = async (tempPath) =>{
    try{
        if(!tempPath) return null;
          const response = cloudinary.uploader.upload(tempPath,{
          resource_type: "auto"
        });
        fs.unlinkSync(tempPath);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadOnCloudinary};
