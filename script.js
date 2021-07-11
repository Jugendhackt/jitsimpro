
function connect (){
	roomname=document.querySelector('#roomname').value
	if(roomname==="") {roomname= "jhhh2021betahauswscat"}
	console.log("blinry", roomname)
	const domain = 'meet.jit.si';
	//const domain = 'meet02.verstehbahnhof.de';
	const options = {
		roomName: roomname,
		width: 700,
		height: 700,
		parentNode: document.querySelector('#meet'),
		configOverwrite: { startWithAudioMuted: true },
	
	};
	api = new JitsiMeetExternalAPI(domain, options);
	document.querySelector('#hidebutton').style.display="none"
	document.querySelector('#Los-BUTTON').style.display="inline"
}

function ausgabe (){
	participants=api.getParticipantsInfo()
	names=participants.map(o=>o.displayName)
	console.log(names)
	namelist= names
	if(namelist.length < 2){
		alert ("Mindestanzahl Personen: 2")
		return
	}
	do{
		namenumber=getRandomInt(namelist.length)
		name=namelist[namenumber]
		namenumber2=getRandomInt(namelist.length)
		name2=namelist[namenumber2]
	}while (namenumber===namenumber2)
	berufnummer=getRandomInt(berufe.length)
	beruf=berufe[berufnummer]
	objektnummer=getRandomInt(objekte.length)
	objekt=objekte[objektnummer]
	message=`${name} (Beruf: ${beruf}) und ${name2} (Objekt: ${objekt})` 
	document.querySelector("#ausgabenamen").innerHTML=message
	api.executeCommand('sendChatMessage',
    		message 
	);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}