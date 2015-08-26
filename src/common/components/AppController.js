import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class AppController extends React.Component {  
  render() {
    return (
    	<div>
    		<nav>
				<Link
					to="login"
		            params={{ number: Math.random() }}
		          	>Random number link to login
				</Link>
				<Link
					to="/"
		            params={{ number: Math.random() }}
		          	>Home
				</Link>
    		</nav>
    		<RouteHandler/>
    	</div>

    )
  }
}