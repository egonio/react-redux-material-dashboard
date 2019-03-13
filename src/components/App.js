import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';
import Widgets from './Widgets';
import '../scss/app.scss';
import '../scss/header.scss';
import '../scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="app-container">
            <div className="left-side">
              <SideMenu />
            </div>
            <div className="right-side">
              <Header />
              <div className="main-content">
                <Route path="/" exact component={Dashboard} />
                <Route path="/widgets" exact component={Widgets} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
