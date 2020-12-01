import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {openWidget} from './compressAPI.js';


// Store HTML File Input in Variable
$(document).ready(function(){
	$("#widget").append("<script src ='https://widget.cloudinary.com/v2.0/global/all.js' type'text/javascript'></script>");
	$("#open-widget").on('click', async function(){
		const result = openWidget();
	});
  
});