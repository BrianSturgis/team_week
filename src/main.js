import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



// Store HTML File Input in Variable
$(document).ready(function(){
  $("#upload-form").submit(function(event){
    event.preventDefault();
    const input = $("#upload").val();
    console.log(input);
  });
  
});