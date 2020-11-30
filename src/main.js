import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#submit").submit(function(event) {
  event.preventDefault();
  const img = $("input#myFile").val();
  console.log(`${img}`);
  });
});