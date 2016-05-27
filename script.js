$('#ajax-request-btn').on('click', function() {
  // jQuery get text from txt file
  $('#output1').load('hello.txt');
  // jQuery get text from php file
  $('#output2').load('hello.php');
  
  // Pure JavaScript  output 3
  // Use xhr POST method sending uriencoded data
  var request = new XMLHttpRequest();
  request.open('POST', 'process.php');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // readyState event handler: 
  request.onreadystatechange = function () {
    // check for completed response
    if (request.readyState === 4 && request.status === 200) {
      log(request.getAllResponseHeaders());
      log(request.responseText);
      // add the response text into the output3 div
      document.getElementById('output3').innerHTML = 'javascript: ' + request.responseText;
    }
  }
  // get the value entered in the input field
  var x = document.getElementById('x').value;
  // send uriencoded data
  request.send('x=' + x);
  
  
  // jQuery Post :  output 4
  // send data from from input field as a json object
  $.post('process.php', {"x": $('#x').val()}).done(function (data) {
    // add the response text to output4 di v
    $('#output4').html('jQuery: ' + data);
  });
  log("Finished 'Click'")
});
function log(msg) { window.console.log(msg); }
