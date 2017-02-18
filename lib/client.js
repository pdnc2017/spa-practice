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

//based on grader name in session get objarrayof member [{name:xxx}]
export function requestp() {
  return request('get', 'adminlistname').then(ret => ret.map((item) => {
  item.value='';item.isdone=false;return item;}));
}
//
export function qry1() {
  return request('get', 'qstat');
}
//
export function arranges(arr) {
  return request('post', 'adminnext',arr);
}
//
export function notifys(arr) {
  return request('post', 'notes',arr);
}
//
export function reghandler(arr) {
  return request('post', 'regis',arr);
}
export function qry3(ind) {
  return request('get', 'qlatest');
}
export function getmenu() {
  return new Promise((resolve, reject) => {
    	let data;
		data=['1月','2月','3月','4月'];
          resolve(data);     
  });
}
export function qry2() {
  return request('get', 'detstat');
}
//
export function loginUser() {
  return request('get', 'loginq');
}
