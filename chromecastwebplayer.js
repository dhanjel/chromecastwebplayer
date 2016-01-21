var http = require('http');
var chromecastjs = require('chromecast-js')

var port = 8000;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  
  if (query.action === undefined) {
	  response.end();	  
  }
  else {
	console.log("Incoming request.");
	console.log("Device: " + query.device);
	console.log("Action: " + query.action);	
  
	var browser = new chromecastjs.Browser();
	
	browser.on('deviceOn', function(device){
		
		if (device.config.name == query.device) {
			
			console.log("Connected to target device, " + query.device + ".");
		
			device.connect();
			device.on('connected', function(){
				
				if (query.action === "play") {
					var targetVolume = (query.volume === undefined ? 0.2 : query.volume);
					
					device.setVolume(targetVolume, function() {
						console.log ("Volume set to " + (targetVolume*100) + "%.");
						
						device.play(query.stream, 0, function(){
							console.log('Playing stream: ' + query.stream);
							response.end();
						});	
					});
				} else if (query.action === "stop") {
					device.stop(function(){
						console.log('Stopped!')						
						response.end();
					});
				}
			});			
		}
	});
  }
  
});

server.listen(port);
console.log("Server started on port " + port)