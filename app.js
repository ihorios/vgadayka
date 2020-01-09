var static = require('node-static');
var file = new static.Server({ indexFile: "index.htm" });
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);