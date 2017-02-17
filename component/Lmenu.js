import React from 'react';

export default class Lmenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
    handleChange() {
        this.props.q3(this.props.index);
  }

  render() {
    return (
			<li>
				  <a href="#" onClick={this.handleChange.bind(this)}>{this.props.item}</a>
              </li>
    )
  }
}
