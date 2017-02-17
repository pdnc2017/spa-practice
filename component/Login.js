import React from 'react';
import {Link} from 'react-router';
import { findDOMNode } from 'react-dom';
import {reghandler} from '../lib/client';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  subm(e){
	const input1 = findDOMNode(this.refs.input1);
	const input2 = findDOMNode(this.refs.input2);
    const text1 = input1.value.trim();
	const text2 = input2.value.trim();
	reghandler({'name':text1,'grader':text2}).then(d=>{
	location='/';
	});
  }
  render() {
    return (
      <div style={{width: 400, margin: 'auto'}}>
        <div className="panel panel-primary">
          <div><label>名字</label><input type='text' ref='input1'/><label>书记</label><input type='text' ref='input2'/><a href="#" onClick={e=>this.subm(e)}>注册</a></div>
		  
        </div>
      </div>
    )
  }
}
