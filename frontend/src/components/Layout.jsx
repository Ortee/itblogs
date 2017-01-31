import React from 'react';
import Content from './Content.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div id="layout">
        <div id="nav">
          nav
        </div>
        <Content {...this.props} />
      </div>
    );
  }

}

export default Layout;
