import React from 'react';
import {Link} from 'react-router'
import {loginUsert,qry1,qry2} from '../lib/client';

export default class TopicList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
	  loginUsert(1)
      .then(user => {
		  console.log('logcheck');
		  if(user.count==1)this.setState({user});
			  else location='/login';
		  })
      .catch(err => console.error(err));
  }
	q1() {
    qry1()
      .then(dsp => this.setState({dsp}))
      .catch(err => console.error(err));
  }
  q2() {
    qry2().then(dsp => this.setState({dsp}))
      .catch(err => console.error(err));
  }
  render() {
    const list = this.state.dsp ? this.state.dsp.list : [];
	const usr =this.state.user?this.state.user:{};
    return (
      <div>
	  {this.state.user?(
	  <div>
	  <ul className="nav navbar-nav navbar-right">
	  {this.state.user.g==1?(<li>< Link to='/panel' >管理</Link></li>):(<li></li>)}
	  <li><a href="#" onClick={this.q1.bind(this)}>查询1</a></li>
	  <li><a href="#" onClick={this.q2.bind(this)}>查询2</a></li>
	  </ul>
	  <ul className="list-group">
	  {list.map((item, i) => {
            return (
              <li key={i}>
				  {i+1} {item.time} {item.stat}
              </li>
            )
          })}
	  </ul>
	  </div>
	):(<span>initial</span>)}        
      </div>
    )
  }
}
