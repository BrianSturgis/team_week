import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {openWidget} from './compressAPI.js';
import {imgTransform} from './compressAPI.js';
import {vidTransform} from './compressAPI.js';
import sizeDif from './sizeDif.js';

let resultSize; 
let fileInfo;

function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
	// console.log(file);
	
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}

	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;
	
	//show thumbnail for image files
	if (file.type.startsWith("image/")) {
		const reader = new FileReader();

		reader.readAsDataURL(file); // async function
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${ reader.result }')`;
		};
	} else {
		// if upload is not an image, it will remove the previous background image of thumbnail
		thumbnailElement.style.backgroundImage = null;
	}
}

document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
	const dropZoneElement = inputElement.closest(".drop-zone");
	
	dropZoneElement.addEventListener("click", e => {
		e;
		inputElement.click();
	});

	inputElement.addEventListener("change", e => {
		e;
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", e => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach(type => {
		dropZoneElement.addEventListener(type, e => {
			e;
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});

	dropZoneElement.addEventListener("drop", e => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
			resultSize = e.dataTransfer.files[0];
			let result = sizeDif(fileInfo.bytes, resultSize.size);
			if ((fileInfo.secure_url.match(/.mov|.mp4|.avi$/))) {
				$(".output").text(`Your video is ${result}% smaller!`);
			} else if ((fileInfo.secure_url.match(/.jpe*g|.png|.gif|.svg$/))) {
				$(".output").text(`Your photo is ${result}% smaller!`);
			}
		}
		dropZoneElement.classList.remove("drop-zone--over");
	});
});

async function checkFileType(fileInfo){
	if((fileInfo.secure_url.match(/.mov|.mp4|.avi$/))){
		const video = await vidTransform(fileInfo);
		window.open(video);
		$("#transform").hide();
	} else if ((fileInfo.secure_url.match(/.jpe*g|.png|.gif|.svg$/))){
		const photo = await imgTransform(fileInfo);
		window.open(photo);
		$("#transform").hide();
	}
}

// Store HTML File Input in Variable
$(document).ready(function(){
	localStorage.clear();
	$("#widget").append("<script src ='https://widget.cloudinary.com/v2.0/global/all.js' type'text/javascript'></script>");
	$("#open-widget").on('click', async function(){
		await openWidget();
		$("#transform").delay(1000).fadeIn();
		//After widget is opened adds event listener to console log the value of resultInfo in local storage
		$("#transform").on('click', async function(){
			$("#form").show()
			fileInfo = JSON.parse(localStorage.getItem('resultInfo')); 
			checkFileType(fileInfo);
			console.log(fileInfo.bytes);
		});
	});
});
