import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import FlickrService from './services/FlickrService';

$(document).ready(function() {
  $("#request-token").click(function(event) {
    event.preventDefault();
    (async function() {
      const response = await FlickrService.requestToken();
      console.log(response);
    })();
  });
});