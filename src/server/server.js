import express from 'express';
import React from 'react';
import Router from 'react-router';
import routes from '../common/routes';

// Express
const app = express();

// set up Jade to render our basic view templates
app.set('views', './views');
app.set('view engine', 'jade');

// This server static files from /isomorphic-react/lib/server/**
// As soon as something isn't found here, we will go to the next Routing block
// where React will try to render something or return a 404 when it doesn't
// match a route
app.use(express.static(__dirname));

// Everything handled by React after we didn't find it through the
// static file server by Express
app.get('/*', function (req, res, next) {
  Router.run(routes, req.url, (Handler, state) => {
    if (state.routes.length === 0) {
      return next();
    } else {
      let content = React.renderToString(<Handler />);
      return res.render('index', { content: content });
    }
  });
}, function(req, res) {
  return res.status(404).render('404');
});

var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

var server = app.listen(port, host, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
