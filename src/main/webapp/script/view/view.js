//get ID
var idGet = localStorage.getItem('idReq');

document.getElementById('reference').textContent=`${data[idGet-1].name}`;
var poster = document.getElementById('poster');
var image= document.createElement('img');
image.src=`../poster/${idGet}.jpg`;
poster.appendChild(image);
// Add information
document.getElementById('name').innerHTML=`${data[idGet-1].name}`;
// document.getElementById('cost').innerHTML=`${data[idGet].cost}`;
document.getElementById('describe').innerHTML=`${data[idGet-1].describe}`;