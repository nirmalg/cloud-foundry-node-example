var restify = require('restify')

function getEnv(req,res,next){
  res.setHeader('Content-Type', 'application/json')
  res.send(process.env);
  return next()
}

var server = restify.createServer()
server.get('/', getEnv)

server.listen(process.env.VCAP_APP_PORT || 8192, function() {
  console.log('%s listening at %s', server.name, server.url)
});

