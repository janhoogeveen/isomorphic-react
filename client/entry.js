import React from "react";  
import Router from "react-router";  
import routes from "../common/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {  
  React.render(<Handler/>, document.getElementById('react-app'));
});