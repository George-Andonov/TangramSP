// Brew Automation Project
// Config Section
	var Kp=1;
	var Ki=1;
	var Kd=1;
	var indx = 0; 
	var pulsar = 0;


	// 	
	$(function () { 
		$("[data-toggle='tooltip']").tooltip({trigger : 'hover'}); 
		function checkTime(i) {
        return (i < 10) ? "0" + i : i;
		}

		function startTime() {
			var today = new Date(),
				h = checkTime(today.getHours()),
				m = checkTime(today.getMinutes()),
				s = checkTime(today.getSeconds());
			if (pulsar == 0) {
				document.getElementById('timeLabel').innerHTML = h + ":" + m + ":" + s + " <i class='fa fa-lightbulb-o' style='color:red' aria-hidden='true'></i>";
				pulsar=1;
			} else {
				document.getElementById('timeLabel').innerHTML = h + ":" + m + ":" + s + " <i class='fa fa-lightbulb-o' style='color:black' aria-hidden='true'></i>";
				pulsar=0;
			}
			t = setTimeout(function () {
				startTime()
			}, 1000);
		}
		startTime();
	});

// Start slideshow on load
	function startMe() {

	}

	
// Settings - modal dialogue
function settingsDialog (){
	var mymodal = $('#settingsModal');
	mymodal.modal('show');
}

// Alarm - modal dialogue
function alarmDialog (){
	var mymodal = $('#alarmModal');
	mymodal.modal('show');
}