import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import openWidget from './compressAPI.js';



// Store HTML File Input in Variable
$(document).ready(function(){
	$("#widget").append("<script src ='https://widget.cloudinary.com/v2.0/global/all.js' type'text/javascript'></script>");
	$("#open-widget").on('click', function(){
		openWidget();
	});
	// $("#upload-form").submit(function(event){
	//   event.preventDefault();
	//   const input = $("#upload").val();
	//   console.log(input);
	//   newUpload.v2.uploader.upload(input, function(error, result){console.log(result, erorr)});
	// });
  
});