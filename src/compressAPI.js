import {Cloudinary} from "cloudinary-core";

// Set config parameters while instantiating a new Cloudinary class
let cl = new Cloudinary({cloud_name:`${process.env.CLOUD_NAME}`, api_key:`${process.env.COMPRESS_KEY}`, api_secret:`${process.env.COMPRESS_SECRET}`, secure: true});

// Function to open widget to upload file to cloudinary, returns file url
export function openWidget(){
	let myWidget = cloudinary.createUploadWidget({
		cloudName:`${process.env.CLOUD_NAME}`,
		uploadPreset: `${process.env.UPLOAD_PRESET}`
	}, (error, result) => {
		if(!error && result && result.event === "success"){
			console.log('Done! Here is the image info: ', result.info);
			imgTransform(result.info);
		}
	});
	myWidget.open();
}

// Function to transform img aspect ratio and web opitmization 
function imgTransform(url){
	console.log(url.secure_url, url.bytes);
	const compressed = cl.imageTag(`${url.public_id}.jpg`, {quality: "auto"}).toHtml();
	console.log(compressed);
}
// Function to display the change in file size to DOM
