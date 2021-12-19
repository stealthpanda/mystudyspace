let playingAudio = new Array();

//check if user has selected pause all and updates pauseAll

function checkPause(){
	if (playingAudio.length==0) {
		document.getElementById("pauseAll").parentNode.className="massPause hidden";
	} else{
		document.getElementById("pauseAll").parentNode.className="massPause";
	}
}

checkPause();

//play audio and displays appropriate icon.

function playSound(audioNum) {
	let sound=document.getElementById(audioNum);

	if(sound.paused){
		sound.play();
		sound.parentNode.className="audio pressed";
		playingAudio.push(audioNum);
		checkPause();
	} else {
		sound.pause();
		sound.parentNode.className="audio unpressed";
		playingAudio.splice(playingAudio.indexOf(audioNum), 1);
		checkPause();
	}
}

//Volume - controls the loudness of the sound from audioNum value. Displays appropriate icon.

function changeVolume(audioNum, val) {
	let sound=document.getElementById(audioNum);
	sound.volume = val;
	
	if (val==0) {
		sound.parentNode.querySelector("#vol").className="volume-control muted";
	} else {
		sound.parentNode.querySelector("#vol").className="volume-control";
	}
}

//Pause all - checks pauseAll status then either pause or resume all sound and display notice.

function pauseAll() {
	if (document.getElementById("pauseAll").checked) {
		for (let number of playingAudio) {
			document.getElementById(number).pause();
			document.getElementById(number).parentNode.className="audio unpressed";
			document.getElementById("pauseNotice").innerHTML="Resume &nbsp;";
		}
	} else {
		for (let number of playingAudio) {
			document.getElementById(number).play();
			document.getElementById(number).parentNode.className="audio pressed";
			document.getElementById("pauseNotice").innerHTML="Pause all &nbsp;";
		}
	}
}
