//if the reqs will be async
let _async = true;
var _api = 'https://chotaapi.herokuapp.com/api/link/';
// let _api = 'http://localhost:3000/api';
// let _api = window.location.href + 'api';

function ajad(method, endPoint, data, callback)
{
    let _ajad  = new XMLHttpRequest();
    let apiURL = _api + endPoint;
    // console.log(apiURL);
    let jsonData;
    if(data) jsonData = JSON.stringify(data);
    
    _ajad.open(method, apiURL, _async);
    _ajad.setRequestHeader('Content-type','application/json; charset=utf-8');
    _ajad.onload = function()
    {
        let resJSON = JSON.parse(_ajad.responseText);
		callback(resJSON);
    };
    
    if(data) _ajad.send(jsonData);
    else _ajad.send(null);
}