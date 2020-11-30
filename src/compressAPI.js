import {Cloudinary} from "cloudinary-core";

let newUpload = new cloudinary.Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key: `${process.env.COMPRESS_KEY}`, api_secret: `${process.env.COMPRESS_SECRET}`, secure : true});