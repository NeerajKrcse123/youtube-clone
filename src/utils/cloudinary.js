import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadoncloudinary = async (file) => {
    try {
        if (!file) {
            return null
        }
        const response = await cloudinary.uploader.upload(file, {
            resource_type: 'auto',
        })
        console.log("file is uploaded", response.url)
        return response

    }
    catch (err) {
        fs.unlinkSync(file)// remove the file from the locally if they got failed to upload to cloudinary
        return null
        console.log(err)
    }
}
export { uploadoncloudinary };
