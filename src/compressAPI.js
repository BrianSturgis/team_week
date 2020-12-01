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
			localStorage.setItem('resultInfo', JSON.stringify(result.info));
		}
	});
	myWidget.open();
}

// Function to transform img aspect ratio and web opitmization 
export function imgTransform(url){
	console.log(url.secure_url, url.bytes);
	const compressedImg = cl.imageTag(`${url.public_id}.jpg`, {quality: 50}).toHtml();
	console.log(compressedImg);
}

export function vidTransform (url){
	const compressedVid = cl.videoTag(`${url.public_id}.mp4`, {quality:50}).toHtml();
	console.log(compressedVid);
}
// Check File type of whats in the Local Storage

// function typeCheck (){

// }