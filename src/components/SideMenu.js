import React from 'react';
import '../scss/sideMenu.scss';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="side-menu">
        <div className="header">
          <h2> <img src="../../public/assets/logo.svg" alt="logo"/> React Material</h2>
        </div>
        <div className="menus">
          <ul>
            <li className="menu">
              <span>
                <i className="material-icons">dashboard</i>
                <span className="menu-title">Dashboard</span>
              </span>
            </li>
            <li className="menu">
              <span>
                <i className="material-icons">layers</i>
                <span className="menu-title">Basic Elements</span>
              </span>
            </li>
            <li className="menu">
              <span>
                <i className="material-icons">widgets</i>
                <span className="menu-title">Widgets</span>
              </span>
            </li>
            <li className="menu">
              <span>
                <i className="material-icons">assignment</i>
                <span className="menu-title">Form Components</span>
              </span>
            </li>
            <li className="menu-collapsible menu">
              <span>
                <i className="material-icons">format_list_bulleted</i>
                <span className="menu-title">Collapsible </span>
                <i class="material-icons float-right">keyboard_arrow_down</i>
              </span>
              <ul>
                <li className="menu-collapsible-item">
                  <span>
                    <i className="material-icons">all_inbox</i>
                    <span className="menu-title">Example One</span>
                  </span>
                </li>
                <li className="menu-collapsible-item">
                  <span>
                    <i className="material-icons">commute</i>
                    <span className="menu-title">Example Two</span>
                  </span>
                </li>
                <li className="menu-collapsible-item">
                  <span>
                    <i className="material-icons">autorenew</i>
                    <span className="menu-title">Example Three</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
