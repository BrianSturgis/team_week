import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {openWidget} from './compressAPI.js';
import {imgTransform} from './compressAPI.js';
import {vidTransform} from './compressAPI.js';

// Store HTML File Input in Variable
$(document).ready(function(){
	localStorage.clear()
	$("#widget").append("<script src ='https://widget.cloudinary.com/v2.0/global/all.js' type'text/javascript'></script>");
	$("#open-widget").on('click', function(){
		openWidget();
		//After widget is opened adds event listener to console log the value of resultInfo in local storage
		$("#transform").on('click', function(){
			const fileInfo = JSON.parse(localStorage.getItem('resultInfo'));
			if((fileInfo.secure_url.match(/.mov|.mp4|.avi$/))){
				console.log ('this is a video file')
				vidTransform(fileInfo);
			} else if ((fileInfo.secure_url.match(/.jpe*g|.png|.gif|.svg$/))){
				console.log('this is an image file');
				console.log(fileInfo)
				imgTransform(fileInfo);
			}
		})
	});
});