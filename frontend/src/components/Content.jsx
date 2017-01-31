import React from 'react';
import Cards from './cards.jsx';
import Sidebar from './Sidebar.jsx';

class Content extends React.Component {

  render() {
    return (
      <div id="content">
        <Cards {...this.props}/>
        <Sidebar />
      </div>
    );
  }

}


export default Content;
