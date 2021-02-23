function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('results').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('results').innerHTML = '';
}