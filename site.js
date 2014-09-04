var http = require('http'),
    nstatic = require('node-static'),
    fileServer = new nstatic.Server('./public'),
    port = process.env.PORT || 8080;

// create the HTTP server
http.createServer(function(req, res) {

  // listen for the request to end
  req.addListener('end', function() {

    // serve the requested file
    fileServer.serve(req, res, function(err) {

      //if the file was not found, just serve the index page
      if(err && (err.status === 404)) {
        fileServer.serveFile('/index.html', 200, {}, req, res);
      }
    });
  }).resume();
}).listen(port, function() {
  console.log('Server listening on port %s', port);
});
