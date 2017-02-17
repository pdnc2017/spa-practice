import React from 'react';

export default class Litem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
    handleChange() {
        let isDone = !this.props.isdone;
        this.props.todocheck(this.props.index, isDone);
  }

  render() {
    return (
			<li>
				  <label>{this.props.index+1} {this.props.name}</label> 
				  <input type="checkbox" className="form-control" checked={this.props.isdone} onChange={this.handleChange.bind(this)} />
					  {this.props.value}
              </li>
    )
  }
}
