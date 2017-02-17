import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{width: 400, margin: 'auto'}}>
        <div className="panel panel-primary">
          <div className="panel-heading"><Link to="/">重定</Link></div>
        </div>
      </div>
    )
  }
}
