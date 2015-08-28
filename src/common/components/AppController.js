import styles from './styles.css';
import React from 'react';
import { RouteHandler, Link } from 'react-router';

function getOverallNavigation() {
  return [
    { name: 'app'},
    { name: 'home'},
    { name: 'about'},
    { name: 'work'},
    { name: 'work-index'},
    {
      name: 'project',
      params: {
        id: 1
      }
    }
  ]
}

export default class AppController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: getOverallNavigation()
    };
  }

  render() {

    var navItems = this.state.navItems.map( navItem => {
      return (
        <li key={navItem.name}>
          <Link to={navItem.name} params={navItem.params}>
            {navItem.name}
          </Link>
        </li>
      );
    });

    return (
      <div className={styles.app}>
        <p>This should become a sidebar with navigation</p>
        <ul className="navigation">
          {navItems}
        </ul>
        <div className="view">
          <RouteHandler/>
        </div>
      </div>
    );

  }

}
