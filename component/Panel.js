﻿import React from 'react';
import { findDOMNode } from 'react-dom';
import {requestp,qry3,getmenu,notifys,arranges} from '../lib/client';
import Litem from './Litem';
import Lmenu from './Lmenu';

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
	  requestp()
      .then(user => {
		  console.log('logcheck2');
		  this.setState({user});
		  })
      .catch(err => console.error(err));
	  getmenu().then(menuu=>this.setState({menuu}));
  }
    todocheck(ind, e) {
    this.state.user[ind].isdone = e;
	this.setState({user:this.state.user});
  }
  usrset(){
	  this.setState({user: this.state.user.map((item) => {
                    item.value='';
					item.isdone=false;
                    return item;
                })
			});
  }
  q3(ind) {
	  console.log(ind);
    qry3(ind).then(dsp => {
		this.setState({user: this.state.user.map((item,i) => {
                    item.name=dsp[i].name
					item.value=dsp[i].latest;
					item.isdone=false;
                    return item;
                })
			});
	})
      .catch(err => console.error(err));
  }
  notif(id){
	 var trans=[];
	 var tmp=this.state.user
	 for(var i=0;i<tmp.length;i++){
		 if(!tmp[i].value)continue;
		 trans.push({'name':tmp[i].name,'value':tmp[i].value});
	 }
	 if(id==0)notifys(trans).then(this.usrset());
	 else arranges(trans).then(this.usrset());
  }
  subm(e){
	const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
    this.setState({user: this.state.user.map((item) => {
                    if(item.isdone) item.value=text;
					item.isdone=false;
                    return item;
                })
			});
    inputNode.value = '';
  }
  render() {
    return (
      <div>
	  <ul className="nav navbar-nav navbar-right">
	  <li role="presentation" className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">查询3<span className="caret"></span></a>
		  {this.state.menuu?(<ul className="dropdown-menu">
		  {this.state.menuu.map((item,i)=>{
			  return <Lmenu key={i} item={item} index={i} q3={this.q3.bind(this)}/>
		  }
		  )}
	  </ul>):null}
	  </li>
	  <li><a href="#" onClick={this.notif.bind(this,0)}>通知</a></li>
	  <li><a href="#" onClick={this.notif.bind(this,1)}>安排</a></li>
	  </ul>
	  {this.state.user?(
        <ul className="list-group">
	  {this.state.user.map((item, i) => {
            return <Litem key={i} {...item} index={i} todocheck={this.todocheck.bind(this)}/>
          })}
	  </ul>
	   ):null}
	  <div><input type='text' ref='input'/><a href="#" onClick={e=>this.subm(e)}>发出</a></div>
     </div>
    )
  }
}
