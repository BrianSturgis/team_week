import {Cloudinary} from "cloudinary-core";

export default function openWidget(){
  let img;
	let myWidget = cloudinary.createUploadWidget({
		cloudName:`${process.env.CLOUD_NAME}`,
		uploadPreset: `${process.env.UPLOAD_PRESET}`
	}, (error, result) => {
		if(!error && result && result.event === "success"){
      console.log('Done! Here is the image info: ', result.info);
      img = result.info.secure_url;
		}
	});
  myWidget.open();
}