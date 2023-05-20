//your JS code here. If required.
document.querySelector('#enterBtn').addEventListener('click',()=>{
	document.querySelector('#status').innerHTML = '';
	let h1 = document.createElement('h1');
	h1.innerText = 'Entered Metaverse';
	document.querySelector('#status').appendChild(h1);
	// document.querySelector('#status>h1').innerText = 'Entered Metaverse';
})