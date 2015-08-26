import React from "react";  
import Router from "react-router";  
import routes from "../common/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
	console.log('Route picked up by React');
	console.log(Handler, state);
  React.render(<Handler/>, document.getElementById('react-app'));
});