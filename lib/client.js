import browserRequest from 'browser-request';

const urlBase = '/api';

export function request(method, path, data = {}) {
  return new Promise((resolve, reject) => {
    path = path.replace(/^\/+/, '');
    method = method.toUpperCase();
    const options = {
      method,
      url: `${urlBase}/${path}`,
    };
    if (method === 'GET' || method === 'HEAD') {
      options.qs = data;
    } else {
      options.form = data;
    }
    browserRequest(options, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        let data;
        try {
          data = JSON.parse(body.toString());
        } catch (err) {
          return reject(new Error('parse JSON data error: ' + err.message));
        }
          resolve(data);     
      }
    });
  });
}

export function requestt(d) {
  return new Promise((resolve, reject) => {
    	let data;
      if (!d) data = {'count':0};
      else if(d==1) data = {'count':1,'name':'johnfen','g':1};
	  else data={'count':1,'name':'mimi','g':0};
          resolve(data);     
  });
}
export function requestp() {
  return new Promise((resolve, reject) => {
    	let data;
		data=[{'name':'budda','isdone':false,'value':''},{'name':'maliev','isdone':false,'value':''},{'name':'clons','isdone':false,'value':''},{'name':'billy','isdone':false,'value':''}];
          resolve(data);     
  });
}
export function qry1() {
  return new Promise((resolve, reject) => {
    	let data;
		data={'list':[{'time':'001','stat':'ok'},{'time':'002','stat':'ok'},{'time':'003','stat':'ok'},{'time':'004','stat':'nok'}]};
          resolve(data);     
  });
}
export function arranges(arr) {
  return new Promise((resolve, reject) => {
    	console.log(arr);
		console.log('arr');
          resolve(1);     
  });
}
export function notifys(arr) {
  return new Promise((resolve, reject) => {
    	console.log(arr);
          resolve(1);     
  });
}
export function reghandler(arr) {
  return new Promise((resolve, reject) => {
    	console.log(arr);
          resolve(1);     
  });
}
export function qry3(ind) {
  return new Promise((resolve, reject) => {
    	let data;
		data=['dd','cc','ww','mm'];
          resolve(data);     
  });
}
export function getmenu() {
  return new Promise((resolve, reject) => {
    	let data;
		data=['1月','2月','3月','4月'];
          resolve(data);     
  });
}
export function qry2() {
  return new Promise((resolve, reject) => {
    	let data;
		data={'list':[{'time':'a','stat':'ok'},{'time':'b','stat':'ok'},{'time':'c','stat':'ok'},{'time':'d','stat':'nok'}]};
          resolve(data);     
  });
}
export function getTopicList(options) {
  return request('get', 'topic/list', options);
}
export function loginUser() {
  return request('get', 'logstate');
}

export function loginUsert(d) {
  return requestt(d);
}

export function getTopicDetail(id) {
  return request('get', `topic/item/${id}`).then(ret => ret.topic);
}
